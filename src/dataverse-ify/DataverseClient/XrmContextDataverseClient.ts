/* eslint-disable @typescript-eslint/no-unused-vars */
import { sdkify } from "..";
import { caseInsensitiveSearch, getMetadataByLogicalName } from "../../metadata/MetadataCache";
import { EntityCollection } from "../../types/EntityCollection";
import { EntityReference, toEntityReference } from "../../types/EntityReference";
import { getGuidFromHeaders, Guid } from "../../types/Guid";
import { IEntity } from "../../types/IEntity";
import { CreateRequest, CreateResponse } from "../../types/requests";
import { DeleteRequest, DeleteResponse } from "../../types/requests/Delete";
import { UpdateRequest, UpdateResponse } from "../../types/requests/Update";
import { WebApiExecuteRequest, WebApiExecuteRequestBase } from "../../types/WebApiExecuteRequest";
import { odataify } from "../odataify/odataify";
import { DataverseClient } from "./DataverseClient";

const activitypartyAttributes = ["to", "from", "cc", "bcc", "required", "optional", "organizer"];
export class XrmContextDataverseClient implements DataverseClient {
  _webApi: Xrm.WebApi;
  constructor(webApi: Xrm.WebApi) {
    this._webApi = webApi;
  }

  async create(entity: IEntity): Promise<string> {
    const record = await odataify("Create", entity);
    const response = await this._webApi.createRecord(entity.logicalName, record);
    return response.id as string;
  }

  async update(entity: IEntity): Promise<void> {
    // Get the primary key attribute
    const entityMetadata = getMetadataByLogicalName(entity.logicalName);
    const record = await odataify("Update", entity);

    let id = entity[entityMetadata.primaryIdAttribute] as string | undefined;
    // If there is no primary id attribute set, but the id is set then use that
    if (!id && entity.id) {
      id = entity.id;
    } else if (!id) {
      throw new Error("Either id or the primary id attribute must be set to update the record");
    }

    // We no longer need special handling of null values since it is now supported to null lookups inside a PATCH
    try {
      await this._webApi.updateRecord(entity.logicalName, id, record);
    } catch (ex) {
      throw new Error("Error during update:" + (ex as Error).message);
    }
  }
  async delete(entity: string | IEntity): Promise<void>;
  async delete(entityName: string, id: Guid): Promise<void>;
  async delete(entity: unknown, id?: Guid): Promise<void> {
    if (typeof entity === "string") {
      await this._webApi.deleteRecord(entity as string, id as Guid);
    } else {
      const entityValue = toEntityReference(entity as IEntity);
      await this._webApi.deleteRecord(entityValue.entityType as string, entityValue.id as string);
    }
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  async retrieve<T extends IEntity>(entityName: string, id: Guid, columnSet: string[] | boolean): Promise<T> {
    let query = "";

    const entityMetadata = getMetadataByLogicalName(entityName);
    const cols: string[] = [];
    // When retrieving the activity parties - we simulate the SDK by making virtual fields
    // for sender, to, cc, bcc, required, optional, organizer
    let hasActivityPartyExpand = false;
    // Construct the select based on the columns requested
    // true means we return all the attributes
    if (columnSet && columnSet !== true) {
      for (const attribute of columnSet as string[]) {
        if (activitypartyAttributes.indexOf(attribute) > -1) {
          hasActivityPartyExpand = true;
        } else {
          let correctedAttribute = attribute;
          // If the attribute is a navigation property then format it correctly
          if (entityMetadata.navigation) {
            const navigation = caseInsensitiveSearch(attribute, entityMetadata.navigation);
            if (navigation) {
              correctedAttribute = "_" + attribute + "_value";
            }
          }
          cols.push(correctedAttribute);
        }
      }

      query = `?$select=${(cols as string[]).join(",")}`;
      if (hasActivityPartyExpand) {
        query += `&$expand=${entityName}_activity_parties($select=activitypartyid,_partyid_value,participationtypemask)`;
      }
    }
    const response = await this._webApi.retrieveRecord(entityName, id, query);
    return (await sdkify(response, entityName)) as T;
  }

  private getEntityLogicalNameFromFetch(fetch: string): string {
    let entityLogicalName: string | undefined = undefined;
    if (typeof DOMParser != "undefined") {
      const domParser = new DOMParser();
      const parsedFetch = domParser.parseFromString(fetch, "text/html");
      const entityNameNode = parsedFetch
        .getElementsByTagName("fetch")[0]
        .getElementsByTagName("entity")[0]
        .getAttributeNode("name");
      entityLogicalName = entityNameNode ? entityNameNode.value : "";
    } else {
      // Fall back to regex for when we are running inside a pure node test environment
      const regex = /name=["']?([\w]+)["']?/gm;
      const match = regex.exec(fetch);
      entityLogicalName = match && match.length > 0 ? match[1] : "";
    }
    if (entityLogicalName) return entityLogicalName;
    else throw new Error(`Cannot find entityLogicalName from fetchxml ${fetch}`);
  }

  async retrieveMultiple<T extends IEntity>(fetchxml: string): Promise<EntityCollection<T>> {
    const logicalName = this.getEntityLogicalNameFromFetch(fetchxml);
    const results = await this._webApi.retrieveMultipleRecords(
      logicalName,
      "?fetchXml=" + encodeURIComponent(fetchxml),
    );
    const output = [];
    for (const record of results.entities) {
      const sdkified = (await sdkify(record, logicalName)) as T;
      output.push(sdkified);
    }

    return new EntityCollection(output);
  }

  async associate(
    entityName: string,
    entityId: string,
    relationship: string,
    relatedEntities: EntityReference[],
  ): Promise<void> {
    const associateRequest = new WebApiExecuteRequestBase(
      {
        boundParameter: undefined,
        parameterTypes: {},
        operationType: 2,
        operationName: "Associate",
      },
      {
        target: {
          entityType: entityName,
          id: entityId,
        },
        relatedEntities: relatedEntities.map((e) => {
          return { entityType: e.entityType, id: e.id };
        }),
        relationship: relationship,
      },
    );

    await Xrm.WebApi.online.execute(associateRequest);
  }

  async disassociate(
    entityName: string,
    entityId: string,
    relationship: string,
    relatedEntities: EntityReference[],
  ): Promise<void> {
    // Only a single disassociate can be sent at once so send in a batch request
    const disassociateRequests = relatedEntities.map(
      (e) =>
        new WebApiExecuteRequestBase(
          {
            boundParameter: undefined,
            parameterTypes: {},
            operationType: 2,
            operationName: "Disassociate",
          },
          {
            target: {
              entityType: entityName,
              id: entityId,
            },
            relatedEntityId: e.id,
            relationship: relationship,
          },
        ),
    );
    await Xrm.WebApi.online.executeMultiple(disassociateRequests);
  }

  async execute<T>(request: WebApiExecuteRequest): Promise<T | undefined> {
    // Handle CRUD execute
    const requestWebApi = await this.getExecuteRequest(request);
    const response = await this._webApi.online.execute(requestWebApi);
    const executeResponse: T | undefined = await this.getExecuteResponse<T>(request, response);
    return executeResponse;
  }

  private async getExecuteRequest(request: WebApiExecuteRequest) {
    const isCrudExecute =
      request.logicalName === "Create" || request.logicalName === "Update" || request.logicalName === "Delete";
    const requestWebApi = isCrudExecute ? await this.getCrudRequest(request) : await odataify("Action", request);
    return requestWebApi as WebApiExecuteRequest;
  }

  private async getExecuteResponse<T>(request: WebApiExecuteRequest, response: Xrm.ExecuteResponse) {
    let executeResponse: T | undefined;
    const isCrudExecuteResponse =
      request.logicalName === "Create" || request.logicalName === "Update" || request.logicalName === "Delete";
    if (isCrudExecuteResponse) {
      executeResponse = this.getCrudResponse(request, response) as T | undefined;
    } else {
      executeResponse = (await sdkify<T>(response, undefined, { allowPassthroughMapping: true })) as T | undefined;
    }
    return executeResponse;
  }

  async executeMultiple<T>(requests: (WebApiExecuteRequest | WebApiExecuteRequest[])[]): Promise<T[] | undefined> {
    // Create requests
    // There could be arrays of changesets inside the array of requests
    const webapiRequests: (WebApiExecuteRequest | WebApiExecuteRequest[])[] = [];
    const flatRequests: WebApiExecuteRequest[] = [];
    for (const batchRequest of requests) {
      if (Array.isArray(batchRequest)) {
        // Change set containing multiple requests
        const changeSet: WebApiExecuteRequest[] = [];
        for (const changeSetRequest of batchRequest as WebApiExecuteRequest[]) {
          const webApiRequest = await this.getExecuteRequest(changeSetRequest);
          changeSet.push(webApiRequest);
          flatRequests.push(changeSetRequest);
        }
        webapiRequests.push(changeSet);
      } else {
        // Batch request
        const webApiRequest = await this.getExecuteRequest(batchRequest);
        webapiRequests.push(webApiRequest);
        flatRequests.push(batchRequest);
      }
    }

    const webapiResponses = await this._webApi.online.executeMultiple(webapiRequests);
    const responses: T[] = [];
    for (let i = 0; i < webapiResponses.length; i++) {
      const response = await this.getExecuteResponse<T>(flatRequests[i], webapiResponses[i]);
      responses.push(response || ({} as T));
    }
    return responses;
  }

  private async getCrudRequest(inputRequest: WebApiExecuteRequest) {
    switch (inputRequest.logicalName) {
      case "Create": {
        const request = inputRequest as CreateRequest;
        const payload = await odataify("Create", request.target);
        return new WebApiExecuteRequestBase(
          {
            parameterTypes: {},
            boundParameter: undefined,
            operationType: 2,
            operationName: "Create",
          },
          {
            etn: request.target.logicalName,
            payload: payload,
          },
        );
      }
      case "Update": {
        const request = inputRequest as UpdateRequest;
        const targetReference = toEntityReference(request.target);
        const payload = await odataify("Update", request.target);
        return new WebApiExecuteRequestBase(
          {
            parameterTypes: {},
            boundParameter: undefined,
            operationType: 2,
            operationName: "Update",
          },
          {
            etn: targetReference.entityType,
            id: targetReference.id,
            payload: payload,
          },
        );
      }
      case "Delete": {
        const request = inputRequest as DeleteRequest;
        return new WebApiExecuteRequestBase(
          {
            parameterTypes: {},
            boundParameter: undefined,
            operationType: 2,
            operationName: "Delete",
          },
          { entityReference: { entityType: request.target.entityType, id: request.target.id } },
        );
      }
    }
    throw `Unknown CRUD request ${inputRequest.logicalName}`;
  }

  private getCrudResponse(request: WebApiExecuteRequest, response: Xrm.ExecuteResponse) {
    switch (request.logicalName) {
      case "Create": {
        return { id: getGuidFromHeaders(response.headers) } as CreateResponse;
      }
      case "Update": {
        return {} as UpdateResponse;
      }
      case "Delete": {
        return {} as DeleteResponse;
      }
    }
    return undefined;
  }
}

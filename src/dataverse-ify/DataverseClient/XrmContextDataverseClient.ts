/* eslint-disable @typescript-eslint/no-unused-vars */
import { IEntity } from "../../types/IEntity";
import { EntityCollection } from "../../types/EntityCollection";
import { Guid } from "../../types/Guid";
import { EntityReference } from "../../types/EntityReference";
import { odataify } from "../odataify/odataify";
import { sdkify } from "..";
import { caseInsensitiveSearch, getMetadataByLogicalName } from "../../metadata/MetadataCache";
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
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
      const entityValue = entity as IEntity;
      await this._webApi.deleteRecord(entityValue.logicalName, entityValue.id as string);
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
    _entityName: string,
    _entityId: string,
    _relationship: string,
    _relatedEntities: Promise<EntityReference[]>,
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async disassociate(
    _entityName: string,
    _entityId: string,
    _relationship: string,
    _relatedEntities: EntityReference[],
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async execute(request: WebApiExecuteRequest): Promise<unknown> {
    const requestWebApi = await odataify("Action", request);
    const response = await this._webApi.online.execute(requestWebApi);
    const responseText = await response.text();
    if (responseText && responseText.length > 0) {
      return JSON.parse(responseText);
    }
    return undefined;
  }
}

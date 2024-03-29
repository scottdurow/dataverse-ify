/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getMetadataByLogicalName } from "../metadata/MetadataCache";
import { WebApiExecuteRequestMetadata } from "../metadata/WebApiExecuteRequestMetadata";
import { Dictionary } from "../types/Dictionary";
import { getGuidFromODataUrl, trimGuid } from "../types/Guid";
import { IEntity } from "../types/IEntity";
import { IEntityReference, odatifyEntityReference } from "../types/IEntityReference";
import { OperationType } from "../types/OperationType";
import { AssociateRequest } from "../types/requests/AssociateRequest";
import { DisassociateRequest } from "../types/requests/DisassociateRequest";
import { RequestWithTarget } from "../types/RequestWithTarget";
import { StructuralProperty } from "../types/StructuralProperty";
import { WebApiExecuteRequest, WebApiExecuteRequestWithMetadata } from "../types/WebApiExecuteRequest";
import { WebApiRequestDefinition } from "../types/WebApiRequest";
import {
  sendBatchWebApiRequest,
  getApiPath,
  getOdataContext,
  sendWebApiRequest,
  WebApiRequest,
  WebApiResponse,
} from "./WebApiRequest";
import { requireValue } from "./utils/NullOrUndefined";
import { RetrieveMultipleResultEx } from "../types/RetrieveMultipleResult";

// Implementation of Xrm.WebApi for where Xrm.WebApi is not available
// E.g. Node Utilities or integration tests
// This also works inside the browser since it does not use nodejs specific http.request
// WebApiStatic does not really have anything to do with dataverse-ify when using sdkify and odataify
// but can be used with those functions to allow use of the WebApi outside of the Dataverse execution context
// It is also used by dataverse-gen to fetch metadata when generating early bound types of sdkify
export class WebApiBase {
  public online!: Xrm.WebApiOnline;
  public offline!: Xrm.WebApiOffline;
  public requestImplementation: WebApiRequest;
  private entitySetNames: Dictionary<string> = {};

  constructor(requestImplementation: WebApiRequest) {
    this.online = this as unknown as Xrm.WebApiOnline;
    this.requestImplementation = requestImplementation;
  }

  public getClientUrl() {
    return this.requestImplementation.server;
  }

  public isAvailableOffline(_entityLogicalName: string): boolean {
    return false;
  }

  public getRequestImplementation() {
    return this.requestImplementation as WebApiRequest;
  }

  private async getEntitySetName(logicalName: string): Promise<string> {
    let metadata = this.entitySetNames[logicalName];
    if (!metadata) {
      // request https://org.crm11.dynamics.com/api/data/v9.0/EntityDefinitions(LogicalName='account')?$select=DisplayName,IsKnowledgeManagementEnabled,EntitySetName
      const path = `EntityDefinitions(LogicalName='${logicalName}')`;
      try {
        const apiResponse = await sendWebApiRequest(
          { action: "GET", path: path, options: "?$select=EntitySetName" },
          this.requestImplementation,
        );
        if (apiResponse.data) {
          metadata = apiResponse.data["EntitySetName"] as string;
          this.entitySetNames[logicalName] = metadata;
        }
      } catch (ex) {
        throw `Cannot get entity set name for ${logicalName}:${ex}`;
      }
    }
    return metadata;
  }

  createException(message: string, ex: unknown) {
    const innerEx = ex as Error;
    if (innerEx.message !== undefined) {
      innerEx.message = message + ":" + innerEx.message;
      return innerEx;
    } else {
      return new Error(message + ":" + JSON.stringify(ex));
    }
  }

  /**
   * Creates an entity record
   * @param entityLogicalName Logical name of the entity you want to create. For example: "account".
   * @param record A JSON object defining the attributes and values for the new entity record.
   * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
   * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/createrecord External Link: createRecord (Client API reference)}
   */
  public async createRecord(entityLogicalName: string, record: unknown): Promise<IEntityReference> {
    try {
      const apiResponse = await sendWebApiRequest(
        await this.getCreateRecordRequest(entityLogicalName, record),
        this.requestImplementation,
      );
      // Get the GUID from the OData-EntityId header
      const guid = getGuidFromODataUrl(apiResponse.headers["odata-entityid"] as string);
      return {
        entityType: entityLogicalName,
        id: guid,
      } as IEntityReference;
    } catch (ex) {
      throw this.createException("Exception in createRecord", ex);
    }
  }

  private async getCreateRecordRequest(entityLogicalName: string, record: unknown) {
    const entitySetName = await this.getEntitySetName(entityLogicalName);
    return {
      action: "POST",
      path: entitySetName,
      data: JSON.stringify(record),
    } as WebApiRequestDefinition;
  }

  /**
   * Updates an entity record.
   * @param entityLogicalName The entity logical name of the record you want to update. For example: "account".
   * @param id GUID of the entity record you want to update.
   * @param Data A JSON object containing key: value pairs, where key is the property of the entity and value is the value of the property you want update.
   * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
   * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/updaterecord External Link: updateRecord (Client API reference)}
   */
  public async updateRecord(entityLogicalName: string, id: string, data: unknown): Promise<IEntityReference> {
    requireValue("entityLogicalName", entityLogicalName);
    requireValue("id", id);
    requireValue("data", data);
    try {
      await sendWebApiRequest(
        await this.getUpdateRecordRequest(entityLogicalName, id, data),
        this.requestImplementation,
      );
      return {
        entityType: entityLogicalName,
        id: id,
      } as IEntityReference;
    } catch (ex) {
      throw this.createException("Exception in updateRecord", ex);
    }
  }

  private async getUpdateRecordRequest(entityLogicalName: string, id: string, data: unknown) {
    if (!id) throw "id is undefined on update request";
    const entitySetName = await this.getEntitySetName(entityLogicalName);
    const path = `${entitySetName}(${this.toPathGuid(id)})`;
    return { action: "PATCH", path: path, data: JSON.stringify(data) } as WebApiRequestDefinition;
  }
  /**
   * Retrieves an entity record.
   * @param entityLogicalName The entity logical name of the record you want to retrieve. For example: "account".
   * @param id GUID of the entity record you want to retrieve.
   * @param options (Optional) OData system query options, $select and $expand, to retrieve your data.
   * - Use the $select system query option to limit the properties returned by including a comma-separated
   *   list of property names. This is an important performance best practice. If properties aren’t
   *   specified using $select, all properties will be returned.
   * - Use the $expand system query option to control what data from related entities is returned. If you
   *   just include the name of the navigation property, you’ll receive all the properties for related
   *   records. You can limit the properties returned for related records using the $select system query
   *   option in parentheses after the navigation property name. Use this for both single-valued and
   *   collection-valued navigation properties.
   * - You can also specify multiple query options by using & to separate the query options.
   * @example <caption>options example:</caption>
   * options: $select=name&$expand=primarycontactid($select=contactid,fullname)
   * @returns On success, returns a promise containing a JSON object with the retrieved attributes and their values.
   * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/retrieverecord External Link: retrieveRecord (Client API reference)}
   */
  public async retrieveRecord(entityLogicalName: string, id: string, options?: string): Promise<unknown> {
    requireValue("id", id);
    requireValue("entityLogicalName", entityLogicalName);
    const entitySetName = await this.getEntitySetName(entityLogicalName);
    // eslint-disable-next-line quotes
    const preferHeader = ['odata.include-annotations="*"'];
    const headers = {
      Prefer: preferHeader.join(","),
    };
    const path = `${entitySetName}(${id})`;
    const apiResponse = await sendWebApiRequest(
      {
        action: "GET",
        additionalHeaders: headers,
        path: path,
        options: options,
      },
      this.requestImplementation,
    );
    const data: unknown = apiResponse["data"];
    return data;
  }

  /**
   * Deletes an entity record.
   * @param entityLogicalName The entity logical name of the record you want to delete. For example: "account".
   * @param id GUID of the entity record you want to delete.
   * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
   * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/deleterecord External Link: deleteRecord (Client API reference)}
   */
  public async deleteRecord(entityLogicalName: string, id: string): Promise<IEntityReference> {
    requireValue("entityLogicalName", entityLogicalName);
    requireValue("id", id);

    try {
      await sendWebApiRequest(await this.getDeleteRecordRequest(entityLogicalName, id), this.requestImplementation);
      return {
        entityType: entityLogicalName,
        id: id,
      } as IEntityReference;
    } catch (ex) {
      throw this.createException("Exception in deleteRecord", ex);
    }
  }

  private async getDeleteRecordRequest(entityLogicalName: string, id: string) {
    if (!id) throw "id is undefined on delete request";

    const entitySetName = await this.getEntitySetName(entityLogicalName);
    const path = `${entitySetName}(${this.toPathGuid(id)})`;
    return { action: "DELETE", path: path } as WebApiRequestDefinition;
  }

  public async retrieveMultipleRecords(
    entityType: string,
    options?: string,
    maxPageSize?: number,
  ): Promise<Xrm.RetrieveMultipleResult> {
    try {
      const entitySetName = await this.getEntitySetName(entityType);
      // eslint-disable-next-line quotes
      const preferHeader = ['odata.include-annotations="*"'];
      if (maxPageSize !== undefined) {
        preferHeader.push(`odata.maxpagesize=${maxPageSize.toString()}`);
      }
      const headers = {
        Prefer: preferHeader.join(","),
      };
      const apiResponse = await sendWebApiRequest(
        {
          action: "GET",
          additionalHeaders: headers,
          path: entitySetName,
          options: options,
        },
        this.requestImplementation,
      );
      const data = apiResponse.data;

      return {
        entities: data["value"],
        nextLink: data["@odata.nextLink"],
        fetchXmlPagingCookie: data["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"],
        moreRecords: data["@Microsoft.Dynamics.CRM.morerecords"],
        totalRecordCount: data["@Microsoft.Dynamics.CRM.totalrecordcount"],
        totalRecordCountExceeded: data["@Microsoft.Dynamics.CRM.totalrecordcountlimitexceeded"],
      } as RetrieveMultipleResultEx;
    } catch (ex) {
      throw this.createException("Exception in retrieveMultipleRecords", ex);
    }
  }

  public async execute(request: WebApiExecuteRequestWithMetadata): Promise<Xrm.ExecuteResponse | void> {
    try {
      requireValue("Request", request);

      const requests: WebApiRequestDefinition[] | undefined = await this.getWebApiRequests(request);

      let response: WebApiResponse | undefined;
      let path = "";
      // Send the requests either as a batch or as a single request
      if (requests.length > 1) {
        response = await sendBatchWebApiRequest(requests, this.requestImplementation);
        path = getApiPath(this.requestImplementation.apiVersion) + "$batch";
      } else {
        response = await sendWebApiRequest(requests[0], this.requestImplementation);
        path = requests[0].path;
      }
      return this.createExecuteResponse(response, path);
    } catch (ex) {
      throw this.createException("Exception in execute", ex);
    }
  }

  private async getWebApiRequests(request: WebApiExecuteRequestWithMetadata) {
    const metadata = request.getMetadata();
    let requests: WebApiRequestDefinition[] | undefined;

    if (metadata.operationType === OperationType.CRUD) {
      // Special case for CRUD execute
      requests = await this.getCRUDExecute(metadata, request);
    } else {
      requests = await this.getNonCRUDExecute(metadata, request);
    }
    return requests;
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  private async getNonCRUDExecute(
    metadata: WebApiExecuteRequestMetadata,
    request: WebApiExecuteRequest,
  ): Promise<WebApiRequestDefinition[]> {
    const requestInfo = await this.parseRequest(request, metadata);
    const verb = metadata.operationType === OperationType.Action ? "POST" : "GET";
    let path = "";
    let requestPayload = {};
    let queryString = "";
    let functionParametersString = "";
    switch (metadata.operationType) {
      case OperationType.Action:
        requestPayload = requestInfo.parameterObject;
        break;
      case OperationType.Function:
        functionParametersString = requestInfo.functionParameters.join(",");
        queryString = requestInfo.queryStringValues.join("&");
        break;
    }

    path =
      functionParametersString !== ""
        ? `${metadata.operationName}(${functionParametersString})`
        : metadata.operationName;

    // There are two types of bound actions/functions - entity and entityset
    // If bound function/action then add the entity path
    if (metadata.boundParameter) {
      if (metadata.boundParameter === "entity") {
        const entityReference = requestInfo.boundParameterValue as IEntityReference;
        if (!entityReference) throw new Error("No entityReference set");
        if (!entityReference.id) throw new Error("No Id found on entity reference");
        if (!entityReference.entityType) throw new Error("No entityType found on entity reference");
        const collectionName = await this.getEntitySetName(entityReference.entityType);
        const navigationPath = odatifyEntityReference(collectionName, entityReference.id);
        path = navigationPath + "/Microsoft.Dynamics.CRM." + path;
      } else if (metadata.boundParameter === "entityset") {
        // Get the entity/table type name
        const entitySetType = metadata.parameterTypes["entityset"];
        if (!entitySetType) throw new Error("No entityset parameter provided");
        const collectionName = await this.getEntitySetName(entitySetType.typeName.replace("mscrm.", ""));
        path = `${collectionName}/Microsoft.Dynamics.CRM.${path}`;
      }
    }

    // Create the request
    return [
      {
        action: verb,
        path: path,
        options: queryString,
        data: requestPayload,
      },
    ];
  }

  // TODO: This needs refactoring - it's too complex and confusing
  // eslint-disable-next-line sonarjs/cognitive-complexity
  private async parseRequest(request: WebApiExecuteRequest, metadata: WebApiExecuteRequestMetadata) {
    let count = 0;
    const functionParameters: string[] = [];
    const queryStringValues: string[] = [];
    let boundParameterValue: IEntity | IEntityReference | undefined;
    const verb = metadata.operationType === OperationType.Action ? "POST" : "GET";

    // Currently the UCI requires us to have a class that defines the getMetadata rather than just a function

    const parameterObject: Dictionary<unknown> = {};
    for (const key of Object.keys(request)) {
      if (key === "getMetadata") continue;
      if (key === metadata.boundParameter) {
        boundParameterValue = request[key] as IEntity;
        continue;
      }
      const parameterName = `@p${count.toString()}`;
      const parameterValue: unknown = request[key];
      const parameterMetadata = metadata.parameterTypes && metadata.parameterTypes[key];

      if (parameterMetadata) {
        const structuralType = parameterMetadata.structuralProperty;
        const forUrl = verb === "GET";
        parameterObject[key] = parameterValue;
        let queryStringValue = parameterValue;
        switch (structuralType) {
          case StructuralProperty.EntityType:
            queryStringValue = await this.parseExecuteParameterEntityType(parameterValue, forUrl, parameterObject, key);
            break;
          case StructuralProperty.Collection:
          case StructuralProperty.PrimitiveType:
            queryStringValue = this.parseExecuteParameterPrimitiveType(parameterValue, parameterObject, key);
            break;
        }
        if (forUrl) {
          // For a GET request, also set the querystring
          functionParameters.push(`${key}=${encodeURIComponent(parameterName)}`);
          queryStringValues.push(
            `${parameterName}=${encodeURIComponent(queryStringValue as string | number | boolean)}`,
          );
        }
        count++;
      }
    }

    return {
      parameterObject: parameterObject,
      boundParameterValue: boundParameterValue,
      functionParameters: functionParameters,
      queryStringValues: queryStringValues,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private parseExecuteParameterPrimitiveType(parameterValue: any, parameterObject: Dictionary<unknown>, key: string) {
    const parameterType = typeof parameterValue;
    if (parameterType === "string") {
      // We need to wrap the string in single quotes
      // We also need to escape single quotes as ''
      parameterValue = `'${(parameterValue as string).replace("'", "''")}'`;
    } else {
      if (parameterValue.constructor === Date) {
        parameterValue = parameterValue.toISOString();
      } else if (parameterValue.guid) {
        // GUID are handled differently on input compared to output where they are just text strings
        parameterValue = parameterValue.guid;
        // Update the object value as well
        parameterObject[key] = parameterValue;
      } else {
        parameterValue = JSON.stringify(parameterValue);
      }
    }
    return parameterValue;
  }

  private async parseExecuteParameterEntityType(
    parameterValue: unknown,
    forUrl: boolean,
    parameterObject: Dictionary<unknown>,
    key: string,
  ) {
    {
      const valueEntityReference = parameterValue as IEntityReference;
      if (valueEntityReference.id && valueEntityReference.entityType) {
        if (forUrl) {
          // Url Entity reference
          const entitySetName = await this.getEntitySetName(valueEntityReference.entityType);
          parameterValue = JSON.stringify({
            "@odata.id": odatifyEntityReference(entitySetName, valueEntityReference.id),
          });
        } else {
          // POST entity reference
          const entityMetadata = getMetadataByLogicalName(valueEntityReference.entityType);
          const entityReferenceParam: Dictionary<string> = {};
          entityReferenceParam["@odata.type"] = "Microsoft.Dynamics.CRM." + valueEntityReference.entityType;
          entityReferenceParam[entityMetadata.primaryIdAttribute] = trimGuid(valueEntityReference.id);
          parameterObject[key] = entityReferenceParam;
        }
      } else {
        parameterValue = JSON.stringify(parameterValue);
      }
    }
    return parameterValue;
  }

  private createExecuteResponse(response: WebApiResponse, path: string): Xrm.ExecuteResponse {
    // This is a 'proxy' response to simulate the Xrm.WebApi response object returned
    // and hides the internal implementation
    const jsonPromise = new Promise<unknown>((resolve, _reject) => {
      resolve(response.data);
    });
    const responseTextPromise = new Promise<string>((_resolve, _reject) => {
      _resolve(response.body as string);
    });

    return {
      ok: true,
      json: () => {
        return jsonPromise;
      },
      text: () => {
        return responseTextPromise;
      },
      status: 200,
      statusText: "OK",
      url: path,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      headers: response.headers as any,
    } as Xrm.ExecuteResponse;
  }

  public async executeMultiple(requests: unknown[]): Promise<Xrm.ExecuteResponse[]> {
    // Create each request
    const internalRequests: (WebApiRequestDefinition | WebApiRequestDefinition[])[] = [];
    for (const request of requests) {
      if (Array.isArray(request)) {
        // Change Set
        const internalChangeSet: WebApiRequestDefinition[] = [];
        for (const changeSetRequest of request) {
          const internalChangeSetRequest = await this.getWebApiRequests(
            changeSetRequest as WebApiExecuteRequestWithMetadata,
          );
          internalChangeSetRequest.forEach((i) => internalChangeSet.push(i));
        }
        internalRequests.push(internalChangeSet);
      } else {
        // Batch Request
        const internalRequest = await this.getWebApiRequests(request as WebApiExecuteRequestWithMetadata);
        internalRequest.forEach((i) => internalRequests.push(i));
      }
    }

    const response = await sendBatchWebApiRequest(internalRequests, this.requestImplementation);
    const path = getApiPath(this.requestImplementation.apiVersion) + "$batch";
    const batchResponses = response.data["batchresponse"] as WebApiResponse[];
    const executeResponse = batchResponses.map((r) => this.createExecuteResponse(r, path));

    const responses: Xrm.ExecuteResponse[] = executeResponse;
    return responses;
  }

  private async getCRUDExecute(
    metadata: WebApiExecuteRequestMetadata,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request: Record<string, any>,
  ): Promise<WebApiRequestDefinition[]> {
    switch (metadata.operationName) {
      case "Associate": {
        const requestWithTarget = request as RequestWithTarget;
        const targetEntitySetName = await this.getEntitySetName(requestWithTarget.target.entityType);
        const associate: unknown[] = [];
        const associateRequest = request as AssociateRequest;
        for (const related of associateRequest.relatedEntities) {
          const entitySetName = await this.getEntitySetName(related.entityType);
          associate.push({
            "@odata.context": getOdataContext(this.requestImplementation.server, this.requestImplementation.apiVersion),
            "@odata.id": `${entitySetName}(${related.id})`,
          });
        }
        if (associate.length > 1) {
          const batch: WebApiRequestDefinition[] = [];
          // We need to a batch request to associate multiple related entities
          for (const record of associate) {
            batch.push({
              action: "POST",
              path: `${targetEntitySetName}(${associateRequest.target.id})/${associateRequest.relationship}/$ref`,
              data: record,
            });
          }
          return batch;
        } else {
          // Get the target and related entities
          const url = `${targetEntitySetName}(${associateRequest.target.id})/${associateRequest.relationship}/$ref`;
          return [{ action: "POST", path: url, data: JSON.stringify(associate[0]) }];
        }
      }
      case "Disassociate": {
        const requestWithTarget = request as RequestWithTarget;
        const targetEntitySetName = await this.getEntitySetName(requestWithTarget.target.entityType);
        const disassociateRequest = request as DisassociateRequest;
        // Send a delete DELETE https://develop1v9demo.crm11.dynamics.com/api/data/v9.0/contacts(ca12bd9a-7b34-e911-a8b9-002248019477)/account_primary_contact(d012bd9a-7b34-e911-a8b9-002248019477)/$ref
        let disassociateRequestRelatedEntityId = "";
        if (disassociateRequest.relatedEntityId) {
          // If clearing a lookup, then we don't supply disassociateRequest.relatedEntityId
          disassociateRequestRelatedEntityId = `(${disassociateRequest.relatedEntityId})`;
        }
        const url = `${targetEntitySetName}(${disassociateRequest.target.id})/${disassociateRequest.relationship}${disassociateRequestRelatedEntityId}/$ref`;
        return [{ action: "DELETE", path: url }];
      }
      case "Create": {
        return [await this.getCreateRecordRequest(request["etn"], request["payload"])];
      }
      case "Update": {
        return [await this.getUpdateRecordRequest(request["etn"], request["id"], request["payload"])];
      }
      case "Delete": {
        const entityReference = request["entityReference"] as IEntityReference;
        return [await this.getDeleteRecordRequest(entityReference.entityType, entityReference.id)];
      }
      default:
        throw new Error(`Unexpected operation name ${metadata.operationName}`);
    }
  }

  public async getEntityMetadata(entityName: string, attributes?: string[]): Promise<Xrm.Metadata.EntityMetadata> {
    // TODO: Cache the entity metadata like the UCI client does
    try {
      const path = `EntityDefinitions(LogicalName='${entityName}')`;
      const options = attributes !== undefined ? `?$select=${attributes.join(",")}` : undefined;
      const apiResponse = await sendWebApiRequest(
        { action: "GET", path: path, options: options },
        this.requestImplementation,
      );
      return apiResponse.data as unknown as Xrm.Metadata.EntityMetadata;
    } catch (ex) {
      throw this.createException("Exception in getEntityMetadata", ex);
    }
  }

  private toPathGuid(id: string) {
    return id?.replace(/[{}]/g, "");
  }
}

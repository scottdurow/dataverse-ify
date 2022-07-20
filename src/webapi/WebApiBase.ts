/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { getMetadataByLogicalName } from "../metadata/MetadataCache";
import { WebApiExecuteRequestMetadata } from "../metadata/WebApiExecuteRequestMetadata";
import { Dictionary } from "../types/Dictionary";
import { trimGuid } from "../types/Guid";
import { IEntity } from "../types/IEntity";
import { IEntityReference, odatifyEntityReference } from "../types/IEntityReference";
import { OperationType } from "../types/OperationType";
import { AssociateRequest } from "../types/requests/AssociateRequest";
import { DisassociateRequest } from "../types/requests/DisassociateRequest";
import { RequestWithTarget } from "../types/RequestWithTarget";
import { StructuralProperty } from "../types/StructuralProperty";
import { WebApiExecuteRequest } from "../types/WebApiExecuteRequest";
import { WebApiRequestDefinition } from "../types/WebApiRequest";
import { WebApiRequest, WebApiResponse } from "./WebApiRequest";
import { requireValue } from "./utils/NullOrUndefined";

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

  private getOdataContext(): string {
    return this.requestImplementation.server + "/$metadata#$ref";
  }

  public isAvailableOffline(_entityLogicalName: string): boolean {
    throw new Error("Not implemented");
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
        const apiResponse = await this.webApiRequest({ action: "GET", path: path, options: "?$select=EntitySetName" });
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
      const entitySetName = await this.getEntitySetName(entityLogicalName);
      const apiResponse = await this.webApiRequest({
        action: "POST",
        path: entitySetName,
        data: JSON.stringify(record),
      });
      // Get the GUID from the OData-EntityId header
      const guidMatch = /\(([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\)/g.exec(
        apiResponse.headers["odata-entityid"] as string,
      );
      if (guidMatch === null || guidMatch.length === 0)
        throw new Error("Could not find the guid in the createRecord response");
      const guid = guidMatch[1];
      return {
        entityType: entityLogicalName,
        id: guid,
      } as IEntityReference;
    } catch (ex) {
      throw this.createException("Exception in createRecord", ex);
    }
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
    requireValue("entityLogicalName is a required parameter", entityLogicalName);
    requireValue("id is a required parameter", id);
    requireValue("data is a required parameter", data);
    try {
      const entitySetName = await this.getEntitySetName(entityLogicalName);
      const path = `${entitySetName}(${this.toPathGuid(id)})`;
      await this.webApiRequest({ action: "PATCH", path: path, data: JSON.stringify(data) });
      return {
        entityType: entityLogicalName,
        id: id,
      } as IEntityReference;
    } catch (ex) {
      throw this.createException("Exception in updateRecord", ex);
    }
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
    const entitySetName = await this.getEntitySetName(entityLogicalName);
    // eslint-disable-next-line quotes
    const preferHeader = ['odata.include-annotations="*"'];
    const headers = {
      Prefer: preferHeader.join(","),
    };
    const path = `${entitySetName}(${id})`;
    const apiResponse = await this.webApiRequest({
      action: "GET",
      additionalHeaders: headers,
      path: path,
      options: options,
    });
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
    requireValue("entityLogicalName is a required parameter", entityLogicalName);
    requireValue("id is a required parameter", id);

    try {
      const entitySetName = await this.getEntitySetName(entityLogicalName);
      const path = `${entitySetName}(${this.toPathGuid(id)})`;
      await this.webApiRequest({ action: "DELETE", path: path });
      return {
        entityType: entityLogicalName,
        id: id,
      } as IEntityReference;
    } catch (ex) {
      throw this.createException("Exception in deleteRecord", ex);
    }
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
      const apiResponse = await this.webApiRequest({
        action: "GET",
        additionalHeaders: headers,
        path: entitySetName,
        options: options,
      });
      const data = apiResponse.data;

      return {
        entities: data["value"],
        nextLink: data["@odata.nextLink"],
      } as Xrm.RetrieveMultipleResult;
    } catch (ex) {
      throw this.createException("Exception in retrieveMultipleRecords", ex);
    }
  }

  public async execute(request: WebApiExecuteRequest): Promise<Xrm.ExecuteResponse | void> {
    try {
      requireValue("Request cannot be null", request);

      // Currently the UCI requires us to have a class that defines the getMetadata rather than just a function
      // otherwise the getMetadata function is serialized into the request.
      const metadata = request.getMetadata();
      const verb = metadata.operationType === OperationType.Action ? "POST" : "GET";
      let requestPayload = "";
      let queryString = "";
      let functionParametersString = "";

      const requestInfo = await this.parseRequest(request, metadata);

      switch (metadata.operationType) {
        case OperationType.CRUD:
          // Special case for Associate/Disassociate
          return await this.executeCRUD(metadata, request);
        case OperationType.Action:
          requestPayload = JSON.stringify(requestInfo.parameterObject);
          break;
        case OperationType.Function:
          functionParametersString = requestInfo.functionParameters.join(",");
          queryString = requestInfo.queryStringValues.join("&");
          break;
      }

      let path =
        functionParametersString !== ""
          ? `${metadata.operationName}(${functionParametersString})`
          : metadata.operationName;

      // If bound function/action then add the entity path
      if (requestInfo.boundParameterValue && metadata.boundParameter) {
        const entityReference = requestInfo.boundParameterValue as IEntityReference;
        if (!entityReference.id) throw new Error("No Id found on entity reference");
        if (!entityReference.entityType) throw new Error("No entityType found on entity reference");
        const collectionName = await this.getEntitySetName(entityReference.entityType);
        const navigationPath = odatifyEntityReference(collectionName, entityReference.id);
        path = navigationPath + "/Microsoft.Dynamics.CRM." + path;
      }

      // Send the request
      const apiResponse = await this.webApiRequest({
        action: verb,
        path: path,
        options: queryString,
        data: requestPayload,
      });

      return this.createExecuteResponse(apiResponse.data, apiResponse.body as string, path);
    } catch (ex) {
      throw this.createException("Exception in execute", ex);
    }
  }

  private async parseRequest(request: WebApiExecuteRequest, metadata: WebApiExecuteRequestMetadata) {
    let count = 0;
    const functionParameters: string[] = [];
    const queryStringValues: string[] = [];
    let boundParameterValue: IEntity | IEntityReference | undefined;
    const verb = metadata.operationType === OperationType.Action ? "POST" : "GET";

    const parameterObject: Dictionary<unknown> = {};
    for (const key of Object.keys(request)) {
      if (key === "getMetadata") continue;
      if (key === metadata.boundParameter) {
        boundParameterValue = request[key] as IEntity;
        continue;
      }
      const parameterName = `@p${count.toString()}`;
      let parameterValue: unknown = request[key];
      const parameterType = typeof parameterValue;
      const parameterMetadata = metadata.parameterTypes[key];

      if (parameterMetadata) {
        const structuralType = parameterMetadata.structuralProperty;
        const forUrl = verb === "GET";
        parameterObject[key] = parameterValue;
        switch (structuralType) {
          case StructuralProperty.EntityType:
            parameterValue = await this.parseExecuteParameterEntityType(parameterValue, forUrl, parameterObject, key);
            break;

          case StructuralProperty.PrimitiveType:
            parameterValue = this.parseExecuteParameterPrimitiveType(parameterType, parameterValue);
            break;
        }
        functionParameters.push(`${key}=${parameterName}`);
        queryStringValues.push(`${parameterName}=${parameterValue}`);
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

  private parseExecuteParameterPrimitiveType(parameterType: string, parameterValue: unknown) {
    if (parameterType === "string") {
      // We need to wrap the string in single quotes
      parameterValue = `'${(parameterValue as string).replace("'", "'")}'`;
    } else {
      parameterValue = JSON.stringify(parameterValue);
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

  private createExecuteResponse(responseObject: unknown, responseString: string, path: string): Xrm.ExecuteResponse {
    const jsonPromise = new Promise<unknown>((resolve, _reject) => {
      resolve(responseObject);
    });
    const responseTextPromise = new Promise<string>((_resolve, _reject) => {
      _resolve(responseString);
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
    } as Xrm.ExecuteResponse;
  }

  public async executeMultiple(_request: unknown[]): Promise<Xrm.ExecuteResponse[]> {
    throw new Error("Not implemented");
  }

  private async executeCRUD(metadata: WebApiExecuteRequestMetadata, request: unknown): Promise<void> {
    const requestWithTarget = request as RequestWithTarget;
    const targetEntitySetName = await this.getEntitySetName(requestWithTarget.target.entityType);

    // This is a special case for associate/disassociate
    switch (metadata.operationName) {
      case "Associate":
        {
          const associate: unknown[] = [];
          const associateRequest = request as AssociateRequest;
          for (const related of associateRequest.relatedEntities) {
            const entitySetName = await this.getEntitySetName(related.entityType);
            associate.push({
              "@odata.context": this.getOdataContext(),
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
                data: JSON.stringify(record),
              });
            }
            await this.batchWebApiRequest(batch);
          } else {
            // Get the target and related entities
            const url = `${targetEntitySetName}(${associateRequest.target.id})/${associateRequest.relationship}/$ref`;
            await this.webApiRequest({ action: "POST", path: url, data: JSON.stringify(associate[0]) });
          }
        }
        break;
      case "Disassociate": {
        const disassociateRequest = request as DisassociateRequest;
        // Send a delete DELETE https://develop1v9demo.crm11.dynamics.com/api/data/v9.0/contacts(ca12bd9a-7b34-e911-a8b9-002248019477)/account_primary_contact(d012bd9a-7b34-e911-a8b9-002248019477)/$ref
        let disassociateRequestRelatedEntityId = "";
        if (disassociateRequest.relatedEntityId) {
          // If clearing a lookup, then we don't supply disassociateRequest.relatedEntityId
          disassociateRequestRelatedEntityId = `(${disassociateRequest.relatedEntityId})`;
        }
        const url = `${targetEntitySetName}(${disassociateRequest.target.id})/${disassociateRequest.relationship}${disassociateRequestRelatedEntityId}/$ref`;
        await this.webApiRequest({ action: "DELETE", path: url });
        break;
      }
    }
  }

  public async getEntityMetadata(entityName: string, attributes?: string[]): Promise<Xrm.Metadata.EntityMetadata> {
    // TODO: Cache the entity metadata like the UCI client does
    try {
      const path = `EntityDefinitions(LogicalName='${entityName}')`;
      const options = attributes !== undefined ? `?$select=${attributes.join(",")}` : undefined;
      const apiResponse = await this.webApiRequest({ action: "GET", path: path, options: options });
      return apiResponse.data as unknown as Xrm.Metadata.EntityMetadata;
    } catch (ex) {
      throw this.createException("Exception in getEntityMetadata", ex);
    }
  }

  private dateReviver(_key: string, value: string) {
    if (typeof value === "string") {
      const a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
      if (a) {
        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
      }
    }
    return value;
  }

  private toPathGuid(id: string) {
    return id.replace(/[{}]/g, "");
  }

  private trimOptions(options: string | undefined) {
    if (options !== undefined && options !== null) {
      if (!options.startsWith("?")) options = `?${options}`;
    } else {
      options = "";
    }
    return options;
  }

  private getApiPath() {
    return `/api/data/v${this.requestImplementation.apiVersion}/`;
  }

  private getStandardHeaders() {
    return {
      "OData-MaxVersion": "4.0",
      "OData-Version": "4.0",
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      Connection: "keep-alive",
    };
  }

  private async batchWebApiRequest(requests: WebApiRequestDefinition[]) {
    const uri = this.requestImplementation.server + this.getApiPath() + "$batch";
    const requestBody: string[] = [];
    const standardHeaders = this.getStandardHeaders();
    const batchId = "--batch_" + new Date().getTime();
    for (const request of requests) {
      requestBody.push(batchId);
      requestBody.push("Content-Type: application/http");
      requestBody.push("Content-Transfer-Encoding: binary");
      requestBody.push(`${request.action} ${request.path}`);
      requestBody.push("Accept: application/json");
      requestBody.push("Content-Type: application/json;type=entry");
      requestBody.push("");
      requestBody.push(JSON.stringify(request.data));
    }
    requestBody.push(batchId);
    const additionalHeaders = { "content-type": `multipart/mixed;boundary=${batchId}` };

    const response = await this.requestImplementation.send(
      "POST",
      uri,
      { ...standardHeaders, ...additionalHeaders },
      requestBody.join("\n"),
    );
    this.getResponseData(response);
  }

  private async webApiRequest(req: WebApiRequestDefinition) {
    // Strip leading ? from query
    req.options = this.trimOptions(req.options);
    const uri = this.requestImplementation.server + this.getApiPath() + req.path + req.options;
    const standardHeaders = this.getStandardHeaders();
    const headers = { ...standardHeaders, ...req.additionalHeaders };
    const response = await this.requestImplementation.send(
      req.action,
      uri,
      headers,
      req.data !== null && req.data !== "" ? req.data : undefined,
    );
    response.data = this.getResponseData(response);
    return response;
  }

  // eslint-disable-next-line sonarjs/cognitive-complexity
  private getResponseData(response: WebApiResponse): Record<string, unknown> {
    let responseData: Record<string, unknown> | undefined;
    const contentType = response.headers["content-type"];
    const isJson = contentType && contentType.indexOf("application/json") > -1;
    // Check if this is a batch response
    if (response.body && response.body.startsWith("--batchresponse_")) {
      // Batch - find the boundary
      const contentTypeParts = contentType.split(";");
      // Find the boundary
      for (const key of contentTypeParts) {
        if (key.trim().startsWith("boundary=")) {
          // TODO: Get the batch responses
        }
      }
    } else {
      responseData =
        isJson && response.body && response.body.length > 0 ? JSON.parse(response.body, this.dateReviver) : null;
    }

    if (response.ok) {
      return responseData || {};
    } else if (responseData && responseData["error"]) {
      throw responseData["error"];
    } else {
      throw `HTTP Error ${response.statusText}`;
    }
  }
}
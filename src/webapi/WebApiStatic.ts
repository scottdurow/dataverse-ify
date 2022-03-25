/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthenticationContext, TokenResponse } from "adal-node";
import request = require("request");
import { ApiResponse } from "./ApiResponse";
import { IEntityReference, odatifyEntityReference } from "../types/IEntityReference";
import { WebApiExecuteRequest } from "../types/WebApiExecuteRequest";
import { WebApiExecuteRequestMetadata } from "../metadata/WebApiExecuteRequestMetadata";
import { OperationType } from "../types/OperationType";
import { IEntity } from "../types/IEntity";
import { Dictionary } from "../types/Dictionary";
import { StructuralProperty } from "../types/StructuralProperty";
import { WebApiRequestDefinition } from "../types/WebApiRequest";
import { trimGuid } from "../types/Guid";
import { AssociateRequest } from "../types/requests/AssociateRequest";
import { RequestWithTarget } from "../types/RequestWithTarget";
import { DisassociateRequest } from "../types/requests/DisassociateRequest";
import { getMetadataByLogicalName } from "../metadata/MetadataCache";
import { getAccessToken } from "./TokenCache";
import { requireValue } from "./utils/NullOrUndefined";

// Implementation of Xrm.WebApi for where Xrm.WebApi is not available
// E.g. Node Utilities or integration tests
export class WebApiStatic {
  isAvailableOffline(_entityLogicalName: string): boolean {
    throw new Error("Not implemented");
  }
  online!: Xrm.WebApiOnline;
  offline!: Xrm.WebApiOffline;
  server!: string;
  apiPath!: string;
  apiVersion!: string;
  accessToken!: string;
  entitySetNames: Dictionary<string> = {};
  webApiUrl = "";
  constructor(accessToken?: string) {
    this.online = (this as unknown) as Xrm.WebApiOnline;
    if (accessToken) {
      this.accessToken = accessToken;
    }
  }
  public getClientUrl() {
    return this.server;
  }
  getOdataContext(): string {
    return this.server + "/$metadata#$ref";
  }

  private async getEntitySetName(logicalName: string): Promise<string> {
    let metadata = this.entitySetNames[logicalName];
    if (!metadata) {
      // request https://org.crm11.dynamics.com/api/data/v9.0/EntityDefinitions(LogicalName='account')?$select=DisplayName,IsKnowledgeManagementEnabled,EntitySetName
      const path = `EntityDefinitions(LogicalName='${logicalName}')`;
      const apiResponse = await this.webApiRequest("GET", undefined, path, "?$select=EntitySetName");
      metadata = apiResponse.data["EntitySetName"] as string;
      this.entitySetNames[logicalName] = metadata;
    }
    return metadata;
  }
  async authoriseWithCdsAuthToken(server: string, apiVersion: string) {
    // Pick up the cds auth token cache
    this.server = server;
    this.apiVersion = apiVersion;
    this.apiPath = `/api/data/v${apiVersion}/`;
    this.accessToken = await getAccessToken(server.replace("https://", ""));
  }

  async authoriseUserNamePassword(
    server: string,
    apiVersion: string,
    username: string,
    password: string,
    clientId: string,
  ) {
    const authorityHostUrl = "https://login.windows.net/common";
    this.server = server;
    this.apiVersion = apiVersion;
    this.apiPath = `/api/data/v${apiVersion}/`;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    return new Promise((resolve, reject) => {
      const context = new AuthenticationContext(authorityHostUrl);
      context.acquireTokenWithUsernamePassword(this.server, username, password, clientId, (err, tokenResponse) => {
        if (err) {
          reject(err);
        } else {
          self.accessToken = (tokenResponse as TokenResponse).accessToken;
          resolve(self.accessToken);
        }
      });
    });
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
      const apiResponse = await this.webApiRequest("POST", undefined, entitySetName, undefined, JSON.stringify(record));
      // Get the GUID from the OData-EntityId header
      const guidMatch = /\(([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\)/g.exec(
        apiResponse.headers["odata-entityid"] as string,
      );
      if (guidMatch === null || guidMatch.length === 0)
        throw new Error("Could not find the guid in the createRecord response");
      const guid = guidMatch[1];
      const response = {
        entityType: entityLogicalName,
        id: guid,
      } as IEntityReference;
      //   CodeGenerator.generateCreate(entityLogicalName, record, response);
      return response;
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
  async updateRecord(entityLogicalName: string, id: string, data: unknown) {
    requireValue("entityLogicalName is a required parameter", entityLogicalName);
    requireValue("id is a required parameter", id);
    requireValue("data is a required parameter", data);
    try {
      const entitySetName = await this.getEntitySetName(entityLogicalName);
      const path = `${entitySetName}(${this.toPathGuid(id)})`;
      await this.webApiRequest("PATCH", undefined, path, undefined, JSON.stringify(data));
      const response = {
        entityType: entityLogicalName,
        id: id,
      } as IEntityReference;
      return response;
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
  async retrieveRecord(entityLogicalName: string, id: string, options?: string) {
    try {
      const entitySetName = await this.getEntitySetName(entityLogicalName);
      // eslint-disable-next-line quotes
      const preferHeader = ['odata.include-annotations="*"'];
      const headers = {
        Prefer: preferHeader.join(","),
      };
      const path = `${entitySetName}(${id})`;
      const apiResponse = await this.webApiRequest("GET", headers, path, options);
      const data: unknown = apiResponse["data"];
      return data;
    } catch (error) {
      throw error;
    }
  }
  /**
   * Deletes an entity record.
   * @param entityLogicalName The entity logical name of the record you want to delete. For example: "account".
   * @param id GUID of the entity record you want to delete.
   * @returns On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
   * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/deleterecord External Link: deleteRecord (Client API reference)}
   */
  async deleteRecord(entityLogicalName: string, id: string) {
    requireValue("entityLogicalName is a required parameter", entityLogicalName);
    requireValue("id is a required parameter", id);

    try {
      const entitySetName = await this.getEntitySetName(entityLogicalName);
      const path = `${entitySetName}(${this.toPathGuid(id)})`;
      await this.webApiRequest("DELETE", undefined, path);
      const response = {
        entityType: entityLogicalName,
        id: id,
      } as IEntityReference;
      return response;
    } catch (ex) {
      throw this.createException("Exception in deleteRecord", ex);
    }
  }
  async retrieveMultipleRecords(entityType: string, options?: string, maxPageSize?: number) {
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
      const apiResponse = await this.webApiRequest("GET", headers, entitySetName, options);
      const data = apiResponse["data"];
      const response = {
        entities: data["value"],
        nextLink: data["@odata.nextLink"],
      } as Xrm.RetrieveMultipleResult;
      //CodeGenerator.generateRetrieveMultiple(response, entityType, options, maxPageSize);
      return response;
    } catch (ex) {
      throw this.createException("Exception in retrieveMultipleRecords", ex);
    }
  }
  async execute(request: WebApiExecuteRequest) {
    try {
      requireValue("Request cannot be null", request);

      // Currently the UCI requires us to have a class that defines the getMetadata rather than just a function
      // otherwise the getMetadata function is serialised into the request.
      const metadata = request.getMetadata();
      const verb = metadata.operationType === OperationType.Action ? "POST" : "GET";
      let requestPayload = "";
      let queryString = "";
      let functionParametersString = "";
      let boundParameterValue: IEntity | IEntityReference | undefined;
      const functionParameters: string[] = [];
      const queryStringValues: string[] = [];
      let count = 0;
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
              break;
            case StructuralProperty.PrimitiveType:
              if (parameterType === "string") {
                // We need to wrap the string in single quotes
                parameterValue = `'${(parameterValue as string).replace("'", "'")}'`;
              } else {
                parameterValue = JSON.stringify(parameterValue);
              }
              break;
          }
          functionParameters.push(`${key}=${parameterName}`);
          queryStringValues.push(`${parameterName}=${parameterValue}`);
          count++;
        }
      }
      switch (metadata.operationType) {
        case OperationType.CRUD:
          // Special Case for Associate/Dissasociate
          await this.executeCRUD(metadata, request);
          return;
          break;
        case OperationType.Action:
          requestPayload = JSON.stringify(parameterObject);
          break;
        case OperationType.Function:
          functionParametersString = functionParameters.join(",");
          queryString = queryStringValues.join("&");
          break;
      }
      let path =
        functionParametersString !== ""
          ? `${metadata.operationName}(${functionParametersString})`
          : metadata.operationName;
      // If bound function/action then add the entity path
      if (boundParameterValue && metadata.boundParameter) {
        const entityReference = boundParameterValue as IEntityReference;
        if (!entityReference.id) throw new Error("No Id found on entity reference");
        if (!entityReference.entityType) throw new Error("No entityType found on entity reference");
        const collectionName = await this.getEntitySetName(entityReference.entityType);
        const navigationPath = odatifyEntityReference(collectionName, entityReference.id);
        path = navigationPath + "/Microsoft.Dynamics.CRM." + path;
      }
      const apiResponse = await this.webApiRequest(verb, undefined, path, queryString, requestPayload);
      const responseString = apiResponse["responseText"];
      const responseJson = responseString && responseString.length > 0 ? JSON.parse(apiResponse["responseText"]) : null;
      const jsonPromise = new Promise<string>((resolve, _reject) => {
        resolve(responseJson);
      });
      const responseTextPromise = new Promise<string>((_resolve, _reject) => {
        _resolve(responseString);
      });
      const executeResponse = {
        ok: true,
        json: () => {
          return jsonPromise;
        },
        text: () => {
          return responseTextPromise;
        },
        //type: "",
        //headers: [],
        status: 200,
        //body: "",
        statusText: "OK",
        url: path,
        //responseText: apiResponse["responseText"],
      } as Xrm.ExecuteResponse;

      //CodeGenerator.generateExcecute(request, executeResponse);
      return executeResponse;
    } catch (ex) {
      throw this.createException("Exception in execute", ex);
    }
    // ExecuteResponse
  }
  executeMultiple(_request: unknown[]) {
    // ExecuteResponse[]
  }

  async executeCRUD(metadata: WebApiExecuteRequestMetadata, request: unknown) {
    const requestWithTaret = request as RequestWithTarget;
    const targetEntitySetName = await this.getEntitySetName(requestWithTaret.target.entityType);
    //const relationship = request["relationship"] as string;
    // This is a special case for associate/disassociate
    switch (metadata.operationName) {
      case "Associate":
        const associate: unknown[] = [];
        const associateRequest = request as AssociateRequest;
        for (const related of associateRequest.relatedEntities) {
          const entitysetName = await this.getEntitySetName(related.entityType);
          associate.push({
            "@odata.context": this.getOdataContext(),
            "@odata.id": `${entitysetName}(${related.id})`,
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
          await this.webApiRequest("POST", undefined, url, undefined, JSON.stringify(associate[0]));
        }
        break;
      case "Disassociate":
        const disassociateRequest = request as DisassociateRequest;
        // Send a delete DELETE https://develop1v9demo.crm11.dynamics.com/api/data/v9.0/contacts(ca12bd9a-7b34-e911-a8b9-002248019477)/account_primary_contact(d012bd9a-7b34-e911-a8b9-002248019477)/$ref
        let disassociateRequestRelatedEntityId = "";
        if (disassociateRequest.relatedEntityId) {
          // If clearing a lookup, then we don't supply disassociateRequest.relatedEntityId
          disassociateRequestRelatedEntityId = `(${disassociateRequest.relatedEntityId})`;
        }
        const url = `${targetEntitySetName}(${disassociateRequest.target.id})/${disassociateRequest.relationship}${disassociateRequestRelatedEntityId}/$ref`;
        await this.webApiRequest("DELETE", undefined, url);
        break;
    }
  }

  public async getEntityMetadata(entityName: string, attributes?: string[]) {
    try {
      const path = `EntityDefinitions(LogicalName='${entityName}')`;
      const options = attributes !== undefined ? `?$select=${attributes.join(",")}` : undefined;
      const apiResponse = await this.webApiRequest("GET", undefined, path, options);
      return apiResponse["data"] as Xrm.Metadata.EntityMetadata;
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
  private async batchWebApiRequest(requests: WebApiRequestDefinition[]) {
    const uri = this.server + this.apiPath + "$batch";
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
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
    const requestOptions = {
      method: "POST",
      headers: { ...standardHeaders, ...additionalHeaders },
    } as request.CoreOptions;
    return new Promise<ApiResponse>((resolve, reject) => {
      requestOptions.body = requestBody.join("\n");
      request(uri, requestOptions, (error, response) => {
        if (error != null) reject(error);
        else {
          const apiResponse = self.getResponse(response);
          if (apiResponse.error != null) {
            reject(apiResponse.error);
          } else {
            resolve(apiResponse);
          }
        }
      });
    });
  }
  private trimOptions(options: string | undefined) {
    if (options !== undefined && options !== null) {
      if (!options.startsWith("?")) options = `?${options}`;
    } else {
      options = "";
    }
    return options;
  }
  private getStandardHeaders() {
    const standardHeaders = {
      "OData-MaxVersion": "4.0",
      "OData-Version": "4.0",
      Accept: "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${this.accessToken}`,
    };
    return standardHeaders;
  }
  private async webApiRequest(
    action: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    additionalHeaders: request.Headers | undefined,
    path: string,
    options?: string,
    data?: unknown,
  ) {
    // Strip leading ? from query
    options = this.trimOptions(options);
    const uri = this.server + this.apiPath + path + options;
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const hasData = data !== undefined && data !== null;
    const standardHeaders = this.getStandardHeaders();
    const headers = { ...standardHeaders, ...additionalHeaders };
    const requestOptions = {
      method: action,
      headers: headers,
    } as request.CoreOptions;
    return new Promise<ApiResponse>((resolve, reject) => {
      if (hasData) requestOptions.body = data;
      request(uri, requestOptions, (error, response) => {
        if (error != null) reject(error);
        else {
          const apiResponse = self.getResponse(response);
          if (apiResponse.error != null) {
            reject(apiResponse.error);
          } else {
            resolve(apiResponse);
          }
        }
      });
    });
  }
  private getResponse(response: request.Response): ApiResponse {
    let responseData: unknown = null;
    // Check if this is a batch response
    if (response.body.startsWith("--batchresponse_")) {
      // Batch - find the boundary
      const contentType = (response.headers["content-type"] as string).split(";");
      // Find the boundary
      for (const key of contentType) {
        if (key.trim().startsWith("boundary=")) {
          // TODO: Get the batch responses
        }
      }
      responseData = null;
    } else {
      responseData =
        response.body != null && response.body.length > 0 ? JSON.parse(response.body, this.dateReviver) : null;
    }
    const apiResponse = {
      responseText: response.body,
      data: responseData,
      headers: response.headers,
      statusCode: response.statusCode,
      statusMessage: response.statusMessage,
      error: null,
    } as ApiResponse;

    if (response.statusCode < 200 || response.statusCode > 299) {
      // HTTP Error
      if (apiResponse.data !== undefined && apiResponse.data.error !== undefined) {
        apiResponse.error = apiResponse.data.error;
      } else {
        apiResponse.error = `HTTP Error ${response.statusMessage}`;
      }
    }
    return apiResponse;
  }
  public request(
    action: "POST" | "PATCH" | "PUT" | "GET" | "DELETE",
    path: string,
    payload?: unknown,
    _includeFormattedValues?: boolean,
    _maxPageSize?: number,
  ) {
    debugger;

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;
    const hasData = payload !== undefined && payload !== null;
    const standardHeaders = this.getStandardHeaders();
    const headers = { ...standardHeaders };
    const requestOptions = {
      method: action,
      headers: headers,
    } as request.CoreOptions;
    return new Promise<ApiResponse>((resolve, reject) => {
      if (hasData) requestOptions.body = JSON.stringify(payload);
      request(path, requestOptions, (error, response) => {
        if (error != null) reject(error);
        else {
          const apiResponse = self.getResponse(response);
          if (apiResponse.error != null) {
            reject(apiResponse.error);
          } else {
            resolve(apiResponse);
          }
        }
      });
    });
  }
}

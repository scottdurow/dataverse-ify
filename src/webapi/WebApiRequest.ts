import { dateReviver } from "../dataverse-ify/sdkify/dateReviver";
import { WebApiRequestDefinition } from "../types/WebApiRequest";
import { HttpReader } from "./HttpReader";
import { getHeaderValue } from "./utils/GetHeaderValue";

export interface WebApiRequest {
  server: string;
  apiVersion: string;
  send(
    method: "POST" | "PATCH" | "PUT" | "GET" | "DELETE",
    uri: string,
    headers: Record<string, string>,
    payload?: unknown,
    skipStringify?: boolean,
  ): Promise<WebApiResponse>;
}

export interface WebApiResponse {
  headers: Record<string, string>;
  body?: string;
  data: Record<string, unknown>;
  status: number;
  statusText: string;
  // HTTP Response in range 200-299
  ok: boolean;
}

const CONTENT_TYPE_HEADER = "Content-Type";

export async function sendWebApiRequest(req: WebApiRequestDefinition, requestImplementation: WebApiRequest) {
  // Strip leading ? from query
  req.options = trimOptions(req.options);
  const uri = requestImplementation.server + getApiPath(requestImplementation.apiVersion) + req.path + req.options;
  const standardHeaders = getStandardHeaders();
  const headers = { ...standardHeaders, ...req.additionalHeaders };
  const response = await requestImplementation.send(
    req.action,
    uri,
    headers,
    req.data !== null && req.data !== "" ? req.data : undefined,
  );
  response.data = getResponseData(response);
  return response;
}

export async function sendBatchWebApiRequest(
  requests: (WebApiRequestDefinition | WebApiRequestDefinition[])[],
  requestImplementation: WebApiRequest,
  specificBatchId?: string,
) {
  const uri = requestImplementation.server + getApiPath(requestImplementation.apiVersion) + "$batch";
  const requestBody: string[] = [];

  const batchId = specificBatchId || new Date().getTime();
  const standardHeaders = {
    ...getStandardHeaders(`multipart/mixed;boundary=batch_${batchId}`),
    ...{ "MSCRM.SuppressDuplicateDetection": "true" },
  };

  for (const request of requests) {
    // Each request can be a single request, or a changeset of requests
    const isChangeSet = Array.isArray(request);
    requestBody.push(`--batch_${batchId}`);
    const requestChangeSet = isChangeSet ? `multipart/mixed;boundary=changeset_${batchId}` : "application/http";
    requestBody.push(`Content-Type: ${requestChangeSet}`);
    requestBody.push("Content-Transfer-Encoding: binary");
    requestBody.push("");

    if (isChangeSet) {
      // Add multiple changeset requests to a changeset
      let changeSetContentId = 1;
      for (const changeSetRequest of request) {
        requestBody.push(`--changeset_${batchId}`);
        requestBody.push("Content-Type: application/http");
        requestBody.push("Content-Transfer-Encoding: binary");
        requestBody.push(`Content-ID: ${changeSetContentId}`);
        requestBody.push("");
        requestBody.push(getRequestPart(changeSetRequest, requestImplementation.apiVersion));
        changeSetContentId++;
      }
      requestBody.push(`--changeset_${batchId}--`);
      requestBody.push(" ");
    } else {
      // Add a single request to a batch
      requestBody.push(getRequestPart(request, requestImplementation.apiVersion));
    }
  }
  requestBody.push(`--batch_${batchId}--`);
  requestBody.push(" ");

  const response = await requestImplementation.send("POST", uri, standardHeaders, requestBody.join("\n"), true);
  response.data = getResponseData(response);
  return response;
}

export function getBatchResponse(response: string, batchBoundaryName: string) {
  const reader = new HttpReader(response);

  // Find the batch boundary
  if (!batchBoundaryName) {
    const batchPartContentType = reader.readToContentType();
    batchBoundaryName = getContentTypeBoundary(batchPartContentType);
  }

  const responses: WebApiResponse[] = [];
  // First Boundary
  reader.readToBoundary(batchBoundaryName);
  while (!reader.isEndOfBoundary()) {
    const batchPartContentType = reader.readToContentType();
    // Is this a single response or a change set?
    const partContentTypeValue = batchPartContentType.substring(CONTENT_TYPE_HEADER.length + 1).trim();

    if (partContentTypeValue.startsWith("multipart/mixed")) {
      const changeSetBoundary = getContentTypeBoundary(batchPartContentType);
      // First Boundary
      reader.readToBoundary(changeSetBoundary);
      while (!reader.isEndOfBoundary()) {
        responses.push(getWebApiResponseFromBatchPart(reader, changeSetBoundary));
        // Next Boundary
        reader.readToBoundary(changeSetBoundary);
      }
    } else {
      responses.push(getWebApiResponseFromBatchPart(reader, batchBoundaryName));
    }
    // Next Boundary
    reader.readToBoundary(batchBoundaryName);
  }

  return { batchresponse: responses };
}

// Convert an http response batch part into a full response object with headers and body
export function getWebApiResponseFromBatchPart(reader: HttpReader, boundary: string) {
  const httpInfo = reader.readToHTTP();

  // Get headers
  const headers = reader.readHeaders();

  // Find the start of the content
  const body = reader.readToEndOfContent(boundary);
  const data = body.startsWith("{") ? JSON.parse(body, dateReviver) : undefined;

  return {
    ok: httpInfo.status >= 200 && httpInfo.status <= 299,
    status: httpInfo.status,
    statusText: httpInfo.statusText,
    headers: headers,
    body: body,
    data: data,
  } as WebApiResponse;
}

export function getApiPath(apiVersion: string) {
  return `/api/data/v${apiVersion}/`;
}

export function getOdataContext(server: string, apiVersion: string): string {
  return `${server}${getApiPath(apiVersion)}$metadata#$ref`;
}

function getStandardHeaders(contentType?: string) {
  return {
    "OData-MaxVersion": "4.0",
    "OData-Version": "4.0",
    Accept: "application/json",
    "Content-Type": contentType ?? "application/json; charset=UTF-8",
    Connection: "keep-alive",
  };
}

function trimOptions(options: string | undefined) {
  if (options !== undefined && options !== null) {
    if (!options.startsWith("?")) options = `?${options}`;
  } else {
    options = "";
  }
  return options;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
function getResponseData(response: WebApiResponse): Record<string, unknown> {
  let responseData: Record<string, unknown> | undefined;
  const contentType = response.headers && getHeaderValue(response.headers, CONTENT_TYPE_HEADER);
  const isJson = contentType && contentType.indexOf("application/json") > -1;
  // Check if this is a batch response
  if (contentType && response.body && response.body.startsWith("--batchresponse_")) {
    // Batch - find the boundary
    responseData = getBatchResponse(response.body, getContentTypeBoundary(contentType));
  } else {
    responseData = isJson && response.body && response.body.length > 0 ? JSON.parse(response.body, dateReviver) : null;
  }

  if (response.ok) {
    return responseData || {};
  } else if (responseData && responseData.error) {
    throw responseData.error;
  } else if (responseData && responseData.batchresponse && (responseData.batchresponse as []).length > 0) {
    // Get the last batch response error
    const responseArray = responseData.batchresponse as WebApiResponse[];
    const lastResponse = responseArray[responseArray.length - 1];
    if (lastResponse.data && lastResponse.data.error) throw lastResponse.data.error;
  }

  throw `Unexpected Error: ${response.statusText}`;
}

function getRequestPart(request: WebApiRequestDefinition, apiVersion: string) {
  const requestBodyLines: string[] = [];
  requestBodyLines.push(`${request.action} ${getApiPath(apiVersion)}${request.path} HTTP/1.1`);
  requestBodyLines.push("Accept: application/json");
  requestBodyLines.push("Content-Type: application/json;type=entry");
  requestBodyLines.push("");
  requestBodyLines.push(JSON.stringify(request.data));
  return requestBodyLines.join("\n");
}

function getContentTypeBoundary(contentType: string): string {
  const boundary = contentType.split(";").find((p) => p.trimStart().startsWith("boundary="));
  if (!boundary) throw "Boundary not found in content type";
  return boundary.trim().substring("boundary=".length);
}

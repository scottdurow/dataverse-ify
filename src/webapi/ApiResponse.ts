/* eslint-disable @typescript-eslint/no-explicit-any */
import { IncomingHttpHeaders } from "http";
export interface ApiResponse {
  headers: IncomingHttpHeaders;
  data: any;
  responseText: string;
  error: any;
  statusCode: number;
  statusMessage: string;
}

export function constructApiResponse(
  response: { body: string; headers: IncomingHttpHeaders; statusCode: number; statusMessage: string },
  responseData: unknown,
) {
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

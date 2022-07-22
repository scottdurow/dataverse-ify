import { WebApiExecuteRequest } from "../WebApiExecuteRequest";

export interface ExecuteMultipleRequest extends WebApiExecuteRequest {
  settings?: { ContinueOnError?: boolean; ReturnResponses?: boolean };
  requests: unknown[];
}

export interface ExecuteMultipleResponse {
  isFaulted: boolean;
  responses: unknown[];
}

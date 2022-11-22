import { EntityReference } from "../EntityReference";
import { WebApiExecuteRequest } from "../WebApiExecuteRequest";

export interface DeleteRequest extends WebApiExecuteRequest {
  target: EntityReference;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DeleteResponse {}

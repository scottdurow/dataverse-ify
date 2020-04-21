import { WebApiExecuteRequestMetadata } from "../metadata/WebApiExecuteRequestMetadata";

export interface WebApiExecuteRequest {
  logicalName: string;
  [index: string]: unknown;
  getMetadata(): WebApiExecuteRequestMetadata;
}

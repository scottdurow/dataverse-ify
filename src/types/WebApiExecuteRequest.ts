import { WebApiExecuteRequestMetadata } from "../metadata/WebApiExecuteRequestMetadata";

export interface WebApiExecuteRequest {
  logicalName?: string;
  [index: string]: unknown;
  getMetadata(): WebApiExecuteRequestMetadata;
}

export class WebApiExecuteRequestBase implements WebApiExecuteRequest {
  private metadata: WebApiExecuteRequestMetadata;
  [index: string]: unknown;
  logicalName = "";
  constructor(metadata: WebApiExecuteRequestMetadata, parameters?: Record<string, unknown>) {
    this.metadata = metadata;
    if (parameters) {
      for (const key in parameters) {
        this[key] = parameters[key];
      }
    }
  }
  getMetadata(): WebApiExecuteRequestMetadata {
    return this.metadata;
  }
}

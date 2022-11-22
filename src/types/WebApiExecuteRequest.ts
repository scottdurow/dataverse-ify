import { WebApiExecuteRequestMetadata } from "../metadata/WebApiExecuteRequestMetadata";

export interface WebApiExecuteRequest {
  logicalName?: string;
  [index: string]: unknown;
}

export interface WebApiExecuteRequestWithMetadata {
  logicalName?: string;
  [index: string]: unknown;
  getMetadata(): WebApiExecuteRequestMetadata;
}
export class WebApiExecuteRequestBase implements WebApiExecuteRequestWithMetadata {
  [index: string]: unknown;
  constructor(metadata: WebApiExecuteRequestMetadata, parameters?: Record<string, unknown>) {
    this.getMetadata = () => {
      return metadata;
    };
    if (parameters) {
      for (const key in parameters) {
        this[key] = parameters[key];
      }
    }
  }
  getMetadata(): WebApiExecuteRequestMetadata {
    throw "Not implemented";
  }
}

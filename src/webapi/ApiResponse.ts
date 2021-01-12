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

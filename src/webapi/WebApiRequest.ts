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

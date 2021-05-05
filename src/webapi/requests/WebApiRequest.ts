export interface WebApiRequest {
  send(
    action: "POST" | "PATCH" | "PUT" | "GET" | "DELETE",
    uri: string,
    payload?: unknown,
    includeFormattedValues?: boolean,
    maxPageSize?: number,
  ): Promise<unknown>;
}

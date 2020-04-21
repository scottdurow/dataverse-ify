export interface WebApiRequestDefinition {
  action: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  options?: string;
  data?: unknown;
}

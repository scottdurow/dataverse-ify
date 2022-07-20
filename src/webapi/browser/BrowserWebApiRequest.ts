import { WebApiRequest, WebApiResponse } from "../WebApiRequest";

export class BrowserWebApiRequest implements WebApiRequest {
  public server: string;
  public apiVersion: string;
  private accessToken?: string;

  // Supports calling the webapi from inside the browser running under the following contexts:
  // 1. Inside a model driven app where Xrm.Utility.getGlobalContext is available and the bearer token is automatically provided
  // 2. Inside a SPA (Single Page Application) where setAccessToken is called after authenticating using MSAL
  constructor(parameters?: { context?: Xrm.GlobalContext; server?: string; apiVersion?: string }) {
    if (parameters?.context) {
      this.server = parameters.context.getClientUrl();
      this.apiVersion = parameters.context.getVersion();
    } else if (parameters?.server) {
      this.server = parameters?.server;
      this.apiVersion = parameters?.apiVersion || "9.0";
    } else if (Xrm && Xrm.Utility && Xrm.Utility.getGlobalContext) {
      const context = Xrm.Utility.getGlobalContext();
      this.server = context.getClientUrl();
      this.apiVersion = context.getVersion();
      Xrm.Utility.getGlobalContext();
    } else throw "Supply either context or server to constructor";
  }
  public setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }
  async send(
    method: "POST" | "PATCH" | "PUT" | "GET" | "DELETE",
    uri: string,
    headers: Record<string, string>,
    payload?: unknown,
    skipStringify?: boolean,
  ): Promise<WebApiResponse> {
    // Construct a fully qualified URI if a relative URI is passed in.
    if (uri.charAt(0) === "/") {
      if (uri.startsWith("/api/")) {
        uri = `${this.server}${uri}`;
      } else {
        uri = `${this.server}/api/data/v${this.apiVersion}${uri}`;
      }
    }
    const accessToken = this.accessToken;

    const fetchHeaders = new Headers(headers);

    if (accessToken) {
      fetchHeaders.append("Authorization", "Bearer " + accessToken);
    }

    const response = await fetch(encodeURI(uri), {
      method: method,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body: skipStringify !== true ? JSON.stringify(payload) : (payload as any),
      headers: fetchHeaders,
    });

    const responseHeaders = {} as Record<string, string>;
    response.headers.forEach((value, key) => (responseHeaders[key] = value));
    const webApiResponse = {
      headers: responseHeaders,
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
    } as WebApiResponse;

    webApiResponse.body = await response.text();
    return webApiResponse;
  }
}

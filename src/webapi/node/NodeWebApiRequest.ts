import { WebApiRequest, WebApiResponse } from "../WebApiRequest";
import fetch, { Headers } from "node-fetch";

export class NodeWebApiRequest implements WebApiRequest {
  public server: string;
  public apiVersion: string;
  private accessToken?: string;

  constructor(server: string, apiVersion?: string, accessToken?: string) {
    this.server = server;
    this.apiVersion = apiVersion || "9.0";
    this.accessToken = accessToken;
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

    let responseBody: unknown;

    const responseHeaders = {} as Record<string, string>;
    response.headers.forEach((value, key) => (responseHeaders[key] = value));
    const webApiResponse = {
      headers: responseHeaders,
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
    } as WebApiResponse;

    webApiResponse.body = await response.text();

    if (response.ok) {
      return webApiResponse;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } else if (responseBody && (responseBody as any).error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw (responseBody as any).error;
    } else if (response.statusText) {
      throw response.statusText;
    } else {
      throw "Unexpected Error";
    }
  }
}
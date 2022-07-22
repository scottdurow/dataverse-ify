import { WebApiRequest, WebApiResponse } from "../WebApiRequest";
import fetch, { Headers } from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";

export class NodeWebApiRequest implements WebApiRequest {
  public server: string;
  public apiVersion: string;
  private accessToken?: string;
  private agent?: HttpsProxyAgent;
  constructor(server: string, apiVersion?: string, accessToken?: string) {
    this.server = server;
    this.apiVersion = apiVersion || "9.0";
    this.accessToken = accessToken;

    // For fiddler support, define the https agent
    if (process.env.https_proxy) {
      this.agent = new HttpsProxyAgent(process.env.https_proxy);
    }
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
      agent: this.agent,
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

    if (response.ok) {
      return webApiResponse;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }

    // Try and get an error from the response
    const responseObject =
      webApiResponse.body && webApiResponse.body.startsWith("{") ? JSON.parse(webApiResponse.body) : undefined;
    if (responseObject && responseObject.error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw responseObject.error;
    } else if (response.statusText) {
      throw response.statusText;
    } else {
      throw new Error("Unexpected Error");
    }
  }
}

import { WebApiRequest } from "./WebApiRequest";
import fetch, { Headers } from "node-fetch";

export class NodeWebApiRequest implements WebApiRequest {
  private accessToken?: string;

  constructor(accessToken?: string) {
    this.accessToken = accessToken;
  }

  async send(
    action: "POST" | "PATCH" | "PUT" | "GET" | "DELETE",
    uri: string,
    payload?: unknown,
    includeFormattedValues?: boolean,
    maxPageSize?: number,
  ): Promise<unknown> {
    // Construct a fully qualified URI if a relative URI is passed in.
    // This uses the static implementation of Xrm.Utility that should already be setup
    if (uri.charAt(0) === "/") {
      uri = Xrm.Utility.getGlobalContext().getClientUrl() + uri;
    }
    const accessToken = this.accessToken;

    const headers = new Headers();

    if (accessToken) {
      headers.append("Authorization", "Bearer " + accessToken);
    }
    headers.append("OData-MaxVersion", "4.0");
    headers.append("OData-Version", "4.0");
    //headers.append("Accept", "application/json");
    //headers.append("Content-Type", "application/json");
    if (maxPageSize) {
      headers.append("Prefer", "odata.maxpagesize=" + maxPageSize);
    }
    if (includeFormattedValues) {
      headers.append("Prefer", "odata.include-annotations=OData.Community.Display.V1.FormattedValue");
    }

    const response = await fetch(encodeURI(uri), {
      method: action,
      body: JSON.stringify(payload),
      headers: headers,
    });

    let responseBody: unknown;
    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.indexOf("application/json") > -1) {
      responseBody = await response.json();
    } else {
      responseBody = await response.text();
    }

    if (response.ok) {
      return responseBody;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } else if ((responseBody as any).error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      throw (responseBody as any).error;
    } else {
      throw "Unexpected Error";
    }
  }
}

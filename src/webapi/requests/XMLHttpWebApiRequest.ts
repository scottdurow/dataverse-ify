import { WebApiRequest } from "./WebApiRequest";

export class XMLHttpWebApiRequest implements WebApiRequest {
  webApiUrl: string | undefined = "";
  getOdataContext(): string {
    return this.getWebApiUrl() + "/$metadata#$ref";
  }
  getWebApiUrl(): string {
    let context: Xrm.GlobalContext;
    if (this.webApiUrl) return this.webApiUrl;

    if (window.GetGlobalContext) {
      context = window.GetGlobalContext();
    } else {
      if (window.Xrm) {
        context = window.Xrm.Utility.getGlobalContext();
      } else {
        throw new Error("Context is not available.");
      }
    }
    const clientUrl = context.getClientUrl();

    const versionParts = context
      .getVersion()
      .toString()
      .split(".");

    this.webApiUrl = `${clientUrl}/api/data/v${versionParts[0]}.${versionParts[1]}`;
    // Add the WebApi version
    return this.webApiUrl;
  }
  send(
    action: "POST" | "PATCH" | "PUT" | "GET" | "DELETE",
    uri: string,
    payload?: unknown,
    includeFormattedValues?: boolean,
    maxPageSize?: number,
  ): Promise<unknown> {
    // Construct a fully qualified URI if a relative URI is passed in.
    if (uri.charAt(0) === "/") {
      uri = this.getWebApiUrl() + uri;
    }

    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      request.open(action, encodeURI(uri), true);
      request.setRequestHeader("OData-MaxVersion", "4.0");
      request.setRequestHeader("OData-Version", "4.0");
      request.setRequestHeader("Accept", "application/json");
      request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
      if (maxPageSize) {
        request.setRequestHeader("Prefer", "odata.maxpagesize=" + maxPageSize);
      }
      if (includeFormattedValues) {
        request.setRequestHeader("Prefer", "odata.include-annotations=OData.Community.Display.V1.FormattedValue");
      }
      request.onreadystatechange = function(): void {
        if (this.readyState === 4) {
          request.onreadystatechange = null;
          switch (this.status) {
            case 200: // Success with content returned in response body.
            case 204: // Success with no content returned in response body.
              resolve(this);
              break;
            default:
              // All other statuses are unexpected so are treated like errors.
              let error;
              try {
                error = JSON.parse(request.response).error;
              } catch (e) {
                error = new Error("Unexpected Error");
              }
              reject(error);
              break;
          }
        }
      };
      request.send(JSON.stringify(payload));
    });
  }
}

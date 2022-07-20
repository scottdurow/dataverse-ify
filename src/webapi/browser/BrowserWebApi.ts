import { WebApiBase } from "../WebApiBase";
import { BrowserWebApiRequest } from "./BrowserWebApiRequest";

export class BrowserWebApi extends WebApiBase {
  constructor(server: string, apiVersion?: string) {
    const nodeWebApiImplementation = new BrowserWebApiRequest({ server, apiVersion });
    super(nodeWebApiImplementation);
  }

  public setAccessToken(accessToken: string) {
    (this.getRequestImplementation() as BrowserWebApiRequest).setAccessToken(accessToken);
  }
}

import { WebApiBase } from "../WebApiBase";
import { SPAWebApiRequest } from "./SPAWebApiRequest";

export class SPAWebApi extends WebApiBase {
  constructor(host: string, version?: string) {
    const nodeWebApiImplementation = new SPAWebApiRequest(host, version);
    super(nodeWebApiImplementation);
  }

  public setAccessToken(accessToken: string) {
    this.getSPARequestImplementation().setAccessToken(accessToken);
  }

  getSPARequestImplementation() {
    return this.requestImplementation as SPAWebApiRequest;
  }
}

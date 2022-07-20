import { WebApiBase } from "../WebApiBase";
import { acquireToken, acquireTokenByClientSecret } from "./MsalAuth/MsalNodeAuth";
import { NodeWebApiRequest } from "./NodeWebApiRequest";

export class NodeWebApi extends WebApiBase {
  constructor(host: string, version?: string) {
    const nodeWebApiImplementation = new NodeWebApiRequest(host, version);
    super(nodeWebApiImplementation);
  }

  async authorize() {
    const requestImpl = this.getRequestImplementation() as NodeWebApiRequest;
    const accessToken = await acquireToken(requestImpl.server.replace("https://", ""));
    requestImpl.setAccessToken(accessToken);
  }

  async authorizeWithSecret(tenantId: string, clientId: string, clientSecret: string) {
    const requestImpl = this.getRequestImplementation() as NodeWebApiRequest;

    const accessToken = await acquireTokenByClientSecret(
      requestImpl.server.replace("https://", ""),
      tenantId,
      clientId,
      clientSecret,
    );

    requestImpl.setAccessToken(accessToken);
  }
}

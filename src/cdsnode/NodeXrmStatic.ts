/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NodeXrmConfig } from "./config/NodeXrmConfig";
import { WebApiStatic } from "./WebApiStatic";
import { NodeXrmUtilityStatic } from "./NodeXrmUtilityStatic";
export class NodeXrmStatic implements Xrm.XrmStatic {
  Page!: Xrm.Page;
  Navigation!: Xrm.Navigation;
  Utility!: Xrm.Utility;
  Mobile!: Xrm.Mobile;
  Panel!: Xrm.Panel;
  WebApi!: Xrm.WebApi;
  Device!: Xrm.Device;
  Encoding!: Xrm.Encoding;
  static xrmInstance: NodeXrmStatic;
  static webapiInstance: WebApiStatic;
  static xrmGlobalContext: Xrm.GlobalContext;
  static async createInstance(config: NodeXrmConfig) {
    if (!NodeXrmStatic.xrmInstance) {
      NodeXrmStatic.webapiInstance = new WebApiStatic();
      NodeXrmStatic.xrmInstance = new NodeXrmStatic();
      NodeXrmStatic.xrmInstance.WebApi = (NodeXrmStatic.webapiInstance as object) as Xrm.WebApi;
      NodeXrmStatic.xrmInstance.Utility = new NodeXrmUtilityStatic();
      if (config.server) {
        await NodeXrmStatic.webapiInstance.authoriseWithCdsAuthToken(config.server.host, config.server.version);
      } else {
        throw new Error("config.server not configured");
      }
    }

    return NodeXrmStatic.xrmInstance;
  }
  static getGlobalContext() {
    return NodeXrmStatic.xrmGlobalContext;
  }
}

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NodeXrmConfig } from "./config/NodeXrmConfig";
import { WebApiStatic } from "./WebApiStatic";
import { NodeXrmUtilityStatic } from "./XrmUtilityStatic";
export class XrmStatic implements Xrm.XrmStatic {
  App!: Xrm.App;
  Page!: Xrm.Page;
  Navigation!: Xrm.Navigation;
  Utility!: Xrm.Utility;
  Mobile!: Xrm.Mobile;
  Panel!: Xrm.Panel;
  WebApi!: Xrm.WebApi;
  Device!: Xrm.Device;
  Encoding!: Xrm.Encoding;
  static xrmInstance: XrmStatic;
  static webapiInstance: WebApiStatic;
  static xrmGlobalContext: Xrm.GlobalContext;
  static async createInstance(config: NodeXrmConfig) {
    if (!XrmStatic.xrmInstance) {
      XrmStatic.webapiInstance = new WebApiStatic();
      XrmStatic.xrmInstance = new XrmStatic();
      XrmStatic.xrmInstance.WebApi = (XrmStatic.webapiInstance as object) as Xrm.WebApi;
      XrmStatic.xrmInstance.Utility = new NodeXrmUtilityStatic();
      if (config.server) {
        await XrmStatic.webapiInstance.authoriseWithCdsAuthToken(config.server.host, config.server.version);
      } else {
        throw new Error("config.server not configured");
      }
    }

    return XrmStatic.xrmInstance;
  }
  static getGlobalContext() {
    return XrmStatic.xrmGlobalContext;
  }
}

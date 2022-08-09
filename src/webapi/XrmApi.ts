import { WebApiBase } from "./WebApiBase";
import { XrmUtility } from "./XrmUtility";
// eslint-disable-next-line @microsoft/power-apps/avoid-unpub-api
export class XrmApi implements Xrm.XrmStatic {
  App!: Xrm.App;
  Page!: Xrm.Page;
  Navigation!: Xrm.Navigation;
  Utility!: Xrm.Utility;
  Mobile!: Xrm.Mobile;
  Panel!: Xrm.Panel;
  WebApi!: Xrm.WebApi;
  Device!: Xrm.Device;
  Encoding!: Xrm.Encoding;
  static xrmInstance: XrmApi;
  static webapiInstance: WebApiBase;
  static xrmGlobalContext: Xrm.GlobalContext;
  static createInstance(webApiImplementation: WebApiBase) {
    if (!XrmApi.xrmInstance) {
      XrmApi.xrmInstance = new XrmApi();
      XrmApi.xrmInstance.WebApi = webApiImplementation as unknown as Xrm.WebApi;
      XrmApi.xrmInstance.Utility = new XrmUtility();
    }
    return XrmApi.xrmInstance;
  }

  static getGlobalContext() {
    return XrmApi.xrmGlobalContext;
  }
}

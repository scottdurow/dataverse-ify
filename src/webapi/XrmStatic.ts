import { WebApiBase } from "./WebApiBase";
import { XrmUtilityStatic } from "./XrmUtilityStatic";
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
  static webapiInstance: WebApiBase;
  static xrmGlobalContext: Xrm.GlobalContext;
  static createInstance(webApiImplementation: WebApiBase) {
    if (!XrmStatic.xrmInstance) {
      XrmStatic.xrmInstance = new XrmStatic();
      XrmStatic.xrmInstance.WebApi = webApiImplementation as unknown as Xrm.WebApi;
      XrmStatic.xrmInstance.Utility = new XrmUtilityStatic();
    }
    return XrmStatic.xrmInstance;
  }

  static getGlobalContext() {
    return XrmStatic.xrmGlobalContext;
  }
}

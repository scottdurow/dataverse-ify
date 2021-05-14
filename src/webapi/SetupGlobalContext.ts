/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as config from "config";
import { NodeXrmConfig } from "./config/NodeXrmConfig";
import { XrmStatic } from "./XrmStatic";
let xrmGlobalContextSetup = false;
const defaultConfig: NodeXrmConfig = {
  proxy: {
    useproxy: false,
  },
};

export async function SetupGlobalContext() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const globalAny = global as any;
  if (xrmGlobalContextSetup) return globalAny.Xrm;
  // Create global Xrm instance so we can simulate the Xrm context
  const configFile = config.get("nodewebapi") as NodeXrmConfig;
  const xrmConfig = { ...defaultConfig, ...configFile };

  if (xrmConfig.proxy && xrmConfig.proxy.useproxy) {
    // Enable Fiddler - trust the fiddler root self-cert
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const syswidecas = require("syswide-cas");
    syswidecas.addCAs(".\\config\\FiddlerRoot.crt");

    // eslint-disable-next-line @typescript-eslint/camelcase
    process.env.https_proxy = xrmConfig.proxy.httpProxy;
    // eslint-disable-next-line @typescript-eslint/camelcase
    process.env.http_proxy = xrmConfig.proxy.httpProxy;

    //process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // Doesn't work in Jest!
  }

  const xrmInstance = await XrmStatic.createInstance(xrmConfig);
  // If Xrm is already defined by another system (e.g. xrm-mock), then re-use it
  globalAny.Xrm = globalAny.Xrm || xrmInstance;

  // Add the dataverse-ify versions of the Xrm Api
  const overrides = {
    WebApi: xrmInstance.WebApi,
    Utility: xrmInstance.Utility,
  };
  globalAny.Xrm = { ...globalAny.Xrm, ...overrides };
  globalAny.GetGlobalContext = XrmStatic.getGlobalContext;
  globalAny.NodeXrm = XrmStatic;
  xrmGlobalContextSetup = true;

  return globalAny.Xrm;
}

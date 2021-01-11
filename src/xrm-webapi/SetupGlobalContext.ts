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
  const configFile = config.get("nodecds") as NodeXrmConfig;
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

  // Check if it's set already
  if (globalAny && globalAny.Xrm) return globalAny.Xrm as XrmStatic;

  const xrmInstance = await XrmStatic.createInstance(xrmConfig);
  globalAny.Xrm = xrmInstance;
  globalAny.GetGlobalContext = XrmStatic.getGlobalContext;
  globalAny.NodeXrm = XrmStatic;
  xrmGlobalContextSetup = true;
  return xrmInstance;
}

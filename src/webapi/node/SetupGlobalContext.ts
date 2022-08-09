/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import config from "config";
import { NodeXrmConfig } from "./config/NodeXrmConfig";
import { XrmApi } from "../XrmApi";
import { NodeWebApi } from "./NodeWebApi";
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
  if (xrmConfig.server) {
    const nodeWebApi = new NodeWebApi(xrmConfig.server.host, xrmConfig.server.version);
    await nodeWebApi.authorize();
    const xrmInstance = XrmApi.createInstance(nodeWebApi);
    // If Xrm is already defined by another system (e.g. xrm-mock), then re-use it
    globalAny.Xrm = globalAny.Xrm || xrmInstance;

    // Add the dataverse-ify versions of the Xrm Api
    const overrides = {
      WebApi: xrmInstance.WebApi,
      Utility: xrmInstance.Utility,
    };
    globalAny.Xrm = { ...globalAny.Xrm, ...overrides };
  } else {
    throw new Error("config.server not configured");
  }

  globalAny.GetGlobalContext = XrmApi.getGlobalContext;
  globalAny.NodeXrm = XrmApi;
  xrmGlobalContextSetup = true;

  return globalAny.Xrm;
}

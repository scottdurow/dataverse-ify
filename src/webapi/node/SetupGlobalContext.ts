/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NodeXrmConfig } from "./config/NodeXrmConfig";
import { XrmApi } from "../XrmApi";
import { NodeWebApi } from "./NodeWebApi";
import config from "config";
let xrmGlobalContextSetup = false;
const defaultConfig: NodeXrmConfig = {
  server: {
    version: "9.1",
    host: "",
  },
};

export async function SetupGlobalContextIfUndefined() {
  // If there is an existing global Xrm defined, then don't overwrite it
  // This is good for writing tests that can run in both node and the browser
  if (typeof Xrm === "undefined") {
    // Set up the Node Xrm global context
    return await SetupGlobalContext();
  }
  return Xrm;
}

export async function SetupGlobalContext() {
  // If Setup has already been called, return the existing global Xrm Api
  if (xrmGlobalContextSetup) return global.Xrm;

  const server = getServerConfig();

  // Create the node implementation of the Xrm.WebApi and authorize
  const nodeWebApi = new NodeWebApi(server.host, server.version);
  if (server.appid && server.tenant && server.secret) {
    await nodeWebApi.authorizeWithSecret(server.tenant, server.appid, server.secret);
  } else {
    await nodeWebApi.authorize();
  }

  // Create a fake Xrm instance with the authorized node WebApi implementation
  // If Xrm is already defined by another system (e.g. xrm-mock), then re-use it
  const xrmInstance = XrmApi.createInstance(nodeWebApi);
  global.Xrm = global.Xrm || xrmInstance;

  // Add the dataverse-ify versions of the Xrm Api
  const overrides = {
    WebApi: xrmInstance.WebApi,
    Utility: xrmInstance.Utility,
  };

  global.Xrm = { ...global.Xrm, ...overrides };
  global.GetGlobalContext = XrmApi.getGlobalContext;
  xrmGlobalContextSetup = true;
  return global.Xrm;
}

export function getServerConfig() {
  // Load the config/test.yaml file if there is one. The name of the config file comes from NODE_ENV
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const configFile = config.has("nodewebapi") && (config.get("nodewebapi") as NodeXrmConfig);
  const xrmConfig = { ...defaultConfig, ...configFile };

  // Allow configuring from environment variables to support running integration tests inside a ci pipeline
  const server = {
    host: (process.env["DATAVERSEIFY_ENVIRONMENT_URL"] as string) ?? xrmConfig.server.host,
    version: (process.env["DATAVERSEIFY_API_VERSION"] as string) ?? xrmConfig.server.version,
    appid: (process.env["DATAVERSEIFY_CLIENT_ID"] as string) ?? xrmConfig.server.appid,
    tenant: (process.env["DATAVERSEIFY_TENANT"] as string) ?? xrmConfig.server.tenant,
    secret: (process.env["DATAVERSEIFY_CLIENT_SECRET"] as string) ?? xrmConfig.server.secret,
  };

  if (!server.host || server.host === "") throw new Error("Server Url not configured");
  return server;
}

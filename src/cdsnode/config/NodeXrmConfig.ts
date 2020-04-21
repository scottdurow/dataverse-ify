import { NodeXrmConfigServer } from "./NodeXrmConfigServer";
import { NodeXrmConfigProxy } from "./NodeXrmConfigProxy";
export interface NodeXrmConfig {
  runIntegrationTests?: boolean;
  server?: NodeXrmConfigServer;
  proxy?: NodeXrmConfigProxy;
}

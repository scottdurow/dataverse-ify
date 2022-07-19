import { NodeXrmConfigServer } from "./NodeXrmConfigServer";
import { NodeXrmConfigProxy } from "./NodeXrmConfigProxy";
export interface NodeXrmConfig {
  server?: NodeXrmConfigServer;
  proxy?: NodeXrmConfigProxy;
}

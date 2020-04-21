import { Dictionary } from "./Dictionary";
import { Guid } from "./Guid";
// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IEntity {
  id?: Guid;
  logicalName: string;
  [index: string]: unknown;
  formattedValues?: Dictionary<string>;
}

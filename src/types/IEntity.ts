import { Dictionary } from "./Dictionary";
import { Guid } from "./Guid";
export interface IEntity {
  id?: Guid | null;
  logicalName: string;
  [index: string]: unknown;
  formattedValues?: Dictionary<string>;
}

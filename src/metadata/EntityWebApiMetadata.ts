import { Dictionary } from "../types/Dictionary";

export interface EntityWebApiMetadata {
  typeName?: string;
  logicalName: string;
  collectionName: string;
  primaryIdAttribute: string;
  attributeTypes: Dictionary<string>;
  navigation?: Dictionary<string[]>;
}

import { getMetadataCache } from "./MetadataCache";
import { Dictionary } from "../types/Dictionary";
export function fixWebresourceXrm(): void {
  // This is a hack to fix a bug in the UCI where the entitySetNames are not set
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const windowStatic: any = window;
  if (windowStatic.ENTITY_SET_NAMES) return;

  const metadata = getMetadataCache();
  const entNames: Dictionary<string> = {};
  for (const entity in metadata.entitySetNames) {
    entNames[entity] = metadata.entitySetNames[entity];
  }

  windowStatic.ENTITY_SET_NAMES = JSON.stringify(entNames);
  const primaryKeys: Dictionary<string> = {};
  for (const entity in metadata.entities) {
    primaryKeys[entity] = metadata.entities[entity].primaryIdAttribute;
  }
  windowStatic.ENTITY_PRIMARY_KEYS = JSON.stringify(primaryKeys);
}

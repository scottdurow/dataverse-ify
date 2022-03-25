import { Dictionary } from "../types/Dictionary";
import { EntityWebApiMetadata } from "./EntityWebApiMetadata";
import { WebApiExecuteRequestMetadata } from "./WebApiExecuteRequestMetadata";
import { IEntity } from "../types/IEntity";
import { isNullOrUndefined } from "../webapi/utils/NullOrUndefined";
export let _metadataCache: MetadataCache = { entities: {}, entitySetNames: {}, actions: {} };

export interface MetadataCache {
  entitySetNames?: Dictionary<string>;
  entities?: Dictionary<EntityWebApiMetadata>;
  actions?: Dictionary<WebApiExecuteRequestMetadata>;
}
export function setMetadataCache(metadataCache: MetadataCache): void {
  _metadataCache = { ..._metadataCache, ...metadataCache };

  // Add any EntitySetNames
  _metadataCache.entitySetNames = _metadataCache.entitySetNames || {};
  for (const logicalName in metadataCache.entities) {
    _metadataCache.entitySetNames[logicalName] = metadataCache.entities[logicalName].collectionName;
  }
}
export function getMetadataCache(): MetadataCache {
  if (isNullOrUndefined(_metadataCache)) {
    throw new Error("Metadata cache is not initialised. Ensure that setMetadata is called");
  }
  return _metadataCache;
}
export function getMetadataByLogicalName(logicalName: string): EntityWebApiMetadata {
  const metadataCache = getMetadataCache();
  const metadata = metadataCache.entities && (metadataCache.entities[logicalName] as EntityWebApiMetadata);
  if (!metadata) throw new Error(`Metadata not found for ${logicalName}. Please create the early bound types.`);
  return metadata;
}
const entitySetNames: Dictionary<string> = {};
export function getMetadataFromEntitySet(entitySetName: string): EntityWebApiMetadata {
  const metadataCache = getMetadataCache();
  if (metadataCache.entities) {
    // Check the metadata
    for (const logicalName of Object.keys(metadataCache.entities)) {
      // Check logical name
      const metadata = metadataCache.entities[logicalName] as EntityWebApiMetadata;
      if (metadata.collectionName === entitySetName) return metadata;
    }
  }
  throw new Error(`Cannot find entity metadata for ${entitySetName}. Please generate early bound types`);
}
export async function getEntitySetName(entityLogicalName: string): Promise<string> {
  const metadataCache = getMetadataCache();
  if (metadataCache.entitySetNames) {
    // Check the generated metadata
    const metadata = metadataCache.entitySetNames[entityLogicalName];
    if (metadata !== undefined) {
      return metadata;
    }
  }
  // Check the cache
  if (entitySetNames[entityLogicalName] !== undefined) {
    return entitySetNames[entityLogicalName];
  }
  // Lookup the entity set name from the logical name
  // We only lookup the entityset names automatically at the moment
  try {
    const entityMetadata = await Xrm.Utility.getEntityMetadata(entityLogicalName, ["EntitySetName"]);
    entitySetNames[entityLogicalName] = entityMetadata.EntitySetName;
    return entityMetadata.EntitySetName;
  } catch (ex) {
    throw new Error(
      `Just-In-Time retreival of EntitySetName for '${entityLogicalName}' failed: ${ex}\nIdeally you should use setMetadataCache`,
    );
  }
  //throw new Error(`Cannot find entity metadata for ${entityLogicalName}. Please generate early bound types`);
}
export function getMetadata(entity: IEntity): EntityWebApiMetadata {
  const logicalName = entity.logicalName;
  return getMetadataByLogicalName(logicalName);
}

export function caseInsensitiveSearch<T>(key: string, values: Dictionary<T>): { key: string; value: T } | undefined {
  key = key.toLowerCase();
  for (const index in values) {
    if (index.toLowerCase() === key) {
      return {
        key: index,
        value: values[index],
      };
    }
  }
  return undefined;
}

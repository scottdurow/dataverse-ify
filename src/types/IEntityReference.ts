import { trimGuid } from "./Guid";
import { Entity } from "./Entity";
import { IEntity } from "./IEntity";
import { getMetadata, getEntitySetName } from "../metadata/MetadataCache";

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IEntityReference {
  entityType: string;
  id: string;
}
export function odatifyEntityReference(entitySetName: string, id: string): string {
  return `${entitySetName}(${trimGuid(id)})`;
}
export async function getNavigationPathForEntityReference(
  entity: IEntity,
  attributeLogicalName: string,
): Promise<string> {
  const metadata = getMetadata(entity);
  // Does the entity contain the metadata for the navigation property?
  if (metadata != null && metadata.navigation && metadata.navigation[attributeLogicalName] != undefined) {
    //const navigation = metadata.navigation[attributeLogicalName] as string[];
    const entityReference = entity[attributeLogicalName] as IEntityReference;
    const entitySetName = await getEntitySetName(entityReference.entityType);
    if (!entityReference.id) throw new Error(`No id set on entityreference for ${attributeLogicalName}`);
    return odatifyEntityReference(entitySetName, entityReference.id);
  }
  const collectionName = await Entity.getCollectionNameForEntity(attributeLogicalName);
  if (collectionName) {
    if (!entity.id) throw new Error(`No id set on entityreference for ${attributeLogicalName}`);
    return odatifyEntityReference(collectionName, entity.id);
  }
  throw new Error(`Cannot find navigation metadata for ${attributeLogicalName}`);
}

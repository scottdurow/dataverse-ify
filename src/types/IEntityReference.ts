import { trimGuid } from "./Guid";
import { Entity } from "./Entity";
import { IEntity } from "./IEntity";

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IEntityReference {
  entityType: string;
  id: string;
}
export function odatifyEntityReference(entitySetName: string, id: string): string {
  // We set null ids to string null so we can pick up and run a disassociate
  return `${entitySetName}(${id === null ? "null" : trimGuid(id)})`;
}
export async function getNavigationPathForEntityReference(
  entity: IEntity,
  attributeLogicalName: string,
): Promise<string> {
  const entityReference = entity[attributeLogicalName] as IEntityReference;
  const collectionName = await Entity.getCollectionNameForEntity(entityReference.entityType);
  if (collectionName) {
    return odatifyEntityReference(collectionName, entityReference.id);
  }
  throw new Error(`Cannot find navigation metadata for ${attributeLogicalName}`);
}

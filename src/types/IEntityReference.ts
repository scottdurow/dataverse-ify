import { trimGuid } from "./Guid";
import { IEntity } from "./IEntity";
import { getEntitySetName } from "../metadata";

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
  const collectionName = await getEntitySetName(entityReference.entityType);
  if (collectionName) {
    return odatifyEntityReference(collectionName, entityReference.id);
  }
  throw new Error(`Cannot find navigation metadata for ${attributeLogicalName}`);
}

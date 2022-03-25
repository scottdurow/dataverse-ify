import { IEntity } from "./IEntity";
import { Guid } from "./Guid";
import { getMetadata } from "../metadata/MetadataCache";

export class EntityReference {
  constructor(logicalName?: string, id?: Guid | null, name?: string) {
    this.entityType = logicalName;
    this.id = id as string | undefined;
    this.name = name;
  }
  entityType?: string;
  id?: string;
  name?: string;
}

export function toEntityReference(record: IEntity): EntityReference {
  let id = record.id;
  // Set the id field if not already
  if (id === undefined || id === null) {
    const metadata = getMetadata(record);
    id = record[metadata.primaryIdAttribute] as string;
  }

  return {
    id: id,
    entityType: record.logicalName,
  } as EntityReference;
}

export function fromEntityReference(record: IEntity, entityReference: EntityReference): void {
  if (record.logicalName !== entityReference.entityType)
    throw new Error(`Cannot map ${entityReference.entityType} into ${record.logicalName}`);
  record.id = entityReference.id;
}

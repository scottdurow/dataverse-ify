import { IEntity } from "./IEntity";
import { IEntityCollection } from "./IEntityCollection";
export class EntityCollection<T extends IEntity> implements IEntityCollection<T> {
  entities: Array<T>;
  pagingCooking?: string;
  nextLink?: string;
  moreRecords?: boolean;
  totalRecordCount?: number;
  totalRecordCountExceeded?: boolean;
  constructor(entities?: Array<T>) {
    this.entities = entities ?? [];
  }
}

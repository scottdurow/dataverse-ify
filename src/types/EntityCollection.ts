import { IEntity } from "./IEntity";
import { IEntityCollection } from "./IEntityCollection";
export class EntityCollection<T extends IEntity> implements IEntityCollection<T> {
  entities: Array<T> = [];
  pagingCooking?: string;
  constructor(entities: Array<T>) {
    this.entities = entities;
  }
}

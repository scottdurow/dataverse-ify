import { IEntity } from "./IEntity";
export interface IEntityCollection<T extends IEntity> {
  entities: Array<T>;
  pagingCooking?: string;
}

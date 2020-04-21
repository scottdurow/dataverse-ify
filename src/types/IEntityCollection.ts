/* eslint-disable @typescript-eslint/interface-name-prefix */
import { IEntity } from "./IEntity";
export interface IEntityCollection<T extends IEntity> {
  entities: Array<T>;
  pagingCooking?: string;
}

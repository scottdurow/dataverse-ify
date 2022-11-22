import { Guid } from "../Guid";
import { IEntity } from "../IEntity";
import { WebApiExecuteRequest } from "../WebApiExecuteRequest";

export interface CreateRequest extends WebApiExecuteRequest {
  target: IEntity;
}

export interface CreateResponse {
  id: Guid;
}

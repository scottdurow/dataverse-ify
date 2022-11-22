import { IEntity } from "../IEntity";
import { WebApiExecuteRequest } from "../WebApiExecuteRequest";

export interface UpdateRequest extends WebApiExecuteRequest {
  target: IEntity;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateResponse {}

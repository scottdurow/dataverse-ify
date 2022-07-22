import { Entity } from "../Entity";
import { Guid } from "../Guid";

export interface CreateRequest {
  target: Entity;
}

export interface CreateResponse {
  id: Guid;
}

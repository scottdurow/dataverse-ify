import { IEntity } from "../../types/IEntity";
import { EntityCollection } from "../../types/EntityCollection";
import { Guid } from "../../types/Guid";
import { EntityReference } from "../../types/EntityReference";
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";

export interface CdsServiceClient {
  create(entity: IEntity): Promise<string>;
  update(entity: IEntity): Promise<void>;
  delete(entity: IEntity): Promise<void>;
  delete(entityName: string, id: Guid): Promise<void>;
  retrieve<T extends IEntity>(entityName: string, id: Guid, columnSet: string[] | boolean): Promise<T>;
  retrieveMultiple<T extends IEntity>(fetchxml: string): Promise<EntityCollection<T>>;
  associate(
    entityName: string,
    entityId: string,
    relationship: string,
    relatedEntities: Promise<EntityReference[]>,
  ): Promise<void>;
  disassociate(
    entityName: string,
    entityId: string,
    relationship: string,
    relatedEntities: EntityReference[],
  ): Promise<void>;
  execute(request: WebApiExecuteRequest): Promise<unknown>;
}

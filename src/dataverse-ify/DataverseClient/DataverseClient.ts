import { IEntity } from "../../types/IEntity";
import { EntityCollection } from "../../types/EntityCollection";
import { Guid } from "../../types/Guid";
import { EntityReference } from "../../types/EntityReference";
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";

export interface RetrieveMultipleOptions {
  returnRawEntities?: boolean;
}

export interface FetchRetrieveMultipleOptions extends RetrieveMultipleOptions {
  // Provide logicalName to bypass extracting it from the fetchxml
  logicalName?: string;
}

export interface ODataRetrieveMultipleOptions extends RetrieveMultipleOptions {
  logicalName: string;
  maxPageSize?: number;
}

export interface DataverseClient {
  create(entity: IEntity): Promise<string>;
  update(entity: IEntity): Promise<void>;
  delete(entity: IEntity): Promise<void>;
  delete(entityName: string, id: Guid): Promise<void>;
  retrieve<T extends IEntity>(entityName: string, id: Guid, columnSet: string[] | boolean): Promise<T>;
  retrieveMultiple<T extends IEntity>(
    query: string,
    options?: FetchRetrieveMultipleOptions | ODataRetrieveMultipleOptions,
  ): Promise<EntityCollection<T>>;
  associate(
    entityName: string,
    entityId: string,
    relationship: string,
    relatedEntities: EntityReference[],
  ): Promise<void>;
  disassociate(
    entityName: string,
    entityId: string,
    relationship: string,
    relatedEntities: EntityReference[],
  ): Promise<void>;
  execute<T>(request: WebApiExecuteRequest): Promise<T | undefined>;
  executeMultiple<T>(requests: WebApiExecuteRequest[]): Promise<T[] | undefined>;
}

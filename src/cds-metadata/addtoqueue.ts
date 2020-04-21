import { StructuralProperty } from "../types/StructuralProperty";
import { OperationType } from "../types/OperationType";
import { Guid } from "../types/Guid";
import { EntityReference } from "../types/EntityReference";
import { WebApiExecuteRequest } from "../types/WebApiExecuteRequest";
import { Queue } from "./queue";
import { QueueItem } from "./queueitem";

export const addtoqueueMetadata = {
  boundParameter: "entity",
  parameterTypes: {
    entity: {
      typeName: "mscrm.queue",
      structuralProperty: StructuralProperty.EntityType,
    },
    QueueItemProperties: {
      typeName: "mscrm.queueitem",
      structuralProperty: StructuralProperty.EntityType,
    },
    SourceQueue: {
      typeName: "mscrm.queue",
      structuralProperty: StructuralProperty.EntityType,
    },
    Target: {
      typeName: "mscrm.crmbaseentity",
      structuralProperty: StructuralProperty.ComplexType,
    },
  },
  operationType: OperationType.Action,
  operationName: "AddToQueue",
};

export interface AddToQueueRequest extends WebApiExecuteRequest {
  entity: EntityReference | Queue;
  QueueItemProperties?: EntityReference | QueueItem;
  SourceQueue?: EntityReference | Queue;
  Target: unknown;
}

export interface AddToQueueResponse {
  QueueItemId: Guid;
}

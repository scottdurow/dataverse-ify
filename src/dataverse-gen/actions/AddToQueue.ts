/* eslint-disable*/
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { StructuralProperty } from "../../types/StructuralProperty";
import { OperationType } from "../../types/OperationType";

// Action AddToQueue
export const AddToQueueMetadata = {
  boundParameter: "entity",
  parameterTypes: {
    "entity": {
      typeName: "mscrm.queue",
      structuralProperty: StructuralProperty.EntityType
      },		
      "Target": {
      typeName: "mscrm.crmbaseentity",
      structuralProperty: StructuralProperty.EntityType
      },		
      "SourceQueue": {
      typeName: "mscrm.queue",
      structuralProperty: StructuralProperty.EntityType
      },		
      "QueueItemProperties": {
      typeName: "mscrm.queueitem",
      structuralProperty: StructuralProperty.EntityType
      },		
  
  },
  operationType: OperationType.Action,
  operationName: "AddToQueue"
};

export interface AddToQueueRequest extends WebApiExecuteRequest {
  entity?: import("../../types/EntityReference").EntityReference | import("../entities/Queue").Queue;
  Target?: any;
  SourceQueue?: import("../../types/EntityReference").EntityReference | import("../entities/Queue").Queue;
  QueueItemProperties?: import("../../types/EntityReference").EntityReference | import("../entities/QueueItem").QueueItem;
}
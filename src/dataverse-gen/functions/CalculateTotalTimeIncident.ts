/* eslint-disable*/
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { StructuralProperty } from "../../types/StructuralProperty";
import { OperationType } from "../../types/OperationType";

// Action CalculateTotalTimeIncident
export const CalculateTotalTimeIncidentMetadata = {
  boundParameter: "entity",
  parameterTypes: {
    "entity": {
      typeName: "mscrm.incident",
      structuralProperty: StructuralProperty.EntityType
      },		
  
  },
  operationType: OperationType.Function,
  operationName: "CalculateTotalTimeIncident"
};

export interface CalculateTotalTimeIncidentRequest extends WebApiExecuteRequest {
  entity?: import("../../types/EntityReference").EntityReference | import("../entities/Incident").Incident;
}
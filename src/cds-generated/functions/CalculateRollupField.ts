/* eslint-disable*/
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { StructuralProperty } from "../../types/StructuralProperty";
import { OperationType } from "../../types/OperationType";

// Action CalculateRollupField
export const CalculateRollupFieldMetadata = {
  parameterTypes: {
    "Target": {
      typeName: "mscrm.crmbaseentity",
      structuralProperty: StructuralProperty.EntityType
      },		
      "FieldName": {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
  
  },
  operationType: OperationType.Function,
  operationName: "CalculateRollupField"
};

export interface CalculateRollupFieldRequest extends WebApiExecuteRequest {
  Target?: any;
  FieldName?: string;
}
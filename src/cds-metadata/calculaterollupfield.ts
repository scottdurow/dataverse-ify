import { StructuralProperty } from "../types/StructuralProperty";
import { OperationType } from "../types/OperationType";
import { WebApiExecuteRequest } from "../types/WebApiExecuteRequest";

export const calculaterollupfieldMetadata = {
  parameterTypes: {
    FieldName: {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType,
    },
    Target: {
      typeName: "mscrm.crmbaseentity",
      structuralProperty: StructuralProperty.EntityType,
    },
  },
  operationType: OperationType.Function,
  operationName: "CalculateRollupField",
};

export interface CalculateRollupField extends WebApiExecuteRequest {
  FieldName: string;
  Target: unknown;
}

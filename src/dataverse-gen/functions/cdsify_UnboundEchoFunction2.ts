/* eslint-disable*/
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { StructuralProperty } from "../../types/StructuralProperty";
import { OperationType } from "../../types/OperationType";

// Action cdsify_UnboundEchoFunction2
export const cdsify_UnboundEchoFunction2Metadata = {
  parameterTypes: {
    "cdsify_UnboundFunctionInStringArray": {
      typeName: "Collection(Edm.String)",
      structuralProperty: StructuralProperty.Collection
      },		
      "cdsify_UnboundFunctionInDateTime": {
      typeName: "Edm.DateTimeOffset",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundFunctionInBoolean": {
      typeName: "Edm.Boolean",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
  
  },
  operationType: OperationType.Function,
  operationName: "cdsify_UnboundEchoFunction2"
};

export interface cdsify_UnboundEchoFunction2Request extends WebApiExecuteRequest {
  cdsify_UnboundFunctionInStringArray?: string[];
  cdsify_UnboundFunctionInDateTime?: Date;
  cdsify_UnboundFunctionInBoolean?: boolean;
}
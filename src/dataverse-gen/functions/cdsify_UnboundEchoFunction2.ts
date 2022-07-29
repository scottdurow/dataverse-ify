/* eslint-disable*/
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { StructuralProperty } from "../../types/StructuralProperty";
import { OperationType } from "../../types/OperationType";

// Action cdsify_UnboundEchoFunction2
export const cdsify_UnboundEchoFunction2Metadata = {
  parameterTypes: {
    "cdsify_UnboundEchoFunctionInDateTime": {
      typeName: "Edm.DateTimeOffset",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundEchoFunctionInStringArray": {
      typeName: "Collection(Edm.String)",
      structuralProperty: StructuralProperty.Collection
      },		
      "cdsify_UnboundEchoFunctionInString": {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundEchoFunctionInDecimal": {
      typeName: "Edm.Decimal",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundEchoFunctionInFloat": {
      typeName: "Edm.Double",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundEchoFunctionInBoolean": {
      typeName: "Edm.Boolean",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundEchoFunctionInInteger": {
      typeName: "Edm.Int32",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
  
  },
  operationType: OperationType.Function,
  operationName: "cdsify_UnboundEchoFunction2"
};

export interface cdsify_UnboundEchoFunction2Request extends WebApiExecuteRequest {
  cdsify_UnboundEchoFunctionInDateTime?: Date;
  cdsify_UnboundEchoFunctionInStringArray?: string[];
  cdsify_UnboundEchoFunctionInString?: string;
  cdsify_UnboundEchoFunctionInDecimal?: number;
  cdsify_UnboundEchoFunctionInFloat?: number;
  cdsify_UnboundEchoFunctionInBoolean?: boolean;
  cdsify_UnboundEchoFunctionInInteger?: number;
}
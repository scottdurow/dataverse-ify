/* eslint-disable*/
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { StructuralProperty } from "../../types/StructuralProperty";
import { OperationType } from "../../types/OperationType";

// Action cdsify_BoundEchoFunction
export const cdsify_BoundEchoFunctionMetadata = {
  boundParameter: "entity",
  parameterTypes: {
    "entity": {
      typeName: "mscrm.cdsify_integrationtest",
      structuralProperty: StructuralProperty.EntityType
      },		
      "cdsify_BoundEchoFunctionInInteger": {
      typeName: "Edm.Int32",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_BoundEchoFunctionInString": {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
  
  },
  operationType: OperationType.Function,
  operationName: "cdsify_BoundEchoFunction"
};

export interface cdsify_BoundEchoFunctionRequest extends WebApiExecuteRequest {
  entity?: import("../../types/EntityReference").EntityReference | import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
  cdsify_BoundEchoFunctionInInteger?: number;
  cdsify_BoundEchoFunctionInString?: string;
}
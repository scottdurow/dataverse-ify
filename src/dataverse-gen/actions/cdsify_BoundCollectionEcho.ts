/* eslint-disable*/
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { StructuralProperty } from "../../types/StructuralProperty";
import { OperationType } from "../../types/OperationType";

// Action cdsify_BoundCollectionEcho
export const cdsify_BoundCollectionEchoMetadata = {
  boundParameter: "entityset",
  parameterTypes: {
    "entityset": {
      typeName: "mscrm.cdsify_integrationtest",
      structuralProperty: StructuralProperty.Collection
      },		
      "cdsify_BoundCollectionEchoInString": {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
  
  },
  operationType: OperationType.Action,
  operationName: "cdsify_BoundCollectionEcho"
};

export interface cdsify_BoundCollectionEchoRequest extends WebApiExecuteRequest {
  entityset?: import("../../types/EntityReference").EntityReference[] | import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest[];
  cdsify_BoundCollectionEchoInString?: string;
}
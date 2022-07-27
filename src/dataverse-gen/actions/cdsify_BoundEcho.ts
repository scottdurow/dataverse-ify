/* eslint-disable*/
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { StructuralProperty } from "../../types/StructuralProperty";
import { OperationType } from "../../types/OperationType";

// Action cdsify_BoundEcho
export const cdsify_BoundEchoMetadata = {
  boundParameter: "entity",
  parameterTypes: {
    "entity": {
      typeName: "mscrm.cdsify_integrationtest",
      structuralProperty: StructuralProperty.EntityType
      },		
  
  },
  operationType: OperationType.Action,
  operationName: "cdsify_BoundEcho"
};

export interface cdsify_BoundEchoRequest extends WebApiExecuteRequest {
  entity?: import("../../types/EntityReference").EntityReference | import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
}
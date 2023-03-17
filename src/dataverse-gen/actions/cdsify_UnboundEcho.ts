/* eslint-disable*/
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { StructuralProperty } from "../../types/StructuralProperty";
import { OperationType } from "../../types/OperationType";

// Action cdsify_UnboundEcho
export const cdsify_UnboundEchoMetadata = {
  parameterTypes: {
    "cdsify_UnboundInDecimal": {
      typeName: "Edm.Decimal",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundInDateTime": {
      typeName: "Edm.DateTimeOffset",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundInEntity": {
      typeName: "mscrm.cdsify_integrationtest",
      structuralProperty: StructuralProperty.EntityType
      },		
      "cdsify_UnboundInInteger": {
      typeName: "Edm.Int32",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundInBoolean": {
      typeName: "Edm.Boolean",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundInString": {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundInGuid": {
      typeName: "Edm.Guid",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundInEntityReference": {
      typeName: "mscrm.cdsify_integrationtest",
      structuralProperty: StructuralProperty.EntityType
      },		
      "cdsify_UnboundInEntityCollection": {
      typeName: "Collection(mscrm.crmbaseentity)",
      structuralProperty: StructuralProperty.Collection
      },		
      "cdsify_UnboundInStringArray": {
      typeName: "Collection(Edm.String)",
      structuralProperty: StructuralProperty.Collection
      },		
      "cdsify_UnboundInFloat": {
      typeName: "Edm.Double",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundInMoney": {
      typeName: "Edm.Decimal",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_UnboundInPicklist": {
      typeName: "Edm.Int32",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
  
  },
  operationType: OperationType.Action,
  operationName: "cdsify_UnboundEcho"
};

export interface cdsify_UnboundEchoRequest extends WebApiExecuteRequest {
  cdsify_UnboundInDecimal?: number;
  cdsify_UnboundInDateTime?: Date;
  cdsify_UnboundInEntity?: import("../../types/EntityReference").EntityReference | import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
  cdsify_UnboundInInteger?: number;
  cdsify_UnboundInBoolean?: boolean;
  cdsify_UnboundInString?: string;
  cdsify_UnboundInGuid?: import("../../types/Guid").Guid;
  cdsify_UnboundInEntityReference?: import("../../types/EntityReference").EntityReference | import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
  cdsify_UnboundInEntityCollection?: any[];
  cdsify_UnboundInStringArray?: string[];
  cdsify_UnboundInFloat?: number;
  cdsify_UnboundInMoney?: number;
  cdsify_UnboundInPicklist?: number;
}
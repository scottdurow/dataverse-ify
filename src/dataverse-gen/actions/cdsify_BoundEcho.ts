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
      "cdsify_BoundInGuid": {
      typeName: "Edm.Guid",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_BoundInDecimal": {
      typeName: "Edm.Decimal",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_BoundInFloat": {
      typeName: "Edm.Double",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_BoundInInteger": {
      typeName: "Edm.Int32",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_BoundInMoney": {
      typeName: "Edm.Decimal",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_BoundInEntity": {
      typeName: "mscrm.cdsify_integrationtest",
      structuralProperty: StructuralProperty.EntityType
      },		
      "cdsify_BoundInString": {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_BoundInPicklist": {
      typeName: "Edm.Int32",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_BoundInEntityReference": {
      typeName: "mscrm.cdsify_integrationtest",
      structuralProperty: StructuralProperty.EntityType
      },		
      "cdsify_BoundInDateTime": {
      typeName: "Edm.DateTimeOffset",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_BoundInBoolean": {
      typeName: "Edm.Boolean",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "cdsify_BoundInStringArray": {
      typeName: "Collection(Edm.String)",
      structuralProperty: StructuralProperty.Collection
      },		
      "cdsify_BoundInEntityCollection": {
      typeName: "Collection(mscrm.crmbaseentity)",
      structuralProperty: StructuralProperty.Collection
      },		
  
  },
  operationType: OperationType.Action,
  operationName: "cdsify_BoundEcho"
};

export interface cdsify_BoundEchoRequest extends WebApiExecuteRequest {
  entity?: import("../../types/EntityReference").EntityReference | import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
  cdsify_BoundInGuid?: import("../../types/Guid").Guid;
  cdsify_BoundInDecimal?: number;
  cdsify_BoundInFloat?: number;
  cdsify_BoundInInteger?: number;
  cdsify_BoundInMoney?: number;
  cdsify_BoundInEntity?: import("../../types/EntityReference").EntityReference | import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
  cdsify_BoundInString?: string;
  cdsify_BoundInPicklist?: number;
  cdsify_BoundInEntityReference?: import("../../types/EntityReference").EntityReference | import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
  cdsify_BoundInDateTime?: Date;
  cdsify_BoundInBoolean?: boolean;
  cdsify_BoundInStringArray?: string[];
  cdsify_BoundInEntityCollection?: any[];
}
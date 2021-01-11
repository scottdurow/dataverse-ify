/* eslint-disable*/
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { StructuralProperty } from "../../types/StructuralProperty";
import { OperationType } from "../../types/OperationType";

// Action WinOpportunity
export const WinOpportunityMetadata = {
  parameterTypes: {
    "OpportunityClose": {
      typeName: "mscrm.opportunityclose",
      structuralProperty: StructuralProperty.EntityType
      },		
      "Caller": {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
      "Status": {
      typeName: "Edm.Int32",
      structuralProperty: StructuralProperty.PrimitiveType
      },		
  
  },
  operationType: OperationType.Action,
  operationName: "WinOpportunity"
};

export interface WinOpportunityRequest extends WebApiExecuteRequest {
  OpportunityClose?: import("../../types/EntityReference").EntityReference | import("../entities/OpportunityClose").OpportunityClose;
  Caller?: string;
  Status?: number;
}
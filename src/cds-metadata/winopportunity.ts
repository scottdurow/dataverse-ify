/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */
import { EntityReference } from "../types/EntityReference";
import { WebApiExecuteRequest } from "../types/WebApiExecuteRequest";
import { StructuralProperty } from "../types/StructuralProperty";
import { OperationType } from "../types/OperationType";
import { OpportunityClose } from "./opportunityclose";

export const winopportunityMetadata = {
  parameterTypes: {
    Caller: {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType,
    },
    OpportunityClose: {
      typeName: "mscrm.opportunityclose",
      structuralProperty: StructuralProperty.EntityType,
    },
    Status: {
      typeName: "Edm.Int32",
      structuralProperty: StructuralProperty.PrimitiveType,
    },
  },
  operationType: OperationType.Action,
  operationName: "WinOpportunity",
};

export interface WinOpportunityRequest extends WebApiExecuteRequest {
  Caller?: string;
  OpportunityClose: EntityReference | OpportunityClose;
  Status: number;
}

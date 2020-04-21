import { IEntityReference } from "../IEntityReference";
export interface DisassociateRequest {
  target: IEntityReference;
  relationship: string;
  relatedEntityId: string;
}

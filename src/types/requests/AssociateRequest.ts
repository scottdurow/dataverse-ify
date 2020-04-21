import { IEntityReference } from "../IEntityReference";

export interface AssociateRequest {
  target: IEntityReference;
  relationship: string;
  relatedEntities: IEntityReference[];
}

/* eslint-disable*/
export interface RetrieveMetadataChangesResponse {
  DeletedMetadata?: import("../complextypes/DeletedMetadataCollection").DeletedMetadataCollection;
  EntityMetadata?: import("../complextypes/ComplexEntityMetadata").ComplexEntityMetadata[];
  ServerVersionStamp?: string;
}
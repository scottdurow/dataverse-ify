/* eslint-disable*/
export interface RetrieveMetadataChangesResponse {
  ServerVersionStamp?: string;
  EntityMetadata?: import("../complextypes/ComplexEntityMetadata").ComplexEntityMetadata[];
  DeletedMetadata?: import("../complextypes/DeletedMetadataCollection").DeletedMetadataCollection;
}
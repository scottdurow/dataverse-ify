/* eslint-disable*/
export interface DeletedMetadataCollection {
  Count?: number;
  IsReadOnly?: boolean;
  Keys?: import("../enums/DeletedMetadataFilters").DeletedMetadataFilters[];
  Values?: import("../complextypes/GuidCollection").GuidCollection[];
}
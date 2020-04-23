/* eslint-disable*/
export interface ComplexEntityKeyMetadata {
  SchemaName?: string;
  MetadataId?: import("../../types/Guid").Guid;
  LogicalName?: string;
  KeyAttributes?: string[];
  IsSynchronous?: boolean;
  IsManaged?: boolean;
  IsExportKey?: boolean;
  IsCustomizable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IntroducedVersion?: string;
  HasChanged?: boolean;
  EntityLogicalName?: string;
  EntityKeyIndexStatus?: import("../enums/EntityKeyIndexStatus").EntityKeyIndexStatus;
  DisplayName?: import("../complextypes/Label").Label;
}
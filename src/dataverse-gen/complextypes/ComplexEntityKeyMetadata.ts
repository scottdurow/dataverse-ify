/* eslint-disable*/
export interface ComplexEntityKeyMetadata {
  DisplayName?: import("../complextypes/Label").Label;
  EntityKeyIndexStatus?: import("../enums/EntityKeyIndexStatus").EntityKeyIndexStatus;
  EntityLogicalName?: string;
  HasChanged?: boolean;
  IntroducedVersion?: string;
  IsCustomizable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsExportKey?: boolean;
  IsManaged?: boolean;
  IsSecondaryKey?: boolean;
  IsSynchronous?: boolean;
  KeyAttributes?: string[];
  LogicalName?: string;
  MetadataId?: import("../../types/Guid").Guid;
  SchemaName?: string;
}
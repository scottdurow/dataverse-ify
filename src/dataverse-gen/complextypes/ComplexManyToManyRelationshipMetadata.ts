/* eslint-disable*/
export interface ComplexManyToManyRelationshipMetadata {
  Entity1AssociatedMenuConfiguration?: import("../complextypes/AssociatedMenuConfiguration").AssociatedMenuConfiguration;
  Entity1IntersectAttribute?: string;
  Entity1LogicalName?: string;
  Entity1NavigationPropertyName?: string;
  Entity2AssociatedMenuConfiguration?: import("../complextypes/AssociatedMenuConfiguration").AssociatedMenuConfiguration;
  Entity2IntersectAttribute?: string;
  Entity2LogicalName?: string;
  Entity2NavigationPropertyName?: string;
  HasChanged?: boolean;
  IntersectEntityName?: string;
  IntroducedVersion?: string;
  IsCustomRelationship?: boolean;
  IsCustomizable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsManaged?: boolean;
  IsValidForAdvancedFind?: boolean;
  MetadataId?: import("../../types/Guid").Guid;
  RelationshipType?: import("../enums/RelationshipType").RelationshipType;
  SchemaName?: string;
  SecurityTypes?: import("../enums/SecurityTypes").SecurityTypes;
}
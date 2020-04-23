/* eslint-disable*/
export interface ComplexManyToManyRelationshipMetadata {
  SecurityTypes?: import("../enums/SecurityTypes").SecurityTypes;
  SchemaName?: string;
  RelationshipType?: import("../enums/RelationshipType").RelationshipType;
  MetadataId?: import("../../types/Guid").Guid;
  IsValidForAdvancedFind?: boolean;
  IsManaged?: boolean;
  IsCustomizable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsCustomRelationship?: boolean;
  IntroducedVersion?: string;
  IntersectEntityName?: string;
  HasChanged?: boolean;
  Entity2NavigationPropertyName?: string;
  Entity2LogicalName?: string;
  Entity2IntersectAttribute?: string;
  Entity2AssociatedMenuConfiguration?: import("../complextypes/AssociatedMenuConfiguration").AssociatedMenuConfiguration;
  Entity1NavigationPropertyName?: string;
  Entity1LogicalName?: string;
  Entity1IntersectAttribute?: string;
  Entity1AssociatedMenuConfiguration?: import("../complextypes/AssociatedMenuConfiguration").AssociatedMenuConfiguration;
}
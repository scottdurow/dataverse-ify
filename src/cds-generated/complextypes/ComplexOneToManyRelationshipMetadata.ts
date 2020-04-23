/* eslint-disable*/
export interface ComplexOneToManyRelationshipMetadata {
  SecurityTypes?: import("../enums/SecurityTypes").SecurityTypes;
  SchemaName?: string;
  RelationshipType?: import("../enums/RelationshipType").RelationshipType;
  RelationshipBehavior?: number;
  ReferencingEntityNavigationPropertyName?: string;
  ReferencingEntity?: string;
  ReferencingAttribute?: string;
  ReferencedEntityNavigationPropertyName?: string;
  ReferencedEntity?: string;
  ReferencedAttribute?: string;
  MetadataId?: import("../../types/Guid").Guid;
  IsValidForAdvancedFind?: boolean;
  IsManaged?: boolean;
  IsHierarchical?: boolean;
  IsCustomizable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsCustomRelationship?: boolean;
  IntroducedVersion?: string;
  HasChanged?: boolean;
  CascadeConfiguration?: import("../complextypes/CascadeConfiguration").CascadeConfiguration;
  AssociatedMenuConfiguration?: import("../complextypes/AssociatedMenuConfiguration").AssociatedMenuConfiguration;
}
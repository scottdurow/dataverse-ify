/* eslint-disable*/
export interface ComplexOneToManyRelationshipMetadata {
  SecurityTypes?: import("../enums/SecurityTypes").SecurityTypes;
  SchemaName?: string;
  RelationshipType?: import("../enums/RelationshipType").RelationshipType;
  RelationshipBehavior?: number;
  RelationshipAttributes?: import("../complextypes/RelationshipAttribute").RelationshipAttribute[];
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
  EntityKey?: string;
  CascadeConfiguration?: import("../complextypes/CascadeConfiguration").CascadeConfiguration;
  AssociatedMenuConfiguration?: import("../complextypes/AssociatedMenuConfiguration").AssociatedMenuConfiguration;
}
/* eslint-disable*/
export interface ComplexOneToManyRelationshipMetadata {
  AssociatedMenuConfiguration?: import("../complextypes/AssociatedMenuConfiguration").AssociatedMenuConfiguration;
  CascadeConfiguration?: import("../complextypes/CascadeConfiguration").CascadeConfiguration;
  DenormalizedAttributeName?: string;
  EntityKey?: string;
  HasChanged?: boolean;
  IntroducedVersion?: string;
  IsCustomRelationship?: boolean;
  IsCustomizable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsDenormalizedLookup?: boolean;
  IsHierarchical?: boolean;
  IsManaged?: boolean;
  IsRelationshipAttributeDenormalized?: boolean;
  IsValidForAdvancedFind?: boolean;
  MetadataId?: import("../../types/Guid").Guid;
  ReferencedAttribute?: string;
  ReferencedEntity?: string;
  ReferencedEntityNavigationPropertyName?: string;
  ReferencingAttribute?: string;
  ReferencingEntity?: string;
  ReferencingEntityNavigationPropertyName?: string;
  RelationshipAttributes?: import("../complextypes/RelationshipAttribute").RelationshipAttribute[];
  RelationshipBehavior?: number;
  RelationshipType?: import("../enums/RelationshipType").RelationshipType;
  SchemaName?: string;
  SecurityTypes?: import("../enums/SecurityTypes").SecurityTypes;
}
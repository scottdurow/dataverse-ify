import { StructuralProperty } from "../types/StructuralProperty";
import { OperationType } from "../types/OperationType";
import { Guid } from "../types/Guid";
import { WebApiExecuteRequest } from "../types/WebApiExecuteRequest";

export const RetrieveMetadataChangesMetadata = {
  parameterTypes: {
    AppModuleId: {
      typeName: "Edm.Guid",
      structuralProperty: StructuralProperty.PrimitiveType,
    },
    ClientVersionStamp: {
      typeName: "Edm.String",
      structuralProperty: StructuralProperty.PrimitiveType,
    },
    DeletedMetadataFilters: {
      typeName: "mscrm.DeletedMetadataFilters",
      structuralProperty: StructuralProperty.EnumerationType,
    },
    Query: {
      typeName: "mscrm.EntityQueryExpression",
      structuralProperty: StructuralProperty.EntityType,
    },
    RetrieveAllSettings: {
      typeName: "Edm.Boolean",
      structuralProperty: StructuralProperty.PrimitiveType,
    },
  },
  operationType: OperationType.Function,
  operationName: "RetrieveMetadataChanges",
};
export interface MetadataPropertiesExpression {
  AllProperties?: boolean;
  PropertyNames?: string[];
}
export enum LogicalOperator {
  And = "And",
  Or = "Or",
}
export enum MetadataConditionOperator {
  Equals = "Equals",
  NotEquals = "NotEquals",
  In = "In",
  NotIn = "NotIn",
  GreaterThan = "GreaterThan",
  LessThan = "LessThan",
}
export interface EntityKeyQueryExpression {
  Criteria: MetadataFilterExpression;
  Properties: MetadataPropertiesExpression;
}

export interface MetadataConditionExpression {
  ConditionOperator?: MetadataConditionOperator;
  PropertyName?: string;
  Value?: any;
}
export interface MetadataFilterExpression {
  Conditions?: MetadataConditionExpression[];
  FilterOperator?: LogicalOperator;
  Filters?: MetadataFilterExpression[];
}
export interface AttributeQueryExpression {
  Criteria?: MetadataFilterExpression;
  Properties: MetadataPropertiesExpression;
}

export interface LabelQueryExpression {
  FilterLanguages: number[];
  MissingLabelBehavior: number;
}
export interface RelationshipQueryExpression {
  Criteria: MetadataFilterExpression;
  Properties: MetadataPropertiesExpression;
}

export interface EntityQueryExpression {
  AttributeQuery?: AttributeQueryExpression;
  Criteria?: MetadataFilterExpression;
  KeyQuery?: EntityKeyQueryExpression;
  LabelQuery?: LabelQueryExpression;
  Properties?: MetadataPropertiesExpression;
  RelationshipQuery?: RelationshipQueryExpression;
}
export enum DeletedMetadataFilters {
  Default = "Default",
  Attribute = "Attribute",
  Relationship = "Relationship",
  Label = "Label",
  OptionSet = "OptionSet",
  All = "All",
}
export interface RetrieveMetadataChanges extends WebApiExecuteRequest {
  AppModuleId?: Guid;
  ClientVersionStamp?: string;
  DeletedMetadataFilters?: DeletedMetadataFilters;
  Query?: EntityQueryExpression;
  RetrieveAllSettings?: boolean;
}
export interface GuidCollection {
  Items: Guid[];
}
export interface DeletedMetadataCollection {
  Count: number;
  IsReadOnly: boolean;
  Keys: DeletedMetadataFilters[];
  Values: GuidCollection[];
}
export enum AttributeTypeCode {
  Boolean = "Boolean",
  Customer = "Customer",
  DateTime = "DateTime",
  Decimal = "Decimal",
  Double = "Double",
  Integer = "Integer",
  Lookup = "Lookup",
  Memo = "Memo",
  Money = "Money",
  Owner = "Owner",
  PartyList = "PartyList",
  Picklist = "Picklist",
  State = "State",
  Status = "Status",
  String = "String",
  Uniqueidentifier = "Uniqueidentifier",
  CalendarRules = "CalendarRules",
  Virtual = "Virtual",
  BigInt = "BigInt",
  ManagedProperty = "ManagedProperty",
  EntityName = "EntityName",
}
export interface AttributeTypeDisplayName {
  Value: string;
}
export interface BooleanManagedProperty {
  CanBeChanged: boolean;
  ManagedPropertyLogicalName: string;
  Value: boolean;
}
export interface LocalizedLabel {
  HasChanged: boolean;
  IsManaged: boolean;
  Label: string;
  LanguageCode: number;
  MetadataId: Guid;
}
export interface Label {
  LocalizedLabels: LocalizedLabel[];
  UserLocalizedLabel: LocalizedLabel;
}
export enum AttributeRequiredLevel {
  None = "None",
  SystemRequired = "SystemRequired",
  ApplicationRequired = "ApplicationRequired",
  Recommended = "Recommended",
}
export interface AttributeRequiredLevelManagedProperty {
  CanBeChanged: boolean;
  ManagedPropertyLogicalName: string;
  Value: AttributeRequiredLevel;
}
export interface ComplexAttributeMetadata {
  AttributeOf: string;
  AttributeType: AttributeTypeCode;
  AttributeTypeName: AttributeTypeDisplayName;
  AutoNumberFormat: string;
  CanBeSecuredForCreate: boolean;
  CanBeSecuredForRead: boolean;
  CanBeSecuredForUpdate: boolean;
  CanModifyAdditionalSettings: BooleanManagedProperty;
  ColumnNumber: number;
  DeprecatedVersion: string;
  Description: Label;
  DisplayName: Label;
  EntityLogicalName: string;
  ExternalName: string;
  HasChanged: boolean;
  InheritsFrom: string;
  IntroducedVersion: string;
  IsAuditEnabled: BooleanManagedProperty;
  IsCustomAttribute: boolean;
  IsCustomizable: BooleanManagedProperty;
  IsDataSourceSecret: boolean;
  IsFilterable: boolean;
  IsGlobalFilterEnabled: BooleanManagedProperty;
  IsLogical: boolean;
  IsManaged: boolean;
  IsPrimaryId: boolean;
  IsPrimaryName: boolean;
  IsRenameable: BooleanManagedProperty;
  IsRequiredForForm: boolean;
  IsRetrievable: boolean;
  IsSearchable: boolean;
  IsSecured: boolean;
  IsSortableEnabled: BooleanManagedProperty;
  IsValidForAdvancedFind: BooleanManagedProperty;
  IsValidForCreate: boolean;
  IsValidForForm: boolean;
  IsValidForGrid: boolean;
  IsValidForRead: boolean;
  IsValidForUpdate: boolean;
  LinkedAttributeId: Guid;
  LogicalName: string;
  MetadataId: Guid;
  RequiredLevel: AttributeRequiredLevelManagedProperty;
  SchemaName: string;
  SourceType: number;
}
export enum EntityKeyIndexStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Active = "Active",
  Failed = "Failed",
}
export interface ComplexEntityKeyMetadata {
  DisplayName: Label;
  EntityKeyIndexStatus: EntityKeyIndexStatus;
  EntityLogicalName: string;
  HasChanged: boolean;
  IntroducedVersion: string;
  IsCustomizable: BooleanManagedProperty;
  IsExportKey: boolean;
  IsManaged: boolean;
  IsSynchronous: boolean;
  KeyAttributes: string[];
  LogicalName: string;
  MetadataId: Guid;
  SchemaName: string;
}
export enum SecurityTypes {
  None = "None",
  Append = "Append",
  ParentChild = "ParentChild",
  Pointer = "Pointer",
  Inheritance = "Inheritance",
}
export enum AssociatedMenuBehavior {
  UseCollectionName = "UseCollectionName",
  UseLabel = "UseLabel",
  DoNotDisplay = "DoNotDisplay",
}

export enum AssociatedMenuGroup {
  Details = "Details",
  Sales = "Sales",
  Service = "Service",
  Marketing = "Marketing",
}

export interface AssociatedMenuConfiguration {
  AvailableOffline: boolean;
  Behavior: AssociatedMenuBehavior;
  Group: AssociatedMenuGroup;
  Icon: string;
  IsCustomizable: boolean;
  Label: Label;
  MenuId: string;
  Order: number;
  QueryApi: string;
  ViewId: Guid;
}
export interface ComplexManyToManyRelationshipMetadata {
  Entity1AssociatedMenuConfiguration: AssociatedMenuConfiguration;
  Entity1IntersectAttribute: string;
  Entity1LogicalName: string;
  Entity1NavigationPropertyName: string;
  Entity2AssociatedMenuConfiguration: AssociatedMenuConfiguration;
  Entity2IntersectAttribute: string;
  Entity2LogicalName: string;
  Entity2NavigationPropertyName: string;
  HasChanged: boolean;
  IntersectEntityName: string;
  IntroducedVersion: string;
  IsCustomizable: BooleanManagedProperty;
  IsCustomRelationship: boolean;
  IsManaged: boolean;
  IsValidForAdvancedFind: boolean;
  MetadataId: Guid;
  RelationshipType: RelationshipType;
  SchemaName: string;
  SecurityTypes: SecurityTypes;
}
export enum RelationshipType {
  OneToManyRelationship = "OneToManyRelationship",
  ManyToManyRelationship = "ManyToManyRelationship",
}
export enum CascadeType {
  NoCascade = "NoCascade",
  Cascade = "Cascade",
  Active = "Active",
  UserOwned = "UserOwned",
  RemoveLink = "RemoveLink",
  Restrict = "Restrict",
}

export interface CascadeConfiguration {
  Assign: CascadeType;
  Delete: CascadeType;
  Merge: CascadeType;
  Reparent: CascadeType;
  RollupView: CascadeType;
  Share: CascadeType;
  Unshare: CascadeType;
}
export interface ComplexOneToManyRelationshipMetadata {
  AssociatedMenuConfiguration: AssociatedMenuConfiguration;
  CascadeConfiguration: CascadeConfiguration;
  HasChanged: boolean;
  IntroducedVersion: string;
  IsCustomizable: BooleanManagedProperty;
  IsCustomRelationship: boolean;
  IsHierarchical: boolean;
  IsManaged: boolean;
  IsValidForAdvancedFind: boolean;
  MetadataId: Guid;
  ReferencedAttribute: string;
  ReferencedEntity: string;
  ReferencedEntityNavigationPropertyName: string;
  ReferencingAttribute: string;
  ReferencingEntity: string;
  ReferencingEntityNavigationPropertyName: string;
  RelationshipBehavior: number;
  RelationshipType: RelationshipType;
  SchemaName: string;
  SecurityTypes: SecurityTypes;
}
export enum OwnershipTypes {
  None = "None",
  UserOwned = "UserOwned",
  TeamOwned = "TeamOwned",
  BusinessOwned = "BusinessOwned",
  OrganizationOwned = "OrganizationOwned",
  BusinessParented = "BusinessParented",
}
export enum PrivilegeType {
  None = "None",
  Create = "Create",
  Read = "Read",
  Write = "Write",
  Delete = "Delete",
  Assign = "Assign",
  Share = "Share",
  Append = "Append",
  AppendTo = "AppendTo",
}
export interface SecurityPrivilegeMetadata {
  CanBeBasic: boolean;
  CanBeDeep: boolean;
  CanBeEntityReference: boolean;
  CanBeGlobal: boolean;
  CanBeLocal: boolean;
  CanBeParentEntityReference: boolean;
  Name: string;
  PrivilegeId: Guid;
  PrivilegeType: PrivilegeType;
}

export interface EntitySetting {
  Name: string;
}

export interface ComplexEntityMetadata {
  ActivityTypeMask: number;
  Attributes: ComplexAttributeMetadata[];
  AutoCreateAccessTeams: boolean;
  AutoRouteToOwnerQueue: boolean;
  CanBeInCustomEntityAssociation: BooleanManagedProperty;
  CanBeInManyToMany: BooleanManagedProperty;
  CanBePrimaryEntityInRelationship: BooleanManagedProperty;
  CanBeRelatedEntityInRelationship: BooleanManagedProperty;
  CanChangeHierarchicalRelationship: BooleanManagedProperty;
  CanChangeTrackingBeEnabled: BooleanManagedProperty;
  CanCreateAttributes: BooleanManagedProperty;
  CanCreateCharts: BooleanManagedProperty;
  CanCreateForms: BooleanManagedProperty;
  CanCreateViews: BooleanManagedProperty;
  CanEnableSyncToExternalSearchIndex: BooleanManagedProperty;
  CanModifyAdditionalSettings: BooleanManagedProperty;
  CanTriggerWorkflow: boolean;
  ChangeTrackingEnabled: boolean;
  CollectionSchemaName: string;
  DataProviderId: Guid;
  DataSourceId: Guid;
  DaysSinceRecordLastModified: number;
  Description: Label;
  DisplayCollectionName: Label;
  DisplayName: Label;
  EnforceStateTransitions: boolean;
  EntityColor: string;
  EntityHelpUrl: string;
  EntityHelpUrlEnabled: boolean;
  EntitySetName: string;
  ExternalCollectionName: string;
  ExternalName: string;
  HasActivities: boolean;
  HasChanged: boolean;
  HasFeedback: boolean;
  HasNotes: boolean;
  IconLargeName: string;
  IconMediumName: string;
  IconSmallName: string;
  IconVectorName: string;
  IntroducedVersion: string;
  IsActivity: boolean;
  IsActivityParty: boolean;
  IsAIRUpdated: boolean;
  IsAuditEnabled: BooleanManagedProperty;
  IsAvailableOffline: boolean;
  IsBPFEntity: boolean;
  IsBusinessProcessEnabled: boolean;
  IsChildEntity: boolean;
  IsConnectionsEnabled: BooleanManagedProperty;
  IsCustomEntity: boolean;
  IsCustomizable: BooleanManagedProperty;
  IsDocumentManagementEnabled: boolean;
  IsDocumentRecommendationsEnabled: boolean;
  IsDuplicateDetectionEnabled: BooleanManagedProperty;
  IsEnabledForCharts: boolean;
  IsEnabledForExternalChannels: boolean;
  IsEnabledForTrace: boolean;
  IsImportable: boolean;
  IsInteractionCentricEnabled: boolean;
  IsIntersect: boolean;
  IsKnowledgeManagementEnabled: boolean;
  IsLogicalEntity: boolean;
  IsMailMergeEnabled: BooleanManagedProperty;
  IsManaged: boolean;
  IsMappable: BooleanManagedProperty;
  IsMSTeamsIntegrationEnabled: boolean;
  IsOfflineInMobileClient: BooleanManagedProperty;
  IsOneNoteIntegrationEnabled: boolean;
  IsOptimisticConcurrencyEnabled: boolean;
  IsPrivate: boolean;
  IsQuickCreateEnabled: boolean;
  IsReadingPaneEnabled: boolean;
  IsReadOnlyInMobileClient: BooleanManagedProperty;
  IsRenameable: BooleanManagedProperty;
  IsSLAEnabled: boolean;
  IsSolutionAware: boolean;
  IsStateModelAware: boolean;
  IsValidForAdvancedFind: boolean;
  IsValidForQueue: BooleanManagedProperty;
  IsVisibleInMobile: BooleanManagedProperty;
  IsVisibleInMobileClient: BooleanManagedProperty;
  Keys: ComplexEntityKeyMetadata[];
  LogicalCollectionName: string;
  LogicalName: string;
  ManyToManyRelationships: ComplexManyToManyRelationshipMetadata[];
  ManyToOneRelationships: ComplexOneToManyRelationshipMetadata[];
  MetadataId: Guid;
  MobileOfflineFilters: string;
  ObjectTypeCode: number;
  OneToManyRelationships: ComplexOneToManyRelationshipMetadata[];
  OwnershipType: OwnershipTypes;
  PrimaryIdAttribute: string;
  PrimaryImageAttribute: string;
  PrimaryNameAttribute: string;
  Privileges: SecurityPrivilegeMetadata[];
  RecurrenceBaseEntityLogicalName: string;
  ReportViewName: string;
  SchemaName: string;
  SettingOf: string;
  Settings: EntitySetting[];
  SyncToExternalSearchIndex: boolean;
  UsesBusinessDataLabelTable: boolean;
}
export interface RetrieveMetadataChangesResponse {
  DeletedMetadata: DeletedMetadataCollection;
  EntityMetadata: ComplexEntityMetadata[];
  ServerVersionStamp: string;
}

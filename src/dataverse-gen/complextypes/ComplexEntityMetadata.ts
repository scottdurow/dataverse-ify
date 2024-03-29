/* eslint-disable*/
export interface ComplexEntityMetadata {
  ActivityTypeMask?: number;
  Attributes?: import("../complextypes/ComplexAttributeMetadata").ComplexAttributeMetadata[];
  AutoCreateAccessTeams?: boolean;
  AutoRouteToOwnerQueue?: boolean;
  CanBeInCustomEntityAssociation?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanBeInManyToMany?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanBePrimaryEntityInRelationship?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanBeRelatedEntityInRelationship?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanChangeHierarchicalRelationship?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanChangeTrackingBeEnabled?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanCreateAttributes?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanCreateCharts?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanCreateForms?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanCreateViews?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanEnableSyncToExternalSearchIndex?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanModifyAdditionalSettings?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  CanTriggerWorkflow?: boolean;
  ChangeTrackingEnabled?: boolean;
  CollectionSchemaName?: string;
  CreatedOn?: Date;
  DataProviderId?: import("../../types/Guid").Guid;
  DataSourceId?: import("../../types/Guid").Guid;
  DaysSinceRecordLastModified?: number;
  Description?: import("../complextypes/Label").Label;
  DisplayCollectionName?: import("../complextypes/Label").Label;
  DisplayName?: import("../complextypes/Label").Label;
  EnforceStateTransitions?: boolean;
  EntityColor?: string;
  EntityHelpUrl?: string;
  EntityHelpUrlEnabled?: boolean;
  EntitySetName?: string;
  ExternalCollectionName?: string;
  ExternalName?: string;
  HasActivities?: boolean;
  HasChanged?: boolean;
  HasEmailAddresses?: boolean;
  HasFeedback?: boolean;
  HasNotes?: boolean;
  IconLargeName?: string;
  IconMediumName?: string;
  IconSmallName?: string;
  IconVectorName?: string;
  IntroducedVersion?: string;
  IsAIRUpdated?: boolean;
  IsActivity?: boolean;
  IsActivityParty?: boolean;
  IsArchivalEnabled?: boolean;
  IsAuditEnabled?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsAvailableOffline?: boolean;
  IsBPFEntity?: boolean;
  IsBusinessProcessEnabled?: boolean;
  IsChildEntity?: boolean;
  IsConnectionsEnabled?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsCustomEntity?: boolean;
  IsCustomizable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsDocumentManagementEnabled?: boolean;
  IsDocumentRecommendationsEnabled?: boolean;
  IsDuplicateDetectionEnabled?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsEnabledForCharts?: boolean;
  IsEnabledForExternalChannels?: boolean;
  IsEnabledForTrace?: boolean;
  IsImportable?: boolean;
  IsInteractionCentricEnabled?: boolean;
  IsIntersect?: boolean;
  IsKnowledgeManagementEnabled?: boolean;
  IsLogicalEntity?: boolean;
  IsMSTeamsIntegrationEnabled?: boolean;
  IsMailMergeEnabled?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsManaged?: boolean;
  IsMappable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsOfflineInMobileClient?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsOneNoteIntegrationEnabled?: boolean;
  IsOptimisticConcurrencyEnabled?: boolean;
  IsPrivate?: boolean;
  IsQuickCreateEnabled?: boolean;
  IsReadOnlyInMobileClient?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsReadingPaneEnabled?: boolean;
  IsRenameable?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsRetentionEnabled?: boolean;
  IsRetrieveAuditEnabled?: boolean;
  IsRetrieveMultipleAuditEnabled?: boolean;
  IsSLAEnabled?: boolean;
  IsSolutionAware?: boolean;
  IsStateModelAware?: boolean;
  IsValidForAdvancedFind?: boolean;
  IsValidForQueue?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsVisibleInMobile?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  IsVisibleInMobileClient?: import("../complextypes/BooleanManagedProperty").BooleanManagedProperty;
  Keys?: import("../complextypes/ComplexEntityKeyMetadata").ComplexEntityKeyMetadata[];
  LogicalCollectionName?: string;
  LogicalName?: string;
  ManyToManyRelationships?: import("../complextypes/ComplexManyToManyRelationshipMetadata").ComplexManyToManyRelationshipMetadata[];
  ManyToOneRelationships?: import("../complextypes/ComplexOneToManyRelationshipMetadata").ComplexOneToManyRelationshipMetadata[];
  MetadataId?: import("../../types/Guid").Guid;
  MobileOfflineFilters?: string;
  ModifiedOn?: Date;
  ObjectTypeCode?: number;
  OneToManyRelationships?: import("../complextypes/ComplexOneToManyRelationshipMetadata").ComplexOneToManyRelationshipMetadata[];
  OwnerId?: import("../../types/Guid").Guid;
  OwnerIdType?: number;
  OwnershipType?: import("../enums/OwnershipTypes").OwnershipTypes;
  OwningBusinessUnit?: import("../../types/Guid").Guid;
  PrimaryIdAttribute?: string;
  PrimaryImageAttribute?: string;
  PrimaryNameAttribute?: string;
  Privileges?: import("../complextypes/SecurityPrivilegeMetadata").SecurityPrivilegeMetadata[];
  RecurrenceBaseEntityLogicalName?: string;
  ReportViewName?: string;
  SchemaName?: string;
  SettingOf?: string;
  Settings?: import("../complextypes/EntitySetting").EntitySetting[];
  SyncToExternalSearchIndex?: boolean;
  TableType?: string;
  UsesBusinessDataLabelTable?: boolean;
}
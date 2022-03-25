/* eslint-disable*/
import { IEntity } from "../../types/IEntity";
// Entity Letter
export const letterMetadata = {
  typeName: "mscrm.letter",
  logicalName: "letter",
  collectionName: "letters",
  primaryIdAttribute: "activityid",
  attributeTypes: {
    // Numeric Types
    actualdurationminutes: "Integer",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    onholdtime: "Integer",
    scheduleddurationminutes: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    prioritycode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    actualend: "DateOnly:UserLocal",
    actualstart: "DateOnly:UserLocal",
    createdon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    scheduledend: "DateAndTime:UserLocal",
    scheduledstart: "DateAndTime:UserLocal",
    sortdate: "DateAndTime:UserLocal",
  },
  navigation: {
    stageid_processstage: ["mscrm.processstage"],
    sla_letter_sla: ["mscrm.sla"],
    ownerid_letter: ["mscrm.principal"],
    activityid_activitypointer: ["mscrm.activitypointer"],
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    owningbusinessunit: ["businessunit"],
    owningteam: ["team"],
    owninguser: ["systemuser"],
    regardingobjectid: ["account","bookableresourcebooking","bookableresourcebookingheader","bulkoperation","campaign","campaignactivity","contact","contract","entitlement","entitlementtemplate","incident","invoice","knowledgearticle","knowledgebaserecord","lead","msdyn_customerasset","msdyn_playbookinstance","msdyn_postalbum","msdyn_salessuggestion","opportunity","quote","salesorder","site"],
    serviceid: ["service"],
    slainvokedid: ["sla"],
    transactioncurrencyid: ["transactioncurrency"],
  },
};

// Attribute constants
export enum LetterAttributes {
  ActivityId = "activityid",
  ActivityTypeCode = "activitytypecode",
  ActualDurationMinutes = "actualdurationminutes",
  ActualEnd = "actualend",
  ActualStart = "actualstart",
  Address = "address",
  bcc = "bcc",
  Category = "category",
  cc = "cc",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  Description = "description",
  DirectionCode = "directioncode",
  ExchangeRate = "exchangerate",
  from = "from",
  ImportSequenceNumber = "importsequencenumber",
  IsBilled = "isbilled",
  IsRegularActivity = "isregularactivity",
  IsWorkflowCreated = "isworkflowcreated",
  LastOnHoldTime = "lastonholdtime",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OnHoldTime = "onholdtime",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  RegardingObjectId = "regardingobjectid",
  RegardingObjectIdName = "regardingobjectidname",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  ScheduledEnd = "scheduledend",
  ScheduledStart = "scheduledstart",
  ServiceId = "serviceid",
  ServiceIdName = "serviceidname",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  SortDate = "sortdate",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  Subcategory = "subcategory",
  Subject = "subject",
  SubscriptionId = "subscriptionid",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  to = "to",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface Letter extends IEntity {
  // Letter UniqueidentifierType Unique identifier of the letter activity.
  activityid?: import("../../types/Guid").Guid | null;
  // Activity Type EntityNameType Shows the type of activity.
  activitytypecode?: string | null;
  // Duration IntegerType Type the number of minutes spent creating and sending the letter. The duration is used in reporting.
  actualdurationminutes?: number | null;
  // Actual End DateTimeType Enter the actual end date and time of the letter. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the letter. DateOnly:UserLocal
  actualend?: Date | null;
  // Actual Start DateTimeType Enter the actual start date and time for the letter. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the letter. DateOnly:UserLocal
  actualstart?: Date | null;
  // Address StringType Type the complete recipient address for the letter to ensure timely delivery.
  address?: string | null;
  // Bcc PartyListType Enter the recipients that are included in the letter distribution, but are not displayed to other recipients.
  bcc?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Category StringType Type a category to identify the letter type, such as sales offer or past due notice, to tie the letter to a business group or function.
  category?: string | null;
  // Cc PartyListType Enter the recipients that should be copied on the letter.
  cc?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Description MemoType Type the letter body or additional information to describe the letter, such as the primary message or the products and services described.
  description?: string | null;
  // Direction BooleanType Select the direction of the letter as incoming or outbound.
  directioncode?: boolean | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // From PartyListType Enter the account, contact, lead, or user who sent the letter.
  from?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Is Billed BooleanType Shows whether the letter activity was billed as part of resolving a case.
  isbilled?: boolean | null;
  // Is Regular Activity BooleanType Shows whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  // Is Workflow Created BooleanType Shows whether the letter activity was created by a workflow rule.
  isworkflowcreated?: boolean | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the letter activity.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier of the team that owns the letter activity.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Owning User LookupType Unique identifier of the user that owns the letter activity.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  // Priority letter_letter_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/letter_letter_prioritycode").letter_letter_prioritycode | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("../../types/Guid").Guid | null;
  // Regarding LookupType Choose the record that the letter relates to.
  regardingobjectid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  regardingobjectidname?: string | null;
  //  StringType
  regardingobjectidyominame?: string | null;
  //  EntityNameType
  regardingobjecttypecode?: string | null;
  // Scheduled Duration IntegerType Scheduled duration of the letter activity, specified in minutes.
  scheduleddurationminutes?: number | null;
  // Due Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledend?: Date | null;
  // Start Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledstart?: Date | null;
  // Service LookupType Unique identifier for an associated service.
  serviceid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  serviceidname?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Letter record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this Letter. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: Date | null;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("../../types/Guid").Guid | null;
  // Activity Status letter_letter_statecode Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited.
  statecode?: import("../enums/letter_letter_statecode").letter_letter_statecode | null;
  // Status Reason letter_letter_statuscode Select the letter's status.
  statuscode?: import("../enums/letter_letter_statuscode").letter_letter_statuscode | null;
  // Sub-Category StringType Type a subcategory to identify the letter type and relate the activity to a specific product, sales region, business group, or other function.
  subcategory?: string | null;
  // Subject [Required] StringType Type a short description about the objective or primary topic of the letter.
  subject?: string;
  // Subscription UniqueidentifierType For internal use only.
  subscriptionid?: import("../../types/Guid").Guid | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // To PartyListType Enter the account, contact, lead, or user recipients for the letter.
  to?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version number of the letter.
  versionnumber?: number | null;
}

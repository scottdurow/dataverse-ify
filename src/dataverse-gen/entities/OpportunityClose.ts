/* eslint-disable*/
import { IEntity } from "../../types/IEntity";
// Entity OpportunityClose
export const opportunitycloseMetadata = {
  typeName: "mscrm.opportunityclose",
  logicalName: "opportunityclose",
  collectionName: "opportunitycloses",
  primaryIdAttribute: "activityid",
  attributeTypes: {
    // Numeric Types
    actualdurationminutes: "Integer",
    actualrevenue: "Money",
    actualrevenue_base: "Money",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    onholdtime: "Integer",
    scheduleddurationminutes: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    community: "Optionset",
    deliveryprioritycode: "Optionset",
    instancetypecode: "Optionset",
    opportunitystatecode: "Optionset",
    opportunitystatuscode: "Optionset",
    prioritycode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    actualend: "DateOnly:UserLocal",
    actualstart: "DateOnly:UserLocal",
    createdon: "DateAndTime:UserLocal",
    deliverylastattemptedon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    postponeactivityprocessinguntil: "DateAndTime:UserLocal",
    scheduledend: "DateOnly:UserLocal",
    scheduledstart: "DateOnly:UserLocal",
    senton: "DateAndTime:UserLocal",
    sortdate: "DateAndTime:UserLocal",
  },
  navigation: {
    sla_activitypointer_sla_opportunityclose: ["mscrm.sla"],
    ownerid_opportunityclose: ["mscrm.principal"],
    opportunityid: ["mscrm.opportunity"],
    competitorid: ["mscrm.competitor"],
    activityid_activitypointer: ["mscrm.activitypointer"],
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    owningbusinessunit: ["businessunit"],
    owningteam: ["team"],
    owninguser: ["systemuser"],
    regardingobjectid: ["account","bookableresourcebooking","bookableresourcebookingheader","bulkoperation","campaign","campaignactivity","entitlement","entitlementtemplate","incident","interactionforemail","knowledgearticle","knowledgebaserecord","lead","msdyn_customerasset","msdyn_playbookinstance","opportunity","site"],
    sendermailboxid: ["mailbox"],
    serviceid: ["service"],
    slainvokedid: ["sla"],
    transactioncurrencyid: ["transactioncurrency"],
  },
};

// Attribute constants
export enum OpportunityCloseAttributes {
  ActivityAdditionalParams = "activityadditionalparams",
  ActivityId = "activityid",
  ActivityTypeCode = "activitytypecode",
  ActualDurationMinutes = "actualdurationminutes",
  ActualEnd = "actualend",
  ActualRevenue = "actualrevenue",
  ActualRevenue_Base = "actualrevenue_base",
  ActualStart = "actualstart",
  BCC = "bcc",
  Category = "category",
  CC = "cc",
  Community = "community",
  CompetitorId = "competitorid",
  CompetitorIdName = "competitoridname",
  CompetitorIdYomiName = "competitoridyominame",
  CreatedBy = "createdby",
  CreatedByExternalParty = "createdbyexternalparty",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  Customers = "customers",
  DeliveryLastAttemptedOn = "deliverylastattemptedon",
  DeliveryPriorityCode = "deliveryprioritycode",
  Description = "description",
  ExchangeItemId = "exchangeitemid",
  ExchangeRate = "exchangerate",
  ExchangeWebLink = "exchangeweblink",
  From = "from",
  ImportSequenceNumber = "importsequencenumber",
  InstanceTypeCode = "instancetypecode",
  IsBilled = "isbilled",
  IsMapiPrivate = "ismapiprivate",
  IsRegularActivity = "isregularactivity",
  IsWorkflowCreated = "isworkflowcreated",
  LastOnHoldTime = "lastonholdtime",
  LeftVoiceMail = "leftvoicemail",
  ModifiedBy = "modifiedby",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OnHoldTime = "onholdtime",
  OpportunityId = "opportunityid",
  OpportunityIdName = "opportunityidname",
  OpportunityIdType = "opportunityidtype",
  OpportunityStateCode = "opportunitystatecode",
  OpportunityStatusCode = "opportunitystatuscode",
  OptionalAttendees = "optionalattendees",
  Organizer = "organizer",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  Partners = "partners",
  PostponeActivityProcessingUntil = "postponeactivityprocessinguntil",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  RegardingObjectId = "regardingobjectid",
  RegardingObjectIdName = "regardingobjectidname",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  RequiredAttendees = "requiredattendees",
  Resources = "resources",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  ScheduledEnd = "scheduledend",
  ScheduledStart = "scheduledstart",
  SenderMailboxId = "sendermailboxid",
  SenderMailboxIdName = "sendermailboxidname",
  SentOn = "senton",
  SeriesId = "seriesid",
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
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  To = "to",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface OpportunityClose extends IEntity {
  // Activity Additional Parameters MemoType Additional information provided by the external application as JSON. For internal use only.
  activityadditionalparams?: string | null;
  // Opportunity Close UniqueidentifierType Unique identifier of the opportunity close activity.
  activityid?: import("../../types/Guid").Guid | null;
  // Activity Type EntityNameType Type of activity.
  activitytypecode?: string | null;
  // Actual Duration IntegerType Actual duration of the opportunity close activity in minutes.
  actualdurationminutes?: number | null;
  // Closed On DateTimeType Actual end time of the opportunity close activity. DateOnly:UserLocal
  actualend?: Date | null;
  // Actual Revenue MoneyType Actual revenue generated for the opportunity.
  actualrevenue?: number | null;
  // Actual Revenue (Base) MoneyType Value of the Actual Revenue in base currency.
  actualrevenue_base?: number | null;
  // Actual Start DateTimeType Actual start time of the opportunity close activity. DateOnly:UserLocal
  actualstart?: Date | null;
  // BCC PartyListType Blind Carbon-copy (bcc) recipients of the activity.
  bcc?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Category StringType Category of the opportunity close activity.
  category?: string | null;
  // CC PartyListType Carbon-copy (cc) recipients of the activity.
  cc?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Social Channel socialprofile_community Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only.
  community?: import("../enums/socialprofile_community").socialprofile_community | null;
  // Competitor LookupType Unique identifier of the competitor with which the opportunity close activity is associated.
  competitorid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  competitoridname?: string | null;
  //  StringType
  competitoridyominame?: string | null;
  // Created By LookupType Unique identifier of the user who created the opportunity close activity.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the opportunity close activity was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the opportunityclose.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Customers PartyListType Customer with which the activity is associated.
  customers?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Date Delivery Last Attempted DateTimeType Date and time when the delivery of the activity was last attempted. DateAndTime:UserLocal
  deliverylastattemptedon?: Date | null;
  // Delivery Priority activitypointer_deliveryprioritycode Priority of delivery of the activity to the email server.
  deliveryprioritycode?: import("../enums/activitypointer_deliveryprioritycode").activitypointer_deliveryprioritycode | null;
  // Description MemoType Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue.
  description?: string | null;
  // Exchange Item ID StringType The message id of activity which is returned from Exchange Server.
  exchangeitemid?: string | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Exchange WebLink StringType Shows the web link of Activity of type email.
  exchangeweblink?: string | null;
  // From PartyListType Person who the activity is from.
  from?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Recurring Instance Type opportunityclose__opportunityclose_instancetypecode Type of instance of a recurring series.
  instancetypecode?: import("../enums/opportunityclose__opportunityclose_instancetypecode").opportunityclose__opportunityclose_instancetypecode | null;
  // Is Billed BooleanType Information about whether the opportunity close activity was billed as part of resolving a case.
  isbilled?: boolean | null;
  // Is Private BooleanType For internal use only.
  ismapiprivate?: boolean | null;
  // Is Regular Activity BooleanType Information regarding whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  // Is Workflow Created BooleanType Information that specifies if the opportunity close activity was created from a workflow rule.
  isworkflowcreated?: boolean | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Left Voice Mail BooleanType Left the voice mail
  leftvoicemail?: boolean | null;
  // Modified By LookupType Unique identifier of the user who last modified the opportunity close activity.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the opportunity close activity was last modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the opportunityclose.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Opportunity [Required] LookupType Unique identifier of the opportunity closed.
  opportunityid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  opportunityidname?: string | null;
  //  EntityNameType
  opportunityidtype?: string | null;
  // Status opportunityclose_opportunityclose_opportunity_statecode Status of the opportunity.
  opportunitystatecode?: import("../enums/opportunityclose_opportunityclose_opportunity_statecode").opportunityclose_opportunityclose_opportunity_statecode | null;
  // Status Reason opportunityclose_OpportunityClose_opportunity_statuscode Status reason of the opportunity.
  opportunitystatuscode?: import("../enums/opportunityclose_opportunityclose_opportunity_statuscode").opportunityclose_OpportunityClose_opportunity_statuscode | null;
  // Optional Attendees PartyListType List of optional attendees for the activity.
  optionalattendees?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Organizer PartyListType Person who organized the activity.
  organizer?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Unique identifier of the user or team who owns the activity.
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the activity.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier of the team that owns the activity.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Owning User LookupType Unique identifier of the user that owns the activity.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  // Outsource Vendors PartyListType Outsource vendor with which activity is associated.
  partners?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Delay activity processing until DateTimeType For internal use only. DateAndTime:UserLocal
  postponeactivityprocessinguntil?: Date | null;
  // Priority opportunityclose__opportunityclose_prioritycode Priority of the activity.
  prioritycode?: import("../enums/opportunityclose__opportunityclose_prioritycode").opportunityclose__opportunityclose_prioritycode | null;
  // Process UniqueidentifierType Unique identifier of the Process.
  processid?: import("../../types/Guid").Guid | null;
  // Regarding LookupType Unique identifier of the object with which the activity is associated.
  regardingobjectid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  regardingobjectidname?: string | null;
  //  StringType
  regardingobjectidyominame?: string | null;
  //  EntityNameType
  regardingobjecttypecode?: string | null;
  // Required Attendees PartyListType List of required attendees for the activity.
  requiredattendees?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Resources PartyListType Users or facility/equipment that are required for the activity.
  resources?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Scheduled Duration IntegerType Scheduled duration of the opportunity close activity, specified in minutes.
  scheduleddurationminutes?: number | null;
  // Scheduled End DateTimeType Scheduled end time of the opportunity close activity. DateOnly:UserLocal
  scheduledend?: Date | null;
  // Scheduled Start DateTimeType Scheduled start time of the opportunity close activity. DateOnly:UserLocal
  scheduledstart?: Date | null;
  // Sender's Mailbox LookupType Unique identifier of the mailbox associated with the sender of the email message.
  sendermailboxid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  sendermailboxidname?: string | null;
  // Date Sent DateTimeType Date and time when the activity was sent. DateAndTime:UserLocal
  senton?: Date | null;
  // Series Id UniqueidentifierType Uniqueidentifier specifying the id of recurring series of an instance.
  seriesid?: import("../../types/Guid").Guid | null;
  // Service LookupType Unique identifier of the service with which the opportunity close activity is associated.
  serviceid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  serviceidname?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the case record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: Date | null;
  // (Deprecated) Process Stage UniqueidentifierType Unique identifier of the Stage.
  stageid?: import("../../types/Guid").Guid | null;
  // Status opportunityclose_opportunityclose_statecode Shows whether the opportunity close activity is open, completed, or canceled.  By default, opportunity close activities are completed unless the opportunity is reactivated,  which updates them to canceled.
  statecode?: import("../enums/opportunityclose_opportunityclose_statecode").opportunityclose_opportunityclose_statecode | null;
  // Status Reason opportunityclose_opportunityclose_statuscode Reason for the status of the opportunity close activity.
  statuscode?: import("../enums/opportunityclose_opportunityclose_statuscode").opportunityclose_opportunityclose_statuscode | null;
  // Sub-Category StringType Subcategory of the opportunity close activity.
  subcategory?: string | null;
  // Subject StringType Subject associated with the opportunity close activity.
  subject?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // To PartyListType Person who is the receiver of the activity.
  to?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version number of the activity.
  versionnumber?: number | null;
}

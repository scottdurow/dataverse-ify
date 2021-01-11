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
    timezoneruleversionnumber: "Integer",
    exchangerate: "Decimal",
    versionnumber: "BigInt",
    actualrevenue: "Money",
    utcconversiontimezonecode: "Integer",
    scheduleddurationminutes: "Integer",
    importsequencenumber: "Integer",
    onholdtime: "Integer",
    actualdurationminutes: "Integer",
    actualrevenue_base: "Money",
    // Optionsets
    instancetypecode: "Optionset",
    prioritycode: "Optionset",
    opportunitystatuscode: "Optionset",
    deliveryprioritycode: "Optionset",
    statecode: "Optionset",
    community: "Optionset",
    statuscode: "Optionset",
    opportunitystatecode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    deliverylastattemptedon: "DateAndTime:UserLocal",
    scheduledstart: "DateOnly:UserLocal",
    actualstart: "DateOnly:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    postponeactivityprocessinguntil: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    sortdate: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    actualend: "DateOnly:UserLocal",
    senton: "DateAndTime:UserLocal",
    scheduledend: "DateOnly:UserLocal",
  },
  navigation: {
    sla_activitypointer_sla_opportunityclose: ["mscrm.sla"],
    ownerid_opportunityclose: ["mscrm.principal"],
    opportunityid: ["mscrm.opportunity"],
    competitorid: ["mscrm.competitor"],
    activityid_activitypointer: ["mscrm.activitypointer"],
    createdonbehalfby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    owningteam: ["team"],
    sendermailboxid: ["mailbox"],
    regardingobjectid: ["account","bookableresourcebooking","bookableresourcebookingheader","bulkoperation","campaign","campaignactivity","entitlement","entitlementtemplate","incident","interactionforemail","knowledgearticle","knowledgebaserecord","lead","msdyn_customerasset","msdyn_playbookinstance","opportunity","site"],
    serviceid: ["service"],
    transactioncurrencyid: ["transactioncurrency"],
    slainvokedid: ["sla"],
    createdby: ["systemuser"],
    modifiedby: ["systemuser"],
    owninguser: ["systemuser"],
    owningbusinessunit: ["businessunit"],
  },
};

// Attribute constants
export enum OpportunityCloseAttributes {
  IsBilled = "isbilled",
  InstanceTypeCode = "instancetypecode",
  CreatedOn = "createdon",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OpportunityIdType = "opportunityidtype",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  From = "from",
  TraversedPath = "traversedpath",
  ActivityId = "activityid",
  OpportunityIdName = "opportunityidname",
  OwnerIdType = "owneridtype",
  Customers = "customers",
  CreatedOnBehalfBy = "createdonbehalfby",
  DeliveryLastAttemptedOn = "deliverylastattemptedon",
  Partners = "partners",
  Resources = "resources",
  SenderMailboxIdName = "sendermailboxidname",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  OwnerIdName = "owneridname",
  PriorityCode = "prioritycode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  SLAInvokedIdName = "slainvokedidname",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  ExchangeItemId = "exchangeitemid",
  ScheduledStart = "scheduledstart",
  ActualStart = "actualstart",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ExchangeRate = "exchangerate",
  IsRegularActivity = "isregularactivity",
  Subcategory = "subcategory",
  OpportunityStatusCode = "opportunitystatuscode",
  OwningTeam = "owningteam",
  DeliveryPriorityCode = "deliveryprioritycode",
  SenderMailboxId = "sendermailboxid",
  RegardingObjectId = "regardingobjectid",
  SLAId = "slaid",
  StateCode = "statecode",
  SeriesId = "seriesid",
  Subject = "subject",
  CC = "cc",
  BCC = "bcc",
  OpportunityId = "opportunityid",
  ServiceId = "serviceid",
  OverriddenCreatedOn = "overriddencreatedon",
  Community = "community",
  VersionNumber = "versionnumber",
  RegardingObjectIdName = "regardingobjectidname",
  ActivityAdditionalParams = "activityadditionalparams",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  ActualRevenue = "actualrevenue",
  ActivityTypeCode = "activitytypecode",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  Organizer = "organizer",
  OwnerId = "ownerid",
  IsWorkflowCreated = "isworkflowcreated",
  PostponeActivityProcessingUntil = "postponeactivityprocessinguntil",
  OwnerIdYomiName = "owneridyominame",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  Category = "category",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ProcessId = "processid",
  Description = "description",
  ModifiedOn = "modifiedon",
  CompetitorIdName = "competitoridname",
  CreatedByName = "createdbyname",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  SortDate = "sortdate",
  IsMapiPrivate = "ismapiprivate",
  RequiredAttendees = "requiredattendees",
  LastOnHoldTime = "lastonholdtime",
  StageId = "stageid",
  OptionalAttendees = "optionalattendees",
  LeftVoiceMail = "leftvoicemail",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  TransactionCurrencyId = "transactioncurrencyid",
  CompetitorIdYomiName = "competitoridyominame",
  SLAInvokedId = "slainvokedid",
  CreatedBy = "createdby",
  ModifiedBy = "modifiedby",
  ImportSequenceNumber = "importsequencenumber",
  CompetitorId = "competitorid",
  CreatedByYomiName = "createdbyyominame",
  OwningUser = "owninguser",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  ActualEnd = "actualend",
  OwningBusinessUnit = "owningbusinessunit",
  CreatedByExternalParty = "createdbyexternalparty",
  ModifiedByYomiName = "modifiedbyyominame",
  To = "to",
  OnHoldTime = "onholdtime",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ServiceIdName = "serviceidname",
  ExchangeWebLink = "exchangeweblink",
  SentOn = "senton",
  ScheduledEnd = "scheduledend",
  StatusCode = "statuscode",
  ModifiedByName = "modifiedbyname",
  OpportunityStateCode = "opportunitystatecode",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  ActualDurationMinutes = "actualdurationminutes",
  SLAName = "slaname",
  ActualRevenue_Base = "actualrevenue_base",
}

// Early Bound Interface
export interface OpportunityClose extends IEntity {
  // Is Billed BooleanType Information about whether the opportunity close activity was billed as part of resolving a case.
  isbilled?: boolean | null;
  // Recurring Instance Type opportunityclose__opportunityclose_instancetypecode Type of instance of a recurring series.
  instancetypecode?: import("../enums/opportunityclose__opportunityclose_instancetypecode").opportunityclose__opportunityclose_instancetypecode | null;
  // Created On DateTimeType Date and time when the opportunity close activity was created. DateAndTime:UserLocal
  createdon?: Date | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  //  EntityNameType
  opportunityidtype?: string | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  // From PartyListType Person who the activity is from.
  from?: import("../../types/ActivityParty").ActivityParty[] | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // Opportunity Close UniqueidentifierType Unique identifier of the opportunity close activity.
  activityid?: import("../../types/Guid").Guid | null;
  //  StringType
  opportunityidname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  // Customers PartyListType Customer with which the activity is associated.
  customers?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the opportunityclose.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Date Delivery Last Attempted DateTimeType Date and time when the delivery of the activity was last attempted. DateAndTime:UserLocal
  deliverylastattemptedon?: Date | null;
  // Outsource Vendors PartyListType Outsource vendor with which activity is associated.
  partners?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Resources PartyListType Users or facility/equipment that are required for the activity.
  resources?: import("../../types/ActivityParty").ActivityParty[] | null;
  //  StringType
  sendermailboxidname?: string | null;
  //  StringType
  regardingobjectidyominame?: string | null;
  //  StringType
  owneridname?: string | null;
  // Priority opportunityclose__opportunityclose_prioritycode Priority of the activity.
  prioritycode?: import("../enums/opportunityclose__opportunityclose_prioritycode").opportunityclose__opportunityclose_prioritycode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  // Exchange Item ID StringType The message id of activity which is returned from Exchange Server.
  exchangeitemid?: string | null;
  // Scheduled Start DateTimeType Scheduled start time of the opportunity close activity. DateOnly:UserLocal
  scheduledstart?: Date | null;
  // Actual Start DateTimeType Actual start time of the opportunity close activity. DateOnly:UserLocal
  actualstart?: Date | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the opportunityclose.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Is Regular Activity BooleanType Information regarding whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  // Sub-Category StringType Subcategory of the opportunity close activity.
  subcategory?: string | null;
  // Status Reason opportunityclose_OpportunityClose_opportunity_statuscode Status reason of the opportunity.
  opportunitystatuscode?: import("../enums/opportunityclose_opportunityclose_opportunity_statuscode").opportunityclose_OpportunityClose_opportunity_statuscode | null;
  // Owning Team LookupType Unique identifier of the team that owns the activity.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Delivery Priority activitypointer_deliveryprioritycode Priority of delivery of the activity to the email server.
  deliveryprioritycode?: import("../enums/activitypointer_deliveryprioritycode").activitypointer_deliveryprioritycode | null;
  // Sender's Mailbox LookupType Unique identifier of the mailbox associated with the sender of the email message.
  sendermailboxid?: import("../../types/EntityReference").EntityReference | null;
  // Regarding LookupType Unique identifier of the object with which the activity is associated.
  regardingobjectid?: import("../../types/EntityReference").EntityReference | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the case record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Status opportunityclose_opportunityclose_statecode Shows whether the opportunity close activity is open, completed, or canceled.  By default, opportunity close activities are completed unless the opportunity is reactivated,  which updates them to canceled.
  statecode?: import("../enums/opportunityclose_opportunityclose_statecode").opportunityclose_opportunityclose_statecode | null;
  // Series Id UniqueidentifierType Uniqueidentifier specifying the id of recurring series of an instance.
  seriesid?: import("../../types/Guid").Guid | null;
  // Subject StringType Subject associated with the opportunity close activity.
  subject?: string | null;
  // CC PartyListType Carbon-copy (cc) recipients of the activity.
  cc?: import("../../types/ActivityParty").ActivityParty[] | null;
  // BCC PartyListType Blind Carbon-copy (bcc) recipients of the activity.
  bcc?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Opportunity [Required] LookupType Unique identifier of the opportunity closed.
  opportunityid?: import("../../types/EntityReference").EntityReference;
  // Service LookupType Unique identifier of the service with which the opportunity close activity is associated.
  serviceid?: import("../../types/EntityReference").EntityReference | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Social Channel socialprofile_community Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only.
  community?: import("../enums/socialprofile_community").socialprofile_community | null;
  // Version Number BigIntType Version number of the activity.
  versionnumber?: number | null;
  //  StringType
  regardingobjectidname?: string | null;
  // Activity Additional Parameters MemoType Additional information provided by the external application as JSON. For internal use only.
  activityadditionalparams?: string | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Actual Revenue MoneyType Actual revenue generated for the opportunity.
  actualrevenue?: number | null;
  // Activity Type EntityNameType Type of activity.
  activitytypecode?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Organizer PartyListType Person who organized the activity.
  organizer?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Owner OwnerType Unique identifier of the user or team who owns the activity.
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  // Is Workflow Created BooleanType Information that specifies if the opportunity close activity was created from a workflow rule.
  isworkflowcreated?: boolean | null;
  // Delay activity processing until DateTimeType For internal use only. DateAndTime:UserLocal
  postponeactivityprocessinguntil?: Date | null;
  //  StringType
  owneridyominame?: string | null;
  // Scheduled Duration IntegerType Scheduled duration of the opportunity close activity, specified in minutes.
  scheduleddurationminutes?: number | null;
  // Category StringType Category of the opportunity close activity.
  category?: string | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  // Process UniqueidentifierType Unique identifier of the Process.
  processid?: import("../../types/Guid").Guid | null;
  // Description MemoType Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue.
  description?: string | null;
  // Modified On DateTimeType Date and time when the opportunity close activity was last modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  //  StringType
  competitoridname?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  EntityNameType
  regardingobjecttypecode?: string | null;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: Date | null;
  // Is Private BooleanType For internal use only.
  ismapiprivate?: boolean | null;
  // Required Attendees PartyListType List of required attendees for the activity.
  requiredattendees?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // (Deprecated) Process Stage UniqueidentifierType Unique identifier of the Stage.
  stageid?: import("../../types/Guid").Guid | null;
  // Optional Attendees PartyListType List of optional attendees for the activity.
  optionalattendees?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Left Voice Mail BooleanType Left the voice mail
  leftvoicemail?: boolean | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  competitoridyominame?: string | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  // Created By LookupType Unique identifier of the user who created the opportunity close activity.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  // Modified By LookupType Unique identifier of the user who last modified the opportunity close activity.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Competitor LookupType Unique identifier of the competitor with which the opportunity close activity is associated.
  competitorid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyyominame?: string | null;
  // Owning User LookupType Unique identifier of the user that owns the activity.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Closed On DateTimeType Actual end time of the opportunity close activity. DateOnly:UserLocal
  actualend?: Date | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the activity.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // To PartyListType Person who is the receiver of the activity.
  to?: import("../../types/ActivityParty").ActivityParty[] | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  serviceidname?: string | null;
  // Exchange WebLink StringType Shows the web link of Activity of type email.
  exchangeweblink?: string | null;
  // Date Sent DateTimeType Date and time when the activity was sent. DateAndTime:UserLocal
  senton?: Date | null;
  // Scheduled End DateTimeType Scheduled end time of the opportunity close activity. DateOnly:UserLocal
  scheduledend?: Date | null;
  // Status Reason opportunityclose_opportunityclose_statuscode Reason for the status of the opportunity close activity.
  statuscode?: import("../enums/opportunityclose_opportunityclose_statuscode").opportunityclose_opportunityclose_statuscode | null;
  //  StringType
  modifiedbyname?: string | null;
  // Status opportunityclose_opportunityclose_opportunity_statecode Status of the opportunity.
  opportunitystatecode?: import("../enums/opportunityclose_opportunityclose_opportunity_statecode").opportunityclose_opportunityclose_opportunity_statecode | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  // Actual Duration IntegerType Actual duration of the opportunity close activity in minutes.
  actualdurationminutes?: number | null;
  //  StringType
  slaname?: string | null;
  // Actual Revenue (Base) MoneyType Value of the Actual Revenue in base currency.
  actualrevenue_base?: number | null;
}

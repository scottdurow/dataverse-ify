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
    actualrevenue_base: "Money",
    utcconversiontimezonecode: "Integer",
    scheduleddurationminutes: "Integer",
    onholdtime: "Integer",
    timezoneruleversionnumber: "Integer",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    actualrevenue: "Money",
    actualdurationminutes: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    instancetypecode: "Optionset",
    opportunitystatuscode: "Optionset",
    deliveryprioritycode: "Optionset",
    statecode: "Optionset",
    community: "Optionset",
    prioritycode: "Optionset",
    statuscode: "Optionset",
    opportunitystatecode: "Optionset",
    // Date Formats
    modifiedon: "DateAndTime:UserLocal",
    postponeactivityprocessinguntil: "DateAndTime:UserLocal",
    deliverylastattemptedon: "DateAndTime:UserLocal",
    scheduledstart: "DateOnly:UserLocal",
    sortdate: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    actualend: "DateOnly:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    createdon: "DateAndTime:UserLocal",
    actualstart: "DateOnly:UserLocal",
    senton: "DateAndTime:UserLocal",
    scheduledend: "DateOnly:UserLocal",
  },
  navigation: {
    sla_activitypointer_sla_opportunityclose: ["mscrm.sla"],
    ownerid_opportunityclose: ["mscrm.principal"],
    opportunityid: ["mscrm.opportunity"],
    competitorid: ["mscrm.competitor"],
    activityid_activitypointer: ["mscrm.activitypointer"],
    regardingobjectid: ["account","bookableresourcebooking","bookableresourcebookingheader","bulkoperation","campaign","campaignactivity","entitlement","entitlementtemplate","incident","interactionforemail","knowledgearticle","knowledgebaserecord","lead","opportunity","site"],
    transactioncurrencyid: ["transactioncurrency"],
    slainvokedid: ["sla"],
    createdby: ["systemuser"],
    modifiedby: ["systemuser"],
    serviceid: ["service"],
    owninguser: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    owningteam: ["team"],
    owningbusinessunit: ["businessunit"],
    sendermailboxid: ["mailbox"],
    createdonbehalfby: ["systemuser"],
  },
};

// Attribute constants
export enum OpportunityCloseAttributes {
  IsBilled = "isbilled",
  ActualRevenue_Base = "actualrevenue_base",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  InstanceTypeCode = "instancetypecode",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  OpportunityIdType = "opportunityidtype",
  OwnerId = "ownerid",
  From = "from",
  ModifiedOn = "modifiedon",
  SeriesId = "seriesid",
  PostponeActivityProcessingUntil = "postponeactivityprocessinguntil",
  IsWorkflowCreated = "isworkflowcreated",
  OwnerIdYomiName = "owneridyominame",
  OpportunityIdName = "opportunityidname",
  OnHoldTime = "onholdtime",
  Customers = "customers",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  DeliveryLastAttemptedOn = "deliverylastattemptedon",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  ProcessId = "processid",
  OwnerIdName = "owneridname",
  Description = "description",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  SLAName = "slaname",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  CompetitorIdName = "competitoridname",
  ScheduledStart = "scheduledstart",
  CreatedByName = "createdbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  ExchangeRate = "exchangerate",
  SortDate = "sortdate",
  OpportunityStatusCode = "opportunitystatuscode",
  IsMapiPrivate = "ismapiprivate",
  DeliveryPriorityCode = "deliveryprioritycode",
  RequiredAttendees = "requiredattendees",
  RegardingObjectId = "regardingobjectid",
  LastOnHoldTime = "lastonholdtime",
  StateCode = "statecode",
  StageId = "stageid",
  Subject = "subject",
  OptionalAttendees = "optionalattendees",
  BCC = "bcc",
  LeftVoiceMail = "leftvoicemail",
  Category = "category",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  Community = "community",
  TransactionCurrencyId = "transactioncurrencyid",
  RegardingObjectIdName = "regardingobjectidname",
  CompetitorId = "competitorid",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  SLAInvokedId = "slainvokedid",
  ActivityTypeCode = "activitytypecode",
  CreatedBy = "createdby",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  ModifiedBy = "modifiedby",
  TraversedPath = "traversedpath",
  Organizer = "organizer",
  OwnerIdType = "owneridtype",
  ImportSequenceNumber = "importsequencenumber",
  Partners = "partners",
  ServiceId = "serviceid",
  PriorityCode = "prioritycode",
  CreatedByYomiName = "createdbyyominame",
  ExchangeItemId = "exchangeitemid",
  OwningUser = "owninguser",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  OwningTeam = "owningteam",
  ActualEnd = "actualend",
  SLAId = "slaid",
  OwningBusinessUnit = "owningbusinessunit",
  CC = "cc",
  CreatedByExternalParty = "createdbyexternalparty",
  OverriddenCreatedOn = "overriddencreatedon",
  ModifiedByYomiName = "modifiedbyyominame",
  ActivityAdditionalParams = "activityadditionalparams",
  To = "to",
  CreatedOn = "createdon",
  IsRegularActivity = "isregularactivity",
  ActivityId = "activityid",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  SenderMailboxIdName = "sendermailboxidname",
  ServiceIdName = "serviceidname",
  ActualStart = "actualstart",
  ExchangeWebLink = "exchangeweblink",
  SenderMailboxId = "sendermailboxid",
  SentOn = "senton",
  OpportunityId = "opportunityid",
  ScheduledEnd = "scheduledend",
  ActualRevenue = "actualrevenue",
  StatusCode = "statuscode",
  CreatedOnBehalfBy = "createdonbehalfby",
  Subcategory = "subcategory",
  ActualDurationMinutes = "actualdurationminutes",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  OpportunityStateCode = "opportunitystatecode",
  ModifiedByName = "modifiedbyname",
  CompetitorIdYomiName = "competitoridyominame",
  SLAInvokedIdName = "slainvokedidname",
  Resources = "resources",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface OpportunityClose extends IEntity {
  // Is Billed BooleanType Information about whether the opportunity close activity was billed as part of resolving a case.
  isbilled?: boolean | null;
  // Actual Revenue (Base) MoneyType Value of the Actual Revenue in base currency.
  actualrevenue_base?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Recurring Instance Type opportunityclose_none_opportunityclose_instancetypecode Type of instance of a recurring series.
  instancetypecode?: import("../enums/opportunityclose_none_opportunityclose_instancetypecode").opportunityclose_none_opportunityclose_instancetypecode | null;
  // Scheduled Duration IntegerType Scheduled duration of the opportunity close activity, specified in minutes.
  scheduleddurationminutes?: number | null;
  //  EntityNameType
  opportunityidtype?: string | null;
  // Owner OwnerType Unique identifier of the user or team who owns the activity.
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  // From PartyListType Person who the activity is from.
  from?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Modified On DateTimeType Date and time when the opportunity close activity was last modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Series Id UniqueidentifierType Uniqueidentifier specifying the id of recurring series of an instance.
  seriesid?: import("../../types/Guid").Guid | null;
  // Delay activity processing until DateTimeType For internal use only. DateAndTime:UserLocal
  postponeactivityprocessinguntil?: Date | null;
  // Is Workflow Created BooleanType Information that specifies if the opportunity close activity was created from a workflow rule.
  isworkflowcreated?: boolean | null;
  //  StringType
  owneridyominame?: string | null;
  //  StringType
  opportunityidname?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Customers PartyListType Customer with which the activity is associated.
  customers?: import("../../types/ActivityParty").ActivityParty[] | null;
  //  StringType
  regardingobjectidyominame?: string | null;
  // Date Delivery Last Attempted DateTimeType Date and time when the delivery of the activity was last attempted. DateAndTime:UserLocal
  deliverylastattemptedon?: Date | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Process UniqueidentifierType Unique identifier of the Process.
  processid?: import("../../types/Guid").Guid | null;
  //  StringType
  owneridname?: string | null;
  // Description MemoType Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue.
  description?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  //  StringType
  slaname?: string | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  //  StringType
  competitoridname?: string | null;
  // Scheduled Start DateTimeType Scheduled start time of the opportunity close activity. DateOnly:UserLocal
  scheduledstart?: Date | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  //  EntityNameType
  regardingobjecttypecode?: string | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: Date | null;
  // Status Reason opportunityclose_OpportunityClose_opportunity_statuscode Status reason of the opportunity.
  opportunitystatuscode?: import("../enums/opportunityclose_OpportunityClose_opportunity_statuscode").opportunityclose_OpportunityClose_opportunity_statuscode | null;
  // Is Private BooleanType For internal use only.
  ismapiprivate?: boolean | null;
  // Delivery Priority activitypointer_deliveryprioritycode Priority of delivery of the activity to the email server.
  deliveryprioritycode?: import("../enums/activitypointer_deliveryprioritycode").activitypointer_deliveryprioritycode | null;
  // Required Attendees PartyListType List of required attendees for the activity.
  requiredattendees?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Regarding LookupType Unique identifier of the object with which the activity is associated.
  regardingobjectid?: import("../../types/EntityReference").EntityReference | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Status opportunityclose_opportunityclose_statecode Shows whether the opportunity close activity is open, completed, or canceled.  By default, opportunity close activities are completed unless the opportunity is reactivated,  which updates them to canceled.
  statecode?: import("../enums/opportunityclose_opportunityclose_statecode").opportunityclose_opportunityclose_statecode | null;
  // Process Stage UniqueidentifierType Unique identifier of the Stage.
  stageid?: import("../../types/Guid").Guid | null;
  // Subject StringType Subject associated with the opportunity close activity.
  subject?: string | null;
  // Optional Attendees PartyListType List of optional attendees for the activity.
  optionalattendees?: import("../../types/ActivityParty").ActivityParty[] | null;
  // BCC PartyListType Blind Carbon-copy (bcc) recipients of the activity.
  bcc?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Left Voice Mail BooleanType Left the voice mail
  leftvoicemail?: boolean | null;
  // Category StringType Category of the opportunity close activity.
  category?: string | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  // Social Channel socialprofile_community Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only.
  community?: import("../enums/socialprofile_community").socialprofile_community | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  regardingobjectidname?: string | null;
  // Competitor LookupType Unique identifier of the competitor with which the opportunity close activity is associated.
  competitorid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  // Activity Type EntityNameType Type of activity.
  activitytypecode?: string | null;
  // Created By LookupType Unique identifier of the user who created the opportunity close activity.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  // Modified By LookupType Unique identifier of the user who last modified the opportunity close activity.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  // Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // Organizer PartyListType Person who organized the activity.
  organizer?: import("../../types/ActivityParty").ActivityParty[] | null;
  //  EntityNameType
  owneridtype?: string | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Outsource Vendors PartyListType Outsource vendor with which activity is associated.
  partners?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Service LookupType Unique identifier of the service with which the opportunity close activity is associated.
  serviceid?: import("../../types/EntityReference").EntityReference | null;
  // Priority opportunityclose_none_opportunityclose_prioritycode Priority of the activity.
  prioritycode?: import("../enums/opportunityclose_none_opportunityclose_prioritycode").opportunityclose_none_opportunityclose_prioritycode | null;
  //  StringType
  createdbyyominame?: string | null;
  // Exchange Item ID StringType The message id of activity which is returned from Exchange Server.
  exchangeitemid?: string | null;
  // Owning User LookupType Unique identifier of the user that owns the activity.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the opportunityclose.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Owning Team LookupType Unique identifier of the team that owns the activity.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Closed On DateTimeType Actual end time of the opportunity close activity. DateOnly:UserLocal
  actualend?: Date | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the case record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the activity.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  // CC PartyListType Carbon-copy (cc) recipients of the activity.
  cc?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Activity Additional Parameters MemoType Additional information provided by the external application as JSON. For internal use only.
  activityadditionalparams?: string | null;
  // To PartyListType Person who is the receiver of the activity.
  to?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Created On DateTimeType Date and time when the opportunity close activity was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Is Regular Activity BooleanType Information regarding whether the activity is a regular activity type or event type.
  isregularactivity?: boolean | null;
  // Opportunity Close UniqueidentifierType Unique identifier of the opportunity close activity.
  activityid?: import("../../types/Guid").Guid | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  sendermailboxidname?: string | null;
  //  StringType
  serviceidname?: string | null;
  // Actual Start DateTimeType Actual start time of the opportunity close activity. DateOnly:UserLocal
  actualstart?: Date | null;
  // Exchange WebLink StringType Shows the web link of Activity of type email.
  exchangeweblink?: string | null;
  // Sender's Mailbox LookupType Unique identifier of the mailbox associated with the sender of the email message.
  sendermailboxid?: import("../../types/EntityReference").EntityReference | null;
  // Date Sent DateTimeType Date and time when the activity was sent. DateAndTime:UserLocal
  senton?: Date | null;
  // Opportunity [Required] LookupType Unique identifier of the opportunity closed.
  opportunityid?: import("../../types/EntityReference").EntityReference;
  // Scheduled End DateTimeType Scheduled end time of the opportunity close activity. DateOnly:UserLocal
  scheduledend?: Date | null;
  // Actual Revenue MoneyType Actual revenue generated for the opportunity.
  actualrevenue?: number | null;
  // Status Reason opportunityclose_opportunityclose_statuscode Reason for the status of the opportunity close activity.
  statuscode?: import("../enums/opportunityclose_opportunityclose_statuscode").opportunityclose_opportunityclose_statuscode | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the opportunityclose.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Sub-Category StringType Subcategory of the opportunity close activity.
  subcategory?: string | null;
  // Actual Duration IntegerType Actual duration of the opportunity close activity in minutes.
  actualdurationminutes?: number | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  // Status opportunityclose_OpportunityClose_opportunity_statecode Status of the opportunity.
  opportunitystatecode?: import("../enums/opportunityclose_OpportunityClose_opportunity_statecode").opportunityclose_OpportunityClose_opportunity_statecode | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  competitoridyominame?: string | null;
  //  StringType
  slainvokedidname?: string | null;
  // Resources PartyListType Users or facility/equipment that are required for the activity.
  resources?: import("../../types/ActivityParty").ActivityParty[] | null;
  // Version Number BigIntType Version number of the activity.
  versionnumber?: number | null;
}

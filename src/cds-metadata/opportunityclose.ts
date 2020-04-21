/* eslint-disable camelcase */
import { EntityReference } from "../types/EntityReference";
import { ActivityParty } from "../types/ActivityParty";
import { Guid } from "../types/Guid";
import { IEntity } from "../types/IEntity";

/* eslint-disable @typescript-eslint/camelcase */
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
    activityid_activitypointer: ["activitypointer"],
    competitorid: ["competitor"],
    opportunityid: ["opportunity"],
    ownerid_opportunityclose: ["principal"],
    sla_activitypointer_sla_opportunityclose: ["sla"],
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    owningbusinessunit: ["businessunit"],
    owningteam: ["team"],
    owninguser: ["systemuser"],
    regardingobjectid: [
      "account",
      "bookableresourcebooking",
      "bookableresourcebookingheader",
      "bulkoperation",
      "campaign",
      "campaignactivity",
      "entitlement",
      "entitlementtemplate",
      "incident",
      "interactionforemail",
      "knowledgearticle",
      "knowledgebaserecord",
      "lead",
      "opportunity",
      "site",
    ],
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
  CreatedBy = "createdby",
  CreatedByExternalParty = "createdbyexternalparty",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
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
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  OnHoldTime = "onholdtime",
  OpportunityId = "opportunityid",
  OpportunityStateCode = "opportunitystatecode",
  OpportunityStatusCode = "opportunitystatuscode",
  OptionalAttendees = "optionalattendees",
  Organizer = "organizer",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwningBusinessUnit = "owningbusinessunit",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  Partners = "partners",
  PostponeActivityProcessingUntil = "postponeactivityprocessinguntil",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  RegardingObjectId = "regardingobjectid",
  RequiredAttendees = "requiredattendees",
  Resources = "resources",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  ScheduledEnd = "scheduledend",
  ScheduledStart = "scheduledstart",
  SenderMailboxId = "sendermailboxid",
  SentOn = "senton",
  SeriesId = "seriesid",
  ServiceId = "serviceid",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SortDate = "sortdate",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  Subcategory = "subcategory",
  Subject = "subject",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  To = "to",
  TransactionCurrencyId = "transactioncurrencyid",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

export enum socialprofile_community {
  Facebook = 1,
  Twitter = 2,
  Other = 0,
}
export enum activitypointer_deliveryprioritycode {
  Low = 0,
  Normal = 1,
  High = 2,
}

export enum opportunityclose_none_opportunityclose_instancetypecode {
  Not_Recurring = 0,
  Recurring_Master = 1,
  Recurring_Instance = 2,
  Recurring_Exception = 3,
  Recurring_Future_Exception = 4,
}

export enum opportunityclose_OpportunityClose_opportunity_statecode {
  Open = 0,
  Won = 1,
  Lost = 2,
}

export enum opportunityclose_OpportunityClose_opportunity_statuscode {
  In_Progress = 1,
  On_Hold = 2,
  Won = 3,
  Canceled = 4,
  OutSold = 5,
}

export enum opportunityclose_none_opportunityclose_prioritycode {
  Low = 0,
  Normal = 1,
  High = 2,
}

export enum opportunityclose_opportunityclose_statecode {
  Open = 0,
  Completed = 1,
  Canceled = 2,
}

export enum opportunityclose_opportunityclose_statuscode {
  Open = 1,
  Completed = 2,
  Canceled = 3,
}

export interface OpportunityClose extends IEntity {
  /**Activity Additional Parameters	MemoType
      Additional information provided by the external application as JSON. For internal use only.
      */
  activityadditionalparams?: string;
  /**Opportunity Close	UniqueidentifierType
      Unique identifier of the opportunity close activity.
      */
  activityid?: Guid;
  /**Activity Type	EntityNameType
      Type of activity.
      */
  activitytypecode?: string;
  /**Actual Duration	IntegerType
      Actual duration of the opportunity close activity in minutes.
      */
  actualdurationminutes?: number;
  /**Closed On	DateTimeType
      Actual end time of the opportunity close activity.
      DateOnly:UserLocal*/
  actualend?: Date;
  /**Actual Revenue	MoneyType
      Actual revenue generated for the opportunity.
      */
  actualrevenue?: number;
  /**Actual Revenue (Base)	MoneyType
      Value of the Actual Revenue in base currency.
      */
  actualrevenue_base?: number;
  /**Actual Start	DateTimeType
      Actual start time of the opportunity close activity.
      DateOnly:UserLocal*/
  actualstart?: Date;
  /**BCC	PartyListType
      Blind Carbon-copy (bcc) recipients of the activity.
      */
  bcc?: ActivityParty[];
  /**Category	StringType
      Category of the opportunity close activity.
      */
  category?: string;
  /**CC	PartyListType
      Carbon-copy (cc) recipients of the activity.
      */
  cc?: ActivityParty[];
  /**Social Channel	socialprofile_community
      Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only.
      */
  community?: socialprofile_community;
  /**Competitor	LookupType
      Unique identifier of the competitor with which the opportunity close activity is associated.
      */
  competitorid?: EntityReference;
  /**Created By	LookupType
      Unique identifier of the user who created the opportunity close activity.
      */
  createdby?: EntityReference;
  /**Created By (External Party)	LookupType
      Shows the external party who created the record.
      */
  createdbyexternalparty?: EntityReference;
  /**Created On	DateTimeType
      Date and time when the opportunity close activity was created.
      DateAndTime:UserLocal*/
  createdon?: Date;
  /**Created By (Delegate)	LookupType
      Unique identifier of the delegate user who created the opportunityclose.
      */
  createdonbehalfby?: EntityReference;
  /**Customers	PartyListType
      Customer with which the activity is associated.
      */
  customers?: ActivityParty[];
  /**Date Delivery Last Attempted	DateTimeType
      Date and time when the delivery of the activity was last attempted.
      DateAndTime:UserLocal*/
  deliverylastattemptedon?: Date;
  /**Delivery Priority	activitypointer_deliveryprioritycode
      Priority of delivery of the activity to the email server.
      */
  deliveryprioritycode?: activitypointer_deliveryprioritycode;
  /**Description	MemoType
      Activity that is created automatically when an opportunity is closed, containing information such as the description of the closing and actual revenue.
      */
  description?: string;
  /**Exchange Item ID	StringType
      The message id of activity which is returned from Exchange Server.
      */
  exchangeitemid?: string;
  /**Exchange Rate	DecimalType
      Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
      */
  exchangerate?: number;
  /**Exchange WebLink	StringType
      Shows the web link of Activity of type email.
      */
  exchangeweblink?: string;
  /**From	PartyListType
      Person who the activity is from.
      */
  from?: ActivityParty[];
  /**Import Sequence Number	IntegerType
      Sequence number of the import that created this record.
      */
  importsequencenumber?: number;
  /**Recurring Instance Type	opportunityclose_none_opportunityclose_instancetypecode
      Type of instance of a recurring series.
      */
  instancetypecode?: opportunityclose_none_opportunityclose_instancetypecode;
  /**Is Billed	BooleanType
      Information about whether the opportunity close activity was billed as part of resolving a case.
      */
  isbilled?: boolean;
  /**Is Private	BooleanType
      For internal use only.
      */
  ismapiprivate?: boolean;
  /**Is Regular Activity	BooleanType
      Information regarding whether the activity is a regular activity type or event type.
      */
  isregularactivity?: boolean;
  /**Is Workflow Created	BooleanType
      Information that specifies if the opportunity close activity was created from a workflow rule.
      */
  isworkflowcreated?: boolean;
  /**Last On Hold Time	DateTimeType
      Contains the date and time stamp of the last on hold time.
      DateAndTime:UserLocal*/
  lastonholdtime?: Date;
  /**Left Voice Mail	BooleanType
      Left the voice mail
      */
  leftvoicemail?: boolean;
  /**Modified By	LookupType
      Unique identifier of the user who last modified the opportunity close activity.
      */
  modifiedby?: EntityReference;
  /**Modified By (External Party)	LookupType
      Shows the external party who modified the record.
      */
  modifiedbyexternalparty?: EntityReference;
  /**Modified On	DateTimeType
      Date and time when the opportunity close activity was last modified.
      DateAndTime:UserLocal*/
  modifiedon?: Date;
  /**Modified By (Delegate)	LookupType
      Unique identifier of the delegate user who last modified the opportunityclose.
      */
  modifiedonbehalfby?: EntityReference;
  /**On Hold Time (Minutes)	IntegerType
      Shows how long, in minutes, that the record was on hold.
      */
  onholdtime?: number;
  /**Opportunity(Required)	LookupType
      Unique identifier of the opportunity closed.
      */
  opportunityid?: EntityReference;
  /**Status	opportunityclose_OpportunityClose_opportunity_statecode
      Status of the opportunity.
      */
  opportunitystatecode?: opportunityclose_OpportunityClose_opportunity_statecode;
  /**Status Reason	opportunityclose_OpportunityClose_opportunity_statuscode
      Status reason of the opportunity.
      */
  opportunitystatuscode?: opportunityclose_OpportunityClose_opportunity_statuscode;
  /**Optional Attendees	PartyListType
      List of optional attendees for the activity.
      */
  optionalattendees?: ActivityParty[];
  /**Organizer	PartyListType
      Person who organized the activity.
      */
  organizer?: ActivityParty[];
  /**Record Created On	DateTimeType
      Date and time that the record was migrated.
      DateOnly:UserLocal*/
  overriddencreatedon?: Date;
  /**Owner	OwnerType
      Unique identifier of the user or team who owns the activity.
      */
  ownerid?: EntityReference;
  /**Owning Business Unit	LookupType
      Unique identifier of the business unit that owns the activity.
      */
  owningbusinessunit?: EntityReference;
  /**Owning Team	LookupType
      Unique identifier of the team that owns the activity.
      */
  owningteam?: EntityReference;
  /**Owning User	LookupType
      Unique identifier of the user that owns the activity.
      */
  owninguser?: EntityReference;
  /**Outsource Vendors	PartyListType
      Outsource vendor with which activity is associated.
      */
  partners?: ActivityParty[];
  /**Delay activity processing until	DateTimeType
      For internal use only.
      DateAndTime:UserLocal*/
  postponeactivityprocessinguntil?: Date;
  /**Priority	opportunityclose_none_opportunityclose_prioritycode
      Priority of the activity.
      */
  prioritycode?: opportunityclose_none_opportunityclose_prioritycode;
  /**Process	UniqueidentifierType
      Unique identifier of the Process.
      */
  processid?: Guid;
  /**Regarding	LookupType
      Unique identifier of the object with which the activity is associated.
      */
  regardingobjectid?: EntityReference;
  /**Required Attendees	PartyListType
      List of required attendees for the activity.
      */
  requiredattendees?: ActivityParty[];
  /**Resources	PartyListType
      Users or facility/equipment that are required for the activity.
      */
  resources?: ActivityParty[];
  /**Scheduled Duration	IntegerType
      Scheduled duration of the opportunity close activity, specified in minutes.
      */
  scheduleddurationminutes?: number;
  /**Scheduled End	DateTimeType
      Scheduled end time of the opportunity close activity.
      DateOnly:UserLocal*/
  scheduledend?: Date;
  /**Scheduled Start	DateTimeType
      Scheduled start time of the opportunity close activity.
      DateOnly:UserLocal*/
  scheduledstart?: Date;
  /**Sender's Mailbox	LookupType
      Unique identifier of the mailbox associated with the sender of the email message.
      */
  sendermailboxid?: EntityReference;
  /**Date Sent	DateTimeType
      Date and time when the activity was sent.
      DateAndTime:UserLocal*/
  senton?: Date;
  /**Series Id	UniqueidentifierType
      Uniqueidentifier specifying the id of recurring series of an instance.
      */
  seriesid?: Guid;
  /**Service	LookupType
      Unique identifier of the service with which the opportunity close activity is associated.
      */
  serviceid?: EntityReference;
  /**SLA	LookupType
      Choose the service level agreement (SLA) that you want to apply to the case record.
      */
  slaid?: EntityReference;
  /**Last SLA applied	LookupType
      Last SLA that was applied to this case. This field is for internal use only.
      */
  slainvokedid?: EntityReference;
  /**Sort Date	DateTimeType
      Shows the date and time by which the activities are sorted.
      DateAndTime:UserLocal*/
  sortdate?: Date;
  /**Process Stage	UniqueidentifierType
      Unique identifier of the Stage.
      */
  stageid?: Guid;
  /**Status	opportunityclose_opportunityclose_statecode
      Shows whether the opportunity close activity is open, completed, or canceled.  By default, opportunity close activities are completed unless the opportunity is reactivated,  which updates them to canceled.
      */
  statecode?: opportunityclose_opportunityclose_statecode;
  /**Status Reason	opportunityclose_opportunityclose_statuscode
      Reason for the status of the opportunity close activity.
      */
  statuscode?: opportunityclose_opportunityclose_statuscode;
  /**Sub-Category	StringType
      Subcategory of the opportunity close activity.
      */
  subcategory?: string;
  /**Subject	StringType
      Subject associated with the opportunity close activity.
      */
  subject?: string;
  /**Time Zone Rule Version Number	IntegerType
      For internal use only.
      */
  timezoneruleversionnumber?: number;
  /**To	PartyListType
      Person who is the receiver of the activity.
      */
  to?: ActivityParty[];
  /**Currency	LookupType
      Choose the local currency for the record to make sure budgets are reported in the correct currency.
      */
  transactioncurrencyid?: EntityReference;
  /**Traversed Path	StringType
      For internal use only.
      */
  traversedpath?: string;
  /**UTC Conversion Time Zone Code	IntegerType
      Time zone code that was in use when the record was created.
      */
  utcconversiontimezonecode?: number;
  /**Version Number	BigIntType
      Version number of the activity.
      */
  versionnumber?: number;
}

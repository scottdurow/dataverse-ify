/* eslint-disable camelcase */
import { EntityReference } from "../types/EntityReference";
import { ActivityParty } from "../types/ActivityParty";
import { Guid } from "../types/Guid";
import { IEntity } from "../types/IEntity";

/* eslint-disable @typescript-eslint/camelcase */
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
    activityid_activitypointer: ["activitypointer"],
    sla_letter_sla: ["sla"],
    stageid_processstage: ["processstage"],
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    owningbusinessunit: ["businessunit"],
    owningteam: ["team"],
    owninguser: ["systemuser"],
    regardingobjectid: ["account", "contact", "knowledgearticle", "knowledgebaserecord"],
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
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
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
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  OnHoldTime = "onholdtime",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwningBusinessUnit = "owningbusinessunit",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  RegardingObjectId = "regardingobjectid",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  ScheduledEnd = "scheduledend",
  ScheduledStart = "scheduledstart",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
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
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}
export enum letter_letter_prioritycode {
  Low = 0,
  Normal = 1,
  High = 2,
}

export enum letter_letter_statecode {
  Open = 0,
  Completed = 1,
  Canceled = 2,
}

export enum letter_letter_statuscode {
  Open = 1,
  Draft = 2,
  Received = 3,
  Sent = 4,
  Canceled = 5,
}
export interface Letter extends IEntity {
  /**Letter	UniqueidentifierType
	Unique identifier of the letter activity.
	*/
  activityid?: Guid;
  /**Activity Type	EntityNameType
	Shows the type of activity.
	*/
  activitytypecode?: string;
  /**Duration	IntegerType
	Type the number of minutes spent creating and sending the letter. The duration is used in reporting.
	*/
  actualdurationminutes?: number;
  /**Actual End	DateTimeType
	Enter the actual end date and time of the letter. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the letter.
	DateOnly:UserLocal*/
  actualend?: Date;
  /**Actual Start	DateTimeType
	Enter the actual start date and time for the letter. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the letter.
	DateOnly:UserLocal*/
  actualstart?: Date;
  /**Address	StringType
	Type the complete recipient address for the letter to ensure timely delivery.
	*/
  address?: string;
  /**Bcc	PartyListType
	Enter the recipients that are included in the letter distribution, but are not displayed to other recipients.
	*/
  bcc?: ActivityParty[];
  /**Category	StringType
	Type a category to identify the letter type, such as sales offer or past due notice, to tie the letter to a business group or function.
	*/
  category?: string;
  /**Cc	PartyListType
	Enter the recipients that should be copied on the letter.
	*/
  cc?: ActivityParty[];
  /**Created By	LookupType
	Shows who created the record.
	*/
  createdby?: EntityReference;
  /**Created On	DateTimeType
	Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
	DateAndTime:UserLocal*/
  createdon?: Date;
  /**Created By (Delegate)	LookupType
	Shows who created the record on behalf of another user.
	*/
  createdonbehalfby?: EntityReference;
  /**Description	MemoType
	Type the letter body or additional information to describe the letter, such as the primary message or the products and services described.
	*/
  description?: string;
  /**Direction	BooleanType
	Select the direction of the letter as incoming or outbound.
	*/
  directioncode?: boolean;
  /**Exchange Rate	DecimalType
	Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
	*/
  exchangerate?: number;
  /**From	PartyListType
	Enter the account, contact, lead, or user who sent the letter.
	*/
  from?: ActivityParty[];
  /**Import Sequence Number	IntegerType
	Unique identifier of the data import or data migration that created this record.
	*/
  importsequencenumber?: number;
  /**Is Billed	BooleanType
	Shows whether the letter activity was billed as part of resolving a case.
	*/
  isbilled?: boolean;
  /**Is Regular Activity	BooleanType
	Shows whether the activity is a regular activity type or event type.
	*/
  isregularactivity?: boolean;
  /**Is Workflow Created	BooleanType
	Shows whether the letter activity was created by a workflow rule.
	*/
  isworkflowcreated?: boolean;
  /**Last On Hold Time	DateTimeType
	Contains the date and time stamp of the last on hold time.
	DateAndTime:UserLocal*/
  lastonholdtime?: Date;
  /**Modified By	LookupType
	Shows who last updated the record.
	*/
  modifiedby?: EntityReference;
  /**Modified On	DateTimeType
	Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
	DateAndTime:UserLocal*/
  modifiedon?: Date;
  /**Modified By (Delegate)	LookupType
	Shows who last updated the record on behalf of another user.
	*/
  modifiedonbehalfby?: EntityReference;
  /**On Hold Time (Minutes)	IntegerType
	Shows how long, in minutes, that the record was on hold.
	*/
  onholdtime?: number;
  /**Record Created On	DateTimeType
	Date and time that the record was migrated.
	DateOnly:UserLocal*/
  overriddencreatedon?: Date;
  /**Owner	OwnerType
	Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
	*/
  ownerid?: EntityReference;
  /**Owning Business Unit	LookupType
	Unique identifier of the business unit that owns the letter activity.
	*/
  owningbusinessunit?: EntityReference;
  /**Owning Team	LookupType
	Unique identifier of the team that owns the letter activity.
	*/
  owningteam?: EntityReference;
  /**Owning User	LookupType
	Unique identifier of the user that owns the letter activity.
	*/
  owninguser?: EntityReference;
  /**Priority	letter_letter_prioritycode
	Select the priority so that preferred customers or critical issues are handled quickly.
	*/
  prioritycode?: letter_letter_prioritycode;
  /**Process	UniqueidentifierType
	Shows the ID of the process.
	*/
  processid?: Guid;
  /**Regarding	LookupType
	Choose the record that the letter relates to.
	*/
  regardingobjectid?: EntityReference;
  /**Scheduled Duration	IntegerType
	Scheduled duration of the letter activity, specified in minutes.
	*/
  scheduleddurationminutes?: number;
  /**Due Date	DateTimeType
	Enter the expected due date and time.
	DateAndTime:UserLocal*/
  scheduledend?: Date;
  /**Start Date	DateTimeType
	Enter the expected due date and time.
	DateAndTime:UserLocal*/
  scheduledstart?: Date;
  /**SLA	LookupType
	Choose the service level agreement (SLA) that you want to apply to the Letter record.
	*/
  slaid?: EntityReference;
  /**Last SLA applied	LookupType
	Last SLA that was applied to this Letter. This field is for internal use only.
	*/
  slainvokedid?: EntityReference;
  /**Sort Date	DateTimeType
	Shows the date and time by which the activities are sorted.
	DateAndTime:UserLocal*/
  sortdate?: Date;
  /**(Deprecated) Process Stage	UniqueidentifierType
	Shows the ID of the stage.
	*/
  stageid?: Guid;
  /**Activity Status	letter_letter_statecode
	Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited.
	*/
  statecode?: letter_letter_statecode;
  /**Status Reason	letter_letter_statuscode
	Select the letter's status.
	*/
  statuscode?: letter_letter_statuscode;
  /**Sub-Category	StringType
	Type a subcategory to identify the letter type and relate the activity to a specific product, sales region, business group, or other function.
	*/
  subcategory?: string;
  /**Subject(Required)	StringType
	Type a short description about the objective or primary topic of the letter.
	*/
  subject?: string;
  /**Subscription	UniqueidentifierType
	For internal use only.
	*/
  subscriptionid?: Guid;
  /**Time Zone Rule Version Number	IntegerType
	For internal use only.
	*/
  timezoneruleversionnumber?: number;
  /**To	PartyListType
	Enter the account, contact, lead, or user recipients for the letter.
	*/
  to?: ActivityParty[];
  /**Currency	LookupType
	Choose the local currency for the record to make sure budgets are reported in the correct currency.
	*/
  transactioncurrencyid?: EntityReference;
  /**(Deprecated) Traversed Path	StringType
	For internal use only.
	*/
  traversedpath?: string;
  /**UTC Conversion Time Zone Code	IntegerType
	Time zone code that was in use when the record was created.
	*/
  utcconversiontimezonecode?: number;
  /**Version Number	BigIntType
	Version number of the letter.
	*/
  versionnumber?: number;
}

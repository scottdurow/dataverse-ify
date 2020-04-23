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
    onholdtime: "Integer",
    utcconversiontimezonecode: "Integer",
    scheduleddurationminutes: "Integer",
    versionnumber: "BigInt",
    importsequencenumber: "Integer",
    actualdurationminutes: "Integer",
    exchangerate: "Decimal",
    timezoneruleversionnumber: "Integer",
    // Optionsets
    statecode: "Optionset",
    prioritycode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    scheduledend: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    actualend: "DateOnly:UserLocal",
    sortdate: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    actualstart: "DateOnly:UserLocal",
    scheduledstart: "DateAndTime:UserLocal",
  },
  navigation: {
    stageid_processstage: ["mscrm.processstage"],
    sla_letter_sla: ["mscrm.sla"],
    activityid_activitypointer: ["mscrm.activitypointer"],
    owningbusinessunit: ["businessunit"],
    transactioncurrencyid: ["transactioncurrency"],
    modifiedby: ["systemuser"],
    owninguser: ["systemuser"],
    createdby: ["systemuser"],
    slainvokedid: ["sla"],
    serviceid: ["service"],
    regardingobjectid: ["account","adx_ad","adx_adplacement","adx_casedeflection","adx_communityforumaccesspermission","adx_communityforumalert","adx_contentaccesslevel","adx_invitation","adx_poll","adx_polloption","adx_pollplacement","adx_pollsubmission","adx_publishingstatetransitionrule","adx_redirect","adx_shortcut","adx_webpage","adx_website","bookableresourcebooking","bookableresourcebookingheader","bulkoperation","campaign","campaignactivity","contact","contract","entitlement","entitlementtemplate","incident","invoice","knowledgearticle","knowledgebaserecord","lead","msdyn_agreement","msdyn_agreementbookingdate","msdyn_agreementbookingincident","msdyn_agreementbookingproduct","msdyn_agreementbookingservice","msdyn_agreementbookingservicetask","msdyn_agreementbookingsetup","msdyn_agreementinvoicedate","msdyn_agreementinvoiceproduct","msdyn_agreementinvoicesetup","msdyn_bookingalertstatus","msdyn_bookingrule","msdyn_bookingtimestamp","msdyn_customerasset","msdyn_fieldservicesetting","msdyn_incidenttypecharacteristic","msdyn_incidenttypeproduct","msdyn_incidenttypeservice","msdyn_inventoryadjustment","msdyn_inventoryadjustmentproduct","msdyn_inventoryjournal","msdyn_inventorytransfer","msdyn_payment","msdyn_paymentdetail","msdyn_paymentmethod","msdyn_paymentterm","msdyn_playbookinstance","msdyn_postalbum","msdyn_postalcode","msdyn_processnotes","msdyn_productinventory","msdyn_projectteam","msdyn_purchaseorder","msdyn_purchaseorderbill","msdyn_purchaseorderproduct","msdyn_purchaseorderreceipt","msdyn_purchaseorderreceiptproduct","msdyn_purchaseordersubstatus","msdyn_quotebookingincident","msdyn_quotebookingproduct","msdyn_quotebookingservice","msdyn_quotebookingservicetask","msdyn_resourceterritory","msdyn_rma","msdyn_rmaproduct","msdyn_rmareceipt","msdyn_rmareceiptproduct","msdyn_rmasubstatus","msdyn_rtv","msdyn_rtvproduct","msdyn_rtvsubstatus","msdyn_shipvia","msdyn_systemuserschedulersetting","msdyn_timegroup","msdyn_timegroupdetail","msdyn_timeoffrequest","msdyn_warehouse","msdyn_workorder","msdyn_workordercharacteristic","msdyn_workorderincident","msdyn_workorderproduct","msdyn_workorderresourcerestriction","msdyn_workorderservice","msdyn_workorderservicetask","opportunity","quote","salesorder","site"],
    modifiedonbehalfby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    owningteam: ["team"],
  },
};

// Attribute constants
export enum LetterAttributes {
  OwnerIdName = "owneridname",
  OwnerIdYomiName = "owneridyominame",
  SubscriptionId = "subscriptionid",
  ScheduledEnd = "scheduledend",
  OwningBusinessUnit = "owningbusinessunit",
  CreatedByName = "createdbyname",
  DirectionCode = "directioncode",
  OnHoldTime = "onholdtime",
  CreatedOn = "createdon",
  LastOnHoldTime = "lastonholdtime",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  ServiceIdName = "serviceidname",
  RegardingObjectIdName = "regardingobjectidname",
  Address = "address",
  ScheduledDurationMinutes = "scheduleddurationminutes",
  IsWorkflowCreated = "isworkflowcreated",
  Category = "category",
  ModifiedByYomiName = "modifiedbyyominame",
  Subcategory = "subcategory",
  SLAInvokedIdName = "slainvokedidname",
  ActualEnd = "actualend",
  TransactionCurrencyId = "transactioncurrencyid",
  ModifiedBy = "modifiedby",
  IsBilled = "isbilled",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedByName = "modifiedbyname",
  VersionNumber = "versionnumber",
  Description = "description",
  to = "to",
  from = "from",
  Subject = "subject",
  ActivityId = "activityid",
  StateCode = "statecode",
  RegardingObjectIdYomiName = "regardingobjectidyominame",
  bcc = "bcc",
  OwningUser = "owninguser",
  ImportSequenceNumber = "importsequencenumber",
  SortDate = "sortdate",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  StageId = "stageid",
  OwnerId = "ownerid",
  CreatedBy = "createdby",
  ActualDurationMinutes = "actualdurationminutes",
  ExchangeRate = "exchangerate",
  OverriddenCreatedOn = "overriddencreatedon",
  CreatedByYomiName = "createdbyyominame",
  cc = "cc",
  SLAInvokedId = "slainvokedid",
  ActivityTypeCode = "activitytypecode",
  ServiceId = "serviceid",
  PriorityCode = "prioritycode",
  RegardingObjectId = "regardingobjectid",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  SLAName = "slaname",
  CreatedOnBehalfBy = "createdonbehalfby",
  IsRegularActivity = "isregularactivity",
  ProcessId = "processid",
  OwnerIdType = "owneridtype",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  RegardingObjectTypeCode = "regardingobjecttypecode",
  OwningTeam = "owningteam",
  ActualStart = "actualstart",
  TraversedPath = "traversedpath",
  SLAId = "slaid",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  ScheduledStart = "scheduledstart",
  StatusCode = "statuscode",
  TransactionCurrencyIdName = "transactioncurrencyidname",
}

// Early Bound Interface
export interface Letter extends IEntity {
  //  StringType
  owneridname?: string;
  //  StringType
  owneridyominame?: string;
  // Subscription UniqueidentifierType For internal use only.
  subscriptionid?: import("../../types/Guid").Guid;
  // Due Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledend?: Date;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the letter activity.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference;
  //  StringType
  createdbyname?: string;
  // Direction BooleanType Select the direction of the letter as incoming or outbound.
  directioncode?: boolean;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number;
  //  StringType
  serviceidname?: string;
  //  StringType
  regardingobjectidname?: string;
  // Address StringType Type the complete recipient address for the letter to ensure timely delivery.
  address?: string;
  // Scheduled Duration IntegerType Scheduled duration of the letter activity, specified in minutes.
  scheduleddurationminutes?: number;
  // Is Workflow Created BooleanType Shows whether the letter activity was created by a workflow rule.
  isworkflowcreated?: boolean;
  // Category StringType Type a category to identify the letter type, such as sales offer or past due notice, to tie the letter to a business group or function.
  category?: string;
  //  StringType
  modifiedbyyominame?: string;
  // Sub-Category StringType Type a subcategory to identify the letter type and relate the activity to a specific product, sales region, business group, or other function.
  subcategory?: string;
  //  StringType
  slainvokedidname?: string;
  // Actual End DateTimeType Enter the actual end date and time of the letter. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the letter. DateOnly:UserLocal
  actualend?: Date;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference;
  // Is Billed BooleanType Shows whether the letter activity was billed as part of resolving a case.
  isbilled?: boolean;
  //  StringType
  createdonbehalfbyname?: string;
  //  StringType
  modifiedonbehalfbyname?: string;
  //  StringType
  modifiedbyname?: string;
  // Version Number BigIntType Version number of the letter.
  versionnumber?: number;
  // Description MemoType Type the letter body or additional information to describe the letter, such as the primary message or the products and services described.
  description?: string;
  // To PartyListType Enter the account, contact, lead, or user recipients for the letter.
  to?: import("../../types/ActivityParty").ActivityParty[];
  // From PartyListType Enter the account, contact, lead, or user who sent the letter.
  from?: import("../../types/ActivityParty").ActivityParty[];
  // Subject [Required] StringType Type a short description about the objective or primary topic of the letter.
  subject?: string;
  // Letter UniqueidentifierType Unique identifier of the letter activity.
  activityid?: import("../../types/Guid").Guid;
  // Activity Status letter_letter_statecode Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited.
  statecode?: import("../enums/letter_letter_statecode").letter_letter_statecode;
  //  StringType
  regardingobjectidyominame?: string;
  // Bcc PartyListType Enter the recipients that are included in the letter distribution, but are not displayed to other recipients.
  bcc?: import("../../types/ActivityParty").ActivityParty[];
  // Owning User LookupType Unique identifier of the user that owns the letter activity.
  owninguser?: import("../../types/EntityReference").EntityReference;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number;
  // Sort Date DateTimeType Shows the date and time by which the activities are sorted. DateAndTime:UserLocal
  sortdate?: Date;
  //  StringType
  createdonbehalfbyyominame?: string;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("../../types/Guid").Guid;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("../../types/EntityReference").EntityReference;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference;
  // Duration IntegerType Type the number of minutes spent creating and sending the letter. The duration is used in reporting.
  actualdurationminutes?: number;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date;
  //  StringType
  createdbyyominame?: string;
  // Cc PartyListType Enter the recipients that should be copied on the letter.
  cc?: import("../../types/ActivityParty").ActivityParty[];
  // Last SLA applied LookupType Last SLA that was applied to this Letter. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference;
  // Activity Type EntityNameType Shows the type of activity.
  activitytypecode?: string;
  // Service LookupType Unique identifier for an associated service.
  serviceid?: import("../../types/EntityReference").EntityReference;
  // Priority letter_letter_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/letter_letter_prioritycode").letter_letter_prioritycode;
  // Regarding LookupType Unique identifier of the object with which the letter activity is associated.
  regardingobjectid?: import("../../types/EntityReference").EntityReference;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference;
  //  StringType
  slaname?: string;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference;
  // Is Regular Activity BooleanType Shows whether the activity is a regular activity type or event type.
  isregularactivity?: boolean;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("../../types/Guid").Guid;
  //  EntityNameType
  owneridtype?: string;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date;
  //  StringType
  modifiedonbehalfbyyominame?: string;
  //  EntityNameType
  regardingobjecttypecode?: string;
  // Owning Team LookupType Unique identifier of the team that owns the letter activity.
  owningteam?: import("../../types/EntityReference").EntityReference;
  // Actual Start DateTimeType Enter the actual start date and time for the letter. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the letter. DateOnly:UserLocal
  actualstart?: Date;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Letter record.
  slaid?: import("../../types/EntityReference").EntityReference;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number;
  // Start Date DateTimeType Enter the expected due date and time. DateAndTime:UserLocal
  scheduledstart?: Date;
  // Status Reason letter_letter_statuscode Select the letter's status.
  statuscode?: import("../enums/letter_letter_statuscode").letter_letter_statuscode;
  //  StringType
  transactioncurrencyidname?: string;
}

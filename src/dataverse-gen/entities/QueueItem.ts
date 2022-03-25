/* eslint-disable*/
import { IEntity } from "../../types/IEntity";
// Entity QueueItem
export const queueitemMetadata = {
  typeName: "mscrm.queueitem",
  logicalName: "queueitem",
  collectionName: "queueitems",
  primaryIdAttribute: "queueitemid",
  attributeTypes: {
    // Numeric Types
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    priority: "Integer",
    state: "Integer",
    status: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    objecttypecode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    enteredon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    workeridmodifiedon: "DateOnly:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    queueid: ["mscrm.queue"],
    organizationid: ["mscrm.organization"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    objectid: ["activitypointer","appointment","bulkoperation","campaignactivity","campaignresponse","chat","email","fax","incident","knowledgearticle","letter","msdyn_iotalert","msdyn_knowledgearticletemplate","msfp_alert","msfp_surveyinvite","msfp_surveyresponse","phonecall","recurringappointmentmaster","serviceappointment","socialactivity","task"],
    workerid: ["systemuser","team"],
  },
};

// Attribute constants
export enum QueueItemAttributes {
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  EnteredOn = "enteredon",
  ExchangeRate = "exchangerate",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  ObjectId = "objectid",
  ObjectIdName = "objectidname",
  ObjectIdTypeCode = "objectidtypecode",
  ObjectTypeCode = "objecttypecode",
  OrganizationId = "organizationid",
  OrganizationIdName = "organizationidname",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdType = "owneridtype",
  OwningBusinessUnit = "owningbusinessunit",
  OwningUser = "owninguser",
  Priority = "priority",
  QueueId = "queueid",
  QueueIdName = "queueidname",
  QueueItemId = "queueitemid",
  Sender = "sender",
  State = "state",
  StateCode = "statecode",
  Status = "status",
  StatusCode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  Title = "title",
  ToRecipients = "torecipients",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  WorkerId = "workerid",
  WorkerIdModifiedOn = "workeridmodifiedon",
  WorkerIdName = "workeridname",
  WorkerIdType = "workeridtype",
  WorkerIdYomiName = "workeridyominame",
}

// Early Bound Interface
export interface QueueItem extends IEntity {
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
  // Entered Queue DateTimeType Shows the date the record was assigned to the queue. DateAndTime:UserLocal
  enteredon?: Date | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the queueitem.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Object [Required] LookupType Choose the activity, case, or article assigned to the queue.
  objectid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  objectidname?: string | null;
  // Regarding Object Type EntityNameType
  objectidtypecode?: string | null;
  // Type queueitem_queueitem_objecttypecode Select the type of the queue item, such as activity, case, or appointment.
  objecttypecode?: import("../enums/queueitem_queueitem_objecttypecode").queueitem_queueitem_objecttypecode | null;
  // Organization LookupType Unique identifier of the organization with which the queue item is associated.
  organizationid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  organizationidname?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner [Required] OwnerType Unique identifier of the user or team who owns the queue item.
  ownerid?: import("../../types/EntityReference").EntityReference;
  //  EntityNameType
  owneridtype?: string | null;
  // Owning Business Unit [Required] LookupType Unique identifier of the business unit that owns the queue item.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference;
  // Owning User [Required] LookupType Unique identifier of the user who owns the queue item.
  owninguser?: import("../../types/EntityReference").EntityReference;
  // Priority IntegerType Priority of the queue item.
  priority?: number | null;
  // Queue [Required] LookupType Choose the queue that the item is assigned to.
  queueid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  queueidname?: string | null;
  // Queue Item UniqueidentifierType Unique identifier of the queue item.
  queueitemid?: import("../../types/Guid").Guid | null;
  // From StringType Sender who created the queue item.
  sender?: string | null;
  // Status (deprecated) IntegerType Status of the queue item.
  state?: number | null;
  // Status queueitem_queueitem_statecode Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/queueitem_queueitem_statecode").queueitem_queueitem_statecode | null;
  // Status Reason (deprecated) IntegerType Reason for the status of the queue item.
  status?: number | null;
  // Status Reason queueitem_queueitem_statuscode Select the item's status.
  statuscode?: import("../enums/queueitem_queueitem_statuscode").queueitem_queueitem_statuscode | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Title StringType Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue.
  title?: string | null;
  // To StringType Recipients listed on the To line of the message for email queue items.
  torecipients?: string | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version number of the queue item.
  versionnumber?: number | null;
  // Worked By LookupType Shows who is working on the queue item.
  workerid?: import("../../types/EntityReference").EntityReference | null;
  // Worked On DateTimeType Shows the date and time when the queue item was last assigned to a user. DateOnly:UserLocal
  workeridmodifiedon?: Date | null;
  //  StringType
  workeridname?: string | null;
  // Worker Type [Required] EntityNameType
  workeridtype?: string;
  //  StringType
  workeridyominame?: string | null;
}

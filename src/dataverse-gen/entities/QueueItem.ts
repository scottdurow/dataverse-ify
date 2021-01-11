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
    status: "Integer",
    importsequencenumber: "Integer",
    versionnumber: "BigInt",
    timezoneruleversionnumber: "Integer",
    exchangerate: "Decimal",
    state: "Integer",
    priority: "Integer",
    utcconversiontimezonecode: "Integer",
    // Optionsets
    statuscode: "Optionset",
    statecode: "Optionset",
    objecttypecode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    workeridmodifiedon: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    enteredon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    queueid: ["mscrm.queue"],
    organizationid: ["mscrm.organization"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    workerid: ["systemuser","team"],
    objectid: ["activitypointer","appointment","bulkoperation","campaignactivity","campaignresponse","email","fax","incident","knowledgearticle","letter","msdyn_iotalert","msdyn_knowledgearticletemplate","msfp_alert","msfp_surveyinvite","msfp_surveyresponse","phonecall","recurringappointmentmaster","serviceappointment","socialactivity","task"],
  },
};

// Attribute constants
export enum QueueItemAttributes {
  WorkerIdType = "workeridtype",
  Status = "status",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  Sender = "sender",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  ObjectIdTypeCode = "objectidtypecode",
  CreatedOn = "createdon",
  StatusCode = "statuscode",
  OwningUser = "owninguser",
  WorkerIdName = "workeridname",
  WorkerIdModifiedOn = "workeridmodifiedon",
  CreatedOnBehalfBy = "createdonbehalfby",
  TransactionCurrencyId = "transactioncurrencyid",
  WorkerId = "workerid",
  QueueItemId = "queueitemid",
  ImportSequenceNumber = "importsequencenumber",
  OrganizationId = "organizationid",
  OrganizationIdName = "organizationidname",
  ModifiedByYomiName = "modifiedbyyominame",
  StateCode = "statecode",
  WorkerIdYomiName = "workeridyominame",
  ObjectId = "objectid",
  CreatedByYomiName = "createdbyyominame",
  ModifiedByName = "modifiedbyname",
  VersionNumber = "versionnumber",
  ModifiedBy = "modifiedby",
  CreatedBy = "createdby",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  OwnerIdType = "owneridtype",
  ExchangeRate = "exchangerate",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  QueueIdName = "queueidname",
  ModifiedOn = "modifiedon",
  QueueId = "queueid",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OwnerId = "ownerid",
  CreatedByName = "createdbyname",
  ObjectIdName = "objectidname",
  State = "state",
  EnteredOn = "enteredon",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  OwningBusinessUnit = "owningbusinessunit",
  ToRecipients = "torecipients",
  Priority = "priority",
  Title = "title",
  ObjectTypeCode = "objecttypecode",
  OverriddenCreatedOn = "overriddencreatedon",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
}

// Early Bound Interface
export interface QueueItem extends IEntity {
  // Worker Type [Required] EntityNameType
  workeridtype?: string;
  // Status Reason (deprecated) IntegerType Reason for the status of the queue item.
  status?: number | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the queueitem.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // From StringType Sender who created the queue item.
  sender?: string | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Regarding Object Type EntityNameType
  objectidtypecode?: string | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  // Status Reason queueitem_queueitem_statuscode Select the item's status.
  statuscode?: import("../enums/queueitem_queueitem_statuscode").queueitem_queueitem_statuscode | null;
  // Owning User [Required] LookupType Unique identifier of the user who owns the queue item.
  owninguser?: import("../../types/EntityReference").EntityReference;
  //  StringType
  workeridname?: string | null;
  // Worked On DateTimeType Shows the date and time when the queue item was last assigned to a user. DateOnly:UserLocal
  workeridmodifiedon?: Date | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  // Worked By LookupType Shows who is working on the queue item.
  workerid?: import("../../types/EntityReference").EntityReference | null;
  // Queue Item UniqueidentifierType Unique identifier of the queue item.
  queueitemid?: import("../../types/Guid").Guid | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Organization LookupType Unique identifier of the organization with which the queue item is associated.
  organizationid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  organizationidname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Status queueitem_queueitem_statecode Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/queueitem_queueitem_statecode").queueitem_queueitem_statecode | null;
  //  StringType
  workeridyominame?: string | null;
  // Object [Required] LookupType Choose the activity, case, or article assigned to the queue.
  objectid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  createdbyyominame?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  // Version Number BigIntType Version number of the queue item.
  versionnumber?: number | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  //  EntityNameType
  owneridtype?: string | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  //  StringType
  queueidname?: string | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Queue [Required] LookupType Choose the queue that the item is assigned to.
  queueid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Owner [Required] OwnerType Unique identifier of the user or team who owns the queue item.
  ownerid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  objectidname?: string | null;
  // Status (deprecated) IntegerType Status of the queue item.
  state?: number | null;
  // Entered Queue DateTimeType Shows the date the record was assigned to the queue. DateAndTime:UserLocal
  enteredon?: Date | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Owning Business Unit [Required] LookupType Unique identifier of the business unit that owns the queue item.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference;
  // To StringType Recipients listed on the To line of the message for email queue items.
  torecipients?: string | null;
  // Priority IntegerType Priority of the queue item.
  priority?: number | null;
  // Title StringType Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue.
  title?: string | null;
  // Type queueitem_queueitem_objecttypecode Select the type of the queue item, such as activity, case, or appointment.
  objecttypecode?: import("../enums/queueitem_queueitem_objecttypecode").queueitem_queueitem_objecttypecode | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
}

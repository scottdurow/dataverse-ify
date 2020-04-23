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
    state: "Integer",
    utcconversiontimezonecode: "Integer",
    exchangerate: "Decimal",
    status: "Integer",
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    versionnumber: "BigInt",
    priority: "Integer",
    // Optionsets
    statecode: "Optionset",
    statuscode: "Optionset",
    objecttypecode: "Optionset",
    // Date Formats
    workeridmodifiedon: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
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
    objectid: ["activitypointer","adx_alertsubscription","adx_inviteredemption","adx_portalcomment","appointment","bulkoperation","campaignactivity","campaignresponse","email","fax","incident","knowledgearticle","letter","li_inmail","li_message","li_pointdrivepresentationviewed","msdyn_agreementbookingdate","msdyn_agreementbookingsetup","msdyn_agreementinvoicedate","msdyn_agreementinvoicesetup","msdyn_approval","msdyn_bookingalert","msdyn_inventoryadjustment","msdyn_inventorytransfer","msdyn_iotalert","msdyn_knowledgearticletemplate","msdyn_project","msdyn_projecttask","msdyn_resourcerequest","msdyn_timegroup","msdyn_timegroupdetail","msdyn_workorder","msdyn_workorderincident","msdyn_workorderservice","msdyn_workorderservicetask","msfp_surveyinvite","msfp_surveyresponse","phonecall","recurringappointmentmaster","serviceappointment","socialactivity","task"],
    workerid: ["systemuser","team"],
  },
};

// Attribute constants
export enum QueueItemAttributes {
  State = "state",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  OwnerIdType = "owneridtype",
  WorkerIdType = "workeridtype",
  OrganizationIdName = "organizationidname",
  OwningUser = "owninguser",
  ExchangeRate = "exchangerate",
  StateCode = "statecode",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  StatusCode = "statuscode",
  ObjectIdName = "objectidname",
  WorkerIdModifiedOn = "workeridmodifiedon",
  QueueIdName = "queueidname",
  TransactionCurrencyId = "transactioncurrencyid",
  ModifiedOn = "modifiedon",
  OwningBusinessUnit = "owningbusinessunit",
  WorkerIdName = "workeridname",
  Sender = "sender",
  QueueId = "queueid",
  WorkerIdYomiName = "workeridyominame",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ObjectId = "objectid",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  ModifiedByName = "modifiedbyname",
  OwnerId = "ownerid",
  ModifiedBy = "modifiedby",
  CreatedByName = "createdbyname",
  Status = "status",
  CreatedOn = "createdon",
  ObjectIdTypeCode = "objectidtypecode",
  OrganizationId = "organizationid",
  CreatedOnBehalfBy = "createdonbehalfby",
  EnteredOn = "enteredon",
  ImportSequenceNumber = "importsequencenumber",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  ToRecipients = "torecipients",
  VersionNumber = "versionnumber",
  Priority = "priority",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  WorkerId = "workerid",
  OverriddenCreatedOn = "overriddencreatedon",
  ObjectTypeCode = "objecttypecode",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  Title = "title",
  ModifiedByYomiName = "modifiedbyyominame",
  QueueItemId = "queueitemid",
  CreatedBy = "createdby",
  CreatedByYomiName = "createdbyyominame",
}

// Early Bound Interface
export interface QueueItem extends IEntity {
  // Status (deprecated) IntegerType Status of the queue item.
  state?: number;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number;
  //  EntityNameType
  owneridtype?: string;
  // Worker Type [Required] EntityNameType
  workeridtype?: string;
  //  StringType
  organizationidname?: string;
  // Owning User [Required] LookupType Unique identifier of the user who owns the queue item.
  owninguser?: import("../../types/EntityReference").EntityReference;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number;
  // Status queueitem_queueitem_statecode Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/queueitem_queueitem_statecode").queueitem_queueitem_statecode;
  //  StringType
  createdonbehalfbyyominame?: string;
  // Status Reason queueitem_queueitem_statuscode Select the item's status.
  statuscode?: import("../enums/queueitem_queueitem_statuscode").queueitem_queueitem_statuscode;
  //  StringType
  objectidname?: string;
  // Worked On DateTimeType Shows the date and time when the queue item was last assigned to a user. DateOnly:UserLocal
  workeridmodifiedon?: Date;
  //  StringType
  queueidname?: string;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date;
  // Owning Business Unit [Required] LookupType Unique identifier of the business unit that owns the queue item.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference;
  //  StringType
  workeridname?: string;
  // From StringType Sender who created the queue item.
  sender?: string;
  // Queue [Required] LookupType Choose the queue that the item is assigned to.
  queueid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  workeridyominame?: string;
  //  StringType
  modifiedonbehalfbyname?: string;
  // Object [Required] LookupType Choose the activity, case, or article assigned to the queue.
  objectid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  modifiedonbehalfbyyominame?: string;
  //  StringType
  modifiedbyname?: string;
  // Owner [Required] OwnerType Unique identifier of the user or team who owns the queue item.
  ownerid?: import("../../types/EntityReference").EntityReference;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference;
  //  StringType
  createdbyname?: string;
  // Status Reason (deprecated) IntegerType Reason for the status of the queue item.
  status?: number;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date;
  // Regarding Object Type EntityNameType
  objectidtypecode?: string;
  // Organization LookupType Unique identifier of the organization with which the queue item is associated.
  organizationid?: import("../../types/EntityReference").EntityReference;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference;
  // Entered Queue DateTimeType Shows the date the record was assigned to the queue. DateAndTime:UserLocal
  enteredon?: Date;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number;
  //  StringType
  createdonbehalfbyname?: string;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number;
  // To StringType Recipients listed on the To line of the message for email queue items.
  torecipients?: string;
  // Version Number BigIntType Version number of the queue item.
  versionnumber?: number;
  // Priority IntegerType Priority of the queue item.
  priority?: number;
  //  StringType
  transactioncurrencyidname?: string;
  // Worked By LookupType Shows who is working on the queue item.
  workerid?: import("../../types/EntityReference").EntityReference;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date;
  // Type queueitem_queueitem_objecttypecode Select the type of the queue item, such as activity, case, or appointment.
  objecttypecode?: import("../enums/queueitem_queueitem_objecttypecode").queueitem_queueitem_objecttypecode;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the queueitem.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference;
  // Title StringType Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue.
  title?: string;
  //  StringType
  modifiedbyyominame?: string;
  // Queue Item UniqueidentifierType Unique identifier of the queue item.
  queueitemid?: import("../../types/Guid").Guid;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference;
  //  StringType
  createdbyyominame?: string;
}

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
  state?: number | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  //  EntityNameType
  owneridtype?: string | null;
  // Worker Type [Required] EntityNameType
  workeridtype?: string;
  //  StringType
  organizationidname?: string | null;
  // Owning User [Required] LookupType Unique identifier of the user who owns the queue item.
  owninguser?: import("../../types/EntityReference").EntityReference;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Status queueitem_queueitem_statecode Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/queueitem_queueitem_statecode").queueitem_queueitem_statecode | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Status Reason queueitem_queueitem_statuscode Select the item's status.
  statuscode?: import("../enums/queueitem_queueitem_statuscode").queueitem_queueitem_statuscode | null;
  //  StringType
  objectidname?: string | null;
  // Worked On DateTimeType Shows the date and time when the queue item was last assigned to a user. DateOnly:UserLocal
  workeridmodifiedon?: Date | null;
  //  StringType
  queueidname?: string | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Owning Business Unit [Required] LookupType Unique identifier of the business unit that owns the queue item.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference;
  //  StringType
  workeridname?: string | null;
  // From StringType Sender who created the queue item.
  sender?: string | null;
  // Queue [Required] LookupType Choose the queue that the item is assigned to.
  queueid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  workeridyominame?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  // Object [Required] LookupType Choose the activity, case, or article assigned to the queue.
  objectid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  // Owner [Required] OwnerType Unique identifier of the user or team who owns the queue item.
  ownerid?: import("../../types/EntityReference").EntityReference;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  // Status Reason (deprecated) IntegerType Reason for the status of the queue item.
  status?: number | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  // Regarding Object Type EntityNameType
  objectidtypecode?: string | null;
  // Organization LookupType Unique identifier of the organization with which the queue item is associated.
  organizationid?: import("../../types/EntityReference").EntityReference | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Entered Queue DateTimeType Shows the date the record was assigned to the queue. DateAndTime:UserLocal
  enteredon?: Date | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // To StringType Recipients listed on the To line of the message for email queue items.
  torecipients?: string | null;
  // Version Number BigIntType Version number of the queue item.
  versionnumber?: number | null;
  // Priority IntegerType Priority of the queue item.
  priority?: number | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Worked By LookupType Shows who is working on the queue item.
  workerid?: import("../../types/EntityReference").EntityReference | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Type queueitem_queueitem_objecttypecode Select the type of the queue item, such as activity, case, or appointment.
  objecttypecode?: import("../enums/queueitem_queueitem_objecttypecode").queueitem_queueitem_objecttypecode | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the queueitem.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Title StringType Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue.
  title?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Queue Item UniqueidentifierType Unique identifier of the queue item.
  queueitemid?: import("../../types/Guid").Guid | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyyominame?: string | null;
}

/* eslint-disable*/
import { IEntity } from "../../types/IEntity";
// Entity Queue
export const queueMetadata = {
  typeName: "mscrm.queue",
  logicalName: "queue",
  collectionName: "queues",
  primaryIdAttribute: "queueid",
  attributeTypes: {
    // Numeric Types
    entityimage_timestamp: "BigInt",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    numberofitems: "Integer",
    numberofmembers: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    emailrouteraccessapproval: "Optionset",
    incomingemaildeliverymethod: "Optionset",
    incomingemailfilteringmethod: "Optionset",
    outgoingemaildeliverymethod: "Optionset",
    queuetypecode: "Optionset",
    queueviewtype: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    primaryuserid: ["mscrm.systemuser"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    organizationid: ["mscrm.organization"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    defaultmailbox: ["mscrm.mailbox"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    businessunitid: ["mscrm.businessunit"],
  },
};

// Attribute constants
export enum QueueAttributes {
  AllowEmailCredentials = "allowemailcredentials",
  BusinessUnitId = "businessunitid",
  BusinessUnitIdName = "businessunitidname",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  DefaultMailbox = "defaultmailbox",
  DefaultMailboxName = "defaultmailboxname",
  Description = "description",
  EMailAddress = "emailaddress",
  EmailPassword = "emailpassword",
  EmailRouterAccessApproval = "emailrouteraccessapproval",
  EmailUsername = "emailusername",
  EntityImage = "entityimage",
  EntityImage_Timestamp = "entityimage_timestamp",
  EntityImage_URL = "entityimage_url",
  EntityImageId = "entityimageid",
  ExchangeRate = "exchangerate",
  IgnoreUnsolicitedEmail = "ignoreunsolicitedemail",
  ImportSequenceNumber = "importsequencenumber",
  IncomingEmailDeliveryMethod = "incomingemaildeliverymethod",
  IncomingEmailFilteringMethod = "incomingemailfilteringmethod",
  IsEmailAddressApprovedByO365Admin = "isemailaddressapprovedbyo365admin",
  IsFaxQueue = "isfaxqueue",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  Name = "name",
  NumberOfItems = "numberofitems",
  NumberOfMembers = "numberofmembers",
  OrganizationId = "organizationid",
  OrganizationIdName = "organizationidname",
  OutgoingEmailDeliveryMethod = "outgoingemaildeliverymethod",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  PrimaryUserId = "primaryuserid",
  PrimaryUserIdName = "primaryuseridname",
  PrimaryUserIdYomiName = "primaryuseridyominame",
  QueueId = "queueid",
  QueueTypeCode = "queuetypecode",
  QueueViewType = "queueviewtype",
  StateCode = "statecode",
  StatusCode = "statuscode",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface Queue extends IEntity {
  // Allow to Use Credentials for Email Processing (Obsolete) BooleanType This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute.
  allowemailcredentials?: boolean | null;
  // Business Unit LookupType Unique identifier of the business unit with which the queue is associated.
  businessunitid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  businessunitidname?: string | null;
  // Created By LookupType Unique identifier of the user who created the queue record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the queue was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the queue.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Mailbox LookupType Select the mailbox associated with this queue.
  defaultmailbox?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  defaultmailboxname?: string | null;
  // Description MemoType Description of the queue.
  description?: string | null;
  // Incoming Email StringType Email address that is associated with the queue.
  emailaddress?: string | null;
  // Password (Obsolete) StringType This attribute is no longer used. The data is now in the Mailbox.Password attribute.
  emailpassword?: string | null;
  // Primary Email Status queue_queue_emailrouteraccessapproval Shows the status of the primary email address.
  emailrouteraccessapproval?: import("../enums/queue_queue_emailrouteraccessapproval").queue_queue_emailrouteraccessapproval | null;
  // User Name (Obsolete) StringType This attribute is no longer used. The data is now in the Mailbox.UserName attribute.
  emailusername?: string | null;
  // Entity Image ImageType The default image for the entity.
  entityimage?: string | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  //  StringType
  entityimage_url?: string | null;
  // Entity Image Id UniqueidentifierType For internal use only.
  entityimageid?: import("../../types/Guid").Guid | null;
  // Exchange Rate DecimalType Exchange rate for the currency associated with the queue with respect to the base currency.
  exchangerate?: number | null;
  // Convert To Email Activities BooleanType Information that specifies whether a queue is to ignore unsolicited email (deprecated).
  ignoreunsolicitedemail?: boolean | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Incoming Email Delivery Method queue_queue_incomingemaildeliverymethod Incoming email delivery method for the queue.
  incomingemaildeliverymethod?: import("../enums/queue_queue_incomingemaildeliverymethod").queue_queue_incomingemaildeliverymethod | null;
  // Convert Incoming Email To Activities queue_queue_incomingemailfilteringmethod Convert Incoming Email To Activities
  incomingemailfilteringmethod?: import("../enums/queue_queue_incomingemailfilteringmethod").queue_queue_incomingemailfilteringmethod | null;
  // Email Address O365 Admin Approval Status BooleanType Shows the status of approval of the email address by O365 Admin.
  isemailaddressapprovedbyo365admin?: boolean | null;
  // Fax Queue BooleanType Indication of whether a queue is the fax delivery queue.
  isfaxqueue?: boolean | null;
  // Modified By LookupType Unique identifier of the user who last modified the queue.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the queue was last modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the queue.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Name [Required] StringType Name of the queue.
  name?: string;
  // Queue Items IntegerType Number of Queue items associated with the queue.
  numberofitems?: number | null;
  // No. of Members IntegerType Number of Members associated with the queue.
  numberofmembers?: number | null;
  // Organization LookupType Unique identifier of the organization associated with the queue.
  organizationid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  organizationidname?: string | null;
  // Outgoing Email Delivery Method queue_queue_outgoingemaildeliverymethod Outgoing email delivery method for the queue.
  outgoingemaildeliverymethod?: import("../enums/queue_queue_outgoingemaildeliverymethod").queue_queue_outgoingemaildeliverymethod | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Unique identifier of the user or team who owns the queue.
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the queue.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier of the team who owns the queue.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Owning User LookupType Unique identifier of the user who owns the queue.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  // Owner (deprecated) LookupType Unique identifier of the owner of the queue.
  primaryuserid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  primaryuseridname?: string | null;
  //  StringType
  primaryuseridyominame?: string | null;
  // Queue UniqueidentifierType Unique identifier of the queue.
  queueid?: import("../../types/Guid").Guid | null;
  // Queue Type queue_queue_queuetypecode Type of queue that is automatically assigned when a user or queue is created. The type can be public, private, or work in process.
  queuetypecode?: import("../enums/queue_queue_queuetypecode").queue_queue_queuetypecode | null;
  // Type queue_queue_queueviewtype Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue.
  queueviewtype?: import("../enums/queue_queue_queueviewtype").queue_queue_queueviewtype | null;
  // Status queue_queue_statecode Status of the queue.
  statecode?: import("../enums/queue_queue_statecode").queue_queue_statecode | null;
  // Status Reason queue_queue_statuscode Reason for the status of the queue.
  statuscode?: import("../enums/queue_queue_statuscode").queue_queue_statuscode | null;
  // Currency LookupType Unique identifier of the currency associated with the queue.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Version Number BigIntType Version number of the queue.
  versionnumber?: number | null;
}

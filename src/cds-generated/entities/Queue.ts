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
    importsequencenumber: "Integer",
    numberofmembers: "Integer",
    versionnumber: "BigInt",
    numberofitems: "Integer",
    entityimage_timestamp: "BigInt",
    exchangerate: "Decimal",
    // Optionsets
    incomingemailfilteringmethod: "Optionset",
    statuscode: "Optionset",
    incomingemaildeliverymethod: "Optionset",
    queueviewtype: "Optionset",
    emailrouteraccessapproval: "Optionset",
    queuetypecode: "Optionset",
    outgoingemaildeliverymethod: "Optionset",
    statecode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
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
  TransactionCurrencyIdName = "transactioncurrencyidname",
  QueueId = "queueid",
  ImportSequenceNumber = "importsequencenumber",
  IncomingEmailFilteringMethod = "incomingemailfilteringmethod",
  OwnerIdName = "owneridname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  OwningBusinessUnit = "owningbusinessunit",
  StatusCode = "statuscode",
  CreatedOn = "createdon",
  OwnerId = "ownerid",
  NumberOfMembers = "numberofmembers",
  IncomingEmailDeliveryMethod = "incomingemaildeliverymethod",
  CreatedOnBehalfBy = "createdonbehalfby",
  TransactionCurrencyId = "transactioncurrencyid",
  EntityImageId = "entityimageid",
  Name = "name",
  ModifiedBy = "modifiedby",
  ModifiedByYomiName = "modifiedbyyominame",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  OverriddenCreatedOn = "overriddencreatedon",
  ModifiedByName = "modifiedbyname",
  QueueViewType = "queueviewtype",
  Description = "description",
  EmailRouterAccessApproval = "emailrouteraccessapproval",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  VersionNumber = "versionnumber",
  OwnerIdYomiName = "owneridyominame",
  NumberOfItems = "numberofitems",
  OwningUser = "owninguser",
  CreatedByName = "createdbyname",
  QueueTypeCode = "queuetypecode",
  EntityImage_Timestamp = "entityimage_timestamp",
  CreatedBy = "createdby",
  EmailPassword = "emailpassword",
  ExchangeRate = "exchangerate",
  IsEmailAddressApprovedByO365Admin = "isemailaddressapprovedbyo365admin",
  CreatedByYomiName = "createdbyyominame",
  PrimaryUserIdYomiName = "primaryuseridyominame",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  EntityImage = "entityimage",
  DefaultMailboxName = "defaultmailboxname",
  ModifiedOn = "modifiedon",
  BusinessUnitId = "businessunitid",
  EMailAddress = "emailaddress",
  OrganizationId = "organizationid",
  EmailUsername = "emailusername",
  OwnerIdType = "owneridtype",
  BusinessUnitIdName = "businessunitidname",
  DefaultMailbox = "defaultmailbox",
  PrimaryUserIdName = "primaryuseridname",
  IgnoreUnsolicitedEmail = "ignoreunsolicitedemail",
  IsFaxQueue = "isfaxqueue",
  OwningTeam = "owningteam",
  OutgoingEmailDeliveryMethod = "outgoingemaildeliverymethod",
  AllowEmailCredentials = "allowemailcredentials",
  EntityImage_URL = "entityimage_url",
  PrimaryUserId = "primaryuserid",
  OrganizationIdName = "organizationidname",
  StateCode = "statecode",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
}

// Early Bound Interface
export interface Queue extends IEntity {
  //  StringType
  transactioncurrencyidname?: string | null;
  // Queue UniqueidentifierType Unique identifier of the queue.
  queueid?: import("../../types/Guid").Guid | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Convert Incoming Email To Activities queue_queue_incomingemailfilteringmethod Convert Incoming Email To Activities
  incomingemailfilteringmethod?: import("../enums/queue_queue_incomingemailfilteringmethod").queue_queue_incomingemailfilteringmethod | null;
  //  StringType
  owneridname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the queue.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  // Status Reason queue_queue_statuscode Reason for the status of the queue.
  statuscode?: import("../enums/queue_queue_statuscode").queue_queue_statuscode | null;
  // Created On DateTimeType Date and time when the queue was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Owner OwnerType Unique identifier of the user or team who owns the queue.
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  // No. of Members IntegerType Number of Members associated with the queue.
  numberofmembers?: number | null;
  // Incoming Email Delivery Method queue_queue_incomingemaildeliverymethod Incoming email delivery method for the queue.
  incomingemaildeliverymethod?: import("../enums/queue_queue_incomingemaildeliverymethod").queue_queue_incomingemaildeliverymethod | null;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the queue.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Currency LookupType Unique identifier of the currency associated with the queue.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  // Entity Image Id UniqueidentifierType For internal use only.
  entityimageid?: import("../../types/Guid").Guid | null;
  // Name [Required] StringType Name of the queue.
  name?: string;
  // Modified By LookupType Unique identifier of the user who last modified the queue.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedbyyominame?: string | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  //  StringType
  modifiedbyname?: string | null;
  // Type queue_queue_queueviewtype Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue.
  queueviewtype?: import("../enums/queue_queue_queueviewtype").queue_queue_queueviewtype | null;
  // Description MemoType Description of the queue.
  description?: string | null;
  // Primary Email Status queue_queue_emailrouteraccessapproval Shows the status of the primary email address.
  emailrouteraccessapproval?: import("../enums/queue_queue_emailrouteraccessapproval").queue_queue_emailrouteraccessapproval | null;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the queue.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Version Number BigIntType Version number of the queue.
  versionnumber?: number | null;
  //  StringType
  owneridyominame?: string | null;
  // Queue Items IntegerType Number of Queue items associated with the queue.
  numberofitems?: number | null;
  // Owning User LookupType Unique identifier of the user who owns the queue.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  // Queue Type queue_queue_queuetypecode Type of queue that is automatically assigned when a user or queue is created. The type can be public, private, or work in process.
  queuetypecode?: import("../enums/queue_queue_queuetypecode").queue_queue_queuetypecode | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  // Created By LookupType Unique identifier of the user who created the queue record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  // Password (Obsolete) StringType This attribute is no longer used. The data is now in the Mailbox.Password attribute.
  emailpassword?: string | null;
  // Exchange Rate DecimalType Exchange rate for the currency associated with the queue with respect to the base currency.
  exchangerate?: number | null;
  // Email Address O365 Admin Approval Status BooleanType Shows the status of approval of the email address by O365 Admin.
  isemailaddressapprovedbyo365admin?: boolean | null;
  //  StringType
  createdbyyominame?: string | null;
  //  StringType
  primaryuseridyominame?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  // Entity Image ImageType The default image for the entity.
  entityimage?: string | null;
  //  StringType
  defaultmailboxname?: string | null;
  // Modified On DateTimeType Date and time when the queue was last modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Business Unit LookupType Unique identifier of the business unit with which the queue is associated.
  businessunitid?: import("../../types/EntityReference").EntityReference | null;
  // Incoming Email StringType Email address that is associated with the queue.
  emailaddress?: string | null;
  // Organization LookupType Unique identifier of the organization associated with the queue.
  organizationid?: import("../../types/EntityReference").EntityReference | null;
  // User Name (Obsolete) StringType This attribute is no longer used. The data is now in the Mailbox.UserName attribute.
  emailusername?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  businessunitidname?: string | null;
  // Mailbox LookupType Select the mailbox associated with this queue.
  defaultmailbox?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  primaryuseridname?: string | null;
  // Convert To Email Activities BooleanType Information that specifies whether a queue is to ignore unsolicited email (deprecated).
  ignoreunsolicitedemail?: boolean | null;
  // Fax Queue BooleanType Indication of whether a queue is the fax delivery queue.
  isfaxqueue?: boolean | null;
  // Owning Team LookupType Unique identifier of the team who owns the queue.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Outgoing Email Delivery Method queue_queue_outgoingemaildeliverymethod Outgoing email delivery method for the queue.
  outgoingemaildeliverymethod?: import("../enums/queue_queue_outgoingemaildeliverymethod").queue_queue_outgoingemaildeliverymethod | null;
  // Allow to Use Credentials for Email Processing (Obsolete) BooleanType This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute.
  allowemailcredentials?: boolean | null;
  //  StringType
  entityimage_url?: string | null;
  // Owner (deprecated) LookupType Unique identifier of the owner of the queue.
  primaryuserid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  organizationidname?: string | null;
  // Status queue_queue_statecode Status of the queue.
  statecode?: import("../enums/queue_queue_statecode").queue_queue_statecode | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
}

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
  transactioncurrencyidname?: string;
  // Queue UniqueidentifierType Unique identifier of the queue.
  queueid?: import("../../types/Guid").Guid;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number;
  // Convert Incoming Email To Activities queue_queue_incomingemailfilteringmethod Convert Incoming Email To Activities
  incomingemailfilteringmethod?: import("../enums/queue_queue_incomingemailfilteringmethod").queue_queue_incomingemailfilteringmethod;
  //  StringType
  owneridname?: string;
  //  StringType
  createdonbehalfbyyominame?: string;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the queue.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference;
  // Status Reason queue_queue_statuscode Reason for the status of the queue.
  statuscode?: import("../enums/queue_queue_statuscode").queue_queue_statuscode;
  // Created On DateTimeType Date and time when the queue was created. DateAndTime:UserLocal
  createdon?: Date;
  // Owner OwnerType Unique identifier of the user or team who owns the queue.
  ownerid?: import("../../types/EntityReference").EntityReference;
  // No. of Members IntegerType Number of Members associated with the queue.
  numberofmembers?: number;
  // Incoming Email Delivery Method queue_queue_incomingemaildeliverymethod Incoming email delivery method for the queue.
  incomingemaildeliverymethod?: import("../enums/queue_queue_incomingemaildeliverymethod").queue_queue_incomingemaildeliverymethod;
  // Created By (Delegate) LookupType Unique identifier of the delegate user who created the queue.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference;
  // Currency LookupType Unique identifier of the currency associated with the queue.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference;
  // Entity Image Id UniqueidentifierType For internal use only.
  entityimageid?: import("../../types/Guid").Guid;
  // Name [Required] StringType Name of the queue.
  name?: string;
  // Modified By LookupType Unique identifier of the user who last modified the queue.
  modifiedby?: import("../../types/EntityReference").EntityReference;
  //  StringType
  modifiedbyyominame?: string;
  //  StringType
  createdonbehalfbyname?: string;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date;
  //  StringType
  modifiedbyname?: string;
  // Type queue_queue_queueviewtype Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue.
  queueviewtype?: import("../enums/queue_queue_queueviewtype").queue_queue_queueviewtype;
  // Description MemoType Description of the queue.
  description?: string;
  // Primary Email Status queue_queue_emailrouteraccessapproval Shows the status of the primary email address.
  emailrouteraccessapproval?: import("../enums/queue_queue_emailrouteraccessapproval").queue_queue_emailrouteraccessapproval;
  // Modified By (Delegate) LookupType Unique identifier of the delegate user who last modified the queue.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference;
  // Version Number BigIntType Version number of the queue.
  versionnumber?: number;
  //  StringType
  owneridyominame?: string;
  // Queue Items IntegerType Number of Queue items associated with the queue.
  numberofitems?: number;
  // Owning User LookupType Unique identifier of the user who owns the queue.
  owninguser?: import("../../types/EntityReference").EntityReference;
  //  StringType
  createdbyname?: string;
  // Queue Type queue_queue_queuetypecode Type of queue that is automatically assigned when a user or queue is created. The type can be public, private, or work in process.
  queuetypecode?: import("../enums/queue_queue_queuetypecode").queue_queue_queuetypecode;
  //  BigIntType
  entityimage_timestamp?: number;
  // Created By LookupType Unique identifier of the user who created the queue record.
  createdby?: import("../../types/EntityReference").EntityReference;
  // Password (Obsolete) StringType This attribute is no longer used. The data is now in the Mailbox.Password attribute.
  emailpassword?: string;
  // Exchange Rate DecimalType Exchange rate for the currency associated with the queue with respect to the base currency.
  exchangerate?: number;
  // Email Address O365 Admin Approval Status BooleanType Shows the status of approval of the email address by O365 Admin.
  isemailaddressapprovedbyo365admin?: boolean;
  //  StringType
  createdbyyominame?: string;
  //  StringType
  primaryuseridyominame?: string;
  //  StringType
  modifiedonbehalfbyname?: string;
  // Entity Image ImageType The default image for the entity.
  entityimage?: string;
  //  StringType
  defaultmailboxname?: string;
  // Modified On DateTimeType Date and time when the queue was last modified. DateAndTime:UserLocal
  modifiedon?: Date;
  // Business Unit LookupType Unique identifier of the business unit with which the queue is associated.
  businessunitid?: import("../../types/EntityReference").EntityReference;
  // Incoming Email StringType Email address that is associated with the queue.
  emailaddress?: string;
  // Organization LookupType Unique identifier of the organization associated with the queue.
  organizationid?: import("../../types/EntityReference").EntityReference;
  // User Name (Obsolete) StringType This attribute is no longer used. The data is now in the Mailbox.UserName attribute.
  emailusername?: string;
  //  EntityNameType
  owneridtype?: string;
  //  StringType
  businessunitidname?: string;
  // Mailbox LookupType Select the mailbox associated with this queue.
  defaultmailbox?: import("../../types/EntityReference").EntityReference;
  //  StringType
  primaryuseridname?: string;
  // Convert To Email Activities BooleanType Information that specifies whether a queue is to ignore unsolicited email (deprecated).
  ignoreunsolicitedemail?: boolean;
  // Fax Queue BooleanType Indication of whether a queue is the fax delivery queue.
  isfaxqueue?: boolean;
  // Owning Team LookupType Unique identifier of the team who owns the queue.
  owningteam?: import("../../types/EntityReference").EntityReference;
  // Outgoing Email Delivery Method queue_queue_outgoingemaildeliverymethod Outgoing email delivery method for the queue.
  outgoingemaildeliverymethod?: import("../enums/queue_queue_outgoingemaildeliverymethod").queue_queue_outgoingemaildeliverymethod;
  // Allow to Use Credentials for Email Processing (Obsolete) BooleanType This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute.
  allowemailcredentials?: boolean;
  //  StringType
  entityimage_url?: string;
  // Owner (deprecated) LookupType Unique identifier of the owner of the queue.
  primaryuserid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  organizationidname?: string;
  // Status queue_queue_statecode Status of the queue.
  statecode?: import("../enums/queue_queue_statecode").queue_queue_statecode;
  //  StringType
  modifiedonbehalfbyyominame?: string;
}

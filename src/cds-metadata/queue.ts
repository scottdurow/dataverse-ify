/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { EntityReference } from "../types/EntityReference";
import { IEntity } from "../types/IEntity";
import { Guid } from "../types/Guid";

export const queueMetadata = {
  typeName: "mscrm.queue",
  logicalName: "queue",
  collectionName: "queues",
  primaryIdAttribute: "queueid",
  attributeTypes: {
    // Numeric Types
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
    businessunitid: ["businessunit"],
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    defaultmailbox: ["mailbox"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    organizationid: ["organization"],
    ownerid: ["principal"],
    owningbusinessunit: ["businessunit"],
    primaryuserid: ["systemuser"],
    transactioncurrencyid: ["transactioncurrency"],
  },
};
// Attribute constants
export enum QueueAttributes {
  AllowEmailCredentials = "allowemailcredentials",
  BusinessUnitId = "businessunitid",
  CreatedBy = "createdby",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  DefaultMailbox = "defaultmailbox",
  Description = "description",
  EMailAddress = "emailaddress",
  EmailPassword = "emailpassword",
  EmailRouterAccessApproval = "emailrouteraccessapproval",
  EmailUsername = "emailusername",
  EntityImageId = "entityimageid",
  ExchangeRate = "exchangerate",
  IgnoreUnsolicitedEmail = "ignoreunsolicitedemail",
  ImportSequenceNumber = "importsequencenumber",
  IncomingEmailDeliveryMethod = "incomingemaildeliverymethod",
  IncomingEmailFilteringMethod = "incomingemailfilteringmethod",
  IsEmailAddressApprovedByO365Admin = "isemailaddressapprovedbyo365admin",
  IsFaxQueue = "isfaxqueue",
  ModifiedBy = "modifiedby",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  Name = "name",
  NumberOfItems = "numberofitems",
  NumberOfMembers = "numberofmembers",
  OrganizationId = "organizationid",
  OutgoingEmailDeliveryMethod = "outgoingemaildeliverymethod",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwningBusinessUnit = "owningbusinessunit",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  PrimaryUserId = "primaryuserid",
  QueueId = "queueid",
  QueueTypeCode = "queuetypecode",
  QueueViewType = "queueviewtype",
  StateCode = "statecode",
  StatusCode = "statuscode",
  TransactionCurrencyId = "transactioncurrencyid",
  VersionNumber = "versionnumber",
}

export enum queue_queue_emailrouteraccessapproval {
  Empty = 0,
  Approved = 1,
  Pending_Approval = 2,
  Rejected = 3,
}

export enum queue_queue_incomingemaildeliverymethod {
  None = 0,
  ServerSide_Synchronization_or_Email_Router = 2,
  Forward_Mailbox = 3,
}

export enum queue_queue_incomingemailfilteringmethod {
  All_email_messages = 0,
  Email_messages_in_response_to_Dynamics_365_email = 1,
  Email_messages_from_Dynamics_365_Leads_Contacts_and_Accounts = 2,
  Email_messages_from_Dynamics_365_records_that_are_email_enabled = 3,
  No_email_messages = 4,
}

export enum queue_queue_outgoingemaildeliverymethod {
  None = 0,
  ServerSide_Synchronization_or_Email_Router = 2,
}

export enum queue_queue_queuetypecode {
  Default_Value = 1,
}

export enum queue_queue_queueviewtype {
  Public = 0,
  Private = 1,
}

export enum queue_queue_statecode {
  Active = 0,
  Inactive = 1,
}

export enum queue_queue_statuscode {
  Inactive = 2,
  Active = 1,
}

export enum socialprofile_community {
  Facebook = 1,
  Twitter = 2,
  Other = 0,
}

export interface Queue extends IEntity {
  /**Allow to Use Credentials for Email Processing (Obsolete)	BooleanType
	This attribute is no longer used. The data is now in the Mailbox.AllowEmailConnectorToUseCredentials attribute.
	*/
  allowemailcredentials?: boolean;
  /**Business Unit	LookupType
	Unique identifier of the business unit with which the queue is associated.
	*/
  businessunitid?: EntityReference;
  /**Created By	LookupType
	Unique identifier of the user who created the queue record.
	*/
  createdby?: EntityReference;
  /**Created On	DateTimeType
	Date and time when the queue was created.
	DateAndTime:UserLocal*/
  createdon?: Date;
  /**Created By (Delegate)	LookupType
	Unique identifier of the delegate user who created the queue.
	*/
  createdonbehalfby?: EntityReference;
  /**Mailbox	LookupType
	Select the mailbox associated with this queue.
	*/
  defaultmailbox?: EntityReference;
  /**Description	MemoType
	Description of the queue.
	*/
  description?: string;
  /**Incoming Email	StringType
	Email address that is associated with the queue.
	*/
  emailaddress?: string;
  /**Password (Obsolete)	StringType
	This attribute is no longer used. The data is now in the Mailbox.Password attribute.
	*/
  emailpassword?: string;
  /**Primary Email Status	queue_queue_emailrouteraccessapproval
	Shows the status of the primary email address.
	*/
  emailrouteraccessapproval?: queue_queue_emailrouteraccessapproval;
  /**User Name (Obsolete)	StringType
	This attribute is no longer used. The data is now in the Mailbox.UserName attribute.
	*/
  emailusername?: string;
  /**Entity Image Id	UniqueidentifierType
	For internal use only.
	*/
  entityimageid?: Guid;
  /**Exchange Rate	DecimalType
	Exchange rate for the currency associated with the queue with respect to the base currency.
	*/
  exchangerate?: number;
  /**Convert To Email Activities	BooleanType
	Information that specifies whether a queue is to ignore unsolicited email (deprecated).
	*/
  ignoreunsolicitedemail?: boolean;
  /**Import Sequence Number	IntegerType
	Unique identifier of the data import or data migration that created this record.
	*/
  importsequencenumber?: number;
  /**Incoming Email Delivery Method	queue_queue_incomingemaildeliverymethod
	Incoming email delivery method for the queue.
	*/
  incomingemaildeliverymethod?: queue_queue_incomingemaildeliverymethod;
  /**Convert Incoming Email To Activities	queue_queue_incomingemailfilteringmethod
	Convert Incoming Email To Activities
	*/
  incomingemailfilteringmethod?: queue_queue_incomingemailfilteringmethod;
  /**Email Address O365 Admin Approval Status	BooleanType
	Shows the status of approval of the email address by O365 Admin.
	*/
  isemailaddressapprovedbyo365admin?: boolean;
  /**Fax Queue	BooleanType
	Indication of whether a queue is the fax delivery queue.
	*/
  isfaxqueue?: boolean;
  /**Modified By	LookupType
	Unique identifier of the user who last modified the queue.
	*/
  modifiedby?: EntityReference;
  /**Modified On	DateTimeType
	Date and time when the queue was last modified.
	DateAndTime:UserLocal*/
  modifiedon?: Date;
  /**Modified By (Delegate)	LookupType
	Unique identifier of the delegate user who last modified the queue.
	*/
  modifiedonbehalfby?: EntityReference;
  /**Name(Required)	StringType
	Name of the queue.
	*/
  name?: string;
  /**Queue Items	IntegerType
	Number of Queue items associated with the queue.
	*/
  numberofitems?: number;
  /**No. of Members	IntegerType
	Number of Members associated with the queue.
	*/
  numberofmembers?: number;
  /**Organization	LookupType
	Unique identifier of the organization associated with the queue.
	*/
  organizationid?: EntityReference;
  /**Outgoing Email Delivery Method	queue_queue_outgoingemaildeliverymethod
	Outgoing email delivery method for the queue.
	*/
  outgoingemaildeliverymethod?: queue_queue_outgoingemaildeliverymethod;
  /**Record Created On	DateTimeType
	Date and time that the record was migrated.
	DateOnly:UserLocal*/
  overriddencreatedon?: Date;
  /**Owner	OwnerType
	Unique identifier of the user or team who owns the queue.
	*/
  ownerid?: EntityReference;
  /**Owning Business Unit	LookupType
	Unique identifier of the business unit that owns the queue.
	*/
  owningbusinessunit?: EntityReference;
  /**Owning Team	LookupType
	Unique identifier of the team who owns the queue.
	*/
  owningteam?: EntityReference;
  /**Owning User	LookupType
	Unique identifier of the user who owns the queue.
	*/
  owninguser?: EntityReference;
  /**Owner (deprecated)	LookupType
	Unique identifier of the owner of the queue.
	*/
  primaryuserid?: EntityReference;
  /**Queue	UniqueidentifierType
	Unique identifier of the queue.
	*/
  queueid?: Guid;
  /**Queue Type	queue_queue_queuetypecode
	Type of queue that is automatically assigned when a user or queue is created. The type can be public, private, or work in process.
	*/
  queuetypecode?: queue_queue_queuetypecode;
  /**Type	queue_queue_queueviewtype
	Select whether the queue is public or private. A public queue can be viewed by all. A private queue can be viewed only by the members added to the queue.
	*/
  queueviewtype?: queue_queue_queueviewtype;
  /**Status	queue_queue_statecode
	Status of the queue.
	*/
  statecode?: queue_queue_statecode;
  /**Status Reason	queue_queue_statuscode
	Reason for the status of the queue.
	*/
  statuscode?: queue_queue_statuscode;
  /**Currency	LookupType
	Unique identifier of the currency associated with the queue.
	*/
  transactioncurrencyid?: EntityReference;
  /**Version Number	BigIntType
	Version number of the queue.
	*/
  versionnumber?: number;
}

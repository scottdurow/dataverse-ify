/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { EntityReference } from "../types/EntityReference";
import { IEntity } from "../types/IEntity";
import { Guid } from "../types/Guid";

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
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    organizationid: ["organization"],
    queueid: ["queue"],
    transactioncurrencyid: ["transactioncurrency"],
    objectid: [
      "activitypointer",
      "adx_alertsubscription",
      "adx_inviteredemption",
      "adx_portalcomment",
      "appointment",
      "bulkoperation",
      "campaignactivity",
      "campaignresponse",
      "email",
      "fax",
      "incident",
      "knowledgearticle",
      "letter",
      "li_inmail",
      "li_message",
      "li_pointdrivepresentationviewed",
      "msdyn_agreementbookingdate",
      "msdyn_agreementbookingsetup",
      "msdyn_agreementinvoicedate",
      "msdyn_agreementinvoicesetup",
      "msdyn_approval",
      "msdyn_bookingalert",
      "msdyn_inventoryadjustment",
      "msdyn_inventorytransfer",
      "msdyn_iotalert",
      "msdyn_knowledgearticletemplate",
      "msdyn_project",
      "msdyn_projecttask",
      "msdyn_resourcerequest",
      "msdyn_timegroup",
      "msdyn_timegroupdetail",
      "msdyn_workorder",
      "msdyn_workorderincident",
      "msdyn_workorderservice",
      "msdyn_workorderservicetask",
      "msfp_surveyinvite",
      "msfp_surveyresponse",
      "phonecall",
      "recurringappointmentmaster",
      "serviceappointment",
      "socialactivity",
      "task",
    ],
    workerid: ["systemuser", "team"],
  },
};

// Attribute constants
export enum QueueItemAttributes {
  CreatedBy = "createdby",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  EnteredOn = "enteredon",
  ExchangeRate = "exchangerate",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedBy = "modifiedby",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ObjectId = "objectid",
  ObjectTypeCode = "objecttypecode",
  OrganizationId = "organizationid",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwningBusinessUnit = "owningbusinessunit",
  OwningUser = "owninguser",
  Priority = "priority",
  QueueId = "queueid",
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
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  WorkerId = "workerid",
  WorkerIdModifiedOn = "workeridmodifiedon",
}
export enum queueitem_queueitem_objecttypecode {
  Case = 112,
  Booking_Alert = 10007,
  Project = 10069,
  Service_Activity = 4214,
  Phone_Call = 4210,
  Agreement_Booking_Setup = 10113,
  Recurring_Appointment = 4251,
  Quick_Campaign = 4406,
  PointDrive_Presentation_Viewed = 10363,
  Project_Task = 10074,
  Task = 4212,
  Time_Group_Detail = 10028,
  Time_Group = 10027,
  Message = 10362,
  IoT_Alert = 10425,
  Knowledge_Article_Template = 10380,
  Work_Order_Service_Task = 10183,
  Campaign_Activity = 4402,
  Approval = 10032,
  Email = 4202,
  Alert_Subscription = 10227,
  Inventory_Transfer = 10136,
  Forms_Pro_survey_invite = 10355,
  inMail = 10361,
  Appointment = 4201,
  Fax = 4204,
  Campaign_Response = 4401,
  Work_Order_Incident = 10179,
  Work_Order = 10176,
  Forms_Pro_survey_response = 10356,
  Portal_Comment = 10290,
  Agreement_Invoice_Date = 10114,
  Knowledge_Article = 9953,
  Inventory_Adjustment = 10133,
  Resource_Request = 10091,
  Activity = 4200,
  Letter = 4207,
  Invite_Redemption = 10230,
  Agreement_Invoice_Setup = 10116,
  Social_Activity = 4216,
  Work_Order_Service = 10182,
  Agreement_Booking_Date = 10108,
}

export enum queueitem_queueitem_statecode {
  Active = 0,
  Inactive = 1,
}

export enum queueitem_queueitem_statuscode {
  Inactive = 2,
  Active = 1,
}

export interface QueueItem extends IEntity {
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
  /**Entered Queue	DateTimeType
	Shows the date the record was assigned to the queue.
	DateAndTime:UserLocal*/
  enteredon?: Date;
  /**Exchange Rate	DecimalType
	Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
	*/
  exchangerate?: number;
  /**Import Sequence Number	IntegerType
	Unique identifier of the data import or data migration that created this record.
	*/
  importsequencenumber?: number;
  /**Modified By	LookupType
	Shows who last updated the record.
	*/
  modifiedby?: EntityReference;
  /**Modified On	DateTimeType
	Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
	DateAndTime:UserLocal*/
  modifiedon?: Date;
  /**Modified By (Delegate)	LookupType
	Unique identifier of the delegate user who last modified the queueitem.
	*/
  modifiedonbehalfby?: EntityReference;
  /**Object(Required)	LookupType
	Choose the activity, case, or article assigned to the queue.
	*/
  objectid?: EntityReference;
  /**Type	queueitem_queueitem_objecttypecode
	Select the type of the queue item, such as activity, case, or appointment.
	*/
  objecttypecode?: queueitem_queueitem_objecttypecode;
  /**Organization	LookupType
	Unique identifier of the organization with which the queue item is associated.
	*/
  organizationid?: EntityReference;
  /**Record Created On	DateTimeType
	Date and time that the record was migrated.
	DateOnly:UserLocal*/
  overriddencreatedon?: Date;
  /**Owner(Required)	OwnerType
	Unique identifier of the user or team who owns the queue item.
	*/
  ownerid?: EntityReference;
  /**Owning Business Unit(Required)	LookupType
	Unique identifier of the business unit that owns the queue item.
	*/
  owningbusinessunit?: EntityReference;
  /**Owning User(Required)	LookupType
	Unique identifier of the user who owns the queue item.
	*/
  owninguser?: EntityReference;
  /**Priority	IntegerType
	Priority of the queue item.
	*/
  priority?: number;
  /**Queue(Required)	LookupType
	Choose the queue that the item is assigned to.
	*/
  queueid?: EntityReference;
  /**Queue Item	UniqueidentifierType
	Unique identifier of the queue item.
	*/
  queueitemid?: Guid;
  /**From	StringType
	Sender who created the queue item.
	*/
  sender?: string;
  /**Status (deprecated)	IntegerType
	Status of the queue item.
	*/
  state?: number;
  /**Status	queueitem_queueitem_statecode
	Shows whether the queue record is active or inactive. Inactive queue records are read-only and can't be edited unless they are reactivated.
	*/
  statecode?: queueitem_queueitem_statecode;
  /**Status Reason (deprecated)	IntegerType
	Reason for the status of the queue item.
	*/
  status?: number;
  /**Status Reason	queueitem_queueitem_statuscode
	Select the item's status.
	*/
  statuscode?: queueitem_queueitem_statuscode;
  /**Time Zone Rule Version Number	IntegerType
	For internal use only.
	*/
  timezoneruleversionnumber?: number;
  /**Title	StringType
	Shows the title or name that describes the queue record. This value is copied from the record that was assigned to the queue.
	*/
  title?: string;
  /**To	StringType
	Recipients listed on the To line of the message for email queue items.
	*/
  torecipients?: string;
  /**Currency	LookupType
	Choose the local currency for the record to make sure budgets are reported in the correct currency.
	*/
  transactioncurrencyid?: EntityReference;
  /**UTC Conversion Time Zone Code	IntegerType
	Time zone code that was in use when the record was created.
	*/
  utcconversiontimezonecode?: number;
  /**Version Number	BigIntType
	Version number of the queue item.
	*/
  versionnumber?: number;
  /**Worked By	LookupType
	Shows who is working on the queue item.
	*/
  workerid?: EntityReference;
  /**Worked On	DateTimeType
	Shows the date and time when the queue item was last assigned to a user.
	DateOnly:UserLocal*/
  workeridmodifiedon?: Date;
}

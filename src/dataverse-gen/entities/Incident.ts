/* eslint-disable*/
import { IEntity } from "../../types/IEntity";
// Entity Incident
export const incidentMetadata = {
  typeName: "mscrm.incident",
  logicalName: "incident",
  collectionName: "incidents",
  primaryIdAttribute: "incidentid",
  attributeTypes: {
    // Numeric Types
    actualserviceunits: "Integer",
    billedserviceunits: "Integer",
    entityimage_timestamp: "BigInt",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    influencescore: "Double",
    numberofchildincidents: "Integer",
    onholdtime: "Integer",
    sentimentvalue: "Double",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    caseorigincode: "Optionset",
    casetypecode: "Optionset",
    contractservicelevelcode: "Optionset",
    customersatisfactioncode: "Optionset",
    firstresponseslastatus: "Optionset",
    incidentstagecode: "Optionset",
    messagetypecode: "Optionset",
    prioritycode: "Optionset",
    resolvebyslastatus: "Optionset",
    servicestage: "Optionset",
    severitycode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    escalatedon: "DateAndTime:UserLocal",
    followupby: "DateOnly:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    resolveby: "DateAndTime:UserLocal",
    responseby: "DateAndTime:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    subjectid: ["mscrm.subject"],
    stageid_processstage: ["mscrm.processstage"],
    socialprofileid: ["mscrm.socialprofile"],
    responsiblecontactid: ["mscrm.contact"],
    resolvebykpiid: ["mscrm.slakpiinstance"],
    productid: ["mscrm.product"],
    primarycontactid: ["mscrm.contact"],
    parentcaseid: ["mscrm.incident"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    msdyn_IoTAlert: ["mscrm.msdyn_iotalert"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    masterid: ["mscrm.incident"],
    kbarticleid: ["mscrm.kbarticle"],
    firstresponsebykpiid: ["mscrm.slakpiinstance"],
    existingcase: ["mscrm.incident"],
    entitlementid: ["mscrm.entitlement"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    contractid: ["mscrm.contract"],
    contractdetailid: ["mscrm.contractdetail"],
    customerid: ["account","contact"],
    slaid: ["sla"],
    slainvokedid: ["sla"],
  },
};

// Attribute constants
export enum IncidentAttributes {
  AccountId = "accountid",
  AccountIdName = "accountidname",
  AccountIdYomiName = "accountidyominame",
  ActivitiesComplete = "activitiescomplete",
  ActualServiceUnits = "actualserviceunits",
  BilledServiceUnits = "billedserviceunits",
  BlockedProfile = "blockedprofile",
  CaseOriginCode = "caseorigincode",
  CaseTypeCode = "casetypecode",
  CheckEmail = "checkemail",
  ContactId = "contactid",
  ContactIdName = "contactidname",
  ContactIdYomiName = "contactidyominame",
  ContractDetailId = "contractdetailid",
  ContractDetailIdName = "contractdetailidname",
  ContractId = "contractid",
  ContractIdName = "contractidname",
  ContractServiceLevelCode = "contractservicelevelcode",
  CreatedBy = "createdby",
  CreatedByExternalParty = "createdbyexternalparty",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  CustomerContacted = "customercontacted",
  CustomerId = "customerid",
  CustomerIdName = "customeridname",
  CustomerIdType = "customeridtype",
  CustomerIdYomiName = "customeridyominame",
  CustomerSatisfactionCode = "customersatisfactioncode",
  DecrementEntitlementTerm = "decremententitlementterm",
  Description = "description",
  EmailAddress = "emailaddress",
  EntitlementId = "entitlementid",
  EntitlementIdName = "entitlementidname",
  EntityImage = "entityimage",
  EntityImage_Timestamp = "entityimage_timestamp",
  EntityImage_URL = "entityimage_url",
  EntityImageId = "entityimageid",
  EscalatedOn = "escalatedon",
  ExchangeRate = "exchangerate",
  ExistingCase = "existingcase",
  FirstResponseByKPIId = "firstresponsebykpiid",
  FirstResponseByKPIIdName = "firstresponsebykpiidname",
  FirstResponseSent = "firstresponsesent",
  FirstResponseSLAStatus = "firstresponseslastatus",
  FollowupBy = "followupby",
  FollowUpTaskCreated = "followuptaskcreated",
  ImportSequenceNumber = "importsequencenumber",
  IncidentId = "incidentid",
  IncidentStageCode = "incidentstagecode",
  InfluenceScore = "influencescore",
  IsDecrementing = "isdecrementing",
  IsEscalated = "isescalated",
  KbArticleId = "kbarticleid",
  KbArticleIdName = "kbarticleidname",
  LastOnHoldTime = "lastonholdtime",
  MasterId = "masterid",
  MasterIdName = "masteridname",
  Merged = "merged",
  MessageTypeCode = "messagetypecode",
  ModifiedBy = "modifiedby",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msdyn_iotalert = "msdyn_iotalert",
  msdyn_iotalertName = "msdyn_iotalertname",
  NumberOfChildIncidents = "numberofchildincidents",
  OnHoldTime = "onholdtime",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  ParentCaseId = "parentcaseid",
  ParentCaseIdName = "parentcaseidname",
  PrimaryContactId = "primarycontactid",
  PrimaryContactIdName = "primarycontactidname",
  PrimaryContactIdYomiName = "primarycontactidyominame",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  ProductId = "productid",
  ProductIdName = "productidname",
  ProductSerialNumber = "productserialnumber",
  ResolveBy = "resolveby",
  ResolveByKPIId = "resolvebykpiid",
  ResolveByKPIIdName = "resolvebykpiidname",
  ResolveBySLAStatus = "resolvebyslastatus",
  ResponseBy = "responseby",
  ResponsibleContactId = "responsiblecontactid",
  ResponsibleContactIdName = "responsiblecontactidname",
  ResponsibleContactIdYomiName = "responsiblecontactidyominame",
  RouteCase = "routecase",
  SentimentValue = "sentimentvalue",
  ServiceStage = "servicestage",
  SeverityCode = "severitycode",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  SocialProfileId = "socialprofileid",
  SocialProfileIdName = "socialprofileidname",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  SubjectId = "subjectid",
  SubjectIdName = "subjectidname",
  TicketNumber = "ticketnumber",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  Title = "title",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface Incident extends IEntity {
  // Account LookupType Unique identifier of the account with which the case is associated.
  accountid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  accountidname?: string | null;
  //  StringType
  accountidyominame?: string | null;
  // Activities Complete BooleanType This attribute is used for Sample Service Business Processes.
  activitiescomplete?: boolean | null;
  // Actual Service Units IntegerType Type the number of service units that were actually required to resolve the case.
  actualserviceunits?: number | null;
  // Billed Service Units IntegerType Type the number of service units that were billed to the customer for the case.
  billedserviceunits?: number | null;
  // Blocked Profile BooleanType Details whether the profile is blocked or not.
  blockedprofile?: boolean | null;
  // Origin incident_caseorigincode Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis.
  caseorigincode?: import("../enums/incident_caseorigincode").incident_caseorigincode | null;
  // Case Type incident_incident_casetypecode Select the type of case to identify the incident for use in case routing and analysis.
  casetypecode?: import("../enums/incident_incident_casetypecode").incident_incident_casetypecode | null;
  // Check Email BooleanType This attribute is used for Sample Service Business Processes.
  checkemail?: boolean | null;
  // Contact LookupType Unique identifier of the contact associated with the case.
  contactid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  contactidname?: string | null;
  //  StringType
  contactidyominame?: string | null;
  // Contract Line LookupType Choose the contract line that the case should be logged under to make sure the customer is charged correctly.
  contractdetailid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  contractdetailidname?: string | null;
  // Contract LookupType Choose the service contract that the case should be logged under to make sure the customer is eligible for support services.
  contractid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  contractidname?: string | null;
  // Service Level incident_incident_contractservicelevelcode Select the service level for the case to make sure the case is handled correctly.
  contractservicelevelcode?: import("../enums/incident_incident_contractservicelevelcode").incident_incident_contractservicelevelcode | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Customer Contacted BooleanType Tells whether customer service representative has contacted the customer or not.
  customercontacted?: boolean | null;
  // Customer CustomerType Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities.
  customerid?: import("../../types/EntityReference").EntityReference | null;
  //  [Required] StringType
  customeridname?: string;
  // Customer Type [Required] EntityNameType
  customeridtype?: string;
  //  [Required] StringType
  customeridyominame?: string;
  // Satisfaction incident_incident_customersatisfactioncode Select the customer's level of satisfaction with the handling and resolution of the case.
  customersatisfactioncode?: import("../enums/incident_incident_customersatisfactioncode").incident_incident_customersatisfactioncode | null;
  // Decrement Entitlement Terms BooleanType Shows whether terms of the associated entitlement should be decremented or not.
  decremententitlementterm?: boolean | null;
  // Description MemoType Type additional information to describe the case to assist the service team in reaching a resolution.
  description?: string | null;
  // Email Address StringType The primary email address for the entity.
  emailaddress?: string | null;
  // Entitlement LookupType Choose the entitlement that is applicable for the case.
  entitlementid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  entitlementidname?: string | null;
  // Entity Image ImageType The default image for the entity.
  entityimage?: string | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  //  StringType
  entityimage_url?: string | null;
  //  UniqueidentifierType
  entityimageid?: import("../../types/Guid").Guid | null;
  // Escalated On DateTimeType Indicates the date and time when the case was escalated. DateAndTime:UserLocal
  escalatedon?: Date | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Existing Case LookupType Select an existing case for the customer that has been populated. For internal use only.
  existingcase?: import("../../types/EntityReference").EntityReference | null;
  // First Response By KPI LookupType For internal use only.
  firstresponsebykpiid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  firstresponsebykpiidname?: string | null;
  // First Response Sent BooleanType Indicates if the first response has been sent.
  firstresponsesent?: boolean | null;
  // First Response SLA Status incident_incident_firstresponseslastatus Shows the status of the initial response time for the case according to the terms of the SLA.
  firstresponseslastatus?: import("../enums/incident_incident_firstresponseslastatus").incident_incident_firstresponseslastatus | null;
  // Follow Up By DateTimeType Enter the date by which a customer service representative has to follow up with the customer on this case. DateOnly:UserLocal
  followupby?: Date | null;
  // Follow up Task Created BooleanType This attribute is used for Sample Service Business Processes.
  followuptaskcreated?: boolean | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Case UniqueidentifierType Unique identifier of the case.
  incidentid?: import("../../types/Guid").Guid | null;
  // Case Stage incident_incident_incidentstagecode Select the current stage of the service process for the case to assist service team members when they review or transfer a case.
  incidentstagecode?: import("../enums/incident_incident_incidentstagecode").incident_incident_incidentstagecode | null;
  // Influence Score DoubleType Will contain the Influencer score coming from NetBreeze.
  influencescore?: number | null;
  // Decrementing BooleanType For system use only.
  isdecrementing?: boolean | null;
  // Is Escalated BooleanType Indicates if the case has been escalated.
  isescalated?: boolean | null;
  // Knowledge Base Article LookupType Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer.
  kbarticleid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  kbarticleidname?: string | null;
  // Last On Hold Time DateTimeType Contains the date time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Master Case LookupType Choose the primary case the current case was merged into.
  masterid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  masteridname?: string | null;
  // Internal Use Only BooleanType Tells whether the incident has been merged with another incident.
  merged?: boolean | null;
  // Received As socialactivity_postmessagetype Shows whether the post originated as a public or private message.
  messagetypecode?: import("../enums/socialactivity_postmessagetype").socialactivity_postmessagetype | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // IoT Alert LookupType The iot alert that initiated this case
  msdyn_iotalert?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  msdyn_iotalertname?: string | null;
  // Child Cases IntegerType Number of child incidents associated with the incident.
  numberofchildincidents?: number | null;
  // On Hold Time (Minutes) IntegerType Shows the duration in minutes for which the case was on hold.
  onholdtime?: number | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Owner Id
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  // Parent Case LookupType Choose the parent case for a case.
  parentcaseid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  parentcaseidname?: string | null;
  // Contact LookupType Select a primary contact for this case.
  primarycontactid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  primarycontactidname?: string | null;
  //  StringType
  primarycontactidyominame?: string | null;
  // Priority incident_incident_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/incident_incident_prioritycode").incident_incident_prioritycode | null;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("../../types/Guid").Guid | null;
  // Product LookupType Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product.
  productid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  productidname?: string | null;
  // Serial Number StringType Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported.
  productserialnumber?: string | null;
  // Resolve By DateTimeType Enter the date by when the case must be resolved. DateAndTime:UserLocal
  resolveby?: Date | null;
  // Resolve By KPI LookupType For internal use only.
  resolvebykpiid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  resolvebykpiidname?: string | null;
  // Resolve By SLA Status incident_incident_resolvebyslastatus Shows the status of the resolution time for the case according to the terms of the SLA.
  resolvebyslastatus?: import("../enums/incident_incident_resolvebyslastatus").incident_incident_resolvebyslastatus | null;
  // First Response By DateTimeType For internal use only. DateAndTime:UserLocal
  responseby?: Date | null;
  // Responsible Contact LookupType Choose an additional customer contact who can also help resolve the case.
  responsiblecontactid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  responsiblecontactidname?: string | null;
  //  StringType
  responsiblecontactidyominame?: string | null;
  // Route Case BooleanType Tells whether the incident has been routed to queue or not.
  routecase?: boolean | null;
  // Sentiment Value DoubleType Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values.
  sentimentvalue?: number | null;
  // Service Stage servicestage Select the stage, in the case resolution process, that the case is in.
  servicestage?: import("../enums/servicestage").servicestage | null;
  // Severity incident_incident_severitycode Select the severity of this case to indicate the incident's impact on the customer's business.
  severitycode?: import("../enums/incident_incident_severitycode").incident_incident_severitycode | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the case record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // Social Profile LookupType Unique identifier of the social profile with which the case is associated.
  socialprofileid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  socialprofileidname?: string | null;
  // (Deprecated) Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("../../types/Guid").Guid | null;
  // Status incident_incident_statecode Shows whether the case is active, resolved, or canceled. Resolved and canceled cases are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/incident_incident_statecode").incident_incident_statecode | null;
  // Status Reason incident_incident_statuscode Select the case's status.
  statuscode?: import("../enums/incident_incident_statuscode").incident_incident_statuscode | null;
  // Subject LookupType Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area.
  subjectid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  subjectidname?: string | null;
  // Case Number StringType Shows the case number for customer reference and searching capabilities. This cannot be modified.
  ticketnumber?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Case Title [Required] StringType Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views.
  title?: string;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}

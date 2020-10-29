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
    entityimage_timestamp: "BigInt",
    sentimentvalue: "Double",
    exchangerate: "Decimal",
    influencescore: "Double",
    onholdtime: "Integer",
    actualserviceunits: "Integer",
    billedserviceunits: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    importsequencenumber: "Integer",
    versionnumber: "BigInt",
    numberofchildincidents: "Integer",
    // Optionsets
    caseorigincode: "Optionset",
    statuscode: "Optionset",
    firstresponseslastatus: "Optionset",
    servicestage: "Optionset",
    contractservicelevelcode: "Optionset",
    casetypecode: "Optionset",
    severitycode: "Optionset",
    resolvebyslastatus: "Optionset",
    customersatisfactioncode: "Optionset",
    incidentstagecode: "Optionset",
    prioritycode: "Optionset",
    messagetypecode: "Optionset",
    statecode: "Optionset",
    // Date Formats
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    resolveby: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
    responseby: "DateAndTime:UserLocal",
    followupby: "DateOnly:UserLocal",
    escalatedon: "DateAndTime:UserLocal",
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
    slaid: ["sla"],
    slainvokedid: ["sla"],
    customerid: ["account","contact"],
  },
};

// Attribute constants
export enum IncidentAttributes {
  ContactId = "contactid",
  SLAId = "slaid",
  ResolveByKPIId = "resolvebykpiid",
  ModifiedOn = "modifiedon",
  OverriddenCreatedOn = "overriddencreatedon",
  ProductId = "productid",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  EntityImage_Timestamp = "entityimage_timestamp",
  CaseOriginCode = "caseorigincode",
  ResponsibleContactIdYomiName = "responsiblecontactidyominame",
  ExistingCase = "existingcase",
  CustomerIdYomiName = "customeridyominame",
  ResolveBy = "resolveby",
  PrimaryContactIdName = "primarycontactidname",
  SocialProfileIdName = "socialprofileidname",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  SLAInvokedId = "slainvokedid",
  CreatedByName = "createdbyname",
  IsEscalated = "isescalated",
  ContractId = "contractid",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  OwningBusinessUnit = "owningbusinessunit",
  SentimentValue = "sentimentvalue",
  ResponsibleContactId = "responsiblecontactid",
  AccountId = "accountid",
  KbArticleId = "kbarticleid",
  StatusCode = "statuscode",
  ActivitiesComplete = "activitiescomplete",
  FirstResponseSLAStatus = "firstresponseslastatus",
  ServiceStage = "servicestage",
  msdyn_iotalert = "msdyn_iotalert",
  DecrementEntitlementTerm = "decremententitlementterm",
  ResponsibleContactIdName = "responsiblecontactidname",
  ContractDetailIdName = "contractdetailidname",
  ContactIdYomiName = "contactidyominame",
  ContactIdName = "contactidname",
  LastOnHoldTime = "lastonholdtime",
  ExchangeRate = "exchangerate",
  InfluenceScore = "influencescore",
  ContractDetailId = "contractdetailid",
  OwnerIdName = "owneridname",
  CreatedOn = "createdon",
  TicketNumber = "ticketnumber",
  ProductIdName = "productidname",
  BlockedProfile = "blockedprofile",
  FirstResponseSent = "firstresponsesent",
  CustomerIdType = "customeridtype",
  OnHoldTime = "onholdtime",
  ProcessId = "processid",
  ProductSerialNumber = "productserialnumber",
  OwnerIdYomiName = "owneridyominame",
  EntityImage_URL = "entityimage_url",
  Description = "description",
  ModifiedBy = "modifiedby",
  ActualServiceUnits = "actualserviceunits",
  ParentCaseId = "parentcaseid",
  PrimaryContactId = "primarycontactid",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  SubjectId = "subjectid",
  AccountIdName = "accountidname",
  ContractServiceLevelCode = "contractservicelevelcode",
  OwningTeam = "owningteam",
  EntitlementId = "entitlementid",
  TraversedPath = "traversedpath",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  OwningUser = "owninguser",
  OwnerIdType = "owneridtype",
  CheckEmail = "checkemail",
  EntityImageId = "entityimageid",
  BilledServiceUnits = "billedserviceunits",
  CaseTypeCode = "casetypecode",
  EntityImage = "entityimage",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  CustomerId = "customerid",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  ResponseBy = "responseby",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  CreatedOnBehalfBy = "createdonbehalfby",
  EmailAddress = "emailaddress",
  TransactionCurrencyId = "transactioncurrencyid",
  SLAName = "slaname",
  RouteCase = "routecase",
  EntitlementIdName = "entitlementidname",
  SLAInvokedIdName = "slainvokedidname",
  MasterId = "masterid",
  OwnerId = "ownerid",
  AccountIdYomiName = "accountidyominame",
  FirstResponseByKPIId = "firstresponsebykpiid",
  Title = "title",
  SubjectIdName = "subjectidname",
  Merged = "merged",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  SeverityCode = "severitycode",
  FollowupBy = "followupby",
  ResolveBySLAStatus = "resolvebyslastatus",
  IsDecrementing = "isdecrementing",
  ContractIdName = "contractidname",
  CustomerSatisfactionCode = "customersatisfactioncode",
  ModifiedByYomiName = "modifiedbyyominame",
  MasterIdName = "masteridname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  CreatedBy = "createdby",
  KbArticleIdName = "kbarticleidname",
  IncidentStageCode = "incidentstagecode",
  CreatedByExternalParty = "createdbyexternalparty",
  StageId = "stageid",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  CustomerContacted = "customercontacted",
  CustomerIdName = "customeridname",
  ImportSequenceNumber = "importsequencenumber",
  IncidentId = "incidentid",
  FirstResponseByKPIIdName = "firstresponsebykpiidname",
  VersionNumber = "versionnumber",
  SocialProfileId = "socialprofileid",
  PrimaryContactIdYomiName = "primarycontactidyominame",
  ResolveByKPIIdName = "resolvebykpiidname",
  ParentCaseIdName = "parentcaseidname",
  ModifiedByName = "modifiedbyname",
  FollowUpTaskCreated = "followuptaskcreated",
  CreatedByYomiName = "createdbyyominame",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  msdyn_iotalertName = "msdyn_iotalertname",
  EscalatedOn = "escalatedon",
  PriorityCode = "prioritycode",
  NumberOfChildIncidents = "numberofchildincidents",
  MessageTypeCode = "messagetypecode",
  StateCode = "statecode",
}

// Early Bound Interface
export interface Incident extends IEntity {
  // Contact LookupType Unique identifier of the contact associated with the case.
  contactid?: import("../../types/EntityReference").EntityReference | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the case record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Resolve By KPI LookupType For internal use only.
  resolvebykpiid?: import("../../types/EntityReference").EntityReference | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Product LookupType Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product.
  productid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  // Origin incident_caseorigincode Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis.
  caseorigincode?: import("../enums/incident_caseorigincode").incident_caseorigincode | null;
  //  StringType
  responsiblecontactidyominame?: string | null;
  // Existing Case LookupType Select an existing case for the customer that has been populated. For internal use only.
  existingcase?: import("../../types/EntityReference").EntityReference | null;
  //  [Required] StringType
  customeridyominame?: string;
  // Resolve By DateTimeType Enter the date by when the case must be resolved. DateAndTime:UserLocal
  resolveby?: Date | null;
  //  StringType
  primarycontactidname?: string | null;
  //  StringType
  socialprofileidname?: string | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  // Is Escalated BooleanType Indicates if the case has been escalated.
  isescalated?: boolean | null;
  // Contract LookupType Choose the service contract that the case should be logged under to make sure the customer is eligible for support services.
  contractid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  // Sentiment Value DoubleType Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values.
  sentimentvalue?: number | null;
  // Responsible Contact LookupType Choose an additional customer contact who can also help resolve the case.
  responsiblecontactid?: import("../../types/EntityReference").EntityReference | null;
  // Account LookupType Unique identifier of the account with which the case is associated.
  accountid?: import("../../types/EntityReference").EntityReference | null;
  // Knowledge Base Article LookupType Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer.
  kbarticleid?: import("../../types/EntityReference").EntityReference | null;
  // Status Reason incident_incident_statuscode Select the case's status.
  statuscode?: import("../enums/incident_incident_statuscode").incident_incident_statuscode | null;
  // Activities Complete BooleanType This attribute is used for Sample Service Business Processes.
  activitiescomplete?: boolean | null;
  // First Response SLA Status incident_incident_firstresponseslastatus Shows the status of the initial response time for the case according to the terms of the SLA.
  firstresponseslastatus?: import("../enums/incident_incident_firstresponseslastatus").incident_incident_firstresponseslastatus | null;
  // Service Stage servicestage Select the stage, in the case resolution process, that the case is in.
  servicestage?: import("../enums/servicestage").servicestage | null;
  // IoT Alert LookupType The iot alert that initiated this case
  msdyn_iotalert?: import("../../types/EntityReference").EntityReference | null;
  // Decrement Entitlement Terms BooleanType Shows whether terms of the associated entitlement should be decremented or not.
  decremententitlementterm?: boolean | null;
  //  StringType
  responsiblecontactidname?: string | null;
  //  StringType
  contractdetailidname?: string | null;
  //  StringType
  contactidyominame?: string | null;
  //  StringType
  contactidname?: string | null;
  // Last On Hold Time DateTimeType Contains the date time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Influence Score DoubleType Will contain the Influencer score coming from NetBreeze.
  influencescore?: number | null;
  // Contract Line LookupType Choose the contract line that the case should be logged under to make sure the customer is charged correctly.
  contractdetailid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Case Number StringType Shows the case number for customer reference and searching capabilities. This cannot be modified.
  ticketnumber?: string | null;
  //  StringType
  productidname?: string | null;
  // Blocked Profile BooleanType Details whether the profile is blocked or not.
  blockedprofile?: boolean | null;
  // First Response Sent BooleanType Indicates if the first response has been sent.
  firstresponsesent?: boolean | null;
  // Customer Type [Required] EntityNameType
  customeridtype?: string;
  // On Hold Time (Minutes) IntegerType Shows the duration in minutes for which the case was on hold.
  onholdtime?: number | null;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("../../types/Guid").Guid | null;
  // Serial Number StringType Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported.
  productserialnumber?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  //  StringType
  entityimage_url?: string | null;
  // Description MemoType Type additional information to describe the case to assist the service team in reaching a resolution.
  description?: string | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  // Actual Service Units IntegerType Type the number of service units that were actually required to resolve the case.
  actualserviceunits?: number | null;
  // Parent Case LookupType Choose the parent case for a case.
  parentcaseid?: import("../../types/EntityReference").EntityReference | null;
  // Contact LookupType Select a primary contact for this case.
  primarycontactid?: import("../../types/EntityReference").EntityReference | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Subject LookupType Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area.
  subjectid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  accountidname?: string | null;
  // Service Level incident_incident_contractservicelevelcode Select the service level for the case to make sure the case is handled correctly.
  contractservicelevelcode?: import("../enums/incident_incident_contractservicelevelcode").incident_incident_contractservicelevelcode | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Entitlement LookupType Choose the entitlement that is applicable for the case.
  entitlementid?: import("../../types/EntityReference").EntityReference | null;
  // (Deprecated) Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  // Check Email BooleanType This attribute is used for Sample Service Business Processes.
  checkemail?: boolean | null;
  //  UniqueidentifierType
  entityimageid?: import("../../types/Guid").Guid | null;
  // Billed Service Units IntegerType Type the number of service units that were billed to the customer for the case.
  billedserviceunits?: number | null;
  // Case Type incident_incident_casetypecode Select the type of case to identify the incident for use in case routing and analysis.
  casetypecode?: import("../enums/incident_incident_casetypecode").incident_incident_casetypecode | null;
  // Entity Image ImageType The default image for the entity.
  entityimage?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Customer CustomerType Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities.
  customerid?: import("../../types/EntityReference").EntityReference | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // First Response By DateTimeType For internal use only. DateAndTime:UserLocal
  responseby?: Date | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Email Address StringType The primary email address for the entity.
  emailaddress?: string | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  slaname?: string | null;
  // Route Case BooleanType Tells whether the incident has been routed to queue or not.
  routecase?: boolean | null;
  //  StringType
  entitlementidname?: string | null;
  //  StringType
  slainvokedidname?: string | null;
  // Master Case LookupType Choose the primary case the current case was merged into.
  masterid?: import("../../types/EntityReference").EntityReference | null;
  // Owner OwnerType Owner Id
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  accountidyominame?: string | null;
  // First Response By KPI LookupType For internal use only.
  firstresponsebykpiid?: import("../../types/EntityReference").EntityReference | null;
  // Case Title [Required] StringType Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views.
  title?: string;
  //  StringType
  subjectidname?: string | null;
  // Internal Use Only BooleanType Tells whether the incident has been merged with another incident.
  merged?: boolean | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  // Severity incident_incident_severitycode Select the severity of this case to indicate the incident's impact on the customer's business.
  severitycode?: import("../enums/incident_incident_severitycode").incident_incident_severitycode | null;
  // Follow Up By DateTimeType Enter the date by which a customer service representative has to follow up with the customer on this case. DateOnly:UserLocal
  followupby?: Date | null;
  // Resolve By SLA Status incident_incident_resolvebyslastatus Shows the status of the resolution time for the case according to the terms of the SLA.
  resolvebyslastatus?: import("../enums/incident_incident_resolvebyslastatus").incident_incident_resolvebyslastatus | null;
  // Decrementing BooleanType For system use only.
  isdecrementing?: boolean | null;
  //  StringType
  contractidname?: string | null;
  // Satisfaction incident_incident_customersatisfactioncode Select the customer's level of satisfaction with the handling and resolution of the case.
  customersatisfactioncode?: import("../enums/incident_incident_customersatisfactioncode").incident_incident_customersatisfactioncode | null;
  //  StringType
  modifiedbyyominame?: string | null;
  //  StringType
  masteridname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  kbarticleidname?: string | null;
  // Case Stage incident_incident_incidentstagecode Select the current stage of the service process for the case to assist service team members when they review or transfer a case.
  incidentstagecode?: import("../enums/incident_incident_incidentstagecode").incident_incident_incidentstagecode | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  // (Deprecated) Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("../../types/Guid").Guid | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Customer Contacted BooleanType Tells whether customer service representative has contacted the customer or not.
  customercontacted?: boolean | null;
  //  [Required] StringType
  customeridname?: string;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Case UniqueidentifierType Unique identifier of the case.
  incidentid?: import("../../types/Guid").Guid | null;
  //  StringType
  firstresponsebykpiidname?: string | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  // Social Profile LookupType Unique identifier of the social profile with which the case is associated.
  socialprofileid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  primarycontactidyominame?: string | null;
  //  StringType
  resolvebykpiidname?: string | null;
  //  StringType
  parentcaseidname?: string | null;
  //  StringType
  modifiedbyname?: string | null;
  // Follow up Task Created BooleanType This attribute is used for Sample Service Business Processes.
  followuptaskcreated?: boolean | null;
  //  StringType
  createdbyyominame?: string | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  //  StringType
  msdyn_iotalertname?: string | null;
  // Escalated On DateTimeType Indicates the date and time when the case was escalated. DateAndTime:UserLocal
  escalatedon?: Date | null;
  // Priority incident_incident_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/incident_incident_prioritycode").incident_incident_prioritycode | null;
  // Child Cases IntegerType Number of child incidents associated with the incident.
  numberofchildincidents?: number | null;
  // Received As socialactivity_postmessagetype Shows whether the post originated as a public or private message.
  messagetypecode?: import("../enums/socialactivity_postmessagetype").socialactivity_postmessagetype | null;
  // Status incident_incident_statecode Shows whether the case is active, resolved, or canceled. Resolved and canceled cases are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/incident_incident_statecode").incident_incident_statecode | null;
}

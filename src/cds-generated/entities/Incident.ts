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
    utcconversiontimezonecode: "Integer",
    influencescore: "Double",
    billedserviceunits: "Integer",
    entityimage_timestamp: "BigInt",
    sentimentvalue: "Double",
    exchangerate: "Decimal",
    versionnumber: "BigInt",
    actualserviceunits: "Integer",
    numberofchildincidents: "Integer",
    importsequencenumber: "Integer",
    onholdtime: "Integer",
    timezoneruleversionnumber: "Integer",
    // Optionsets
    casetypecode: "Optionset",
    firstresponseslastatus: "Optionset",
    messagetypecode: "Optionset",
    servicestage: "Optionset",
    statecode: "Optionset",
    caseorigincode: "Optionset",
    customersatisfactioncode: "Optionset",
    statuscode: "Optionset",
    resolvebyslastatus: "Optionset",
    severitycode: "Optionset",
    incidentstagecode: "Optionset",
    prioritycode: "Optionset",
    contractservicelevelcode: "Optionset",
    // Date Formats
    followupby: "DateOnly:UserLocal",
    resolveby: "DateAndTime:UserLocal",
    escalatedon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    adx_resolutiondate: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
    responseby: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
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
    msdyn_incidenttype: ["mscrm.msdyn_incidenttype"],
    msdyn_IoTAlert: ["mscrm.msdyn_iotalert"],
    msa_partnerid: ["mscrm.account"],
    msa_partnercontactid: ["mscrm.contact"],
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
    slainvokedid: ["sla"],
    customerid: ["account","contact"],
    slaid: ["sla"],
  },
};

// Attribute constants
export enum IncidentAttributes {
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  ContractDetailId = "contractdetailid",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  SLAName = "slaname",
  Adx_CreatedByIPAddress = "adx_createdbyipaddress",
  OwningUser = "owninguser",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  msdyn_IncidentType = "msdyn_incidenttype",
  SocialProfileIdName = "socialprofileidname",
  adx_publishtoweb = "adx_publishtoweb",
  msa_partnerid = "msa_partnerid",
  EntityImageId = "entityimageid",
  FollowupBy = "followupby",
  ParentCaseIdName = "parentcaseidname",
  ResolveBy = "resolveby",
  InfluenceScore = "influencescore",
  Adx_ModifiedByIPAddress = "adx_modifiedbyipaddress",
  SubjectId = "subjectid",
  msa_partneridName = "msa_partneridname",
  CaseTypeCode = "casetypecode",
  TicketNumber = "ticketnumber",
  msdyn_iotalert = "msdyn_iotalert",
  msa_partneridYomiName = "msa_partneridyominame",
  BilledServiceUnits = "billedserviceunits",
  FirstResponseSLAStatus = "firstresponseslastatus",
  SLAInvokedId = "slainvokedid",
  EntityImage_Timestamp = "entityimage_timestamp",
  CustomerId = "customerid",
  ProcessId = "processid",
  msdyn_IncidentTypeName = "msdyn_incidenttypename",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  SentimentValue = "sentimentvalue",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  AccountIdName = "accountidname",
  MessageTypeCode = "messagetypecode",
  RouteCase = "routecase",
  ServiceStage = "servicestage",
  IsEscalated = "isescalated",
  ContactIdYomiName = "contactidyominame",
  EmailAddress = "emailaddress",
  msa_partnercontactid = "msa_partnercontactid",
  EscalatedOn = "escalatedon",
  StateCode = "statecode",
  msdyn_iotalertName = "msdyn_iotalertname",
  Merged = "merged",
  ExchangeRate = "exchangerate",
  OwnerIdYomiName = "owneridyominame",
  EntityImage_URL = "entityimage_url",
  adx_stepstoreproduce = "adx_stepstoreproduce",
  ExistingCase = "existingcase",
  ResponsibleContactId = "responsiblecontactid",
  VersionNumber = "versionnumber",
  CreatedByYomiName = "createdbyyominame",
  SubjectIdName = "subjectidname",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  EntityImage = "entityimage",
  CheckEmail = "checkemail",
  OwningBusinessUnit = "owningbusinessunit",
  ActualServiceUnits = "actualserviceunits",
  CaseOriginCode = "caseorigincode",
  PrimaryContactIdYomiName = "primarycontactidyominame",
  CustomerIdName = "customeridname",
  Description = "description",
  msa_partnercontactidName = "msa_partnercontactidname",
  ModifiedBy = "modifiedby",
  EntitlementIdName = "entitlementidname",
  FirstResponseByKPIIdName = "firstresponsebykpiidname",
  ContractIdName = "contractidname",
  FollowUpTaskCreated = "followuptaskcreated",
  MasterId = "masterid",
  ModifiedOn = "modifiedon",
  ProductIdName = "productidname",
  SocialProfileId = "socialprofileid",
  OwnerId = "ownerid",
  CreatedByExternalParty = "createdbyexternalparty",
  NumberOfChildIncidents = "numberofchildincidents",
  ParentCaseId = "parentcaseid",
  ResolveByKPIIdName = "resolvebykpiidname",
  ModifiedByYomiName = "modifiedbyyominame",
  EntitlementId = "entitlementid",
  StageId = "stageid",
  TransactionCurrencyId = "transactioncurrencyid",
  CustomerSatisfactionCode = "customersatisfactioncode",
  ActivitiesComplete = "activitiescomplete",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  CreatedByName = "createdbyname",
  adx_resolution = "adx_resolution",
  OwnerIdName = "owneridname",
  DecrementEntitlementTerm = "decremententitlementterm",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  StatusCode = "statuscode",
  msa_partnercontactidYomiName = "msa_partnercontactidyominame",
  SLAId = "slaid",
  IncidentId = "incidentid",
  LastOnHoldTime = "lastonholdtime",
  ResponsibleContactIdYomiName = "responsiblecontactidyominame",
  ResolveBySLAStatus = "resolvebyslastatus",
  KbArticleIdName = "kbarticleidname",
  CustomerContacted = "customercontacted",
  ResponsibleContactIdName = "responsiblecontactidname",
  adx_resolutiondate = "adx_resolutiondate",
  SeverityCode = "severitycode",
  FirstResponseSent = "firstresponsesent",
  PrimaryContactIdName = "primarycontactidname",
  CustomerIdType = "customeridtype",
  AccountId = "accountid",
  FirstResponseByKPIId = "firstresponsebykpiid",
  CreatedOn = "createdon",
  ContactId = "contactid",
  IncidentStageCode = "incidentstagecode",
  PrimaryContactId = "primarycontactid",
  ImportSequenceNumber = "importsequencenumber",
  Adx_CreatedByUsername = "adx_createdbyusername",
  BlockedProfile = "blockedprofile",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  ContractDetailIdName = "contractdetailidname",
  Title = "title",
  ContactIdName = "contactidname",
  Adx_ModifiedByUsername = "adx_modifiedbyusername",
  SLAInvokedIdName = "slainvokedidname",
  CreatedBy = "createdby",
  PriorityCode = "prioritycode",
  ProductId = "productid",
  ResponseBy = "responseby",
  TraversedPath = "traversedpath",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ProductSerialNumber = "productserialnumber",
  OverriddenCreatedOn = "overriddencreatedon",
  CustomerIdYomiName = "customeridyominame",
  ContractId = "contractid",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  ContractServiceLevelCode = "contractservicelevelcode",
  CreatedOnBehalfBy = "createdonbehalfby",
  ModifiedByName = "modifiedbyname",
  OnHoldTime = "onholdtime",
  AccountIdYomiName = "accountidyominame",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  MasterIdName = "masteridname",
  IsDecrementing = "isdecrementing",
  ResolveByKPIId = "resolvebykpiid",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  OwningTeam = "owningteam",
  OwnerIdType = "owneridtype",
  KbArticleId = "kbarticleid",
}

// Early Bound Interface
export interface Incident extends IEntity {
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Contract Line LookupType Choose the contract line that the case should be logged under to make sure the customer is charged correctly.
  contractdetailid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  //  StringType
  slaname?: string | null;
  // Created By IP Address StringType
  adx_createdbyipaddress?: string | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Incident Type LookupType Unique identifier for Incident Type associated with Case.
  msdyn_incidenttype?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  socialprofileidname?: string | null;
  // Publish to Web BooleanType If set to Yes, the case will be visible and searchable on portals connected to this organization.
  adx_publishtoweb?: boolean | null;
  // Partner LookupType Creates a Relationship between a Partner (account) and a case for indirect service arrangements.
  msa_partnerid?: import("../../types/EntityReference").EntityReference | null;
  //  UniqueidentifierType
  entityimageid?: import("../../types/Guid").Guid | null;
  // Follow Up By DateTimeType Enter the date by which a customer service representative has to follow up with the customer on this case. DateOnly:UserLocal
  followupby?: Date | null;
  //  StringType
  parentcaseidname?: string | null;
  // Resolve By DateTimeType Enter the date by when the case must be resolved. DateAndTime:UserLocal
  resolveby?: Date | null;
  // Influence Score DoubleType Will contain the Influencer score coming from NetBreeze.
  influencescore?: number | null;
  // Modified By IP Address StringType
  adx_modifiedbyipaddress?: string | null;
  // Subject LookupType Choose the subject for the case, such as catalog request or product complaint, so customer service managers can identify frequent requests or problem areas. Administrators can configure subjects under Business Management in the Settings area.
  subjectid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  msa_partneridname?: string | null;
  // Case Type incident_incident_casetypecode Select the type of case to identify the incident for use in case routing and analysis.
  casetypecode?: import("../enums/incident_incident_casetypecode").incident_incident_casetypecode | null;
  // Case Number StringType Shows the case number for customer reference and searching capabilities. This cannot be modified.
  ticketnumber?: string | null;
  // IoT Alert LookupType The iot alert that initiated this case
  msdyn_iotalert?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  msa_partneridyominame?: string | null;
  // Billed Service Units IntegerType Type the number of service units that were billed to the customer for the case.
  billedserviceunits?: number | null;
  // First Response SLA Status incident_incident_firstresponseslastatus Shows the status of the initial response time for the case according to the terms of the SLA.
  firstresponseslastatus?: import("../enums/incident_incident_firstresponseslastatus").incident_incident_firstresponseslastatus | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  // Customer CustomerType Select the customer account or contact to provide a quick link to additional customer details, such as account information, activities, and opportunities.
  customerid?: import("../../types/EntityReference").EntityReference | null;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("../../types/Guid").Guid | null;
  //  StringType
  msdyn_incidenttypename?: string | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  // Sentiment Value DoubleType Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values.
  sentimentvalue?: number | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  //  StringType
  accountidname?: string | null;
  // Received As socialactivity_postmessagetype Shows whether the post originated as a public or private message.
  messagetypecode?: import("../enums/socialactivity_postmessagetype").socialactivity_postmessagetype | null;
  // Route Case BooleanType Tells whether the incident has been routed to queue or not.
  routecase?: boolean | null;
  // Service Stage servicestage Select the stage, in the case resolution process, that the case is in.
  servicestage?: import("../enums/servicestage").servicestage | null;
  // Is Escalated BooleanType Indicates if the case has been escalated.
  isescalated?: boolean | null;
  //  StringType
  contactidyominame?: string | null;
  // Email Address StringType The primary email address for the entity.
  emailaddress?: string | null;
  // Partner Contact LookupType Allows a partner contact to be assigned to a specific case.
  msa_partnercontactid?: import("../../types/EntityReference").EntityReference | null;
  // Escalated On DateTimeType Indicates the date and time when the case was escalated. DateAndTime:UserLocal
  escalatedon?: Date | null;
  // Status incident_incident_statecode Shows whether the case is active, resolved, or canceled. Resolved and canceled cases are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/incident_incident_statecode").incident_incident_statecode | null;
  //  StringType
  msdyn_iotalertname?: string | null;
  // Internal Use Only BooleanType Tells whether the incident has been merged with another incident.
  merged?: boolean | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  //  StringType
  entityimage_url?: string | null;
  // Steps to Reproduce MemoType
  adx_stepstoreproduce?: string | null;
  // Existing Case LookupType Select an existing case for the customer that has been populated. For internal use only.
  existingcase?: import("../../types/EntityReference").EntityReference | null;
  // Responsible Contact LookupType Choose an additional customer contact who can also help resolve the case.
  responsiblecontactid?: import("../../types/EntityReference").EntityReference | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
  //  StringType
  createdbyyominame?: string | null;
  //  StringType
  subjectidname?: string | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Entity Image ImageType The default image for the entity.
  entityimage?: string | null;
  // Check Email BooleanType This attribute is used for Sample Service Business Processes.
  checkemail?: boolean | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  // Actual Service Units IntegerType Type the number of service units that were actually required to resolve the case.
  actualserviceunits?: number | null;
  // Origin incident_caseorigincode Select how contact about the case was originated, such as email, phone, or web, for use in reporting and analysis.
  caseorigincode?: import("../enums/incident_caseorigincode").incident_caseorigincode | null;
  //  StringType
  primarycontactidyominame?: string | null;
  //  [Required] StringType
  customeridname?: string;
  // Description MemoType Type additional information to describe the case to assist the service team in reaching a resolution.
  description?: string | null;
  //  StringType
  msa_partnercontactidname?: string | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  entitlementidname?: string | null;
  //  StringType
  firstresponsebykpiidname?: string | null;
  //  StringType
  contractidname?: string | null;
  // Follow up Task Created BooleanType This attribute is used for Sample Service Business Processes.
  followuptaskcreated?: boolean | null;
  // Master Case LookupType Choose the primary case the current case was merged into.
  masterid?: import("../../types/EntityReference").EntityReference | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  //  StringType
  productidname?: string | null;
  // Social Profile LookupType Unique identifier of the social profile with which the case is associated.
  socialprofileid?: import("../../types/EntityReference").EntityReference | null;
  // Owner OwnerType Owner Id
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  // Child Cases IntegerType Number of child incidents associated with the incident.
  numberofchildincidents?: number | null;
  // Parent Case LookupType Choose the parent case for a case.
  parentcaseid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  resolvebykpiidname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Entitlement LookupType Choose the entitlement that is applicable for the case.
  entitlementid?: import("../../types/EntityReference").EntityReference | null;
  // Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("../../types/Guid").Guid | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  // Satisfaction incident_incident_customersatisfactioncode Select the customer's level of satisfaction with the handling and resolution of the case.
  customersatisfactioncode?: import("../enums/incident_incident_customersatisfactioncode").incident_incident_customersatisfactioncode | null;
  // Activities Complete BooleanType This attribute is used for Sample Service Business Processes.
  activitiescomplete?: boolean | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  //  StringType
  createdbyname?: string | null;
  // Resolution MemoType
  adx_resolution?: string | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  // Decrement Entitlement Terms BooleanType Shows whether terms of the associated entitlement should be decremented or not.
  decremententitlementterm?: boolean | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Status Reason incident_incident_statuscode Select the case's status.
  statuscode?: import("../enums/incident_incident_statuscode").incident_incident_statuscode | null;
  //  StringType
  msa_partnercontactidyominame?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the case record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Case UniqueidentifierType Unique identifier of the case.
  incidentid?: import("../../types/Guid").Guid | null;
  // Last On Hold Time DateTimeType Contains the date time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  //  StringType
  responsiblecontactidyominame?: string | null;
  // Resolve By SLA Status incident_incident_resolvebyslastatus Shows the status of the resolution time for the case according to the terms of the SLA.
  resolvebyslastatus?: import("../enums/incident_incident_resolvebyslastatus").incident_incident_resolvebyslastatus | null;
  //  StringType
  kbarticleidname?: string | null;
  // Customer Contacted BooleanType Tells whether customer service representative has contacted the customer or not.
  customercontacted?: boolean | null;
  //  StringType
  responsiblecontactidname?: string | null;
  // Resolution Date DateTimeType DateAndTime:UserLocal
  adx_resolutiondate?: Date | null;
  // Severity incident_incident_severitycode Select the severity of this case to indicate the incident's impact on the customer's business.
  severitycode?: import("../enums/incident_incident_severitycode").incident_incident_severitycode | null;
  // First Response Sent BooleanType Indicates if the first response has been sent.
  firstresponsesent?: boolean | null;
  //  StringType
  primarycontactidname?: string | null;
  // Customer Type [Required] EntityNameType
  customeridtype?: string;
  // Account LookupType Unique identifier of the account with which the case is associated.
  accountid?: import("../../types/EntityReference").EntityReference | null;
  // First Response By KPI LookupType For internal use only.
  firstresponsebykpiid?: import("../../types/EntityReference").EntityReference | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Contact LookupType Unique identifier of the contact associated with the case.
  contactid?: import("../../types/EntityReference").EntityReference | null;
  // Case Stage incident_incident_incidentstagecode Select the current stage of the service process for the case to assist service team members when they review or transfer a case.
  incidentstagecode?: import("../enums/incident_incident_incidentstagecode").incident_incident_incidentstagecode | null;
  // Contact LookupType Select a primary contact for this case.
  primarycontactid?: import("../../types/EntityReference").EntityReference | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Created By Username StringType
  adx_createdbyusername?: string | null;
  // Blocked Profile BooleanType Details whether the profile is blocked or not.
  blockedprofile?: boolean | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  //  StringType
  contractdetailidname?: string | null;
  // Case Title [Required] StringType Type a subject or descriptive name, such as the request, issue, or company name, to identify the case in Microsoft Dynamics 365 views.
  title?: string;
  //  StringType
  contactidname?: string | null;
  // Modified By Username StringType
  adx_modifiedbyusername?: string | null;
  //  StringType
  slainvokedidname?: string | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  // Priority incident_incident_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/incident_incident_prioritycode").incident_incident_prioritycode | null;
  // Product LookupType Choose the product associated with the case to identify warranty, service, or other product issues and be able to report the number of incidents for each product.
  productid?: import("../../types/EntityReference").EntityReference | null;
  // First Response By DateTimeType For internal use only. DateAndTime:UserLocal
  responseby?: Date | null;
  // Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  // Serial Number StringType Type the serial number of the product that is associated with this case, so that the number of cases per product can be reported.
  productserialnumber?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  //  [Required] StringType
  customeridyominame?: string;
  // Contract LookupType Choose the service contract that the case should be logged under to make sure the customer is eligible for support services.
  contractid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  // Service Level incident_incident_contractservicelevelcode Select the service level for the case to make sure the case is handled correctly.
  contractservicelevelcode?: import("../enums/incident_incident_contractservicelevelcode").incident_incident_contractservicelevelcode | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  // On Hold Time (Minutes) IntegerType Shows the duration in minutes for which the case was on hold.
  onholdtime?: number | null;
  //  StringType
  accountidyominame?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  //  StringType
  masteridname?: string | null;
  // Decrementing BooleanType For system use only.
  isdecrementing?: boolean | null;
  // Resolve By KPI LookupType For internal use only.
  resolvebykpiid?: import("../../types/EntityReference").EntityReference | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  // Knowledge Base Article LookupType Choose the article that contains additional information or a resolution for the case, for reference during research or follow up with the customer.
  kbarticleid?: import("../../types/EntityReference").EntityReference | null;
}

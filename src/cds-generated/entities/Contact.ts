/* eslint-disable*/
import { IEntity } from "../../types/IEntity";
// Entity Contact
export const contactMetadata = {
  typeName: "mscrm.contact",
  logicalName: "contact",
  collectionName: "contacts",
  primaryIdAttribute: "contactid",
  attributeTypes: {
    // Numeric Types
    annualincome_base: "Money",
    teamsfollowed: "Integer",
    creditlimit_base: "Money",
    address2_latitude: "Double",
    exchangerate: "Decimal",
    aging90_base: "Money",
    versionnumber: "BigInt",
    address3_latitude: "Double",
    adx_identity_accessfailedcount: "Integer",
    address3_utcoffset: "Integer",
    aging90: "Money",
    creditlimit: "Money",
    entityimage_timestamp: "BigInt",
    address2_utcoffset: "Integer",
    address1_utcoffset: "Integer",
    aging60_base: "Money",
    numberofchildren: "Integer",
    aging30: "Money",
    adx_timezone: "Integer",
    annualincome: "Money",
    aging30_base: "Money",
    address1_latitude: "Double",
    utcconversiontimezonecode: "Integer",
    address1_longitude: "Double",
    address2_longitude: "Double",
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    aging60: "Money",
    address3_longitude: "Double",
    onholdtime: "Integer",
    // Optionsets
    haschildrencode: "Optionset",
    address2_addresstypecode: "Optionset",
    familystatuscode: "Optionset",
    shippingmethodcode: "Optionset",
    customertypecode: "Optionset",
    educationcode: "Optionset",
    statuscode: "Optionset",
    accountrolecode: "Optionset",
    address3_shippingmethodcode: "Optionset",
    customersizecode: "Optionset",
    address2_freighttermscode: "Optionset",
    gendercode: "Optionset",
    address2_shippingmethodcode: "Optionset",
    msdyn_orgchangestatus: "Optionset",
    address3_addresstypecode: "Optionset",
    address1_freighttermscode: "Optionset",
    preferredcontactmethodcode: "Optionset",
    preferredappointmenttimecode: "Optionset",
    paymenttermscode: "Optionset",
    leadsourcecode: "Optionset",
    preferredappointmentdaycode: "Optionset",
    statecode: "Optionset",
    address1_addresstypecode: "Optionset",
    address1_shippingmethodcode: "Optionset",
    address3_freighttermscode: "Optionset",
    territorycode: "Optionset",
    // Date Formats
    overriddencreatedon: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    adx_identity_lastsuccessfullogin: "DateAndTime:UserLocal",
    adx_profilealertdate: "DateAndTime:UserLocal",
    lastusedincampaign: "DateOnly:UserLocal",
    birthdate: "DateOnly:DateOnly",
    createdon: "DateAndTime:UserLocal",
    msdyn_portaltermsagreementdate: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    adx_profilelastactivity: "DateAndTime:UserLocal",
    adx_profilemodifiedon: "DateAndTime:UserLocal",
    anniversary: "DateOnly:DateOnly",
    adx_identity_lockoutenddate: "DateAndTime:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    stageid_processstage: ["mscrm.processstage"],
    sla_contact_sla: ["mscrm.sla"],
    preferredsystemuserid: ["mscrm.systemuser"],
    preferredserviceid: ["mscrm.service"],
    preferredequipmentid: ["mscrm.equipment"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    originatingleadid: ["mscrm.lead"],
    msdyn_contactkpiid: ["mscrm.msdyn_contactkpiitem"],
    msa_managingpartnerid: ["mscrm.account"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    masterid: ["mscrm.contact"],
    defaultpricelevelid: ["mscrm.pricelevel"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    adx_preferredlanguageid: ["mscrm.adx_portallanguage"],
    slainvokedid: ["sla"],
    parentcustomerid: ["account","contact"],
  },
};

// Attribute constants
export enum ContactAttributes {
  Address2_PostOfficeBox = "address2_postofficebox",
  AnnualIncome_Base = "annualincome_base",
  AccountId = "accountid",
  OverriddenCreatedOn = "overriddencreatedon",
  Address3_Telephone3 = "address3_telephone3",
  Address3_PostOfficeBox = "address3_postofficebox",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  TeamsFollowed = "teamsfollowed",
  msa_managingpartneridName = "msa_managingpartneridname",
  SLAInvokedIdName = "slainvokedidname",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  Address3_Telephone2 = "address3_telephone2",
  ProcessId = "processid",
  CreditLimit_Base = "creditlimit_base",
  SubscriptionId = "subscriptionid",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  GovernmentId = "governmentid",
  Adx_CreatedByIPAddress = "adx_createdbyipaddress",
  Adx_ModifiedByIPAddress = "adx_modifiedbyipaddress",
  ParentCustomerIdYomiName = "parentcustomeridyominame",
  Business2 = "business2",
  FollowEmail = "followemail",
  CreatedBy = "createdby",
  AccountIdYomiName = "accountidyominame",
  HasChildrenCode = "haschildrencode",
  Address2_StateOrProvince = "address2_stateorprovince",
  Address1_City = "address1_city",
  msdyn_isminorwithparentalconsent = "msdyn_isminorwithparentalconsent",
  adx_identity_passwordhash = "adx_identity_passwordhash",
  Address2_Line3 = "address2_line3",
  Address1_StateOrProvince = "address1_stateorprovince",
  adx_profilealert = "adx_profilealert",
  OriginatingLeadIdYomiName = "originatingleadidyominame",
  Address2_Latitude = "address2_latitude",
  ModifiedOn = "modifiedon",
  Fax = "fax",
  Address3_Line1 = "address3_line1",
  DoNotFax = "donotfax",
  OwningTeam = "owningteam",
  ExchangeRate = "exchangerate",
  Aging90_Base = "aging90_base",
  Address1_Line3 = "address1_line3",
  VersionNumber = "versionnumber",
  Address3_Latitude = "address3_latitude",
  Address2_AddressTypeCode = "address2_addresstypecode",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  CreatedByExternalParty = "createdbyexternalparty",
  Home2 = "home2",
  adx_identity_logonenabled = "adx_identity_logonenabled",
  FamilyStatusCode = "familystatuscode",
  PreferredServiceIdName = "preferredserviceidname",
  Address2_Name = "address2_name",
  SLAId = "slaid",
  Adx_ProfileIsAnonymous = "adx_profileisanonymous",
  Address3_UPSZone = "address3_upszone",
  Address3_PostalCode = "address3_postalcode",
  adx_identity_lastsuccessfullogin = "adx_identity_lastsuccessfullogin",
  adx_identity_emailaddress1confirmed = "adx_identity_emailaddress1confirmed",
  adx_profilealertinstructions = "adx_profilealertinstructions",
  Address1_PostalCode = "address1_postalcode",
  Address1_UPSZone = "address1_upszone",
  TransactionCurrencyId = "transactioncurrencyid",
  Address3_City = "address3_city",
  Suffix = "suffix",
  YomiLastName = "yomilastname",
  IsBackofficeCustomer = "isbackofficecustomer",
  MiddleName = "middlename",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  BusinessCard = "businesscard",
  YomiFirstName = "yomifirstname",
  adx_identity_securitystamp = "adx_identity_securitystamp",
  ShippingMethodCode = "shippingmethodcode",
  CustomerTypeCode = "customertypecode",
  adx_preferredlanguageid = "adx_preferredlanguageid",
  adx_identity_accessfailedcount = "adx_identity_accessfailedcount",
  CreatedByYomiName = "createdbyyominame",
  Address3_UTCOffset = "address3_utcoffset",
  Address2_City = "address2_city",
  Address1_Composite = "address1_composite",
  TraversedPath = "traversedpath",
  EntityImage_URL = "entityimage_url",
  Aging90 = "aging90",
  CreditLimit = "creditlimit",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  DoNotBulkEMail = "donotbulkemail",
  Address1_County = "address1_county",
  EntityImage_Timestamp = "entityimage_timestamp",
  Address3_AddressId = "address3_addressid",
  ParentContactIdYomiName = "parentcontactidyominame",
  SLAInvokedId = "slainvokedid",
  Address3_Line2 = "address3_line2",
  Address2_PostalCode = "address2_postalcode",
  Company = "company",
  MasterContactIdName = "mastercontactidname",
  ModifiedBy = "modifiedby",
  Address3_Line3 = "address3_line3",
  adx_identity_lockoutenabled = "adx_identity_lockoutenabled",
  Address2_Telephone1 = "address2_telephone1",
  PreferredEquipmentId = "preferredequipmentid",
  Address2_Telephone3 = "address2_telephone3",
  EducationCode = "educationcode",
  AccountIdName = "accountidname",
  OwningBusinessUnit = "owningbusinessunit",
  EntityImage = "entityimage",
  Address2_UTCOffset = "address2_utcoffset",
  EmployeeId = "employeeid",
  StatusCode = "statuscode",
  Callback = "callback",
  BusinessCardAttributes = "businesscardattributes",
  adx_profilealertdate = "adx_profilealertdate",
  LastUsedInCampaign = "lastusedincampaign",
  BirthDate = "birthdate",
  Address2_Fax = "address2_fax",
  Address1_UTCOffset = "address1_utcoffset",
  msdyn_contactkpiidName = "msdyn_contactkpiidname",
  CreatedOn = "createdon",
  PreferredSystemUserIdYomiName = "preferredsystemuseridyominame",
  YomiFullName = "yomifullname",
  ContactId = "contactid",
  DoNotPostalMail = "donotpostalmail",
  msdyn_gdproptout = "msdyn_gdproptout",
  Address2_Line1 = "address2_line1",
  Address1_PostOfficeBox = "address1_postofficebox",
  AccountRoleCode = "accountrolecode",
  ModifiedByName = "modifiedbyname",
  EMailAddress2 = "emailaddress2",
  adx_PublicProfileCopy = "adx_publicprofilecopy",
  OwnerIdType = "owneridtype",
  msdyn_disablewebtracking = "msdyn_disablewebtracking",
  PreferredSystemUserIdName = "preferredsystemuseridname",
  Address3_ShippingMethodCode = "address3_shippingmethodcode",
  msa_managingpartnerid = "msa_managingpartnerid",
  YomiMiddleName = "yomimiddlename",
  Description = "description",
  CustomerSizeCode = "customersizecode",
  Address2_FreightTermsCode = "address2_freighttermscode",
  msa_managingpartneridYomiName = "msa_managingpartneridyominame",
  Aging60_Base = "aging60_base",
  Address1_Telephone1 = "address1_telephone1",
  CreatedByName = "createdbyname",
  Address1_Telephone2 = "address1_telephone2",
  OriginatingLeadId = "originatingleadid",
  GenderCode = "gendercode",
  Address2_UPSZone = "address2_upszone",
  Address3_Country = "address3_country",
  Merged = "merged",
  Telephone1 = "telephone1",
  Pager = "pager",
  Address2_Line2 = "address2_line2",
  NumberOfChildren = "numberofchildren",
  adx_identity_username = "adx_identity_username",
  JobTitle = "jobtitle",
  IsAutoCreate = "isautocreate",
  Aging30 = "aging30",
  Address3_Fax = "address3_fax",
  adx_identity_twofactorenabled = "adx_identity_twofactorenabled",
  Address1_AddressId = "address1_addressid",
  Address2_ShippingMethodCode = "address2_shippingmethodcode",
  Adx_TimeZone = "adx_timezone",
  Address3_County = "address3_county",
  DefaultPriceLevelIdName = "defaultpricelevelidname",
  msdyn_orgchangestatus = "msdyn_orgchangestatus",
  Address3_AddressTypeCode = "address3_addresstypecode",
  AnnualIncome = "annualincome",
  Address2_County = "address2_county",
  Address1_FreightTermsCode = "address1_freighttermscode",
  OwnerIdName = "owneridname",
  Aging30_Base = "aging30_base",
  Address1_Latitude = "address1_latitude",
  msdyn_portaltermsagreementdate = "msdyn_portaltermsagreementdate",
  Address2_Composite = "address2_composite",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  DoNotPhone = "donotphone",
  Address3_PrimaryContactName = "address3_primarycontactname",
  ParentContactIdName = "parentcontactidname",
  PreferredContactMethodCode = "preferredcontactmethodcode",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  Address3_Telephone1 = "address3_telephone1",
  CreditOnHold = "creditonhold",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  StageId = "stageid",
  PreferredAppointmentTimeCode = "preferredappointmenttimecode",
  Address3_StateOrProvince = "address3_stateorprovince",
  DoNotEMail = "donotemail",
  ChildrensNames = "childrensnames",
  ManagerName = "managername",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  ParentCustomerIdName = "parentcustomeridname",
  OwnerId = "ownerid",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  PreferredServiceId = "preferredserviceid",
  Address3_Composite = "address3_composite",
  OriginatingLeadIdName = "originatingleadidname",
  Address1_PrimaryContactName = "address1_primarycontactname",
  ManagerPhone = "managerphone",
  Address1_Longitude = "address1_longitude",
  Adx_ModifiedByUsername = "adx_modifiedbyusername",
  Address2_Longitude = "address2_longitude",
  LastOnHoldTime = "lastonholdtime",
  EMailAddress3 = "emailaddress3",
  Adx_ProfileLastActivity = "adx_profilelastactivity",
  Address1_Fax = "address1_fax",
  Address1_Name = "address1_name",
  msdyn_isminor = "msdyn_isminor",
  adx_profilemodifiedon = "adx_profilemodifiedon",
  PreferredSystemUserId = "preferredsystemuserid",
  MasterId = "masterid",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  PaymentTermsCode = "paymenttermscode",
  msdyn_contactkpiid = "msdyn_contactkpiid",
  Address1_Line2 = "address1_line2",
  LeadSourceCode = "leadsourcecode",
  CreatedOnBehalfBy = "createdonbehalfby",
  adx_preferredlanguageidName = "adx_preferredlanguageidname",
  ImportSequenceNumber = "importsequencenumber",
  DefaultPriceLevelId = "defaultpricelevelid",
  adx_identity_mobilephoneconfirmed = "adx_identity_mobilephoneconfirmed",
  ParentContactId = "parentcontactid",
  NickName = "nickname",
  AssistantName = "assistantname",
  MarketingOnly = "marketingonly",
  Address1_Line1 = "address1_line1",
  DoNotBulkPostalMail = "donotbulkpostalmail",
  PreferredEquipmentIdName = "preferredequipmentidname",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  Address2_Country = "address2_country",
  Address1_Country = "address1_country",
  OwnerIdYomiName = "owneridyominame",
  Anniversary = "anniversary",
  EntityImageId = "entityimageid",
  PreferredAppointmentDayCode = "preferredappointmentdaycode",
  SLAName = "slaname",
  Telephone3 = "telephone3",
  DoNotSendMM = "donotsendmm",
  Address3_Name = "address3_name",
  Telephone2 = "telephone2",
  FullName = "fullname",
  EMailAddress1 = "emailaddress1",
  FirstName = "firstname",
  Address2_PrimaryContactName = "address2_primarycontactname",
  SpousesName = "spousesname",
  Aging60 = "aging60",
  Salutation = "salutation",
  Adx_CreatedByUsername = "adx_createdbyusername",
  Department = "department",
  adx_identity_locallogindisabled = "adx_identity_locallogindisabled",
  Address2_AddressId = "address2_addressid",
  adx_identity_lockoutenddate = "adx_identity_lockoutenddate",
  ExternalUserIdentifier = "externaluseridentifier",
  ModifiedByYomiName = "modifiedbyyominame",
  StateCode = "statecode",
  ParentCustomerId = "parentcustomerid",
  Address1_AddressTypeCode = "address1_addresstypecode",
  Address3_Longitude = "address3_longitude",
  ParticipatesInWorkflow = "participatesinworkflow",
  WebSiteUrl = "websiteurl",
  Address1_ShippingMethodCode = "address1_shippingmethodcode",
  IsPrivate = "isprivate",
  Address3_FreightTermsCode = "address3_freighttermscode",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  MobilePhone = "mobilephone",
  Adx_OrganizationName = "adx_organizationname",
  Address2_Telephone2 = "address2_telephone2",
  AssistantPhone = "assistantphone",
  OwningUser = "owninguser",
  LastName = "lastname",
  MasterContactIdYomiName = "mastercontactidyominame",
  TerritoryCode = "territorycode",
  FtpSiteUrl = "ftpsiteurl",
  Address1_Telephone3 = "address1_telephone3",
  ParentCustomerIdType = "parentcustomeridtype",
  OnHoldTime = "onholdtime",
}

// Early Bound Interface
export interface Contact extends IEntity {
  // Address 2: Post Office Box StringType Type the post office box number of the secondary address.
  address2_postofficebox?: string | null;
  // Annual Income (Base) MoneyType Shows the Annual Income field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  annualincome_base?: number | null;
  // Account LookupType Unique identifier of the account with which the contact is associated.
  accountid?: import("../../types/EntityReference").EntityReference | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Address 3: Telephone3 StringType Type a third phone number associated with the primary address.
  address3_telephone3?: string | null;
  // Address 3: Post Office Box StringType the post office box number of the 3rd address.
  address3_postofficebox?: string | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // TeamsFollowed IntegerType Number of users or conversations followed the record
  teamsfollowed?: number | null;
  //  StringType
  msa_managingpartneridname?: string | null;
  //  StringType
  slainvokedidname?: string | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  // Address 3: Telephone2 StringType Type a second phone number associated with the third address.
  address3_telephone2?: string | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("../../types/Guid").Guid | null;
  // Credit Limit (Base) MoneyType Shows the Credit Limit field converted to the system's default base currency for reporting purposes. The calculations use the exchange rate specified in the Currencies area.
  creditlimit_base?: number | null;
  // Subscription UniqueidentifierType For internal use only.
  subscriptionid?: import("../../types/Guid").Guid | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Government StringType Type the passport number or other government ID for the contact for use in documents or reports.
  governmentid?: string | null;
  // Created By IP Address StringType
  adx_createdbyipaddress?: string | null;
  // Modified By IP Address StringType
  adx_modifiedbyipaddress?: string | null;
  //  [Required] StringType
  parentcustomeridyominame?: string;
  // Business Phone 2 StringType Type a second business phone number for this contact.
  business2?: string | null;
  // Follow Email Activity BooleanType Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact.
  followemail?: boolean | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  accountidyominame?: string | null;
  // Has Children contact_contact_haschildrencode Select whether the contact has any children for reference in follow-up phone calls and other communications.
  haschildrencode?: import("../enums/contact_contact_haschildrencode").contact_contact_haschildrencode | null;
  // Address 2: State/Province StringType Type the state or province of the secondary address.
  address2_stateorprovince?: string | null;
  // Address 1: City StringType Type the city for the primary address.
  address1_city?: string | null;
  // Is Minor with Parental Consent BooleanType Indicates that the contact is considered a minor in their jurisdiction and has parental consent.
  msdyn_isminorwithparentalconsent?: boolean | null;
  // Password Hash StringType
  adx_identity_passwordhash?: string | null;
  // Address 2: Street 3 StringType Type the third line of the secondary address.
  address2_line3?: string | null;
  // Address 1: State/Province StringType Type the state or province of the primary address.
  address1_stateorprovince?: string | null;
  // Profile Alert BooleanType
  adx_profilealert?: boolean | null;
  //  StringType
  originatingleadidyominame?: string | null;
  // Address 2: Latitude DoubleType Type the latitude value for the secondary address for use in mapping and other applications.
  address2_latitude?: number | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Fax StringType Type the fax number for the contact.
  fax?: string | null;
  // Address3: Street 1 StringType the first line of the 3rd address.
  address3_line1?: string | null;
  // Do not allow Faxes BooleanType Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns.
  donotfax?: boolean | null;
  // Owning Team LookupType Unique identifier of the team who owns the contact.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Aging 90 (Base) MoneyType Shows the Aging 90 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  aging90_base?: number | null;
  // Address 1: Street 3 StringType Type the third line of the primary address.
  address1_line3?: string | null;
  // Version Number BigIntType Version number of the contact.
  versionnumber?: number | null;
  // Address 3: Latitude DoubleType Type the latitude value for the third address for use in mapping and other applications.
  address3_latitude?: number | null;
  // Address 2: Address Type contact_contact_address2_addresstypecode Select the secondary address type.
  address2_addresstypecode?: import("../enums/contact_contact_address2_addresstypecode").contact_contact_address2_addresstypecode | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  // Home Phone 2 StringType Type a second home phone number for this contact.
  home2?: string | null;
  // Login Enabled BooleanType Determines if web authentication is enabled for the contact.
  adx_identity_logonenabled?: boolean | null;
  // Marital Status contact_contact_familystatuscode Select the marital status of the contact for reference in follow-up phone calls and other communications.
  familystatuscode?: import("../enums/contact_contact_familystatuscode").contact_contact_familystatuscode | null;
  //  StringType
  preferredserviceidname?: string | null;
  // Address 2: Name StringType Type a descriptive name for the secondary address, such as Corporate Headquarters.
  address2_name?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Contact record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Profile Is Anonymous BooleanType
  adx_profileisanonymous?: boolean | null;
  // Address 3: UPS Zone StringType Type the UPS zone of the third address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address3_upszone?: string | null;
  // Address3: ZIP/Postal Code StringType the ZIP Code or postal code for the 3rd address.
  address3_postalcode?: string | null;
  // Last Successful Login DateTimeType Indicates the last date and time the user successfully signed in to a portal. DateAndTime:UserLocal
  adx_identity_lastsuccessfullogin?: Date | null;
  // Email Confirmed BooleanType Determines if the email is confirmed by the contact.
  adx_identity_emailaddress1confirmed?: boolean | null;
  // Profile Alert Instructions MemoType
  adx_profilealertinstructions?: string | null;
  // Address 1: ZIP/Postal Code StringType Type the ZIP Code or postal code for the primary address.
  address1_postalcode?: string | null;
  // Address 1: UPS Zone StringType Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address1_upszone?: string | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  // Address 3: City StringType Type the city for the 3rd address.
  address3_city?: string | null;
  // Suffix StringType Type the suffix used in the contact's name, such as Jr. or Sr. to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
  suffix?: string | null;
  // Yomi Last Name StringType Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact.
  yomilastname?: string | null;
  // Back Office Customer BooleanType Select whether the contact exists in a separate accounting or other system, such as Microsoft Dynamics GP or another ERP database, for use in integration processes.
  isbackofficecustomer?: boolean | null;
  // Middle Name StringType Type the contact's middle name or initial to make sure the contact is addressed correctly.
  middlename?: string | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  // Business Card MemoType Stores Image of the Business Card
  businesscard?: string | null;
  // Yomi First Name StringType Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact.
  yomifirstname?: string | null;
  // Security Stamp StringType A token used to manage the web authentication session.
  adx_identity_securitystamp?: string | null;
  // Shipping Method contact_contact_shippingmethodcode Select a shipping method for deliveries sent to this address.
  shippingmethodcode?: import("../enums/contact_contact_shippingmethodcode").contact_contact_shippingmethodcode | null;
  // Relationship Type contact_contact_customertypecode Select the category that best describes the relationship between the contact and your organization.
  customertypecode?: import("../enums/contact_contact_customertypecode").contact_contact_customertypecode | null;
  // Preferred Language LookupType User’s preferred portal language
  adx_preferredlanguageid?: import("../../types/EntityReference").EntityReference | null;
  // Access Failed Count IntegerType Shows the current count of failed password attempts for the contact.
  adx_identity_accessfailedcount?: number | null;
  //  StringType
  createdbyyominame?: string | null;
  // Address 3: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address3_utcoffset?: number | null;
  // Address 2: City StringType Type the city for the secondary address.
  address2_city?: string | null;
  // Address 1 MemoType Shows the complete primary address.
  address1_composite?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  //  StringType
  entityimage_url?: string | null;
  // Aging 90 MoneyType For system use only.
  aging90?: number | null;
  // Credit Limit MoneyType Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer.
  creditlimit?: number | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  // Do not allow Bulk Emails BooleanType Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email.
  donotbulkemail?: boolean | null;
  // Address 1: County StringType Type the county for the primary address.
  address1_county?: string | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  // Address 3: ID UniqueidentifierType Unique identifier for address 3.
  address3_addressid?: import("../../types/Guid").Guid | null;
  //  StringType
  parentcontactidyominame?: string | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  // Address3: Street 2 StringType the second line of the 3rd address.
  address3_line2?: string | null;
  // Address 2: ZIP/Postal Code StringType Type the ZIP Code or postal code for the secondary address.
  address2_postalcode?: string | null;
  // Company Phone StringType Type the company phone of the contact.
  company?: string | null;
  //  StringType
  mastercontactidname?: string | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  // Address3: Street 3 StringType the third line of the 3rd address.
  address3_line3?: string | null;
  // Lockout Enabled BooleanType Determines if this contact will track failed access attempts and become locked after too many failed attempts. To prevent the contact from becoming locked, you can disable this setting.
  adx_identity_lockoutenabled?: boolean | null;
  // Address 2: Telephone 1 StringType Type the main phone number associated with the secondary address.
  address2_telephone1?: string | null;
  // Preferred Facility/Equipment LookupType Choose the contact's preferred service facility or equipment to make sure services are scheduled correctly for the customer.
  preferredequipmentid?: import("../../types/EntityReference").EntityReference | null;
  // Address 2: Telephone 3 StringType Type a third phone number associated with the secondary address.
  address2_telephone3?: string | null;
  // Education contact_contact_educationcode Select the contact's highest level of education for use in segmentation and analysis.
  educationcode?: import("../enums/contact_contact_educationcode").contact_contact_educationcode | null;
  //  StringType
  accountidname?: string | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the contact.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  // Entity Image ImageType Shows the default image for the record.
  entityimage?: string | null;
  // Address 2: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address2_utcoffset?: number | null;
  // Employee StringType Type the employee ID or number for the contact for reference in orders, service cases, or other communications with the contact's organization.
  employeeid?: string | null;
  // Status Reason contact_contact_statuscode Select the contact's status.
  statuscode?: import("../enums/contact_contact_statuscode").contact_contact_statuscode | null;
  // Callback Number StringType Type a callback phone number for this contact.
  callback?: string | null;
  // BusinessCardAttributes StringType Stores Business Card Control Properties.
  businesscardattributes?: string | null;
  // Profile Alert Date DateTimeType DateAndTime:UserLocal
  adx_profilealertdate?: Date | null;
  // Last Date Included in Campaign DateTimeType Shows the date when the contact was last included in a marketing campaign or quick campaign. DateOnly:UserLocal
  lastusedincampaign?: Date | null;
  // Birthday DateTimeType Enter the contact's birthday for use in customer gift programs or other communications. DateOnly:DateOnly
  birthdate?: Date | null;
  // Address 2: Fax StringType Type the fax number associated with the secondary address.
  address2_fax?: string | null;
  // Address 1: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address1_utcoffset?: number | null;
  //  StringType
  msdyn_contactkpiidname?: string | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  //  StringType
  preferredsystemuseridyominame?: string | null;
  // Yomi Full Name StringType Shows the combined Yomi first and last names of the contact so that the full phonetic name can be displayed in views and reports.
  yomifullname?: string | null;
  // Contact UniqueidentifierType Unique identifier of the contact.
  contactid?: import("../../types/Guid").Guid | null;
  // Do not allow Mails BooleanType Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns.
  donotpostalmail?: boolean | null;
  // GDPR Optout BooleanType Describes whether contact is opted out or not
  msdyn_gdproptout?: boolean | null;
  // Address 2: Street 1 StringType Type the first line of the secondary address.
  address2_line1?: string | null;
  // Address 1: Post Office Box StringType Type the post office box number of the primary address.
  address1_postofficebox?: string | null;
  // Role contact_contact_accountrolecode Select the contact's role within the company or sales process, such as decision maker, employee, or influencer.
  accountrolecode?: import("../enums/contact_contact_accountrolecode").contact_contact_accountrolecode | null;
  //  StringType
  modifiedbyname?: string | null;
  // Email Address 2 StringType Type the secondary email address for the contact.
  emailaddress2?: string | null;
  // Public Profile Copy MemoType
  adx_publicprofilecopy?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  // Disable Web Tracking BooleanType Indicates that the contact has opted out of web tracking.
  msdyn_disablewebtracking?: boolean | null;
  //  StringType
  preferredsystemuseridname?: string | null;
  // Address 3: Shipping Method contact_contact_address3_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address3_shippingmethodcode?: import("../enums/contact_contact_address3_shippingmethodcode").contact_contact_address3_shippingmethodcode | null;
  // Managing Partner LookupType Unique identifier for Account associated with Contact.
  msa_managingpartnerid?: import("../../types/EntityReference").EntityReference | null;
  // Yomi Middle Name StringType Type the phonetic spelling of the contact's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact.
  yomimiddlename?: string | null;
  // Description MemoType Type additional information to describe the contact, such as an excerpt from the company's website.
  description?: string | null;
  // Customer Size contact_contact_customersizecode Select the size of the contact's company for segmentation and reporting purposes.
  customersizecode?: import("../enums/contact_contact_customersizecode").contact_contact_customersizecode | null;
  // Address 2: Freight Terms contact_contact_address2_freighttermscode Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
  address2_freighttermscode?: import("../enums/contact_contact_address2_freighttermscode").contact_contact_address2_freighttermscode | null;
  //  StringType
  msa_managingpartneridyominame?: string | null;
  // Aging 60 (Base) MoneyType Shows the Aging 60 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  aging60_base?: number | null;
  // Address 1: Phone StringType Type the main phone number associated with the primary address.
  address1_telephone1?: string | null;
  //  StringType
  createdbyname?: string | null;
  // Address 1: Telephone 2 StringType Type a second phone number associated with the primary address.
  address1_telephone2?: string | null;
  // Originating Lead LookupType Shows the lead that the contact was created if the contact was created by converting a lead in Microsoft Dynamics 365. This is used to relate the contact to the data on the originating lead for use in reporting and analytics.
  originatingleadid?: import("../../types/EntityReference").EntityReference | null;
  // Gender contact_contact_gendercode Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
  gendercode?: import("../enums/contact_contact_gendercode").contact_contact_gendercode | null;
  // Address 2: UPS Zone StringType Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address2_upszone?: string | null;
  // Address3: Country/Region StringType the country or region for the 3rd address.
  address3_country?: string | null;
  // Merged BooleanType Shows whether the account has been merged with a master contact.
  merged?: boolean | null;
  // Business Phone StringType Type the main phone number for this contact.
  telephone1?: string | null;
  // Pager StringType Type the pager number for the contact.
  pager?: string | null;
  // Address 2: Street 2 StringType Type the second line of the secondary address.
  address2_line2?: string | null;
  // No. of Children IntegerType Type the number of children the contact has for reference in follow-up phone calls and other communications.
  numberofchildren?: number | null;
  // User Name StringType Shows the user identity for local web authentication.
  adx_identity_username?: string | null;
  // Job Title StringType Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
  jobtitle?: string | null;
  // Auto-created BooleanType Information about whether the contact was auto-created when promoting an email or an appointment.
  isautocreate?: boolean | null;
  // Aging 30 MoneyType For system use only.
  aging30?: number | null;
  // Address 3: Fax StringType Type the fax number associated with the third address.
  address3_fax?: string | null;
  // Two Factor Enabled BooleanType Determines if two-factor authentication is enabled for the contact.
  adx_identity_twofactorenabled?: boolean | null;
  // Address 1: ID UniqueidentifierType Unique identifier for address 1.
  address1_addressid?: import("../../types/Guid").Guid | null;
  // Address 2: Shipping Method contact_contact_address2_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address2_shippingmethodcode?: import("../enums/contact_contact_address2_shippingmethodcode").contact_contact_address2_shippingmethodcode | null;
  // Time Zone IntegerType
  adx_timezone?: number | null;
  // Address 3: County StringType Type the county for the third address.
  address3_county?: string | null;
  //  StringType
  defaultpricelevelidname?: string | null;
  // Not at Company Flag contact_contact_msdyn_orgchangestatus Whether or not the contact belongs to the associated account
  msdyn_orgchangestatus?: import("../enums/contact_contact_msdyn_orgchangestatus").contact_contact_msdyn_orgchangestatus | null;
  // Address 3: Address Type contact_contact_address3_addresstypecode Select the third address type.
  address3_addresstypecode?: import("../enums/contact_contact_address3_addresstypecode").contact_contact_address3_addresstypecode | null;
  // Annual Income MoneyType Type the contact's annual income for use in profiling and financial analysis.
  annualincome?: number | null;
  // Address 2: County StringType Type the county for the secondary address.
  address2_county?: string | null;
  // Address 1: Freight Terms contact_contact_address1_freighttermscode Select the freight terms for the primary address to make sure shipping orders are processed correctly.
  address1_freighttermscode?: import("../enums/contact_contact_address1_freighttermscode").contact_contact_address1_freighttermscode | null;
  //  StringType
  owneridname?: string | null;
  // Aging 30 (Base) MoneyType Shows the Aging 30 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  aging30_base?: number | null;
  // Address 1: Latitude DoubleType Type the latitude value for the primary address for use in mapping and other applications.
  address1_latitude?: number | null;
  // Portal Terms Agreement Date DateTimeType Indicates the date and time that the person agreed to the portal terms and conditions. DateAndTime:UserLocal
  msdyn_portaltermsagreementdate?: Date | null;
  // Address 2 MemoType Shows the complete secondary address.
  address2_composite?: string | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  // Do not allow Phone Calls BooleanType Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns.
  donotphone?: boolean | null;
  // Address 3: Primary Contact Name StringType Type the name of the main contact at the account's third address.
  address3_primarycontactname?: string | null;
  //  StringType
  parentcontactidname?: string | null;
  // Preferred Method of Contact contact_contact_preferredcontactmethodcode Select the preferred method of contact.
  preferredcontactmethodcode?: import("../enums/contact_contact_preferredcontactmethodcode").contact_contact_preferredcontactmethodcode | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Address 3: Telephone1 StringType Type the main phone number associated with the third address.
  address3_telephone1?: string | null;
  // Credit Hold BooleanType Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues.
  creditonhold?: boolean | null;
  // Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to the contact record.
  timespentbymeonemailandmeetings?: string | null;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("../../types/Guid").Guid | null;
  // Preferred Time contact_contact_preferredappointmenttimecode Select the preferred time of day for service appointments.
  preferredappointmenttimecode?: import("../enums/contact_contact_preferredappointmenttimecode").contact_contact_preferredappointmenttimecode | null;
  // Address3: State/Province StringType the state or province of the third address.
  address3_stateorprovince?: string | null;
  // Do not allow Emails BooleanType Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email.
  donotemail?: boolean | null;
  // Children's Names StringType Type the names of the contact's children for reference in communications and client programs.
  childrensnames?: string | null;
  // Manager StringType Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact.
  managername?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  //  [Required] StringType
  parentcustomeridname?: string;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Preferred Service LookupType Choose the contact's preferred service to make sure services are scheduled correctly for the customer.
  preferredserviceid?: import("../../types/EntityReference").EntityReference | null;
  // Address 3 MemoType Shows the complete third address.
  address3_composite?: string | null;
  //  StringType
  originatingleadidname?: string | null;
  // Address 1: Primary Contact Name StringType Type the name of the main contact at the account's primary address.
  address1_primarycontactname?: string | null;
  // Manager Phone StringType Type the phone number for the contact's manager.
  managerphone?: string | null;
  // Address 1: Longitude DoubleType Type the longitude value for the primary address for use in mapping and other applications.
  address1_longitude?: number | null;
  // Modified By Username StringType
  adx_modifiedbyusername?: string | null;
  // Address 2: Longitude DoubleType Type the longitude value for the secondary address for use in mapping and other applications.
  address2_longitude?: number | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Email Address 3 StringType Type an alternate email address for the contact.
  emailaddress3?: string | null;
  // Profile Last Activity DateTimeType DateAndTime:UserLocal
  adx_profilelastactivity?: Date | null;
  // Address 1: Fax StringType Type the fax number associated with the primary address.
  address1_fax?: string | null;
  // Address 1: Name StringType Type a descriptive name for the primary address, such as Corporate Headquarters.
  address1_name?: string | null;
  // Is Minor BooleanType Indicates that the contact is considered a minor in their jurisdiction.
  msdyn_isminor?: boolean | null;
  // Profile Modified On DateTimeType DateAndTime:UserLocal
  adx_profilemodifiedon?: Date | null;
  // Preferred User LookupType Choose the regular or preferred customer service representative for reference when scheduling service activities for the contact.
  preferredsystemuserid?: import("../../types/EntityReference").EntityReference | null;
  // Master ID LookupType Unique identifier of the master contact for merge.
  masterid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  // Payment Terms contact_contact_paymenttermscode Select the payment terms to indicate when the customer needs to pay the total amount.
  paymenttermscode?: import("../enums/contact_contact_paymenttermscode").contact_contact_paymenttermscode | null;
  // KPI LookupType Maps to contact KPI records
  msdyn_contactkpiid?: import("../../types/EntityReference").EntityReference | null;
  // Address 1: Street 2 StringType Type the second line of the primary address.
  address1_line2?: string | null;
  // Lead Source contact_contact_leadsourcecode Select the primary marketing source that directed the contact to your organization.
  leadsourcecode?: import("../enums/contact_contact_leadsourcecode").contact_contact_leadsourcecode | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  adx_preferredlanguageidname?: string | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Price List LookupType Choose the default price list associated with the contact to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders.
  defaultpricelevelid?: import("../../types/EntityReference").EntityReference | null;
  // Mobile Phone Confirmed BooleanType Determines if the phone number is confirmed by the contact.
  adx_identity_mobilephoneconfirmed?: boolean | null;
  // Parent Contact LookupType Unique identifier of the parent contact.
  parentcontactid?: import("../../types/EntityReference").EntityReference | null;
  // Nickname StringType Type the contact's nickname.
  nickname?: string | null;
  // Assistant StringType Type the name of the contact's assistant.
  assistantname?: string | null;
  // Marketing Only BooleanType Whether is only for marketing
  marketingonly?: boolean | null;
  // Address 1: Street 1 StringType Type the first line of the primary address.
  address1_line1?: string | null;
  // Do not allow Bulk Mails BooleanType Select whether the contact accepts bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the letters.
  donotbulkpostalmail?: boolean | null;
  //  StringType
  preferredequipmentidname?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Address 2: Country/Region StringType Type the country or region for the secondary address.
  address2_country?: string | null;
  // Address 1: Country/Region StringType Type the country or region for the primary address.
  address1_country?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Anniversary DateTimeType Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. DateOnly:DateOnly
  anniversary?: Date | null;
  // Entity Image Id UniqueidentifierType For internal use only.
  entityimageid?: import("../../types/Guid").Guid | null;
  // Preferred Day contact_contact_preferredappointmentdaycode Select the preferred day of the week for service appointments.
  preferredappointmentdaycode?: import("../enums/contact_contact_preferredappointmentdaycode").contact_contact_preferredappointmentdaycode | null;
  //  StringType
  slaname?: string | null;
  // Telephone 3 StringType Type a third phone number for this contact.
  telephone3?: string | null;
  // Send Marketing Materials BooleanType Select whether the contact accepts marketing materials, such as brochures or catalogs. Contacts that opt out can be excluded from marketing initiatives.
  donotsendmm?: boolean | null;
  // Address 3: Name StringType Type a descriptive name for the third address, such as Corporate Headquarters.
  address3_name?: string | null;
  // Home Phone StringType Type a second phone number for this contact.
  telephone2?: string | null;
  // Full Name StringType Combines and shows the contact's first and last names so that the full name can be displayed in views and reports.
  fullname?: string | null;
  // Email StringType Type the primary email address for the contact.
  emailaddress1?: string | null;
  // First Name StringType Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
  firstname?: string | null;
  // Address 2: Primary Contact Name StringType Type the name of the main contact at the account's secondary address.
  address2_primarycontactname?: string | null;
  // Spouse/Partner Name StringType Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact.
  spousesname?: string | null;
  // Aging 60 MoneyType For system use only.
  aging60?: number | null;
  // Salutation StringType Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns.
  salutation?: string | null;
  // Created By Username StringType
  adx_createdbyusername?: string | null;
  // Department StringType Type the department or business unit where the contact works in the parent company or business.
  department?: string | null;
  // Local Login Disabled BooleanType Indicates that the contact can no longer sign in to the portal using the local account.
  adx_identity_locallogindisabled?: boolean | null;
  // Address 2: ID UniqueidentifierType Unique identifier for address 2.
  address2_addressid?: import("../../types/Guid").Guid | null;
  // Lockout End Date DateTimeType Shows the moment in time when the locked contact becomes unlocked again. DateAndTime:UserLocal
  adx_identity_lockoutenddate?: Date | null;
  // External User Identifier StringType Identifier for an external user.
  externaluseridentifier?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Status contact_contact_statecode Shows whether the contact is active or inactive. Inactive contacts are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/contact_contact_statecode").contact_contact_statecode | null;
  // Company Name CustomerType Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities.
  parentcustomerid?: import("../../types/EntityReference").EntityReference | null;
  // Address 1: Address Type contact_contact_address1_addresstypecode Select the primary address type.
  address1_addresstypecode?: import("../enums/contact_contact_address1_addresstypecode").contact_contact_address1_addresstypecode | null;
  // Address 3: Longitude DoubleType Type the longitude value for the third address for use in mapping and other applications.
  address3_longitude?: number | null;
  // Participates in Workflow BooleanType Shows whether the contact participates in workflow rules.
  participatesinworkflow?: boolean | null;
  // Website StringType Type the contact's professional or personal website or blog URL.
  websiteurl?: string | null;
  // Address 1: Shipping Method contact_contact_address1_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address1_shippingmethodcode?: import("../enums/contact_contact_address1_shippingmethodcode").contact_contact_address1_shippingmethodcode | null;
  //  BooleanType
  isprivate?: boolean | null;
  // Address 3: Freight Terms contact_contact_address3_freighttermscode Select the freight terms for the third address to make sure shipping orders are processed correctly.
  address3_freighttermscode?: import("../enums/contact_contact_address3_freighttermscode").contact_contact_address3_freighttermscode | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  // Mobile Phone StringType Type the mobile phone number for the contact.
  mobilephone?: string | null;
  // Organization Name StringType
  adx_organizationname?: string | null;
  // Address 2: Telephone 2 StringType Type a second phone number associated with the secondary address.
  address2_telephone2?: string | null;
  // Assistant Phone StringType Type the phone number for the contact's assistant.
  assistantphone?: string | null;
  // Owning User LookupType Unique identifier of the user who owns the contact.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  // Last Name [Required] StringType Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
  lastname?: string;
  //  StringType
  mastercontactidyominame?: string | null;
  // Territory contact_contact_territorycode Select a region or territory for the contact for use in segmentation and analysis.
  territorycode?: import("../enums/contact_contact_territorycode").contact_contact_territorycode | null;
  // FTP Site StringType Type the URL for the contact's FTP site to enable users to access data and share documents.
  ftpsiteurl?: string | null;
  // Address 1: Telephone 3 StringType Type a third phone number associated with the primary address.
  address1_telephone3?: string | null;
  // Parent Customer Type EntityNameType
  parentcustomeridtype?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
}

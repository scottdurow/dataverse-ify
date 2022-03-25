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
    address1_latitude: "Double",
    address1_longitude: "Double",
    address1_utcoffset: "Integer",
    address2_latitude: "Double",
    address2_longitude: "Double",
    address2_utcoffset: "Integer",
    address3_latitude: "Double",
    address3_longitude: "Double",
    address3_utcoffset: "Integer",
    aging30: "Money",
    aging30_base: "Money",
    aging60: "Money",
    aging60_base: "Money",
    aging90: "Money",
    aging90_base: "Money",
    annualincome: "Money",
    annualincome_base: "Money",
    creditlimit: "Money",
    creditlimit_base: "Money",
    entityimage_timestamp: "BigInt",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    numberofchildren: "Integer",
    onholdtime: "Integer",
    teamsfollowed: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    accountrolecode: "Optionset",
    address1_addresstypecode: "Optionset",
    address1_freighttermscode: "Optionset",
    address1_shippingmethodcode: "Optionset",
    address2_addresstypecode: "Optionset",
    address2_freighttermscode: "Optionset",
    address2_shippingmethodcode: "Optionset",
    address3_addresstypecode: "Optionset",
    address3_freighttermscode: "Optionset",
    address3_shippingmethodcode: "Optionset",
    customersizecode: "Optionset",
    customertypecode: "Optionset",
    educationcode: "Optionset",
    familystatuscode: "Optionset",
    gendercode: "Optionset",
    haschildrencode: "Optionset",
    leadsourcecode: "Optionset",
    msdyn_orgchangestatus: "Optionset",
    paymenttermscode: "Optionset",
    preferredappointmentdaycode: "Optionset",
    preferredappointmenttimecode: "Optionset",
    preferredcontactmethodcode: "Optionset",
    shippingmethodcode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    territorycode: "Optionset",
    // Date Formats
    anniversary: "DateOnly:DateOnly",
    birthdate: "DateOnly:DateOnly",
    createdon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    lastusedincampaign: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
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
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    masterid: ["mscrm.contact"],
    defaultpricelevelid: ["mscrm.pricelevel"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    parentcustomerid: ["account","contact"],
    slainvokedid: ["sla"],
  },
};

// Attribute constants
export enum ContactAttributes {
  AccountId = "accountid",
  AccountIdName = "accountidname",
  AccountIdYomiName = "accountidyominame",
  AccountRoleCode = "accountrolecode",
  Address1_AddressId = "address1_addressid",
  Address1_AddressTypeCode = "address1_addresstypecode",
  Address1_City = "address1_city",
  Address1_Composite = "address1_composite",
  Address1_Country = "address1_country",
  Address1_County = "address1_county",
  Address1_Fax = "address1_fax",
  Address1_FreightTermsCode = "address1_freighttermscode",
  Address1_Latitude = "address1_latitude",
  Address1_Line1 = "address1_line1",
  Address1_Line2 = "address1_line2",
  Address1_Line3 = "address1_line3",
  Address1_Longitude = "address1_longitude",
  Address1_Name = "address1_name",
  Address1_PostalCode = "address1_postalcode",
  Address1_PostOfficeBox = "address1_postofficebox",
  Address1_PrimaryContactName = "address1_primarycontactname",
  Address1_ShippingMethodCode = "address1_shippingmethodcode",
  Address1_StateOrProvince = "address1_stateorprovince",
  Address1_Telephone1 = "address1_telephone1",
  Address1_Telephone2 = "address1_telephone2",
  Address1_Telephone3 = "address1_telephone3",
  Address1_UPSZone = "address1_upszone",
  Address1_UTCOffset = "address1_utcoffset",
  Address2_AddressId = "address2_addressid",
  Address2_AddressTypeCode = "address2_addresstypecode",
  Address2_City = "address2_city",
  Address2_Composite = "address2_composite",
  Address2_Country = "address2_country",
  Address2_County = "address2_county",
  Address2_Fax = "address2_fax",
  Address2_FreightTermsCode = "address2_freighttermscode",
  Address2_Latitude = "address2_latitude",
  Address2_Line1 = "address2_line1",
  Address2_Line2 = "address2_line2",
  Address2_Line3 = "address2_line3",
  Address2_Longitude = "address2_longitude",
  Address2_Name = "address2_name",
  Address2_PostalCode = "address2_postalcode",
  Address2_PostOfficeBox = "address2_postofficebox",
  Address2_PrimaryContactName = "address2_primarycontactname",
  Address2_ShippingMethodCode = "address2_shippingmethodcode",
  Address2_StateOrProvince = "address2_stateorprovince",
  Address2_Telephone1 = "address2_telephone1",
  Address2_Telephone2 = "address2_telephone2",
  Address2_Telephone3 = "address2_telephone3",
  Address2_UPSZone = "address2_upszone",
  Address2_UTCOffset = "address2_utcoffset",
  Address3_AddressId = "address3_addressid",
  Address3_AddressTypeCode = "address3_addresstypecode",
  Address3_City = "address3_city",
  Address3_Composite = "address3_composite",
  Address3_Country = "address3_country",
  Address3_County = "address3_county",
  Address3_Fax = "address3_fax",
  Address3_FreightTermsCode = "address3_freighttermscode",
  Address3_Latitude = "address3_latitude",
  Address3_Line1 = "address3_line1",
  Address3_Line2 = "address3_line2",
  Address3_Line3 = "address3_line3",
  Address3_Longitude = "address3_longitude",
  Address3_Name = "address3_name",
  Address3_PostalCode = "address3_postalcode",
  Address3_PostOfficeBox = "address3_postofficebox",
  Address3_PrimaryContactName = "address3_primarycontactname",
  Address3_ShippingMethodCode = "address3_shippingmethodcode",
  Address3_StateOrProvince = "address3_stateorprovince",
  Address3_Telephone1 = "address3_telephone1",
  Address3_Telephone2 = "address3_telephone2",
  Address3_Telephone3 = "address3_telephone3",
  Address3_UPSZone = "address3_upszone",
  Address3_UTCOffset = "address3_utcoffset",
  Aging30 = "aging30",
  Aging30_Base = "aging30_base",
  Aging60 = "aging60",
  Aging60_Base = "aging60_base",
  Aging90 = "aging90",
  Aging90_Base = "aging90_base",
  Anniversary = "anniversary",
  AnnualIncome = "annualincome",
  AnnualIncome_Base = "annualincome_base",
  AssistantName = "assistantname",
  AssistantPhone = "assistantphone",
  BirthDate = "birthdate",
  Business2 = "business2",
  BusinessCard = "businesscard",
  BusinessCardAttributes = "businesscardattributes",
  Callback = "callback",
  ChildrensNames = "childrensnames",
  Company = "company",
  ContactId = "contactid",
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
  CreditLimit = "creditlimit",
  CreditLimit_Base = "creditlimit_base",
  CreditOnHold = "creditonhold",
  CustomerSizeCode = "customersizecode",
  CustomerTypeCode = "customertypecode",
  DefaultPriceLevelId = "defaultpricelevelid",
  DefaultPriceLevelIdName = "defaultpricelevelidname",
  Department = "department",
  Description = "description",
  DoNotBulkEMail = "donotbulkemail",
  DoNotBulkPostalMail = "donotbulkpostalmail",
  DoNotEMail = "donotemail",
  DoNotFax = "donotfax",
  DoNotPhone = "donotphone",
  DoNotPostalMail = "donotpostalmail",
  DoNotSendMM = "donotsendmm",
  EducationCode = "educationcode",
  EMailAddress1 = "emailaddress1",
  EMailAddress2 = "emailaddress2",
  EMailAddress3 = "emailaddress3",
  EmployeeId = "employeeid",
  EntityImage = "entityimage",
  EntityImage_Timestamp = "entityimage_timestamp",
  EntityImage_URL = "entityimage_url",
  EntityImageId = "entityimageid",
  ExchangeRate = "exchangerate",
  ExternalUserIdentifier = "externaluseridentifier",
  FamilyStatusCode = "familystatuscode",
  Fax = "fax",
  FirstName = "firstname",
  FollowEmail = "followemail",
  FtpSiteUrl = "ftpsiteurl",
  FullName = "fullname",
  GenderCode = "gendercode",
  GovernmentId = "governmentid",
  HasChildrenCode = "haschildrencode",
  Home2 = "home2",
  ImportSequenceNumber = "importsequencenumber",
  IsAutoCreate = "isautocreate",
  IsBackofficeCustomer = "isbackofficecustomer",
  IsPrivate = "isprivate",
  JobTitle = "jobtitle",
  LastName = "lastname",
  LastOnHoldTime = "lastonholdtime",
  LastUsedInCampaign = "lastusedincampaign",
  LeadSourceCode = "leadsourcecode",
  ManagerName = "managername",
  ManagerPhone = "managerphone",
  MarketingOnly = "marketingonly",
  MasterContactIdName = "mastercontactidname",
  MasterContactIdYomiName = "mastercontactidyominame",
  MasterId = "masterid",
  Merged = "merged",
  MiddleName = "middlename",
  MobilePhone = "mobilephone",
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
  msdyn_contactkpiid = "msdyn_contactkpiid",
  msdyn_contactkpiidName = "msdyn_contactkpiidname",
  msdyn_gdproptout = "msdyn_gdproptout",
  msdyn_orgchangestatus = "msdyn_orgchangestatus",
  NickName = "nickname",
  NumberOfChildren = "numberofchildren",
  OnHoldTime = "onholdtime",
  OriginatingLeadId = "originatingleadid",
  OriginatingLeadIdName = "originatingleadidname",
  OriginatingLeadIdYomiName = "originatingleadidyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  Pager = "pager",
  ParentContactId = "parentcontactid",
  ParentContactIdName = "parentcontactidname",
  ParentContactIdYomiName = "parentcontactidyominame",
  ParentCustomerId = "parentcustomerid",
  ParentCustomerIdName = "parentcustomeridname",
  ParentCustomerIdType = "parentcustomeridtype",
  ParentCustomerIdYomiName = "parentcustomeridyominame",
  ParticipatesInWorkflow = "participatesinworkflow",
  PaymentTermsCode = "paymenttermscode",
  PreferredAppointmentDayCode = "preferredappointmentdaycode",
  PreferredAppointmentTimeCode = "preferredappointmenttimecode",
  PreferredContactMethodCode = "preferredcontactmethodcode",
  PreferredEquipmentId = "preferredequipmentid",
  PreferredEquipmentIdName = "preferredequipmentidname",
  PreferredServiceId = "preferredserviceid",
  PreferredServiceIdName = "preferredserviceidname",
  PreferredSystemUserId = "preferredsystemuserid",
  PreferredSystemUserIdName = "preferredsystemuseridname",
  PreferredSystemUserIdYomiName = "preferredsystemuseridyominame",
  ProcessId = "processid",
  Salutation = "salutation",
  ShippingMethodCode = "shippingmethodcode",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
  SpousesName = "spousesname",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  SubscriptionId = "subscriptionid",
  Suffix = "suffix",
  TeamsFollowed = "teamsfollowed",
  Telephone1 = "telephone1",
  Telephone2 = "telephone2",
  Telephone3 = "telephone3",
  TerritoryCode = "territorycode",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  TransactionCurrencyId = "transactioncurrencyid",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  WebSiteUrl = "websiteurl",
  YomiFirstName = "yomifirstname",
  YomiFullName = "yomifullname",
  YomiLastName = "yomilastname",
  YomiMiddleName = "yomimiddlename",
}

// Early Bound Interface
export interface Contact extends IEntity {
  // Account LookupType Unique identifier of the account with which the contact is associated.
  accountid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  accountidname?: string | null;
  //  StringType
  accountidyominame?: string | null;
  // Role contact_contact_accountrolecode Select the contact's role within the company or sales process, such as decision maker, employee, or influencer.
  accountrolecode?: import("../enums/contact_contact_accountrolecode").contact_contact_accountrolecode | null;
  // Address 1: ID UniqueidentifierType Unique identifier for address 1.
  address1_addressid?: import("../../types/Guid").Guid | null;
  // Address 1: Address Type contact_contact_address1_addresstypecode Select the primary address type.
  address1_addresstypecode?: import("../enums/contact_contact_address1_addresstypecode").contact_contact_address1_addresstypecode | null;
  // Address 1: City StringType Type the city for the primary address.
  address1_city?: string | null;
  // Address 1 MemoType Shows the complete primary address.
  address1_composite?: string | null;
  // Address 1: Country/Region StringType Type the country or region for the primary address.
  address1_country?: string | null;
  // Address 1: County StringType Type the county for the primary address.
  address1_county?: string | null;
  // Address 1: Fax StringType Type the fax number associated with the primary address.
  address1_fax?: string | null;
  // Address 1: Freight Terms contact_contact_address1_freighttermscode Select the freight terms for the primary address to make sure shipping orders are processed correctly.
  address1_freighttermscode?: import("../enums/contact_contact_address1_freighttermscode").contact_contact_address1_freighttermscode | null;
  // Address 1: Latitude DoubleType Type the latitude value for the primary address for use in mapping and other applications.
  address1_latitude?: number | null;
  // Address 1: Street 1 StringType Type the first line of the primary address.
  address1_line1?: string | null;
  // Address 1: Street 2 StringType Type the second line of the primary address.
  address1_line2?: string | null;
  // Address 1: Street 3 StringType Type the third line of the primary address.
  address1_line3?: string | null;
  // Address 1: Longitude DoubleType Type the longitude value for the primary address for use in mapping and other applications.
  address1_longitude?: number | null;
  // Address 1: Name StringType Type a descriptive name for the primary address, such as Corporate Headquarters.
  address1_name?: string | null;
  // Address 1: ZIP/Postal Code StringType Type the ZIP Code or postal code for the primary address.
  address1_postalcode?: string | null;
  // Address 1: Post Office Box StringType Type the post office box number of the primary address.
  address1_postofficebox?: string | null;
  // Address 1: Primary Contact Name StringType Type the name of the main contact at the account's primary address.
  address1_primarycontactname?: string | null;
  // Address 1: Shipping Method contact_contact_address1_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address1_shippingmethodcode?: import("../enums/contact_contact_address1_shippingmethodcode").contact_contact_address1_shippingmethodcode | null;
  // Address 1: State/Province StringType Type the state or province of the primary address.
  address1_stateorprovince?: string | null;
  // Address 1: Phone StringType Type the main phone number associated with the primary address.
  address1_telephone1?: string | null;
  // Address 1: Telephone 2 StringType Type a second phone number associated with the primary address.
  address1_telephone2?: string | null;
  // Address 1: Telephone 3 StringType Type a third phone number associated with the primary address.
  address1_telephone3?: string | null;
  // Address 1: UPS Zone StringType Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address1_upszone?: string | null;
  // Address 1: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address1_utcoffset?: number | null;
  // Address 2: ID UniqueidentifierType Unique identifier for address 2.
  address2_addressid?: import("../../types/Guid").Guid | null;
  // Address 2: Address Type contact_contact_address2_addresstypecode Select the secondary address type.
  address2_addresstypecode?: import("../enums/contact_contact_address2_addresstypecode").contact_contact_address2_addresstypecode | null;
  // Address 2: City StringType Type the city for the secondary address.
  address2_city?: string | null;
  // Address 2 MemoType Shows the complete secondary address.
  address2_composite?: string | null;
  // Address 2: Country/Region StringType Type the country or region for the secondary address.
  address2_country?: string | null;
  // Address 2: County StringType Type the county for the secondary address.
  address2_county?: string | null;
  // Address 2: Fax StringType Type the fax number associated with the secondary address.
  address2_fax?: string | null;
  // Address 2: Freight Terms contact_contact_address2_freighttermscode Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
  address2_freighttermscode?: import("../enums/contact_contact_address2_freighttermscode").contact_contact_address2_freighttermscode | null;
  // Address 2: Latitude DoubleType Type the latitude value for the secondary address for use in mapping and other applications.
  address2_latitude?: number | null;
  // Address 2: Street 1 StringType Type the first line of the secondary address.
  address2_line1?: string | null;
  // Address 2: Street 2 StringType Type the second line of the secondary address.
  address2_line2?: string | null;
  // Address 2: Street 3 StringType Type the third line of the secondary address.
  address2_line3?: string | null;
  // Address 2: Longitude DoubleType Type the longitude value for the secondary address for use in mapping and other applications.
  address2_longitude?: number | null;
  // Address 2: Name StringType Type a descriptive name for the secondary address, such as Corporate Headquarters.
  address2_name?: string | null;
  // Address 2: ZIP/Postal Code StringType Type the ZIP Code or postal code for the secondary address.
  address2_postalcode?: string | null;
  // Address 2: Post Office Box StringType Type the post office box number of the secondary address.
  address2_postofficebox?: string | null;
  // Address 2: Primary Contact Name StringType Type the name of the main contact at the account's secondary address.
  address2_primarycontactname?: string | null;
  // Address 2: Shipping Method contact_contact_address2_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address2_shippingmethodcode?: import("../enums/contact_contact_address2_shippingmethodcode").contact_contact_address2_shippingmethodcode | null;
  // Address 2: State/Province StringType Type the state or province of the secondary address.
  address2_stateorprovince?: string | null;
  // Address 2: Telephone 1 StringType Type the main phone number associated with the secondary address.
  address2_telephone1?: string | null;
  // Address 2: Telephone 2 StringType Type a second phone number associated with the secondary address.
  address2_telephone2?: string | null;
  // Address 2: Telephone 3 StringType Type a third phone number associated with the secondary address.
  address2_telephone3?: string | null;
  // Address 2: UPS Zone StringType Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address2_upszone?: string | null;
  // Address 2: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address2_utcoffset?: number | null;
  // Address 3: ID UniqueidentifierType Unique identifier for address 3.
  address3_addressid?: import("../../types/Guid").Guid | null;
  // Address 3: Address Type contact_contact_address3_addresstypecode Select the third address type.
  address3_addresstypecode?: import("../enums/contact_contact_address3_addresstypecode").contact_contact_address3_addresstypecode | null;
  // Address 3: City StringType Type the city for the 3rd address.
  address3_city?: string | null;
  // Address 3 MemoType Shows the complete third address.
  address3_composite?: string | null;
  // Address3: Country/Region StringType the country or region for the 3rd address.
  address3_country?: string | null;
  // Address 3: County StringType Type the county for the third address.
  address3_county?: string | null;
  // Address 3: Fax StringType Type the fax number associated with the third address.
  address3_fax?: string | null;
  // Address 3: Freight Terms contact_contact_address3_freighttermscode Select the freight terms for the third address to make sure shipping orders are processed correctly.
  address3_freighttermscode?: import("../enums/contact_contact_address3_freighttermscode").contact_contact_address3_freighttermscode | null;
  // Address 3: Latitude DoubleType Type the latitude value for the third address for use in mapping and other applications.
  address3_latitude?: number | null;
  // Address3: Street 1 StringType the first line of the 3rd address.
  address3_line1?: string | null;
  // Address3: Street 2 StringType the second line of the 3rd address.
  address3_line2?: string | null;
  // Address3: Street 3 StringType the third line of the 3rd address.
  address3_line3?: string | null;
  // Address 3: Longitude DoubleType Type the longitude value for the third address for use in mapping and other applications.
  address3_longitude?: number | null;
  // Address 3: Name StringType Type a descriptive name for the third address, such as Corporate Headquarters.
  address3_name?: string | null;
  // Address3: ZIP/Postal Code StringType the ZIP Code or postal code for the 3rd address.
  address3_postalcode?: string | null;
  // Address 3: Post Office Box StringType the post office box number of the 3rd address.
  address3_postofficebox?: string | null;
  // Address 3: Primary Contact Name StringType Type the name of the main contact at the account's third address.
  address3_primarycontactname?: string | null;
  // Address 3: Shipping Method contact_contact_address3_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address3_shippingmethodcode?: import("../enums/contact_contact_address3_shippingmethodcode").contact_contact_address3_shippingmethodcode | null;
  // Address3: State/Province StringType the state or province of the third address.
  address3_stateorprovince?: string | null;
  // Address 3: Telephone1 StringType Type the main phone number associated with the third address.
  address3_telephone1?: string | null;
  // Address 3: Telephone2 StringType Type a second phone number associated with the third address.
  address3_telephone2?: string | null;
  // Address 3: Telephone3 StringType Type a third phone number associated with the primary address.
  address3_telephone3?: string | null;
  // Address 3: UPS Zone StringType Type the UPS zone of the third address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address3_upszone?: string | null;
  // Address 3: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address3_utcoffset?: number | null;
  // Aging 30 MoneyType For system use only.
  aging30?: number | null;
  // Aging 30 (Base) MoneyType Shows the Aging 30 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  aging30_base?: number | null;
  // Aging 60 MoneyType For system use only.
  aging60?: number | null;
  // Aging 60 (Base) MoneyType Shows the Aging 60 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  aging60_base?: number | null;
  // Aging 90 MoneyType For system use only.
  aging90?: number | null;
  // Aging 90 (Base) MoneyType Shows the Aging 90 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  aging90_base?: number | null;
  // Anniversary DateTimeType Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications. DateOnly:DateOnly
  anniversary?: Date | null;
  // Annual Income MoneyType Type the contact's annual income for use in profiling and financial analysis.
  annualincome?: number | null;
  // Annual Income (Base) MoneyType Shows the Annual Income field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  annualincome_base?: number | null;
  // Assistant StringType Type the name of the contact's assistant.
  assistantname?: string | null;
  // Assistant Phone StringType Type the phone number for the contact's assistant.
  assistantphone?: string | null;
  // Birthday DateTimeType Enter the contact's birthday for use in customer gift programs or other communications. DateOnly:DateOnly
  birthdate?: Date | null;
  // Business Phone 2 StringType Type a second business phone number for this contact.
  business2?: string | null;
  // Business Card MemoType Stores Image of the Business Card
  businesscard?: string | null;
  // BusinessCardAttributes StringType Stores Business Card Control Properties.
  businesscardattributes?: string | null;
  // Callback Number StringType Type a callback phone number for this contact.
  callback?: string | null;
  // Children's Names StringType Type the names of the contact's children for reference in communications and client programs.
  childrensnames?: string | null;
  // Company Phone StringType Type the company phone of the contact.
  company?: string | null;
  // Contact UniqueidentifierType Unique identifier of the contact.
  contactid?: import("../../types/Guid").Guid | null;
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
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Credit Limit MoneyType Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer.
  creditlimit?: number | null;
  // Credit Limit (Base) MoneyType Shows the Credit Limit field converted to the system's default base currency for reporting purposes. The calculations use the exchange rate specified in the Currencies area.
  creditlimit_base?: number | null;
  // Credit Hold BooleanType Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues.
  creditonhold?: boolean | null;
  // Customer Size contact_contact_customersizecode Select the size of the contact's company for segmentation and reporting purposes.
  customersizecode?: import("../enums/contact_contact_customersizecode").contact_contact_customersizecode | null;
  // Relationship Type contact_contact_customertypecode Select the category that best describes the relationship between the contact and your organization.
  customertypecode?: import("../enums/contact_contact_customertypecode").contact_contact_customertypecode | null;
  // Price List LookupType Choose the default price list associated with the contact to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders.
  defaultpricelevelid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  defaultpricelevelidname?: string | null;
  // Department StringType Type the department or business unit where the contact works in the parent company or business.
  department?: string | null;
  // Description MemoType Type additional information to describe the contact, such as an excerpt from the company's website.
  description?: string | null;
  // Do not allow Bulk Emails BooleanType Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email.
  donotbulkemail?: boolean | null;
  // Do not allow Bulk Mails BooleanType Select whether the contact accepts bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the letters.
  donotbulkpostalmail?: boolean | null;
  // Do not allow Emails BooleanType Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email.
  donotemail?: boolean | null;
  // Do not allow Faxes BooleanType Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns.
  donotfax?: boolean | null;
  // Do not allow Phone Calls BooleanType Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns.
  donotphone?: boolean | null;
  // Do not allow Mails BooleanType Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns.
  donotpostalmail?: boolean | null;
  // Send Marketing Materials BooleanType Select whether the contact accepts marketing materials, such as brochures or catalogs. Contacts that opt out can be excluded from marketing initiatives.
  donotsendmm?: boolean | null;
  // Education contact_contact_educationcode Select the contact's highest level of education for use in segmentation and analysis.
  educationcode?: import("../enums/contact_contact_educationcode").contact_contact_educationcode | null;
  // Email StringType Type the primary email address for the contact.
  emailaddress1?: string | null;
  // Email Address 2 StringType Type the secondary email address for the contact.
  emailaddress2?: string | null;
  // Email Address 3 StringType Type an alternate email address for the contact.
  emailaddress3?: string | null;
  // Employee StringType Type the employee ID or number for the contact for reference in orders, service cases, or other communications with the contact's organization.
  employeeid?: string | null;
  // Entity Image ImageType Shows the default image for the record.
  entityimage?: string | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  //  StringType
  entityimage_url?: string | null;
  // Entity Image Id UniqueidentifierType For internal use only.
  entityimageid?: import("../../types/Guid").Guid | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // External User Identifier StringType Identifier for an external user.
  externaluseridentifier?: string | null;
  // Marital Status contact_contact_familystatuscode Select the marital status of the contact for reference in follow-up phone calls and other communications.
  familystatuscode?: import("../enums/contact_contact_familystatuscode").contact_contact_familystatuscode | null;
  // Fax StringType Type the fax number for the contact.
  fax?: string | null;
  // First Name StringType Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
  firstname?: string | null;
  // Follow Email Activity BooleanType Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact.
  followemail?: boolean | null;
  // FTP Site StringType Type the URL for the contact's FTP site to enable users to access data and share documents.
  ftpsiteurl?: string | null;
  // Full Name StringType Combines and shows the contact's first and last names so that the full name can be displayed in views and reports.
  fullname?: string | null;
  // Gender contact_contact_gendercode Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
  gendercode?: import("../enums/contact_contact_gendercode").contact_contact_gendercode | null;
  // Government StringType Type the passport number or other government ID for the contact for use in documents or reports.
  governmentid?: string | null;
  // Has Children contact_contact_haschildrencode Select whether the contact has any children for reference in follow-up phone calls and other communications.
  haschildrencode?: import("../enums/contact_contact_haschildrencode").contact_contact_haschildrencode | null;
  // Home Phone 2 StringType Type a second home phone number for this contact.
  home2?: string | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Auto-created BooleanType Information about whether the contact was auto-created when promoting an email or an appointment.
  isautocreate?: boolean | null;
  // Back Office Customer BooleanType Select whether the contact exists in a separate accounting or other system, such as Microsoft Dynamics GP or another ERP database, for use in integration processes.
  isbackofficecustomer?: boolean | null;
  //  BooleanType
  isprivate?: boolean | null;
  // Job Title StringType Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
  jobtitle?: string | null;
  // Last Name [Required] StringType Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
  lastname?: string;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Last Date Included in Campaign DateTimeType Shows the date when the contact was last included in a marketing campaign or quick campaign. DateOnly:UserLocal
  lastusedincampaign?: Date | null;
  // Lead Source contact_contact_leadsourcecode Select the primary marketing source that directed the contact to your organization.
  leadsourcecode?: import("../enums/contact_contact_leadsourcecode").contact_contact_leadsourcecode | null;
  // Manager StringType Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact.
  managername?: string | null;
  // Manager Phone StringType Type the phone number for the contact's manager.
  managerphone?: string | null;
  // Marketing Only BooleanType Whether is only for marketing
  marketingonly?: boolean | null;
  //  StringType
  mastercontactidname?: string | null;
  //  StringType
  mastercontactidyominame?: string | null;
  // Master ID LookupType Unique identifier of the master contact for merge.
  masterid?: import("../../types/EntityReference").EntityReference | null;
  // Merged BooleanType Shows whether the account has been merged with a master contact.
  merged?: boolean | null;
  // Middle Name StringType Type the contact's middle name or initial to make sure the contact is addressed correctly.
  middlename?: string | null;
  // Mobile Phone StringType Type the mobile phone number for the contact.
  mobilephone?: string | null;
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
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // KPI LookupType Maps to contact KPI records
  msdyn_contactkpiid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  msdyn_contactkpiidname?: string | null;
  // GDPR Optout BooleanType Describes whether contact is opted out or not
  msdyn_gdproptout?: boolean | null;
  // Not at Company Flag contact_contact_msdyn_orgchangestatus Whether or not the contact belongs to the associated account
  msdyn_orgchangestatus?: import("../enums/contact_contact_msdyn_orgchangestatus").contact_contact_msdyn_orgchangestatus | null;
  // Nickname StringType Type the contact's nickname.
  nickname?: string | null;
  // No. of Children IntegerType Type the number of children the contact has for reference in follow-up phone calls and other communications.
  numberofchildren?: number | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  // Originating Lead LookupType Shows the lead that the contact was created if the contact was created by converting a lead in Microsoft Dynamics 365. This is used to relate the contact to the data on the originating lead for use in reporting and analytics.
  originatingleadid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  originatingleadidname?: string | null;
  //  StringType
  originatingleadidyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  owneridname?: string | null;
  //  EntityNameType
  owneridtype?: string | null;
  //  StringType
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier of the business unit that owns the contact.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier of the team who owns the contact.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Owning User LookupType Unique identifier of the user who owns the contact.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  // Pager StringType Type the pager number for the contact.
  pager?: string | null;
  // Parent Contact LookupType Unique identifier of the parent contact.
  parentcontactid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  parentcontactidname?: string | null;
  //  StringType
  parentcontactidyominame?: string | null;
  // Company Name CustomerType Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities.
  parentcustomerid?: import("../../types/EntityReference").EntityReference | null;
  //  [Required] StringType
  parentcustomeridname?: string;
  // Parent Customer Type EntityNameType
  parentcustomeridtype?: string | null;
  //  [Required] StringType
  parentcustomeridyominame?: string;
  // Participates in Workflow BooleanType Shows whether the contact participates in workflow rules.
  participatesinworkflow?: boolean | null;
  // Payment Terms contact_contact_paymenttermscode Select the payment terms to indicate when the customer needs to pay the total amount.
  paymenttermscode?: import("../enums/contact_contact_paymenttermscode").contact_contact_paymenttermscode | null;
  // Preferred Day contact_contact_preferredappointmentdaycode Select the preferred day of the week for service appointments.
  preferredappointmentdaycode?: import("../enums/contact_contact_preferredappointmentdaycode").contact_contact_preferredappointmentdaycode | null;
  // Preferred Time contact_contact_preferredappointmenttimecode Select the preferred time of day for service appointments.
  preferredappointmenttimecode?: import("../enums/contact_contact_preferredappointmenttimecode").contact_contact_preferredappointmenttimecode | null;
  // Preferred Method of Contact contact_contact_preferredcontactmethodcode Select the preferred method of contact.
  preferredcontactmethodcode?: import("../enums/contact_contact_preferredcontactmethodcode").contact_contact_preferredcontactmethodcode | null;
  // Preferred Facility/Equipment LookupType Choose the contact's preferred service facility or equipment to make sure services are scheduled correctly for the customer.
  preferredequipmentid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  preferredequipmentidname?: string | null;
  // Preferred Service LookupType Choose the contact's preferred service to make sure services are scheduled correctly for the customer.
  preferredserviceid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  preferredserviceidname?: string | null;
  // Preferred User LookupType Choose the regular or preferred customer service representative for reference when scheduling service activities for the contact.
  preferredsystemuserid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  preferredsystemuseridname?: string | null;
  //  StringType
  preferredsystemuseridyominame?: string | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("../../types/Guid").Guid | null;
  // Salutation StringType Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns.
  salutation?: string | null;
  // Shipping Method contact_contact_shippingmethodcode Select a shipping method for deliveries sent to this address.
  shippingmethodcode?: import("../enums/contact_contact_shippingmethodcode").contact_contact_shippingmethodcode | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Contact record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // Spouse/Partner Name StringType Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact.
  spousesname?: string | null;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("../../types/Guid").Guid | null;
  // Status contact_contact_statecode Shows whether the contact is active or inactive. Inactive contacts are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/contact_contact_statecode").contact_contact_statecode | null;
  // Status Reason contact_contact_statuscode Select the contact's status.
  statuscode?: import("../enums/contact_contact_statuscode").contact_contact_statuscode | null;
  // Subscription UniqueidentifierType For internal use only.
  subscriptionid?: import("../../types/Guid").Guid | null;
  // Suffix StringType Type the suffix used in the contact's name, such as Jr. or Sr. to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
  suffix?: string | null;
  // TeamsFollowed IntegerType Number of users or conversations followed the record
  teamsfollowed?: number | null;
  // Business Phone StringType Type the main phone number for this contact.
  telephone1?: string | null;
  // Home Phone StringType Type a second phone number for this contact.
  telephone2?: string | null;
  // Telephone 3 StringType Type a third phone number for this contact.
  telephone3?: string | null;
  // Territory contact_contact_territorycode Select a region or territory for the contact for use in segmentation and analysis.
  territorycode?: import("../enums/contact_contact_territorycode").contact_contact_territorycode | null;
  // Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to the contact record.
  timespentbymeonemailandmeetings?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version number of the contact.
  versionnumber?: number | null;
  // Website StringType Type the contact's professional or personal website or blog URL.
  websiteurl?: string | null;
  // Yomi First Name StringType Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact.
  yomifirstname?: string | null;
  // Yomi Full Name StringType Shows the combined Yomi first and last names of the contact so that the full phonetic name can be displayed in views and reports.
  yomifullname?: string | null;
  // Yomi Last Name StringType Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact.
  yomilastname?: string | null;
  // Yomi Middle Name StringType Type the phonetic spelling of the contact's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact.
  yomimiddlename?: string | null;
}

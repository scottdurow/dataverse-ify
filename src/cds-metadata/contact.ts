/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable camelcase */

import { IEntity } from "../types/IEntity";
import { EntityReference } from "../types/EntityReference";
import { Guid } from "../types/Guid";

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
    adx_identity_accessfailedcount: "Integer",
    adx_timezone: "Integer",
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
    adx_identity_lastsuccessfullogin: "DateAndTime:UserLocal",
    adx_identity_lockoutenddate: "DateAndTime:UserLocal",
    adx_profilealertdate: "DateAndTime:UserLocal",
    adx_profilelastactivity: "DateAndTime:UserLocal",
    adx_profilemodifiedon: "DateAndTime:UserLocal",
    anniversary: "DateOnly:DateOnly",
    birthdate: "DateOnly:DateOnly",
    createdon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    lastusedincampaign: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    msdyn_portaltermsagreementdate: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    adx_preferredlanguageid: ["adx_portallanguage"],
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    defaultpricelevelid: ["pricelevel"],
    masterid: ["contact"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    msa_managingpartnerid: ["account"],
    msdyn_contactkpiid: ["msdyn_contactkpiitem"],
    originatingleadid: ["lead"],
    ownerid: ["principal"],
    owningbusinessunit: ["businessunit"],
    owningteam: ["team"],
    owninguser: ["systemuser"],
    preferredequipmentid: ["equipment"],
    preferredserviceid: ["service"],
    preferredsystemuserid: ["systemuser"],
    sla_contact_sla: ["sla"],
    stageid_processstage: ["processstage"],
    transactioncurrencyid: ["transactioncurrency"],
    parentcustomerid: ["account", "contact"],
    slainvokedid: ["sla"],
  },
};

/* eslint-disable @typescript-eslint/camelcase */
export enum ContactAttributes {
  AccountId = "accountid",
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
  Adx_CreatedByIPAddress = "adx_createdbyipaddress",
  Adx_CreatedByUsername = "adx_createdbyusername",
  adx_identity_accessfailedcount = "adx_identity_accessfailedcount",
  adx_identity_emailaddress1confirmed = "adx_identity_emailaddress1confirmed",
  adx_identity_lastsuccessfullogin = "adx_identity_lastsuccessfullogin",
  adx_identity_locallogindisabled = "adx_identity_locallogindisabled",
  adx_identity_lockoutenabled = "adx_identity_lockoutenabled",
  adx_identity_lockoutenddate = "adx_identity_lockoutenddate",
  adx_identity_logonenabled = "adx_identity_logonenabled",
  adx_identity_mobilephoneconfirmed = "adx_identity_mobilephoneconfirmed",
  adx_identity_passwordhash = "adx_identity_passwordhash",
  adx_identity_securitystamp = "adx_identity_securitystamp",
  adx_identity_twofactorenabled = "adx_identity_twofactorenabled",
  adx_identity_username = "adx_identity_username",
  Adx_ModifiedByIPAddress = "adx_modifiedbyipaddress",
  Adx_ModifiedByUsername = "adx_modifiedbyusername",
  Adx_OrganizationName = "adx_organizationname",
  adx_preferredlanguageid = "adx_preferredlanguageid",
  adx_profilealert = "adx_profilealert",
  adx_profilealertdate = "adx_profilealertdate",
  adx_profilealertinstructions = "adx_profilealertinstructions",
  Adx_ProfileIsAnonymous = "adx_profileisanonymous",
  Adx_ProfileLastActivity = "adx_profilelastactivity",
  adx_profilemodifiedon = "adx_profilemodifiedon",
  adx_PublicProfileCopy = "adx_publicprofilecopy",
  Adx_TimeZone = "adx_timezone",
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
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreditLimit = "creditlimit",
  CreditLimit_Base = "creditlimit_base",
  CreditOnHold = "creditonhold",
  CustomerSizeCode = "customersizecode",
  CustomerTypeCode = "customertypecode",
  DefaultPriceLevelId = "defaultpricelevelid",
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
  MasterId = "masterid",
  Merged = "merged",
  MiddleName = "middlename",
  MobilePhone = "mobilephone",
  ModifiedBy = "modifiedby",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  msa_managingpartnerid = "msa_managingpartnerid",
  msdyn_contactkpiid = "msdyn_contactkpiid",
  msdyn_disablewebtracking = "msdyn_disablewebtracking",
  msdyn_gdproptout = "msdyn_gdproptout",
  msdyn_isminor = "msdyn_isminor",
  msdyn_isminorwithparentalconsent = "msdyn_isminorwithparentalconsent",
  msdyn_orgchangestatus = "msdyn_orgchangestatus",
  msdyn_portaltermsagreementdate = "msdyn_portaltermsagreementdate",
  NickName = "nickname",
  NumberOfChildren = "numberofchildren",
  OnHoldTime = "onholdtime",
  OriginatingLeadId = "originatingleadid",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwningBusinessUnit = "owningbusinessunit",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  Pager = "pager",
  ParentContactId = "parentcontactid",
  ParentCustomerId = "parentcustomerid",
  ParticipatesInWorkflow = "participatesinworkflow",
  PaymentTermsCode = "paymenttermscode",
  PreferredAppointmentDayCode = "preferredappointmentdaycode",
  PreferredAppointmentTimeCode = "preferredappointmenttimecode",
  PreferredContactMethodCode = "preferredcontactmethodcode",
  PreferredEquipmentId = "preferredequipmentid",
  PreferredServiceId = "preferredserviceid",
  PreferredSystemUserId = "preferredsystemuserid",
  ProcessId = "processid",
  Salutation = "salutation",
  ShippingMethodCode = "shippingmethodcode",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
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
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  WebSiteUrl = "websiteurl",
  YomiFirstName = "yomifirstname",
  YomiFullName = "yomifullname",
  YomiLastName = "yomilastname",
  YomiMiddleName = "yomimiddlename",
}
export enum connectionrole_connectionrole_statuscode {
  Active = 1,
  Inactive = 2,
}

export enum contact_contact_accountrolecode {
  Decision_Maker = 1,
  Employee = 2,
  Influencer = 3,
}

export enum contact_contact_address1_addresstypecode {
  Bill_To = 1,
  Ship_To = 2,
  Primary = 3,
  Other = 4,
}

export enum contact_contact_address1_freighttermscode {
  FOB = 1,
  No_Charge = 2,
}

export enum contact_contact_address1_shippingmethodcode {
  Airborne = 1,
  DHL = 2,
  FedEx = 3,
  UPS = 4,
  Postal_Mail = 5,
  Full_Load = 6,
  Will_Call = 7,
}

export enum contact_contact_address2_addresstypecode {
  Default_Value = 1,
}

export enum contact_contact_address2_freighttermscode {
  Default_Value = 1,
}

export enum contact_contact_address2_shippingmethodcode {
  Default_Value = 1,
}

export enum contact_contact_address3_addresstypecode {
  Default_Value = 1,
}

export enum contact_contact_address3_freighttermscode {
  Default_Value = 1,
}

export enum contact_contact_address3_shippingmethodcode {
  Default_Value = 1,
}

export enum contact_contact_customersizecode {
  Default_Value = 1,
}

export enum contact_contact_customertypecode {
  Default_Value = 1,
}

export enum contact_contact_educationcode {
  Default_Value = 1,
}

export enum contact_contact_familystatuscode {
  Single = 1,
  Married = 2,
  Divorced = 3,
  Widowed = 4,
}

export enum contact_contact_gendercode {
  Male = 1,
  Female = 2,
}

export enum contact_contact_haschildrencode {
  Default_Value = 1,
}

export enum contact_contact_leadsourcecode {
  Default_Value = 1,
}

export enum contact_contact_msdyn_orgchangestatus {
  No_Feedback = 0,
  Not_at_Company = 1,
  Ignore = 2,
}

export enum contact_contact_paymenttermscode {
  Net_30 = 1,
  _2_10_Net_30 = 2,
  Net_45 = 3,
  Net_60 = 4,
}

export enum contact_contact_preferredappointmentdaycode {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export enum contact_contact_preferredappointmenttimecode {
  Morning = 1,
  Afternoon = 2,
  Evening = 3,
}

export enum contact_contact_preferredcontactmethodcode {
  Any = 1,
  Email = 2,
  Phone = 3,
  Fax = 4,
  Mail = 5,
}

export enum contact_contact_shippingmethodcode {
  Default_Value = 1,
}

export enum contact_contact_statecode {
  Active = 0,
  Inactive = 1,
}

export enum contact_contact_statuscode {
  Active = 1,
  Inactive = 2,
}

export enum contact_contact_territorycode {
  Default_Value = 1,
}

export interface Contact extends IEntity {
  /**Account	LookupType
	Unique identifier of the account with which the contact is associated.
	*/
  accountid?: EntityReference;
  /**Role	contact_contact_accountrolecode
	Select the contact's role within the company or sales process, such as decision maker, employee, or influencer.
	*/
  accountrolecode?: contact_contact_accountrolecode;
  /**Address 1: ID	UniqueidentifierType
	Unique identifier for address 1.
	*/
  address1_addressid?: Guid;
  /**Address 1: Address Type	contact_contact_address1_addresstypecode
	Select the primary address type.
	*/
  address1_addresstypecode?: contact_contact_address1_addresstypecode;
  /**Address 1: City	StringType
	Type the city for the primary address.
	*/
  address1_city?: string;
  /**Address 1	MemoType
	Shows the complete primary address.
	*/
  address1_composite?: string;
  /**Address 1: Country/Region	StringType
	Type the country or region for the primary address.
	*/
  address1_country?: string;
  /**Address 1: County	StringType
	Type the county for the primary address.
	*/
  address1_county?: string;
  /**Address 1: Fax	StringType
	Type the fax number associated with the primary address.
	*/
  address1_fax?: string;
  /**Address 1: Freight Terms	contact_contact_address1_freighttermscode
	Select the freight terms for the primary address to make sure shipping orders are processed correctly.
	*/
  address1_freighttermscode?: contact_contact_address1_freighttermscode;
  /**Address 1: Latitude	DoubleType
	Type the latitude value for the primary address for use in mapping and other applications.
	*/
  address1_latitude?: number;
  /**Address 1: Street 1	StringType
	Type the first line of the primary address.
	*/
  address1_line1?: string;
  /**Address 1: Street 2	StringType
	Type the second line of the primary address.
	*/
  address1_line2?: string;
  /**Address 1: Street 3	StringType
	Type the third line of the primary address.
	*/
  address1_line3?: string;
  /**Address 1: Longitude	DoubleType
	Type the longitude value for the primary address for use in mapping and other applications.
	*/
  address1_longitude?: number;
  /**Address 1: Name	StringType
	Type a descriptive name for the primary address, such as Corporate Headquarters.
	*/
  address1_name?: string;
  /**Address 1: ZIP/Postal Code	StringType
	Type the ZIP Code or postal code for the primary address.
	*/
  address1_postalcode?: string;
  /**Address 1: Post Office Box	StringType
	Type the post office box number of the primary address.
	*/
  address1_postofficebox?: string;
  /**Address 1: Primary Contact Name	StringType
	Type the name of the main contact at the account's primary address.
	*/
  address1_primarycontactname?: string;
  /**Address 1: Shipping Method	contact_contact_address1_shippingmethodcode
	Select a shipping method for deliveries sent to this address.
	*/
  address1_shippingmethodcode?: contact_contact_address1_shippingmethodcode;
  /**Address 1: State/Province	StringType
	Type the state or province of the primary address.
	*/
  address1_stateorprovince?: string;
  /**Address 1: Phone	StringType
	Type the main phone number associated with the primary address.
	*/
  address1_telephone1?: string;
  /**Address 1: Telephone 2	StringType
	Type a second phone number associated with the primary address.
	*/
  address1_telephone2?: string;
  /**Address 1: Telephone 3	StringType
	Type a third phone number associated with the primary address.
	*/
  address1_telephone3?: string;
  /**Address 1: UPS Zone	StringType
	Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
	*/
  address1_upszone?: string;
  /**Address 1: UTC Offset	IntegerType
	Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
	*/
  address1_utcoffset?: number;
  /**Address 2: ID	UniqueidentifierType
	Unique identifier for address 2.
	*/
  address2_addressid?: Guid;
  /**Address 2: Address Type	contact_contact_address2_addresstypecode
	Select the secondary address type.
	*/
  address2_addresstypecode?: contact_contact_address2_addresstypecode;
  /**Address 2: City	StringType
	Type the city for the secondary address.
	*/
  address2_city?: string;
  /**Address 2	MemoType
	Shows the complete secondary address.
	*/
  address2_composite?: string;
  /**Address 2: Country/Region	StringType
	Type the country or region for the secondary address.
	*/
  address2_country?: string;
  /**Address 2: County	StringType
	Type the county for the secondary address.
	*/
  address2_county?: string;
  /**Address 2: Fax	StringType
	Type the fax number associated with the secondary address.
	*/
  address2_fax?: string;
  /**Address 2: Freight Terms	contact_contact_address2_freighttermscode
	Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
	*/
  address2_freighttermscode?: contact_contact_address2_freighttermscode;
  /**Address 2: Latitude	DoubleType
	Type the latitude value for the secondary address for use in mapping and other applications.
	*/
  address2_latitude?: number;
  /**Address 2: Street 1	StringType
	Type the first line of the secondary address.
	*/
  address2_line1?: string;
  /**Address 2: Street 2	StringType
	Type the second line of the secondary address.
	*/
  address2_line2?: string;
  /**Address 2: Street 3	StringType
	Type the third line of the secondary address.
	*/
  address2_line3?: string;
  /**Address 2: Longitude	DoubleType
	Type the longitude value for the secondary address for use in mapping and other applications.
	*/
  address2_longitude?: number;
  /**Address 2: Name	StringType
	Type a descriptive name for the secondary address, such as Corporate Headquarters.
	*/
  address2_name?: string;
  /**Address 2: ZIP/Postal Code	StringType
	Type the ZIP Code or postal code for the secondary address.
	*/
  address2_postalcode?: string;
  /**Address 2: Post Office Box	StringType
	Type the post office box number of the secondary address.
	*/
  address2_postofficebox?: string;
  /**Address 2: Primary Contact Name	StringType
	Type the name of the main contact at the account's secondary address.
	*/
  address2_primarycontactname?: string;
  /**Address 2: Shipping Method	contact_contact_address2_shippingmethodcode
	Select a shipping method for deliveries sent to this address.
	*/
  address2_shippingmethodcode?: contact_contact_address2_shippingmethodcode;
  /**Address 2: State/Province	StringType
	Type the state or province of the secondary address.
	*/
  address2_stateorprovince?: string;
  /**Address 2: Telephone 1	StringType
	Type the main phone number associated with the secondary address.
	*/
  address2_telephone1?: string;
  /**Address 2: Telephone 2	StringType
	Type a second phone number associated with the secondary address.
	*/
  address2_telephone2?: string;
  /**Address 2: Telephone 3	StringType
	Type a third phone number associated with the secondary address.
	*/
  address2_telephone3?: string;
  /**Address 2: UPS Zone	StringType
	Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
	*/
  address2_upszone?: string;
  /**Address 2: UTC Offset	IntegerType
	Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
	*/
  address2_utcoffset?: number;
  /**Address 3: ID	UniqueidentifierType
	Unique identifier for address 3.
	*/
  address3_addressid?: Guid;
  /**Address 3: Address Type	contact_contact_address3_addresstypecode
	Select the third address type.
	*/
  address3_addresstypecode?: contact_contact_address3_addresstypecode;
  /**Address 3: City	StringType
	Type the city for the 3rd address.
	*/
  address3_city?: string;
  /**Address 3	MemoType
	Shows the complete third address.
	*/
  address3_composite?: string;
  /**Address3: Country/Region	StringType
	the country or region for the 3rd address.
	*/
  address3_country?: string;
  /**Address 3: County	StringType
	Type the county for the third address.
	*/
  address3_county?: string;
  /**Address 3: Fax	StringType
	Type the fax number associated with the third address.
	*/
  address3_fax?: string;
  /**Address 3: Freight Terms	contact_contact_address3_freighttermscode
	Select the freight terms for the third address to make sure shipping orders are processed correctly.
	*/
  address3_freighttermscode?: contact_contact_address3_freighttermscode;
  /**Address 3: Latitude	DoubleType
	Type the latitude value for the third address for use in mapping and other applications.
	*/
  address3_latitude?: number;
  /**Address3: Street 1	StringType
	the first line of the 3rd address.
	*/
  address3_line1?: string;
  /**Address3: Street 2	StringType
	the second line of the 3rd address.
	*/
  address3_line2?: string;
  /**Address3: Street 3	StringType
	the third line of the 3rd address.
	*/
  address3_line3?: string;
  /**Address 3: Longitude	DoubleType
	Type the longitude value for the third address for use in mapping and other applications.
	*/
  address3_longitude?: number;
  /**Address 3: Name	StringType
	Type a descriptive name for the third address, such as Corporate Headquarters.
	*/
  address3_name?: string;
  /**Address3: ZIP/Postal Code	StringType
	the ZIP Code or postal code for the 3rd address.
	*/
  address3_postalcode?: string;
  /**Address 3: Post Office Box	StringType
	the post office box number of the 3rd address.
	*/
  address3_postofficebox?: string;
  /**Address 3: Primary Contact Name	StringType
	Type the name of the main contact at the account's third address.
	*/
  address3_primarycontactname?: string;
  /**Address 3: Shipping Method	contact_contact_address3_shippingmethodcode
	Select a shipping method for deliveries sent to this address.
	*/
  address3_shippingmethodcode?: contact_contact_address3_shippingmethodcode;
  /**Address3: State/Province	StringType
	the state or province of the third address.
	*/
  address3_stateorprovince?: string;
  /**Address 3: Telephone1	StringType
	Type the main phone number associated with the third address.
	*/
  address3_telephone1?: string;
  /**Address 3: Telephone2	StringType
	Type a second phone number associated with the third address.
	*/
  address3_telephone2?: string;
  /**Address 3: Telephone3	StringType
	Type a third phone number associated with the primary address.
	*/
  address3_telephone3?: string;
  /**Address 3: UPS Zone	StringType
	Type the UPS zone of the third address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
	*/
  address3_upszone?: string;
  /**Address 3: UTC Offset	IntegerType
	Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
	*/
  address3_utcoffset?: number;
  /**Created By IP Address	StringType
	
	*/
  adx_createdbyipaddress?: string;
  /**Created By Username	StringType
	
	*/
  adx_createdbyusername?: string;
  /**Access Failed Count	IntegerType
	Shows the current count of failed password attempts for the contact.
	*/
  adx_identity_accessfailedcount?: number;
  /**Email Confirmed	BooleanType
	Determines if the email is confirmed by the contact.
	*/
  adx_identity_emailaddress1confirmed?: boolean;
  /**Last Successful Login	DateTimeType
	Indicates the last date and time the user successfully signed in to a portal.
	DateAndTime:UserLocal*/
  adx_identity_lastsuccessfullogin?: Date;
  /**Local Login Disabled	BooleanType
	Indicates that the contact can no longer sign in to the portal using the local account.
	*/
  adx_identity_locallogindisabled?: boolean;
  /**Lockout Enabled	BooleanType
	Determines if this contact will track failed access attempts and become locked after too many failed attempts. To prevent the contact from becoming locked, you can disable this setting.
	*/
  adx_identity_lockoutenabled?: boolean;
  /**Lockout End Date	DateTimeType
	Shows the moment in time when the locked contact becomes unlocked again.
	DateAndTime:UserLocal*/
  adx_identity_lockoutenddate?: Date;
  /**Login Enabled	BooleanType
	Determines if web authentication is enabled for the contact.
	*/
  adx_identity_logonenabled?: boolean;
  /**Mobile Phone Confirmed	BooleanType
	Determines if the phone number is confirmed by the contact.
	*/
  adx_identity_mobilephoneconfirmed?: boolean;
  /**Password Hash	StringType
	
	*/
  adx_identity_passwordhash?: string;
  /**Security Stamp	StringType
	A token used to manage the web authentication session.
	*/
  adx_identity_securitystamp?: string;
  /**Two Factor Enabled	BooleanType
	Determines if two-factor authentication is enabled for the contact.
	*/
  adx_identity_twofactorenabled?: boolean;
  /**User Name	StringType
	Shows the user identity for local web authentication.
	*/
  adx_identity_username?: string;
  /**Modified By IP Address	StringType
	
	*/
  adx_modifiedbyipaddress?: string;
  /**Modified By Username	StringType
	
	*/
  adx_modifiedbyusername?: string;
  /**Organization Name	StringType
	
	*/
  adx_organizationname?: string;
  /**Preferred Language	LookupType
	User’s preferred portal language
	*/
  adx_preferredlanguageid?: EntityReference;
  /**Profile Alert	BooleanType
	
	*/
  adx_profilealert?: boolean;
  /**Profile Alert Date	DateTimeType
	
	DateAndTime:UserLocal*/
  adx_profilealertdate?: Date;
  /**Profile Alert Instructions	MemoType
	
	*/
  adx_profilealertinstructions?: string;
  /**Profile Is Anonymous	BooleanType
	
	*/
  adx_profileisanonymous?: boolean;
  /**Profile Last Activity	DateTimeType
	
	DateAndTime:UserLocal*/
  adx_profilelastactivity?: Date;
  /**Profile Modified On	DateTimeType
	
	DateAndTime:UserLocal*/
  adx_profilemodifiedon?: Date;
  /**Public Profile Copy	MemoType
	
	*/
  adx_publicprofilecopy?: string;
  /**Time Zone	IntegerType
	
	*/
  adx_timezone?: number;
  /**Aging 30	MoneyType
	For system use only.
	*/
  aging30?: number;
  /**Aging 30 (Base)	MoneyType
	Shows the Aging 30 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
	*/
  aging30_base?: number;
  /**Aging 60	MoneyType
	For system use only.
	*/
  aging60?: number;
  /**Aging 60 (Base)	MoneyType
	Shows the Aging 60 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
	*/
  aging60_base?: number;
  /**Aging 90	MoneyType
	For system use only.
	*/
  aging90?: number;
  /**Aging 90 (Base)	MoneyType
	Shows the Aging 90 field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
	*/
  aging90_base?: number;
  /**Anniversary	DateTimeType
	Enter the date of the contact's wedding or service anniversary for use in customer gift programs or other communications.
	DateOnly:DateOnly*/
  anniversary?: Date;
  /**Annual Income	MoneyType
	Type the contact's annual income for use in profiling and financial analysis.
	*/
  annualincome?: number;
  /**Annual Income (Base)	MoneyType
	Shows the Annual Income field converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
	*/
  annualincome_base?: number;
  /**Assistant	StringType
	Type the name of the contact's assistant.
	*/
  assistantname?: string;
  /**Assistant Phone	StringType
	Type the phone number for the contact's assistant.
	*/
  assistantphone?: string;
  /**Birthday	DateTimeType
	Enter the contact's birthday for use in customer gift programs or other communications.
	DateOnly:DateOnly*/
  birthdate?: Date;
  /**Business Phone 2	StringType
	Type a second business phone number for this contact.
	*/
  business2?: string;
  /**Business Card	MemoType
	Stores Image of the Business Card
	*/
  businesscard?: string;
  /**BusinessCardAttributes	StringType
	Stores Business Card Control Properties.
	*/
  businesscardattributes?: string;
  /**Callback Number	StringType
	Type a callback phone number for this contact.
	*/
  callback?: string;
  /**Children's Names	StringType
	Type the names of the contact's children for reference in communications and client programs.
	*/
  childrensnames?: string;
  /**Company Phone	StringType
	Type the company phone of the contact.
	*/
  company?: string;
  /**Contact	UniqueidentifierType
	Unique identifier of the contact.
	*/
  contactid?: Guid;
  /**Created By	LookupType
	Shows who created the record.
	*/
  createdby?: EntityReference;
  /**Created By (External Party)	LookupType
	Shows the external party who created the record.
	*/
  createdbyexternalparty?: EntityReference;
  /**Created On	DateTimeType
	Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
	DateAndTime:UserLocal*/
  createdon?: Date;
  /**Created By (Delegate)	LookupType
	Shows who created the record on behalf of another user.
	*/
  createdonbehalfby?: EntityReference;
  /**Credit Limit	MoneyType
	Type the credit limit of the contact for reference when you address invoice and accounting issues with the customer.
	*/
  creditlimit?: number;
  /**Credit Limit (Base)	MoneyType
	Shows the Credit Limit field converted to the system's default base currency for reporting purposes. The calculations use the exchange rate specified in the Currencies area.
	*/
  creditlimit_base?: number;
  /**Credit Hold	BooleanType
	Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues.
	*/
  creditonhold?: boolean;
  /**Customer Size	contact_contact_customersizecode
	Select the size of the contact's company for segmentation and reporting purposes.
	*/
  customersizecode?: contact_contact_customersizecode;
  /**Relationship Type	contact_contact_customertypecode
	Select the category that best describes the relationship between the contact and your organization.
	*/
  customertypecode?: contact_contact_customertypecode;
  /**Price List	LookupType
	Choose the default price list associated with the contact to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders.
	*/
  defaultpricelevelid?: EntityReference;
  /**Department	StringType
	Type the department or business unit where the contact works in the parent company or business.
	*/
  department?: string;
  /**Description	MemoType
	Type additional information to describe the contact, such as an excerpt from the company's website.
	*/
  description?: string;
  /**Do not allow Bulk Emails	BooleanType
	Select whether the contact accepts bulk email sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the email.
	*/
  donotbulkemail?: boolean;
  /**Do not allow Bulk Mails	BooleanType
	Select whether the contact accepts bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the contact can be added to marketing lists, but will be excluded from the letters.
	*/
  donotbulkpostalmail?: boolean;
  /**Do not allow Emails	BooleanType
	Select whether the contact allows direct email sent from Microsoft Dynamics 365. If Do Not Allow is selected, Microsoft Dynamics 365 will not send the email.
	*/
  donotemail?: boolean;
  /**Do not allow Faxes	BooleanType
	Select whether the contact allows faxes. If Do Not Allow is selected, the contact will be excluded from any fax activities distributed in marketing campaigns.
	*/
  donotfax?: boolean;
  /**Do not allow Phone Calls	BooleanType
	Select whether the contact accepts phone calls. If Do Not Allow is selected, the contact will be excluded from any phone call activities distributed in marketing campaigns.
	*/
  donotphone?: boolean;
  /**Do not allow Mails	BooleanType
	Select whether the contact allows direct mail. If Do Not Allow is selected, the contact will be excluded from letter activities distributed in marketing campaigns.
	*/
  donotpostalmail?: boolean;
  /**Send Marketing Materials	BooleanType
	Select whether the contact accepts marketing materials, such as brochures or catalogs. Contacts that opt out can be excluded from marketing initiatives.
	*/
  donotsendmm?: boolean;
  /**Education	contact_contact_educationcode
	Select the contact's highest level of education for use in segmentation and analysis.
	*/
  educationcode?: contact_contact_educationcode;
  /**Email	StringType
	Type the primary email address for the contact.
	*/
  emailaddress1?: string;
  /**Email Address 2	StringType
	Type the secondary email address for the contact.
	*/
  emailaddress2?: string;
  /**Email Address 3	StringType
	Type an alternate email address for the contact.
	*/
  emailaddress3?: string;
  /**Employee	StringType
	Type the employee ID or number for the contact for reference in orders, service cases, or other communications with the contact's organization.
	*/
  employeeid?: string;
  /**Entity Image Id	UniqueidentifierType
	For internal use only.
	*/
  entityimageid?: Guid;
  /**Exchange Rate	DecimalType
	Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
	*/
  exchangerate?: number;
  /**External User Identifier	StringType
	Identifier for an external user.
	*/
  externaluseridentifier?: string;
  /**Marital Status	contact_contact_familystatuscode
	Select the marital status of the contact for reference in follow-up phone calls and other communications.
	*/
  familystatuscode?: contact_contact_familystatuscode;
  /**Fax	StringType
	Type the fax number for the contact.
	*/
  fax?: string;
  /**First Name	StringType
	Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
	*/
  firstname?: string;
  /**Follow Email Activity	BooleanType
	Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the contact.
	*/
  followemail?: boolean;
  /**FTP Site	StringType
	Type the URL for the contact's FTP site to enable users to access data and share documents.
	*/
  ftpsiteurl?: string;
  /**Full Name	StringType
	Combines and shows the contact's first and last names so that the full name can be displayed in views and reports.
	*/
  fullname?: string;
  /**Gender	contact_contact_gendercode
	Select the contact's gender to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
	*/
  gendercode?: contact_contact_gendercode;
  /**Government	StringType
	Type the passport number or other government ID for the contact for use in documents or reports.
	*/
  governmentid?: string;
  /**Has Children	contact_contact_haschildrencode
	Select whether the contact has any children for reference in follow-up phone calls and other communications.
	*/
  haschildrencode?: contact_contact_haschildrencode;
  /**Home Phone 2	StringType
	Type a second home phone number for this contact.
	*/
  home2?: string;
  /**Import Sequence Number	IntegerType
	Unique identifier of the data import or data migration that created this record.
	*/
  importsequencenumber?: number;
  /**Auto-created	BooleanType
	Information about whether the contact was auto-created when promoting an email or an appointment.
	*/
  isautocreate?: boolean;
  /**Back Office Customer	BooleanType
	Select whether the contact exists in a separate accounting or other system, such as Microsoft Dynamics GP or another ERP database, for use in integration processes.
	*/
  isbackofficecustomer?: boolean;
  /**	BooleanType
	
	*/
  isprivate?: boolean;
  /**Job Title	StringType
	Type the job title of the contact to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
	*/
  jobtitle?: string;
  /**Last Name(Required)	StringType
	Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
	*/
  lastname?: string;
  /**Last On Hold Time	DateTimeType
	Contains the date and time stamp of the last on hold time.
	DateAndTime:UserLocal*/
  lastonholdtime?: Date;
  /**Last Date Included in Campaign	DateTimeType
	Shows the date when the contact was last included in a marketing campaign or quick campaign.
	DateOnly:UserLocal*/
  lastusedincampaign?: Date;
  /**Lead Source	contact_contact_leadsourcecode
	Select the primary marketing source that directed the contact to your organization.
	*/
  leadsourcecode?: contact_contact_leadsourcecode;
  /**Manager	StringType
	Type the name of the contact's manager for use in escalating issues or other follow-up communications with the contact.
	*/
  managername?: string;
  /**Manager Phone	StringType
	Type the phone number for the contact's manager.
	*/
  managerphone?: string;
  /**Marketing Only	BooleanType
	Whether is only for marketing
	*/
  marketingonly?: boolean;
  /**Master ID	LookupType
	Unique identifier of the master contact for merge.
	*/
  masterid?: EntityReference;
  /**Merged	BooleanType
	Shows whether the account has been merged with a master contact.
	*/
  merged?: boolean;
  /**Middle Name	StringType
	Type the contact's middle name or initial to make sure the contact is addressed correctly.
	*/
  middlename?: string;
  /**Mobile Phone	StringType
	Type the mobile phone number for the contact.
	*/
  mobilephone?: string;
  /**Modified By	LookupType
	Shows who last updated the record.
	*/
  modifiedby?: EntityReference;
  /**Modified By (External Party)	LookupType
	Shows the external party who modified the record.
	*/
  modifiedbyexternalparty?: EntityReference;
  /**Modified On	DateTimeType
	Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options.
	DateAndTime:UserLocal*/
  modifiedon?: Date;
  /**Modified By (Delegate)	LookupType
	Shows who last updated the record on behalf of another user.
	*/
  modifiedonbehalfby?: EntityReference;
  /**Managing Partner	LookupType
	Unique identifier for Account associated with Contact.
	*/
  msa_managingpartnerid?: EntityReference;
  /**KPI	LookupType
	Maps to contact KPI records
	*/
  msdyn_contactkpiid?: EntityReference;
  /**Disable Web Tracking	BooleanType
	Indicates that the contact has opted out of web tracking.
	*/
  msdyn_disablewebtracking?: boolean;
  /**GDPR Optout	BooleanType
	Describes whether contact is opted out or not
	*/
  msdyn_gdproptout?: boolean;
  /**Is Minor	BooleanType
	Indicates that the contact is considered a minor in their jurisdiction.
	*/
  msdyn_isminor?: boolean;
  /**Is Minor with Parental Consent	BooleanType
	Indicates that the contact is considered a minor in their jurisdiction and has parental consent.
	*/
  msdyn_isminorwithparentalconsent?: boolean;
  /**Not at Company Flag	contact_contact_msdyn_orgchangestatus
	Whether or not the contact belongs to the associated account
	*/
  msdyn_orgchangestatus?: contact_contact_msdyn_orgchangestatus;
  /**Portal Terms Agreement Date	DateTimeType
	Indicates the date and time that the person agreed to the portal terms and conditions.
	DateAndTime:UserLocal*/
  msdyn_portaltermsagreementdate?: Date;
  /**Nickname	StringType
	Type the contact's nickname.
	*/
  nickname?: string;
  /**No. of Children	IntegerType
	Type the number of children the contact has for reference in follow-up phone calls and other communications.
	*/
  numberofchildren?: number;
  /**On Hold Time (Minutes)	IntegerType
	Shows how long, in minutes, that the record was on hold.
	*/
  onholdtime?: number;
  /**Originating Lead	LookupType
	Shows the lead that the contact was created if the contact was created by converting a lead in Microsoft Dynamics 365. This is used to relate the contact to the data on the originating lead for use in reporting and analytics.
	*/
  originatingleadid?: EntityReference;
  /**Record Created On	DateTimeType
	Date and time that the record was migrated.
	DateOnly:UserLocal*/
  overriddencreatedon?: Date;
  /**Owner	OwnerType
	Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
	*/
  ownerid?: EntityReference;
  /**Owning Business Unit	LookupType
	Unique identifier of the business unit that owns the contact.
	*/
  owningbusinessunit?: EntityReference;
  /**Owning Team	LookupType
	Unique identifier of the team who owns the contact.
	*/
  owningteam?: EntityReference;
  /**Owning User	LookupType
	Unique identifier of the user who owns the contact.
	*/
  owninguser?: EntityReference;
  /**Pager	StringType
	Type the pager number for the contact.
	*/
  pager?: string;
  /**Parent Contact	LookupType
	Unique identifier of the parent contact.
	*/
  parentcontactid?: EntityReference;
  /**Company Name	CustomerType
	Select the parent account or parent contact for the contact to provide a quick link to additional details, such as financial information, activities, and opportunities.
	*/
  parentcustomerid?: EntityReference;
  /**Participates in Workflow	BooleanType
	Shows whether the contact participates in workflow rules.
	*/
  participatesinworkflow?: boolean;
  /**Payment Terms	contact_contact_paymenttermscode
	Select the payment terms to indicate when the customer needs to pay the total amount.
	*/
  paymenttermscode?: contact_contact_paymenttermscode;
  /**Preferred Day	contact_contact_preferredappointmentdaycode
	Select the preferred day of the week for service appointments.
	*/
  preferredappointmentdaycode?: contact_contact_preferredappointmentdaycode;
  /**Preferred Time	contact_contact_preferredappointmenttimecode
	Select the preferred time of day for service appointments.
	*/
  preferredappointmenttimecode?: contact_contact_preferredappointmenttimecode;
  /**Preferred Method of Contact	contact_contact_preferredcontactmethodcode
	Select the preferred method of contact.
	*/
  preferredcontactmethodcode?: contact_contact_preferredcontactmethodcode;
  /**Preferred Facility/Equipment	LookupType
	Choose the contact's preferred service facility or equipment to make sure services are scheduled correctly for the customer.
	*/
  preferredequipmentid?: EntityReference;
  /**Preferred Service	LookupType
	Choose the contact's preferred service to make sure services are scheduled correctly for the customer.
	*/
  preferredserviceid?: EntityReference;
  /**Preferred User	LookupType
	Choose the regular or preferred customer service representative for reference when scheduling service activities for the contact.
	*/
  preferredsystemuserid?: EntityReference;
  /**Process	UniqueidentifierType
	Shows the ID of the process.
	*/
  processid?: Guid;
  /**Salutation	StringType
	Type the salutation of the contact to make sure the contact is addressed correctly in sales calls, email messages, and marketing campaigns.
	*/
  salutation?: string;
  /**Shipping Method	contact_contact_shippingmethodcode
	Select a shipping method for deliveries sent to this address.
	*/
  shippingmethodcode?: contact_contact_shippingmethodcode;
  /**SLA	LookupType
	Choose the service level agreement (SLA) that you want to apply to the Contact record.
	*/
  slaid?: EntityReference;
  /**Last SLA applied	LookupType
	Last SLA that was applied to this case. This field is for internal use only.
	*/
  slainvokedid?: EntityReference;
  /**Spouse/Partner Name	StringType
	Type the name of the contact's spouse or partner for reference during calls, events, or other communications with the contact.
	*/
  spousesname?: string;
  /**(Deprecated) Process Stage	UniqueidentifierType
	Shows the ID of the stage.
	*/
  stageid?: Guid;
  /**Status	contact_contact_statecode
	Shows whether the contact is active or inactive. Inactive contacts are read-only and can't be edited unless they are reactivated.
	*/
  statecode?: contact_contact_statecode;
  /**Status Reason	contact_contact_statuscode
	Select the contact's status.
	*/
  statuscode?: contact_contact_statuscode;
  /**Subscription	UniqueidentifierType
	For internal use only.
	*/
  subscriptionid?: Guid;
  /**Suffix	StringType
	Type the suffix used in the contact's name, such as Jr. or Sr. to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
	*/
  suffix?: string;
  /**TeamsFollowed	IntegerType
	Number of users or conversations followed the record
	*/
  teamsfollowed?: number;
  /**Business Phone	StringType
	Type the main phone number for this contact.
	*/
  telephone1?: string;
  /**Home Phone	StringType
	Type a second phone number for this contact.
	*/
  telephone2?: string;
  /**Telephone 3	StringType
	Type a third phone number for this contact.
	*/
  telephone3?: string;
  /**Territory	contact_contact_territorycode
	Select a region or territory for the contact for use in segmentation and analysis.
	*/
  territorycode?: contact_contact_territorycode;
  /**Time Spent by me	StringType
	Total time spent for emails (read and write) and meetings by me in relation to the contact record.
	*/
  timespentbymeonemailandmeetings?: string;
  /**Time Zone Rule Version Number	IntegerType
	For internal use only.
	*/
  timezoneruleversionnumber?: number;
  /**Currency	LookupType
	Choose the local currency for the record to make sure budgets are reported in the correct currency.
	*/
  transactioncurrencyid?: EntityReference;
  /**(Deprecated) Traversed Path	StringType
	For internal use only.
	*/
  traversedpath?: string;
  /**UTC Conversion Time Zone Code	IntegerType
	Time zone code that was in use when the record was created.
	*/
  utcconversiontimezonecode?: number;
  /**Version Number	BigIntType
	Version number of the contact.
	*/
  versionnumber?: number;
  /**Website	StringType
	Type the contact's professional or personal website or blog URL.
	*/
  websiteurl?: string;
  /**Yomi First Name	StringType
	Type the phonetic spelling of the contact's first name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact.
	*/
  yomifirstname?: string;
  /**Yomi Full Name	StringType
	Shows the combined Yomi first and last names of the contact so that the full phonetic name can be displayed in views and reports.
	*/
  yomifullname?: string;
  /**Yomi Last Name	StringType
	Type the phonetic spelling of the contact's last name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact.
	*/
  yomilastname?: string;
  /**Yomi Middle Name	StringType
	Type the phonetic spelling of the contact's middle name, if the name is specified in Japanese, to make sure the name is pronounced correctly in phone calls with the contact.
	*/
  yomimiddlename?: string;
}

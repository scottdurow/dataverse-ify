/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { IEntity } from "../types/IEntity";
import { Guid } from "../types/Guid";
import { EntityReference } from "../types/EntityReference";

export const accountMetadata = {
  typeName: "mscrm.account",
  logicalName: "account",
  collectionName: "accounts",
  primaryIdAttribute: "accountid",
  attributeTypes: {
    // Numeric Types
    address1_latitude: "Double",
    address1_longitude: "Double",
    address1_utcoffset: "Integer",
    address2_latitude: "Double",
    address2_longitude: "Double",
    address2_utcoffset: "Integer",
    aging30: "Money",
    aging30_base: "Money",
    aging60: "Money",
    aging60_base: "Money",
    aging90: "Money",
    aging90_base: "Money",
    creditlimit: "Money",
    creditlimit_base: "Money",
    exchangerate: "Decimal",
    importsequencenumber: "Integer",
    marketcap: "Money",
    marketcap_base: "Money",
    numberofemployees: "Integer",
    onholdtime: "Integer",
    revenue: "Money",
    revenue_base: "Money",
    sharesoutstanding: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    accountcategorycode: "Optionset",
    accountclassificationcode: "Optionset",
    accountratingcode: "Optionset",
    address1_addresstypecode: "Optionset",
    address1_freighttermscode: "Optionset",
    address1_shippingmethodcode: "Optionset",
    address2_addresstypecode: "Optionset",
    address2_freighttermscode: "Optionset",
    address2_shippingmethodcode: "Optionset",
    businesstypecode: "Optionset",
    customersizecode: "Optionset",
    customertypecode: "Optionset",
    industrycode: "Optionset",
    ownershipcode: "Optionset",
    paymenttermscode: "Optionset",
    preferredappointmentdaycode: "Optionset",
    preferredappointmenttimecode: "Optionset",
    preferredcontactmethodcode: "Optionset",
    shippingmethodcode: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    territorycode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    lastusedincampaign: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    masterid: ["account"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    ownerid: ["principal"],
    owningbusinessunit: ["businessunit"],
    owningteam: ["team"],
    owninguser: ["systemuser"],
    parentaccountid: ["account"],
    preferredsystemuserid: ["systemuser"],
    primarycontactid: ["contact"],
    sla_account_sla: ["sla"],
    stageid_processstage: ["processstage"],
    transactioncurrencyid: ["transactioncurrency"],
    slainvokedid: ["sla"],
  },
};
export enum AccountAttributes {
  AccountCategoryCode = "accountcategorycode",
  AccountClassificationCode = "accountclassificationcode",
  AccountId = "accountid",
  AccountNumber = "accountnumber",
  AccountRatingCode = "accountratingcode",
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
  Aging30 = "aging30",
  Aging30_Base = "aging30_base",
  Aging60 = "aging60",
  Aging60_Base = "aging60_base",
  Aging90 = "aging90",
  Aging90_Base = "aging90_base",
  BusinessTypeCode = "businesstypecode",
  CreatedBy = "createdby",
  CreatedByExternalParty = "createdbyexternalparty",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreditLimit = "creditlimit",
  CreditLimit_Base = "creditlimit_base",
  CreditOnHold = "creditonhold",
  CustomerSizeCode = "customersizecode",
  CustomerTypeCode = "customertypecode",
  Description = "description",
  DoNotBulkEMail = "donotbulkemail",
  DoNotBulkPostalMail = "donotbulkpostalmail",
  DoNotEMail = "donotemail",
  DoNotFax = "donotfax",
  DoNotPhone = "donotphone",
  DoNotPostalMail = "donotpostalmail",
  DoNotSendMM = "donotsendmm",
  EMailAddress1 = "emailaddress1",
  EMailAddress2 = "emailaddress2",
  EMailAddress3 = "emailaddress3",
  EntityImageId = "entityimageid",
  ExchangeRate = "exchangerate",
  Fax = "fax",
  FollowEmail = "followemail",
  FtpSiteURL = "ftpsiteurl",
  ImportSequenceNumber = "importsequencenumber",
  IndustryCode = "industrycode",
  IsPrivate = "isprivate",
  LastOnHoldTime = "lastonholdtime",
  LastUsedInCampaign = "lastusedincampaign",
  MarketCap = "marketcap",
  MarketCap_Base = "marketcap_base",
  MarketingOnly = "marketingonly",
  MasterId = "masterid",
  Merged = "merged",
  ModifiedBy = "modifiedby",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  Name = "name",
  NumberOfEmployees = "numberofemployees",
  OnHoldTime = "onholdtime",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnershipCode = "ownershipcode",
  OwningBusinessUnit = "owningbusinessunit",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  ParentAccountId = "parentaccountid",
  ParticipatesInWorkflow = "participatesinworkflow",
  PaymentTermsCode = "paymenttermscode",
  PreferredAppointmentDayCode = "preferredappointmentdaycode",
  PreferredAppointmentTimeCode = "preferredappointmenttimecode",
  PreferredContactMethodCode = "preferredcontactmethodcode",
  PreferredSystemUserId = "preferredsystemuserid",
  PrimaryContactId = "primarycontactid",
  PrimarySatoriId = "primarysatoriid",
  PrimaryTwitterId = "primarytwitterid",
  ProcessId = "processid",
  Revenue = "revenue",
  Revenue_Base = "revenue_base",
  SharesOutstanding = "sharesoutstanding",
  ShippingMethodCode = "shippingmethodcode",
  SIC = "sic",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  StockExchange = "stockexchange",
  Telephone1 = "telephone1",
  Telephone2 = "telephone2",
  Telephone3 = "telephone3",
  TerritoryCode = "territorycode",
  TickerSymbol = "tickersymbol",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  TransactionCurrencyId = "transactioncurrencyid",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
  WebSiteURL = "websiteurl",
  YomiName = "yominame",
}
export enum account_account_accountcategorycode {
  Preferred_Customer = 1,
  Standard = 2,
}

export enum account_account_accountclassificationcode {
  Default_Value = 1,
}

export enum account_account_accountratingcode {
  Default_Value = 1,
}

export enum account_account_address1_addresstypecode {
  Bill_To = 1,
  Ship_To = 2,
  Primary = 3,
  Other = 4,
}

export enum account_account_address1_freighttermscode {
  FOB = 1,
  No_Charge = 2,
}

export enum account_account_address1_shippingmethodcode {
  Airborne = 1,
  DHL = 2,
  FedEx = 3,
  UPS = 4,
  Postal_Mail = 5,
  Full_Load = 6,
  Will_Call = 7,
}

export enum account_account_address2_addresstypecode {
  Default_Value = 1,
}

export enum account_account_address2_freighttermscode {
  Default_Value = 1,
}

export enum account_account_address2_shippingmethodcode {
  Default_Value = 1,
}

export enum account_account_businesstypecode {
  Default_Value = 1,
}

export enum account_account_customersizecode {
  Default_Value = 1,
}

export enum account_account_customertypecode {
  Competitor = 1,
  Consultant = 2,
  Customer = 3,
  Investor = 4,
  Partner = 5,
  Influencer = 6,
  Press = 7,
  Prospect = 8,
  Reseller = 9,
  Supplier = 10,
  Vendor = 11,
  Other = 12,
}

export enum account_account_industrycode {
  Accounting = 1,
  Agriculture_and_Nonpetrol_Natural_Resource_Extraction = 2,
  Broadcasting_Printing_and_Publishing = 3,
  Brokers = 4,
  Building_Supply_Retail = 5,
  Business_Services = 6,
  Consulting = 7,
  Consumer_Services = 8,
  Design_Direction_and_Creative_Management = 9,
  Distributors_Dispatchers_and_Processors = 10,
  Doctors_Offices_and_Clinics = 11,
  Durable_Manufacturing = 12,
  Eating_and_Drinking_Places = 13,
  Entertainment_Retail = 14,
  Equipment_Rental_and_Leasing = 15,
  Financial = 16,
  Food_and_Tobacco_Processing = 17,
  Inbound_Capital_Intensive_Processing = 18,
  Inbound_Repair_and_Services = 19,
  Insurance = 20,
  Legal_Services = 21,
  NonDurable_Merchandise_Retail = 22,
  Outbound_Consumer_Service = 23,
  Petrochemical_Extraction_and_Distribution = 24,
  Service_Retail = 25,
  SIG_Affiliations = 26,
  Social_Services = 27,
  Special_Outbound_Trade_Contractors = 28,
  Specialty_Realty = 29,
  Transportation = 30,
  Utility_Creation_and_Distribution = 31,
  Vehicle_Retail = 32,
  Wholesale = 33,
}

export enum account_account_ownershipcode {
  Public = 1,
  Private = 2,
  Subsidiary = 3,
  Other = 4,
}

export enum account_account_paymenttermscode {
  Net_30 = 1,
  _2_10_Net_30 = 2,
  Net_45 = 3,
  Net_60 = 4,
}

export enum account_account_preferredappointmentdaycode {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export enum account_account_preferredappointmenttimecode {
  Morning = 1,
  Afternoon = 2,
  Evening = 3,
}

export enum account_account_preferredcontactmethodcode {
  Any = 1,
  Email = 2,
  Phone = 3,
  Fax = 4,
  Mail = 5,
}

export enum account_account_shippingmethodcode {
  Default_Value = 1,
}

export enum account_account_statecode {
  Active = 0,
  Inactive = 1,
}

export enum account_account_statuscode {
  Active = 1,
  Inactive = 2,
}

export enum account_account_territorycode {
  Default_Value = 1,
}
export interface Account extends IEntity {
  /**Category	account_account_accountcategorycode
	Select a category to indicate whether the customer account is standard or preferred.
	*/
  accountcategorycode?: account_account_accountcategorycode;
  /**Classification	account_account_accountclassificationcode
	Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria.
	*/
  accountclassificationcode?: account_account_accountclassificationcode;
  /**Account	UniqueidentifierType
	Unique identifier of the account.
	*/
  accountid?: Guid;
  /**Account Number	StringType
	Type an ID number or code for the account to quickly search and identify the account in system views.
	*/
  accountnumber?: string;
  /**Account Rating	account_account_accountratingcode
	Select a rating to indicate the value of the customer account.
	*/
  accountratingcode?: account_account_accountratingcode;
  /**Address 1: ID	UniqueidentifierType
	Unique identifier for address 1.
	*/
  address1_addressid?: Guid;
  /**Address 1: Address Type	account_account_address1_addresstypecode
	Select the primary address type.
	*/
  address1_addresstypecode?: account_account_address1_addresstypecode;
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
  /**Address 1: Freight Terms	account_account_address1_freighttermscode
	Select the freight terms for the primary address to make sure shipping orders are processed correctly.
	*/
  address1_freighttermscode?: account_account_address1_freighttermscode;
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
  /**Address 1: Shipping Method	account_account_address1_shippingmethodcode
	Select a shipping method for deliveries sent to this address.
	*/
  address1_shippingmethodcode?: account_account_address1_shippingmethodcode;
  /**Address 1: State/Province	StringType
	Type the state or province of the primary address.
	*/
  address1_stateorprovince?: string;
  /**Address Phone	StringType
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
  /**Address 2: Address Type	account_account_address2_addresstypecode
	Select the secondary address type.
	*/
  address2_addresstypecode?: account_account_address2_addresstypecode;
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
  /**Address 2: Freight Terms	account_account_address2_freighttermscode
	Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
	*/
  address2_freighttermscode?: account_account_address2_freighttermscode;
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
  /**Address 2: Shipping Method	account_account_address2_shippingmethodcode
	Select a shipping method for deliveries sent to this address.
	*/
  address2_shippingmethodcode?: account_account_address2_shippingmethodcode;
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
  /**Aging 30	MoneyType
	For system use only.
	*/
  aging30?: number;
  /**Aging 30 (Base)	MoneyType
	The base currency equivalent of the aging 30 field.
	*/
  aging30_base?: number;
  /**Aging 60	MoneyType
	For system use only.
	*/
  aging60?: number;
  /**Aging 60 (Base)	MoneyType
	The base currency equivalent of the aging 60 field.
	*/
  aging60_base?: number;
  /**Aging 90	MoneyType
	For system use only.
	*/
  aging90?: number;
  /**Aging 90 (Base)	MoneyType
	The base currency equivalent of the aging 90 field.
	*/
  aging90_base?: number;
  /**Business Type	account_account_businesstypecode
	Select the legal designation or other business type of the account for contracts or reporting purposes.
	*/
  businesstypecode?: account_account_businesstypecode;
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
	Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
	*/
  creditlimit?: number;
  /**Credit Limit (Base)	MoneyType
	Shows the credit limit converted to the system's default base currency for reporting purposes.
	*/
  creditlimit_base?: number;
  /**Credit Hold	BooleanType
	Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer.
	*/
  creditonhold?: boolean;
  /**Customer Size	account_account_customersizecode
	Select the size category or range of the account for segmentation and reporting purposes.
	*/
  customersizecode?: account_account_customersizecode;
  /**Relationship Type	account_account_customertypecode
	Select the category that best describes the relationship between the account and your organization.
	*/
  customertypecode?: account_account_customertypecode;
  /**Description	MemoType
	Type additional information to describe the account, such as an excerpt from the company's website.
	*/
  description?: string;
  /**Do not allow Bulk Emails	BooleanType
	Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email.
	*/
  donotbulkemail?: boolean;
  /**Do not allow Bulk Mails	BooleanType
	Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail.
	*/
  donotbulkpostalmail?: boolean;
  /**Do not allow Emails	BooleanType
	Select whether the account allows direct email sent from Microsoft Dynamics 365.
	*/
  donotemail?: boolean;
  /**Do not allow Faxes	BooleanType
	Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns.
	*/
  donotfax?: boolean;
  /**Do not allow Phone Calls	BooleanType
	Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns.
	*/
  donotphone?: boolean;
  /**Do not allow Mails	BooleanType
	Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns.
	*/
  donotpostalmail?: boolean;
  /**Send Marketing Materials	BooleanType
	Select whether the account accepts marketing materials, such as brochures or catalogs.
	*/
  donotsendmm?: boolean;
  /**Email	StringType
	Type the primary email address for the account.
	*/
  emailaddress1?: string;
  /**Email Address 2	StringType
	Type the secondary email address for the account.
	*/
  emailaddress2?: string;
  /**Email Address 3	StringType
	Type an alternate email address for the account.
	*/
  emailaddress3?: string;
  /**Entity Image Id	UniqueidentifierType
	For internal use only.
	*/
  entityimageid?: Guid;
  /**Exchange Rate	DecimalType
	Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
	*/
  exchangerate?: number;
  /**Fax	StringType
	Type the fax number for the account.
	*/
  fax?: string;
  /**Follow Email Activity	BooleanType
	Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account.
	*/
  followemail?: boolean;
  /**FTP Site	StringType
	Type the URL for the account's FTP site to enable users to access data and share documents.
	*/
  ftpsiteurl?: string;
  /**Import Sequence Number	IntegerType
	Unique identifier of the data import or data migration that created this record.
	*/
  importsequencenumber?: number;
  /**Industry	account_account_industrycode
	Select the account's primary industry for use in marketing segmentation and demographic analysis.
	*/
  industrycode?: account_account_industrycode;
  /**	BooleanType
	
	*/
  isprivate?: boolean;
  /**Last On Hold Time	DateTimeType
	Contains the date and time stamp of the last on hold time.
	DateAndTime:UserLocal*/
  lastonholdtime?: Date;
  /**Last Date Included in Campaign	DateTimeType
	Shows the date when the account was last included in a marketing campaign or quick campaign.
	DateOnly:UserLocal*/
  lastusedincampaign?: Date;
  /**Market Capitalization	MoneyType
	Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis.
	*/
  marketcap?: number;
  /**Market Capitalization (Base)	MoneyType
	Shows the market capitalization converted to the system's default base currency.
	*/
  marketcap_base?: number;
  /**Marketing Only	BooleanType
	Whether is only for marketing
	*/
  marketingonly?: boolean;
  /**Master ID	LookupType
	Shows the master account that the account was merged with.
	*/
  masterid?: EntityReference;
  /**Merged	BooleanType
	Shows whether the account has been merged with another account.
	*/
  merged?: boolean;
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
	Shows who created the record on behalf of another user.
	*/
  modifiedonbehalfby?: EntityReference;
  /**Account Name(Required)	StringType
	Type the company or business name.
	*/
  name?: string;
  /**Number of Employees	IntegerType
	Type the number of employees that work at the account for use in marketing segmentation and demographic analysis.
	*/
  numberofemployees?: number;
  /**On Hold Time (Minutes)	IntegerType
	Shows how long, in minutes, that the record was on hold.
	*/
  onholdtime?: number;
  /**Record Created On	DateTimeType
	Date and time that the record was migrated.
	DateOnly:UserLocal*/
  overriddencreatedon?: Date;
  /**Owner	OwnerType
	Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
	*/
  ownerid?: EntityReference;
  /**Ownership	account_account_ownershipcode
	Select the account's ownership structure, such as public or private.
	*/
  ownershipcode?: account_account_ownershipcode;
  /**Owning Business Unit	LookupType
	Shows the business unit that the record owner belongs to.
	*/
  owningbusinessunit?: EntityReference;
  /**Owning Team	LookupType
	Unique identifier of the team who owns the account.
	*/
  owningteam?: EntityReference;
  /**Owning User	LookupType
	Unique identifier of the user who owns the account.
	*/
  owninguser?: EntityReference;
  /**Parent Account	LookupType
	Choose the parent account associated with this account to show parent and child businesses in reporting and analytics.
	*/
  parentaccountid?: EntityReference;
  /**Participates in Workflow	BooleanType
	For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data.
	*/
  participatesinworkflow?: boolean;
  /**Payment Terms	account_account_paymenttermscode
	Select the payment terms to indicate when the customer needs to pay the total amount.
	*/
  paymenttermscode?: account_account_paymenttermscode;
  /**Preferred Day	account_account_preferredappointmentdaycode
	Select the preferred day of the week for service appointments.
	*/
  preferredappointmentdaycode?: account_account_preferredappointmentdaycode;
  /**Preferred Time	account_account_preferredappointmenttimecode
	Select the preferred time of day for service appointments.
	*/
  preferredappointmenttimecode?: account_account_preferredappointmenttimecode;
  /**Preferred Method of Contact	account_account_preferredcontactmethodcode
	Select the preferred method of contact.
	*/
  preferredcontactmethodcode?: account_account_preferredcontactmethodcode;
  /**Preferred User	LookupType
	Choose the preferred service representative for reference when you schedule service activities for the account.
	*/
  preferredsystemuserid?: EntityReference;
  /**Primary Contact	LookupType
	Choose the primary contact for the account to provide quick access to contact details.
	*/
  primarycontactid?: EntityReference;
  /**Primary Satori ID	StringType
	Primary Satori ID for Account
	*/
  primarysatoriid?: string;
  /**Primary Twitter ID	StringType
	Primary Twitter ID for Account
	*/
  primarytwitterid?: string;
  /**Process	UniqueidentifierType
	Shows the ID of the process.
	*/
  processid?: Guid;
  /**Annual Revenue	MoneyType
	Type the annual revenue for the account, used as an indicator in financial performance analysis.
	*/
  revenue?: number;
  /**Annual Revenue (Base)	MoneyType
	Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
	*/
  revenue_base?: number;
  /**Shares Outstanding	IntegerType
	Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis.
	*/
  sharesoutstanding?: number;
  /**Shipping Method	account_account_shippingmethodcode
	Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option.
	*/
  shippingmethodcode?: account_account_shippingmethodcode;
  /**SIC Code	StringType
	Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis.
	*/
  sic?: string;
  /**SLA	LookupType
	Choose the service level agreement (SLA) that you want to apply to the Account record.
	*/
  slaid?: EntityReference;
  /**Last SLA applied	LookupType
	Last SLA that was applied to this case. This field is for internal use only.
	*/
  slainvokedid?: EntityReference;
  /**(Deprecated) Process Stage	UniqueidentifierType
	Shows the ID of the stage.
	*/
  stageid?: Guid;
  /**Status	account_account_statecode
	Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated.
	*/
  statecode?: account_account_statecode;
  /**Status Reason	account_account_statuscode
	Select the account's status.
	*/
  statuscode?: account_account_statuscode;
  /**Stock Exchange	StringType
	Type the stock exchange at which the account is listed to track their stock and financial performance of the company.
	*/
  stockexchange?: string;
  /**Main Phone	StringType
	Type the main phone number for this account.
	*/
  telephone1?: string;
  /**Other Phone	StringType
	Type a second phone number for this account.
	*/
  telephone2?: string;
  /**Telephone 3	StringType
	Type a third phone number for this account.
	*/
  telephone3?: string;
  /**Territory Code	account_account_territorycode
	Select a region or territory for the account for use in segmentation and analysis.
	*/
  territorycode?: account_account_territorycode;
  /**Ticker Symbol	StringType
	Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
	*/
  tickersymbol?: string;
  /**Time Spent by me	StringType
	Total time spent for emails (read and write) and meetings by me in relation to account record.
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
	Version number of the account.
	*/
  versionnumber?: number;
  /**Website	StringType
	Type the account's website URL to get quick details about the company profile.
	*/
  websiteurl?: string;
  /**Yomi Account Name	StringType
	Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications.
	*/
  yominame?: string;
}

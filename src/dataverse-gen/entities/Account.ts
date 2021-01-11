/* eslint-disable*/
import { IEntity } from "../../types/IEntity";
// Entity Account
export const accountMetadata = {
  typeName: "mscrm.account",
  logicalName: "account",
  collectionName: "accounts",
  primaryIdAttribute: "accountid",
  attributeTypes: {
    // Numeric Types
    aging90: "Money",
    address1_longitude: "Double",
    sharesoutstanding: "Integer",
    aging30: "Money",
    openrevenue: "Money",
    aging60_base: "Money",
    onholdtime: "Integer",
    creditlimit: "Money",
    address1_utcoffset: "Integer",
    numberofemployees: "Integer",
    revenue: "Money",
    exchangerate: "Decimal",
    address2_latitude: "Double",
    marketcap: "Money",
    openrevenue_base: "Money",
    opendeals_state: "Integer",
    teamsfollowed: "Integer",
    timezoneruleversionnumber: "Integer",
    openrevenue_state: "Integer",
    aging60: "Money",
    entityimage_timestamp: "BigInt",
    address2_utcoffset: "Integer",
    creditlimit_base: "Money",
    revenue_base: "Money",
    address2_longitude: "Double",
    aging90_base: "Money",
    marketcap_base: "Money",
    utcconversiontimezonecode: "Integer",
    importsequencenumber: "Integer",
    versionnumber: "BigInt",
    aging30_base: "Money",
    address1_latitude: "Double",
    opendeals: "Integer",
    // Optionsets
    address1_addresstypecode: "Optionset",
    cdsify_multiselect: "MultiSelect",
    address1_shippingmethodcode: "Optionset",
    paymenttermscode: "Optionset",
    accountcategorycode: "Optionset",
    address1_freighttermscode: "Optionset",
    accountratingcode: "Optionset",
    preferredappointmenttimecode: "Optionset",
    accountclassificationcode: "Optionset",
    customertypecode: "Optionset",
    statuscode: "Optionset",
    ownershipcode: "Optionset",
    preferredcontactmethodcode: "Optionset",
    territorycode: "Optionset",
    industrycode: "Optionset",
    businesstypecode: "Optionset",
    shippingmethodcode: "Optionset",
    address2_addresstypecode: "Optionset",
    customersizecode: "Optionset",
    address2_shippingmethodcode: "Optionset",
    preferredappointmentdaycode: "Optionset",
    address2_freighttermscode: "Optionset",
    statecode: "Optionset",
    // Date Formats
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    opendeals_date: "DateAndTime:UserLocal",
    createdon: "DateAndTime:UserLocal",
    lastusedincampaign: "DateOnly:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    openrevenue_date: "DateAndTime:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    territoryid: ["mscrm.territory"],
    stageid_processstage: ["mscrm.processstage"],
    sla_account_sla: ["mscrm.sla"],
    primarycontactid: ["mscrm.contact"],
    preferredsystemuserid: ["mscrm.systemuser"],
    preferredserviceid: ["mscrm.service"],
    preferredequipmentid: ["mscrm.equipment"],
    parentaccountid: ["mscrm.account"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    originatingleadid: ["mscrm.lead"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    masterid: ["mscrm.account"],
    defaultpricelevelid: ["mscrm.pricelevel"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    cdsify_Account1: ["mscrm.account"],
    slainvokedid: ["sla"],
  },
};

// Attribute constants
export enum AccountAttributes {
  EMailAddress3 = "emailaddress3",
  EMailAddress2 = "emailaddress2",
  EMailAddress1 = "emailaddress1",
  MasterAccountIdYomiName = "masteraccountidyominame",
  Address1_City = "address1_city",
  SLAId = "slaid",
  ModifiedOn = "modifiedon",
  Aging90 = "aging90",
  OverriddenCreatedOn = "overriddencreatedon",
  WebSiteURL = "websiteurl",
  Address1_Longitude = "address1_longitude",
  DoNotPostalMail = "donotpostalmail",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  Address1_AddressTypeCode = "address1_addresstypecode",
  TransactionCurrencyId = "transactioncurrencyid",
  SharesOutstanding = "sharesoutstanding",
  DoNotSendMM = "donotsendmm",
  CreatedByExternalParty = "createdbyexternalparty",
  CreditOnHold = "creditonhold",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  Aging30 = "aging30",
  DoNotBulkPostalMail = "donotbulkpostalmail",
  YomiName = "yominame",
  cdsify_MultiSelect = "cdsify_multiselect",
  PreferredSystemUserIdYomiName = "preferredsystemuseridyominame",
  Address1_ShippingMethodCode = "address1_shippingmethodcode",
  PaymentTermsCode = "paymenttermscode",
  SLAInvokedId = "slainvokedid",
  OpenDeals_Date = "opendeals_date",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  OriginatingLeadId = "originatingleadid",
  MasterAccountIdName = "masteraccountidname",
  PreferredSystemUserIdName = "preferredsystemuseridname",
  AccountCategoryCode = "accountcategorycode",
  OpenRevenue = "openrevenue",
  Address2_StateOrProvince = "address2_stateorprovince",
  TerritoryId = "territoryid",
  Address2_Country = "address2_country",
  Address2_Line2 = "address2_line2",
  Aging60_Base = "aging60_base",
  PreferredServiceId = "preferredserviceid",
  Address1_Line3 = "address1_line3",
  OnHoldTime = "onholdtime",
  cdsify_Account1YomiName = "cdsify_account1yominame",
  Address1_FreightTermsCode = "address1_freighttermscode",
  CreditLimit = "creditlimit",
  OriginatingLeadIdName = "originatingleadidname",
  ParentAccountIdName = "parentaccountidname",
  AccountRatingCode = "accountratingcode",
  Address1_UTCOffset = "address1_utcoffset",
  PreferredAppointmentTimeCode = "preferredappointmenttimecode",
  NumberOfEmployees = "numberofemployees",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  AccountClassificationCode = "accountclassificationcode",
  Revenue = "revenue",
  CustomerTypeCode = "customertypecode",
  ExchangeRate = "exchangerate",
  Address2_County = "address2_county",
  IsPrivate = "isprivate",
  PrimaryContactId = "primarycontactid",
  Telephone3 = "telephone3",
  ParentAccountId = "parentaccountid",
  Address2_City = "address2_city",
  StatusCode = "statuscode",
  Address2_Latitude = "address2_latitude",
  CreatedOn = "createdon",
  DoNotBulkEMail = "donotbulkemail",
  DoNotFax = "donotfax",
  MarketCap = "marketcap",
  OpenRevenue_Base = "openrevenue_base",
  Address1_Composite = "address1_composite",
  OwnershipCode = "ownershipcode",
  OpenDeals_State = "opendeals_state",
  OwningBusinessUnit = "owningbusinessunit",
  Address2_PostalCode = "address2_postalcode",
  LastUsedInCampaign = "lastusedincampaign",
  ProcessId = "processid",
  OwnerIdYomiName = "owneridyominame",
  EntityImage_URL = "entityimage_url",
  TeamsFollowed = "teamsfollowed",
  Address2_Line3 = "address2_line3",
  Description = "description",
  ModifiedBy = "modifiedby",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  Address1_County = "address1_county",
  CreatedByName = "createdbyname",
  PreferredContactMethodCode = "preferredcontactmethodcode",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  Address1_Line1 = "address1_line1",
  DoNotEMail = "donotemail",
  TerritoryCode = "territorycode",
  cdsify_Account1 = "cdsify_account1",
  Address2_PostOfficeBox = "address2_postofficebox",
  Address2_Telephone1 = "address2_telephone1",
  Address2_Telephone2 = "address2_telephone2",
  Address2_Telephone3 = "address2_telephone3",
  OriginatingLeadIdYomiName = "originatingleadidyominame",
  PreferredEquipmentIdName = "preferredequipmentidname",
  Address1_AddressId = "address1_addressid",
  TraversedPath = "traversedpath",
  TerritoryIdName = "territoryidname",
  Address1_Telephone2 = "address1_telephone2",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  OwningUser = "owninguser",
  IndustryCode = "industrycode",
  Address2_Name = "address2_name",
  OpenRevenue_State = "openrevenue_state",
  PrimarySatoriId = "primarysatoriid",
  Name = "name",
  EntityImageId = "entityimageid",
  Aging60 = "aging60",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  BusinessTypeCode = "businesstypecode",
  PrimaryTwitterId = "primarytwitterid",
  OwnerIdName = "owneridname",
  EntityImage = "entityimage",
  EntityImage_Timestamp = "entityimage_timestamp",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  Address2_Composite = "address2_composite",
  ShippingMethodCode = "shippingmethodcode",
  Address1_Country = "address1_country",
  OwningTeam = "owningteam",
  Address1_StateOrProvince = "address1_stateorprovince",
  PreferredServiceIdName = "preferredserviceidname",
  MarketingOnly = "marketingonly",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  PreferredEquipmentId = "preferredequipmentid",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  CreatedOnBehalfBy = "createdonbehalfby",
  Address2_Line1 = "address2_line1",
  Address1_Telephone1 = "address1_telephone1",
  PrimaryContactIdName = "primarycontactidname",
  Address1_Telephone3 = "address1_telephone3",
  Address1_PostOfficeBox = "address1_postofficebox",
  FollowEmail = "followemail",
  SLAInvokedIdName = "slainvokedidname",
  Fax = "fax",
  MasterId = "masterid",
  SIC = "sic",
  OwnerId = "ownerid",
  Address2_UTCOffset = "address2_utcoffset",
  StageId = "stageid",
  AccountNumber = "accountnumber",
  CreditLimit_Base = "creditlimit_base",
  Address2_Fax = "address2_fax",
  Revenue_Base = "revenue_base",
  Merged = "merged",
  OwnerIdType = "owneridtype",
  Address2_Longitude = "address2_longitude",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  DefaultPriceLevelId = "defaultpricelevelid",
  FtpSiteURL = "ftpsiteurl",
  Aging90_Base = "aging90_base",
  DoNotPhone = "donotphone",
  Address1_PrimaryContactName = "address1_primarycontactname",
  ModifiedByYomiName = "modifiedbyyominame",
  LastOnHoldTime = "lastonholdtime",
  Address1_Line2 = "address1_line2",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  CreatedBy = "createdby",
  Address2_AddressTypeCode = "address2_addresstypecode",
  OpenRevenue_Date = "openrevenue_date",
  Address2_UPSZone = "address2_upszone",
  MarketCap_Base = "marketcap_base",
  Address1_PostalCode = "address1_postalcode",
  TickerSymbol = "tickersymbol",
  CustomerSizeCode = "customersizecode",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  DefaultPriceLevelIdName = "defaultpricelevelidname",
  ParticipatesInWorkflow = "participatesinworkflow",
  StockExchange = "stockexchange",
  ImportSequenceNumber = "importsequencenumber",
  Telephone2 = "telephone2",
  VersionNumber = "versionnumber",
  PreferredSystemUserId = "preferredsystemuserid",
  AccountId = "accountid",
  Telephone1 = "telephone1",
  Aging30_Base = "aging30_base",
  Address1_Name = "address1_name",
  Address1_Fax = "address1_fax",
  Address1_Latitude = "address1_latitude",
  Address2_ShippingMethodCode = "address2_shippingmethodcode",
  PrimaryContactIdYomiName = "primarycontactidyominame",
  PreferredAppointmentDayCode = "preferredappointmentdaycode",
  ModifiedByName = "modifiedbyname",
  CreatedByYomiName = "createdbyyominame",
  Address2_FreightTermsCode = "address2_freighttermscode",
  cdsify_Account1Name = "cdsify_account1name",
  Address1_UPSZone = "address1_upszone",
  Address2_AddressId = "address2_addressid",
  SLAName = "slaname",
  ParentAccountIdYomiName = "parentaccountidyominame",
  Address2_PrimaryContactName = "address2_primarycontactname",
  OpenDeals = "opendeals",
  StateCode = "statecode",
}

// Early Bound Interface
export interface Account extends IEntity {
  // Email Address 3 StringType Type an alternate email address for the account.
  emailaddress3?: string | null;
  // Email Address 2 StringType Type the secondary email address for the account.
  emailaddress2?: string | null;
  // Email StringType Type the primary email address for the account.
  emailaddress1?: string | null;
  //  StringType
  masteraccountidyominame?: string | null;
  // Address 1: City StringType Type the city for the primary address.
  address1_city?: string | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Account record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Aging 90 MoneyType For system use only.
  aging90?: number | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Website StringType Type the account's website URL to get quick details about the company profile.
  websiteurl?: string | null;
  // Address 1: Longitude DoubleType Type the longitude value for the primary address for use in mapping and other applications.
  address1_longitude?: number | null;
  // Do not allow Mails BooleanType Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns.
  donotpostalmail?: boolean | null;
  //  StringType
  createdbyexternalpartyname?: string | null;
  // Address 1: Address Type account_account_address1_addresstypecode Select the primary address type.
  address1_addresstypecode?: import("../enums/account_account_address1_addresstypecode").account_account_address1_addresstypecode | null;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference | null;
  // Shares Outstanding IntegerType Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis.
  sharesoutstanding?: number | null;
  // Send Marketing Materials BooleanType Select whether the account accepts marketing materials, such as brochures or catalogs.
  donotsendmm?: boolean | null;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  // Credit Hold BooleanType Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer.
  creditonhold?: boolean | null;
  //  StringType
  transactioncurrencyidname?: string | null;
  // Aging 30 MoneyType For system use only.
  aging30?: number | null;
  // Do not allow Bulk Mails BooleanType Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail.
  donotbulkpostalmail?: boolean | null;
  // Yomi Account Name StringType Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications.
  yominame?: string | null;
  // Multi Select socialprofile_community
  cdsify_multiselect?: import("../enums/socialprofile_community").socialprofile_community[] | null;
  //  StringType
  preferredsystemuseridyominame?: string | null;
  // Address 1: Shipping Method account_account_address1_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address1_shippingmethodcode?: import("../enums/account_account_address1_shippingmethodcode").account_account_address1_shippingmethodcode | null;
  // Payment Terms account_account_paymenttermscode Select the payment terms to indicate when the customer needs to pay the total amount.
  paymenttermscode?: import("../enums/account_account_paymenttermscode").account_account_paymenttermscode | null;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  // Open Deals (Last Updated On) DateTimeType Last Updated time of rollup field Open Deals. DateAndTime:UserLocal
  opendeals_date?: Date | null;
  //  StringType
  modifiedbyexternalpartyyominame?: string | null;
  // Originating Lead LookupType Shows the lead that the account was created from if the account was created by converting a lead in Microsoft Dynamics 365. This is used to relate the account to data on the originating lead for use in reporting and analytics.
  originatingleadid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  masteraccountidname?: string | null;
  //  StringType
  preferredsystemuseridname?: string | null;
  // Category account_account_accountcategorycode Select a category to indicate whether the customer account is standard or preferred.
  accountcategorycode?: import("../enums/account_account_accountcategorycode").account_account_accountcategorycode | null;
  // Open Revenue MoneyType Sum of open revenue against an account and its child accounts.
  openrevenue?: number | null;
  // Address 2: State/Province StringType Type the state or province of the secondary address.
  address2_stateorprovince?: string | null;
  // Territory LookupType Choose the sales region or territory for the account to make sure the account is assigned to the correct representative and for use in segmentation and analysis.
  territoryid?: import("../../types/EntityReference").EntityReference | null;
  // Address 2: Country/Region StringType Type the country or region for the secondary address.
  address2_country?: string | null;
  // Address 2: Street 2 StringType Type the second line of the secondary address.
  address2_line2?: string | null;
  // Aging 60 (Base) MoneyType The base currency equivalent of the aging 60 field.
  aging60_base?: number | null;
  // Preferred Service LookupType Choose the account's preferred service for reference when you schedule service activities.
  preferredserviceid?: import("../../types/EntityReference").EntityReference | null;
  // Address 1: Street 3 StringType Type the third line of the primary address.
  address1_line3?: string | null;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number | null;
  //  StringType
  cdsify_account1yominame?: string | null;
  // Address 1: Freight Terms account_account_address1_freighttermscode Select the freight terms for the primary address to make sure shipping orders are processed correctly.
  address1_freighttermscode?: import("../enums/account_account_address1_freighttermscode").account_account_address1_freighttermscode | null;
  // Credit Limit MoneyType Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
  creditlimit?: number | null;
  //  StringType
  originatingleadidname?: string | null;
  //  StringType
  parentaccountidname?: string | null;
  // Account Rating account_account_accountratingcode Select a rating to indicate the value of the customer account.
  accountratingcode?: import("../enums/account_account_accountratingcode").account_account_accountratingcode | null;
  // Address 1: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address1_utcoffset?: number | null;
  // Preferred Time account_account_preferredappointmenttimecode Select the preferred time of day for service appointments.
  preferredappointmenttimecode?: import("../enums/account_account_preferredappointmenttimecode").account_account_preferredappointmenttimecode | null;
  // Number of Employees IntegerType Type the number of employees that work at the account for use in marketing segmentation and demographic analysis.
  numberofemployees?: number | null;
  //  StringType
  modifiedbyexternalpartyname?: string | null;
  // Classification account_account_accountclassificationcode Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria.
  accountclassificationcode?: import("../enums/account_account_accountclassificationcode").account_account_accountclassificationcode | null;
  // Annual Revenue MoneyType Type the annual revenue for the account, used as an indicator in financial performance analysis.
  revenue?: number | null;
  // Relationship Type account_account_customertypecode Select the category that best describes the relationship between the account and your organization.
  customertypecode?: import("../enums/account_account_customertypecode").account_account_customertypecode | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // Address 2: County StringType Type the county for the secondary address.
  address2_county?: string | null;
  //  BooleanType
  isprivate?: boolean | null;
  // Primary Contact LookupType Choose the primary contact for the account to provide quick access to contact details.
  primarycontactid?: import("../../types/EntityReference").EntityReference | null;
  // Telephone 3 StringType Type a third phone number for this account.
  telephone3?: string | null;
  // Parent Account LookupType Choose the parent account associated with this account to show parent and child businesses in reporting and analytics.
  parentaccountid?: import("../../types/EntityReference").EntityReference | null;
  // Address 2: City StringType Type the city for the secondary address.
  address2_city?: string | null;
  // Status Reason account_account_statuscode Select the account's status.
  statuscode?: import("../enums/account_account_statuscode").account_account_statuscode | null;
  // Address 2: Latitude DoubleType Type the latitude value for the secondary address for use in mapping and other applications.
  address2_latitude?: number | null;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date | null;
  // Do not allow Bulk Emails BooleanType Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email.
  donotbulkemail?: boolean | null;
  // Do not allow Faxes BooleanType Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns.
  donotfax?: boolean | null;
  // Market Capitalization MoneyType Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis.
  marketcap?: number | null;
  // Open Revenue (Base) MoneyType Value of the Open Revenue in base currency.
  openrevenue_base?: number | null;
  // Address 1 MemoType Shows the complete primary address.
  address1_composite?: string | null;
  // Ownership account_account_ownershipcode Select the account's ownership structure, such as public or private.
  ownershipcode?: import("../enums/account_account_ownershipcode").account_account_ownershipcode | null;
  // Open Deals (State) IntegerType State of rollup field Open Deals.
  opendeals_state?: number | null;
  // Owning Business Unit LookupType Shows the business unit that the record owner belongs to.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  // Address 2: ZIP/Postal Code StringType Type the ZIP Code or postal code for the secondary address.
  address2_postalcode?: string | null;
  // Last Date Included in Campaign DateTimeType Shows the date when the account was last included in a marketing campaign or quick campaign. DateOnly:UserLocal
  lastusedincampaign?: Date | null;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("../../types/Guid").Guid | null;
  //  StringType
  owneridyominame?: string | null;
  //  StringType
  entityimage_url?: string | null;
  // TeamsFollowed IntegerType Number of users or conversations followed the record
  teamsfollowed?: number | null;
  // Address 2: Street 3 StringType Type the third line of the secondary address.
  address2_line3?: string | null;
  // Description MemoType Type additional information to describe the account, such as an excerpt from the company's website.
  description?: string | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Address 1: County StringType Type the county for the primary address.
  address1_county?: string | null;
  //  StringType
  createdbyname?: string | null;
  // Preferred Method of Contact account_account_preferredcontactmethodcode Select the preferred method of contact.
  preferredcontactmethodcode?: import("../enums/account_account_preferredcontactmethodcode").account_account_preferredcontactmethodcode | null;
  // Modified By (Delegate) LookupType Shows who created the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Address 1: Street 1 StringType Type the first line of the primary address.
  address1_line1?: string | null;
  // Do not allow Emails BooleanType Select whether the account allows direct email sent from Microsoft Dynamics 365.
  donotemail?: boolean | null;
  // Territory Code account_account_territorycode Select a region or territory for the account for use in segmentation and analysis.
  territorycode?: import("../enums/account_account_territorycode").account_account_territorycode | null;
  // Account1 LookupType
  cdsify_account1?: import("../../types/EntityReference").EntityReference | null;
  // Address 2: Post Office Box StringType Type the post office box number of the secondary address.
  address2_postofficebox?: string | null;
  // Address 2: Telephone 1 StringType Type the main phone number associated with the secondary address.
  address2_telephone1?: string | null;
  // Address 2: Telephone 2 StringType Type a second phone number associated with the secondary address.
  address2_telephone2?: string | null;
  // Address 2: Telephone 3 StringType Type a third phone number associated with the secondary address.
  address2_telephone3?: string | null;
  //  StringType
  originatingleadidyominame?: string | null;
  //  StringType
  preferredequipmentidname?: string | null;
  // Address 1: ID UniqueidentifierType Unique identifier for address 1.
  address1_addressid?: import("../../types/Guid").Guid | null;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string | null;
  //  StringType
  territoryidname?: string | null;
  // Address 1: Telephone 2 StringType Type a second phone number associated with the primary address.
  address1_telephone2?: string | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  // Owning User LookupType Unique identifier of the user who owns the account.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  // Industry account_account_industrycode Select the account's primary industry for use in marketing segmentation and demographic analysis.
  industrycode?: import("../enums/account_account_industrycode").account_account_industrycode | null;
  // Address 2: Name StringType Type a descriptive name for the secondary address, such as Corporate Headquarters.
  address2_name?: string | null;
  // Open Revenue (State) IntegerType State of rollup field Open Revenue.
  openrevenue_state?: number | null;
  // Primary Satori ID StringType Primary Satori ID for Account
  primarysatoriid?: string | null;
  // Account Name [Required] StringType Type the company or business name.
  name?: string;
  // Entity Image Id UniqueidentifierType For internal use only.
  entityimageid?: import("../../types/Guid").Guid | null;
  // Aging 60 MoneyType For system use only.
  aging60?: number | null;
  // Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to account record.
  timespentbymeonemailandmeetings?: string | null;
  // Business Type account_account_businesstypecode Select the legal designation or other business type of the account for contracts or reporting purposes.
  businesstypecode?: import("../enums/account_account_businesstypecode").account_account_businesstypecode | null;
  // Primary Twitter ID StringType Primary Twitter ID for Account
  primarytwitterid?: string | null;
  //  StringType
  owneridname?: string | null;
  // Default Image ImageType Shows the default image for the record.
  entityimage?: string | null;
  //  BigIntType
  entityimage_timestamp?: number | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Address 2 MemoType Shows the complete secondary address.
  address2_composite?: string | null;
  // Shipping Method account_account_shippingmethodcode Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option.
  shippingmethodcode?: import("../enums/account_account_shippingmethodcode").account_account_shippingmethodcode | null;
  // Address 1: Country/Region StringType Type the country or region for the primary address.
  address1_country?: string | null;
  // Owning Team LookupType Unique identifier of the team who owns the account.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Address 1: State/Province StringType Type the state or province of the primary address.
  address1_stateorprovince?: string | null;
  //  StringType
  preferredserviceidname?: string | null;
  // Marketing Only BooleanType Whether is only for marketing
  marketingonly?: boolean | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  // Preferred Facility/Equipment LookupType Choose the account's preferred service facility or equipment to make sure services are scheduled correctly for the customer.
  preferredequipmentid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyexternalpartyyominame?: string | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  // Address 2: Street 1 StringType Type the first line of the secondary address.
  address2_line1?: string | null;
  // Address Phone StringType Type the main phone number associated with the primary address.
  address1_telephone1?: string | null;
  //  StringType
  primarycontactidname?: string | null;
  // Address 1: Telephone 3 StringType Type a third phone number associated with the primary address.
  address1_telephone3?: string | null;
  // Address 1: Post Office Box StringType Type the post office box number of the primary address.
  address1_postofficebox?: string | null;
  // Follow Email Activity BooleanType Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account.
  followemail?: boolean | null;
  //  StringType
  slainvokedidname?: string | null;
  // Fax StringType Type the fax number for the account.
  fax?: string | null;
  // Master ID LookupType Shows the master account that the account was merged with.
  masterid?: import("../../types/EntityReference").EntityReference | null;
  // SIC Code StringType Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis.
  sic?: string | null;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  // Address 2: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address2_utcoffset?: number | null;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("../../types/Guid").Guid | null;
  // Account Number StringType Type an ID number or code for the account to quickly search and identify the account in system views.
  accountnumber?: string | null;
  // Credit Limit (Base) MoneyType Shows the credit limit converted to the system's default base currency for reporting purposes.
  creditlimit_base?: number | null;
  // Address 2: Fax StringType Type the fax number associated with the secondary address.
  address2_fax?: string | null;
  // Annual Revenue (Base) MoneyType Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  revenue_base?: number | null;
  // Merged BooleanType Shows whether the account has been merged with another account.
  merged?: boolean | null;
  //  EntityNameType
  owneridtype?: string | null;
  // Address 2: Longitude DoubleType Type the longitude value for the secondary address for use in mapping and other applications.
  address2_longitude?: number | null;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("../../types/EntityReference").EntityReference | null;
  // Price List LookupType Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders.
  defaultpricelevelid?: import("../../types/EntityReference").EntityReference | null;
  // FTP Site StringType Type the URL for the account's FTP site to enable users to access data and share documents.
  ftpsiteurl?: string | null;
  // Aging 90 (Base) MoneyType The base currency equivalent of the aging 90 field.
  aging90_base?: number | null;
  // Do not allow Phone Calls BooleanType Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns.
  donotphone?: boolean | null;
  // Address 1: Primary Contact Name StringType Type the name of the main contact at the account's primary address.
  address1_primarycontactname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Address 1: Street 2 StringType Type the second line of the primary address.
  address1_line2?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  // Address 2: Address Type account_account_address2_addresstypecode Select the secondary address type.
  address2_addresstypecode?: import("../enums/account_account_address2_addresstypecode").account_account_address2_addresstypecode | null;
  // Open Revenue (Last Updated On) DateTimeType Last Updated time of rollup field Open Revenue. DateAndTime:UserLocal
  openrevenue_date?: Date | null;
  // Address 2: UPS Zone StringType Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address2_upszone?: string | null;
  // Market Capitalization (Base) MoneyType Shows the market capitalization converted to the system's default base currency.
  marketcap_base?: number | null;
  // Address 1: ZIP/Postal Code StringType Type the ZIP Code or postal code for the primary address.
  address1_postalcode?: string | null;
  // Ticker Symbol StringType Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
  tickersymbol?: string | null;
  // Customer Size account_account_customersizecode Select the size category or range of the account for segmentation and reporting purposes.
  customersizecode?: import("../enums/account_account_customersizecode").account_account_customersizecode | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  //  StringType
  defaultpricelevelidname?: string | null;
  // Participates in Workflow BooleanType For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data.
  participatesinworkflow?: boolean | null;
  // Stock Exchange StringType Type the stock exchange at which the account is listed to track their stock and financial performance of the company.
  stockexchange?: string | null;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number | null;
  // Other Phone StringType Type a second phone number for this account.
  telephone2?: string | null;
  // Version Number BigIntType Version number of the account.
  versionnumber?: number | null;
  // Preferred User LookupType Choose the preferred service representative for reference when you schedule service activities for the account.
  preferredsystemuserid?: import("../../types/EntityReference").EntityReference | null;
  // Account UniqueidentifierType Unique identifier of the account.
  accountid?: import("../../types/Guid").Guid | null;
  // Main Phone StringType Type the main phone number for this account.
  telephone1?: string | null;
  // Aging 30 (Base) MoneyType The base currency equivalent of the aging 30 field.
  aging30_base?: number | null;
  // Address 1: Name StringType Type a descriptive name for the primary address, such as Corporate Headquarters.
  address1_name?: string | null;
  // Address 1: Fax StringType Type the fax number associated with the primary address.
  address1_fax?: string | null;
  // Address 1: Latitude DoubleType Type the latitude value for the primary address for use in mapping and other applications.
  address1_latitude?: number | null;
  // Address 2: Shipping Method account_account_address2_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address2_shippingmethodcode?: import("../enums/account_account_address2_shippingmethodcode").account_account_address2_shippingmethodcode | null;
  //  StringType
  primarycontactidyominame?: string | null;
  // Preferred Day account_account_preferredappointmentdaycode Select the preferred day of the week for service appointments.
  preferredappointmentdaycode?: import("../enums/account_account_preferredappointmentdaycode").account_account_preferredappointmentdaycode | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Address 2: Freight Terms account_account_address2_freighttermscode Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
  address2_freighttermscode?: import("../enums/account_account_address2_freighttermscode").account_account_address2_freighttermscode | null;
  //  StringType
  cdsify_account1name?: string | null;
  // Address 1: UPS Zone StringType Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address1_upszone?: string | null;
  // Address 2: ID UniqueidentifierType Unique identifier for address 2.
  address2_addressid?: import("../../types/Guid").Guid | null;
  //  StringType
  slaname?: string | null;
  //  StringType
  parentaccountidyominame?: string | null;
  // Address 2: Primary Contact Name StringType Type the name of the main contact at the account's secondary address.
  address2_primarycontactname?: string | null;
  // Open Deals IntegerType Number of open opportunities against an account and its child accounts.
  opendeals?: number | null;
  // Status account_account_statecode Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/account_account_statecode").account_account_statecode | null;
}

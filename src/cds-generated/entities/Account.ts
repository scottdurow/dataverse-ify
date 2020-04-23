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
    opendeals: "Integer",
    openrevenue_state: "Integer",
    aging90: "Money",
    address1_longitude: "Double",
    entityimage_timestamp: "BigInt",
    aging90_base: "Money",
    aging60: "Money",
    aging30: "Money",
    aging60_base: "Money",
    aging30_base: "Money",
    msdyn_travelcharge_base: "Money",
    onholdtime: "Integer",
    creditlimit: "Money",
    revenue: "Money",
    exchangerate: "Decimal",
    dev1_calculated: "Integer",
    marketcap: "Money",
    msdyn_travelcharge: "Money",
    opendeals_state: "Integer",
    address2_utcoffset: "Integer",
    utcconversiontimezonecode: "Integer",
    dev1_rollup: "Integer",
    openrevenue: "Money",
    revenue_base: "Money",
    timezoneruleversionnumber: "Integer",
    openrevenue_base: "Money",
    address2_longitude: "Double",
    creditlimit_base: "Money",
    sharesoutstanding: "Integer",
    marketcap_base: "Money",
    address1_utcoffset: "Integer",
    importsequencenumber: "Integer",
    versionnumber: "BigInt",
    address1_latitude: "Double",
    teamsfollowed: "Integer",
    dev1_rollup_state: "Integer",
    numberofemployees: "Integer",
    address2_latitude: "Double",
    // Optionsets
    industrycode: "Optionset",
    dev1_accountlevel: "Optionset",
    msdyn_travelchargetype: "Optionset",
    businesstypecode: "Optionset",
    address1_shippingmethodcode: "Optionset",
    shippingmethodcode: "Optionset",
    accountratingcode: "Optionset",
    preferredappointmenttimecode: "Optionset",
    accountclassificationcode: "Optionset",
    preferredcontactmethodcode: "Optionset",
    address2_freighttermscode: "Optionset",
    statecode: "Optionset",
    address1_addresstypecode: "Optionset",
    paymenttermscode: "Optionset",
    address2_addresstypecode: "Optionset",
    accountcategorycode: "Optionset",
    statuscode: "Optionset",
    customertypecode: "Optionset",
    customersizecode: "Optionset",
    sf365_accounttype: "MultiSelect",
    ownershipcode: "Optionset",
    dev1_multiselect: "MultiSelect",
    preferredappointmentdaycode: "Optionset",
    address2_shippingmethodcode: "Optionset",
    dev1_securedoptionset: "Optionset",
    address1_freighttermscode: "Optionset",
    territorycode: "Optionset",
    // Date Formats
    overriddencreatedon: "DateOnly:UserLocal",
    dev1_datetimeuserlocal: "DateAndTime:UserLocal",
    dev1_dateonlydateonly: "DateOnly:DateOnly",
    createdon: "DateAndTime:UserLocal",
    dev1_datetimetimezoneindependent: "DateAndTime:TimeZoneIndependent",
    lastonholdtime: "DateAndTime:UserLocal",
    openrevenue_date: "DateAndTime:UserLocal",
    dev1_datetimeuserlocalchange: "DateAndTime:UserLocal",
    dev1_dateonlyuserlocal: "DateOnly:UserLocal",
    lastusedincampaign: "DateOnly:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    opendeals_date: "DateAndTime:UserLocal",
    dev1_rollup_date: "DateAndTime:UserLocal",
    dev1_dateonlytimezoneindependent: "DateOnly:TimeZoneIndependent",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    territoryid: ["mscrm.territory"],
    stageid_processstage: ["mscrm.processstage"],
    sla_account_sla: ["mscrm.sla"],
    sf365_SupplierId: ["mscrm.sf365_supplier"],
    sf365_LegalEntityId: ["mscrm.sf365_legalentity"],
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
    msdyn_serviceterritory: ["mscrm.territory"],
    msdyn_salestaxcode: ["mscrm.msdyn_taxcode"],
    msdyn_accountkpiid: ["mscrm.msdyn_accountkpiitem"],
    msdyn_PreferredResource: ["mscrm.bookableresource"],
    msa_managingpartnerid: ["mscrm.account"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    masterid: ["mscrm.account"],
    defaultpricelevelid: ["mscrm.pricelevel"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    slainvokedid: ["sla"],
    msdyn_billingaccount: ["account"],
  },
};

// Attribute constants
export enum AccountAttributes {
  CreatedOnBehalfByName = "createdonbehalfbyname",
  OpenDeals = "opendeals",
  OwningUser = "owninguser",
  EMailAddress3 = "emailaddress3",
  IndustryCode = "industrycode",
  EMailAddress1 = "emailaddress1",
  dev1_AccountLevel = "dev1_accountlevel",
  Address1_City = "address1_city",
  Address2_Name = "address2_name",
  sf365_SupplierIdName = "sf365_supplieridname",
  OpenRevenue_State = "openrevenue_state",
  Aging90 = "aging90",
  Address1_Country = "address1_country",
  Address1_Longitude = "address1_longitude",
  PrimarySatoriId = "primarysatoriid",
  CreatedByExternalPartyName = "createdbyexternalpartyname",
  Name = "name",
  EntityImage_Timestamp = "entityimage_timestamp",
  Aging90_Base = "aging90_base",
  msdyn_TravelChargeType = "msdyn_travelchargetype",
  Aging60 = "aging60",
  sf365_LegalEntityIdName = "sf365_legalentityidname",
  BusinessTypeCode = "businesstypecode",
  msa_managingpartneridYomiName = "msa_managingpartneridyominame",
  PrimaryTwitterId = "primarytwitterid",
  CreditOnHold = "creditonhold",
  OwnerIdName = "owneridname",
  Aging30 = "aging30",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  Aging60_Base = "aging60_base",
  OverriddenCreatedOn = "overriddencreatedon",
  Telephone1 = "telephone1",
  Aging30_Base = "aging30_base",
  Address1_ShippingMethodCode = "address1_shippingmethodcode",
  Address2_Composite = "address2_composite",
  msdyn_travelcharge_Base = "msdyn_travelcharge_base",
  ShippingMethodCode = "shippingmethodcode",
  OriginatingLeadId = "originatingleadid",
  ParticipatesInWorkflow = "participatesinworkflow",
  PreferredSystemUserIdName = "preferredsystemuseridname",
  OwningTeam = "owningteam",
  Address2_StateOrProvince = "address2_stateorprovince",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  Address1_StateOrProvince = "address1_stateorprovince",
  Address2_Country = "address2_country",
  PreferredServiceIdName = "preferredserviceidname",
  AccountId = "accountid",
  MarketingOnly = "marketingonly",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  sf365_LegalEntityId = "sf365_legalentityid",
  PreferredEquipmentId = "preferredequipmentid",
  OnHoldTime = "onholdtime",
  Address1_Line3 = "address1_line3",
  CreditLimit = "creditlimit",
  Telephone2 = "telephone2",
  dev1_DateTimeUserLocal = "dev1_datetimeuserlocal",
  Revenue = "revenue",
  AccountRatingCode = "accountratingcode",
  TransactionCurrencyId = "transactioncurrencyid",
  PreferredAppointmentTimeCode = "preferredappointmenttimecode",
  msdyn_BillingAccountYomiName = "msdyn_billingaccountyominame",
  ModifiedByExternalPartyName = "modifiedbyexternalpartyname",
  IsPrivate = "isprivate",
  AccountClassificationCode = "accountclassificationcode",
  Address1_Telephone2 = "address1_telephone2",
  Adx_CreatedByIPAddress = "adx_createdbyipaddress",
  Address1_Telephone3 = "address1_telephone3",
  ExchangeRate = "exchangerate",
  Address1_PostOfficeBox = "address1_postofficebox",
  msdyn_ServiceTerritory = "msdyn_serviceterritory",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  Telephone3 = "telephone3",
  ModifiedByExternalParty = "modifiedbyexternalparty",
  PreferredContactMethodCode = "preferredcontactmethodcode",
  SLAInvokedIdName = "slainvokedidname",
  dev1_DateOnlyDateOnly = "dev1_dateonlydateonly",
  dev1_Calculated = "dev1_calculated",
  CreatedOn = "createdon",
  Fax = "fax",
  SLAName = "slaname",
  MasterId = "masterid",
  MarketCap = "marketcap",
  msdyn_TravelCharge = "msdyn_travelcharge",
  msa_managingpartnerid = "msa_managingpartnerid",
  SIC = "sic",
  Address2_FreightTermsCode = "address2_freighttermscode",
  OwnerId = "ownerid",
  OpenDeals_State = "opendeals_state",
  Address2_UTCOffset = "address2_utcoffset",
  Adx_CreatedByUsername = "adx_createdbyusername",
  AccountNumber = "accountnumber",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  dev1_Rollup = "dev1_rollup",
  OwnerIdYomiName = "owneridyominame",
  OpenRevenue = "openrevenue",
  EntityImage_URL = "entityimage_url",
  msdyn_SalesTaxCodeName = "msdyn_salestaxcodename",
  Address2_Line3 = "address2_line3",
  Address2_Fax = "address2_fax",
  ModifiedBy = "modifiedby",
  Revenue_Base = "revenue_base",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  Merged = "merged",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  OwnerIdType = "owneridtype",
  StageId = "stageid",
  sf365_SupplierId = "sf365_supplierid",
  Address2_PostOfficeBox = "address2_postofficebox",
  OpenRevenue_Base = "openrevenue_base",
  Address2_Telephone2 = "address2_telephone2",
  Address2_Longitude = "address2_longitude",
  OriginatingLeadIdYomiName = "originatingleadidyominame",
  DefaultPriceLevelId = "defaultpricelevelid",
  Address1_AddressId = "address1_addressid",
  msdyn_accountkpiid = "msdyn_accountkpiid",
  TerritoryIdName = "territoryidname",
  dev1_DateTimeTimeZoneIndependent = "dev1_datetimetimezoneindependent",
  CreditLimit_Base = "creditlimit_base",
  CreatedByName = "createdbyname",
  EMailAddress2 = "emailaddress2",
  DoNotPhone = "donotphone",
  Address1_Line1 = "address1_line1",
  Address1_PrimaryContactName = "address1_primarycontactname",
  WebSiteURL = "websiteurl",
  StateCode = "statecode",
  Address1_AddressTypeCode = "address1_addresstypecode",
  LastOnHoldTime = "lastonholdtime",
  SharesOutstanding = "sharesoutstanding",
  Address1_Line2 = "address1_line2",
  PrimaryContactIdName = "primarycontactidname",
  DoNotSendMM = "donotsendmm",
  DoNotBulkPostalMail = "donotbulkpostalmail",
  CreatedBy = "createdby",
  PaymentTermsCode = "paymenttermscode",
  Address2_AddressTypeCode = "address2_addresstypecode",
  ModifiedByExternalPartyYomiName = "modifiedbyexternalpartyyominame",
  OpenRevenue_Date = "openrevenue_date",
  AccountCategoryCode = "accountcategorycode",
  msdyn_BillingAccount = "msdyn_billingaccount",
  TerritoryId = "territoryid",
  CreatedByExternalParty = "createdbyexternalparty",
  msdyn_PreferredResourceName = "msdyn_preferredresourcename",
  MarketCap_Base = "marketcap_base",
  StatusCode = "statuscode",
  dev1_DateTimeUserLocalChange = "dev1_datetimeuserlocalchange",
  OriginatingLeadIdName = "originatingleadidname",
  dev1_DateOnlyUserLocal = "dev1_dateonlyuserlocal",
  Address1_UTCOffset = "address1_utcoffset",
  Address1_PostalCode = "address1_postalcode",
  Address1_Telephone1 = "address1_telephone1",
  TickerSymbol = "tickersymbol",
  CustomerTypeCode = "customertypecode",
  CustomerSizeCode = "customersizecode",
  PrimaryContactId = "primarycontactid",
  Address2_UPSZone = "address2_upszone",
  msdyn_TaxExemptNumber = "msdyn_taxexemptnumber",
  DefaultPriceLevelIdName = "defaultpricelevelidname",
  DoNotBulkEMail = "donotbulkemail",
  msdyn_ServiceTerritoryName = "msdyn_serviceterritoryname",
  Address1_Composite = "address1_composite",
  StockExchange = "stockexchange",
  OwningBusinessUnit = "owningbusinessunit",
  PreferredServiceId = "preferredserviceid",
  LastUsedInCampaign = "lastusedincampaign",
  Address2_AddressId = "address2_addressid",
  msdyn_PreferredResource = "msdyn_preferredresource",
  msdyn_BillingAccountName = "msdyn_billingaccountname",
  Description = "description",
  sf365_AccountType = "sf365_accounttype",
  Address1_County = "address1_county",
  msdyn_externalaccountid = "msdyn_externalaccountid",
  EntityImageId = "entityimageid",
  ImportSequenceNumber = "importsequencenumber",
  Address2_Telephone3 = "address2_telephone3",
  msdyn_WorkOrderInstructions = "msdyn_workorderinstructions",
  TraversedPath = "traversedpath",
  OwnershipCode = "ownershipcode",
  YomiName = "yominame",
  msa_managingpartneridName = "msa_managingpartneridname",
  ModifiedOn = "modifiedon",
  msdyn_SalesTaxCode = "msdyn_salestaxcode",
  ModifiedByYomiName = "modifiedbyyominame",
  dev1_NationalInsuranceNumber = "dev1_nationalinsurancenumber",
  Address2_City = "address2_city",
  VersionNumber = "versionnumber",
  OpenDeals_Date = "opendeals_date",
  CreatedByExternalPartyYomiName = "createdbyexternalpartyyominame",
  dev1_MultiSelect = "dev1_multiselect",
  PreferredSystemUserId = "preferredsystemuserid",
  Adx_ModifiedByIPAddress = "adx_modifiedbyipaddress",
  PreferredAppointmentDayCode = "preferredappointmentdaycode",
  ParentAccountIdName = "parentaccountidname",
  Address1_Name = "address1_name",
  dev1_Rollup_Date = "dev1_rollup_date",
  Address1_Fax = "address1_fax",
  ParentAccountId = "parentaccountid",
  Address1_Latitude = "address1_latitude",
  DoNotFax = "donotfax",
  FollowEmail = "followemail",
  Address2_PostalCode = "address2_postalcode",
  Address2_ShippingMethodCode = "address2_shippingmethodcode",
  TeamsFollowed = "teamsfollowed",
  PrimaryContactIdYomiName = "primarycontactidyominame",
  DoNotEMail = "donotemail",
  dev1_Rollup_State = "dev1_rollup_state",
  PreferredEquipmentIdName = "preferredequipmentidname",
  ModifiedByName = "modifiedbyname",
  MasterAccountIdYomiName = "masteraccountidyominame",
  CreatedByYomiName = "createdbyyominame",
  Adx_ModifiedByUsername = "adx_modifiedbyusername",
  dev1_SecuredOptionset = "dev1_securedoptionset",
  MasterAccountIdName = "masteraccountidname",
  Address2_Line1 = "address2_line1",
  Address1_FreightTermsCode = "address1_freighttermscode",
  Address1_UPSZone = "address1_upszone",
  Address2_County = "address2_county",
  dev1_DateOnlyTimeZoneIndependent = "dev1_dateonlytimezoneindependent",
  CreatedOnBehalfBy = "createdonbehalfby",
  TerritoryCode = "territorycode",
  EntityImage = "entityimage",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msdyn_accountkpiidName = "msdyn_accountkpiidname",
  FtpSiteURL = "ftpsiteurl",
  PreferredSystemUserIdYomiName = "preferredsystemuseridyominame",
  NumberOfEmployees = "numberofemployees",
  Address2_PrimaryContactName = "address2_primarycontactname",
  ParentAccountIdYomiName = "parentaccountidyominame",
  msdyn_TaxExempt = "msdyn_taxexempt",
  dev1_NetworkView = "dev1_networkview",
  Address2_Latitude = "address2_latitude",
  Address2_Line2 = "address2_line2",
  DoNotPostalMail = "donotpostalmail",
  Address2_Telephone1 = "address2_telephone1",
  ProcessId = "processid",
}

// Early Bound Interface
export interface Account extends IEntity {
  //  StringType
  createdonbehalfbyname?: string;
  // Open Deals IntegerType Number of open opportunities against an account and its child accounts.
  opendeals?: number;
  // Owning User LookupType Unique identifier of the user who owns the account.
  owninguser?: import("../../types/EntityReference").EntityReference;
  // Email Address 3 StringType Type an alternate email address for the account.
  emailaddress3?: string;
  // Industry account_account_industrycode Select the account's primary industry for use in marketing segmentation and demographic analysis.
  industrycode?: import("../enums/account_account_industrycode").account_account_industrycode;
  // Email StringType Type the primary email address for the account.
  emailaddress1?: string;
  // Account Level dev1_accountlevel
  dev1_accountlevel?: import("../enums/dev1_accountlevel").dev1_accountlevel;
  // Address 1: City StringType Type the city for the primary address.
  address1_city?: string;
  // Address 2: Name StringType Type a descriptive name for the secondary address, such as Corporate Headquarters.
  address2_name?: string;
  //  StringType
  sf365_supplieridname?: string;
  // Open Revenue (State) IntegerType State of rollup field Open Revenue.
  openrevenue_state?: number;
  // Aging 90 MoneyType For system use only.
  aging90?: number;
  // Address 1: Country/Region StringType Type the country or region for the primary address.
  address1_country?: string;
  // Address 1: Longitude DoubleType Type the longitude value for the primary address for use in mapping and other applications.
  address1_longitude?: number;
  // Primary Satori ID StringType Primary Satori ID for Account
  primarysatoriid?: string;
  //  StringType
  createdbyexternalpartyname?: string;
  // Account Name [Required] StringType Type the company or business name.
  name?: string;
  //  BigIntType
  entityimage_timestamp?: number;
  // Aging 90 (Base) MoneyType The base currency equivalent of the aging 90 field.
  aging90_base?: number;
  // Travel Charge Type msdyn_travelchargetype Specify how travel is charged for this account.
  msdyn_travelchargetype?: import("../enums/msdyn_travelchargetype").msdyn_travelchargetype;
  // Aging 60 MoneyType For system use only.
  aging60?: number;
  //  StringType
  sf365_legalentityidname?: string;
  // Business Type account_account_businesstypecode Select the legal designation or other business type of the account for contracts or reporting purposes.
  businesstypecode?: import("../enums/account_account_businesstypecode").account_account_businesstypecode;
  //  StringType
  msa_managingpartneridyominame?: string;
  // Primary Twitter ID StringType Primary Twitter ID for Account
  primarytwitterid?: string;
  // Credit Hold BooleanType Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer.
  creditonhold?: boolean;
  //  StringType
  owneridname?: string;
  // Aging 30 MoneyType For system use only.
  aging30?: number;
  //  StringType
  modifiedonbehalfbyname?: string;
  // Aging 60 (Base) MoneyType The base currency equivalent of the aging 60 field.
  aging60_base?: number;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date;
  // Main Phone StringType Type the main phone number for this account.
  telephone1?: string;
  // Aging 30 (Base) MoneyType The base currency equivalent of the aging 30 field.
  aging30_base?: number;
  // Address 1: Shipping Method account_account_address1_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address1_shippingmethodcode?: import("../enums/account_account_address1_shippingmethodcode").account_account_address1_shippingmethodcode;
  // Address 2 MemoType Shows the complete secondary address.
  address2_composite?: string;
  // Travel Charge (Base) MoneyType Value of the Travel Charge in base currency.
  msdyn_travelcharge_base?: number;
  // Shipping Method account_account_shippingmethodcode Select a shipping method for deliveries sent to the account's address to designate the preferred carrier or other delivery option.
  shippingmethodcode?: import("../enums/account_account_shippingmethodcode").account_account_shippingmethodcode;
  // Originating Lead LookupType Shows the lead that the account was created from if the account was created by converting a lead in Microsoft Dynamics 365. This is used to relate the account to data on the originating lead for use in reporting and analytics.
  originatingleadid?: import("../../types/EntityReference").EntityReference;
  // Participates in Workflow BooleanType For system use only. Legacy Microsoft Dynamics CRM 3.0 workflow data.
  participatesinworkflow?: boolean;
  //  StringType
  preferredsystemuseridname?: string;
  // Owning Team LookupType Unique identifier of the team who owns the account.
  owningteam?: import("../../types/EntityReference").EntityReference;
  // Address 2: State/Province StringType Type the state or province of the secondary address.
  address2_stateorprovince?: string;
  //  StringType
  transactioncurrencyidname?: string;
  // Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to account record.
  timespentbymeonemailandmeetings?: string;
  // Address 1: State/Province StringType Type the state or province of the primary address.
  address1_stateorprovince?: string;
  // Address 2: Country/Region StringType Type the country or region for the secondary address.
  address2_country?: string;
  //  StringType
  preferredserviceidname?: string;
  // Account UniqueidentifierType Unique identifier of the account.
  accountid?: import("../../types/Guid").Guid;
  // Marketing Only BooleanType Whether is only for marketing
  marketingonly?: boolean;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the Account record.
  slaid?: import("../../types/EntityReference").EntityReference;
  // Last SLA applied LookupType Last SLA that was applied to this case. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference;
  // Legal Entity LookupType Unique identifier for Legal Entity associated with Account.
  sf365_legalentityid?: import("../../types/EntityReference").EntityReference;
  // Preferred Facility/Equipment LookupType Choose the account's preferred service facility or equipment to make sure services are scheduled correctly for the customer.
  preferredequipmentid?: import("../../types/EntityReference").EntityReference;
  // On Hold Time (Minutes) IntegerType Shows how long, in minutes, that the record was on hold.
  onholdtime?: number;
  // Address 1: Street 3 StringType Type the third line of the primary address.
  address1_line3?: string;
  // Credit Limit MoneyType Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer.
  creditlimit?: number;
  // Other Phone StringType Type a second phone number for this account.
  telephone2?: string;
  // Date Time User Local DateTimeType DateAndTime:UserLocal
  dev1_datetimeuserlocal?: Date;
  // Annual Revenue MoneyType Type the annual revenue for the account, used as an indicator in financial performance analysis.
  revenue?: number;
  // Account Rating account_account_accountratingcode Select a rating to indicate the value of the customer account.
  accountratingcode?: import("../enums/account_account_accountratingcode").account_account_accountratingcode;
  // Currency LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference;
  // Preferred Time account_account_preferredappointmenttimecode Select the preferred time of day for service appointments.
  preferredappointmenttimecode?: import("../enums/account_account_preferredappointmenttimecode").account_account_preferredappointmenttimecode;
  //  StringType
  msdyn_billingaccountyominame?: string;
  //  StringType
  modifiedbyexternalpartyname?: string;
  //  BooleanType
  isprivate?: boolean;
  // Classification account_account_accountclassificationcode Select a classification code to indicate the potential value of the customer account based on the projected return on investment, cooperation level, sales cycle length or other criteria.
  accountclassificationcode?: import("../enums/account_account_accountclassificationcode").account_account_accountclassificationcode;
  // Address 1: Telephone 2 StringType Type a second phone number associated with the primary address.
  address1_telephone2?: string;
  // Created By (IP Address) StringType
  adx_createdbyipaddress?: string;
  // Address 1: Telephone 3 StringType Type a third phone number associated with the primary address.
  address1_telephone3?: string;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number;
  // Address 1: Post Office Box StringType Type the post office box number of the primary address.
  address1_postofficebox?: string;
  // Service Territory LookupType The Service Territory this account belongs to. This is used to optimize scheduling and routing
  msdyn_serviceterritory?: import("../../types/EntityReference").EntityReference;
  //  StringType
  createdonbehalfbyyominame?: string;
  // Telephone 3 StringType Type a third phone number for this account.
  telephone3?: string;
  // Modified By (External Party) LookupType Shows the external party who modified the record.
  modifiedbyexternalparty?: import("../../types/EntityReference").EntityReference;
  // Preferred Method of Contact account_account_preferredcontactmethodcode Select the preferred method of contact.
  preferredcontactmethodcode?: import("../enums/account_account_preferredcontactmethodcode").account_account_preferredcontactmethodcode;
  //  StringType
  slainvokedidname?: string;
  // Date Only Date Only DateTimeType DateOnly:DateOnly
  dev1_dateonlydateonly?: Date;
  // Calculated IntegerType
  dev1_calculated?: number;
  // Created On DateTimeType Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  createdon?: Date;
  // Fax StringType Type the fax number for the account.
  fax?: string;
  //  StringType
  slaname?: string;
  // Master ID LookupType Shows the master account that the account was merged with.
  masterid?: import("../../types/EntityReference").EntityReference;
  // Market Capitalization MoneyType Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis.
  marketcap?: number;
  // Travel Charge MoneyType Enter the travel charge to include on work orders. This value will be multiplied by the travel charge type.
  msdyn_travelcharge?: number;
  // Managing Partner LookupType Unique identifier for Account associated with Account.
  msa_managingpartnerid?: import("../../types/EntityReference").EntityReference;
  // SIC Code StringType Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis.
  sic?: string;
  // Address 2: Freight Terms account_account_address2_freighttermscode Select the freight terms for the secondary address to make sure shipping orders are processed correctly.
  address2_freighttermscode?: import("../enums/account_account_address2_freighttermscode").account_account_address2_freighttermscode;
  // Owner OwnerType Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user.
  ownerid?: import("../../types/EntityReference").EntityReference;
  // Open Deals (State) IntegerType State of rollup field Open Deals.
  opendeals_state?: number;
  // Address 2: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address2_utcoffset?: number;
  // Created By (User Name) StringType
  adx_createdbyusername?: string;
  // Account Number StringType Type an ID number or code for the account to quickly search and identify the account in system views.
  accountnumber?: string;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number;
  // Rollup IntegerType
  dev1_rollup?: number;
  //  StringType
  owneridyominame?: string;
  // Open Revenue MoneyType Sum of open revenue against an account and its child accounts.
  openrevenue?: number;
  //  StringType
  entityimage_url?: string;
  //  StringType
  msdyn_salestaxcodename?: string;
  // Address 2: Street 3 StringType Type the third line of the secondary address.
  address2_line3?: string;
  // Address 2: Fax StringType Type the fax number associated with the secondary address.
  address2_fax?: string;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference;
  // Annual Revenue (Base) MoneyType Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area.
  revenue_base?: number;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number;
  // Merged BooleanType Shows whether the account has been merged with another account.
  merged?: boolean;
  // Modified By (Delegate) LookupType Shows who created the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference;
  //  EntityNameType
  owneridtype?: string;
  // (Deprecated) Process Stage UniqueidentifierType Shows the ID of the stage.
  stageid?: import("../../types/Guid").Guid;
  // Supplier LookupType Unique identifier for Supplier associated with Account.
  sf365_supplierid?: import("../../types/EntityReference").EntityReference;
  // Address 2: Post Office Box StringType Type the post office box number of the secondary address.
  address2_postofficebox?: string;
  // Open Revenue (Base) MoneyType Value of the Open Revenue in base currency.
  openrevenue_base?: number;
  // Address 2: Telephone 2 StringType Type a second phone number associated with the secondary address.
  address2_telephone2?: string;
  // Address 2: Longitude DoubleType Type the longitude value for the secondary address for use in mapping and other applications.
  address2_longitude?: number;
  //  StringType
  originatingleadidyominame?: string;
  // Product Price List LookupType Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders.
  defaultpricelevelid?: import("../../types/EntityReference").EntityReference;
  // Address 1: ID UniqueidentifierType Unique identifier for address 1.
  address1_addressid?: import("../../types/Guid").Guid;
  // KPI LookupType
  msdyn_accountkpiid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  territoryidname?: string;
  // Date Time Time Zone Independent DateTimeType DateAndTime:TimeZoneIndependent
  dev1_datetimetimezoneindependent?: Date;
  // Credit Limit (Base) MoneyType Shows the credit limit converted to the system's default base currency for reporting purposes.
  creditlimit_base?: number;
  //  StringType
  createdbyname?: string;
  // Email Address 2 StringType Type the secondary email address for the account.
  emailaddress2?: string;
  // Do not allow Phone Calls BooleanType Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns.
  donotphone?: boolean;
  // Address 1: Street 1 StringType Type the first line of the primary address.
  address1_line1?: string;
  // Address 1: Primary Contact Name StringType Type the name of the main contact at the account's primary address.
  address1_primarycontactname?: string;
  // Website StringType Type the account's website URL to get quick details about the company profile.
  websiteurl?: string;
  // Status account_account_statecode Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated.
  statecode?: import("../enums/account_account_statecode").account_account_statecode;
  // Address 1: Address Type account_account_address1_addresstypecode Select the primary address type.
  address1_addresstypecode?: import("../enums/account_account_address1_addresstypecode").account_account_address1_addresstypecode;
  // Last On Hold Time DateTimeType Contains the date and time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date;
  // Shares Outstanding IntegerType Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis.
  sharesoutstanding?: number;
  // Address 1: Street 2 StringType Type the second line of the primary address.
  address1_line2?: string;
  //  StringType
  primarycontactidname?: string;
  // Send Marketing Materials BooleanType Select whether the account accepts marketing materials, such as brochures or catalogs.
  donotsendmm?: boolean;
  // Do not allow Bulk Mails BooleanType Select whether the account allows bulk postal mail sent through marketing campaigns or quick campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but will be excluded from the postal mail.
  donotbulkpostalmail?: boolean;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference;
  // Payment Terms account_account_paymenttermscode Select the payment terms to indicate when the customer needs to pay the total amount.
  paymenttermscode?: import("../enums/account_account_paymenttermscode").account_account_paymenttermscode;
  // Address 2: Address Type account_account_address2_addresstypecode Select the secondary address type.
  address2_addresstypecode?: import("../enums/account_account_address2_addresstypecode").account_account_address2_addresstypecode;
  //  StringType
  modifiedbyexternalpartyyominame?: string;
  // Open Revenue (Last Updated On) DateTimeType Last Updated time of rollup field Open Revenue. DateAndTime:UserLocal
  openrevenue_date?: Date;
  // Category account_account_accountcategorycode Select a category to indicate whether the customer account is standard or preferred.
  accountcategorycode?: import("../enums/account_account_accountcategorycode").account_account_accountcategorycode;
  // Billing Account LookupType Reference to an other account to be used for billing (only to be used if billing account differs)
  msdyn_billingaccount?: import("../../types/EntityReference").EntityReference;
  // Territory LookupType Choose the sales region or territory for the account to make sure the account is assigned to the correct representative and for use in segmentation and analysis.
  territoryid?: import("../../types/EntityReference").EntityReference;
  // Created By (External Party) LookupType Shows the external party who created the record.
  createdbyexternalparty?: import("../../types/EntityReference").EntityReference;
  //  StringType
  msdyn_preferredresourcename?: string;
  // Market Capitalization (Base) MoneyType Shows the market capitalization converted to the system's default base currency.
  marketcap_base?: number;
  // Status Reason account_account_statuscode Select the account's status.
  statuscode?: import("../enums/account_account_statuscode").account_account_statuscode;
  // DateTimeUserLocalChange DateTimeType DateAndTime:UserLocal
  dev1_datetimeuserlocalchange?: Date;
  //  StringType
  originatingleadidname?: string;
  // Date Only User Local DateTimeType DateOnly:UserLocal
  dev1_dateonlyuserlocal?: Date;
  // Address 1: UTC Offset IntegerType Select the time zone, or UTC offset, for this address so that other people can reference it when they contact someone at this address.
  address1_utcoffset?: number;
  // Address 1: ZIP/Postal Code StringType Type the ZIP Code or postal code for the primary address.
  address1_postalcode?: string;
  // Address Phone StringType Type the main phone number associated with the primary address.
  address1_telephone1?: string;
  // Ticker Symbol StringType Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money.
  tickersymbol?: string;
  // Relationship Type account_account_customertypecode Select the category that best describes the relationship between the account and your organization.
  customertypecode?: import("../enums/account_account_customertypecode").account_account_customertypecode;
  // Customer Size account_account_customersizecode Select the size category or range of the account for segmentation and reporting purposes.
  customersizecode?: import("../enums/account_account_customersizecode").account_account_customersizecode;
  // Primary Contact LookupType Choose the primary contact for the account to provide quick access to contact details.
  primarycontactid?: import("../../types/EntityReference").EntityReference;
  // Address 2: UPS Zone StringType Type the UPS zone of the secondary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address2_upszone?: string;
  // Tax Exempt Number StringType Shows the government tax exempt number.
  msdyn_taxexemptnumber?: string;
  //  StringType
  defaultpricelevelidname?: string;
  // Do not allow Bulk Emails BooleanType Select whether the account allows bulk email sent through campaigns. If Do Not Allow is selected, the account can be added to marketing lists, but is excluded from email.
  donotbulkemail?: boolean;
  //  StringType
  msdyn_serviceterritoryname?: string;
  // Address 1 MemoType Shows the complete primary address.
  address1_composite?: string;
  // Stock Exchange StringType Type the stock exchange at which the account is listed to track their stock and financial performance of the company.
  stockexchange?: string;
  // Owning Business Unit LookupType Shows the business unit that the record owner belongs to.
  owningbusinessunit?: import("../../types/EntityReference").EntityReference;
  // Preferred Service LookupType Choose the account's preferred service for reference when you schedule service activities.
  preferredserviceid?: import("../../types/EntityReference").EntityReference;
  // Last Date Included in Campaign DateTimeType Shows the date when the account was last included in a marketing campaign or quick campaign. DateOnly:UserLocal
  lastusedincampaign?: Date;
  // Address 2: ID UniqueidentifierType Unique identifier for address 2.
  address2_addressid?: import("../../types/Guid").Guid;
  // Preferred Resource (Deprecated) LookupType
  msdyn_preferredresource?: import("../../types/EntityReference").EntityReference;
  //  StringType
  msdyn_billingaccountname?: string;
  // Description MemoType Type additional information to describe the account, such as an excerpt from the company's website.
  description?: string;
  // Account Type account_sf365_account_sf365_accounttype
  sf365_accounttype?: import("../enums/account_sf365_account_sf365_accounttype").account_sf365_account_sf365_accounttype[];
  // Address 1: County StringType Type the county for the primary address.
  address1_county?: string;
  // External ID StringType External Account ID from other systems.
  msdyn_externalaccountid?: string;
  // Entity Image Id UniqueidentifierType For internal use only.
  entityimageid?: import("../../types/Guid").Guid;
  // Import Sequence Number IntegerType Unique identifier of the data import or data migration that created this record.
  importsequencenumber?: number;
  // Address 2: Telephone 3 StringType Type a third phone number associated with the secondary address.
  address2_telephone3?: string;
  // Work Order Instructions MemoType Shows the default instructions to show on new work orders.
  msdyn_workorderinstructions?: string;
  // (Deprecated) Traversed Path StringType For internal use only.
  traversedpath?: string;
  // Ownership account_account_ownershipcode Select the account's ownership structure, such as public or private.
  ownershipcode?: import("../enums/account_account_ownershipcode").account_account_ownershipcode;
  // Yomi Account Name StringType Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications.
  yominame?: string;
  //  StringType
  msa_managingpartneridname?: string;
  // Modified On DateTimeType Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. DateAndTime:UserLocal
  modifiedon?: Date;
  // Sales Tax Code LookupType Default Sales Tax Code
  msdyn_salestaxcode?: import("../../types/EntityReference").EntityReference;
  //  StringType
  modifiedbyyominame?: string;
  // National Insurance Number StringType
  dev1_nationalinsurancenumber?: string;
  // Address 2: City StringType Type the city for the secondary address.
  address2_city?: string;
  // Version Number BigIntType Version number of the account.
  versionnumber?: number;
  // Open Deals (Last Updated On) DateTimeType Last Updated time of rollup field Open Deals. DateAndTime:UserLocal
  opendeals_date?: Date;
  //  StringType
  createdbyexternalpartyyominame?: string;
  // Multi Select msdyn_travelchargetype Multi option set
  dev1_multiselect?: import("../enums/msdyn_travelchargetype").msdyn_travelchargetype[];
  // Preferred User LookupType Choose the preferred service representative for reference when you schedule service activities for the account.
  preferredsystemuserid?: import("../../types/EntityReference").EntityReference;
  // Modified By (IP Address) StringType
  adx_modifiedbyipaddress?: string;
  // Preferred Day account_account_preferredappointmentdaycode Select the preferred day of the week for service appointments.
  preferredappointmentdaycode?: import("../enums/account_account_preferredappointmentdaycode").account_account_preferredappointmentdaycode;
  //  StringType
  parentaccountidname?: string;
  // Address 1: Name StringType Type a descriptive name for the primary address, such as Corporate Headquarters.
  address1_name?: string;
  // Rollup (Last Updated On) DateTimeType Last Updated time of rollup field Rollup. DateAndTime:UserLocal
  dev1_rollup_date?: Date;
  // Address 1: Fax StringType Type the fax number associated with the primary address.
  address1_fax?: string;
  // Parent Account LookupType Choose the parent account associated with this account to show parent and child businesses in reporting and analytics.
  parentaccountid?: import("../../types/EntityReference").EntityReference;
  // Address 1: Latitude DoubleType Type the latitude value for the primary address for use in mapping and other applications.
  address1_latitude?: number;
  // Do not allow Faxes BooleanType Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns.
  donotfax?: boolean;
  // Follow Email Activity BooleanType Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account.
  followemail?: boolean;
  // Address 2: ZIP/Postal Code StringType Type the ZIP Code or postal code for the secondary address.
  address2_postalcode?: string;
  // Address 2: Shipping Method account_account_address2_shippingmethodcode Select a shipping method for deliveries sent to this address.
  address2_shippingmethodcode?: import("../enums/account_account_address2_shippingmethodcode").account_account_address2_shippingmethodcode;
  // TeamsFollowed IntegerType Number of users or conversations followed the record
  teamsfollowed?: number;
  //  StringType
  primarycontactidyominame?: string;
  // Do not allow Emails BooleanType Select whether the account allows direct email sent from Microsoft Dynamics 365.
  donotemail?: boolean;
  // Rollup (State) IntegerType State of rollup field Rollup.
  dev1_rollup_state?: number;
  //  StringType
  preferredequipmentidname?: string;
  //  StringType
  modifiedbyname?: string;
  //  StringType
  masteraccountidyominame?: string;
  //  StringType
  createdbyyominame?: string;
  // Modified By (User Name) StringType
  adx_modifiedbyusername?: string;
  // Secured Optionset dev1_securedoptionset
  dev1_securedoptionset?: import("../enums/dev1_securedoptionset").dev1_securedoptionset;
  //  StringType
  masteraccountidname?: string;
  // Address 2: Street 1 StringType Type the first line of the secondary address.
  address2_line1?: string;
  // Address 1: Freight Terms account_account_address1_freighttermscode Select the freight terms for the primary address to make sure shipping orders are processed correctly.
  address1_freighttermscode?: import("../enums/account_account_address1_freighttermscode").account_account_address1_freighttermscode;
  // Address 1: UPS Zone StringType Type the UPS zone of the primary address to make sure shipping charges are calculated correctly and deliveries are made promptly, if shipped by UPS.
  address1_upszone?: string;
  // Address 2: County StringType Type the county for the secondary address.
  address2_county?: string;
  // Date Only Time Zone Independent DateTimeType DateOnly:TimeZoneIndependent
  dev1_dateonlytimezoneindependent?: Date;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference;
  // Territory Code account_account_territorycode Select a region or territory for the account for use in segmentation and analysis.
  territorycode?: import("../enums/account_account_territorycode").account_account_territorycode;
  // Default Image ImageType Shows the default image for the record.
  entityimage?: string;
  //  StringType
  modifiedonbehalfbyyominame?: string;
  //  StringType
  msdyn_accountkpiidname?: string;
  // FTP Site StringType Type the URL for the account's FTP site to enable users to access data and share documents.
  ftpsiteurl?: string;
  //  StringType
  preferredsystemuseridyominame?: string;
  // Number of Employees IntegerType Type the number of employees that work at the account for use in marketing segmentation and demographic analysis.
  numberofemployees?: number;
  // Address 2: Primary Contact Name StringType Type the name of the main contact at the account's secondary address.
  address2_primarycontactname?: string;
  //  StringType
  parentaccountidyominame?: string;
  // Tax Exempt BooleanType Select whether the account is tax exempt.
  msdyn_taxexempt?: boolean;
  // NetworkView StringType
  dev1_networkview?: string;
  // Address 2: Latitude DoubleType Type the latitude value for the secondary address for use in mapping and other applications.
  address2_latitude?: number;
  // Address 2: Street 2 StringType Type the second line of the secondary address.
  address2_line2?: string;
  // Do not allow Mails BooleanType Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns.
  donotpostalmail?: boolean;
  // Address 2: Telephone 1 StringType Type the main phone number associated with the secondary address.
  address2_telephone1?: string;
  // Process UniqueidentifierType Shows the ID of the process.
  processid?: import("../../types/Guid").Guid;
}

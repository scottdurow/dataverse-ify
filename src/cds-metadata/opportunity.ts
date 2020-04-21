/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { EntityReference } from "../types/EntityReference";
import { IEntity } from "../types/IEntity";
import { budgetstatus, initialcommunication, purchaseprocess } from "./globalOptionSets";
import { Guid } from "../types/Guid";

export const opportunityMetadata = {
  typeName: "mscrm.opportunity",
  logicalName: "opportunity",
  collectionName: "opportunities",
  primaryIdAttribute: "opportunityid",
  attributeTypes: {
    // Numeric Types
    actualvalue: "Money",
    actualvalue_base: "Money",
    budgetamount: "Money",
    budgetamount_base: "Money",
    closeprobability: "Integer",
    discountamount: "Money",
    discountamount_base: "Money",
    discountpercentage: "Decimal",
    estimatedvalue: "Money",
    estimatedvalue_base: "Money",
    exchangerate: "Decimal",
    freightamount: "Money",
    freightamount_base: "Money",
    importsequencenumber: "Integer",
    onholdtime: "Integer",
    teamsfollowed: "Integer",
    timezoneruleversionnumber: "Integer",
    totalamount: "Money",
    totalamount_base: "Money",
    totalamountlessfreight: "Money",
    totalamountlessfreight_base: "Money",
    totaldiscountamount: "Money",
    totaldiscountamount_base: "Money",
    totallineitemamount: "Money",
    totallineitemamount_base: "Money",
    totallineitemdiscountamount: "Money",
    totallineitemdiscountamount_base: "Money",
    totaltax: "Money",
    totaltax_base: "Money",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    budgetstatus: "Optionset",
    initialcommunication: "Optionset",
    msdyn_forecastcategory: "Optionset",
    msdyn_ordertype: "Optionset",
    need: "Optionset",
    opportunityratingcode: "Optionset",
    pricingerrorcode: "Optionset",
    prioritycode: "Optionset",
    purchaseprocess: "Optionset",
    purchasetimeframe: "Optionset",
    salesstage: "Optionset",
    salesstagecode: "Optionset",
    skippricecalculation: "Optionset",
    statecode: "Optionset",
    statuscode: "Optionset",
    timeline: "Optionset",
    // Date Formats
    actualclosedate: "DateOnly:DateOnly",
    createdon: "DateAndTime:UserLocal",
    estimatedclosedate: "DateOnly:DateOnly",
    finaldecisiondate: "DateOnly:DateOnly",
    lastonholdtime: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
    schedulefollowup_prospect: "DateOnly:UserLocal",
    schedulefollowup_qualify: "DateOnly:UserLocal",
    scheduleproposalmeeting: "DateOnly:UserLocal",
  },
  navigation: {
    campaignid: ["campaign"],
    createdby: ["systemuser"],
    createdonbehalfby: ["systemuser"],
    modifiedby: ["systemuser"],
    modifiedonbehalfby: ["systemuser"],
    msa_partnerid: ["account"],
    msa_partneroppid: ["contact"],
    msdyn_AccountManagerId: ["systemuser"],
    msdyn_ContractOrganizationalUnitId: ["msdyn_organizationalunit"],
    msdyn_opportunitykpiid: ["msdyn_opportunitykpiitem"],
    msdyn_workordertype: ["msdyn_workordertype"],
    originatingleadid: ["lead"],
    ownerid: ["principal"],
    owningbusinessunit: ["businessunit"],
    owningteam: ["team"],
    owninguser: ["systemuser"],
    parentaccountid: ["account"],
    parentcontactid: ["contact"],
    pricelevelid: ["pricelevel"],
    sla_opportunity_sla: ["sla"],
    stageid_processstage: ["processstage"],
    transactioncurrencyid: ["transactioncurrency"],
    customerid: ["account", "contact"],
    slainvokedid: ["sla"],
  },
};
export enum opportunity_msdyn_opportunity_msdyn_forecastcategory {
  Pipeline = 100000001,
  Best_case = 100000002,
  Committed = 100000003,
  Omitted = 100000004,
  Won = 100000005,
  Lost = 100000006,
}

export enum opportunity_msdyn_opportunity_msdyn_ordertype {
  Item_based = 192350000,
  ServiceMaintenance_Based = 690970002,
  Work_based = 192350001,
}

export enum need {
  Must_have = 0,
  Should_have = 1,
  Good_to_have = 2,
  No_need = 3,
}

export enum opportunity_opportunity_opportunityratingcode {
  Hot = 1,
  Warm = 2,
  Cold = 3,
}

export enum qooi_pricingerrorcode {
  None = 0,
  Detail_Error = 1,
  Missing_Price_Level = 2,
  Inactive_Price_Level = 3,
  Missing_Quantity = 4,
  Missing_Unit_Price = 5,
  Missing_Product = 6,
  Invalid_Product = 7,
  Missing_Pricing_Code = 8,
  Invalid_Pricing_Code = 9,
  Missing_UOM = 10,
  Product_Not_In_Price_Level = 11,
  Missing_Price_Level_Amount = 12,
  Missing_Price_Level_Percentage = 13,
  Missing_Price = 14,
  Missing_Current_Cost = 15,
  Missing_Standard_Cost = 16,
  Invalid_Price_Level_Amount = 17,
  Invalid_Price_Level_Percentage = 18,
  Invalid_Price = 19,
  Invalid_Current_Cost = 20,
  Invalid_Standard_Cost = 21,
  Invalid_Rounding_Policy = 22,
  Invalid_Rounding_Option = 23,
  Invalid_Rounding_Amount = 24,
  Price_Calculation_Error = 25,
  Invalid_Discount_Type = 26,
  Discount_Type_Invalid_State = 27,
  Invalid_Discount = 28,
  Invalid_Quantity = 29,
  Invalid_Pricing_Precision = 30,
  Missing_Product_Default_UOM = 31,
  Missing_Product_UOM_Schedule_ = 32,
  Inactive_Discount_Type = 33,
  Invalid_Price_Level_Currency = 34,
  Price_Attribute_Out_Of_Range = 35,
  Base_Currency_Attribute_Overflow = 36,
  Base_Currency_Attribute_Underflow = 37,
  Transaction_currency_is_not_set_for_the_product_price_list_item = 38,
}

export enum opportunity_opportunity_prioritycode {
  Default_Value = 1,
}

export enum purchasetimeframe {
  Immediate = 0,
  This_Quarter = 1,
  Next_Quarter = 2,
  This_Year = 3,
  Unknown = 4,
}

export enum opportunity_salesstage {
  Qualify = 0,
  Develop = 1,
  Propose = 2,
  Close = 3,
}

export enum opportunity_opportunity_salesstagecode {
  Default_Value = 1,
}

export enum qooi_skippricecalculation {
  DoPriceCalcAlways = 0,
  SkipPriceCalcOnRetrieve = 1,
}

export enum opportunity_opportunity_statecode {
  Open = 0,
  Won = 1,
  Lost = 2,
}

export enum opportunity_opportunity_statuscode {
  In_Progress = 1,
  On_Hold = 2,
  Won = 3,
  Canceled = 4,
  OutSold = 5,
}

export enum opportunity_opportunity_timeline {
  Immediate = 0,
  This_Quarter = 1,
  Next_Quarter = 2,
  This_Year = 3,
  Not_known = 4,
}

export enum OpportunityAttributes {
  AccountId = "accountid",
  ActualCloseDate = "actualclosedate",
  ActualValue = "actualvalue",
  ActualValue_Base = "actualvalue_base",
  BudgetAmount = "budgetamount",
  BudgetAmount_Base = "budgetamount_base",
  BudgetStatus = "budgetstatus",
  CampaignId = "campaignid",
  CaptureProposalFeedback = "captureproposalfeedback",
  CloseProbability = "closeprobability",
  CompleteFinalProposal = "completefinalproposal",
  CompleteInternalReview = "completeinternalreview",
  ConfirmInterest = "confirminterest",
  ContactId = "contactid",
  CreatedBy = "createdby",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CurrentSituation = "currentsituation",
  CustomerId = "customerid",
  CustomerNeed = "customerneed",
  CustomerPainPoints = "customerpainpoints",
  DecisionMaker = "decisionmaker",
  Description = "description",
  dev1_ProcessName = "dev1_processname",
  dev1_StageName = "dev1_stagename",
  DevelopProposal = "developproposal",
  DiscountAmount = "discountamount",
  DiscountAmount_Base = "discountamount_base",
  DiscountPercentage = "discountpercentage",
  EmailAddress = "emailaddress",
  EstimatedCloseDate = "estimatedclosedate",
  EstimatedValue = "estimatedvalue",
  EstimatedValue_Base = "estimatedvalue_base",
  EvaluateFit = "evaluatefit",
  ExchangeRate = "exchangerate",
  FileDebrief = "filedebrief",
  FinalDecisionDate = "finaldecisiondate",
  FreightAmount = "freightamount",
  FreightAmount_Base = "freightamount_base",
  IdentifyCompetitors = "identifycompetitors",
  IdentifyCustomerContacts = "identifycustomercontacts",
  IdentifyPursuitTeam = "identifypursuitteam",
  ImportSequenceNumber = "importsequencenumber",
  InitialCommunication = "initialcommunication",
  IsPrivate = "isprivate",
  IsRevenueSystemCalculated = "isrevenuesystemcalculated",
  LastOnHoldTime = "lastonholdtime",
  ModifiedBy = "modifiedby",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  msa_partnerid = "msa_partnerid",
  msa_partneroppid = "msa_partneroppid",
  msdyn_AccountManagerId = "msdyn_accountmanagerid",
  msdyn_ContractOrganizationalUnitId = "msdyn_contractorganizationalunitid",
  msdyn_forecastcategory = "msdyn_forecastcategory",
  msdyn_opportunitykpiid = "msdyn_opportunitykpiid",
  msdyn_OrderType = "msdyn_ordertype",
  msdyn_WorkOrderType = "msdyn_workordertype",
  Name = "name",
  Need = "need",
  OnHoldTime = "onholdtime",
  OpportunityId = "opportunityid",
  OpportunityRatingCode = "opportunityratingcode",
  OriginatingLeadId = "originatingleadid",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwningBusinessUnit = "owningbusinessunit",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  ParentAccountId = "parentaccountid",
  ParentContactId = "parentcontactid",
  ParticipatesInWorkflow = "participatesinworkflow",
  PresentFinalProposal = "presentfinalproposal",
  PresentProposal = "presentproposal",
  PriceLevelId = "pricelevelid",
  PricingErrorCode = "pricingerrorcode",
  PriorityCode = "prioritycode",
  ProcessId = "processid",
  ProposedSolution = "proposedsolution",
  PurchaseProcess = "purchaseprocess",
  PurchaseTimeframe = "purchasetimeframe",
  PursuitDecision = "pursuitdecision",
  QualificationComments = "qualificationcomments",
  QuoteComments = "quotecomments",
  ResolveFeedback = "resolvefeedback",
  SalesStage = "salesstage",
  SalesStageCode = "salesstagecode",
  ScheduleFollowup_Prospect = "schedulefollowup_prospect",
  ScheduleFollowup_Qualify = "schedulefollowup_qualify",
  ScheduleProposalMeeting = "scheduleproposalmeeting",
  SendThankYouNote = "sendthankyounote",
  SkipPriceCalculation = "skippricecalculation",
  SLAId = "slaid",
  SLAInvokedId = "slainvokedid",
  StageId = "stageid",
  StateCode = "statecode",
  StatusCode = "statuscode",
  StepId = "stepid",
  StepName = "stepname",
  TeamsFollowed = "teamsfollowed",
  TimeLine = "timeline",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  TotalAmount = "totalamount",
  TotalAmount_Base = "totalamount_base",
  TotalAmountLessFreight = "totalamountlessfreight",
  TotalAmountLessFreight_Base = "totalamountlessfreight_base",
  TotalDiscountAmount = "totaldiscountamount",
  TotalDiscountAmount_Base = "totaldiscountamount_base",
  TotalLineItemAmount = "totallineitemamount",
  TotalLineItemAmount_Base = "totallineitemamount_base",
  TotalLineItemDiscountAmount = "totallineitemdiscountamount",
  TotalLineItemDiscountAmount_Base = "totallineitemdiscountamount_base",
  TotalTax = "totaltax",
  TotalTax_Base = "totaltax_base",
  TransactionCurrencyId = "transactioncurrencyid",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}
export interface Opportunity extends IEntity {
  /**Account	LookupType
	Unique identifier of the account with which the opportunity is associated.
	*/
  accountid?: EntityReference;
  /**Actual Close Date	DateTimeType
	Shows the date and time when the opportunity was closed or canceled.
	DateOnly:DateOnly*/
  actualclosedate?: Date;
  /**Actual Revenue	MoneyType
	Type the actual revenue amount for the opportunity for reporting and analysis of estimated versus actual sales. Field defaults to the Est. Revenue value when an opportunity is won.
	*/
  actualvalue?: number;
  /**Actual Revenue (Base)	MoneyType
	Value of the Actual Revenue in base currency.
	*/
  actualvalue_base?: number;
  /**Budget Amount	MoneyType
	Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget.
	*/
  budgetamount?: number;
  /**Budget Amount (Base)	MoneyType
	Value of the Budget Amount in base currency.
	*/
  budgetamount_base?: number;
  /**Budget	budgetstatus
	Select the likely budget status for the lead's company. This may help determine the lead rating or your sales approach.
	*/
  budgetstatus?: budgetstatus;
  /**Source Campaign	LookupType
	Shows the campaign that the opportunity was created from. The ID is used for tracking the success of the campaign.
	*/
  campaignid?: EntityReference;
  /**Proposal Feedback Captured	BooleanType
	Choose whether the proposal feedback has been captured for the opportunity.
	*/
  captureproposalfeedback?: boolean;
  /**Probability	IntegerType
	Type a number from 0 to 100 that represents the likelihood of closing the opportunity. This can aid the sales team in their efforts to convert the opportunity in a sale.
	*/
  closeprobability?: number;
  /**Final Proposal Ready	BooleanType
	Select whether a final proposal has been completed for the opportunity.
	*/
  completefinalproposal?: boolean;
  /**Complete Internal Review	BooleanType
	Select whether an internal review has been completed for this opportunity.
	*/
  completeinternalreview?: boolean;
  /**Confirm Interest	BooleanType
	Select whether the lead confirmed interest in your offerings. This helps in determining the lead quality and the probability of it turning into an opportunity.
	*/
  confirminterest?: boolean;
  /**Contact	LookupType
	Unique identifier of the contact associated with the opportunity.
	*/
  contactid?: EntityReference;
  /**Created By	LookupType
	Shows who created the record.
	*/
  createdby?: EntityReference;
  /**Created On	DateTimeType
	Date and time when the record was created.
	DateAndTime:UserLocal*/
  createdon?: Date;
  /**Created By (Delegate)	LookupType
	Shows who created the record on behalf of another user.
	*/
  createdonbehalfby?: EntityReference;
  /**Current Situation	MemoType
	Type notes about the company or organization associated with the opportunity.
	*/
  currentsituation?: string;
  /**Potential Customer(Required)	CustomerType
	Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders.
	*/
  customerid?: EntityReference;
  /**Customer Need	MemoType
	Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements.
	*/
  customerneed?: string;
  /**Customer Pain Points	MemoType
	Type notes about the customer's pain points to help the sales team identify products and services that could address these pain points.
	*/
  customerpainpoints?: string;
  /**Decision Maker?	BooleanType
	Select whether your notes include information about who makes the purchase decisions at the lead's company.
	*/
  decisionmaker?: boolean;
  /**Description	MemoType
	Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer.
	*/
  description?: string;
  /**Process Name	StringType
	
	*/
  dev1_processname?: string;
  /**Stage Name	StringType
	
	*/
  dev1_stagename?: string;
  /**Develop Proposal	BooleanType
	Select whether a proposal has been developed for the opportunity.
	*/
  developproposal?: boolean;
  /**Opportunity Discount Amount	MoneyType
	Type the discount amount for the opportunity if the customer is eligible for special savings.
	*/
  discountamount?: number;
  /**Opportunity Discount Amount (Base)	MoneyType
	Value of the Opportunity Discount Amount in base currency.
	*/
  discountamount_base?: number;
  /**Opportunity Discount (%)	DecimalType
	Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity.
	*/
  discountpercentage?: number;
  /**Email Address	StringType
	The primary email address for the entity.
	*/
  emailaddress?: string;
  /**Est. Close Date	DateTimeType
	Enter the expected closing date of the opportunity to help make accurate revenue forecasts.
	DateOnly:DateOnly*/
  estimatedclosedate?: Date;
  /**Est. Revenue	MoneyType
	Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field.
	*/
  estimatedvalue?: number;
  /**Est. Revenue (Base)	MoneyType
	Value of the Est. Revenue in base currency.
	*/
  estimatedvalue_base?: number;
  /**Evaluate Fit	BooleanType
	Select whether the fit between the lead's requirements and your offerings was evaluated.
	*/
  evaluatefit?: boolean;
  /**Exchange Rate	DecimalType
	Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
	*/
  exchangerate?: number;
  /**File Debrief	BooleanType
	Choose whether the sales team has recorded detailed notes on the proposals and the account's responses.
	*/
  filedebrief?: boolean;
  /**Final Decision Date	DateTimeType
	Enter the date and time when the final decision of the opportunity was made.
	DateOnly:DateOnly*/
  finaldecisiondate?: Date;
  /**Freight Amount	MoneyType
	Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field.
	*/
  freightamount?: number;
  /**Freight Amount (Base)	MoneyType
	Value of the Freight Amount in base currency.
	*/
  freightamount_base?: number;
  /**Identify Competitors	BooleanType
	Select whether information about competitors is included.
	*/
  identifycompetitors?: boolean;
  /**Identify Customer Contacts	BooleanType
	Select whether the customer contacts for this opportunity have been identified.
	*/
  identifycustomercontacts?: boolean;
  /**Identify Sales Team	BooleanType
	Choose whether you have recorded who will pursue the opportunity.
	*/
  identifypursuitteam?: boolean;
  /**Import Sequence Number	IntegerType
	Sequence number of the import that created this record.
	*/
  importsequencenumber?: number;
  /**Initial Communication	initialcommunication
	Choose whether someone from the sales team contacted this lead earlier.
	*/
  initialcommunication?: initialcommunication;
  /**Is Private	BooleanType
	Indicates whether the opportunity is private or visible to the entire organization.
	*/
  isprivate?: boolean;
  /**Revenue	BooleanType
	Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user.
	*/
  isrevenuesystemcalculated?: boolean;
  /**Last On Hold Time	DateTimeType
	Contains the date time stamp of the last on hold time.
	DateAndTime:UserLocal*/
  lastonholdtime?: Date;
  /**Modified By	LookupType
	Shows who last updated the record.
	*/
  modifiedby?: EntityReference;
  /**Modified On	DateTimeType
	Date and time when the record was modified.
	DateAndTime:UserLocal*/
  modifiedon?: Date;
  /**Modified By (Delegate)	LookupType
	Shows who last updated the record on behalf of another user.
	*/
  modifiedonbehalfby?: EntityReference;
  /**Partner	LookupType
	Unique identifier for Account associated with Opportunity.
	*/
  msa_partnerid?: EntityReference;
  /**Partner Contact	LookupType
	Unique identifier for Contact associated with Opportunity.
	*/
  msa_partneroppid?: EntityReference;
  /**Account Manager	LookupType
	The account manager responsible for the opportunity.
	*/
  msdyn_accountmanagerid?: EntityReference;
  /**Contracting Unit	LookupType
	The organizational unit in charge of the opportunity.
	*/
  msdyn_contractorganizationalunitid?: EntityReference;
  /**Forecast category	opportunity_msdyn_opportunity_msdyn_forecastcategory
	Categories used for forecasting.
	*/
  msdyn_forecastcategory?: opportunity_msdyn_opportunity_msdyn_forecastcategory;
  /**KPI	LookupType
	Maps to opportunity KPI records
	*/
  msdyn_opportunitykpiid?: EntityReference;
  /**Order Type	opportunity_msdyn_opportunity_msdyn_ordertype
	Internal use only.
	*/
  msdyn_ordertype?: opportunity_msdyn_opportunity_msdyn_ordertype;
  /**Work Order Type	LookupType
	Unique identifier for Work Order Type associated with Opportunity.
	*/
  msdyn_workordertype?: EntityReference;
  /**Topic(Required)	StringType
	Type a subject or descriptive name, such as the expected order or company name, for the opportunity.
	*/
  name?: string;
  /**Need	need
	Choose how high the level of need is for the lead's company.
	*/
  need?: need;
  /**On Hold Time (Minutes)	IntegerType
	Shows the duration in minutes for which the opportunity was on hold.
	*/
  onholdtime?: number;
  /**Opportunity	UniqueidentifierType
	Unique identifier of the opportunity.
	*/
  opportunityid?: Guid;
  /**Rating	opportunity_opportunity_opportunityratingcode
	Select the expected value or priority of the opportunity based on revenue, customer status, or closing probability.
	*/
  opportunityratingcode?: opportunity_opportunity_opportunityratingcode;
  /**Originating Lead	LookupType
	Choose the lead that the opportunity was created from for reporting and analytics. The field is read-only after the opportunity is created and defaults to the correct lead when an opportunity is created from a converted lead.
	*/
  originatingleadid?: EntityReference;
  /**Record Created On	DateTimeType
	Date and time that the record was migrated.
	DateOnly:UserLocal*/
  overriddencreatedon?: Date;
  /**Owner	OwnerType
	Owner Id
	*/
  ownerid?: EntityReference;
  /**Owning Business Unit	LookupType
	Unique identifier for the business unit that owns the record
	*/
  owningbusinessunit?: EntityReference;
  /**Owning Team	LookupType
	Unique identifier for the team that owns the record.
	*/
  owningteam?: EntityReference;
  /**Owning User	LookupType
	Unique identifier for the user that owns the record.
	*/
  owninguser?: EntityReference;
  /**Account	LookupType
	Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities.
	*/
  parentaccountid?: EntityReference;
  /**Contact	LookupType
	Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics.
	*/
  parentcontactid?: EntityReference;
  /**Participates in Workflow	BooleanType
	Information about whether the opportunity participates in workflow rules.
	*/
  participatesinworkflow?: boolean;
  /**Present Final Proposal	BooleanType
	Select whether the final proposal has been presented to the account.
	*/
  presentfinalproposal?: boolean;
  /**Presented Proposal	BooleanType
	Select whether a proposal for the opportunity has been presented to the account.
	*/
  presentproposal?: boolean;
  /**Price List	LookupType
	Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices.
	*/
  pricelevelid?: EntityReference;
  /**Pricing Error 	qooi_pricingerrorcode
	Pricing error for the opportunity.
	*/
  pricingerrorcode?: qooi_pricingerrorcode;
  /**Priority	opportunity_opportunity_prioritycode
	Select the priority so that preferred customers or critical issues are handled quickly.
	*/
  prioritycode?: opportunity_opportunity_prioritycode;
  /**Process Id	UniqueidentifierType
	Contains the id of the process associated with the entity.
	*/
  processid?: Guid;
  /**Proposed Solution	MemoType
	Type notes about the proposed solution for the opportunity.
	*/
  proposedsolution?: string;
  /**Purchase Process	purchaseprocess
	Choose whether an individual or a committee will be involved in the  purchase process for the lead.
	*/
  purchaseprocess?: purchaseprocess;
  /**Purchase Timeframe	purchasetimeframe
	Choose how long the lead will likely take to make the purchase.
	*/
  purchasetimeframe?: purchasetimeframe;
  /**Decide Go/No-Go	BooleanType
	Select whether the decision about pursuing the opportunity has been made.
	*/
  pursuitdecision?: boolean;
  /**Qualification Comments	MemoType
	Type comments about the qualification or scoring of the lead.
	*/
  qualificationcomments?: string;
  /**Quote Comments	MemoType
	Type comments about the quotes associated with the opportunity.
	*/
  quotecomments?: string;
  /**Feedback Resolved	BooleanType
	Choose whether the proposal feedback has been captured and resolved for the opportunity.
	*/
  resolvefeedback?: boolean;
  /**Sales Stage	opportunity_salesstage
	Select the sales stage of this opportunity to aid the sales team in their efforts to win this opportunity.
	*/
  salesstage?: opportunity_salesstage;
  /**Process Code	opportunity_opportunity_salesstagecode
	Select the sales process stage for the opportunity to indicate the probability of closing the opportunity.
	*/
  salesstagecode?: opportunity_opportunity_salesstagecode;
  /**Scheduled Follow up (Prospect)	DateTimeType
	Enter the date and time of the prospecting follow-up meeting with the lead.
	DateOnly:UserLocal*/
  schedulefollowup_prospect?: Date;
  /**Scheduled Follow up (Qualify)	DateTimeType
	Enter the date and time of the qualifying follow-up meeting with the lead.
	DateOnly:UserLocal*/
  schedulefollowup_qualify?: Date;
  /**Schedule Proposal Meeting	DateTimeType
	Enter the date and time of the proposal meeting for the opportunity.
	DateOnly:UserLocal*/
  scheduleproposalmeeting?: Date;
  /**Send Thank You Note	BooleanType
	Select whether a thank you note has been sent to the account for considering the proposal.
	*/
  sendthankyounote?: boolean;
  /**Skip Price Calculation	qooi_skippricecalculation
	Skip Price Calculation (For Internal Use)
	*/
  skippricecalculation?: qooi_skippricecalculation;
  /**SLA	LookupType
	Choose the service level agreement (SLA) that you want to apply to the opportunity record.
	*/
  slaid?: EntityReference;
  /**Last SLA applied	LookupType
	Last SLA that was applied to this opportunity. This field is for internal use only.
	*/
  slainvokedid?: EntityReference;
  /**Stage Id	UniqueidentifierType
	Contains the id of the stage where the entity is located.
	*/
  stageid?: Guid;
  /**Status	opportunity_opportunity_statecode
	Shows whether the opportunity is open, won, or lost. Won and lost opportunities are read-only and can't be edited until they are reactivated.
	*/
  statecode?: opportunity_opportunity_statecode;
  /**Status Reason	opportunity_opportunity_statuscode
	Select the opportunity's status.
	*/
  statuscode?: opportunity_opportunity_statuscode;
  /**Step	UniqueidentifierType
	Shows the ID of the workflow step.
	*/
  stepid?: Guid;
  /**Pipeline Phase	StringType
	Shows the current phase in the sales pipeline for the opportunity. This is updated by a workflow.
	*/
  stepname?: string;
  /**TeamsFollowed	IntegerType
	Number of users or conversations followed the record
	*/
  teamsfollowed?: number;
  /**Timeline	opportunity_opportunity_timeline
	Select when the opportunity is likely to be closed.
	*/
  timeline?: opportunity_opportunity_timeline;
  /**Time Spent by me	StringType
	Total time spent for emails (read and write) and meetings by me in relation to the opportunity record.
	*/
  timespentbymeonemailandmeetings?: string;
  /**Time Zone Rule Version Number	IntegerType
	For internal use only.
	*/
  timezoneruleversionnumber?: number;
  /**Total Amount	MoneyType
	Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity.
	*/
  totalamount?: number;
  /**Total Amount (Base)	MoneyType
	Value of the Total Amount in base currency.
	*/
  totalamount_base?: number;
  /**Total Pre-Freight Amount	MoneyType
	Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity.
	*/
  totalamountlessfreight?: number;
  /**Total Pre-Freight Amount (Base)	MoneyType
	Value of the Total Pre-Freight Amount in base currency.
	*/
  totalamountlessfreight_base?: number;
  /**Total Discount Amount	MoneyType
	Shows the total discount amount, based on the discount price and rate entered on the opportunity.
	*/
  totaldiscountamount?: number;
  /**Total Discount Amount (Base)	MoneyType
	Value of the Total Discount Amount in base currency.
	*/
  totaldiscountamount_base?: number;
  /**Total Detail Amount	MoneyType
	Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities.
	*/
  totallineitemamount?: number;
  /**Total Detail Amount (Base)	MoneyType
	Value of the Total Detail Amount in base currency.
	*/
  totallineitemamount_base?: number;
  /**Total Line Item Discount Amount	MoneyType
	Shows the total of the Manual Discount amounts specified on all products included in the opportunity. This value is reflected in the Total Detail Amount field on the opportunity and is added to any discount amount or rate specified on the opportunity.
	*/
  totallineitemdiscountamount?: number;
  /**Total Line Item Discount Amount (Base)	MoneyType
	Value of the Total Line Item Discount Amount in base currency.
	*/
  totallineitemdiscountamount_base?: number;
  /**Total Tax	MoneyType
	Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity.
	*/
  totaltax?: number;
  /**Total Tax (Base)	MoneyType
	Value of the Total Tax in base currency.
	*/
  totaltax_base?: number;
  /**Currency(Required)	LookupType
	Choose the local currency for the record to make sure budgets are reported in the correct currency.
	*/
  transactioncurrencyid?: EntityReference;
  /**Traversed Path	StringType
	A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
	*/
  traversedpath?: string;
  /**UTC Conversion Time Zone Code	IntegerType
	Time zone code that was in use when the record was created.
	*/
  utcconversiontimezonecode?: number;
  /**Version Number	BigIntType
	Version Number
	*/
  versionnumber?: number;
}

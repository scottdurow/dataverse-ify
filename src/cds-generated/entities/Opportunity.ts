/* eslint-disable*/
import { IEntity } from "../../types/IEntity";
// Entity Opportunity
export const opportunityMetadata = {
  typeName: "mscrm.opportunity",
  logicalName: "opportunity",
  collectionName: "opportunities",
  primaryIdAttribute: "opportunityid",
  attributeTypes: {
    // Numeric Types
    exchangerate: "Decimal",
    discountamount_base: "Money",
    totalamountlessfreight: "Money",
    totallineitemamount_base: "Money",
    versionnumber: "BigInt",
    discountamount: "Money",
    totallineitemamount: "Money",
    discountpercentage: "Decimal",
    utcconversiontimezonecode: "Integer",
    onholdtime: "Integer",
    actualvalue: "Money",
    teamsfollowed: "Integer",
    freightamount_base: "Money",
    budgetamount: "Money",
    totaltax: "Money",
    totallineitemdiscountamount: "Money",
    importsequencenumber: "Integer",
    totaldiscountamount: "Money",
    totaltax_base: "Money",
    totallineitemdiscountamount_base: "Money",
    totalamountlessfreight_base: "Money",
    estimatedvalue_base: "Money",
    actualvalue_base: "Money",
    estimatedvalue: "Money",
    totalamount: "Money",
    totalamount_base: "Money",
    budgetamount_base: "Money",
    closeprobability: "Integer",
    timezoneruleversionnumber: "Integer",
    freightamount: "Money",
    totaldiscountamount_base: "Money",
    // Optionsets
    timeline: "Optionset",
    msdyn_ordertype: "Optionset",
    prioritycode: "Optionset",
    opportunityratingcode: "Optionset",
    purchasetimeframe: "Optionset",
    statuscode: "Optionset",
    initialcommunication: "Optionset",
    skippricecalculation: "Optionset",
    salesstagecode: "Optionset",
    purchaseprocess: "Optionset",
    need: "Optionset",
    statecode: "Optionset",
    salesstage: "Optionset",
    budgetstatus: "Optionset",
    pricingerrorcode: "Optionset",
    msdyn_forecastcategory: "Optionset",
    // Date Formats
    actualclosedate: "DateOnly:DateOnly",
    overriddencreatedon: "DateOnly:UserLocal",
    schedulefollowup_qualify: "DateOnly:UserLocal",
    finaldecisiondate: "DateOnly:DateOnly",
    createdon: "DateAndTime:UserLocal",
    schedulefollowup_prospect: "DateOnly:UserLocal",
    estimatedclosedate: "DateOnly:DateOnly",
    modifiedon: "DateAndTime:UserLocal",
    lastonholdtime: "DateAndTime:UserLocal",
    scheduleproposalmeeting: "DateOnly:UserLocal",
  },
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    stageid_processstage: ["mscrm.processstage"],
    sla_opportunity_sla: ["mscrm.sla"],
    pricelevelid: ["mscrm.pricelevel"],
    parentcontactid: ["mscrm.contact"],
    parentaccountid: ["mscrm.account"],
    owninguser: ["mscrm.systemuser"],
    owningteam: ["mscrm.team"],
    owningbusinessunit: ["mscrm.businessunit"],
    ownerid: ["mscrm.principal"],
    originatingleadid: ["mscrm.lead"],
    msdyn_workordertype: ["mscrm.msdyn_workordertype"],
    msdyn_opportunitykpiid: ["mscrm.msdyn_opportunitykpiitem"],
    msdyn_ContractOrganizationalUnitId: ["mscrm.msdyn_organizationalunit"],
    msdyn_AccountManagerId: ["mscrm.systemuser"],
    msa_partneroppid: ["mscrm.contact"],
    msa_partnerid: ["mscrm.account"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    createdby: ["mscrm.systemuser"],
    campaignid: ["mscrm.campaign"],
    customerid: ["account","contact"],
    slainvokedid: ["sla"],
  },
};

// Attribute constants
export enum OpportunityAttributes {
  OwnerIdType = "owneridtype",
  msdyn_AccountManagerIdName = "msdyn_accountmanageridname",
  StageId = "stageid",
  ExchangeRate = "exchangerate",
  DiscountAmount_Base = "discountamount_base",
  OwnerId = "ownerid",
  CreatedByYomiName = "createdbyyominame",
  TotalAmountLessFreight = "totalamountlessfreight",
  TimeSpentByMeOnEmailAndMeetings = "timespentbymeonemailandmeetings",
  QualificationComments = "qualificationcomments",
  AccountIdYomiName = "accountidyominame",
  OwningUser = "owninguser",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  TotalLineItemAmount_Base = "totallineitemamount_base",
  CustomerIdType = "customeridtype",
  ParentContactIdName = "parentcontactidname",
  VersionNumber = "versionnumber",
  DiscountAmount = "discountamount",
  CustomerIdName = "customeridname",
  ParentAccountIdYomiName = "parentaccountidyominame",
  TotalLineItemAmount = "totallineitemamount",
  msdyn_AccountManagerId = "msdyn_accountmanagerid",
  CustomerNeed = "customerneed",
  DiscountPercentage = "discountpercentage",
  CustomerPainPoints = "customerpainpoints",
  ConfirmInterest = "confirminterest",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  CompleteFinalProposal = "completefinalproposal",
  TimeLine = "timeline",
  ParentContactId = "parentcontactid",
  OriginatingLeadId = "originatingleadid",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  msa_partneroppidYomiName = "msa_partneroppidyominame",
  msdyn_OrderType = "msdyn_ordertype",
  ContactId = "contactid",
  OnHoldTime = "onholdtime",
  CurrentSituation = "currentsituation",
  FileDebrief = "filedebrief",
  CustomerId = "customerid",
  PriorityCode = "prioritycode",
  OpportunityRatingCode = "opportunityratingcode",
  ContactIdYomiName = "contactidyominame",
  ModifiedByName = "modifiedbyname",
  msdyn_ContractOrganizationalUnitId = "msdyn_contractorganizationalunitid",
  OwningTeam = "owningteam",
  OwnerIdYomiName = "owneridyominame",
  DevelopProposal = "developproposal",
  ActualCloseDate = "actualclosedate",
  ProcessId = "processid",
  OverriddenCreatedOn = "overriddencreatedon",
  EmailAddress = "emailaddress",
  CampaignId = "campaignid",
  PurchaseTimeframe = "purchasetimeframe",
  ScheduleFollowup_Qualify = "schedulefollowup_qualify",
  ActualValue = "actualvalue",
  msdyn_WorkOrderTypeName = "msdyn_workordertypename",
  StatusCode = "statuscode",
  TeamsFollowed = "teamsfollowed",
  FreightAmount_Base = "freightamount_base",
  ProposedSolution = "proposedsolution",
  Description = "description",
  ParentAccountIdName = "parentaccountidname",
  BudgetAmount = "budgetamount",
  InitialCommunication = "initialcommunication",
  TotalTax = "totaltax",
  FinalDecisionDate = "finaldecisiondate",
  SkipPriceCalculation = "skippricecalculation",
  OriginatingLeadIdYomiName = "originatingleadidyominame",
  StepName = "stepname",
  CreatedByName = "createdbyname",
  IsRevenueSystemCalculated = "isrevenuesystemcalculated",
  SLAInvokedId = "slainvokedid",
  SalesStageCode = "salesstagecode",
  SendThankYouNote = "sendthankyounote",
  TotalLineItemDiscountAmount = "totallineitemdiscountamount",
  OpportunityId = "opportunityid",
  ImportSequenceNumber = "importsequencenumber",
  CreatedOn = "createdon",
  CaptureProposalFeedback = "captureproposalfeedback",
  msa_partneridName = "msa_partneridname",
  SLAName = "slaname",
  msa_partneroppidName = "msa_partneroppidname",
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TotalDiscountAmount = "totaldiscountamount",
  dev1_StageName = "dev1_stagename",
  ParticipatesInWorkflow = "participatesinworkflow",
  CustomerIdYomiName = "customeridyominame",
  ParentContactIdYomiName = "parentcontactidyominame",
  ResolveFeedback = "resolvefeedback",
  CreatedOnBehalfBy = "createdonbehalfby",
  PursuitDecision = "pursuitdecision",
  OriginatingLeadIdName = "originatingleadidname",
  EvaluateFit = "evaluatefit",
  TransactionCurrencyId = "transactioncurrencyid",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  PurchaseProcess = "purchaseprocess",
  IsPrivate = "isprivate",
  ScheduleFollowup_Prospect = "schedulefollowup_prospect",
  TotalTax_Base = "totaltax_base",
  Need = "need",
  TotalLineItemDiscountAmount_Base = "totallineitemdiscountamount_base",
  SLAInvokedIdName = "slainvokedidname",
  StateCode = "statecode",
  SalesStage = "salesstage",
  msdyn_WorkOrderType = "msdyn_workordertype",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  EstimatedCloseDate = "estimatedclosedate",
  TotalAmountLessFreight_Base = "totalamountlessfreight_base",
  EstimatedValue_Base = "estimatedvalue_base",
  ModifiedOn = "modifiedon",
  ModifiedBy = "modifiedby",
  ParentAccountId = "parentaccountid",
  ActualValue_Base = "actualvalue_base",
  msdyn_opportunitykpiidName = "msdyn_opportunitykpiidname",
  msdyn_ContractOrganizationalUnitIdName = "msdyn_contractorganizationalunitidname",
  CompleteInternalReview = "completeinternalreview",
  msa_partneroppid = "msa_partneroppid",
  AccountId = "accountid",
  AccountIdName = "accountidname",
  msdyn_opportunitykpiid = "msdyn_opportunitykpiid",
  SLAId = "slaid",
  EstimatedValue = "estimatedvalue",
  OwnerIdName = "owneridname",
  BudgetStatus = "budgetstatus",
  PriceLevelId = "pricelevelid",
  IdentifyPursuitTeam = "identifypursuitteam",
  LastOnHoldTime = "lastonholdtime",
  TotalAmount = "totalamount",
  PricingErrorCode = "pricingerrorcode",
  ContactIdName = "contactidname",
  dev1_ProcessName = "dev1_processname",
  OwningBusinessUnit = "owningbusinessunit",
  msa_partneridYomiName = "msa_partneridyominame",
  TotalAmount_Base = "totalamount_base",
  PriceLevelIdName = "pricelevelidname",
  IdentifyCompetitors = "identifycompetitors",
  msdyn_AccountManagerIdYomiName = "msdyn_accountmanageridyominame",
  msdyn_forecastcategory = "msdyn_forecastcategory",
  QuoteComments = "quotecomments",
  DecisionMaker = "decisionmaker",
  BudgetAmount_Base = "budgetamount_base",
  PresentFinalProposal = "presentfinalproposal",
  ScheduleProposalMeeting = "scheduleproposalmeeting",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  CloseProbability = "closeprobability",
  Name = "name",
  CampaignIdName = "campaignidname",
  PresentProposal = "presentproposal",
  CreatedBy = "createdby",
  TraversedPath = "traversedpath",
  IdentifyCustomerContacts = "identifycustomercontacts",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  msa_partnerid = "msa_partnerid",
  StepId = "stepid",
  FreightAmount = "freightamount",
  TotalDiscountAmount_Base = "totaldiscountamount_base",
}

// Early Bound Interface
export interface Opportunity extends IEntity {
  //  EntityNameType Owner Id Type
  owneridtype?: string;
  //  StringType
  msdyn_accountmanageridname?: string;
  // Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("../../types/Guid").Guid;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number;
  // Opportunity Discount Amount (Base) MoneyType Value of the Opportunity Discount Amount in base currency.
  discountamount_base?: number;
  // Owner OwnerType Owner Id
  ownerid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  createdbyyominame?: string;
  // Total Pre-Freight Amount MoneyType Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity.
  totalamountlessfreight?: number;
  // Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to the opportunity record.
  timespentbymeonemailandmeetings?: string;
  // Qualification Comments MemoType Type comments about the qualification or scoring of the lead.
  qualificationcomments?: string;
  //  StringType
  accountidyominame?: string;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("../../types/EntityReference").EntityReference;
  //  StringType
  modifiedonbehalfbyname?: string;
  // Total Detail Amount (Base) MoneyType Value of the Total Detail Amount in base currency.
  totallineitemamount_base?: number;
  // Potential Customer Type [Required] EntityNameType
  customeridtype?: string;
  //  StringType
  parentcontactidname?: string;
  // Version Number BigIntType Version Number
  versionnumber?: number;
  // Opportunity Discount Amount MoneyType Type the discount amount for the opportunity if the customer is eligible for special savings.
  discountamount?: number;
  //  [Required] StringType
  customeridname?: string;
  //  StringType
  parentaccountidyominame?: string;
  // Total Detail Amount MoneyType Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities.
  totallineitemamount?: number;
  // Account Manager LookupType The account manager responsible for the opportunity.
  msdyn_accountmanagerid?: import("../../types/EntityReference").EntityReference;
  // Customer Need MemoType Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements.
  customerneed?: string;
  // Opportunity Discount (%) DecimalType Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity.
  discountpercentage?: number;
  // Customer Pain Points MemoType Type notes about the customer's pain points to help the sales team identify products and services that could address these pain points.
  customerpainpoints?: string;
  // Confirm Interest BooleanType Select whether the lead confirmed interest in your offerings. This helps in determining the lead quality and the probability of it turning into an opportunity.
  confirminterest?: boolean;
  //  StringType
  createdonbehalfbyyominame?: string;
  // Final Proposal Ready BooleanType Select whether a final proposal has been completed for the opportunity.
  completefinalproposal?: boolean;
  // Timeline opportunity_opportunity_timeline Select when the opportunity is likely to be closed.
  timeline?: import("../enums/opportunity_opportunity_timeline").opportunity_opportunity_timeline;
  // Contact LookupType Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics.
  parentcontactid?: import("../../types/EntityReference").EntityReference;
  // Originating Lead LookupType Choose the lead that the opportunity was created from for reporting and analytics. The field is read-only after the opportunity is created and defaults to the correct lead when an opportunity is created from a converted lead.
  originatingleadid?: import("../../types/EntityReference").EntityReference;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number;
  //  StringType
  msa_partneroppidyominame?: string;
  // Order Type opportunity_msdyn_opportunity_msdyn_ordertype Internal use only.
  msdyn_ordertype?: import("../enums/opportunity_msdyn_opportunity_msdyn_ordertype").opportunity_msdyn_opportunity_msdyn_ordertype;
  // Contact LookupType Unique identifier of the contact associated with the opportunity.
  contactid?: import("../../types/EntityReference").EntityReference;
  // On Hold Time (Minutes) IntegerType Shows the duration in minutes for which the opportunity was on hold.
  onholdtime?: number;
  // Current Situation MemoType Type notes about the company or organization associated with the opportunity.
  currentsituation?: string;
  // File Debrief BooleanType Choose whether the sales team has recorded detailed notes on the proposals and the account's responses.
  filedebrief?: boolean;
  // Potential Customer [Required] CustomerType Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders.
  customerid?: import("../../types/EntityReference").EntityReference;
  // Priority opportunity_opportunity_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/opportunity_opportunity_prioritycode").opportunity_opportunity_prioritycode;
  // Rating opportunity_opportunity_opportunityratingcode Select the expected value or priority of the opportunity based on revenue, customer status, or closing probability.
  opportunityratingcode?: import("../enums/opportunity_opportunity_opportunityratingcode").opportunity_opportunity_opportunityratingcode;
  //  StringType
  contactidyominame?: string;
  //  StringType
  modifiedbyname?: string;
  // Contracting Unit LookupType The organizational unit in charge of the opportunity.
  msdyn_contractorganizationalunitid?: import("../../types/EntityReference").EntityReference;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("../../types/EntityReference").EntityReference;
  //  StringType Yomi name of the owner
  owneridyominame?: string;
  // Develop Proposal BooleanType Select whether a proposal has been developed for the opportunity.
  developproposal?: boolean;
  // Actual Close Date DateTimeType Shows the date and time when the opportunity was closed or canceled. DateOnly:DateOnly
  actualclosedate?: Date;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("../../types/Guid").Guid;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date;
  // Email Address StringType The primary email address for the entity.
  emailaddress?: string;
  // Source Campaign LookupType Shows the campaign that the opportunity was created from. The ID is used for tracking the success of the campaign.
  campaignid?: import("../../types/EntityReference").EntityReference;
  // Purchase Timeframe purchasetimeframe Choose how long the lead will likely take to make the purchase.
  purchasetimeframe?: import("../enums/purchasetimeframe").purchasetimeframe;
  // Scheduled Follow up (Qualify) DateTimeType Enter the date and time of the qualifying follow-up meeting with the lead. DateOnly:UserLocal
  schedulefollowup_qualify?: Date;
  // Actual Revenue MoneyType Type the actual revenue amount for the opportunity for reporting and analysis of estimated versus actual sales. Field defaults to the Est. Revenue value when an opportunity is won.
  actualvalue?: number;
  //  StringType
  msdyn_workordertypename?: string;
  // Status Reason opportunity_opportunity_statuscode Select the opportunity's status.
  statuscode?: import("../enums/opportunity_opportunity_statuscode").opportunity_opportunity_statuscode;
  // TeamsFollowed IntegerType Number of users or conversations followed the record
  teamsfollowed?: number;
  // Freight Amount (Base) MoneyType Value of the Freight Amount in base currency.
  freightamount_base?: number;
  // Proposed Solution MemoType Type notes about the proposed solution for the opportunity.
  proposedsolution?: string;
  // Description MemoType Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer.
  description?: string;
  //  StringType
  parentaccountidname?: string;
  // Budget Amount MoneyType Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget.
  budgetamount?: number;
  // Initial Communication initialcommunication Choose whether someone from the sales team contacted this lead earlier.
  initialcommunication?: import("../enums/initialcommunication").initialcommunication;
  // Total Tax MoneyType Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity.
  totaltax?: number;
  // Final Decision Date DateTimeType Enter the date and time when the final decision of the opportunity was made. DateOnly:DateOnly
  finaldecisiondate?: Date;
  // Skip Price Calculation qooi_skippricecalculation Skip Price Calculation (For Internal Use)
  skippricecalculation?: import("../enums/qooi_skippricecalculation").qooi_skippricecalculation;
  //  StringType
  originatingleadidyominame?: string;
  // Pipeline Phase StringType Shows the current phase in the sales pipeline for the opportunity. This is updated by a workflow.
  stepname?: string;
  //  StringType
  createdbyname?: string;
  // Revenue BooleanType Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user.
  isrevenuesystemcalculated?: boolean;
  // Last SLA applied LookupType Last SLA that was applied to this opportunity. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference;
  // Process Code opportunity_opportunity_salesstagecode Select the sales process stage for the opportunity to indicate the probability of closing the opportunity.
  salesstagecode?: import("../enums/opportunity_opportunity_salesstagecode").opportunity_opportunity_salesstagecode;
  // Send Thank You Note BooleanType Select whether a thank you note has been sent to the account for considering the proposal.
  sendthankyounote?: boolean;
  // Total Line Item Discount Amount MoneyType Shows the total of the Manual Discount amounts specified on all products included in the opportunity. This value is reflected in the Total Detail Amount field on the opportunity and is added to any discount amount or rate specified on the opportunity.
  totallineitemdiscountamount?: number;
  // Opportunity UniqueidentifierType Unique identifier of the opportunity.
  opportunityid?: import("../../types/Guid").Guid;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date;
  // Proposal Feedback Captured BooleanType Choose whether the proposal feedback has been captured for the opportunity.
  captureproposalfeedback?: boolean;
  //  StringType
  msa_partneridname?: string;
  //  StringType
  slaname?: string;
  //  StringType
  msa_partneroppidname?: string;
  //  StringType
  transactioncurrencyidname?: string;
  // Total Discount Amount MoneyType Shows the total discount amount, based on the discount price and rate entered on the opportunity.
  totaldiscountamount?: number;
  // Stage Name StringType
  dev1_stagename?: string;
  // Participates in Workflow BooleanType Information about whether the opportunity participates in workflow rules.
  participatesinworkflow?: boolean;
  //  [Required] StringType
  customeridyominame?: string;
  //  StringType
  parentcontactidyominame?: string;
  // Feedback Resolved BooleanType Choose whether the proposal feedback has been captured and resolved for the opportunity.
  resolvefeedback?: boolean;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference;
  // Decide Go/No-Go BooleanType Select whether the decision about pursuing the opportunity has been made.
  pursuitdecision?: boolean;
  //  StringType
  originatingleadidname?: string;
  // Evaluate Fit BooleanType Select whether the fit between the lead's requirements and your offerings was evaluated.
  evaluatefit?: boolean;
  // Currency [Required] LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  createdonbehalfbyname?: string;
  // Purchase Process purchaseprocess Choose whether an individual or a committee will be involved in the  purchase process for the lead.
  purchaseprocess?: import("../enums/purchaseprocess").purchaseprocess;
  // Is Private BooleanType Indicates whether the opportunity is private or visible to the entire organization.
  isprivate?: boolean;
  // Scheduled Follow up (Prospect) DateTimeType Enter the date and time of the prospecting follow-up meeting with the lead. DateOnly:UserLocal
  schedulefollowup_prospect?: Date;
  // Total Tax (Base) MoneyType Value of the Total Tax in base currency.
  totaltax_base?: number;
  // Need need Choose how high the level of need is for the lead's company.
  need?: import("../enums/need").need;
  // Total Line Item Discount Amount (Base) MoneyType Value of the Total Line Item Discount Amount in base currency.
  totallineitemdiscountamount_base?: number;
  //  StringType
  slainvokedidname?: string;
  // Status opportunity_opportunity_statecode Shows whether the opportunity is open, won, or lost. Won and lost opportunities are read-only and can't be edited until they are reactivated.
  statecode?: import("../enums/opportunity_opportunity_statecode").opportunity_opportunity_statecode;
  // Sales Stage opportunity_salesstage Select the sales stage of this opportunity to aid the sales team in their efforts to win this opportunity.
  salesstage?: import("../enums/opportunity_salesstage").opportunity_salesstage;
  // Work Order Type LookupType Unique identifier for Work Order Type associated with Opportunity.
  msdyn_workordertype?: import("../../types/EntityReference").EntityReference;
  //  StringType
  modifiedonbehalfbyyominame?: string;
  // Est. Close Date DateTimeType Enter the expected closing date of the opportunity to help make accurate revenue forecasts. DateOnly:DateOnly
  estimatedclosedate?: Date;
  // Total Pre-Freight Amount (Base) MoneyType Value of the Total Pre-Freight Amount in base currency.
  totalamountlessfreight_base?: number;
  // Est. Revenue (Base) MoneyType Value of the Est. Revenue in base currency.
  estimatedvalue_base?: number;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference;
  // Account LookupType Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities.
  parentaccountid?: import("../../types/EntityReference").EntityReference;
  // Actual Revenue (Base) MoneyType Value of the Actual Revenue in base currency.
  actualvalue_base?: number;
  //  StringType
  msdyn_opportunitykpiidname?: string;
  //  StringType
  msdyn_contractorganizationalunitidname?: string;
  // Complete Internal Review BooleanType Select whether an internal review has been completed for this opportunity.
  completeinternalreview?: boolean;
  // Partner Contact LookupType Unique identifier for Contact associated with Opportunity.
  msa_partneroppid?: import("../../types/EntityReference").EntityReference;
  // Account LookupType Unique identifier of the account with which the opportunity is associated.
  accountid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  accountidname?: string;
  // KPI LookupType Maps to opportunity KPI records
  msdyn_opportunitykpiid?: import("../../types/EntityReference").EntityReference;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the opportunity record.
  slaid?: import("../../types/EntityReference").EntityReference;
  // Est. Revenue MoneyType Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field.
  estimatedvalue?: number;
  //  StringType Name of the owner
  owneridname?: string;
  // Budget budgetstatus Select the likely budget status for the lead's company. This may help determine the lead rating or your sales approach.
  budgetstatus?: import("../enums/budgetstatus").budgetstatus;
  // Price List LookupType Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices.
  pricelevelid?: import("../../types/EntityReference").EntityReference;
  // Identify Sales Team BooleanType Choose whether you have recorded who will pursue the opportunity.
  identifypursuitteam?: boolean;
  // Last On Hold Time DateTimeType Contains the date time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date;
  // Total Amount MoneyType Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity.
  totalamount?: number;
  // Pricing Error  qooi_pricingerrorcode Pricing error for the opportunity.
  pricingerrorcode?: import("../enums/qooi_pricingerrorcode").qooi_pricingerrorcode;
  //  StringType
  contactidname?: string;
  // Process Name StringType
  dev1_processname?: string;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("../../types/EntityReference").EntityReference;
  //  StringType
  msa_partneridyominame?: string;
  // Total Amount (Base) MoneyType Value of the Total Amount in base currency.
  totalamount_base?: number;
  //  StringType
  pricelevelidname?: string;
  // Identify Competitors BooleanType Select whether information about competitors is included.
  identifycompetitors?: boolean;
  //  StringType
  msdyn_accountmanageridyominame?: string;
  // Forecast category opportunity_msdyn_opportunity_msdyn_forecastcategory Categories used for forecasting.
  msdyn_forecastcategory?: import("../enums/opportunity_msdyn_opportunity_msdyn_forecastcategory").opportunity_msdyn_opportunity_msdyn_forecastcategory;
  // Quote Comments MemoType Type comments about the quotes associated with the opportunity.
  quotecomments?: string;
  // Decision Maker? BooleanType Select whether your notes include information about who makes the purchase decisions at the lead's company.
  decisionmaker?: boolean;
  // Budget Amount (Base) MoneyType Value of the Budget Amount in base currency.
  budgetamount_base?: number;
  // Present Final Proposal BooleanType Select whether the final proposal has been presented to the account.
  presentfinalproposal?: boolean;
  // Schedule Proposal Meeting DateTimeType Enter the date and time of the proposal meeting for the opportunity. DateOnly:UserLocal
  scheduleproposalmeeting?: Date;
  //  StringType
  modifiedbyyominame?: string;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference;
  // Probability IntegerType Type a number from 0 to 100 that represents the likelihood of closing the opportunity. This can aid the sales team in their efforts to convert the opportunity in a sale.
  closeprobability?: number;
  // Topic [Required] StringType Type a subject or descriptive name, such as the expected order or company name, for the opportunity.
  name?: string;
  //  StringType
  campaignidname?: string;
  // Presented Proposal BooleanType Select whether a proposal for the opportunity has been presented to the account.
  presentproposal?: boolean;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference;
  // Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string;
  // Identify Customer Contacts BooleanType Select whether the customer contacts for this opportunity have been identified.
  identifycustomercontacts?: boolean;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number;
  // Partner LookupType Unique identifier for Account associated with Opportunity.
  msa_partnerid?: import("../../types/EntityReference").EntityReference;
  // Step UniqueidentifierType Shows the ID of the workflow step.
  stepid?: import("../../types/Guid").Guid;
  // Freight Amount MoneyType Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field.
  freightamount?: number;
  // Total Discount Amount (Base) MoneyType Value of the Total Discount Amount in base currency.
  totaldiscountamount_base?: number;
}

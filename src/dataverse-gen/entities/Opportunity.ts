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
    msdyn_opportunityscore: "Integer",
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
    msdyn_opportunitygrade: "Optionset",
    msdyn_opportunityscoretrend: "Optionset",
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
    msdyn_segmentid: ["mscrm.msdyn_segment"],
    msdyn_opportunitykpiid: ["mscrm.msdyn_opportunitykpiitem"],
    msdyn_PredictiveScoreId: ["mscrm.msdyn_predictivescore"],
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
  AccountId = "accountid",
  AccountIdName = "accountidname",
  AccountIdYomiName = "accountidyominame",
  ActualCloseDate = "actualclosedate",
  ActualValue = "actualvalue",
  ActualValue_Base = "actualvalue_base",
  BudgetAmount = "budgetamount",
  BudgetAmount_Base = "budgetamount_base",
  BudgetStatus = "budgetstatus",
  CampaignId = "campaignid",
  CampaignIdName = "campaignidname",
  CaptureProposalFeedback = "captureproposalfeedback",
  CloseProbability = "closeprobability",
  CompleteFinalProposal = "completefinalproposal",
  CompleteInternalReview = "completeinternalreview",
  ConfirmInterest = "confirminterest",
  ContactId = "contactid",
  ContactIdName = "contactidname",
  ContactIdYomiName = "contactidyominame",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  CurrentSituation = "currentsituation",
  CustomerId = "customerid",
  CustomerIdName = "customeridname",
  CustomerIdType = "customeridtype",
  CustomerIdYomiName = "customeridyominame",
  CustomerNeed = "customerneed",
  CustomerPainPoints = "customerpainpoints",
  DecisionMaker = "decisionmaker",
  Description = "description",
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
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  msdyn_forecastcategory = "msdyn_forecastcategory",
  msdyn_gdproptout = "msdyn_gdproptout",
  msdyn_OpportunityGrade = "msdyn_opportunitygrade",
  msdyn_opportunitykpiid = "msdyn_opportunitykpiid",
  msdyn_opportunitykpiidName = "msdyn_opportunitykpiidname",
  msdyn_OpportunityScore = "msdyn_opportunityscore",
  msdyn_OpportunityScoreTrend = "msdyn_opportunityscoretrend",
  msdyn_PredictiveScoreId = "msdyn_predictivescoreid",
  msdyn_PredictiveScoreIdName = "msdyn_predictivescoreidname",
  msdyn_ScoreHistory = "msdyn_scorehistory",
  msdyn_ScoreReasons = "msdyn_scorereasons",
  msdyn_segmentid = "msdyn_segmentid",
  msdyn_segmentidName = "msdyn_segmentidname",
  msdyn_similaropportunities = "msdyn_similaropportunities",
  Name = "name",
  Need = "need",
  OnHoldTime = "onholdtime",
  OpportunityId = "opportunityid",
  OpportunityRatingCode = "opportunityratingcode",
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
  ParentAccountId = "parentaccountid",
  ParentAccountIdName = "parentaccountidname",
  ParentAccountIdYomiName = "parentaccountidyominame",
  ParentContactId = "parentcontactid",
  ParentContactIdName = "parentcontactidname",
  ParentContactIdYomiName = "parentcontactidyominame",
  ParticipatesInWorkflow = "participatesinworkflow",
  PresentFinalProposal = "presentfinalproposal",
  PresentProposal = "presentproposal",
  PriceLevelId = "pricelevelid",
  PriceLevelIdName = "pricelevelidname",
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
  SLAInvokedIdName = "slainvokedidname",
  SLAName = "slaname",
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
  TransactionCurrencyIdName = "transactioncurrencyidname",
  TraversedPath = "traversedpath",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface Opportunity extends IEntity {
  // Account LookupType Unique identifier of the account with which the opportunity is associated.
  accountid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  accountidname?: string | null;
  //  StringType
  accountidyominame?: string | null;
  // Actual Close Date DateTimeType Shows the date and time when the opportunity was closed or canceled. DateOnly:DateOnly
  actualclosedate?: Date | null;
  // Actual Revenue MoneyType Type the actual revenue amount for the opportunity for reporting and analysis of estimated versus actual sales. Field defaults to the Est. Revenue value when an opportunity is won.
  actualvalue?: number | null;
  // Actual Revenue (Base) MoneyType Value of the Actual Revenue in base currency.
  actualvalue_base?: number | null;
  // Budget Amount MoneyType Type a value between 0 and 1,000,000,000,000 to indicate the lead's potential available budget.
  budgetamount?: number | null;
  // Budget Amount (Base) MoneyType Value of the Budget Amount in base currency.
  budgetamount_base?: number | null;
  // Budget budgetstatus Select the likely budget status for the lead's company. This may help determine the lead rating or your sales approach.
  budgetstatus?: import("../enums/budgetstatus").budgetstatus | null;
  // Source Campaign LookupType Shows the campaign that the opportunity was created from. The ID is used for tracking the success of the campaign.
  campaignid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  campaignidname?: string | null;
  // Proposal Feedback Captured BooleanType Choose whether the proposal feedback has been captured for the opportunity.
  captureproposalfeedback?: boolean | null;
  // Probability IntegerType Type a number from 0 to 100 that represents the likelihood of closing the opportunity. This can aid the sales team in their efforts to convert the opportunity in a sale.
  closeprobability?: number | null;
  // Final Proposal Ready BooleanType Select whether a final proposal has been completed for the opportunity.
  completefinalproposal?: boolean | null;
  // Complete Internal Review BooleanType Select whether an internal review has been completed for this opportunity.
  completeinternalreview?: boolean | null;
  // Confirm Interest BooleanType Select whether the lead confirmed interest in your offerings. This helps in determining the lead quality and the probability of it turning into an opportunity.
  confirminterest?: boolean | null;
  // Contact LookupType Unique identifier of the contact associated with the opportunity.
  contactid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  contactidname?: string | null;
  //  StringType
  contactidyominame?: string | null;
  // Created By LookupType Shows who created the record.
  createdby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdbyname?: string | null;
  //  StringType
  createdbyyominame?: string | null;
  // Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  createdon?: Date | null;
  // Created By (Delegate) LookupType Shows who created the record on behalf of another user.
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  createdonbehalfbyname?: string | null;
  //  StringType
  createdonbehalfbyyominame?: string | null;
  // Current Situation MemoType Type notes about the company or organization associated with the opportunity.
  currentsituation?: string | null;
  // Potential Customer [Required] CustomerType Select the customer account or contact to provide a quick link to additional customer details, such as address, phone number, activities, and orders.
  customerid?: import("../../types/EntityReference").EntityReference;
  //  [Required] StringType
  customeridname?: string;
  // Potential Customer Type [Required] EntityNameType
  customeridtype?: string;
  //  [Required] StringType
  customeridyominame?: string;
  // Customer Need MemoType Type some notes about the customer's requirements, to help the sales team identify products and services that could meet their requirements.
  customerneed?: string | null;
  // Customer Pain Points MemoType Type notes about the customer's pain points to help the sales team identify products and services that could address these pain points.
  customerpainpoints?: string | null;
  // Decision Maker? BooleanType Select whether your notes include information about who makes the purchase decisions at the lead's company.
  decisionmaker?: boolean | null;
  // Description MemoType Type additional information to describe the opportunity, such as possible products to sell or past purchases from the customer.
  description?: string | null;
  // Develop Proposal BooleanType Select whether a proposal has been developed for the opportunity.
  developproposal?: boolean | null;
  // Opportunity Discount Amount MoneyType Type the discount amount for the opportunity if the customer is eligible for special savings.
  discountamount?: number | null;
  // Opportunity Discount Amount (Base) MoneyType Value of the Opportunity Discount Amount in base currency.
  discountamount_base?: number | null;
  // Opportunity Discount (%) DecimalType Type the discount rate that should be applied to the Product Totals field to include additional savings for the customer in the opportunity.
  discountpercentage?: number | null;
  // Email Address StringType The primary email address for the entity.
  emailaddress?: string | null;
  // Est. Close Date DateTimeType Enter the expected closing date of the opportunity to help make accurate revenue forecasts. DateOnly:DateOnly
  estimatedclosedate?: Date | null;
  // Est. Revenue MoneyType Type the estimated revenue amount to indicate the potential sale or value of the opportunity for revenue forecasting. This field can be either system-populated or editable based on the selection in the Revenue field.
  estimatedvalue?: number | null;
  // Est. Revenue (Base) MoneyType Value of the Est. Revenue in base currency.
  estimatedvalue_base?: number | null;
  // Evaluate Fit BooleanType Select whether the fit between the lead's requirements and your offerings was evaluated.
  evaluatefit?: boolean | null;
  // Exchange Rate DecimalType Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency.
  exchangerate?: number | null;
  // File Debrief BooleanType Choose whether the sales team has recorded detailed notes on the proposals and the account's responses.
  filedebrief?: boolean | null;
  // Final Decision Date DateTimeType Enter the date and time when the final decision of the opportunity was made. DateOnly:DateOnly
  finaldecisiondate?: Date | null;
  // Freight Amount MoneyType Type the cost of freight or shipping for the products included in the opportunity for use in calculating the Total Amount field.
  freightamount?: number | null;
  // Freight Amount (Base) MoneyType Value of the Freight Amount in base currency.
  freightamount_base?: number | null;
  // Identify Competitors BooleanType Select whether information about competitors is included.
  identifycompetitors?: boolean | null;
  // Identify Customer Contacts BooleanType Select whether the customer contacts for this opportunity have been identified.
  identifycustomercontacts?: boolean | null;
  // Identify Sales Team BooleanType Choose whether you have recorded who will pursue the opportunity.
  identifypursuitteam?: boolean | null;
  // Import Sequence Number IntegerType Sequence number of the import that created this record.
  importsequencenumber?: number | null;
  // Initial Communication initialcommunication Choose whether someone from the sales team contacted this lead earlier.
  initialcommunication?: import("../enums/initialcommunication").initialcommunication | null;
  // Is Private BooleanType Indicates whether the opportunity is private or visible to the entire organization.
  isprivate?: boolean | null;
  // Revenue BooleanType Select whether the estimated revenue for the opportunity is calculated automatically based on the products entered or entered manually by a user.
  isrevenuesystemcalculated?: boolean | null;
  // Last On Hold Time DateTimeType Contains the date time stamp of the last on hold time. DateAndTime:UserLocal
  lastonholdtime?: Date | null;
  // Modified By LookupType Shows who last updated the record.
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedbyname?: string | null;
  //  StringType
  modifiedbyyominame?: string | null;
  // Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  modifiedon?: Date | null;
  // Modified By (Delegate) LookupType Shows who last updated the record on behalf of another user.
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  modifiedonbehalfbyname?: string | null;
  //  StringType
  modifiedonbehalfbyyominame?: string | null;
  // Forecast category opportunity_msdyn_opportunity_msdyn_forecastcategory Categories used for forecasting.
  msdyn_forecastcategory?: import("../enums/opportunity_msdyn_opportunity_msdyn_forecastcategory").opportunity_msdyn_opportunity_msdyn_forecastcategory | null;
  // GDPR Optout BooleanType Describes whether opportunity is opted out or not
  msdyn_gdproptout?: boolean | null;
  // (Deprecated) Opportunity Grade msdyn_opportunitygradeoptset
  msdyn_opportunitygrade?: import("../enums/msdyn_opportunitygradeoptset").msdyn_opportunitygradeoptset | null;
  // KPI LookupType Maps to opportunity KPI records
  msdyn_opportunitykpiid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  msdyn_opportunitykpiidname?: string | null;
  // (Deprecated) Opportunity Score IntegerType
  msdyn_opportunityscore?: number | null;
  // (Deprecated) Opportunity Score Trend msdyn_opportunityscoretrendoptset
  msdyn_opportunityscoretrend?: import("../enums/msdyn_opportunityscoretrendoptset").msdyn_opportunityscoretrendoptset | null;
  // Predictive Score LookupType Predictive score
  msdyn_predictivescoreid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  msdyn_predictivescoreidname?: string | null;
  // (Deprecated) Score History MemoType
  msdyn_scorehistory?: string | null;
  // (Deprecated) Score Reasons MemoType
  msdyn_scorereasons?: string | null;
  // Segment Id LookupType Unique identifier for Segment associated with Opportunity.
  msdyn_segmentid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  msdyn_segmentidname?: string | null;
  // msdyn_similaropportunities MemoType
  msdyn_similaropportunities?: string | null;
  // Topic [Required] StringType Type a subject or descriptive name, such as the expected order or company name, for the opportunity.
  name?: string;
  // Need need Choose how high the level of need is for the lead's company.
  need?: import("../enums/need").need | null;
  // On Hold Time (Minutes) IntegerType Shows the duration in minutes for which the opportunity was on hold.
  onholdtime?: number | null;
  // Opportunity UniqueidentifierType Unique identifier of the opportunity.
  opportunityid?: import("../../types/Guid").Guid | null;
  // Rating opportunity_opportunity_opportunityratingcode Select the expected value or priority of the opportunity based on revenue, customer status, or closing probability.
  opportunityratingcode?: import("../enums/opportunity_opportunity_opportunityratingcode").opportunity_opportunity_opportunityratingcode | null;
  // Originating Lead LookupType Choose the lead that the opportunity was created from for reporting and analytics. The field is read-only after the opportunity is created and defaults to the correct lead when an opportunity is created from a converted lead.
  originatingleadid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  originatingleadidname?: string | null;
  //  StringType
  originatingleadidyominame?: string | null;
  // Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  overriddencreatedon?: Date | null;
  // Owner OwnerType Owner Id
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType Name of the owner
  owneridname?: string | null;
  //  EntityNameType Owner Id Type
  owneridtype?: string | null;
  //  StringType Yomi name of the owner
  owneridyominame?: string | null;
  // Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  owningbusinessunitname?: string | null;
  // Owning Team LookupType Unique identifier for the team that owns the record.
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  // Owning User LookupType Unique identifier for the user that owns the record.
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  // Account LookupType Choose an account to connect this opportunity to, so that the relationship is visible in reports and analytics, and to provide a quick link to additional details, such as financial information and activities.
  parentaccountid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  parentaccountidname?: string | null;
  //  StringType
  parentaccountidyominame?: string | null;
  // Contact LookupType Choose a contact to connect this opportunity to, so that the relationship is visible in reports and analytics.
  parentcontactid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  parentcontactidname?: string | null;
  //  StringType
  parentcontactidyominame?: string | null;
  // Participates in Workflow BooleanType Information about whether the opportunity participates in workflow rules.
  participatesinworkflow?: boolean | null;
  // Present Final Proposal BooleanType Select whether the final proposal has been presented to the account.
  presentfinalproposal?: boolean | null;
  // Presented Proposal BooleanType Select whether a proposal for the opportunity has been presented to the account.
  presentproposal?: boolean | null;
  // Price List LookupType Choose the price list associated with this record to make sure the products associated with the campaign are offered at the correct prices.
  pricelevelid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  pricelevelidname?: string | null;
  // Pricing Error  qooi_pricingerrorcode Pricing error for the opportunity.
  pricingerrorcode?: import("../enums/qooi_pricingerrorcode").qooi_pricingerrorcode | null;
  // Priority opportunity_opportunity_prioritycode Select the priority so that preferred customers or critical issues are handled quickly.
  prioritycode?: import("../enums/opportunity_opportunity_prioritycode").opportunity_opportunity_prioritycode | null;
  // Process Id UniqueidentifierType Contains the id of the process associated with the entity.
  processid?: import("../../types/Guid").Guid | null;
  // Proposed Solution MemoType Type notes about the proposed solution for the opportunity.
  proposedsolution?: string | null;
  // Purchase Process purchaseprocess Choose whether an individual or a committee will be involved in the  purchase process for the lead.
  purchaseprocess?: import("../enums/purchaseprocess").purchaseprocess | null;
  // Purchase Timeframe purchasetimeframe Choose how long the lead will likely take to make the purchase.
  purchasetimeframe?: import("../enums/purchasetimeframe").purchasetimeframe | null;
  // Decide Go/No-Go BooleanType Select whether the decision about pursuing the opportunity has been made.
  pursuitdecision?: boolean | null;
  // Qualification Comments MemoType Type comments about the qualification or scoring of the lead.
  qualificationcomments?: string | null;
  // Quote Comments MemoType Type comments about the quotes associated with the opportunity.
  quotecomments?: string | null;
  // Feedback Resolved BooleanType Choose whether the proposal feedback has been captured and resolved for the opportunity.
  resolvefeedback?: boolean | null;
  // Sales Stage opportunity_salesstage Select the sales stage of this opportunity to aid the sales team in their efforts to win this opportunity.
  salesstage?: import("../enums/opportunity_salesstage").opportunity_salesstage | null;
  // Process Code opportunity_opportunity_salesstagecode Select the sales process stage for the opportunity to indicate the probability of closing the opportunity.
  salesstagecode?: import("../enums/opportunity_opportunity_salesstagecode").opportunity_opportunity_salesstagecode | null;
  // Scheduled Follow up (Prospect) DateTimeType Enter the date and time of the prospecting follow-up meeting with the lead. DateOnly:UserLocal
  schedulefollowup_prospect?: Date | null;
  // Scheduled Follow up (Qualify) DateTimeType Enter the date and time of the qualifying follow-up meeting with the lead. DateOnly:UserLocal
  schedulefollowup_qualify?: Date | null;
  // Schedule Proposal Meeting DateTimeType Enter the date and time of the proposal meeting for the opportunity. DateOnly:UserLocal
  scheduleproposalmeeting?: Date | null;
  // Send Thank You Note BooleanType Select whether a thank you note has been sent to the account for considering the proposal.
  sendthankyounote?: boolean | null;
  // Skip Price Calculation qooi_skippricecalculation Skip Price Calculation (For Internal Use)
  skippricecalculation?: import("../enums/qooi_skippricecalculation").qooi_skippricecalculation | null;
  // SLA LookupType Choose the service level agreement (SLA) that you want to apply to the opportunity record.
  slaid?: import("../../types/EntityReference").EntityReference | null;
  // Last SLA applied LookupType Last SLA that was applied to this opportunity. This field is for internal use only.
  slainvokedid?: import("../../types/EntityReference").EntityReference | null;
  //  StringType
  slainvokedidname?: string | null;
  //  StringType
  slaname?: string | null;
  // (Deprecated) Stage Id UniqueidentifierType Contains the id of the stage where the entity is located.
  stageid?: import("../../types/Guid").Guid | null;
  // Status opportunity_opportunity_statecode Shows whether the opportunity is open, won, or lost. Won and lost opportunities are read-only and can't be edited until they are reactivated.
  statecode?: import("../enums/opportunity_opportunity_statecode").opportunity_opportunity_statecode | null;
  // Status Reason opportunity_opportunity_statuscode Select the opportunity's status.
  statuscode?: import("../enums/opportunity_opportunity_statuscode").opportunity_opportunity_statuscode | null;
  // Step UniqueidentifierType Shows the ID of the workflow step.
  stepid?: import("../../types/Guid").Guid | null;
  // Pipeline Phase StringType Shows the current phase in the sales pipeline for the opportunity. This is updated by a workflow.
  stepname?: string | null;
  // TeamsFollowed IntegerType Number of users or conversations followed the record
  teamsfollowed?: number | null;
  // Timeline opportunity_opportunity_timeline Select when the opportunity is likely to be closed.
  timeline?: import("../enums/opportunity_opportunity_timeline").opportunity_opportunity_timeline | null;
  // Time Spent by me StringType Total time spent for emails (read and write) and meetings by me in relation to the opportunity record.
  timespentbymeonemailandmeetings?: string | null;
  // Time Zone Rule Version Number IntegerType For internal use only.
  timezoneruleversionnumber?: number | null;
  // Total Amount MoneyType Shows the total amount due, calculated as the sum of the products, discounts, freight, and taxes for the opportunity.
  totalamount?: number | null;
  // Total Amount (Base) MoneyType Value of the Total Amount in base currency.
  totalamount_base?: number | null;
  // Total Pre-Freight Amount MoneyType Shows the total product amount for the opportunity, minus any discounts. This value is added to freight and tax amounts in the calculation for the total amount of the opportunity.
  totalamountlessfreight?: number | null;
  // Total Pre-Freight Amount (Base) MoneyType Value of the Total Pre-Freight Amount in base currency.
  totalamountlessfreight_base?: number | null;
  // Total Discount Amount MoneyType Shows the total discount amount, based on the discount price and rate entered on the opportunity.
  totaldiscountamount?: number | null;
  // Total Discount Amount (Base) MoneyType Value of the Total Discount Amount in base currency.
  totaldiscountamount_base?: number | null;
  // Total Detail Amount MoneyType Shows the sum of all existing and write-in products included on the opportunity, based on the specified price list and quantities.
  totallineitemamount?: number | null;
  // Total Detail Amount (Base) MoneyType Value of the Total Detail Amount in base currency.
  totallineitemamount_base?: number | null;
  // Total Line Item Discount Amount MoneyType Shows the total of the Manual Discount amounts specified on all products included in the opportunity. This value is reflected in the Total Detail Amount field on the opportunity and is added to any discount amount or rate specified on the opportunity.
  totallineitemdiscountamount?: number | null;
  // Total Line Item Discount Amount (Base) MoneyType Value of the Total Line Item Discount Amount in base currency.
  totallineitemdiscountamount_base?: number | null;
  // Total Tax MoneyType Shows the total of the Tax amounts specified on all products included in the opportunity, included in the Total Amount field calculation for the opportunity.
  totaltax?: number | null;
  // Total Tax (Base) MoneyType Value of the Total Tax in base currency.
  totaltax_base?: number | null;
  // Currency [Required] LookupType Choose the local currency for the record to make sure budgets are reported in the correct currency.
  transactioncurrencyid?: import("../../types/EntityReference").EntityReference;
  //  StringType
  transactioncurrencyidname?: string | null;
  // (Deprecated) Traversed Path StringType A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur.
  traversedpath?: string | null;
  // UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  utcconversiontimezonecode?: number | null;
  // Version Number BigIntType Version Number
  versionnumber?: number | null;
}

/* eslint-disable*/
import { accountMetadata } from "./entities/Account";
import { cdsify_integrationtestMetadata } from "./entities/cdsify_IntegrationTest";
import { contactMetadata } from "./entities/Contact";
import { incidentMetadata } from "./entities/Incident";
import { letterMetadata } from "./entities/Letter";
import { opportunityMetadata } from "./entities/Opportunity";
import { opportunitycloseMetadata } from "./entities/OpportunityClose";
import { queueMetadata } from "./entities/Queue";
import { queueitemMetadata } from "./entities/QueueItem";
import { AddToQueueMetadata } from "./actions/AddToQueue";
import { WinOpportunityMetadata } from "./actions/WinOpportunity";
import { cdsify_BoundEchoMetadata } from "./actions/cdsify_BoundEcho";
import { cdsify_UnboundEchoMetadata } from "./actions/cdsify_UnboundEcho";
import { CalculateRollupFieldMetadata } from "./functions/CalculateRollupField";
import { CalculateTotalTimeIncidentMetadata } from "./functions/CalculateTotalTimeIncident";
import { RetrieveMetadataChangesMetadata } from "./functions/RetrieveMetadataChanges";
import { cdsify_UnboundEchoFunction2Metadata } from "./functions/cdsify_UnboundEchoFunction2";

export const Entities = {
  Account: "account",
  cdsify_IntegrationTest: "cdsify_integrationtest",
  Contact: "contact",
  Incident: "incident",
  Letter: "letter",
  Opportunity: "opportunity",
  OpportunityClose: "opportunityclose",
  Queue: "queue",
  QueueItem: "queueitem",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    account: accountMetadata,
    cdsify_integrationtest: cdsify_integrationtestMetadata,
    contact: contactMetadata,
    incident: incidentMetadata,
    letter: letterMetadata,
    opportunity: opportunityMetadata,
    opportunityclose: opportunitycloseMetadata,
    queue: queueMetadata,
    queueitem: queueitemMetadata,
  },
  actions: {
    AddToQueue: AddToQueueMetadata,
    WinOpportunity: WinOpportunityMetadata,
    cdsify_BoundEcho: cdsify_BoundEchoMetadata,
    cdsify_UnboundEcho: cdsify_UnboundEchoMetadata,
    CalculateRollupField: CalculateRollupFieldMetadata,
    CalculateTotalTimeIncident: CalculateTotalTimeIncidentMetadata,
    RetrieveMetadataChanges: RetrieveMetadataChangesMetadata,
    cdsify_UnboundEchoFunction2: cdsify_UnboundEchoFunction2Metadata,
  }
};
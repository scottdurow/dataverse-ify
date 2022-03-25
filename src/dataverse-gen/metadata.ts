/* eslint-disable*/
import { accountMetadata } from "./entities/Account";
import { contactMetadata } from "./entities/Contact";
import { incidentMetadata } from "./entities/Incident";
import { letterMetadata } from "./entities/Letter";
import { opportunityMetadata } from "./entities/Opportunity";
import { opportunitycloseMetadata } from "./entities/OpportunityClose";
import { queueMetadata } from "./entities/Queue";
import { queueitemMetadata } from "./entities/QueueItem";
import { AddToQueueMetadata } from "./actions/AddToQueue";
import { WinOpportunityMetadata } from "./actions/WinOpportunity";
import { CalculateRollupFieldMetadata } from "./functions/CalculateRollupField";
import { CalculateTotalTimeIncidentMetadata } from "./functions/CalculateTotalTimeIncident";
import { RetrieveMetadataChangesMetadata } from "./functions/RetrieveMetadataChanges";

export const Entities = {
  Account: "account",
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
    CalculateRollupField: CalculateRollupFieldMetadata,
    CalculateTotalTimeIncident: CalculateTotalTimeIncidentMetadata,
    RetrieveMetadataChanges: RetrieveMetadataChangesMetadata,
  }
};
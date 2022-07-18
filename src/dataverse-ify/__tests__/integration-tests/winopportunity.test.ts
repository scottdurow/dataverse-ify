import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { XrmContextDataverseClient } from "../..";
import { Entity } from "../../../types/Entity";
import { opportunityMetadata, Opportunity, OpportunityAttributes } from "../../../dataverse-gen/entities/Opportunity";
import { opportunitycloseMetadata } from "../../../dataverse-gen/entities/OpportunityClose";
import { WinOpportunityMetadata, WinOpportunityRequest } from "../../../dataverse-gen/actions/WinOpportunity";
import { opportunity_opportunity_statecode } from "../../../dataverse-gen/enums/opportunity_opportunity_statecode";
describe("winOpportunity", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 30000);
  test("WinOpportunity", async () => {
    setMetadataCache({
      entities: {
        account: accountMetadata,
        opportunity: opportunityMetadata,
        opportunityclose: opportunitycloseMetadata,
      },
      actions: { WinOpportunity: WinOpportunityMetadata },
    });

    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
    } as Account;

    const opportunity1 = {
      logicalName: opportunityMetadata.logicalName,
      name: "Opportunity 1",
    } as Opportunity;

    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    try {
      // Create account
      account1.id = await serviceClient.create(account1);

      // Assign parent customer
      opportunity1.customerid = Entity.toEntityReference(account1);

      // Create opportunity
      opportunity1.id = await serviceClient.create(opportunity1);

      // WinOpportunity
      const winRequest = {
        logicalName: WinOpportunityMetadata.operationName,
        Status: 3,
        OpportunityClose: {
          logicalName: opportunitycloseMetadata.logicalName,
          description: "Sample Opportunity Close",
          subject: "Sample",

          opportunityid: Entity.toEntityReference(opportunity1),
        },
      } as WinOpportunityRequest;

      const winResponse = await serviceClient.execute(winRequest);
      expect(winResponse).toBeUndefined();

      // Get the opportunity to check it is won
      // Retrieve Updated
      const opportunityWon = await serviceClient.retrieve<Opportunity>(
        opportunityMetadata.logicalName,
        opportunity1.id,
        [OpportunityAttributes.StateCode],
      );
      expect(opportunityWon.statecode).toBe(opportunity_opportunity_statecode.Won);
    } catch (ex) {
      fail(ex);
    } finally {
      if (opportunity1.id) {
        // Tidy up
        await serviceClient.delete(opportunity1);
      }
      if (account1.id) {
        // Tidy up
        await serviceClient.delete(account1);
      }
    }
  }, 30000);
});

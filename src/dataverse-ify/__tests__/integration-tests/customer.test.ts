import { SetupGlobalContext } from "../../../webapi/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { XrmContextCdsServiceClient } from "../..";
import { Entity } from "../../../types/Entity";
import * as config from "config";
import { NodeXrmConfig } from "../../../webapi/config/NodeXrmConfig";
import { contactMetadata, Contact } from "../../../dataverse-gen/entities/Contact";
import { opportunityMetadata, Opportunity } from "../../../dataverse-gen/entities/Opportunity";
describe("customer", () => {
  const configFile = config.get("nodewebapi") as NodeXrmConfig;
  beforeAll(async () => {
    if (!configFile.runIntegrationTests) return;
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      try {
        // Set up the Node Xrm global context
        await SetupGlobalContext();
      } catch (ex) {
        fail(ex);
      }
    }
  }, 30000);
  test("Customer fields set and retrieved as EntityReference", async () => {
    if (!configFile.runIntegrationTests) return;
    setMetadataCache({
      entities: {
        account: accountMetadata,
        contact: contactMetadata,
        opportunity: opportunityMetadata,
      },
    });

    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
    } as Account;

    const contact1 = {
      logicalName: "contact",
      firstname: "Test",
      lastname: "Unit",
    } as Contact;

    const opportunity1 = {
      logicalName: opportunityMetadata.logicalName,
      name: "Opportunity 1",
    } as Opportunity;

    const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
    try {
      // Create account
      account1.id = await cdsServiceClient.create(account1);

      // Assign parent customer
      opportunity1.customerid = Entity.toEntityReference(account1);

      // Create opportunity
      opportunity1.id = await cdsServiceClient.create(opportunity1);

      // Retrieve and check parent customerid field
      const opportunityRetreived = (await cdsServiceClient.retrieve(opportunity1.logicalName, opportunity1.id, [
        "customerid",
      ])) as Opportunity;

      expect(opportunityRetreived.customerid).toBeDefined();
      expect(opportunityRetreived.customerid?.id).toBe(account1.id);
      expect(opportunityRetreived.customerid?.entityType).toBe("account");
      expect(opportunityRetreived.customerid?.name).toBe(account1.name);

      // Update to be parented by a contact
      contact1.id = await cdsServiceClient.create(contact1);
      opportunity1.customerid = Entity.toEntityReference(contact1);

      await cdsServiceClient.update(opportunity1);
      // Retrieve and check parent customerid field
      const opportunityRetreived2 = (await cdsServiceClient.retrieve(opportunity1.logicalName, opportunity1.id, [
        "customerid",
      ])) as Opportunity;

      expect(opportunityRetreived2.customerid).toBeDefined();
      expect(opportunityRetreived2.customerid?.id).toBe(contact1.id);
      expect(opportunityRetreived2.customerid?.entityType).toBe("contact");
    } catch (ex) {
      fail(ex);
    } finally {
      if (opportunity1.id) {
        // Tidy up
        await cdsServiceClient.delete(opportunity1);
      }
      if (account1.id) {
        // Tidy up
        await cdsServiceClient.delete(account1);
      }
      if (contact1.id) {
        // Tidy up
        await cdsServiceClient.delete(contact1);
      }
    }
  }, 30000);
});

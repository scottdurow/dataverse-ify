import { SetupGlobalContext } from "../../../webapi/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { XrmContextDataverseClient } from "../..";
import { Entity } from "../../../types/Entity";
import { contactMetadata, Contact } from "../../../dataverse-gen/entities/Contact";
import { opportunityMetadata, Opportunity } from "../../../dataverse-gen/entities/Opportunity";
describe("customer", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 30000);
  test("Customer fields set and retrieved as EntityReference", async () => {
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

    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    let failed: unknown | undefined;
    try {
      // Create account
      account1.id = await serviceClient.create(account1);

      // Assign parent customer
      opportunity1.customerid = Entity.toEntityReference(account1);

      // Create opportunity
      opportunity1.id = await serviceClient.create(opportunity1);

      // Retrieve and check parent customerid field
      const opportunityRetrieved = (await serviceClient.retrieve(opportunity1.logicalName, opportunity1.id, [
        "customerid",
      ])) as Opportunity;

      expect(opportunityRetrieved.customerid).toBeDefined();
      expect(opportunityRetrieved.customerid?.id).toBe(account1.id);
      expect(opportunityRetrieved.customerid?.entityType).toBe("account");
      expect(opportunityRetrieved.customerid?.name).toBe(account1.name);

      // Update to be parented by a contact
      contact1.id = await serviceClient.create(contact1);
      opportunity1.customerid = Entity.toEntityReference(contact1);

      await serviceClient.update(opportunity1);
      // Retrieve and check parent customerid field
      const opportunityRetrieved2 = (await serviceClient.retrieve(opportunity1.logicalName, opportunity1.id, [
        "customerid",
      ])) as Opportunity;

      expect(opportunityRetrieved2.customerid).toBeDefined();
      expect(opportunityRetrieved2.customerid?.id).toBe(contact1.id);
      expect(opportunityRetrieved2.customerid?.entityType).toBe("contact");
    } catch (ex) {
      failed = ex;
    } finally {
      if (opportunity1.id) {
        // Tidy up
        await serviceClient.delete(opportunity1);
      }
      if (account1.id) {
        // Tidy up
        await serviceClient.delete(account1);
      }
      if (contact1.id) {
        // Tidy up
        await serviceClient.delete(contact1);
      }
    }
    expect(failed).toBeUndefined();
  }, 30000);
});

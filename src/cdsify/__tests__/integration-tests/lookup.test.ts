import { SetupGlobalContext } from "../../../cdsnode/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account, AccountAttributes } from "../../../cds-metadata/account";
import { XrmContextCdsServiceClient } from "../..";
import { Contact, contactMetadata } from "../../../cds-metadata/contact";
import { Entity } from "../../../types/Entity";
import * as config from "config";
import { NodeXrmConfig } from "../../../cdsnode/config/NodeXrmConfig";
describe("lookup", () => {
  const configFile = config.get("nodecds") as NodeXrmConfig;
  beforeAll(async () => {
    if (!configFile.runIntegrationTests) return;
    // Is this running inside NodeJS?
    if (typeof Xrm == "undefined") {
      try {
        // Set up the Node Xrm global context
        await SetupGlobalContext();
      } catch (ex) {
        fail(ex);
      }
    }
  }, 30000);
  test("Primary Contact field can be set and nulled", async () => {
    if (!configFile.runIntegrationTests) return;
    setMetadataCache({
      entities: {
        account: accountMetadata,
        contact: contactMetadata,
      },
    });

    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
    } as Account;

    const contact1 = {
      logicalName: contactMetadata.logicalName,
      firstname: "Test",
      lastname: "Unit",
    } as Contact;

    const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
    try {
      // Create contact
      contact1.id = await cdsServiceClient.create(contact1);

      // Create account with primary contact id
      account1.primarycontactid = Entity.toEntityReference(contact1);
      account1.id = await cdsServiceClient.create(account1);

      // Retrieve and check the primary contact is set
      const account1Retrieve1 = (await cdsServiceClient.retrieve(accountMetadata.logicalName, account1.id, [
        AccountAttributes.PrimaryContactId,
      ])) as Account;
      expect(account1Retrieve1.primarycontactid).toBeDefined();
      expect(account1Retrieve1.primarycontactid?.id).toBe(contact1.id);
      expect(account1Retrieve1.primarycontactid?.entityType).toBe(contact1.logicalName);

      // Update to be null - this will send a delete behind the scenes!
      account1.primarycontactid.id = "null";
      await cdsServiceClient.update(account1);

      const account1Retrieve2 = (await cdsServiceClient.retrieve(accountMetadata.logicalName, account1.id, [
        AccountAttributes.PrimaryContactId,
      ])) as Account;
      expect(account1Retrieve2.primarycontactid).toBeUndefined();

      // Update to be the contact again
      account1.primarycontactid = Entity.toEntityReference(contact1);
      await cdsServiceClient.update(account1);

      // Retrieve and check the primary contact is set
      const account1Retrieve3 = (await cdsServiceClient.retrieve(accountMetadata.logicalName, account1.id, [
        AccountAttributes.PrimaryContactId,
      ])) as Account;
      expect(account1Retrieve3.primarycontactid).toBeDefined();
      expect(account1Retrieve3.primarycontactid?.id).toBe(contact1.id);
      expect(account1Retrieve3.primarycontactid?.entityType).toBe(contact1.logicalName);
    } catch (ex) {
      fail(ex);
    } finally {
      if (contact1.id) {
        // Tidy up
        await cdsServiceClient.delete(contact1);
      }
      if (account1.id) {
        // Tidy up
        await cdsServiceClient.delete(account1);
      }
    }
  }, 30000);
});

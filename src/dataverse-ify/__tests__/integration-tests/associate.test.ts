/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { toEntityReference } from "../../../types/EntityReference";
import { XrmContextDataverseClient } from "../../DataverseClient";
import { Contact, ContactAttributes, contactMetadata } from "../../../dataverse-gen/entities/Contact";
describe("XrmContextDataverseClient", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);
  it("associate-disassociate", async () => {
    // Create an account with sdk types
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
      lastname: "Contact 1",
    } as Contact;

    const contact2 = {
      logicalName: contactMetadata.logicalName,
      lastname: "Contact 2",
    } as Contact;

    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    try {
      // Create
      account1.accountid = await serviceClient.create(account1);
      contact1.contactid = await serviceClient.create(contact1);
      contact2.contactid = await serviceClient.create(contact2);

      await serviceClient.associate(
        accountMetadata.logicalName,
        account1.accountid as string,
        "contact_customer_accounts",
        [toEntityReference(contact1), toEntityReference(contact2)],
      );

      // Retrieve contact to check the association
      const contact1Updated = await serviceClient.retrieve<Contact>(contactMetadata.logicalName, contact1.contactid, [
        ContactAttributes.ParentCustomerId,
      ]);
      expect(contact1Updated.parentcustomerid).toBeDefined();

      const contact2Updated = await serviceClient.retrieve<Contact>(contactMetadata.logicalName, contact2.contactid, [
        ContactAttributes.ParentCustomerId,
      ]);
      expect(contact2Updated.parentcustomerid).toBeDefined();

      await serviceClient.disassociate(
        accountMetadata.logicalName,
        account1.accountid as string,
        "contact_customer_accounts",
        [toEntityReference(contact1), toEntityReference(contact2)],
      );

      // Retrieve contact to check the disassociation
      const contact1Updated2 = await serviceClient.retrieve<Contact>(contactMetadata.logicalName, contact1.contactid, [
        ContactAttributes.ParentCustomerId,
      ]);
      expect(contact1Updated2.parentcustomerid).toBeUndefined();

      const contact2Updated2 = await serviceClient.retrieve<Contact>(contactMetadata.logicalName, contact2.contactid, [
        ContactAttributes.ParentCustomerId,
      ]);
      expect(contact2Updated2.parentcustomerid).toBeUndefined();
    } finally {
      // Delete
      if (contact1.contactid) await serviceClient.delete(contactMetadata.logicalName, contact1.contactid);
      if (contact2.contactid) await serviceClient.delete(contactMetadata.logicalName, contact2.contactid);
      if (account1.accountid) await serviceClient.delete(accountMetadata.logicalName, account1.accountid);
    }
  }, 100000);
});

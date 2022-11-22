/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../SetupGlobalContext";
import { contactMetadata } from "../../../../dataverse-gen/entities/Contact";
import { accountMetadata } from "../../../../dataverse-gen/entities/Account";
import { WebApiExecuteRequestBase } from "../../../../types/WebApiExecuteRequest";

describe("XrmWebApiNode", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("associates and disassociates", async () => {
    const account1 = {
      name: "Sample Account",
    } as any;
    const contact1 = {
      lastname: "Sample Contact 1",
    } as any;
    const contact2 = {
      lastname: "Sample Contact 2",
    } as any;

    try {
      // Create Account
      account1.accountid = (await Xrm.WebApi.createRecord(accountMetadata.logicalName, account1)).id;

      contact1.contactid = (await Xrm.WebApi.createRecord(contactMetadata.logicalName, contact1)).id;
      contact2.contactid = (await Xrm.WebApi.createRecord(contactMetadata.logicalName, contact2)).id;

      const associateRequest = new WebApiExecuteRequestBase(
        {
          boundParameter: undefined,
          parameterTypes: {},
          operationType: 2, // Associate and Disassociate fall under the CRUD umbrella
          operationName: "Associate",
        },
        {
          target: {
            entityType: accountMetadata.logicalName,
            //etn: accountMetadata.logicalName,
            id: account1.accountid,
          },
          relatedEntities: [
            {
              entityType: contactMetadata.logicalName,
              //etn: contactMetadata.logicalName,
              id: contact1.contactid,
            },
            {
              entityType: contactMetadata.logicalName,
              //etn: contactMetadata.logicalName,
              id: contact2.contactid,
            },
          ],
          relationship: "contact_customer_accounts",
        },
      );

      const response = await Xrm.WebApi.online.execute(associateRequest);
      expect(response).toBeDefined();
      const responseBody = await response.text();
      expect(responseBody).toMatch(/--batchresponse/);
      expect(responseBody).toMatch(/--batchresponse_[0-9a-z-]+--/);

      // Check that the contact accountid is set
      const contact3 = (await Xrm.WebApi.retrieveRecord(
        contactMetadata.logicalName,
        contact1.contactid,
        "?$select=_parentcustomerid_value",
      )) as any;
      expect(contact3._parentcustomerid_value).toBeDefined();

      // Disassociate
      // Note you can only perform a single disassociate - unlike the batched associate
      const disassociateRequest = new WebApiExecuteRequestBase(
        {
          boundParameter: undefined,
          parameterTypes: {},
          operationType: 2, // Associate and Disassociate fall under the CRUD umbrella
          operationName: "Disassociate",
        },
        {
          target: {
            entityType: accountMetadata.logicalName,
            //etn: accountMetadata.logicalName,
            id: account1.accountid,
          },
          relatedEntityId: contact1.contactid,
          relationship: "contact_customer_accounts",
        },
      );
      const response2 = await Xrm.WebApi.online.execute(disassociateRequest);
      expect(response2).toBeDefined();

      // Check that the contact accountid is no longer
      const contact4 = (await Xrm.WebApi.retrieveRecord(
        contactMetadata.logicalName,
        contact1.contactid,
        "?$select=_parentcustomerid_value",
      )) as any;
      expect(contact4._parentcustomerid_value).toBeNull();
    } finally {
      // Delete records
      if (contact1.contactid) {
        await Xrm.WebApi.deleteRecord(contactMetadata.logicalName, contact1.contactid);
      }
      if (contact2.contactid) {
        await Xrm.WebApi.deleteRecord(contactMetadata.logicalName, contact2.contactid);
      }
      if (account1.accountid) {
        await Xrm.WebApi.deleteRecord(accountMetadata.logicalName, account1.accountid);
      }
    }
  }, 100000);
});

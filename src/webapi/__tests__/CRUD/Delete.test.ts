/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../SetupGlobalContext";

describe("XrmWebApiNode CRUD", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      try {
        // Set up the Node Xrm global context
        await SetupGlobalContext();
      } catch (ex) {
        fail(ex);
      }
    }
  }, 10000);
  test("Delete", async () => {
    const record = {
      name: "Sample Account",
    } as any;

    // Create Account
    record.accountid = (await (Xrm.WebApi.createRecord("account", record) as any)).id;

    // Delete account
    if (record.accountid) {
      await Xrm.WebApi.deleteRecord("account", record.accountid);
    }

    // Check the account has been deleted
    const fetch = `<fetch no-lock="true" >
       <entity name="account" >
         <filter>
           <condition attribute="accountid" operator="eq" value="${record.accountid}" />
         </filter>
       </entity>
     </fetch>`;

    const accounts = await Xrm.WebApi.retrieveMultipleRecords("account", "?fetchXml=" + fetch);
    expect(accounts.entities.length).toBe(0);
  }, 30000);
});

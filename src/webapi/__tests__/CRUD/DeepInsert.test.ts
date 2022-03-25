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
  }, 30000);
  test("Deep insert", async () => {
    const account = {
      name: "Sample Account",
      // eslint-disable-next-line @typescript-eslint/camelcase
      contact_customer_accounts: [
        {
          firstname: "Sample",
          lastname: "contact 1",
        },
        {
          firstname: "Sample",
          lastname: "Contact 2",
        },
      ],
    } as any;

    try {
      // Create Account & Contacts
      account.accountid = (await (Xrm.WebApi.createRecord("account", account) as any)).id;

      if (!account.accountid) throw new Error("Account not created");

      const accountCreated = await Xrm.WebApi.retrieveRecord(
        "account",
        account.accountid,
        "?$select=name&$expand=contact_customer_accounts($select=firstname,lastname)",
      );
      expect(accountCreated.contact_customer_accounts.length).toBe(2);
    } finally {
      // Delete account
      if (account.accountid) {
        await Xrm.WebApi.deleteRecord("account", account.accountid);
      }
    }
  }, 30000);
});

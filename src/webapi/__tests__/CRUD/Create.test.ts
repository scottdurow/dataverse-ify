/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../SetupGlobalContext";
import { whoAmI } from "../../whoAmI";

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

  test("Create, Update then Delete", async () => {
    const userId = await whoAmI();
    const account1 = {
      name: "Sample Account",
      accountcategorycode: 1, //Preferred_Customer
      creditlimit: 1000,
      creditonhold: true,
      numberofemployees: 10,
      lastonholdtime: new Date(),
      "preferredsystemuserid@odata.bind": `systemusers(${userId})`,
    } as any;

    try {
      // Create Account
      const newAccount = (await Xrm.WebApi.createRecord("account", account1)) as any;
      account1.accountid = newAccount.id;

      if (!account1.accountid) {
        throw new Error("Account not created");
      }

      // Check the account has been created
      const account2 = (await Xrm.WebApi.retrieveRecord("account", account1.accountid, "?$select=name")) as any;

      expect(account2.name).toBe("Sample Account");
    } finally {
      // Delete account
      if (account1.accountid) {
        await Xrm.WebApi.deleteRecord("account", account1.accountid);
      }
    }
  }, 10000);
});

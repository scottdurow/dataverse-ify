/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../SetupGlobalContext";

describe("XrmWebApiNode", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  test("throws error from response", async () => {
    const account1 = {
      foo_bar: "baz",
    } as any;

    try {
      // Create Account
      const newAccount = (await Xrm.WebApi.createRecord("account", account1)) as any;
      account1.accountid = newAccount.id;
    } catch (e) {
      expect((e as Error).message).toMatch(/Invalid property 'foo_bar' was found in entity/);
    }
  }, 10000);

  test("error when deleting record that does not exist", async () => {
    try {
      // Delete non existent Account
      await Xrm.WebApi.deleteRecord("account", "f0161204-0f0a-ed11-82e6-0022483d2320");
    } catch (e) {
      expect((e as Error).message).toMatch(
        /(Id = f0161204-0f0a-ed11-82e6-0022483d2320 Does Not Exist)|(The requested record was not found or you do not have sufficient permissions to view it)/,
      );
    }
  }, 10000);
});

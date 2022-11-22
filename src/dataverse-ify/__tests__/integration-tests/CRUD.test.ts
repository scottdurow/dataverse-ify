/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { whoAmI } from "../../../webapi/WhoAmI";
import { EntityReference } from "../../../types/EntityReference";
import { account_account_accountcategorycode } from "../../../dataverse-gen/enums/account_account_accountcategorycode";
import { socialprofile_community } from "../../../dataverse-gen/enums/socialprofile_community";
import { XrmContextDataverseClient } from "../../DataverseClient";
describe("create", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);
  it("Create an account", async () => {
    const userId = await whoAmI();

    // Create an account with sdk types
    setMetadataCache({
      entities: {
        account: accountMetadata,
      },
    });

    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
      // OptionSet
      accountcategorycode: account_account_accountcategorycode.PreferredCustomer,
      // Money
      creditlimit: 100,
      // Double
      address1_latitude: 1.0,
      // Integer (check forced to int)
      address1_utcoffset: 1.5,
      // DateTime
      lastonholdtime: new Date(),
      // EntityReference
      preferredsystemuserid: new EntityReference("systemuser", userId),
      // MultiSelect
      cdsify_multiselect: [socialprofile_community.Twitter, socialprofile_community.Facebook],
    } as Account;

    // Create
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    account1.accountid = await serviceClient.create(account1);
    expect(account1.accountid).toBeDefined();

    if (!account1.accountid) {
      fail();
    }

    // Retrieve
    const account1Retrieved = (await serviceClient.retrieve("account", account1.accountid, true)) as Account;
    expect(account1Retrieved.name).toBe(account1.name);
    expect(account1Retrieved.accountcategorycode).toBe(account1.accountcategorycode);
    expect(account1Retrieved.creditlimit).toBe(account1.creditlimit);
    expect(account1Retrieved.address1_latitude).toBe(account1.address1_latitude);
    expect(account1Retrieved.lastonholdtime?.toLocaleDateString()).toBe(account1?.lastonholdtime?.toLocaleDateString());
    expect(account1Retrieved.preferredsystemuserid?.id).toBe(account1.preferredsystemuserid?.id);
    expect(account1Retrieved.preferredsystemuserid?.entityType).toBe(account1.preferredsystemuserid?.entityType);
    expect(account1Retrieved.preferredsystemuserid?.name).toBeDefined();

    // Update
    account1.name = "Updated Name";
    await serviceClient.update(account1);

    // Retrieve Updated
    const account1Retrieved2 = (await serviceClient.retrieve("account", account1.accountid, true)) as Account;
    expect(account1Retrieved2.name).toBe("Updated Name");

    // Delete
    await serviceClient.delete("account", account1.accountid);
  }, 10000);

  it.todo("allows fetchXml paging");
});

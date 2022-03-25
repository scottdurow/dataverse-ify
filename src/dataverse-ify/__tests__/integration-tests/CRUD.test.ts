/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../../webapi/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { whoAmI } from "../../../webapi/whoAmI";
import { EntityReference } from "../../../types/EntityReference";
import { XrmContextCdsServiceClient } from "../../CdsServiceClient/XrmContextServiceClient";
import * as config from "config";
import { NodeXrmConfig } from "../../../webapi/config/NodeXrmConfig";
import { account_account_accountcategorycode } from "../../../dataverse-gen/enums/account_account_accountcategorycode";
import { socialprofile_community } from "../../../dataverse-gen/enums/socialprofile_community";
describe("create", () => {
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
  }, 10000);
  test("Create an account", async () => {
    if (!configFile.runIntegrationTests) return;
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
      // Optionset
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
      // MutliSelect
      cdsify_multiselect: [socialprofile_community.Twitter, socialprofile_community.Facebook],
    } as Account;

    // Create
    const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
    account1.accountid = await cdsServiceClient.create(account1);
    expect(account1.accountid).toBeDefined();

    if (!account1.accountid) {
      fail();
    }

    // Retrieve
    const account1Retreived = (await cdsServiceClient.retrieve("account", account1.accountid, true)) as Account;
    expect(account1Retreived.name).toBe(account1.name);
    expect(account1Retreived.accountcategorycode).toBe(account1.accountcategorycode);
    expect(account1Retreived.creditlimit).toBe(account1.creditlimit);
    expect(account1Retreived.address1_latitude).toBe(account1.address1_latitude);
    expect(account1Retreived.lastonholdtime?.toLocaleDateString()).toBe(account1?.lastonholdtime?.toLocaleDateString());
    expect(account1Retreived.preferredsystemuserid?.id).toBe(account1.preferredsystemuserid?.id);
    expect(account1Retreived.preferredsystemuserid?.entityType).toBe(account1.preferredsystemuserid?.entityType);
    expect(account1Retreived.preferredsystemuserid?.name).toBeDefined();

    // Update
    account1.name = "Updated Name";
    await cdsServiceClient.update(account1);

    // Retrieve Updated
    const account1Retreived2 = (await cdsServiceClient.retrieve("account", account1.accountid, true)) as Account;
    expect(account1Retreived2.name).toBe("Updated Name");

    // Delete
    await cdsServiceClient.delete("account", account1.accountid);
  }, 10000);
});

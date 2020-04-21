/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../../cdsnode/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account, account_account_accountcategorycode } from "../../../cds-metadata/account";
import { whoAmI } from "../../../cdsnode/whoAmI";
import { EntityReference } from "../../../types/EntityReference";
import { XrmContextCdsServiceClient } from "../../CdsServiceClient/XrmContextServiceClient";
import * as config from "config";
import { NodeXrmConfig } from "../../../cdsnode/config/NodeXrmConfig";
describe.skip("create", () => {
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
      accountcategorycode: account_account_accountcategorycode.Preferred_Customer,
      // Money
      creditlimit: 100,
      // Double
      address1_latitude: 1.0,
      // DateTime
      lastonholdtime: new Date(),
      // EntityReference
      preferredsystemuserid: new EntityReference("systemuser", userId),
    } as Account;

    // Create
    const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
    account1.accountid = await cdsServiceClient.create(account1);
    expect(account1.accountid).toBeDefined();

    // Delete
    if (account1.accountid) {
      // Retrieve
      const account1Retreived = (await cdsServiceClient.retrieve("account", account1.accountid, true)) as Account;
      expect(account1Retreived.name).toBe(account1.name);
      expect(account1Retreived.accountcategorycode).toBe(account1.accountcategorycode);
      expect(account1Retreived.creditlimit).toBe(account1.creditlimit);
      expect(account1Retreived.address1_latitude).toBe(account1.address1_latitude);
      expect(account1Retreived.lastonholdtime?.toLocaleDateString()).toBe(
        account1?.lastonholdtime?.toLocaleDateString(),
      );
      expect(account1Retreived.preferredsystemuserid?.id).toBe(account1.preferredsystemuserid?.id);
      expect(account1Retreived.preferredsystemuserid?.entityType).toBe(account1.preferredsystemuserid?.entityType);
      expect(account1Retreived.preferredsystemuserid?.name).toBeDefined();
      cdsServiceClient.delete("account", account1.accountid);
    }
  }, 10000);
});

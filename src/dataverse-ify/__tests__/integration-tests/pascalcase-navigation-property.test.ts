/* eslint-disable @typescript-eslint/camelcase */
import { SetupGlobalContext } from "../../../webapi/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account, AccountAttributes } from "../../../dataverse-gen/entities/Account";
import { XrmContextCdsServiceClient } from "../..";
import * as config from "config";
import { NodeXrmConfig } from "../../../webapi/config/NodeXrmConfig";
import { Entity } from "../../../types";
describe("pascalcase-navigation-property", () => {
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
  }, 30000);
  test("pascalcase-navigation-property", async () => {
    if (!configFile.runIntegrationTests) return;
    setMetadataCache({
      entities: {
        account: accountMetadata,
      },
    });
    const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);

    const accountRelated = {
      logicalName: accountMetadata.logicalName,
      name: "Account " + new Date().toISOString(),
    } as Account;

    // Create account
    accountRelated.id = await cdsServiceClient.create(accountRelated);

    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account " + new Date().toISOString(),
      cdsify_account1: Entity.toEntityReference(accountRelated),
    } as Account;

    // Create account
    account1.id = await cdsServiceClient.create(account1);

    // Retrieve the account
    const accountRetrieved = (await cdsServiceClient.retrieve(account1.logicalName, account1.id, [
      AccountAttributes.cdsify_Account1,
    ])) as Account;

    expect(accountRetrieved.cdsify_account1).toBeDefined();

    // Tidy up
    await cdsServiceClient.delete(accountRelated);
    await cdsServiceClient.delete(account1);
  }, 30000);
});

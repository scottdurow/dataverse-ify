import { SetupGlobalContext } from "../../../webapi/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account, AccountAttributes } from "../../../dataverse-gen/entities/Account";
import { XrmContextCdsServiceClient } from "../..";
import { Entity } from "../../../types";
describe("pascalcase-navigation-property", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 30000);
  test("pascalcase-navigation-property", async () => {
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

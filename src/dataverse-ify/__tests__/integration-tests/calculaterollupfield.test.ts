import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { XrmContextDataverseClient } from "../..";
import { Entity } from "../../../types/Entity";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import {
  CalculateRollupFieldMetadata,
  CalculateRollupFieldRequest,
} from "../../../dataverse-gen/functions/CalculateRollupField";
describe("CalculateRollUpField", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 30000);
  test("CalculateRollupField", async () => {
    setMetadataCache({
      entities: { account: accountMetadata },
      actions: { CalculateRollupField: CalculateRollupFieldMetadata },
    });

    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
    } as Account;

    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    try {
      // Create Account
      account1.id = await serviceClient.create(account1);

      // Calculate Rollup field open deals
      const request = {
        logicalName: CalculateRollupFieldMetadata.operationName,
        FieldName: "opendeals",
        Target: Entity.toEntityReference(account1),
      } as CalculateRollupFieldRequest;

      const response = await serviceClient.execute(request);
      expect(response).toBeDefined();
    } catch (ex) {
      expect(ex).toBeUndefined();
    } finally {
      if (account1.id) {
        // Tidy up
        await serviceClient.delete(account1);
      }
    }
  }, 30000);
});

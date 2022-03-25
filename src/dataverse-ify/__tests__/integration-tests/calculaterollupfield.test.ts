import { SetupGlobalContext } from "../../../webapi/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { XrmContextCdsServiceClient } from "../..";
import { Entity } from "../../../types/Entity";
import * as config from "config";
import { NodeXrmConfig } from "../../../webapi/config/NodeXrmConfig";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import {
  CalculateRollupFieldMetadata,
  CalculateRollupFieldRequest,
} from "../../../dataverse-gen/functions/CalculateRollupField";
describe("calculaterollpfield", () => {
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
  test("CalculateRollupField", async () => {
    if (!configFile.runIntegrationTests) return;
    setMetadataCache({
      entities: { account: accountMetadata },
      actions: { CalculateRollupField: CalculateRollupFieldMetadata },
    });

    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
    } as Account;

    const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
    try {
      // Create Account
      account1.id = await cdsServiceClient.create(account1);

      // Calculate Rollup field openddeals
      const request = {
        logicalName: CalculateRollupFieldMetadata.operationName,
        FieldName: "opendeals",
        Target: Entity.toEntityReference(account1),
      } as CalculateRollupFieldRequest;

      const response = await cdsServiceClient.execute(request);
      expect(response).toBeDefined();
    } catch (ex) {
      fail(ex);
    } finally {
      if (account1.id) {
        // Tidy up
        await cdsServiceClient.delete(account1);
      }
    }
  }, 30000);
});

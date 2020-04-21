import { SetupGlobalContext } from "../../../cdsnode/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { XrmContextCdsServiceClient } from "../..";
import { Entity } from "../../../types/Entity";
import { Account } from "../../../cds-metadata/account";
import { accountMetadata } from "../../../cds-metadata/account";
import { calculaterollupfieldMetadata, CalculateRollupField } from "../../../cds-metadata/calculaterollupfield";
import * as config from "config";
import { NodeXrmConfig } from "../../../cdsnode/config/NodeXrmConfig";
describe("calculaterollpfield", () => {
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
  }, 30000);
  test("CalculateRollupField", async () => {
    if (!configFile.runIntegrationTests) return;
    setMetadataCache({
      entities: { account: accountMetadata },
      actions: { CalculateRollupField: calculaterollupfieldMetadata },
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
        logicalName: calculaterollupfieldMetadata.operationName,
        FieldName: "opendeals",
        Target: Entity.toEntityReference(account1),
      } as CalculateRollupField;

      const response = await cdsServiceClient.execute(request);
      console.log(response);
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

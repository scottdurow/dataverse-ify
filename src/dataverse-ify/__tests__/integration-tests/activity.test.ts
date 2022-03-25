import { SetupGlobalContext } from "../../../webapi/SetupGlobalContext";
import { XrmContextCdsServiceClient } from "../..";
import { ActivityParty, activitypartyMetadata } from "../../../types/ActivityParty";
import { Entity } from "../../../types/Entity";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import * as config from "config";
import { NodeXrmConfig } from "../../../webapi/config/NodeXrmConfig";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { letterMetadata, Letter } from "../../../dataverse-gen/entities/Letter";
describe("activity", () => {
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
  test("Create Activity with Activity Parties.", async () => {
    if (!configFile.runIntegrationTests) return;
    setMetadataCache({
      entities: {
        account: accountMetadata,
        letter: letterMetadata,
        activityparty: activitypartyMetadata,
      },
    });

    const account1 = {
      logicalName: "account",
      name: "Account 1",
    } as Account;
    const letter1 = {
      logicalName: "letter",
      subject: `Sample Letter ${new Date().toUTCString()}`,
    } as Letter;
    const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
    try {
      // Create
      account1.id = await cdsServiceClient.create(account1);
      const account1Ref = Entity.toEntityReference(account1);
      letter1.regardingobjectid = account1Ref;
      letter1.to = [{ logicalName: "activityparty", partyid: account1Ref } as ActivityParty];
      if (account1.id) {
        letter1.id = await cdsServiceClient.create(letter1);
      }

      // Retrieve
      if (letter1.id) {
        const letterRetrieved = (await cdsServiceClient.retrieve("letter", letter1.id, ["subject", "to"])) as Letter;
        expect(letterRetrieved.subject).toBe(letter1.subject);
        expect(letterRetrieved.regardingobjectid?.id).toBe(letterRetrieved.regardingobjectid?.id);
        expect(letterRetrieved.to).toBeDefined();
        if (letterRetrieved.to) {
          expect(letterRetrieved.to[0].partyid?.id).toBe(account1.id);
        }
      }

      // Add bcc
      letter1.bcc = [{ logicalName: "activityparty", partyid: account1Ref } as ActivityParty];
      await cdsServiceClient.update(letter1);

      // Retrieve again to check bcc
      if (letter1.id) {
        const letterRetrieved = (await cdsServiceClient.retrieve("letter", letter1.id, ["subject", "to"])) as Letter;
        expect(letterRetrieved.subject).toBe(letter1.subject);
        expect(letterRetrieved.regardingobjectid?.id).toBe(letterRetrieved.regardingobjectid?.id);
        expect(letterRetrieved.to).toBeDefined();
        if (letterRetrieved.to) {
          expect(letterRetrieved.to[0].partyid?.id).toBe(account1.id);
        }
        expect(letterRetrieved.bcc).toBeDefined();
        if (letterRetrieved.bcc) {
          expect(letterRetrieved.bcc[0].partyid?.id).toBe(account1.id);
        }
      }
    } catch (ex) {
      fail(ex);
    } finally {
      if (letter1.id) {
        // Tidy up
        // Retry once if we get Sql ErrorCode: -2146232060 Sql Number: 1205 - DeadLock
        try {
          await cdsServiceClient.delete(letter1);
        } catch (ex) {
          await cdsServiceClient.delete(letter1);
        }
      }
      if (account1.id) {
        // Tidy up
        try {
          await cdsServiceClient.delete(account1);
        } catch (ex) {
          await cdsServiceClient.delete(account1);
        }
      }
    }
  }, 30000);
});

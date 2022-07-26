/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../SetupGlobalContext";
import { setMetadataCache } from "../../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../../dataverse-gen/entities/Account";
import { getGuidFromHeaders } from "../../../../types/Guid";
import { WebApiExecuteRequestBase } from "../../../../types";

describe("XrmWebApiNode-executeMultiple", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("creates records", async () => {
    // Create an account with sdk types
    setMetadataCache({
      entities: {
        account: accountMetadata,
      },
    });

    const accounts = {
      name: "Account 1",
    } as Account;

    const account1Create = new WebApiExecuteRequestBase(
      {
        parameterTypes: {},
        boundParameter: undefined,
        operationType: 2,
        operationName: "Create",
      },
      { etn: accountMetadata.logicalName, payload: accounts },
    );

    const response = await Xrm.WebApi.online.executeMultiple([account1Create, account1Create]);

    expect(response).toBeDefined();
    expect(response.length).toBe(2);

    // Get the new ids from the responses
    const account1 = getGuidFromHeaders(response[0].headers);
    const account2 = getGuidFromHeaders(response[1].headers);

    await Xrm.WebApi.deleteRecord("account", account1);
    await Xrm.WebApi.deleteRecord("account", account2);
  }, 10000);

  it("updates records", async () => {
    // Create an account with sdk types
    setMetadataCache({
      entities: {
        account: accountMetadata,
      },
    });

    const account1 = {
      name: "Account 1",
    } as Account;

    const account2 = {
      name: "Account 2",
    } as Account;

    const account1id = await (await Xrm.WebApi.createRecord(accountMetadata.logicalName, account1)).id;
    const account2id = await (await Xrm.WebApi.createRecord(accountMetadata.logicalName, account2)).id;

    // Delete using executeMultiple

    const account1Update = new WebApiExecuteRequestBase(
      {
        parameterTypes: {},
        boundParameter: undefined,
        operationType: 2,
        operationName: "Update",
      },
      {
        etn: accountMetadata.logicalName,
        id: account1id,
        payload: account1,
      },
    );
    account1.name = "Account 1 Updated";
    const account2Update = new WebApiExecuteRequestBase(
      {
        parameterTypes: {},
        boundParameter: undefined,
        operationType: 2,
        operationName: "Update",
      },
      {
        etn: accountMetadata.logicalName,
        id: account2id,
        payload: account2,
      },
    );
    account2.name = "Account 2 Updated";
    const deleteResponse = await Xrm.WebApi.online.executeMultiple([account1Update, account2Update]);

    expect(deleteResponse).toBeDefined();
    expect(deleteResponse.length).toBe(2);

    await Xrm.WebApi.deleteRecord("account", account1id);
    await Xrm.WebApi.deleteRecord("account", account2id);
  }, 100000);

  it("deletes records", async () => {
    // Create an account with sdk types
    setMetadataCache({
      entities: {
        account: accountMetadata,
      },
    });

    const account1 = {
      name: "Account 1",
    } as Account;

    const account2 = {
      name: "Account 2",
    } as Account;

    account1.id = await (await Xrm.WebApi.createRecord(accountMetadata.logicalName, account1)).id;
    account2.id = await (await Xrm.WebApi.createRecord(accountMetadata.logicalName, account2)).id;

    // Delete using executeMultiple

    const account1Delete = new WebApiExecuteRequestBase(
      {
        parameterTypes: {},
        boundParameter: undefined,
        operationType: 2,
        operationName: "Delete",
      },
      { entityReference: { entityType: accountMetadata.logicalName, id: account1.id } },
    );

    const account2Delete = new WebApiExecuteRequestBase(
      {
        parameterTypes: {},
        boundParameter: undefined,
        operationType: 2,
        operationName: "Delete",
      },
      { entityReference: { entityType: accountMetadata.logicalName, id: account2.id } },
    );

    const deleteResponse = await Xrm.WebApi.online.executeMultiple([account1Delete, account2Delete]);

    expect(deleteResponse).toBeDefined();
    expect(deleteResponse.length).toBe(2);
  }, 100000);
});

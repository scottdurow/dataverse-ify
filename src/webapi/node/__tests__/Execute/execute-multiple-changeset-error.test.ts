/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../SetupGlobalContext";
import { setMetadataCache } from "../../../../metadata/MetadataCache";
import { accountMetadata } from "../../../../dataverse-gen/entities/Account";
import { WebApiExecuteRequestBase } from "../../../../types";
import { WebApiError } from "../../../../types/WebApiError";

// see https://docs.microsoft.com/en-us/power-apps/developer/data-platform/webapi/execute-batch-operations-using-web-api#change-sets
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

    const account = {
      name: "Account 1",
    };

    const errorAccount = {
      name: "Account 1",
      foo: "bar",
    };

    const account1Create = new WebApiExecuteRequestBase(
      {
        parameterTypes: {},
        boundParameter: undefined,
        operationType: 2,
        operationName: "Create",
      },
      { etn: accountMetadata.logicalName, payload: account },
    );

    const account1CreateError = new WebApiExecuteRequestBase(
      {
        parameterTypes: {},
        boundParameter: undefined,
        operationType: 2,
        operationName: "Create",
      },
      { etn: accountMetadata.logicalName, payload: errorAccount },
    );

    // Change sets are passed as arrays of requests inside the batch
    // Change sets can be combined with normal batches
    let error = "";
    try {
      const response = await Xrm.WebApi.online.executeMultiple([[account1Create, account1CreateError], account1Create]);
      expect(response).toBeUndefined();
    } catch (e) {
      error = (e as WebApiError).message;
    }
    expect(error).toMatch(/Invalid property 'foo'/);
  }, 10000);

  // it("updates records", async () => {
  //   // Create an account with sdk types
  //   setMetadataCache({
  //     entities: {
  //       account: accountMetadata,
  //     },
  //   });

  //   const account1 = {
  //     name: "Account 1",
  //   } as Account;

  //   const account2 = {
  //     name: "Account 2",
  //   } as Account;

  //   const account1id = await (await Xrm.WebApi.createRecord(accountMetadata.logicalName, account1)).id;
  //   const account2id = await (await Xrm.WebApi.createRecord(accountMetadata.logicalName, account2)).id;

  //   // Delete using executeMultiple

  //   const account1Update = new WebApiExecuteRequestBase(
  //     {
  //       parameterTypes: {},
  //       boundParameter: undefined,
  //       operationType: 2,
  //       operationName: "Update",
  //     },
  //     {
  //       etn: accountMetadata.logicalName,
  //       id: account1id,
  //       payload: account1,
  //     },
  //   );
  //   account1.name = "Account 1 Updated";
  //   const account2Update = new WebApiExecuteRequestBase(
  //     {
  //       parameterTypes: {},
  //       boundParameter: undefined,
  //       operationType: 2,
  //       operationName: "Update",
  //     },
  //     {
  //       etn: accountMetadata.logicalName,
  //       id: account2id,
  //       payload: account2,
  //     },
  //   );
  //   account2.name = "Account 2 Updated";
  //   const deleteResponse = await Xrm.WebApi.online.executeMultiple([account1Update, account2Update]);

  //   expect(deleteResponse).toBeDefined();
  //   expect(deleteResponse.length).toBe(2);

  //   await Xrm.WebApi.deleteRecord("account", account1id);
  //   await Xrm.WebApi.deleteRecord("account", account2id);
  // }, 100000);

  // it("deletes records", async () => {
  //   // Create an account with sdk types
  //   setMetadataCache({
  //     entities: {
  //       account: accountMetadata,
  //     },
  //   });

  //   const account1 = {
  //     name: "Account 1",
  //   } as Account;

  //   const account2 = {
  //     name: "Account 2",
  //   } as Account;

  //   account1.id = await (await Xrm.WebApi.createRecord(accountMetadata.logicalName, account1)).id;
  //   account2.id = await (await Xrm.WebApi.createRecord(accountMetadata.logicalName, account2)).id;

  //   // Delete using executeMultiple

  //   const account1Delete = new WebApiExecuteRequestBase(
  //     {
  //       parameterTypes: {},
  //       boundParameter: undefined,
  //       operationType: 2,
  //       operationName: "Delete",
  //     },
  //     { entityReference: { entityType: accountMetadata.logicalName, id: account1.id } },
  //   );

  //   const account2Delete = new WebApiExecuteRequestBase(
  //     {
  //       parameterTypes: {},
  //       boundParameter: undefined,
  //       operationType: 2,
  //       operationName: "Delete",
  //     },
  //     { entityReference: { entityType: accountMetadata.logicalName, id: account2.id } },
  //   );

  //   const deleteResponse = await Xrm.WebApi.online.executeMultiple([account1Delete, account2Delete]);

  //   expect(deleteResponse).toBeDefined();
  //   expect(deleteResponse.length).toBe(2);
  // }, 100000);
});

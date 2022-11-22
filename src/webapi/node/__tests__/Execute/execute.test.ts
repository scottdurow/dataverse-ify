/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../SetupGlobalContext";
import { Account, accountMetadata } from "../../../../dataverse-gen/entities/Account";
import { getGuidFromHeaders } from "../../../../types/Guid";
import { WebApiExecuteRequestBase } from "../../../../types";

describe("XrmWebApiNode-execute", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  test("create using execute", async () => {
    const account = {
      //logicalName: accountMetadata.logicalName,
      name: "Account 1",
    } as Account;
    let id = "";

    const account1Create = new WebApiExecuteRequestBase(
      {
        parameterTypes: {},
        boundParameter: undefined,
        operationType: 2,
        operationName: "Create",
      },
      {
        etn: accountMetadata.logicalName,
        payload: account,
      },
    );

    try {
      const response1 = await Xrm.WebApi.online.execute(account1Create);
      expect(response1).toBeDefined();

      // When using the real WebApi, execute create does not return the
      // in our node implementation we do!
      try {
        id = getGuidFromHeaders(response1.headers);
      } catch (e) {
        console.log(e);
      }
    } finally {
      const account1Delete = new WebApiExecuteRequestBase(
        {
          parameterTypes: {},
          boundParameter: undefined,
          operationType: 2,
          operationName: "Delete",
        },
        { entityReference: { entityType: accountMetadata.logicalName, id: id } },
      );

      await Xrm.WebApi.online.execute(account1Delete);
    }
  }, 10000);

  test("update using execute", async () => {
    const account = {
      name: "Account 1",
    } as Account;

    const id = (await Xrm.WebApi.createRecord(accountMetadata.logicalName, account)).id;

    account.name = "Account 1 updated";
    const updateRequest = new WebApiExecuteRequestBase(
      {
        parameterTypes: {},
        boundParameter: undefined,
        operationType: 2,
        operationName: "Update",
      },
      {
        etn: accountMetadata.logicalName,
        id: id,
        payload: account,
      },
    );

    try {
      const response1 = await Xrm.WebApi.online.execute(updateRequest);
      expect(response1).toBeDefined();
    } finally {
      await Xrm.WebApi.online.deleteRecord(accountMetadata.logicalName, id);
    }
  }, 10000);
});

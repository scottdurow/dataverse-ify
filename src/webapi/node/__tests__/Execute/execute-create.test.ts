/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../SetupGlobalContext";
import { Account, accountMetadata } from "../../../../dataverse-gen/entities/Account";
import { getGuidFromHeaders } from "../../../../types/Guid";

describe("XrmWebApiNode-execute", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);
  test("create using execute", async () => {
    const accounts = [
      {
        //logicalName: accountMetadata.logicalName,
        name: "Account 1",
      } as Account,
    ];

    let id = "";

    const account1Create = {
      etn: accountMetadata.logicalName,
      payload: accounts,
      getMetadata: () => {
        return {
          boundParameter: undefined,
          operationType: 2,
          operationName: "Create",
        };
      },
    };

    try {
      const response1 = await Xrm.WebApi.online.execute(account1Create);
      expect(response1).toBeDefined();

      // When using the real WebApi, execute create does not return the headers for some reason
      // in our node implementation we do!
      try {
        id = getGuidFromHeaders(response1.headers);
      } catch (e) {
        console.log(e);
      }
    } finally {
      if (id !== "") {
        const account1Delete = {
          entityReference: { entityType: accountMetadata.logicalName, id: id },
          getMetadata: () => {
            return {
              boundParameter: undefined,
              operationType: 2,
              operationName: "Delete",
            };
          },
        };
        await Xrm.WebApi.online.execute(account1Delete);
      }
    }
  }, 10000);
});

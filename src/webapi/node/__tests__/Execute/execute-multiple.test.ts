/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../SetupGlobalContext";
import { setMetadataCache } from "../../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../../dataverse-gen/entities/Account";
import { getGuidFromHeaders } from "../../../../types/Guid";

describe("XrmWebApiNode-executeMultiple", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);
  it("Create using executeMultiple", async () => {
    // Create an account with sdk types
    setMetadataCache({
      entities: {
        account: accountMetadata,
      },
    });

    const accounts = [
      {
        //logicalName: accountMetadata.logicalName,
        name: "Account 1",
      } as Account,
    ];

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

    const response = await Xrm.WebApi.online.executeMultiple([account1Create, account1Create]);
    console.log(response);
    expect(response).toBeDefined();
    expect(response.length).toBe(2);

    // Get the new ids from the responses
    const account1 = getGuidFromHeaders(response[0].headers);
    const account2 = getGuidFromHeaders(response[1].headers);

    await Xrm.WebApi.deleteRecord("account", account1);
    await Xrm.WebApi.deleteRecord("account", account2);

    // const account1Delete = {
    //   entityReference: { entityType: accountMetadata.logicalName, id: account1id },
    //   getMetadata: () => {
    //     return {
    //       boundParameter: undefined,
    //       operationType: 2,
    //       operationName: "Delete",
    //     };
    //   },
    // };

    // const deleteResponse = await Xrm.WebApi.online.execute(account1Delete);
    // console.log(deleteResponse);
    // // Create multiple using ExecuteMultiple
    // const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    // const requests = accounts.map((a) => {
    //   return { target: a } as CreateRequest;
    // });
    // const batch = { requests: requests } as ExecuteMultipleRequest;

    // const response = (await serviceClient.execute(batch)) as ExecuteMultipleResponse;

    // expect(response.isFaulted).toBeFalsy();
    // expect(response.responses).toHaveLength(1);
    // expect((response.responses[0] as CreateResponse).id).toBeDefined();

    // Delete
    //await serviceClient.delete("account", account1.accountid);
  }, 10000);
});

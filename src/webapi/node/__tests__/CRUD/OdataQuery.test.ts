import { TEST_STRING } from "../../../__tests__/test-values";
import { SetupGlobalContext } from "../../SetupGlobalContext";

describe("XrmWebApiNode", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  });

  it("creates accounts and retrieveMultiple by id", async () => {
    const webApiService = Xrm.WebApi;

    let createResponse1: Xrm.CreateResponse | undefined;
    let createResponse2: Xrm.CreateResponse | undefined;

    try {
      createResponse1 = await webApiService.createRecord("account", {
        name: TEST_STRING[0],
      });
      expect(createResponse1.id).toBeDefined();

      createResponse2 = await webApiService.createRecord("account", {
        name: TEST_STRING[1],
      });
      expect(createResponse2.id).toBeDefined();

      const accountIds = `'${createResponse1.id}','${createResponse2.id}'`;
      const retrieveMultipleResponse = await webApiService.retrieveMultipleRecords(
        "account",
        `?$select=name&$orderby=createdon asc&$filter=(Microsoft.Dynamics.CRM.In(PropertyName=%27accountid%27,PropertyValues=[${encodeURIComponent(
          accountIds,
        )}]))`,
      );

      expect(retrieveMultipleResponse.entities).toHaveLength(2);
      expect(retrieveMultipleResponse.entities[0].name).toMatch(TEST_STRING[0]);
      expect(retrieveMultipleResponse.entities[1].name).toMatch(TEST_STRING[1]);
    } finally {
      // And tidy up
      if (createResponse1) {
        await webApiService.deleteRecord("account", createResponse1.id);
      }

      if (createResponse2) {
        await webApiService.deleteRecord("account", createResponse2.id);
      }
    }
  }, 10000);
});

/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../SetupGlobalContext";
import { WebApiExecuteRequestBase } from "../../../../types/WebApiExecuteRequest";
import {
  cdsify_BoundEchoFunctionMetadata,
  cdsify_BoundEchoFunctionRequest,
} from "../../../../dataverse-gen/functions/cdsify_BoundEchoFunction";
import {
  cdsify_IntegrationTest,
  cdsify_integrationtestMetadata,
} from "../../../../dataverse-gen/entities/cdsify_IntegrationTest";
import { TEST_INTEGER, TEST_STRING } from "../../../__tests__/test-values";

describe("XrmWebApiNode", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("custom api bound function", async () => {
    const integrationTestId = (
      await Xrm.WebApi.createRecord(cdsify_integrationtestMetadata.logicalName, {
        cdsify_name: "foo",
      } as cdsify_IntegrationTest)
    ).id;

    try {
      const request = new WebApiExecuteRequestBase(cdsify_BoundEchoFunctionMetadata, {
        cdsify_BoundEchoFunctionInInteger: TEST_INTEGER[0],
        cdsify_BoundEchoFunctionInString: TEST_STRING[0],
        entity: { entityType: cdsify_integrationtestMetadata.logicalName, id: integrationTestId },
      } as cdsify_BoundEchoFunctionRequest);

      const response = await Xrm.WebApi.online.execute(request);
      expect(response).toBeDefined();
      const responseObject = await response.json();
      expect(responseObject.cdsify_BoundEchoFunctionOutString).toBe(TEST_STRING[0]);
      expect(responseObject.cdsify_BoundEchoFunctionOutInteger).toBe(TEST_INTEGER[0]);
    } finally {
      await Xrm.WebApi.deleteRecord(cdsify_integrationtestMetadata.logicalName, integrationTestId);
    }
  }, 100000);
});

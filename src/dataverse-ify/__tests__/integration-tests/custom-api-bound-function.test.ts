/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { metadataCache } from "../../../dataverse-gen/metadata";
import { XrmContextDataverseClient } from "../../DataverseClient";
import { TEST_INTEGER, TEST_STRING } from "../../../webapi/__tests__/test-values";
import {
  cdsify_BoundEchoFunctionMetadata,
  cdsify_BoundEchoFunctionRequest,
} from "../../../dataverse-gen/functions/cdsify_BoundEchoFunction";
import { cdsify_BoundEchoFunctionResponse } from "../../../dataverse-gen/complextypes/cdsify_BoundEchoFunctionResponse";
import {
  cdsify_IntegrationTest,
  cdsify_integrationtestMetadata,
} from "../../../dataverse-gen/entities/cdsify_IntegrationTest";
import { toEntityReference } from "../../../types";

describe("XrmContextDataverseClient", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("custom bound api function mapping", async () => {
    setMetadataCache(metadataCache);
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

    // Create test record
    const testRecord1 = {
      logicalName: cdsify_integrationtestMetadata.logicalName,
      cdsify_name: "test",
    } as cdsify_IntegrationTest;

    testRecord1.cdsify_integrationtestid = await serviceClient.create(testRecord1);

    try {
      const request: cdsify_BoundEchoFunctionRequest = {
        logicalName: cdsify_BoundEchoFunctionMetadata.operationName,
        entity: toEntityReference(testRecord1),
        cdsify_BoundEchoFunctionInString: TEST_STRING[0],
        cdsify_BoundEchoFunctionInInteger: TEST_INTEGER[0],
      };

      const response = (await serviceClient.execute(request as any)) as cdsify_BoundEchoFunctionResponse;
      expect(response).toBeDefined();
      expect(response.cdsify_BoundEchoFunctionOutString).toBe(request.cdsify_BoundEchoFunctionInString);
    } finally {
      await serviceClient.delete(testRecord1);
    }
  }, 100000);

  it.todo("allow passing the full entity rather than an entity reference to the entity bound parameter");
});

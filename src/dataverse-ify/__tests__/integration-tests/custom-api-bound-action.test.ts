/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { metadataCache } from "../../../dataverse-gen/metadata";
import { XrmContextDataverseClient } from "../../DataverseClient";
import {
  TEST_DATE,
  TEST_DECIMAL,
  TEST_FLOAT,
  TEST_GUID,
  TEST_INTEGER,
  TEST_STRING,
} from "../../../webapi/__tests__/test-values";
import {
  cdsify_IntegrationTest,
  cdsify_integrationtestMetadata,
} from "../../../dataverse-gen/entities/cdsify_IntegrationTest";
import { toEntityReference } from "../../../types";
import { cdsify_BoundEchoMetadata, cdsify_BoundEchoRequest } from "../../../dataverse-gen/actions/cdsify_BoundEcho";
import { cdsify_BoundEchoResponse } from "../../../dataverse-gen/complextypes/cdsify_BoundEchoResponse";

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
      const request: cdsify_BoundEchoRequest = {
        logicalName: cdsify_BoundEchoMetadata.operationName,
        entity: toEntityReference(testRecord1),
        cdsify_BoundInBoolean: true,
        cdsify_BoundInDateTime: TEST_DATE[0],
        cdsify_BoundInDecimal: TEST_DECIMAL[0],
        cdsify_BoundInEntity: testRecord1,
        cdsify_BoundInEntityCollection: [testRecord1],
        cdsify_BoundInEntityReference: toEntityReference(testRecord1),
        cdsify_BoundInFloat: TEST_FLOAT[0],
        cdsify_BoundInGuid: TEST_GUID[0],
        cdsify_BoundInInteger: TEST_INTEGER[0],
        cdsify_BoundInMoney: TEST_DECIMAL[0],
        cdsify_BoundInPicklist: TEST_INTEGER[0],
        cdsify_BoundInString: TEST_STRING[0],
        cdsify_BoundInStringArray: [TEST_STRING[0], TEST_STRING[1]],
      };

      const response = (await serviceClient.execute(request as any)) as cdsify_BoundEchoResponse;
      expect(response).toBeDefined();
      expect(response.cdsify_BoundOutString).toBe(TEST_STRING[0]);
    } finally {
      await serviceClient.delete(testRecord1);
    }
  }, 100000);

  it.todo("allow passing the full entity rather than an entity reference to the entity bound parameter");
});

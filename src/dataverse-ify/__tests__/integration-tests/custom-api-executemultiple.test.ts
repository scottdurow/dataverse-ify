/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { metadataCache } from "../../../dataverse-gen/metadata";
import { XrmContextDataverseClient } from "../../DataverseClient";
import {
  cdsify_UnboundEchoMetadata,
  cdsify_UnboundEchoRequest,
} from "../../../dataverse-gen/actions/cdsify_UnboundEcho";
import { cdsify_UnboundEchoResponse } from "../../../dataverse-gen/complextypes/cdsify_UnboundEchoResponse";
import {
  cdsify_IntegrationTest,
  cdsify_integrationtestMetadata,
} from "../../../dataverse-gen/entities/cdsify_IntegrationTest";
import { TEST_DATE, TEST_GUID, TEST_STRING } from "../../../webapi/__tests__/test-values";

describe("XrmContextDataverseClient", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("custom action inside batch execute multiple", async () => {
    // Create an account with sdk types
    setMetadataCache(metadataCache);
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    // Create test record
    const testRecord1 = {
      logicalName: cdsify_integrationtestMetadata.logicalName,
      cdsify_name: "test",
    } as cdsify_IntegrationTest;

    testRecord1.cdsify_integrationtestid = await serviceClient.create(testRecord1);

    try {
      const request = getApiRequest(testRecord1);
      const response = (await serviceClient.executeMultiple([request, request])) as cdsify_UnboundEchoResponse[];
      assertResponse(response[0], request);
      assertResponse(response[1], request);
      expect(response[0].cdsify_UnboundOutEntityReference?.cdsify_integrationtestid).toBe(
        testRecord1.cdsify_integrationtestid,
      );
    } finally {
      await serviceClient.delete(testRecord1);
    }
  }, 100000);

  it("custom action inside change set execute multiple", async () => {
    // Create an account with sdk types
    setMetadataCache(metadataCache);
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    // Create test record
    const testRecord1 = {
      logicalName: cdsify_integrationtestMetadata.logicalName,
      cdsify_name: "test",
    } as cdsify_IntegrationTest;

    testRecord1.cdsify_integrationtestid = await serviceClient.create(testRecord1);

    try {
      const request = getApiRequest(testRecord1);
      const response = (await serviceClient.executeMultiple([[request, request]])) as cdsify_UnboundEchoResponse[];
      assertResponse(response[0], request);
      assertResponse(response[1], request);
      expect(response[0].cdsify_UnboundOutEntityReference?.cdsify_integrationtestid).toBe(
        testRecord1.cdsify_integrationtestid,
      );
    } finally {
      await serviceClient.delete(testRecord1);
    }
  }, 100000);
});

function assertResponse(response: cdsify_UnboundEchoResponse, request: cdsify_UnboundEchoRequest) {
  expect(response.cdsify_UnboundOutBoolean).toBe(request.cdsify_UnboundInBoolean);
  expect(response.cdsify_UnboundOutEntity?.cdsify_name).toBe(TEST_STRING[0]);
  expect(response.cdsify_UnboundOutEntityCollection?.length).toBe(2);
  if (response.cdsify_UnboundOutEntityCollection) {
    expect(response.cdsify_UnboundOutEntityCollection[0].cdsify_name).toBe(TEST_STRING[0]);
    expect(response.cdsify_UnboundOutEntityCollection[1].cdsify_name).toBe(TEST_STRING[1]);
  }

  expect(response.cdsify_UnboundOutPicklist).toBe(request.cdsify_UnboundInPicklist);
  expect(response.cdsify_UnboundOutStringArray?.length).toBe(2);
  if (response.cdsify_UnboundOutStringArray) {
    expect(response.cdsify_UnboundOutStringArray[0]).toBe(TEST_STRING[0]);
    expect(response.cdsify_UnboundOutStringArray[1]).toBe(TEST_STRING[1]);
  }
  expect(response.cdsify_UnboundOutDateTime?.toString()).toBe(request.cdsify_UnboundInDateTime?.toString());
  expect(response.cdsify_UnboundOutString).toBe(request.cdsify_UnboundInString);
  expect(response.cdsify_UnboundOutFloat).toBe(request.cdsify_UnboundInFloat);
  expect(response.cdsify_UnboundOutInteger).toBe(request.cdsify_UnboundInInteger);
  expect(response.cdsify_UnboundOutMoney).toBe(request.cdsify_UnboundInMoney);
  expect(response.cdsify_UnboundOutGuid).toBe(request.cdsify_UnboundInGuid);

  expect(response).toBeDefined();
}

function getApiRequest(testRecord1: cdsify_IntegrationTest) {
  return {
    logicalName: cdsify_UnboundEchoMetadata.operationName,
    cdsify_UnboundInBoolean: true,
    cdsify_UnboundInEntity: {
      logicalName: cdsify_integrationtestMetadata.logicalName,
      cdsify_name: TEST_STRING[0],
    } as cdsify_IntegrationTest,
    cdsify_UnboundInEntityCollection: [
      {
        logicalName: cdsify_integrationtestMetadata.logicalName,
        cdsify_name: TEST_STRING[0],
      } as cdsify_IntegrationTest,
      {
        logicalName: cdsify_integrationtestMetadata.logicalName,
        cdsify_name: TEST_STRING[1],
      } as cdsify_IntegrationTest,
    ],
    cdsify_UnboundInEntityReference: testRecord1,
    cdsify_UnboundInPicklist: 2,
    cdsify_UnboundInStringArray: [TEST_STRING[0], TEST_STRING[1]],
    cdsify_UnboundInDateTime: TEST_DATE[0],
    cdsify_UnboundInDecimal: 11.22,
    cdsify_UnboundInFloat: 33.44,
    cdsify_UnboundInInteger: 55,
    cdsify_UnboundInMoney: 12345.67,
    cdsify_UnboundInString: TEST_STRING[0],
    cdsify_UnboundInGuid: TEST_GUID[0],
  } as cdsify_UnboundEchoRequest;
}

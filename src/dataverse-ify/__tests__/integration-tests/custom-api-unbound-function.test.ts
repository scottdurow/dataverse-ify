/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { metadataCache } from "../../../dataverse-gen/metadata";
import { XrmContextDataverseClient } from "../../DataverseClient";
import {
  cdsify_UnboundEchoFunction2Metadata,
  cdsify_UnboundEchoFunction2Request,
} from "../../../dataverse-gen/functions/cdsify_UnboundEchoFunction2";
import { TEST_DATE, TEST_FLOAT, TEST_STRING } from "../../../webapi/__tests__/test-values";
import { cdsify_UnboundEchoFunction2Response } from "../../../dataverse-gen/complextypes/cdsify_UnboundEchoFunction2Response";

describe("XrmContextDataverseClient", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("custom unbound api function mapping - array", async () => {
    setMetadataCache(metadataCache);
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

    const request: cdsify_UnboundEchoFunction2Request = {
      logicalName: cdsify_UnboundEchoFunction2Metadata.operationName,
      cdsify_UnboundEchoFunctionInStringArray: ["a", "b"],
    };

    const response = (await serviceClient.execute(request as any)) as cdsify_UnboundEchoFunction2Response;
    expect(response).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutStringArray).toBeDefined();
    if (response.cdsify_UnboundFunctionOutStringArray && request.cdsify_UnboundEchoFunctionInStringArray) {
      expect(response.cdsify_UnboundFunctionOutStringArray[0]).toBe(request.cdsify_UnboundEchoFunctionInStringArray[0]);
    }
  }, 100000);

  it("custom unbound api function mapping - string", async () => {
    setMetadataCache(metadataCache);
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

    const request: cdsify_UnboundEchoFunction2Request = {
      logicalName: cdsify_UnboundEchoFunction2Metadata.operationName,
      cdsify_UnboundEchoFunctionInString: TEST_STRING[0],
    };

    const response = (await serviceClient.execute(request as any)) as cdsify_UnboundEchoFunction2Response;
    expect(response).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutString).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutString).toBe(request.cdsify_UnboundEchoFunctionInString);
  }, 100000);

  it("custom unbound api function mapping - string 2", async () => {
    setMetadataCache(metadataCache);
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

    const request: cdsify_UnboundEchoFunction2Request = {
      logicalName: cdsify_UnboundEchoFunction2Metadata.operationName,
      cdsify_UnboundEchoFunctionInString: TEST_STRING[1],
    };

    const response = (await serviceClient.execute(request as any)) as cdsify_UnboundEchoFunction2Response;
    expect(response).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutString).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutString).toBe(request.cdsify_UnboundEchoFunctionInString);
  }, 100000);

  it("custom unbound api function mapping - date", async () => {
    setMetadataCache(metadataCache);
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

    const request: cdsify_UnboundEchoFunction2Request = {
      logicalName: cdsify_UnboundEchoFunction2Metadata.operationName,
      cdsify_UnboundEchoFunctionInDateTime: TEST_DATE[0],
    };

    const response = (await serviceClient.execute(request as any)) as cdsify_UnboundEchoFunction2Response;
    expect(response).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutDateTime).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutDateTime?.toISOString()).toBe(
      request.cdsify_UnboundEchoFunctionInDateTime?.toISOString(),
    );
  }, 100000);

  it("custom unbound api function mapping - boolean", async () => {
    setMetadataCache(metadataCache);
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

    const request: cdsify_UnboundEchoFunction2Request = {
      logicalName: cdsify_UnboundEchoFunction2Metadata.operationName,
      cdsify_UnboundEchoFunctionInBoolean: true,
    };

    const response = (await serviceClient.execute(request as any)) as cdsify_UnboundEchoFunction2Response;
    expect(response).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutBoolean).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutBoolean).toBe(request.cdsify_UnboundEchoFunctionInBoolean);
  }, 100000);

  it.todo("custom unbound api function mapping - decimal");
  // it("custom unbound api function mapping - decimal", async () => {
  //   // TODO: There is an issue where decimals need to be suffixed with m on the url
  //   // Otherwise you get the error "Expression of type 'Edm.Single' cannot be converted to type 'Edm.Decimal'"
  //   setMetadataCache(metadataCache);
  //   const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

  //   const request: cdsify_UnboundEchoFunction2Request = {
  //     logicalName: cdsify_UnboundEchoFunction2Metadata.operationName,
  //     cdsify_UnboundEchoFunctionInDecimal: TEST_DECIMAL[0],
  //   };

  //   const response = (await serviceClient.execute(request as any)) as cdsify_UnboundEchoFunction2Response;
  //   expect(response).toBeDefined();
  //   expect(response.cdsify_UnboundFunctionOutDecimal).toBeDefined();
  //   expect(response.cdsify_UnboundFunctionOutDecimal).toBe(request.cdsify_UnboundEchoFunctionInDecimal);
  // }, 100000);

  it("custom unbound api function mapping - float", async () => {
    setMetadataCache(metadataCache);
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

    const request: cdsify_UnboundEchoFunction2Request = {
      logicalName: cdsify_UnboundEchoFunction2Metadata.operationName,
      cdsify_UnboundEchoFunctionInFloat: TEST_FLOAT[0],
    };

    const response = (await serviceClient.execute(request as any)) as cdsify_UnboundEchoFunction2Response;
    expect(response).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutFloat).toBeDefined();
    expect(response.cdsify_UnboundFunctionOutFloat).toBe(request.cdsify_UnboundEchoFunctionInFloat);
  }, 100000);
});

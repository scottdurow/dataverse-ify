/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { metadataCache } from "../../../dataverse-gen/metadata";
import { XrmContextDataverseClient } from "../../DataverseClient";
import { cdsify_UnboundEchoResponse } from "../../../dataverse-gen/complextypes/cdsify_UnboundEchoResponse";
import {
  cdsify_UnboundEchoFunction2Metadata,
  cdsify_UnboundEchoFunction2Request,
} from "../../../dataverse-gen/functions/cdsify_UnboundEchoFunction2";
import { TEST_DATE, TEST_STRING } from "../../../webapi/__tests__/test-values";

describe("XrmContextDataverseClient", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("custom unbound api function mapping", async () => {
    setMetadataCache(metadataCache);
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

    const request = getApiRequest();

    // Should send similar to:
    // cdsify_UnboundEchoFunction2(cdsify_UnboundFunctionInStringArray=@p0,cdsify_UnboundFunctionInDateTime=@p1,cdsify_UnboundFunctionInBoolean=@p2)?@p0=["1","2"]&@p1=1970-01-01T00:01:00.000Z&@p2=true
    const response = (await serviceClient.execute(request as any)) as cdsify_UnboundEchoResponse;
    expect(response).toBeDefined();
  }, 100000);
});

function getApiRequest() {
  return {
    logicalName: cdsify_UnboundEchoFunction2Metadata.operationName,
    cdsify_UnboundFunctionInStringArray: [TEST_STRING[0], TEST_STRING[1]],
    cdsify_UnboundFunctionInDateTime: TEST_DATE[0],
    cdsify_UnboundFunctionInBoolean: true,
  } as cdsify_UnboundEchoFunction2Request;
}

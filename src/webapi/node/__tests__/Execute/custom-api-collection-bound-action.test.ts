/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../SetupGlobalContext";
import { WebApiExecuteRequestBase } from "../../../../types/WebApiExecuteRequest";
import {
  cdsify_BoundCollectionEchoMetadata,
  cdsify_BoundCollectionEchoRequest,
} from "../../../../dataverse-gen/actions/cdsify_BoundCollectionEcho";
import { TEST_STRING } from "../../../__tests__/test-values";

describe("XrmWebApiNode", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("execute collection bound action", async () => {
    const request = new WebApiExecuteRequestBase(cdsify_BoundCollectionEchoMetadata, {
      cdsify_BoundCollectionEchoInString: TEST_STRING[0],
    } as cdsify_BoundCollectionEchoRequest);

    const response = await Xrm.WebApi.online.execute(request);
    expect(response).toBeDefined();
    const responseObject = await response.json();
    expect(responseObject.cdsify_BoundCollectionEchoOutString).toBe(TEST_STRING[0]);
  }, 100000);
});

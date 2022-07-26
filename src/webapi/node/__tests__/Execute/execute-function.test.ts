/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../SetupGlobalContext";
import { WebApiExecuteRequestBase } from "../../../../types/WebApiExecuteRequest";

describe("XrmWebApiNode", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("execute function", async () => {
    const whoAmIRequest = new WebApiExecuteRequestBase({
      boundParameter: undefined,
      parameterTypes: {},
      operationType: 1, // Associate and Disassociate fall under the CRUD umbrella
      operationName: "WhoAmI",
    });

    const response = await Xrm.WebApi.online.execute(whoAmIRequest);
    expect(response).toBeDefined();
  }, 100000);
});

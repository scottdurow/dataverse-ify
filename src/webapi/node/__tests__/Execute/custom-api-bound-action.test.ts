/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../SetupGlobalContext";
import { WebApiExecuteRequestBase } from "../../../../types/WebApiExecuteRequest";
import { TEST_DATE, TEST_STRING } from "../../../__tests__/test-values";
import { cdsify_BoundEchoMetadata, cdsify_BoundEchoRequest } from "../../../../dataverse-gen/actions/cdsify_BoundEcho";
import { cdsify_integrationtestMetadata } from "../../../../dataverse-gen/entities/cdsify_IntegrationTest";

describe("XrmWebApiNode", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("execute bound action", async () => {
    // Create test record
    const integrationTestId = (
      await Xrm.WebApi.createRecord(cdsify_integrationtestMetadata.logicalName, {
        cdsify_name: "Test record",
      })
    ).id;

    try {
      const request = new WebApiExecuteRequestBase(cdsify_BoundEchoMetadata, {
        entity: { entityType: cdsify_integrationtestMetadata.logicalName, id: integrationTestId },
        cdsify_BoundInString: TEST_STRING[0],
        cdsify_BoundInBoolean: true,
        cdsify_BoundInDateTime: TEST_DATE[0],
        cdsify_BoundInDecimal: 1,
        cdsify_BoundInFloat: 1,
        cdsify_BoundInInteger: 1,
        cdsify_BoundInMoney: 1,
        cdsify_BoundInPicklist: 1,
        cdsify_BoundInStringArray: ["a", "b"],
        cdsify_BoundInGuid: { guid: "9ae14746-030d-ed11-b83e-0022483d2320" } as any,
        cdsify_BoundInEntity: {
          "@odata.type": "Microsoft.Dynamics.CRM.cdsify_integrationtest",
          cdsify_name: "test 1",
        },
        cdsify_BoundInEntityCollection: [
          {
            "@odata.type": "Microsoft.Dynamics.CRM.cdsify_integrationtest",
            cdsify_name: "test 1",
          },
          {
            "@odata.type": "Microsoft.Dynamics.CRM.cdsify_integrationtest",
            cdsify_name: "test 2",
          },
        ],
        cdsify_BoundInEntityReference: {
          "@odata.type": "Microsoft.Dynamics.CRM.cdsify_integrationtest",
          cdsify_integrationtestid: integrationTestId,
        },
      } as cdsify_BoundEchoRequest);

      const response = await Xrm.WebApi.online.execute(request);
      expect(response).toBeDefined();
      const responseObject = await response.json();
      expect(responseObject.cdsify_BoundOutString).toBe(TEST_STRING[0]);
    } finally {
      await Xrm.WebApi.deleteRecord(cdsify_integrationtestMetadata.logicalName, integrationTestId);
    }
  }, 100000);
});

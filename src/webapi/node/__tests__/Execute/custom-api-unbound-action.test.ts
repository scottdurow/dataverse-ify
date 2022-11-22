/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../SetupGlobalContext";
import { WebApiExecuteRequestBase } from "../../../../types/WebApiExecuteRequest";
import { cdsify_integrationtestMetadata } from "../../../../dataverse-gen/entities/cdsify_IntegrationTest";
import { OperationType } from "../../../../types";
import { cdsify_UnboundEchoMetadata } from "../../../../dataverse-gen/actions/cdsify_UnboundEcho";
import { dateReviver } from "../../../../dataverse-ify/sdkify/dateReviver";

describe("XrmWebApiNode", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("execute custom api unbound", async () => {
    const integrationTestRecord = {
      cdsify_name: "Test record",
    } as any;
    let testRecordId = "";
    try {
      // Create Account
      testRecordId = (await Xrm.WebApi.createRecord(cdsify_integrationtestMetadata.logicalName, integrationTestRecord))
        .id;

      const parameters = {
        cdsify_UnboundInBoolean: true,
        cdsify_UnboundInEntity: {
          "@odata.type": "Microsoft.Dynamics.CRM.cdsify_integrationtest",
          cdsify_name: "test 1",
        },
        cdsify_UnboundInEntityCollection: [
          {
            "@odata.type": "Microsoft.Dynamics.CRM.cdsify_integrationtest",
            cdsify_name: "test 1",
          },
          {
            "@odata.type": "Microsoft.Dynamics.CRM.cdsify_integrationtest",
            cdsify_name: "test 2",
          },
        ],
        cdsify_UnboundInEntityReference: {
          "@odata.type": "Microsoft.Dynamics.CRM.cdsify_integrationtest",
          cdsify_integrationtestid: testRecordId,
        },
        cdsify_UnboundInPicklist: 2,
        cdsify_UnboundInStringArray: ["'abc!\"£$%^&*()?", "b"],
        cdsify_UnboundInDateTime: new Date(6000),
        cdsify_UnboundInDecimal: 11.22,
        cdsify_UnboundInFloat: 33.44,
        cdsify_UnboundInInteger: 55,
        cdsify_UnboundInMoney: 12345.67,
        cdsify_UnboundInString: "foo",
        cdsify_UnboundInGuid: { guid: "9ae14746-030d-ed11-b83e-0022483d2320" },
      };
      const apiRequest = new WebApiExecuteRequestBase(
        {
          boundParameter: undefined,
          parameterTypes: cdsify_UnboundEchoMetadata.parameterTypes,
          operationType: OperationType.Action,
          operationName: "cdsify_UnboundEcho",
        },
        parameters,
      );

      const response = await Xrm.WebApi.online.execute(apiRequest);
      expect(response).toBeDefined();
      const data = JSON.parse(await response.text(), dateReviver);
      expect(data.cdsify_UnboundOutBoolean).toBe(parameters.cdsify_UnboundInBoolean);
      expect(data.cdsify_UnboundOutEntity.cdsify_name).toBe("test 1");
      expect(data.cdsify_UnboundOutEntityCollection.length).toBe(2);
      expect(data.cdsify_UnboundOutEntityCollection[0].cdsify_name).toBe("test 1");

      expect(data.cdsify_UnboundOutEntityReference.cdsify_integrationtestid).toBe(testRecordId);
      expect(data.cdsify_UnboundOutPicklist).toBe(parameters.cdsify_UnboundInPicklist);
      expect(data.cdsify_UnboundOutStringArray.length).toBe(2);
      expect(data.cdsify_UnboundOutStringArray[0]).toBe(parameters.cdsify_UnboundInStringArray[0]);
      expect(data.cdsify_UnboundOutStringArray[1]).toBe(parameters.cdsify_UnboundInStringArray[1]);
      expect(data.cdsify_UnboundOutDateTime.toISOString()).toBe(parameters.cdsify_UnboundInDateTime.toISOString());
      expect(data.cdsify_UnboundOutString).toBe(parameters.cdsify_UnboundInString);
      expect(data.cdsify_UnboundOutFloat).toBe(parameters.cdsify_UnboundInFloat);
      expect(data.cdsify_UnboundOutInteger).toBe(parameters.cdsify_UnboundInInteger);
      expect(data.cdsify_UnboundOutMoney).toBe(parameters.cdsify_UnboundInMoney);
      expect(data.cdsify_UnboundOutGuid).toBe(parameters.cdsify_UnboundInGuid.guid);
    } finally {
      // Delete records
      if (testRecordId) {
        await Xrm.WebApi.deleteRecord(cdsify_integrationtestMetadata.logicalName, testRecordId);
      }
    }
  }, 100000);
});

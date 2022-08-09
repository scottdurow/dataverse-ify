/* eslint-disable sonarjs/no-duplicate-string */

import { WebApiRequestDefinition } from "../../types/WebApiRequest";
import { sendBatchWebApiRequest, WebApiRequest, WebApiResponse } from "../WebApiRequest";

describe("changeset parsing", () => {
  it("parses batch with changeset", async () => {
    const mockSend = jest.fn().mockReturnValue({
      ok: true,
      body: responseText,
      status: 200,
      statusText: "OK",
      data: {},
      headers: { "Content-Type": "multipart/mixed; boundary=batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0" },
    } as WebApiResponse);
    const requestImp = {
      apiVersion: "9.2",
      send: mockSend,
      server: "org.crm.dynamics.com",
    } as WebApiRequest;

    const request1 = {
      action: "POST",
      path: "/api/data/v9.2/accounts",
      data: { name: "Account 1" },
    } as WebApiRequestDefinition;

    const request2 = {
      action: "POST",
      path: "/api/data/v9.2/accounts",
      data: { name: "Account 2" },
    } as WebApiRequestDefinition;

    const request3 = {
      action: "POST",
      path: "/api/data/v9.2/accounts",
      data: { name: "Account 2" },
    } as WebApiRequestDefinition;

    const response = await sendBatchWebApiRequest([[request1, request2], request3], requestImp, "1659569326460");
    expect(response.data).toMatchInlineSnapshot(`
      Object {
        "batchresponse": Array [
          Object {
            "body": "",
            "data": undefined,
            "headers": Object {
              "Location": "https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c48c005e-d215-ed11-b83f-0022483d2320)",
              "OData-EntityId": "https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c48c005e-d215-ed11-b83f-0022483d2320)",
              "OData-Version": "4.0",
              "Preference-Applied": "odata.include-annotations=\\"*\\"",
            },
            "ok": true,
            "status": 204,
            "statusText": "No Content",
          },
          Object {
            "body": "",
            "data": undefined,
            "headers": Object {
              "Location": "https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c58c005e-d215-ed11-b83f-0022483d2320)",
              "OData-EntityId": "https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c58c005e-d215-ed11-b83f-0022483d2320)",
              "OData-Version": "4.0",
              "Preference-Applied": "odata.include-annotations=\\"*\\"",
            },
            "ok": true,
            "status": 204,
            "statusText": "No Content",
          },
          Object {
            "body": "",
            "data": undefined,
            "headers": Object {
              "Location": "https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c68c005e-d215-ed11-b83f-0022483d2320)",
              "OData-EntityId": "https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c68c005e-d215-ed11-b83f-0022483d2320)",
              "OData-Version": "4.0",
              "Preference-Applied": "odata.include-annotations=\\"*\\"",
            },
            "ok": true,
            "status": 204,
            "statusText": "No Content",
          },
        ],
      }
    `);
  });
});

const responseText = `--batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0
Content-Type: multipart/mixed; boundary=changesetresponse_ec7acbeb-9a33-40db-a54f-12dfd580282b

--changesetresponse_ec7acbeb-9a33-40db-a54f-12dfd580282b
Content-Type: application/http
Content-Transfer-Encoding: binary
Content-ID: 1

HTTP/1.1 204 No Content
OData-Version: 4.0
Location: https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c48c005e-d215-ed11-b83f-0022483d2320)
OData-EntityId: https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c48c005e-d215-ed11-b83f-0022483d2320)
Preference-Applied: odata.include-annotations="*"


--changesetresponse_ec7acbeb-9a33-40db-a54f-12dfd580282b
Content-Type: application/http
Content-Transfer-Encoding: binary
Content-ID: 2

HTTP/1.1 204 No Content
OData-Version: 4.0
Location: https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c58c005e-d215-ed11-b83f-0022483d2320)
OData-EntityId: https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c58c005e-d215-ed11-b83f-0022483d2320)
Preference-Applied: odata.include-annotations="*"


--changesetresponse_ec7acbeb-9a33-40db-a54f-12dfd580282b--
--batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0
Content-Type: application/http
Content-Transfer-Encoding: binary

HTTP/1.1 204 No Content
OData-Version: 4.0
Location: https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c68c005e-d215-ed11-b83f-0022483d2320)
OData-EntityId: https://org1bfe9950.crm3.dynamics.com/api/data/v9.0/accounts(c68c005e-d215-ed11-b83f-0022483d2320)
Preference-Applied: odata.include-annotations="*"


--batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0--    
`;

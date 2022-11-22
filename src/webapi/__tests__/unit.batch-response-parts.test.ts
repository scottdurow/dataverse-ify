import { HttpReader } from "../HttpReader";
import { getBatchResponse, getWebApiResponseFromBatchPart } from "../WebApiRequest";

/* eslint-disable quotes */
describe("getWebApiResponseFromBatchPart", () => {
  it("extracts headers from error response", () => {
    const response = `--batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0
    Content-Type: application/http
    Content-Transfer-Encoding: binary
    
    HTTP/1.1 404 Not Found
    REQ_ID: a1687769-7702-46fa-a6ee-4094ba20f706
    Content-Type: application/json; odata.metadata=minimal
    OData-Version: 4.0
    
    {"error":{"code":"0x80040217","message":"SystemUser With Id = 018d0d88-05c2-46bb-ac83-63a910e8b1f1 Does Not Exist"}}
    --batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0
    `;

    const boundary = "batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0";
    const reader = new HttpReader(response);
    reader.readToBoundary(boundary);
    const responseData = getWebApiResponseFromBatchPart(reader, boundary);
    expect(responseData).toBeDefined();
    expect(responseData.ok).toBe(false);
    expect(responseData.status).toBe(404);
    expect(responseData.statusText).toBe("Not Found");
    expect(Object.keys(responseData.headers).length).toBe(3);
    expect(responseData.body).toBe(
      '{"error":{"code":"0x80040217","message":"SystemUser With Id = 018d0d88-05c2-46bb-ac83-63a910e8b1f1 Does Not Exist"}}',
    );
    expect(responseData.data).toBeDefined();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((responseData.data as any).error.code).toBe("0x80040217");
  });

  it("extracts batch response", () => {
    const response = `--batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0
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
    const boundary = "batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0";
    const responseData = getBatchResponse(response, boundary);
    expect(responseData.batchresponse).toBeDefined();
    expect(responseData.batchresponse.length).toBe(3);
  });
});

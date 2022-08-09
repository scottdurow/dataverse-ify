import { HttpReader } from "../HttpReader";
import { getWebApiResponseFromBatchPart } from "../WebApiRequest";

describe("WebApiResponse", () => {
  const batchResponse = `
    --batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0
    Content-Type: application/http
    Content-Transfer-Encoding: binary
    
    HTTP/1.1 204 No Content
    OData-Version: 4.0
    Location: https://org1bfe9950.api.crm3.dynamics.com/api/data/v9.0/accounts(858411ad-380a-ed11-b83e-0022483d2320)
    OData-EntityId: https://org1bfe9950.api.crm3.dynamics.com/api/data/v9.0/accounts(858411ad-380a-ed11-b83e-0022483d2320)
    Preference-Applied: odata.include-annotations="*"
    
    --batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0
    `;
  it("parses from batch response", async () => {
    const response = getWebApiResponseFromBatchPart(
      new HttpReader(batchResponse),
      "batchresponse_1a603e08-fa34-4f5d-a336-9a70cfb71db0",
    );

    expect(response.headers["Location"]).toBe(
      // eslint-disable-next-line @microsoft/power-apps/use-relative-uri
      "https://org1bfe9950.api.crm3.dynamics.com/api/data/v9.0/accounts(858411ad-380a-ed11-b83e-0022483d2320)",
    );
  }, 1000);
});

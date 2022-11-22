/* eslint-disable sonarjs/no-duplicate-string */

import { WebApiRequestDefinition } from "../../types/WebApiRequest";
import { sendBatchWebApiRequest, WebApiRequest, WebApiResponse } from "../WebApiRequest";

describe("sendBatchWebApiRequest", () => {
  it("builds a batch request with changesets", async () => {
    const mockSend = jest.fn().mockReturnValue({ ok: true } as WebApiResponse);
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

    await sendBatchWebApiRequest([[request1, request2], request3], requestImp, "1659569326460");
    expect(requestImp.send).toBeCalledTimes(1);
    expect(requestImp.send).toHaveBeenCalledWith(
      "POST",
      "org.crm.dynamics.com/api/data/v9.2/$batch",
      expect.anything(),
      expect.anything(),
      expect.anything(),
    );

    expect(mockSend.mock.lastCall[2]).toMatchInlineSnapshot(`
      Object {
        "Accept": "application/json",
        "Connection": "keep-alive",
        "Content-Type": "multipart/mixed;boundary=batch_1659569326460",
        "MSCRM.SuppressDuplicateDetection": "true",
        "OData-MaxVersion": "4.0",
        "OData-Version": "4.0",
      }
    `);

    expect(mockSend.mock.lastCall[3]).toMatchInlineSnapshot(`
      "--batch_1659569326460
      Content-Type: multipart/mixed;boundary=changeset_1659569326460
      Content-Transfer-Encoding: binary

      --changeset_1659569326460
      Content-Type: application/http
      Content-Transfer-Encoding: binary
      Content-ID: 1

      POST /api/data/v9.2//api/data/v9.2/accounts HTTP/1.1
      Accept: application/json
      Content-Type: application/json;type=entry

      {\\"name\\":\\"Account 1\\"}
      --changeset_1659569326460
      Content-Type: application/http
      Content-Transfer-Encoding: binary
      Content-ID: 2

      POST /api/data/v9.2//api/data/v9.2/accounts HTTP/1.1
      Accept: application/json
      Content-Type: application/json;type=entry

      {\\"name\\":\\"Account 2\\"}
      --changeset_1659569326460--
       
      --batch_1659569326460
      Content-Type: application/http
      Content-Transfer-Encoding: binary

      POST /api/data/v9.2//api/data/v9.2/accounts HTTP/1.1
      Accept: application/json
      Content-Type: application/json;type=entry

      {\\"name\\":\\"Account 2\\"}
      --batch_1659569326460--
       "
    `);
  });
});

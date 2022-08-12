/* eslint-disable quotes */
import { TEST_STRING } from "./test-values";

describe("XrmWebApiNode", () => {
  it("creates accounts and retrieveMultiple by id", async () => {
    // Arrange
    const webApiService = {
      createRecord: jest
        .fn()
        .mockImplementationOnce(() => {
          return { id: "1" };
        })
        .mockImplementationOnce(() => {
          return { id: "2" };
        }),
      retrieveMultipleRecords: jest.fn().mockImplementationOnce(() => {
        return {
          entities: [
            {
              name: TEST_STRING[0],
              accountid: "1",
            },
            {
              name: TEST_STRING[1],
              accountid: "2",
            },
          ],
        };
      }),
    } as unknown as Xrm.WebApi;

    // Act
    const accounts = await someLogic(TEST_STRING[0], TEST_STRING[1], webApiService);

    // Assert
    expect(webApiService.createRecord).toHaveBeenNthCalledWith(
      1,
      "account",
      expect.objectContaining({ name: TEST_STRING[0] }),
    );

    expect(webApiService.createRecord).toHaveBeenNthCalledWith(
      2,
      "account",
      expect.objectContaining({ name: TEST_STRING[1] }),
    );

    expect(webApiService.retrieveMultipleRecords).toHaveBeenCalled();

    expect(accounts).toHaveLength(2);
    expect(accounts[0].name).toMatch(TEST_STRING[0]);
    expect(accounts[1].name).toMatch(TEST_STRING[1]);
  }, 10000);
});

async function someLogic(name1: string, name2: string, webApiService: Xrm.WebApi) {
  const createResponse1 = await webApiService.createRecord("account", {
    name: name1,
  });

  const createResponse2 = await webApiService.createRecord("account", {
    name: name2,
  });

  const accountIds = `'${createResponse1.id}','${createResponse2.id}'`;
  const retrieveMultipleResponse = await webApiService.retrieveMultipleRecords(
    "account",
    `?$select=name&$orderby=createdon asc&$filter=(Microsoft.Dynamics.CRM.In(PropertyName=%27accountid%27,PropertyValues=[${encodeURIComponent(
      accountIds,
    )}]))`,
  );
  return retrieveMultipleResponse.entities;
}

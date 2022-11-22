/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { toEntityReference } from "../../../types/EntityReference";
import { account_account_accountcategorycode } from "../../../dataverse-gen/enums/account_account_accountcategorycode";
import { XrmContextDataverseClient } from "../../DataverseClient";
import { CreateRequest, CreateResponse } from "../../../types";
import { DeleteRequest } from "../../../types/requests/Delete";
import { UpdateRequest } from "../../../types/requests/Update";
import { TEST_STRING } from "../../../webapi/__tests__/test-values";
describe("XrmContextDataverseClient", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);
  it("execute multiple crud", async () => {
    // Create an account with sdk types
    setMetadataCache({
      entities: {
        account: accountMetadata,
      },
    });
    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
      accountcategorycode: account_account_accountcategorycode.PreferredCustomer,
    } as Account;

    const account2 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 2",
      accountcategorycode: account_account_accountcategorycode.PreferredCustomer,
    } as Account;

    // Create
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    const createRequest1 = {
      logicalName: "Create",
      target: account1,
    } as CreateRequest;

    const createRequest2 = {
      logicalName: "Create",
      target: account2,
    } as CreateRequest;

    const response = await serviceClient.executeMultiple<CreateResponse>([[createRequest1, createRequest2]]);
    expect(response?.length).toBe(2);
    if (response) {
      account1.accountid = response[0].id;
      account2.accountid = response[1].id;
      expect(response[0].id).toBeDefined();
      expect(response[1].id).toBeDefined();
    }

    // Update
    account1.name = TEST_STRING[0];
    account1.name = TEST_STRING[1];
    const updateRequest1 = {
      logicalName: "Update",
      target: account1,
    } as UpdateRequest;
    const updateRequest2 = {
      logicalName: "Update",
      target: account2,
    } as UpdateRequest;

    await serviceClient.executeMultiple([[updateRequest1, updateRequest2]]);

    // Delete
    const deleteRequest1 = {
      logicalName: "Delete",
      target: toEntityReference(account1),
    } as DeleteRequest;
    const deleteRequest2 = {
      logicalName: "Delete",
      target: toEntityReference(account2),
    } as DeleteRequest;

    await serviceClient.executeMultiple([[deleteRequest1, deleteRequest2]]);
  }, 100000);
});

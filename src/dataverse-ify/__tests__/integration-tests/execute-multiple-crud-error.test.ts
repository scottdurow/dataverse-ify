/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { EntityReference } from "../../../types/EntityReference";
import { XrmContextDataverseClient } from "../../DataverseClient";
import { CreateRequest, CreateResponse } from "../../../types";
describe("XrmContextDataverseClient", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);
  it("execute multiple crud error on create", async () => {
    // Create an account with sdk types
    setMetadataCache({
      entities: {
        account: accountMetadata,
      },
    });

    // EntityReference to record that does not exist
    const dummyUser = new EntityReference("systemuser", "018d0d88-05c2-46bb-ac83-63a910e8b1f1");
    const account1 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 1",
    } as Account;

    const account2 = {
      logicalName: accountMetadata.logicalName,
      name: "Account 2",
      // EntityReference to record that does not exist
      preferredsystemuserid: dummyUser,
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

    const createRequest3 = {
      logicalName: "Create",
      target: account1,
    } as CreateRequest;

    let error;
    try {
      // There is no way to set the continueOnError in the Xrm.WebApi.executeMultiple
      // implementation - so the error will always be the first request that is at fault.

      // There is no way of getting the records created or the request id
      // so we can't tidy up
      // TODO: We could use the WebApiBase implementation to provide a custom
      // executeMultiple implementation that provides this functionality.
      // but here we just simulate the Xrm.WebApi behavior.
      const response = await serviceClient.executeMultiple<CreateResponse>([
        createRequest1,
        createRequest2, // This will fail
        createRequest3,
      ]);
      expect(response).toBeUndefined();
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(parseInt((error as any).code)).toBe(2147746327);
    //expect(error.message).toBe("SystemUser With Id = 018d0d88-05c2-46bb-ac83-63a910e8b1f1 Does Not Exist");
  }, 100000);
});

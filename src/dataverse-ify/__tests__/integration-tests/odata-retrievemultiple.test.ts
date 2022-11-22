/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { XrmContextDataverseClient } from "../../DataverseClient";
import {
  cdsify_IntegrationTest,
  cdsify_integrationtestMetadata,
} from "../../../dataverse-gen/entities/cdsify_IntegrationTest";
import { CreateRequest, DeleteRequest, EntityReference, CreateResponse } from "../../../types";
describe("retrieveMultiple", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("allows retrieveMultiple via odata with nextLink", async () => {
    setMetadataCache({
      entities: {
        cdsify_integrationtest: cdsify_integrationtestMetadata,
      },
    });

    const client = new XrmContextDataverseClient(Xrm.WebApi);

    // Create 12 records
    const name = `fetch test ${new Date()}`;
    const testRecord = {
      logicalName: cdsify_integrationtestMetadata.logicalName,
      cdsify_name: name,
    } as cdsify_IntegrationTest;

    const createChangeSet = [...Array(12).keys()].map(() => {
      return {
        logicalName: "Create",
        target: testRecord,
      } as CreateRequest;
    });

    const createResponses = await client.executeMultiple<CreateResponse>([createChangeSet]);

    try {
      const results = await client.retrieveMultiple(
        `?$select=cdsify_name&$filter=(cdsify_name eq '${name}')&$orderby=createdon asc`,
        {
          logicalName: cdsify_integrationtestMetadata.logicalName,
          maxPageSize: 5,
        },
      );
      expect(results).toBeDefined();
      expect(results.nextLink).toBeDefined();
    } finally {
      // Tidy up
      const deleteChangeSet = [...Array(12).keys()].map((i) => {
        return {
          logicalName: "Delete",
          target: new EntityReference(
            cdsify_integrationtestMetadata.logicalName,
            createResponses && createResponses[i].id,
          ),
        } as DeleteRequest;
      });

      await client.executeMultiple([deleteChangeSet]);
    }
  }, 100000);
});

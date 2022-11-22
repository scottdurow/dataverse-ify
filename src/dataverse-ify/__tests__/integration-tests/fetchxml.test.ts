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

  it("allows retrieveMultiple via fetchxml with paging cookie", async () => {
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
      const results = await client.retrieveMultiple(`<fetch count="5" page="1" returntotalrecordcount="true">
        <entity name="cdsify_integrationtest">
          <attribute name="cdsify_name" />
          <attribute name="createdon" />
          <filter>
            <condition attribute="cdsify_name" operator="eq" value="${name}"/>
          </filter>
        </entity>
      </fetch>`);
      expect(results).toBeDefined();
      expect(results.pagingCooking).toBeDefined();
      // You don't get these from the implementation inside Xrm.Webapi - sad face
      //expect(results.moreRecords).toBe(true);
      //expect(results.totalRecordCount).toBe(12);
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

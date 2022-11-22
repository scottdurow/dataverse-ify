/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { metadataCache } from "../../../dataverse-gen/metadata";
import {
  cdsify_IntegrationTest,
  cdsify_IntegrationTestAttributes,
  cdsify_integrationtestMetadata,
} from "../../../dataverse-gen/entities/cdsify_IntegrationTest";
import { XrmContextDataverseClient } from "../../DataverseClient";
import { WebApiRequest } from "../../../webapi/WebApiRequest";
import { BrowserWebApiRequest } from "../../../webapi/browser";
import { WebApiBase } from "../../../webapi";
describe("File", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 10000);

  it("get record with file", async () => {
    // Create an account with sdk types
    setMetadataCache(metadataCache);

    const record1 = {
      cdsify_name: "test",
      logicalName: cdsify_integrationtestMetadata.logicalName,
    } as cdsify_IntegrationTest;

    // Create record
    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);

    // If running inside browser, use the browser global Xrm context,otherwise use the Node Request implementation
    let request: WebApiRequest | undefined = undefined;
    if (Xrm.WebApi instanceof WebApiBase) {
      // Running under node
      request = (Xrm.WebApi as unknown as WebApiBase).getRequestImplementation();
    } else {
      // Running inside the browser
      request = new BrowserWebApiRequest();
    }
    let failed: unknown | undefined;
    try {
      record1.id = await serviceClient.create(record1);

      const fileName = "test.txt";
      // Upload file
      const data = "foo;";

      await request.send(
        "PATCH",
        `/${cdsify_integrationtestMetadata.collectionName}(${record1.id})/${cdsify_IntegrationTestAttributes.cdsify_File1}?x-ms-file-name=${fileName}`,
        { "Content-Type": "application/octet-stream" },
        data,
        true,
      );

      // Get the record to check the file attribute
      const record2 = await serviceClient.retrieve<cdsify_IntegrationTest>(
        cdsify_integrationtestMetadata.logicalName,
        record1.id,
        [cdsify_IntegrationTestAttributes.cdsify_File1],
      );

      expect(record2.cdsify_file1).toBeDefined();
    } catch (ex) {
      failed = ex;
    } finally {
      // Delete the file
      await request.send(
        "DELETE",
        `/${cdsify_integrationtestMetadata.collectionName}(${record1.id})/${cdsify_IntegrationTestAttributes.cdsify_File1}`,
        {},
      );
      if (record1.id) {
        await serviceClient.delete(record1);
      }
    }

    expect(failed).toBeUndefined();
  }, 100000);
});

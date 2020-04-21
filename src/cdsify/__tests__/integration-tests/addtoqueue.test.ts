import { SetupGlobalContext } from "../../../cdsnode/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { Entity } from "../../../types/Entity";
import { Queue, queueMetadata } from "../../../cds-metadata/queue";
import { queueitemMetadata } from "../../../cds-metadata/queueitem";
import { addtoqueueMetadata, AddToQueueRequest, AddToQueueResponse } from "../../../cds-metadata/addtoqueue";
import { Letter, letterMetadata } from "../../../cds-metadata/letter";
import { XrmContextCdsServiceClient } from "../..";
import * as config from "config";
import { NodeXrmConfig } from "../../../cdsnode/config/NodeXrmConfig";
describe("addtoqueue", () => {
  const configFile = config.get("nodecds") as NodeXrmConfig;
  beforeAll(async () => {
    if (!configFile.runIntegrationTests) return;
    // Is this running inside NodeJS?
    if (typeof Xrm == "undefined") {
      try {
        // Set up the Node Xrm global context
        await SetupGlobalContext();
      } catch (ex) {
        fail(ex);
      }
    }
  }, 30000);
  test("AddToQueue", async () => {
    if (!configFile.runIntegrationTests) return;
    setMetadataCache({
      entities: {
        letter: letterMetadata,
        queue: queueMetadata,
        queueitem: queueitemMetadata,
      },
      actions: { AddToQueue: addtoqueueMetadata },
    });

    const queue = {
      logicalName: queueMetadata.logicalName,
      name: "Sample Queue",
    } as Queue;

    const letter = {
      logicalName: letterMetadata.logicalName,
      subject: "Sample Letter",
    } as Letter;

    const cdsServiceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
    try {
      // Create Queue
      queue.id = await cdsServiceClient.create(queue);

      // Create letter
      letter.id = await cdsServiceClient.create(letter);

      // Add letter to queue
      const request = {
        logicalName: addtoqueueMetadata.operationName,
        entity: Entity.toEntityReference(queue),
        Target: Entity.toEntityReference(letter),
      } as AddToQueueRequest;

      const response = (await cdsServiceClient.execute(request)) as AddToQueueResponse;
      console.log(response);
      expect(response.QueueItemId).toBeDefined();
    } catch (ex) {
      fail(ex);
    } finally {
      if (letter.id) {
        // Tidy up
        await cdsServiceClient.delete(letter);
      }
      if (queue.id) {
        // Tidy up
        await cdsServiceClient.delete(queue);
      }
    }
  }, 30000);
});

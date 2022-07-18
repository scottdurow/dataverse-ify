import { SetupGlobalContext } from "../../../webapi/node/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { Entity } from "../../../types/Entity";
import { XrmContextDataverseClient } from "../..";
import { letterMetadata, Letter } from "../../../dataverse-gen/entities/Letter";
import { queueMetadata, Queue } from "../../../dataverse-gen/entities/Queue";
import { queueitemMetadata } from "../../../dataverse-gen/entities/QueueItem";
import { AddToQueueMetadata, AddToQueueRequest } from "../../../dataverse-gen/actions/AddToQueue";
import { AddToQueueResponse } from "../../../dataverse-gen/complextypes/AddToQueueResponse";
describe("AddToQueue", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 300000);
  test("AddToQueue", async () => {
    setMetadataCache({
      entities: {
        letter: letterMetadata,
        queue: queueMetadata,
        queueitem: queueitemMetadata,
      },
      actions: { AddToQueue: AddToQueueMetadata },
    });

    const queue = {
      logicalName: queueMetadata.logicalName,
      name: "Sample Queue",
    } as Queue;

    const letter = {
      logicalName: letterMetadata.logicalName,
      subject: "Sample Letter",
    } as Letter;

    const serviceClient = new XrmContextDataverseClient(Xrm.WebApi);
    try {
      // Create Queue
      queue.id = await serviceClient.create(queue);

      // Create letter
      letter.id = await serviceClient.create(letter);

      // Add letter to queue
      const request = {
        logicalName: AddToQueueMetadata.operationName,
        entity: Entity.toEntityReference(queue),
        Target: Entity.toEntityReference(letter),
      } as AddToQueueRequest;

      const response = (await serviceClient.execute(request)) as AddToQueueResponse;
      expect(response.QueueItemId).toBeDefined();
    } catch (ex) {
      fail(ex);
    } finally {
      if (letter.id) {
        // Tidy up
        await serviceClient.delete(letter);
      }
      if (queue.id) {
        // Tidy up
        await serviceClient.delete(queue);
      }
    }
  }, 300000);
});

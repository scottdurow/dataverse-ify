/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SetupGlobalContext } from "../../../webapi/SetupGlobalContext";
import { setMetadataCache } from "../../../metadata/MetadataCache";
import { XrmContextCdsServiceClient } from "../../CdsServiceClient/XrmContextServiceClient";
import * as config from "config";
import { NodeXrmConfig } from "../../../webapi/config/NodeXrmConfig";
import { metadataCache } from "../../../dataverse-gen/metadata";
import { MetadataConditionOperator } from "../../../dataverse-gen/enums/MetadataConditionOperator";
import { LogicalOperator } from "../../../dataverse-gen/enums/LogicalOperator";
import { RetrieveMetadataChangesRequest } from "../../../dataverse-gen/functions/RetrieveMetadataChanges";
import { RetrieveMetadataChangesResponse } from "../../../dataverse-gen/complextypes/RetrieveMetadataChangesResponse";
describe("RetrieveMetadataChangesRequest", () => {
  const configFile = config.get("nodewebapi") as NodeXrmConfig;
  beforeAll(async () => {
    if (!configFile.runIntegrationTests) return;
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      try {
        // Set up the Node Xrm global context
        await SetupGlobalContext();
      } catch (ex) {
        fail(ex);
      }
    }
  }, 10000);

  it("does not timeout", async () => {
    if (!configFile.runIntegrationTests) return;

    // Create an account with sdk types
    setMetadataCache(metadataCache);

    const metadataQuery = {
      logicalName: "RetrieveMetadataChanges",
      Query: {
        Criteria: {
          Conditions: [
            {
              PropertyName: "LogicalName",
              ConditionOperator: MetadataConditionOperator.Equals,
              Value: {
                Value: "account",
                Type: "System.String",
              },
            },
          ],
          FilterOperator: LogicalOperator.And,
        },
        Properties: {
          PropertyNames: ["Attributes", "SchemaName", "EntitySetName"],
        },
        AttributeQuery: {
          Properties: {
            PropertyNames: [
              "SchemaName",
              "LogicalName",
              "OptionSet",
              "RequiredLevel",
              "AttributeType",
              "AttributeTypeName",
              "SourceType",
              "IsLogical",
              "AttributeOf",
              "Targets",
              "Description",
              "DateTimeBehavior",
              "Format",
              "DisplayName",
            ],
          },
        },
      },
    } as RetrieveMetadataChangesRequest;
    const serviceClient = new XrmContextCdsServiceClient(Xrm.WebApi);
    const metadataResponse = (await serviceClient.execute(metadataQuery as any)) as RetrieveMetadataChangesResponse;
    expect(metadataResponse).toBeDefined();
  }, 100000);
});
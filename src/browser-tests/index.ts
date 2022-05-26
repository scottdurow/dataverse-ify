import { RetrieveMetadataChangesResponse } from "../dataverse-gen/complextypes/RetrieveMetadataChangesResponse";
import { LogicalOperator } from "../dataverse-gen/enums/LogicalOperator";
import { MetadataConditionOperator } from "../dataverse-gen/enums/MetadataConditionOperator";
import { RetrieveMetadataChangesRequest } from "../dataverse-gen/functions/RetrieveMetadataChanges";
import { metadataCache } from "../dataverse-gen/metadata";
import { XrmContextCdsServiceClient } from "../dataverse-ify";
import { setMetadataCache } from "../metadata";
test();
async function test() {
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
}

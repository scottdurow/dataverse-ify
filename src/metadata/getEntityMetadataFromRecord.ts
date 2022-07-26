import { IEntity } from "../types/IEntity";
import { getMetadataFromEntitySet, getMetadataByLogicalName } from "./MetadataCache";
import { EntityWebApiMetadata } from "./EntityWebApiMetadata";
import { WebApiExecuteRequestMetadata } from "./WebApiExecuteRequestMetadata";
import { isNullOrUndefined } from "../webapi/utils/NullOrUndefined";
import { sdkifyOptions } from "../dataverse-ify/sdkify/sdkify";

const actionPrefix = "Microsoft.Dynamics.CRM.";
// eslint-disable-next-line sonarjs/cognitive-complexity
export function getEntityMetadataFromRecord(
  entityRecord: IEntity,
  logicalName?: string,
  options?: sdkifyOptions,
): EntityWebApiMetadata | undefined {
  let entityMetadata: EntityWebApiMetadata | WebApiExecuteRequestMetadata | null;
  entityRecord.logicalName = entityRecord.logicalName || (logicalName as string); // allow passing the logical name rather than using the @odata.context
  if (isNullOrUndefined(entityRecord.logicalName)) {
    // Get the @data.context to get the logical name
    // E.g. https://org.crm11.dynamics.com/api/data/v9.0/$metadata#accounts(name,parentaccountid)/$entity
    const defaultMetadata = options && options.allowPassthroughMapping ? ({} as EntityWebApiMetadata) : undefined;
    const entitySetName = getOdataContextName(entityRecord);
    if (entitySetName) {
      if (entitySetName.startsWith(actionPrefix)) {
        const actionName = entitySetName.substring(actionPrefix.length);
        entityMetadata = getMetadataByLogicalName(actionName, defaultMetadata);
        if (entityMetadata != null) {
          entityRecord.logicalName = entityMetadata.logicalName;
        }
      } else {
        // Find the logical name from the entity set name
        entityMetadata = getMetadataFromEntitySet(entitySetName, defaultMetadata);
        entityRecord.logicalName = (entityMetadata as EntityWebApiMetadata).logicalName;
      }
    } else if (!options?.allowPassthroughMapping) {
      throw new Error("Cannot find the odata.context to get the logical name");
    } else return undefined;
  } else {
    // Get metadata
    entityMetadata = getMetadataByLogicalName(entityRecord.logicalName);
  }
  return entityMetadata;
}

function getOdataContextName(entityRecord: IEntity) {
  const oDataContext = entityRecord["@odata.context"] as string;
  const contextRegex = /\$metadata#([\w.]*)(\([\w()]*\))?(\/\$entity)?/g;
  const match = contextRegex.exec(oDataContext);
  return match != null && match.length > 1 ? match[1] : undefined;
}

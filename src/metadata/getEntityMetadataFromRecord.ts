import { IEntity } from "../types/IEntity";
import { getMetadataFromEntitySet, getMetadataByLogicalName } from "./MetadataCache";
import { EntityWebApiMetadata } from "./EntityWebApiMetadata";
import { WebApiExecuteRequestMetadata } from "./WebApiExecuteRequestMetadata";
import { isNullOrUndefined } from "../webapi/utils/NullOrUndefined";
export function getEntityMetadataFromRecord(entityRecord: IEntity, logicalName?: string): EntityWebApiMetadata {
  let entityMetadata: EntityWebApiMetadata | WebApiExecuteRequestMetadata | null;
  const actionPrefix = "Microsoft.Dynamics.CRM.";
  entityRecord.logicalName = entityRecord.logicalName || (logicalName as string); // allow passing the logical name rather than using the @odata.context
  if (isNullOrUndefined(entityRecord.logicalName)) {
    // Get the @data.context to get the logical name
    // E.g. https://org.crm11.dynamics.com/api/data/v9.0/$metadata#accounts(name,parentaccountid)/$entity
    const odatacontext = entityRecord["@odata.context"] as string;
    const contextRegex = /\$metadata#([\w.]*)(\([\w()]*\))?(\/\$entity)?/g;
    const match = contextRegex.exec(odatacontext);
    if (match != null && match.length > 1) {
      const entitySetName = match[1];
      if (entitySetName.startsWith(actionPrefix)) {
        const actionName = entitySetName.substring(actionPrefix.length);
        entityMetadata = getMetadataByLogicalName(actionName);
        if (entityMetadata != null) {
          entityRecord.logicalName = entityMetadata.logicalName;
        }
      } else {
        // Find the logical name from the entity set name
        entityMetadata = getMetadataFromEntitySet(entitySetName);
        entityRecord.logicalName = (entityMetadata as EntityWebApiMetadata).logicalName;
      }
    } else {
      throw new Error("Cannot find the odata.context to get the logical name");
    }
  } else {
    // Get metadata
    entityMetadata = getMetadataByLogicalName(entityRecord.logicalName);
  }
  return entityMetadata;
}

import { EntityReference } from "../../types/EntityReference";
import { IEntity } from "../../types/IEntity";
import { WebApiExecuteRequest } from "../../types/WebApiExecuteRequest";
import { getMetadataCache } from "../../metadata/MetadataCache";
import { EntityWebApiMetadata } from "../../metadata/EntityWebApiMetadata";
import { StructuralProperty } from "../../types/StructuralProperty";
import { EntityCollection } from "../../types/EntityCollection";
import { odataifyFields } from "./odataifyFields";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function odataify(
  action: "Create" | "Update" | "Action",
  value: IEntity | WebApiExecuteRequest | object,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const metadataCache = getMetadataCache();
  // Is the value an array or Entitycollection?
  if (value.constructor.name === "Array") {
    const odataRecords = [];
    for (const record of value as IEntity[]) {
      const value = await odataify(action, record);
      odataRecords.push(value);
    }
    return odataRecords;
  }
  // EntityCollection
  else if ((value as EntityCollection<IEntity>).entities !== undefined) {
    const odataValue = await odataify(action, (value as EntityCollection<IEntity>).entities);
    return odataValue;
  }
  const logicalName = (value as IEntity).logicalName;
  if (!logicalName) {
    throw new Error("logicalName property not found on object. This is needed to odataify the object.");
  }
  let valueSet = false;
  const metadata = metadataCache.entities && metadataCache.entities[logicalName];
  if (metadata != null) {
    valueSet = true;
    // Entity
    const entityMetadata = metadata as EntityWebApiMetadata;
    const entityValue = value as IEntity;
    const output = Object.assign({}, entityValue);
    // Add the metadata type
    output["@odata.type"] = "Microsoft.Dynamics.CRM." + logicalName;
    // Remove attributes that are not needed in the OData payload
    delete output.id;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (output as any).logicalName;
    delete output.formattedValues;
    // Change the types for the odata payload
    await odataifyFields(action, output, entityValue, entityMetadata);
    // Format the Odata ID
    switch (action) {
      case "Update":
        // Remove the primary key
        delete output[entityMetadata.primaryIdAttribute];
        break;
      case "Action":
        // The primary key must be odatified
        if (entityValue.id && entityValue.id) {
          output[`${entityMetadata.primaryIdAttribute}@odata.bind`] = `/${
            entityMetadata.collectionName
          }(${entityValue.id.toString()})`;
        }
        break;
    }
    return output;
  }
  // Action or Function
  const webApiMetdata = metadataCache.actions && metadataCache.actions[logicalName];
  if (webApiMetdata) {
    valueSet = true;
    // This is a web api action request
    const request = value as WebApiExecuteRequest;
    const webApiRequest = new (class {
      getMetadata(): unknown {
        return webApiMetdata;
      }
    })();
    const requestOdata: WebApiExecuteRequest = Object.assign(webApiRequest, request) as WebApiExecuteRequest;
    // Get the parameters
    for (const field of Object.keys(requestOdata)) {
      if (field === "getMetadata" || field === "logicalName") continue;
      // odataify each field if it is an entity
      const fieldValue = requestOdata[field] as object;
      // Get the type from the metadata
      const parameterMetadata = webApiMetdata.parameterTypes[field];

      if (parameterMetadata) {
        // If Taret - then change to EntityType
        if (field === "Target" && parameterMetadata.structuralProperty === StructuralProperty.ComplexType) {
          parameterMetadata.structuralProperty = StructuralProperty.EntityType;
        }
        switch (parameterMetadata.structuralProperty) {
          case StructuralProperty.EnumerationType:
          case StructuralProperty.PrimitiveType:
            requestOdata[field] = fieldValue;
            break;
          case StructuralProperty.Collection:
            const collection = fieldValue as IEntity[];
            if (collection && collection.length > 0) {
              requestOdata[field] = await odataify("Create", fieldValue);
            }
            break;
          case StructuralProperty.EntityType:
            // This is an entity record pointer
            const fieldValueAsEntityReference = fieldValue as EntityReference;
            const fieldValueAsEntity = fieldValue as IEntity;
            if (fieldValueAsEntityReference.entityType && fieldValueAsEntityReference.id) {
              // See https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/webapi/use-web-api-functions#pass-reference-to-an-entity-to-a-function
              requestOdata[field] = fieldValueAsEntityReference; //{'@odata.id':Entity.odatifyEntityReference(collectionName,fieldValueAsEntityReference.id)};
            } else if (fieldValueAsEntity.logicalName) {
              requestOdata[field] = await odataify("Action", fieldValue);
            }
            break;
          case StructuralProperty.Unknown:
          default:
            throw new Error("Unknown parameter type on action.");
        }
      } else {
        throw new Error(`Unexpected parameter ${field} on execute Request`);
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (requestOdata as any).logicalName;
    return requestOdata;
  }

  if (!valueSet) {
    throw new Error(`Cannot odataify - no metadata found for ${logicalName}`);
  }
}

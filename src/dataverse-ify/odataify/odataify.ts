import { EntityReference } from "../../types/EntityReference";
import { IEntity } from "../../types/IEntity";
import { WebApiExecuteRequest, WebApiExecuteRequestBase } from "../../types/WebApiExecuteRequest";
import { getMetadataCache } from "../../metadata/MetadataCache";
import { EntityWebApiMetadata } from "../../metadata/EntityWebApiMetadata";
import { StructuralProperty } from "../../types/StructuralProperty";
import { EntityCollection } from "../../types/EntityCollection";
import { odataifyFields } from "./odataifyFields";
import { WebApiExecuteRequestMetadata } from "../../metadata/WebApiExecuteRequestMetadata";

const ignoredFieldsOnActions = ["getMetadata", "logicalName", "internalMetadata"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function odataify(
  action: "Create" | "Update" | "Action",
  value: IEntity | WebApiExecuteRequest | object,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const metadataCache = getMetadataCache();

  // Is the value an array or EntityCollection?
  if (value.constructor.name === "Array") {
    // Array
    const odataRecords = [];
    for (const record of value as IEntity[]) {
      const value = await odataify(action, record);
      odataRecords.push(value);
    }
    return odataRecords;
  } else if ((value as EntityCollection<IEntity>).entities !== undefined) {
    // EntityCollection
    return await odataify(action, (value as EntityCollection<IEntity>).entities);
  }
  const logicalName = (value as IEntity).logicalName;
  if (!logicalName) {
    throw new Error("logicalName property not found on object. This is needed to odataify the object.");
  }

  const entityMetadata = metadataCache.entities && metadataCache.entities[logicalName];
  if (entityMetadata != null) {
    // Entity
    return await getEntityOutput(entityMetadata, value, logicalName, action);
  }

  // Action or Function
  const webApiMetadata = metadataCache.actions && metadataCache.actions[logicalName];
  if (webApiMetadata) {
    return getActionOrFunctionOutput(webApiMetadata, value);
  }

  throw new Error(`Cannot odataify - no metadata found for ${logicalName}`);
}

async function getEntityOutput(
  metadata: EntityWebApiMetadata,
  value: object | IEntity | WebApiExecuteRequest,
  logicalName: string,
  action: "Create" | "Update" | "Action",
) {
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
      // If the implicit id is provided, but the explicit attribute is not, add it here
      if (entityValue && entityValue.id && !entityValue[entityMetadata.primaryIdAttribute]) {
        output[entityMetadata.primaryIdAttribute] = entityValue.id.toString();
      }
      break;
  }
  return output;
}

async function getActionOrFunctionOutput(
  webApiMetadata: WebApiExecuteRequestMetadata,
  value: object | IEntity | WebApiExecuteRequest,
) {
  // This is a web api action request
  const request = value as WebApiExecuteRequest;
  const requestOdata = new WebApiExecuteRequestBase(webApiMetadata, request);
  // Get the parameters
  for (const parameter of Object.keys(requestOdata)) {
    if (ignoredFieldsOnActions.indexOf(parameter) > -1) continue;

    // odataify each parameter
    await odataifyParameter(requestOdata, parameter, webApiMetadata);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete (requestOdata as any).logicalName;
  return requestOdata;
}

async function odataifyParameter(
  requestOdata: WebApiExecuteRequestBase,
  parameter: string,
  webApiMetadata: WebApiExecuteRequestMetadata,
) {
  const parameterValue = requestOdata[parameter] as object;
  // Get the type from the metadata
  const parameterMetadata = webApiMetadata.parameterTypes[parameter];

  if (parameterMetadata) {
    // If Target - then change to EntityType
    if (parameter === "Target" && parameterMetadata.structuralProperty === StructuralProperty.ComplexType) {
      parameterMetadata.structuralProperty = StructuralProperty.EntityType;
    }
    switch (parameterMetadata.structuralProperty) {
      case StructuralProperty.EnumerationType:
      case StructuralProperty.PrimitiveType:
        if (parameterMetadata.typeName === "Edm.Guid") {
          // Special case for GUIDs
          requestOdata[parameter] = { guid: parameterValue };
        } else {
          requestOdata[parameter] = parameterValue;
        }

        break;
      case StructuralProperty.Collection: {
        const isPrimitiveEdmType = parameterMetadata.typeName.startsWith("Collection(Edm.");
        if (!isPrimitiveEdmType) await getCollectionOutput(parameterValue, requestOdata, parameter);
        break;
      }
      case StructuralProperty.EntityType:
        // This is an entity record pointer
        await getEntityReferenceOutput(parameterValue, requestOdata, parameter);
        break;
      case StructuralProperty.Unknown:
      default:
        throw new Error("Unknown parameter type on action.");
    }
  } else {
    throw new Error(`Unexpected parameter ${parameter} on execute Request`);
  }
}

async function getCollectionOutput(fieldValue: object, requestOdata: WebApiExecuteRequest, field: string) {
  {
    const collection = fieldValue as IEntity[];
    if (collection && collection.length > 0) {
      requestOdata[field] = await odataify("Create", fieldValue);
    }
  }
}

async function getEntityReferenceOutput(fieldValue: object, requestOdata: WebApiExecuteRequest, field: string) {
  const fieldValueAsEntityReference = fieldValue as EntityReference;
  const fieldValueAsEntity = fieldValue as IEntity;
  if (fieldValueAsEntityReference.entityType && fieldValueAsEntityReference.id) {
    // See https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/webapi/use-web-api-functions#pass-reference-to-an-entity-to-a-function
    requestOdata[field] = fieldValueAsEntityReference; //{'@odata.id':Entity.odatifyEntityReference(collectionName,fieldValueAsEntityReference.id)};
  } else if (fieldValueAsEntity.logicalName) {
    requestOdata[field] = await odataify("Action", fieldValue);
  }
}

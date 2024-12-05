/* eslint-disable camelcase */
import { EntityReference } from "../../types/EntityReference";
import { Entity } from "../../types/Entity";
import { IEntity } from "../../types/IEntity";
import { EntityWebApiMetadata } from "../../metadata/EntityWebApiMetadata";
import { ActivityParty, activityparty_participationtypemask } from "../../types/ActivityParty";
import { Dictionary } from "../../types/Dictionary";
import { getNavigationPathForEntityReference, IEntityReference } from "../../types/IEntityReference";
import { EntityCollection } from "../../types/EntityCollection";
import { odataify } from "./odataify";
import { AttributeTypeCode } from "../../dataverse-gen/enums/AttributeTypeCode";
import { caseInsensitiveSearch } from "../../metadata/MetadataCache";

export async function odataifyFields(
  action: "Create" | "Update" | "Action",
  output: IEntity,
  value: object | IEntity,
  metadata: EntityWebApiMetadata,
): Promise<boolean> {
  for (const field of Object.keys(output)) {
    const fieldInfo = getFieldInfo(field, output, metadata);

    // Convert primitive types since we get everything back as strings
    if (fieldInfo.fieldAttributeType === AttributeTypeCode.Integer) {
      output[field] = fieldInfo.fieldValue && parseInt(fieldInfo.fieldValue as string);
    }

    switch (fieldInfo.fieldType) {
      case "[object Undefined]":
      case "[object Null]": {
        addNullValueToOutput(field, metadata, output);
        break;
      }
      case "[object Array]":
        {
          // Array of Activity Parties or enums
          // TODO: Add unit test for empty arrays
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await addArrayToOutput(fieldInfo.fieldValue as any[], output, field, metadata);
        }
        break;
      case "[object Object]":
        // Check if it's an EntityCollection
        if (Entity.containsFields(fieldInfo.fieldValue as Dictionary<unknown>, ["entities"])) {
          output[field] = await odataify(action, (fieldInfo.fieldValue as EntityCollection<IEntity>).entities);
        }
        // Create navigation properties for each entity reference
        // Check for entity reference
        else if (Entity.containsFields(fieldInfo.fieldValue as Dictionary<unknown>, ["id", "entityType"])) {
          await addEntityReferenceToOutput(fieldInfo.fieldValue as IEntityReference, field, metadata, output, value);
        }
        break;
      case "[object Date]": {
        // If the time element is set for Date Time fields - format accordingly
        const dateValue = fieldInfo.fieldValue as Date;
        let dateString = dateValue.toJSON();
        // If the date field is DateOnly:DateOnly then trim the value to have no time
        if (dateString && isDateOnlyField(metadata, field)) {
          dateString = dateString.substring(0, 10);
        }
        output[field] = dateString;
        break;
      }
    }
  }
  return true;
}

async function addNullValueToOutput(field: string, metadata: EntityWebApiMetadata, output: IEntity) {
  // When setting a value to undefined it must be null when sent to the WebApi
  output[field] = null;

  // if lookup field, use the Schema Name from navigation
  // TODO: I don't think this is strictly necessary
  const navigation = caseInsensitiveSearch(field, metadata.navigation as Dictionary<string[]>);
  if (navigation) {
    output[navigation.key] = null;
    // Do not delete the field since this fails the nullvalues.test.ts integration test
    // delete output[field];
  }
}

async function addEntityReferenceToOutput(
  entityRef: EntityReference,
  field: string,
  metadata: EntityWebApiMetadata,
  output: IEntity,
  value: object | IEntity,
) {
  let targetField = field;
  // If there are multiple navigation types, then convert to the correct field name by adding _<logicalname>
  const navigation = caseInsensitiveSearch(field, metadata.navigation as Dictionary<string[]>);
  if (navigation != null) {
    targetField = navigation.key;
    if (navigation.value.length > 1) {
      // This is a customer style field that has more than one target type
      targetField = targetField + "_" + entityRef.entityType;
    }
  }
  // Convert into odata navigation properties
  output[`${targetField}@odata.bind`] = await getNavigationPathForEntityReference(value as IEntity, field);
  delete output[field];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function addArrayToOutput(itemArray: any[], output: IEntity, field: string, metadata: EntityWebApiMetadata) {
  if (itemArray.length > 0) {
    // What is the type of the items
    const arrayType = itemArray[0].constructor.name;

    switch (arrayType) {
      case "Number":
        output[field] = itemArray.join(",");
        break;
      case "Object":
        {
          // Is this an array of activity parties?
          const party = itemArray[0] as ActivityParty;
          if (party.partyid != null) {
            await odataifyActivityParties(metadata, output, itemArray, field);
            // Remove the to/from/bcc/regarding field etc.
            delete output[field];
          }
        }
        break;
    }
  } else output[field] = null;
}

async function odataifyActivityParties(
  metadata: EntityWebApiMetadata,
  output: IEntity,
  itemArray: ActivityParty[],
  field: string,
) {
  const activityPartiesField = `${metadata.logicalName}_activity_parties`;
  let activityParties: ActivityParty[] = [];
  // Does the activity parties array already exist?
  if (!output[activityPartiesField]) {
    output[activityPartiesField] = activityParties;
  } else {
    activityParties = output[activityPartiesField] as ActivityParty[];
  }
  for (const item of itemArray) {
    const webapiParty = (await odataify("Create", item)) as ActivityParty;
    // Map to the participation type mask
    const participationTypeMask = mapParticipationType(field);
    webapiParty.participationtypemask = participationTypeMask;
    activityParties.push(webapiParty);
  }
}

function mapParticipationType(field: string) {
  switch (field) {
    case "bcc":
      return activityparty_participationtypemask.BCC_Recipient;
    case "cc":
      return activityparty_participationtypemask.CC_Recipient;
    case "optional":
      return activityparty_participationtypemask.Optional_attendee;
    case "requiredattendees":
      return activityparty_participationtypemask.Required_attendee;
    case "from":
      return activityparty_participationtypemask.Sender;
    case "to":
      return activityparty_participationtypemask.To_Recipient;
    default:
      throw new Error(`Cannot map participation type mask for field ${field}`);
  }
}

function getFieldInfo(field: string, output: IEntity, metadata: EntityWebApiMetadata) {
  return {
    fieldType: Object.prototype.toString.call(output[field]),
    fieldValue: output[field] as unknown,
    fieldAttributeType: metadata.attributeTypes[field],
  };
}

function isDateOnlyField(metadata: EntityWebApiMetadata, field: string) {
  return (metadata.attributeTypes as Dictionary<string>)[field] === "DateOnly:DateOnly";
}

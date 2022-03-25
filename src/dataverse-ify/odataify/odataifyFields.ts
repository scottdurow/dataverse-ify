/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { EntityReference } from "../../types/EntityReference";
import { Entity } from "../../types/Entity";
import { IEntity } from "../../types/IEntity";
import { EntityWebApiMetadata } from "../../metadata/EntityWebApiMetadata";
import { ActivityParty, activityparty_participationtypemask } from "../../types/ActivityParty";
import { Dictionary } from "../../types/Dictionary";
import { getNavigationPathForEntityReference } from "../../types/IEntityReference";
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
    const fieldType = Object.prototype.toString.call(output[field]);
    const fieldValue = output[field] as unknown;
    const fieldAttributeType = metadata.attributeTypes[field];

    // Convert primitive types
    switch (fieldAttributeType) {
      case AttributeTypeCode.Integer:
        output[field] = fieldValue && parseInt(fieldValue as string);
        break;
    }

    switch (fieldType) {
      case "[object Undefined]":
        // When setting a value to undefined it must be null when sent to the WebApi
        output[field] = null;
        break;
      case "[object Array]":
        // Array of Activity Parties or enums
        // TODO: Add unit test for empty arrays
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const itemArray = fieldValue as any[];
        if (itemArray.length > 0) {
          // What is the type of the items
          const arrayType = itemArray[0].constructor.name;
          switch (arrayType) {
            case "Number":
              output[field] = itemArray.join(",");
              break;
            case "Object":
              // Is this an array of activity parties?
              const party = itemArray[0] as ActivityParty;
              if (party.partyid != null) {
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
                  let participationTypeMask;
                  switch (field) {
                    case "bcc":
                      participationTypeMask = activityparty_participationtypemask.BCC_Recipient;
                      break;
                    case "cc":
                      participationTypeMask = activityparty_participationtypemask.CC_Recipient;
                      break;
                    case "optional":
                      participationTypeMask = activityparty_participationtypemask.Optional_attendee;
                      break;
                    case "requiredattendees":
                      participationTypeMask = activityparty_participationtypemask.Required_attendee;
                      break;
                    case "from":
                      participationTypeMask = activityparty_participationtypemask.Sender;
                      break;
                    case "to":
                      participationTypeMask = activityparty_participationtypemask.To_Recipient;
                      break;
                    default:
                      throw new Error(`Cannot map participation type mask for field ${field}`);
                  }
                  webapiParty.participationtypemask = participationTypeMask;
                  activityParties.push(webapiParty);
                }
                // Remove the to/from/bcc/regarding field etc.
                delete output[field];
              }
              break;
          }
        } else output[field] = null;
        break;
      case "[object Object]":
        // Check if it's an EntityCollection
        if (Entity.containsFields(fieldValue as Dictionary<unknown>, ["entities"])) {
          output[field] = await odataify(action, (fieldValue as EntityCollection<IEntity>).entities);
        }
        // Create navigation properties for each entity reference
        // Check for entity reference
        else if (Entity.containsFields(fieldValue as Dictionary<unknown>, ["id", "entityType"])) {
          const entityRef = fieldValue as EntityReference;
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
        break;
      case "[object Date]":
        // If the time element is set for Date Time fields - format accordingly
        const dateValue = fieldValue as Date;
        let dateString = dateValue.toJSON();
        // If the date field is DateOnly:DateOnly then trim the value to have no time
        if (dateString && (metadata.attributeTypes as Dictionary<string>)[field] === "DateOnly:DateOnly") {
          dateString = dateString.substring(0, 10);
        }
        output[field] = dateString;
        break;
    }
  }
  return true;
}

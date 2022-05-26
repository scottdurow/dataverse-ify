/* eslint-disable camelcase */
import { EntityWebApiMetadata } from "../../metadata/EntityWebApiMetadata";
import { getEntityMetadataFromRecord } from "../../metadata/getEntityMetadataFromRecord";
import { ActivityParty, activityparty_participationtypemask } from "../../types/ActivityParty";
import { AttributeTypes } from "../../types/AttributeTypes";
import { Dictionary } from "../../types/Dictionary";
import { EntityCollection } from "../../types/EntityCollection";
import { EntityReference } from "../../types/EntityReference";
import { Guid } from "../../types/Guid";
import { IEntity } from "../../types/IEntity";
import { IEntityCollection } from "../../types/IEntityCollection";
import { isNullOrUndefined } from "../../webapi/utils/NullOrUndefined";
import { dateReviver } from "./dateReviver";

export async function sdkify<T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any | Array<Record<string, any>>,
  logicalName?: string,
): Promise<T | EntityCollection<IEntity> | Xrm.RetrieveMultipleResult> {
  if (value.json) {
    // This is a UCI response object and we need to await the json conversion
    value = await value.json();
  }

  if (value.responseText) {
    // This is a raw execute response
    value = JSON.parse(value.responseText, dateReviver);
  }

  if ((value as Xrm.RetrieveMultipleResult).entities !== undefined) {
    return sdkifyEntityCollection(value, logicalName);
  } else if (value.constructor.name === "Array") {
    return await sdkifyArray(value, logicalName);
  } else {
    return sdkifyEntity(value as IEntity, logicalName);
  }
}

// Remove the fields not needed (@ and _ fields)
function removeNonSdkFields(entityRecord: IEntity): void {
  for (const field of Object.keys(entityRecord)) {
    if (field.startsWith("_") || field.indexOf("@") > -1) {
      delete entityRecord[field];
    }
  }
}

// Expand out the activity party relationship array into to,from,bcc etc
function expandActivityPartiesToFields(entityRecord: IEntity, activityPartiesField: string): void {
  // In the UCI the expand navigation property returns a promise!
  const parties = entityRecord[activityPartiesField] as IEntityCollection<ActivityParty>;

  let entities: ActivityParty[] = [];
  if (parties.entities) {
    entities = parties.entities;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    entities = parties as any as ActivityParty[];
  }

  for (const a of entities) {
    let partyField = null;
    // Determine which field to add to
    switch (a.participationtypemask) {
      case activityparty_participationtypemask.BCC_Recipient:
        partyField = "bcc";
        break;
      case activityparty_participationtypemask.CC_Recipient:
        partyField = "cc";
        break;
      case activityparty_participationtypemask.Optional_attendee:
        partyField = "optional";
        break;
      case activityparty_participationtypemask.Required_attendee:
        partyField = "requiredattendees";
        break;
      case activityparty_participationtypemask.Sender:
        partyField = "from";
        break;
      case activityparty_participationtypemask.To_Recipient:
        partyField = "to";
        break;
    }
    if (partyField != null) {
      let partyList = entityRecord[partyField] as IEntity[];
      if (isNullOrUndefined(partyList)) {
        partyList = [];
        entityRecord[partyField] = partyList;
      }
      partyList.push(a);
    }
  }
}

async function sdkifyArray(
  value: Record<string, unknown>[],
  logicalName?: string,
): Promise<IEntityCollection<IEntity>> {
  const cdsRecords: IEntity[] = [];
  for (const record of value as Array<IEntity>) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    cdsRecords.push((await sdkify(record, logicalName)) as IEntity);
  }
  return new EntityCollection(cdsRecords);
}

async function sdkifyEntityCollection(value: unknown, logicalName?: string): Promise<IEntityCollection<IEntity>> {
  const response = value as Xrm.RetrieveMultipleResult;
  const records = (await sdkifyArray(response.entities, logicalName)) as EntityCollection<IEntity>;
  records.pagingCooking = response.nextLink;
  return records;
}

async function sdkifyEntity<T>(entityRecord: IEntity, logicalName?: string): Promise<T> {
  const entityMetadata = getEntityMetadataFromRecord(entityRecord, logicalName) as EntityWebApiMetadata;

  if (entityMetadata != null) {
    // Formatted values hold the text labels
    entityRecord.formattedValues = entityRecord.formattedValues || {};

    // Turn each complex type property into the sdk fields
    let activityPartiesField = "";
    for (const field of Object.keys(entityRecord)) {
      const fieldInfo = await sdkifyField(entityRecord, field, entityMetadata);
      if (fieldInfo.isActivityPartiesField) activityPartiesField = fieldInfo.attributeLogicalName;
    }

    removeNonSdkFields(entityRecord);

    // If this is an activity party then populate the correct 'virtual field'
    if (activityPartiesField) {
      expandActivityPartiesToFields(entityRecord, activityPartiesField);
    }
  }
  entityRecord.logicalName = logicalName as string;
  return entityRecord as unknown as T;
}

// Removes the @ annotation part of the field name
// e.g. _primarycontactid_value@Microsoft.Dynamics.CRM.lookuplogicalname=contact
// becomes just _primarycontactid_value
function fieldNameWithoutAnnotation(fieldName: string): string {
  const posAt = fieldName.lastIndexOf("@");
  if (posAt > -1) return fieldName.substring(0, posAt);
  else return fieldName;
}

function isNavigationProperty(fieldName: string): boolean {
  return fieldName.endsWith("@Microsoft.Dynamics.CRM.lookuplogicalname");
}

function getLookupAttributeName(fieldName: string): string {
  return fieldNameWithoutAnnotation(fieldName) + "@Microsoft.Dynamics.CRM.lookuplogicalname";
}

function getNavigationPropertyName(fieldName: string): string {
  return fieldNameWithoutAnnotation(fieldName) + "@Microsoft.Dynamics.CRM.associatednavigationproperty";
}

function getFormattedValueName(fieldName: string): string {
  return fieldNameWithoutAnnotation(fieldName) + "@OData.Community.Display.V1.FormattedValue";
}

/*
    We need to determine which type the field is here
    ---Dates---
    Dates we use the 'DateReviver' pattern
    however this is very inefficient since it runs the regex on every field value

    ---EntityReference---
    Entity reference we can infer from the presence of the Microsoft.Dynamics.CRM.lookuplogicalname
    and Microsoft.Dynamics.CRM.associatednavigationproperty
    _parentcustomerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty=parentcustomerid_account
    _parentcustomerid_value@Microsoft.Dynamics.CRM.lookuplogicalname=account
    _parentcustomerid_value@OData.Community.Display.V1.FormattedValue=xyz
                        
    _primarycontactid_value@Microsoft.Dynamics.CRM.associatednavigationproperty=primarycontactid
    _primarycontactid_value@Microsoft.Dynamics.CRM.lookuplogicalname=contact
    _primarycontactid_value@OData.Community.Display.V1.FormattedValue=xyz
    */
async function sdkifyField(entityRecord: IEntity, field: string, entityMetadata: EntityWebApiMetadata) {
  let isActivityPartiesField = false;

  const navigationProperty = isNavigationProperty(field);
  const underscore = field.startsWith("_");
  const containsAt = field.indexOf("@") > -1;
  let attributeValue: unknown = null;
  let attributeLogicalName = field;

  const attributeType = getAttributeType(entityRecord, field, entityMetadata);

  if ((!containsAt && !underscore) || navigationProperty) {
    if (navigationProperty) {
      attributeLogicalName = fieldNameWithoutAnnotation(field);
    }

    const formattedValueName = getFormattedValueName(field);

    // Add the formatted value if there is one
    if (entityRecord[formattedValueName] != null && entityRecord.formattedValues)
      entityRecord.formattedValues[attributeLogicalName] = entityRecord[formattedValueName] as string;

    switch (attributeType) {
      case AttributeTypes.EntityReference:
        ({ attributeValue, attributeLogicalName } = getEntityReference(entityRecord, field));
        break;
      case AttributeTypes.Money:
        attributeValue = entityRecord[attributeLogicalName] as number;
        break;
      case AttributeTypes.MultiSelectOptionSetValue:
        attributeValue = getMultiSelectOptionSet(entityRecord, attributeLogicalName);
        break;
      case AttributeTypes.OptionSetValue:
        attributeValue = entityRecord[attributeLogicalName];
        break;
      case AttributeTypes.EntityCollection:
        ({ attributeValue, isActivityPartiesField } = await getEntityCollection(field, entityMetadata, entityRecord));
        break;
      case AttributeTypes.DateTime:
        attributeValue = new Date(Date.parse(entityRecord[attributeLogicalName] as string));
        break;
      default:
        // Default - set primitive type value
        attributeValue = entityRecord[attributeLogicalName];
        break;
    }

    entityRecord[attributeLogicalName] = attributeValue;
  }

  return {
    attributeType: attributeType,
    attributeValue: attributeValue,
    attributeLogicalName: attributeLogicalName,
    isActivityPartiesField: isActivityPartiesField,
  };
}

async function getEntityCollection(field: string, entityMetadata: EntityWebApiMetadata, entityRecord: IEntity) {
  let isActivityPartiesField = false;
  let navigationLogicalName = "";
  const plainField = fieldNameWithoutAnnotation(field);
  if (field.endsWith("_activity_parties")) {
    navigationLogicalName = "activityparty";
    isActivityPartiesField = true;
  } else if ((entityMetadata.navigation as Dictionary<string[]>)[field] != null) {
    navigationLogicalName = (entityMetadata.navigation as Dictionary<string[]>)[field][0];
  }
  const attributeValue = await sdkify<IEntityCollection<IEntity>>(entityRecord[plainField], navigationLogicalName);

  return { attributeValue, isActivityPartiesField };
}

function getMultiSelectOptionSet(entityRecord: IEntity, attributeLogicalName: string) {
  const attributeValue = entityRecord[attributeLogicalName];
  const formattedValueName = getFormattedValueName(attributeLogicalName);
  const valueInts: number[] = [];
  if (attributeValue != null) {
    const valueStrings: string[] = (attributeValue as string).split(",");
    for (const v of valueStrings.reverse()) {
      valueInts.push(Number.parseInt(v));
    }
  }
  if (entityRecord[formattedValueName] != null && entityRecord.formattedValues) {
    entityRecord.formattedValues[attributeLogicalName] = entityRecord[formattedValueName] as string;
  }
  return valueInts;
}

function getEntityReference(entityRecord: IEntity, field: string) {
  const entityType = entityRecord[getLookupAttributeName(field)] as string;
  const formattedValueName = getFormattedValueName(field);
  let attributeLogicalName = fieldNameWithoutAnnotation(field);
  const attributeValue = new EntityReference(
    entityType as string,
    entityRecord[attributeLogicalName] as Guid,
    entityRecord[formattedValueName] as string,
  );

  // Get the attribute logical name by looking up the navigation property annotation
  const lookupAttributeName = entityRecord[getNavigationPropertyName(field)] as string;
  if (attributeLogicalName.endsWith("_value") && attributeLogicalName.startsWith("_")) {
    // Remove the _value part to get the attribute logical name
    attributeLogicalName = attributeLogicalName.substring(1, attributeLogicalName.length - "_value".length);
  } else if (lookupAttributeName != null) {
    // Get the actual logical name of the attribute
    if (lookupAttributeName.endsWith("_" + entityType)) {
      const typePos = lookupAttributeName.lastIndexOf("_" + entityType);
      attributeLogicalName = lookupAttributeName.substring(0, typePos);
    } else {
      attributeLogicalName = lookupAttributeName;
    }
  }

  return { attributeValue, attributeLogicalName };
}

function getAttributeType(entityRecord: IEntity, field: string, entityMetadata: EntityWebApiMetadata) {
  let attributeType = AttributeTypes.Unknown;
  let attributeLogicalName = field;
  const navigationProperty = isNavigationProperty(field);

  if (navigationProperty) {
    attributeLogicalName = fieldNameWithoutAnnotation(field);
  }

  if (attributeLogicalName.endsWith("_activity_parties")) {
    attributeType = AttributeTypes.EntityCollection;
  } else if (navigationProperty && entityRecord[getLookupAttributeName(field)] != null) {
    attributeType = AttributeTypes.EntityReference;
  } else {
    let metadataType = entityMetadata.attributeTypes[field];
    // For DateTimes, trim off the second part
    metadataType = metadataType != null ? metadataType.split(":")[0] : "";
    // TODO: Match strings to the optionset names?
    switch (metadataType) {
      case "Optionset":
        attributeType = AttributeTypes.OptionSetValue;
        break;
      case "MultiSelect":
        attributeType = AttributeTypes.MultiSelectOptionSetValue;
        break;
      case "Money":
        attributeType = AttributeTypes.Money;
        break;
      case "DateOnly":
      case "DateAndTime":
        attributeType = AttributeTypes.DateTime;
        break;
      /*
      ---Aliased Value---
      There doesn't seem to be any way of determining of a returned field value is an aliased value
      This means that there is no way of determining the type from querying metadata. Sad face.
      */
    }
  }
  return attributeType;
}

/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { EntityReference } from "./EntityReference";
import { IEntity } from "./IEntity";
import { Guid } from "./Guid";
export const activitypartyMetadata = {
  typeName: "mscrm.activityparty",
  logicalName: "activityparty",
  collectionName: "activityparties",
  primaryIdAttribute: "activitypartyid",
  attributeTypes: {
    // Numeric Types
    addressusedemailcolumnnumber: "Integer",
    effort: "Double",
    versionnumber: "BigInt",
    // Optionsets
    instancetypecode: "Optionset",
    participationtypemask: "Optionset",
    // Date Formats
    scheduledend: "DateOnly:UserLocal",
    scheduledstart: "DateOnly:UserLocal",
  },
  navigation: {
    activityid: ["activitypointer"],
    partyid: ["account", "contact", "knowledgearticle", "queue", "systemuser"],
  },
};
export const enum activityparty_participationtypemask {
  Sender = 1,
  To_Recipient = 2,
  CC_Recipient = 3,
  BCC_Recipient = 4,
  Required_attendee = 5,
  Optional_attendee = 6,
  Organizer = 7,
  Regarding = 8,
  Owner = 9,
  Resource = 10,
  Customer = 11,
}
export interface ActivityParty extends IEntity {
  /**Activity		LookupType
      Unique identifier of the activity associated with the activity party. (A "party" is any person who is associated with an activity.)
      */
  activityid?: EntityReference;
  /**Activity Party		UniqueidentifierType
      Unique identifier of the activity party.
      */
  activitypartyid?: Guid;
  /**Participation Type		activityparty_activityparty_participationtypemask
      Role of the person in the activity, such as sender, to, cc, bcc, required, optional, organizer, regarding, or owner.
      */
  participationtypemask?: activityparty_participationtypemask;
  /**Party		LookupType
      Unique identifier of the party associated with the activity.
      */
  partyid?: EntityReference;
  /**Resource Specification		LookupType
      Unique identifier of the resource specification for the activity party.
      */
  resourcespecid?: EntityReference;
}

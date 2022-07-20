/* eslint-disable*/
import { IEntity } from "../../types/IEntity";
// Entity cdsify_IntegrationTest
export const cdsify_integrationtestMetadata = {
  typeName: "mscrm.cdsify_integrationtest",
  logicalName: "cdsify_integrationtest",
  collectionName: "cdsify_integrationtests",
  primaryIdAttribute: "cdsify_integrationtestid",
  attributeTypes: {
    // Numeric Types
    cdsify_bigint: "BigInt",
    cdsify_image1_timestamp: "BigInt",
    cdsify_primaryimage_timestamp: "BigInt",
    importsequencenumber: "Integer",
    timezoneruleversionnumber: "Integer",
    utcconversiontimezonecode: "Integer",
    versionnumber: "BigInt",
    // Optionsets
    statecode: "Optionset",
    statuscode: "Optionset",
    // Date Formats
    createdon: "DateAndTime:UserLocal",
    modifiedon: "DateAndTime:UserLocal",
    overriddencreatedon: "DateOnly:UserLocal",
  },
  navigation: {
    createdby: ["mscrm.systemuser"],
    createdonbehalfby: ["mscrm.systemuser"],
    modifiedby: ["mscrm.systemuser"],
    modifiedonbehalfby: ["mscrm.systemuser"],
    ownerid: ["mscrm.principal"],
    owningbusinessunit: ["mscrm.businessunit"],
    owningteam: ["mscrm.team"],
    owninguser: ["mscrm.systemuser"],
  },
};

// Attribute constants
export const enum cdsify_IntegrationTestAttributes {
  cdsify_BigInt = "cdsify_bigint",
  cdsify_File1 = "cdsify_file1",
  cdsify_File1_Name = "cdsify_file1_name",
  cdsify_Image1 = "cdsify_image1",
  cdsify_Image1_Timestamp = "cdsify_image1_timestamp",
  cdsify_Image1_URL = "cdsify_image1_url",
  cdsify_Image1Id = "cdsify_image1id",
  cdsify_IntegrationTestId = "cdsify_integrationtestid",
  cdsify_Name = "cdsify_name",
  cdsify_PrimaryImage = "cdsify_primaryimage",
  cdsify_PrimaryImage_Timestamp = "cdsify_primaryimage_timestamp",
  cdsify_PrimaryImage_URL = "cdsify_primaryimage_url",
  cdsify_PrimaryImageId = "cdsify_primaryimageid",
  CreatedBy = "createdby",
  CreatedByName = "createdbyname",
  CreatedByYomiName = "createdbyyominame",
  CreatedOn = "createdon",
  CreatedOnBehalfBy = "createdonbehalfby",
  CreatedOnBehalfByName = "createdonbehalfbyname",
  CreatedOnBehalfByYomiName = "createdonbehalfbyyominame",
  ImportSequenceNumber = "importsequencenumber",
  ModifiedBy = "modifiedby",
  ModifiedByName = "modifiedbyname",
  ModifiedByYomiName = "modifiedbyyominame",
  ModifiedOn = "modifiedon",
  ModifiedOnBehalfBy = "modifiedonbehalfby",
  ModifiedOnBehalfByName = "modifiedonbehalfbyname",
  ModifiedOnBehalfByYomiName = "modifiedonbehalfbyyominame",
  OverriddenCreatedOn = "overriddencreatedon",
  OwnerId = "ownerid",
  OwnerIdName = "owneridname",
  OwnerIdType = "owneridtype",
  OwnerIdYomiName = "owneridyominame",
  OwningBusinessUnit = "owningbusinessunit",
  OwningBusinessUnitName = "owningbusinessunitname",
  OwningTeam = "owningteam",
  OwningUser = "owninguser",
  statecode = "statecode",
  statuscode = "statuscode",
  TimeZoneRuleVersionNumber = "timezoneruleversionnumber",
  UTCConversionTimeZoneCode = "utcconversiontimezonecode",
  VersionNumber = "versionnumber",
}

// Early Bound Interface
export interface cdsify_IntegrationTest extends IEntity {
  /*
  Big Int BigIntType Multi
Line
Description
  */
  cdsify_bigint?: number | null;
  /*
  File1 FileType File Column
  */
  cdsify_file1?: string | null;
  /*
   StringType
  */
  cdsify_file1_name?: string | null;
  /*
  Image1 ImageType
  */
  cdsify_image1?: string | null;
  /*
   BigIntType
  */
  cdsify_image1_timestamp?: number | null;
  /*
   StringType
  */
  cdsify_image1_url?: string | null;
  /*
   UniqueidentifierType
  */
  cdsify_image1id?: import("../../types/Guid").Guid | null;
  /*
  Dataverseify Integration Test UniqueidentifierType Unique identifier for entity instances
  */
  cdsify_integrationtestid?: import("../../types/Guid").Guid | null;
  /*
  Name [Required] StringType
  */
  cdsify_name?: string;
  /*
  Primary Image ImageType
  */
  cdsify_primaryimage?: string | null;
  /*
   BigIntType
  */
  cdsify_primaryimage_timestamp?: number | null;
  /*
   StringType
  */
  cdsify_primaryimage_url?: string | null;
  /*
   UniqueidentifierType
  */
  cdsify_primaryimageid?: import("../../types/Guid").Guid | null;
  /*
  Created By LookupType Unique identifier of the user who created the record.
  */
  createdby?: import("../../types/EntityReference").EntityReference | null;
  /*
   StringType
  */
  createdbyname?: string | null;
  /*
   StringType
  */
  createdbyyominame?: string | null;
  /*
  Created On DateTimeType Date and time when the record was created. DateAndTime:UserLocal
  */
  createdon?: Date | null;
  /*
  Created By (Delegate) LookupType Unique identifier of the delegate user who created the record.
  */
  createdonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  /*
   StringType
  */
  createdonbehalfbyname?: string | null;
  /*
   StringType
  */
  createdonbehalfbyyominame?: string | null;
  /*
  Import Sequence Number IntegerType Sequence number of the import that created this record.
  */
  importsequencenumber?: number | null;
  /*
  Modified By LookupType Unique identifier of the user who modified the record.
  */
  modifiedby?: import("../../types/EntityReference").EntityReference | null;
  /*
   StringType
  */
  modifiedbyname?: string | null;
  /*
   StringType
  */
  modifiedbyyominame?: string | null;
  /*
  Modified On DateTimeType Date and time when the record was modified. DateAndTime:UserLocal
  */
  modifiedon?: Date | null;
  /*
  Modified By (Delegate) LookupType Unique identifier of the delegate user who modified the record.
  */
  modifiedonbehalfby?: import("../../types/EntityReference").EntityReference | null;
  /*
   StringType
  */
  modifiedonbehalfbyname?: string | null;
  /*
   StringType
  */
  modifiedonbehalfbyyominame?: string | null;
  /*
  Record Created On DateTimeType Date and time that the record was migrated. DateOnly:UserLocal
  */
  overriddencreatedon?: Date | null;
  /*
  Owner OwnerType Owner Id
  */
  ownerid?: import("../../types/EntityReference").EntityReference | null;
  /*
   StringType Name of the owner
  */
  owneridname?: string | null;
  /*
   EntityNameType Owner Id Type
  */
  owneridtype?: string | null;
  /*
   StringType Yomi name of the owner
  */
  owneridyominame?: string | null;
  /*
  Owning Business Unit LookupType Unique identifier for the business unit that owns the record
  */
  owningbusinessunit?: import("../../types/EntityReference").EntityReference | null;
  /*
   StringType
  */
  owningbusinessunitname?: string | null;
  /*
  Owning Team LookupType Unique identifier for the team that owns the record.
  */
  owningteam?: import("../../types/EntityReference").EntityReference | null;
  /*
  Owning User LookupType Unique identifier for the user that owns the record.
  */
  owninguser?: import("../../types/EntityReference").EntityReference | null;
  /*
  Status cdsify_integrationtest_cdsify_integrationtest_statecode Status of the Dataverseify Integration Test
  */
  statecode?: import("../enums/cdsify_integrationtest_cdsify_integrationtest_statecode").cdsify_integrationtest_cdsify_integrationtest_statecode | null;
  /*
  Status Reason cdsify_integrationtest_cdsify_integrationtest_statuscode Reason for the status of the Dataverseify Integration Test
  */
  statuscode?: import("../enums/cdsify_integrationtest_cdsify_integrationtest_statuscode").cdsify_integrationtest_cdsify_integrationtest_statuscode | null;
  /*
  Time Zone Rule Version Number IntegerType For internal use only.
  */
  timezoneruleversionnumber?: number | null;
  /*
  UTC Conversion Time Zone Code IntegerType Time zone code that was in use when the record was created.
  */
  utcconversiontimezonecode?: number | null;
  /*
  Version Number BigIntType Version Number
  */
  versionnumber?: number | null;
}

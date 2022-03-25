/* eslint-disable @typescript-eslint/camelcase */
import { setMetadataCache } from "../../../metadata";
import { odataify } from "../../odataify/odataify";
import { EntityReference, sdkify } from "../../..";
import { opportunityMetadata, Opportunity } from "../../../dataverse-gen/entities/Opportunity";
import { accountMetadata } from "../../../dataverse-gen/entities/Account";
test("odataify customer lookups", async () => {
  setMetadataCache({
    entities: { opportunity: opportunityMetadata, account: accountMetadata },
  });
  const sdkEntity = {
    logicalName: opportunityMetadata.logicalName,
    customerid: new EntityReference("account", "123"),
  } as Opportunity;

  const odataEntity = await odataify("Create", sdkEntity);
  expect(odataEntity).toBeDefined();
  const expectedOdata = {
    "@odata.type": "Microsoft.Dynamics.CRM.opportunity",
    "customerid_account@odata.bind": "accounts(123)",
  };
  expect(JSON.stringify(odataEntity)).toBe(JSON.stringify(expectedOdata));
});

test("sdkify lookups", async () => {
  setMetadataCache({ entities: { opportunity: opportunityMetadata } });
  const recordOdata = {
    "@odata.context":
      "https://develop1v9demo.crm11.dynamics.com/api/data/v9.1/$metadata#opportunities(_customerid_value)/$entity",
    // eslint-disable-next-line quotes
    "@odata.etag": 'W/"24587791"',
    "_customerid_value@OData.Community.Display.V1.FormattedValue": "Test Unit",
    "_customerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "customerid_contact",
    "_customerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "contact",
    _customerid_value: "3191b1c8-4c85-ea11-a812-000d3a7f4cf5",
    opportunityid: "0faa41b7-4c85-ea11-a811-00224801badc",
  };

  const sdkRecord = await sdkify(recordOdata, "opportunity");
  const expected = {
    opportunityid: "0faa41b7-4c85-ea11-a811-00224801badc",
    logicalName: "opportunity",
    formattedValues: {
      _customerid_value: "Test Unit",
    },
    customerid: {
      entityType: "contact",
      id: "3191b1c8-4c85-ea11-a812-000d3a7f4cf5",
      name: "Test Unit",
    },
  };

  expect(JSON.stringify(sdkRecord)).toBe(JSON.stringify(expected));
});

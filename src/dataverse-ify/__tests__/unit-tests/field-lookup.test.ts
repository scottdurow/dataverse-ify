/* eslint-disable @typescript-eslint/camelcase */
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { setMetadataCache } from "../../../metadata";
import { odataify } from "../../odataify/odataify";
import { EntityReference, sdkify } from "../../..";

test("odataify lookups", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });
  const accountSdk = {
    logicalName: accountMetadata.logicalName,
    parentaccountid: new EntityReference("account", "123"),
  } as Account;

  const accountOdata = await odataify("Create", accountSdk);
  expect(accountOdata).toBeDefined();
  const expectedOdata = {
    "@odata.type": "Microsoft.Dynamics.CRM.account",
    "parentaccountid@odata.bind": "accounts(123)",
  };
  expect(JSON.stringify(accountOdata)).toBe(JSON.stringify(expectedOdata));
});
test("odataify lookups", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });
  const odataRecord = {
    "@odata.context": "https://develop1v9demo.crm11.dynamics.com/api/data/v9.1/$metadata#accounts/$entity",
    // eslint-disable-next-line quotes
    "@odata.etag": 'W/"24588382"',
    name: "Account 1",
    "_preferredsystemuserid_value@OData.Community.Display.V1.FormattedValue": "Scott Durow",
    "_preferredsystemuserid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    _preferredsystemuserid_value: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
  };
  const sdkRecord = await sdkify(odataRecord, "account");

  const expectedSdk = {
    name: "Account 1",
    logicalName: "account",
    formattedValues: {
      _preferredsystemuserid_value: "Scott Durow", // This shouldn't really be output because it's in the EntityReference
    },
    preferredsystemuserid: {
      entityType: "systemuser",
      id: "d3b787e3-8c39-48e6-97fc-26dfc14f104d",
      name: "Scott Durow",
    },
  };
  expect(JSON.stringify(sdkRecord)).toBe(JSON.stringify(expectedSdk));
});

/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { sdkify, odataify } from "../..";
import { accountMetadata, Account } from "../../../cds-generated/entities/Account";
import { setMetadataCache } from "../../..";
import { msdyn_travelchargetype } from "../../../cds-generated/enums/msdyn_travelchargetype";

test("sdkify Multiselects", async () => {
  const accountSdk = {
    logicalName: accountMetadata.logicalName,
    name: "Account 1",
    dev1_multiselect: [msdyn_travelchargetype.Fixed, msdyn_travelchargetype.Hourly],
  } as Account;

  const odata = odataify("Create", accountSdk);
  console.log(odata);
});

test("sdkify Multiselects", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });
  const odataRecord = {
    "@odata.context": "https://develop1v9demo.crm11.dynamics.com/api/data/v9.1/$metadata#accounts/$entity",
    "@odata.etag": 'W/"24588414"',
    "dev1_multiselect@OData.Community.Display.V1.FormattedValue": "Mileage; Fixed",
    dev1_multiselect: "690970001,690970002",
    name: "Account 1",
  };

  const sdkRecord = (await sdkify(odataRecord, "account")) as Account;

  expect(sdkRecord.dev1_multiselect).toBeDefined();
  expect(sdkRecord.dev1_multiselect?.length).toBe(2);
  expect(sdkRecord.dev1_multiselect && sdkRecord.dev1_multiselect[0]).toBe(msdyn_travelchargetype.Fixed);
});

/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import { sdkify, odataify } from "../..";
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { setMetadataCache } from "../../..";
import { socialprofile_community } from "../../../dataverse-gen/enums/socialprofile_community";

test("sdkify Multiselects", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });
  const accountSdk = {
    logicalName: accountMetadata.logicalName,
    name: "Account 1",
    cdsify_multiselect: [socialprofile_community.Facebook, socialprofile_community.Other],
  } as Account;

  const odata = await odataify("Create", accountSdk);
  expect(odata).toBeDefined();
  expect(odata.cdsify_multiselect).toBe("1,0");
  expect(odata.name).toBe("Account 1");
  expect(odata["@odata.type"]).toBe("Microsoft.Dynamics.CRM.account");
});

test("sdkify Multiselects", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });
  const odataRecord = {
    "@odata.context": "https://org.crm11.dynamics.com/api/data/v9.1/$metadata#accounts/$entity",
    // eslint-disable-next-line quotes
    "@odata.etag": 'W/"24588414"',
    "cdsify_multiselect@OData.Community.Display.V1.FormattedValue": "Facebook",
    cdsify_multiselect: "1,2",
    name: "Account 1",
  };

  const sdkRecord = (await sdkify(odataRecord, "account")) as Account;

  expect(sdkRecord.cdsify_multiselect).toBeDefined();
  expect(sdkRecord.cdsify_multiselect?.length).toBe(2);
  expect(sdkRecord.cdsify_multiselect && sdkRecord.cdsify_multiselect[0]).toBe(socialprofile_community.Twitter);
  expect(sdkRecord.cdsify_multiselect && sdkRecord.cdsify_multiselect[1]).toBe(socialprofile_community.Facebook);
});

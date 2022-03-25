/* eslint-disable @typescript-eslint/camelcase */
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { setMetadataCache } from "../../../metadata";
import { odataify } from "../../odataify/odataify";
import { sdkify } from "../../sdkify/sdkify";

test("Set String, Integer, Double, Money, Date Attributes", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });
  const accountSdk = {
    id: "1234",
    logicalName: accountMetadata.logicalName,
    name: "Account 1", // String
    address1_utcoffset: 123.45, // Integer
    address1_latitude: 123.456, // Double
    revenue: 456.78, // Money
    lastonholdtime: new Date("2020-04-01T09:00:00.000Z"), // Date
  } as Account;

  const accountOdata = await odataify("Create", accountSdk);
  expect(accountOdata).toBeDefined();
  const expectedOdata = {
    name: "Account 1",
    address1_utcoffset: 123, // Int should be truncated
    address1_latitude: 123.456,
    revenue: 456.78,
    lastonholdtime: "2020-04-01T09:00:00.000Z",
    "@odata.type": "Microsoft.Dynamics.CRM.account",
  };
  expect(JSON.stringify(accountOdata)).toBe(JSON.stringify(expectedOdata));
});

test("Empty String, Integer, Double, Money, Date Attributes", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });
  const accountSdk = {
    logicalName: accountMetadata.logicalName,
    name: undefined, // String
    address1_utcoffset: undefined, // Integer
    address1_latitude: undefined, // Double
    revenue: undefined, // Money
    lastonholdtime: undefined, // Date
  } as Account;

  const accountOdata = await odataify("Create", accountSdk);
  expect(accountOdata).toBeDefined();
  const expectedOdata = {
    name: null,
    address1_utcoffset: null, // Int should be truncated
    address1_latitude: null,
    revenue: null,
    lastonholdtime: null,
    "@odata.type": "Microsoft.Dynamics.CRM.account",
  };
  expect(JSON.stringify(accountOdata)).toBe(JSON.stringify(expectedOdata));
});

test("sdkify Date fields", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });
  const accountOdata = {
    "@odata.context": "https://develop1v9demo.crm11.dynamics.com/api/data/v9.1/$metadata#accounts/$entity",
    // eslint-disable-next-line quotes
    "@odata.etag": 'W/"24587310"',
    "address1_latitude@OData.Community.Display.V1.FormattedValue": "1.00000",
    name: "Account 1",
    "modifiedon@OData.Community.Display.V1.FormattedValue": "23/04/2020 09:59",
    modifiedon: "2020-04-23T09:59:45.000Z",
  };

  const sdkRecord = (await sdkify(accountOdata, "account")) as Account;
  expect(sdkRecord.modifiedon).toBeDefined();
  if (sdkRecord.modifiedon) {
    const utcDate = new Date(
      sdkRecord.modifiedon.getUTCFullYear(),
      sdkRecord.modifiedon.getUTCMonth(),
      sdkRecord.modifiedon.getUTCDate(),
      sdkRecord.modifiedon.getUTCHours(),
      sdkRecord.modifiedon.getUTCMinutes(),
      sdkRecord.modifiedon.getUTCSeconds(),
    );

    expect(utcDate.getFullYear()).toBe(2020);
    expect(utcDate.getHours()).toBe(9); // Returns local date but we converted to UTC
  }
});

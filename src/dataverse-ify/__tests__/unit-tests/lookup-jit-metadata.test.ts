/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { EntityReference, odataify, setMetadataCache } from "../../..";
import { XrmStatic } from "../../../webapi/XrmStatic";
import { NodeXrmUtilityStatic } from "../../../webapi";
import { sdkify } from "../../sdkify/sdkify";

test("odataify lookups - pascal case navigation property", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });

  const account = {
    logicalName: accountMetadata.logicalName,
    cdsify_account1: new EntityReference(accountMetadata.logicalName, "123"),
  } as Account;

  (global as any).Xrm = new XrmStatic();
  Xrm.Utility = new NodeXrmUtilityStatic();
  Xrm.Utility.getEntityMetadata = jest.fn().mockImplementation((entityName: string, attributes?: string[]) => {
    console.log("getEntityMetadata", entityName, attributes);
    switch (entityName) {
      case "resource":
        return {
          EntitySetName: "Resources",
        } as Xrm.Metadata.EntityMetadata;
      default:
        return null;
    }
  });
  const odataEntity = await odataify("Create", account);
  console.log(odataEntity);
  expect(odataEntity).toBeDefined();

  if (odataEntity) {
    expect(odataEntity["cdsify_Account1@odata.bind"]).toEqual("accounts(123)");
  }
});

test("sdkify lookups - pascal case navigation property", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });

  const account = {
    accountid: "123",
    _cdsify_account1_value: "123",
    "_cdsify_account1_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "cdsify_Account1",
    "_cdsify_account1_value@Microsoft.Dynamics.CRM.lookuplogicalname": "account",
  };
  const sdkAccount = (await sdkify<Account>(account, accountMetadata.logicalName)) as Account;

  console.log(sdkAccount);
  expect(sdkAccount.cdsify_account1).toBeDefined();
  expect(sdkAccount.cdsify_account1?.id).toEqual("123");
  expect(sdkAccount.cdsify_account1?.entityType).toEqual("account");
});

/* eslint-disable @typescript-eslint/no-explicit-any */
import { accountMetadata, Account } from "../../../dataverse-gen/entities/Account";
import { EntityReference, odataify, setMetadataCache } from "../../..";
import { XrmApi } from "../../../webapi/XrmApi";
import { XrmUtility } from "../../../webapi";
import { sdkify } from "../../sdkify/sdkify";

test("odataify lookups - pascal case navigation property", async () => {
  setMetadataCache({ entities: { account: accountMetadata } });

  const account = {
    logicalName: accountMetadata.logicalName,
    cdsify_account1: new EntityReference(accountMetadata.logicalName, "123"),
  } as Account;

  (global as any).Xrm = new XrmApi();
  Xrm.Utility = new XrmUtility();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Xrm.Utility.getEntityMetadata = jest.fn().mockImplementation((entityName: string, _attributes?: string[]) => {
    return entityName === "resource"
      ? ({
          EntitySetName: "Resources",
        } as Xrm.Metadata.EntityMetadata)
      : null;
  });
  const odataEntity = await odataify("Create", account);
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

  expect(sdkAccount.cdsify_account1).toBeDefined();
  expect(sdkAccount.cdsify_account1?.id).toEqual("123");
  expect(sdkAccount.cdsify_account1?.entityType).toEqual("account");
});

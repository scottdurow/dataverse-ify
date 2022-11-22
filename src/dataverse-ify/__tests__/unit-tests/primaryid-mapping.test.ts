/* eslint-disable sonarjs/no-duplicate-string */
import { Account, accountMetadata } from "../../../dataverse-gen/entities/Account";
import { setMetadataCache, odataify } from "../../..";

describe("odataify", () => {
  it("leaves explicit primary attribute id and removes id", async () => {
    setMetadataCache({ entities: { account: accountMetadata } });

    // When odataify maps an output entity, the primary attribute id can be either id or explicity the name of the attribute
    // When id, it will be mapped over to the primary id attribute

    const explicitIdAttribute = {
      logicalName: accountMetadata.logicalName,
      accountid: "123",
      id: "456",
    } as Account;

    const explicitIdAttributeOutput = await odataify("Action", explicitIdAttribute);
    expect(explicitIdAttributeOutput.accountid).toBe("123");
    expect(explicitIdAttributeOutput.id).toBeUndefined();
  });

  it("adds primary attribute id and removes id", async () => {
    setMetadataCache({ entities: { account: accountMetadata } });

    // When odataify maps an output entity, the primary attribute id can be either id or explicity the name of the attribute
    // When id, it will be mapped over to the primary id attribute

    const explicitIdAttribute = {
      logicalName: accountMetadata.logicalName,
      id: "456",
    } as Account;

    const explicitIdAttributeOutput = await odataify("Action", explicitIdAttribute);
    expect(explicitIdAttributeOutput.accountid).toBe("456");
    expect(explicitIdAttributeOutput.id).toBeUndefined();
  });
});

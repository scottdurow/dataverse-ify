import { Contact, contactMetadata } from "../../../dataverse-gen/entities/Contact";
import { setMetadataCache } from "../../../metadata";
import { odataify } from "../..";

test("update removes primary ID attribute", async () => {
  setMetadataCache({ entities: { contact: contactMetadata } });
  const sdkRecord = {
    logicalName: contactMetadata.logicalName,
    contactid: "1234",
    lastname: "Test",
    lastonholdtime: new Date(),
  } as Contact;

  const odataRecord = await odataify("Update", sdkRecord);
  expect(odataRecord.contactid).toBeUndefined();
});

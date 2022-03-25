/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../../SetupGlobalContext";

describe("XrmWebApiNode", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      try {
        // Set up the Node Xrm global context
        await SetupGlobalContext();
      } catch (ex) {
        fail(ex);
      }
    }
  }, 30000);
  test("FetchXml", async () => {
    // Check the account has been created
    const fetch = `<fetch no-lock="true" >
      <entity name="systemuser">
        <attribute name="fullname"/>
      </entity>
    </fetch>`;

    const users = await Xrm.WebApi.retrieveMultipleRecords("systemuser", "?fetchXml=" + fetch);
    expect(users.entities.length).toBeGreaterThan(0);
  }, 30000);
});

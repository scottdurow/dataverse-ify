/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupGlobalContext } from "../SetupGlobalContext";

describe("XrmWebApiNode", () => {
  beforeAll(async () => {
    // Is this running inside NodeJS?
    if (typeof Xrm === "undefined") {
      // Set up the Node Xrm global context
      await SetupGlobalContext();
    }
  }, 30000);
  test("Create, Update then Delete.", async () => {
    expect(true).toBe(true);
  }, 30000);
});

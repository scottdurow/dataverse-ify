import { metadataCache } from "../dataverse-gen/metadata";
import { fixWebresourceXrm } from "../metadata/fixWebresourceXrm";
import { setMetadataCache } from "../metadata/MetadataCache";

// Add missing Jest functions
window.test = window.it;
window.test.each = (inputs: any) => (testName: any, test: any) =>
  inputs.forEach((args: any) => window.it(testName, () => test(...args)));

(window as any).test.todo = function () {
  return undefined;
};

// Hack for UCI where entity metadata is not loaded if running outside of a model-driven app
setMetadataCache(metadataCache);
fixWebresourceXrm();

require("../dataverse-ify/__tests__/integration-tests/activity.test");
require("../dataverse-ify/__tests__/integration-tests/addtoqueue.test");
require("../dataverse-ify/__tests__/integration-tests/calculaterollupfield.test");
require("../dataverse-ify/__tests__/integration-tests/CRUD.test");
require("../dataverse-ify/__tests__/integration-tests/customer.test");
require("../dataverse-ify/__tests__/integration-tests/get-metadata.test");
require("../dataverse-ify/__tests__/integration-tests/nullvalues.test");
require("../dataverse-ify/__tests__/integration-tests/pascalcase-navigation-property.test");
require("../dataverse-ify/__tests__/integration-tests/winopportunity.test");

/* eslint-disable @typescript-eslint/no-explicit-any */

// // Add missing Jest functions
window.test = window.it;
window.test.each = (inputs: any) => (testName: any, test: any) =>
  inputs.forEach((args: any) => window.it(testName, () => test(...args)));

(window as any).test.todo = function () {
  return undefined;
};

require("../dataverse-ify/__tests__/integration-tests/activity.test");
require("../dataverse-ify/__tests__/integration-tests/addtoqueue.test");
require("../dataverse-ify/__tests__/integration-tests/associate.test");
require("../dataverse-ify/__tests__/integration-tests/calculaterollupfield.test");
require("../dataverse-ify/__tests__/integration-tests/CRUD.test");
require("../dataverse-ify/__tests__/integration-tests/custom-api-bound-action.test");
require("../dataverse-ify/__tests__/integration-tests/custom-api-bound-function.test");
require("../dataverse-ify/__tests__/integration-tests/custom-api-executemultiple.test");
require("../dataverse-ify/__tests__/integration-tests/custom-api-unbound-action.test");
require("../dataverse-ify/__tests__/integration-tests/custom-api-unbound-function.test");
require("../dataverse-ify/__tests__/integration-tests/customer.test");
require("../dataverse-ify/__tests__/integration-tests/execute-crud.test");
require("../dataverse-ify/__tests__/integration-tests/execute-multiple-crud-changeset.test");
require("../dataverse-ify/__tests__/integration-tests/execute-multiple-crud-error.test");
require("../dataverse-ify/__tests__/integration-tests/execute-multiple-crud.test");
require("../dataverse-ify/__tests__/integration-tests/filecolumn.test");
require("../dataverse-ify/__tests__/integration-tests/get-metadata.test");
require("../dataverse-ify/__tests__/integration-tests/nullvalues.test");
require("../dataverse-ify/__tests__/integration-tests/odata-retrievemultiple.test");
require("../dataverse-ify/__tests__/integration-tests/pascalcase-navigation-property.test");
require("../dataverse-ify/__tests__/integration-tests/winopportunity.test");
require("../dataverse-ify/__tests__/integration-tests/fetchxml.test");

require("../webapi/node/__tests__/CRUD/Create.test");
require("../webapi/node/__tests__/CRUD/DeepInsert.test");
require("../webapi/node/__tests__/CRUD/Delete.test");
require("../webapi/node/__tests__/CRUD/FetchXml.test");
require("../webapi/node/__tests__/CRUD/response-errors.test");

require("../webapi/node/__tests__/Execute/associate.test");
require("../webapi/node/__tests__/Execute/custom-api-bound-action.test.ts");
require("../webapi/node/__tests__/Execute/custom-api-bound-function.test.ts");
require("../webapi/node/__tests__/Execute/custom-api-collection-bound-action.test.ts");
require("../webapi/node/__tests__/Execute/custom-api-unbound-action.test.ts");
require("../webapi/node/__tests__/Execute/execute-function.test");
require("../webapi/node/__tests__/Execute/execute-multiple-changeset-error.test");
require("../webapi/node/__tests__/Execute/execute-multiple-changeset.test");
require("../webapi/node/__tests__/Execute/execute-multiple.test");
require("../webapi/node/__tests__/Execute/execute.test");

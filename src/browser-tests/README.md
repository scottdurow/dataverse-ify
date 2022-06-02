# Dataverse-ify browser tests
Dataverse-ify integration tests can be run inside the browser without the node Xrm global context setup - but instead using the native Xrm global context.
This ensures that the behavior is consistent between both the node and native implementations.

## How it works

The browser tests use the jasmine test runner since the api almost exactly matches the jest api. 

There are some pollyfills added in `src\browser-tests\index.ts` to provide the missing jest features.

## Running the tests

To run the browser tests:

1. Run `npm run build-browser`. This will use web-pack to create the `dist-tests\browser-test.js` next to the `browser-tests.html` page. 

2. Configure a Fiddler autoresponder:
   `REGEX:(?insx).+\/dataverseify-tests\/(?'fname'[^?]*.*)`

   `<repo root folder>\dist-tests\${fname}`

3. In the browser, open the page:
   `https://org.api.crm3.dynamics.com/webresources/dataverseify-tests/browser-tests.html`

   You don't need to deploy any webresources since this is handled by the fiddler re-direct.

**Note:** There is a bug in the UCI where the `Xrm.WebApi` will not work if running outside a model-driven app container. The function `fixWebresourceXrm` adds the missing metadata that is needed to work outside a model-driven app.
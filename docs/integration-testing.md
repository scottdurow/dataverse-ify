# Integration testing using Dataverse-ify
`Dataverse-ify` comes with an implementation of the `Xrm.WebApi` that can be run in native node tests (or anywhere where `Xrm.WebApi` is not available such as a SPA)

To setup, simply:
1. At the root of your project, add a folder name 'config' 

2. Add a file `test.yaml`
   ```
   nodewebapi:
    server:
     version: 9.2
   ```

   Note: This file is not actually necessary but you will receive warnings when running integration tests without it.

3. Add a file called `.env` to the root of your project:

   ```
   DATAVERSEIFY_ENVIRONMENT_URL=https://org1bfe9950.api.crm3.dynamics.com
   ```

   If you wanted to use a client secret to authenticate rather than `dataverse-auth` you can add the variables:

   ```
   DATAVERSEIFY_CLIENT_ID=...
   DATAVERSEIFY_CLIENT_SECRET=...
   DATAVERSEIFY_TENANT=...
   ```

   Note: Ensure that the `.gitignore` file of your project includes .env files so that any secrets are not included in your code base.

4. Add a test along the lines of:

```
import { SetupGlobalContextIfUndefined } from "dataverse-ify/lib/webapi/node";

test("retrieveMultipleRecords", async () => {
  await SetupGlobalContextIfUndefined();
  const fetch = `<fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
  <entity name="my_entity">
    <attribute name="my_attribute" />
  </entity>
</fetch>`;
  const response = await Xrm.WebApi.retrieveMultipleRecords("my_entity", "?fetchXml=" + encodeURIComponent(fetch));
  console.log(response);
});
```

You will need to run `dataverse-auth` for the server you are using so that the authentication token is present locally:
```
npx dataverse-auth someorg.api.crm4.dynamics.com
```

When you run the test, the `dataverseify` implementation of the `WebApi` will be used and so you can run integration tests as though they were running inside the browser!

It's worth noting that this does not need any metadata generated until you start using the `dataverse-ify` `odataify` ,`sdkify` or the `DataverseClient`.

## Fiddler Debugging

It is helpful to debug your API calls inside Fiddler so you can see the actual requests/responses without deploying to a browser and using the F12 network trace.

To do this, you will need to configure a jest setup file, so add ` globalSetup: "./test-setup.js"` to your `jest.config.js` so it looks something like:

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src/"],
  testPathIgnorePatterns: ["test-values.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  globalSetup: "./test-setup.js",
};
```

Add the `test-setup.js` to your root:

```javascript
module.exports = async function (globalConfig, projectConfig) {
  require("dotenv").config();
  if (process.env["DATAVERSEIFY_USEPROXY"] === "1") {
    const httpProxy = process.env["DATAVERSEIFY_PROXY"];
    console.debug("Adding proxy:" + httpProxy);
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    process.env.https_proxy = httpProxy.replace("https:", "http:");
    process.env.http_proxy = httpProxy.replace("http:", "https:");
  }
};
```

This requires the `dotenv` module, so install it using:

```
npm install dotenv --save-dev
```

You can then define your proxy in the `.env` file as follows:

```
DATAVERSEIFY_USEPROXY=1
DATAVERSEIFY_PROXY=https://127.0.0.1:8888
```

This will then ensure that all your node `WebApi` requests go via the debug proxy.
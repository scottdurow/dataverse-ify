# Upgrading from version 1.x to 2 of Dataverse-ify

Version 2 of dataverse-ify has some minor breaking changes that are very easy to fix:

## CdsServiceClient is now DataverseClient

For obvious reasons, version 2 was a golden opportunity to remove the reference to CDS once and for all!

You will need to update your code from:

```typescript
import { XrmContextCdsServiceClient } from "dataverse-ify";
const client = new XrmContextCdsServiceClient(Xrm.WebApi);
```

to:

```typescript
import { XrmContextDataverseClient } from "dataverse-ify";
const client = new XrmContextDataverseClient(Xrm.WebApi);
```



## SetupGlobalContext now is located under lib/webapi/node

To allow a cleaner code base where the WebApi implementation for node is kept separate from the single page application implementation (SPA), the node specific types are now located under `lib/webapi/node`. 

In your integration tests you need to update from:

```typescript
import { SetupGlobalContext } from "dataverse-ify/lib/webapi";
```

to:

```typescript
import { SetupGlobalContext } from "dataverse-ify/lib/webapi/node";
```



## Configuring Integration Tests to run inside VSCode

One of the challenges with version 1 of `dataverse-ify` was the configuration of integration tests so that you did not need to check-in files that were local machine/environment specific. An example of this was the `FiddlerRoot.crt` certificate that was needed to debug, and the host Url that might change per developer. This has been improved in version 2 by allowing environment variables to be used or a `.env` file that is excluded inside your `.gitignore`. The need for the `FiddlerRoot.crt`  has been completed removed by using the `NODE_TLS_REJECT_UNAUTHORIZED` support that `node-fetch` provides.

You can still use the `<project-root>/config/test.yaml` as before to configure your integration tests using the following structure:

```yaml
# Configuration file for running integration tests
nodewebapi:
 server:
  host: https://org.api.crm.dynamics.com
  version: 9.2
```

Now in version 2, you can configure or override this using environment variables to support running integration tests using a client id and secret, inside a CI pipeline, or if you want to use a client secret rather than `dataverse-auth` when running integration tests locally. This is now the preferred way to configure your integration tests so your test.yaml only contains the bare minimum (and any other configuration you might need for your tests):
```yaml
# Configuration file for running integration tests
nodewebapi:
 server:
  version: 9.2
```

To use environment variables, create a `.env` file at the root of your project to look like the following:

```
DATAVERSEIFY_ENVIRONMENT_URL=https://org.api.crm.dynamics.com
```

If you wanted to use a client secret to authenticate rather than `dataverse-auth` you can add the variables:

```
DATAVERSEIFY_CLIENT_ID=...
DATAVERSEIFY_CLIENT_SECRET=...
DATAVERSEIFY_TENANT=...
```

These environment variables will then be used instead of (and override) the `test.yaml` configuration.

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

This will then ensure that all your node `WebApi` requests go via the debug proxy. You do not need to specify the `FiddlerRoot.crt` as you did before.


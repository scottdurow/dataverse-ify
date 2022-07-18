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


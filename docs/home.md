# Welcome to dataverse-ify!
```
       __      __                                        _ ____     
  ____/ /___ _/ /_____ __   _____  _____________        (_) __/_  __
 / __  / __ `/ __/ __ `/ | / / _ \/ ___/ ___/ _ \______/ / /_/ / / /
/ /_/ / /_/ / /_/ /_/ /| |/ /  __/ /  (__  )  __/_____/ / __/ /_/ / 
\__,_/\__,_/\__/\__,_/ |___/\___/_/  /____/\___/     /_/_/  \__, /  
        
```
The TypeScript library that gives you `IOrganizationService` SDK like types for use with typescript.

Works with [dataverse-gen](https://www.npmjs.com/package/dataverse-gen) and [dataverse-auth](https://www.npmjs.com/package/dataverse-auth) to create early bound classes.

## Design Goals
- Implement an API for use from TypeScript that is close to `IOrganizationService` for use in model-driven form JavaScript Web-Resources or PCF controls.
- Cross-Platform - pure NodeJS - runs inside VSCode on Windows/Mac/Linux
- Early bound generation of Entities/Actions/Functions with customizable templates.
- Be as unopinionated as possible - but still promote TypeScript best practices.
- Allow integration testing from inside VSCode/NodeJS tests.

## Differences to other libraries
1. Works right from inside VSCode
1. Provides similar syntax similar to the server-side Dataverse/CDS/XRM SDK (e.g. IOrganizationService create, update, delete, retrieve, retreiveMultiple, execute)
1. Deals with some of the limitations of the `WebApi` (e.g. not being able to null lookup fields).
1. Deals with the complexity of calling actions/functions via the `WebApi`.
1. The API is delivered as node modules that can be web-packed into your own libraries rather than loaded as externals.
1. Runs purely on `nodejs` and works cross-platform.
1. Delivered via `npm` - not NuGet - and so only needs VSCode.
1. Uses On-behalf-of authentication flow - no username/password/appid needed (this is also cross-platform using `dataverse-auth`).
1. Provides an implementation of `Xrm.WebApi.*` that can be used in NodeJS integration tests without running in the browser context.
1. Provides customisable ejs templates via `dataverse-gen eject` 
1. Provides a CLI for easily adding types/actions/functions to your project

## Quick Example
This is how you would create an account, opportunity, then win the opportunity in TypeScript running in the Form Context:
```
// Create account
const account1 = {
  logicalName: accountMetadata.logicalName,
  name: "Account 1",
} as Account;
account1.id = await cdsServiceClient.create(account1);

// Create opportunity
const opportunity1 = {
  logicalName: opportunityMetadata.logicalName,
  name: "Opportunity 1",
} as Opportunity;
opportunity1.customerid = Entity.toEntityReference(account1);
opportunity1.id = await cdsServiceClient.create(opportunity1);

// WinOpportunity
const winRequest = {
  logicalName: WinOpportunityMetadata.operationName,
  Status: 3,
  OpportunityClose: {
    logicalName: opportunitycloseMetadata.logicalName,
    description: "Sample Opportunity Close",
    subject: "Sample",
    opportunityid: Entity.toEntityReference(opportunity1),
  },
} as WinOpportunityRequest;
const winResponse = await cdsServiceClient.execute(winRequest);

// Get the Opportunity
const opportunityRetreived = (await cdsServiceClient.retrieve(opportunity1.logicalName, opportunity1.id, 
  "customerid",
])) as Opportunity;
console.log(opportunityRetreived.customerid?.id);
```
You can also use activity parties for creating activities:
```
letter1.regardingobjectid = Entity.toEntityReference(account1);
letter1.to = [
  {
    logicalName: "activityparty",
    partyid: Entity.toEntityReference(account1)
  } as ActivityParty
];
letter1.id = await cdsServiceClient.create(letter1);
```

More information - [Quick-Start](quick-start.md)
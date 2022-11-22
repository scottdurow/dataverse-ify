# Using dataverse‐ify without the CdsServiceClient
## "I don't want to use your stinky DataverseClient class..."

That's fine, you can still get the benefit from `dataverse-ify` by using `odataify` and `sdkify` to move objects back and forth between the `WebApi` format and the SDK style format:

```
const sdkStyleEntity = {
    logicalName: opportunityMetadata.logicalName,
    customerid: new EntityReference("account", "123"),
  } as Opportunity;

const webapiStyleEntity = odataify("Create",sdkStyleEntity);
await Xrm.WebApi.create("opportunity", webapiStyleEntity);
```

This is basically what the `DataverseClient` implementations does internally. See [quick-start](quick-start.md).

Then when you retrieve a record you can do the reverse using:
```
const response = await Xrm.WebApi.retrieveRecord("opportunity", id, query);
const sdkified = (await sdkify(response, "opportunity")) as Opportunity;
```

For some visibility of the transformations - take a look at some of the [unit tests](https://github.com/scottdurow/dataverse-ify/tree/master/src/dataverse-ify/__tests__/unit-tests).

The same goes for functions and actions:
```
const winRequest = {
    logicalName: WinOpportunityMetadata.operationName,
    Status: 3,
    OpportunityClose: {
      logicalName: opportunitycloseMetadata.logicalName,
      description: "Sample Opportunity Close",
      subject: "Sample",

      opportunityid: new EntityReference(opportunityMetadata.logicalName, "5deb00bd-5685-ea11-a812-000d3a7f4cf5"),
    },
  } as WinOpportunityRequest;

const webapiRequest = await odataify("Action",winRequest);
const response = await Xrm.WebApi.execute(webapiRequest);

```
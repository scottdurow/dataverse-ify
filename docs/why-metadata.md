# Why generate metadata?

Unlike the old SOAP endpoint, much of the metadata about requests and responses cannot be inferred from the types. For instance, Integers, Floats, Money, Decimal, Optionsets all are transmitted as simple Numbers. Additionally, much of the navigation properties rely on prior knowledge of the structure of the metadata.

For this reason, `dataverse-ify` expects some metadata to be available when using `odataify` and `sdkify`. This metadata is output when generating the types with `dataverse-gen` (see  [quick-start](quick-start.md) ).

You can then use the metadata in its entirety using:
```
setMetadataCache(metadataCache);
```

Or if you want to use just a subset, you can use:
```
setMetadataCache({
   entities: {
     opportunity: opportunityMetadata,
     opportunityclose: opportunitycloseMetadata,
   },
   actions: { WinOpportunity: WinOpportunityMetadata },
 });
```

The metadata objects are constants that are defined in the entity/action/function typescript files output from `dataverse-gen`.

If you wanted to you could populate the metadata yourself - or even dynamically load it from the server at runtime.
The metadata takes the form:
```
export const queueitemMetadata = {
  typeName: "mscrm.queueitem",
  logicalName: "queueitem",
  collectionName: "queueitems",
  primaryIdAttribute: "queueitemid",
  attributeTypes: {
    // Numeric Types - so we can convert to the right kind of number
    exchangerate: "Decimal",
    status: "Integer",
    ...
    // Optionsets
    statecode: "Optionset",
    ...
    // Date Formats
    workeridmodifiedon: "DateOnly:UserLocal",
    ...
  },
  // Navigation to indicate which entity logical names are valid for the relationship
  navigation: {
    transactioncurrencyid: ["mscrm.transactioncurrency"],
    queueid: ["mscrm.queue"],
    workerid: ["systemuser","team"],
    ...
  },
};
```
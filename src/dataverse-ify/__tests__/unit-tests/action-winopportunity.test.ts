import { WinOpportunityRequest, WinOpportunityMetadata } from "../../../dataverse-gen/actions/WinOpportunity";
import { opportunitycloseMetadata } from "../../../dataverse-gen/entities/OpportunityClose";
import { odataify } from "../../odataify/odataify";
import { EntityReference } from "../../../types";
import { setMetadataCache } from "../../../metadata";
import { opportunityMetadata } from "../../../dataverse-gen/entities/Opportunity";

test("odataify winopportunty", async () => {
  setMetadataCache({
    entities: {
      opportunity: opportunityMetadata,
      opportunityclose: opportunitycloseMetadata,
    },
    actions: { WinOpportunity: WinOpportunityMetadata },
  });
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

  const odata = await odataify("Action", winRequest);
  const expected = {
    Status: 3,
    OpportunityClose: {
      description: "Sample Opportunity Close",
      subject: "Sample",
      "@odata.type": "Microsoft.Dynamics.CRM.opportunityclose",
      "opportunityid@odata.bind": "opportunities(5deb00bd-5685-ea11-a812-000d3a7f4cf5)",
    },
  } as unknown;

  expect(JSON.stringify(odata)).toBe(JSON.stringify(expected));
  expect(odata.getMetadata).toBeDefined();
  const metadata = odata.getMetadata();
  const expectedMetadata = {
    parameterTypes: {
      OpportunityClose: { typeName: "mscrm.opportunityclose", structuralProperty: 5 },
      Caller: { typeName: "Edm.String", structuralProperty: 1 },
      Status: { typeName: "Edm.Int32", structuralProperty: 1 },
    },
    operationType: 0,
    operationName: "WinOpportunity",
  };
  expect(JSON.stringify(metadata)).toBe(JSON.stringify(expectedMetadata));
});

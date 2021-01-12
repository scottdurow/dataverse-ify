/* eslint-disable @typescript-eslint/no-explicit-any */
import { OperationType } from "../types/OperationType";
import { trimGuid } from "../types/Guid";

export async function whoAmI(): Promise<string> {
  const request = new (class {
    getMetadata(): any {
      return {
        parameterTypes: {},
        operationType: OperationType.Function,
        operationName: "WhoAmI",
      };
    }
    Target = {};
  })();
  const whoAmIResponse = await Xrm.WebApi.online.execute(request);
  const response = await whoAmIResponse.json();
  return trimGuid(response.UserId as string);
}

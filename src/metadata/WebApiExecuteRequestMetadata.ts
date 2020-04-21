import { OperationType } from "../types/OperationType";
import { Dictionary } from "../types/Dictionary";
import { ParameterType } from "../types/ParameterType";

export interface WebApiExecuteRequestMetadata {
  boundParameter?: string;
  parameterTypes: Dictionary<ParameterType>;
  operationType: OperationType;
  operationName: string;
}

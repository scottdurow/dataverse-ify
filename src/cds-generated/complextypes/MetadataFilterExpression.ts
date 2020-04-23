/* eslint-disable*/
export interface MetadataFilterExpression {
  Filters?: import("../complextypes/MetadataFilterExpression").MetadataFilterExpression[];
  FilterOperator?: import("../enums/LogicalOperator").LogicalOperator;
  Conditions?: import("../complextypes/MetadataConditionExpression").MetadataConditionExpression[];
}
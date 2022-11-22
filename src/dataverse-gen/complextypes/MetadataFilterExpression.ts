/* eslint-disable*/
export interface MetadataFilterExpression {
  Conditions?: import("../complextypes/MetadataConditionExpression").MetadataConditionExpression[];
  FilterOperator?: import("../enums/LogicalOperator").LogicalOperator;
  Filters?: import("../complextypes/MetadataFilterExpression").MetadataFilterExpression[];
}
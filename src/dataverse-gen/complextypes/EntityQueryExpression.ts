/* eslint-disable*/
export interface EntityQueryExpression {
  RelationshipQuery?: import("../complextypes/RelationshipQueryExpression").RelationshipQueryExpression;
  Properties?: import("../complextypes/MetadataPropertiesExpression").MetadataPropertiesExpression;
  LabelQuery?: import("../complextypes/LabelQueryExpression").LabelQueryExpression;
  KeyQuery?: import("../complextypes/EntityKeyQueryExpression").EntityKeyQueryExpression;
  Criteria?: import("../complextypes/MetadataFilterExpression").MetadataFilterExpression;
  AttributeQuery?: import("../complextypes/AttributeQueryExpression").AttributeQueryExpression;
}
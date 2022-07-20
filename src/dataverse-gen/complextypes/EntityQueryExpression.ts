/* eslint-disable*/
export interface EntityQueryExpression {
  AttributeQuery?: import("../complextypes/AttributeQueryExpression").AttributeQueryExpression;
  Criteria?: import("../complextypes/MetadataFilterExpression").MetadataFilterExpression;
  KeyQuery?: import("../complextypes/EntityKeyQueryExpression").EntityKeyQueryExpression;
  LabelQuery?: import("../complextypes/LabelQueryExpression").LabelQueryExpression;
  Properties?: import("../complextypes/MetadataPropertiesExpression").MetadataPropertiesExpression;
  RelationshipQuery?: import("../complextypes/RelationshipQueryExpression").RelationshipQueryExpression;
}
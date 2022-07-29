/* eslint-disable*/
export interface cdsify_BoundEchoResponse {
  cdsify_BoundOutBoolean?: boolean;
  cdsify_BoundOutDateTime?: Date;
  cdsify_BoundOutDecimal?: number;
  cdsify_BoundOutFloat?: number;
  cdsify_BoundOutGuid?: import("../../types/Guid").Guid;
  cdsify_BoundOutInteger?: number;
  cdsify_BoundOutMoney?: number;
  cdsify_BoundOutPicklist?: number;
  cdsify_BoundOutString?: string;
  cdsify_BoundOutStringArray?: string[];
  cdsify_BoundOutEntity?: import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
  cdsify_BoundOutEntityCollection?: any[];
  cdsify_BoundOutEntityReference?: import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
}
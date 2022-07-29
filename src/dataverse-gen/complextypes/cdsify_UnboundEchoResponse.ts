/* eslint-disable*/
export interface cdsify_UnboundEchoResponse {
  cdsify_UnboundOutBoolean?: boolean;
  cdsify_UnboundOutDateTime?: Date;
  cdsify_UnboundOutDecimal?: number;
  cdsify_UnboundOutFloat?: number;
  cdsify_UnboundOutGuid?: import("../../types/Guid").Guid;
  cdsify_UnboundOutInteger?: number;
  cdsify_UnboundOutMoney?: number;
  cdsify_UnboundOutPicklist?: number;
  cdsify_UnboundOutString?: string;
  cdsify_UnboundOutStringArray?: string[];
  cdsify_UnboundOutEntity?: import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
  cdsify_UnboundOutEntityCollection?: any[];
  cdsify_UnboundOutEntityReference?: import("../entities/cdsify_IntegrationTest").cdsify_IntegrationTest;
}
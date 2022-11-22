/* eslint-disable*/
export interface SecurityPrivilegeMetadata {
  CanBeBasic?: boolean;
  CanBeDeep?: boolean;
  CanBeEntityReference?: boolean;
  CanBeGlobal?: boolean;
  CanBeLocal?: boolean;
  CanBeParentEntityReference?: boolean;
  Name?: string;
  PrivilegeId?: import("../../types/Guid").Guid;
  PrivilegeType?: import("../enums/PrivilegeType").PrivilegeType;
}
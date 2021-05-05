/* eslint-disable*/
export interface AssociatedMenuConfiguration {
  ViewId?: import("../../types/Guid").Guid;
  QueryApi?: string;
  Order?: number;
  MenuId?: string;
  Label?: import("../complextypes/Label").Label;
  IsCustomizable?: boolean;
  Icon?: string;
  Group?: import("../enums/AssociatedMenuGroup").AssociatedMenuGroup;
  Behavior?: import("../enums/AssociatedMenuBehavior").AssociatedMenuBehavior;
  AvailableOffline?: boolean;
}
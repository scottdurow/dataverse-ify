/* eslint-disable*/
export interface AssociatedMenuConfiguration {
  AvailableOffline?: boolean;
  Behavior?: import("../enums/AssociatedMenuBehavior").AssociatedMenuBehavior;
  Group?: import("../enums/AssociatedMenuGroup").AssociatedMenuGroup;
  Icon?: string;
  IsCustomizable?: boolean;
  Label?: import("../complextypes/Label").Label;
  MenuId?: string;
  Order?: number;
  QueryApi?: string;
  ViewId?: import("../../types/Guid").Guid;
}
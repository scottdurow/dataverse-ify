/* eslint-disable*/
export interface CascadeConfiguration {
  Unshare?: import("../enums/CascadeType").CascadeType;
  Share?: import("../enums/CascadeType").CascadeType;
  RollupView?: import("../enums/CascadeType").CascadeType;
  Reparent?: import("../enums/CascadeType").CascadeType;
  Merge?: import("../enums/CascadeType").CascadeType;
  Delete?: import("../enums/CascadeType").CascadeType;
  Assign?: import("../enums/CascadeType").CascadeType;
}
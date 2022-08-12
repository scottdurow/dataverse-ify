// eslint-disable-next-line @microsoft/power-apps/avoid-unpub-api
export interface RetrieveMultipleResultEx extends Xrm.RetrieveMultipleResult {
  fetchXmlPagingCookie?: string;
  moreRecords?: boolean;
  totalRecordCount?: number;
  totalRecordCountExceeded?: boolean;
}

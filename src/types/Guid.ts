import { getHeaderValue } from "../webapi/utils/GetHeaderValue";

export type Guid = string;
export function trimGuid(guid: string): string {
  return guid.replace("{", "").replace("}", "");
}
export function guidEqual(guid1: string | undefined, guid2: string | undefined): boolean {
  if (guid1 && guid2) {
    return trimGuid(guid1).toLowerCase() === trimGuid(guid2).toLowerCase();
  } else if (!guid1 && !guid2) {
    return true;
  }

  return false;
}
export function getGuidFromODataUrl(url?: string) {
  if (url) {
    const guidMatch = /\(([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\)/g.exec(url);
    if (guidMatch && guidMatch.length > 0) return guidMatch[1];
  }
  throw new Error("Could not find the guid in response");
}

export function getGuidFromHeaders(headers: unknown) {
  const account1Url = getHeaderValue(headers, "odata-entityid") || getHeaderValue(headers, "Location");
  return getGuidFromODataUrl(account1Url);
}

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

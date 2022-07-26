// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getHeaderValue(headers: any, header: string): string | undefined {
  if (headers.get) {
    return headers.get(header);
  }
  const headerLower = header.toLowerCase();
  const headersRecord = headers._headers || headers;
  if (headersRecord) {
    for (const key in headersRecord) {
      if (key.toLowerCase() === headerLower) {
        return headersRecord[key];
      }
    }
  }
  return undefined;
}

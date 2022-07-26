export interface WebApiRequest {
  server: string;
  apiVersion: string;
  send(
    method: "POST" | "PATCH" | "PUT" | "GET" | "DELETE",
    uri: string,
    headers: Record<string, string>,
    payload?: unknown,
    skipStringify?: boolean,
  ): Promise<WebApiResponse>;
}

export interface WebApiResponse {
  headers: Record<string, string>;
  body?: string;
  data: Record<string, unknown>;
  status: number;
  statusText: string;
  // HTTP Response in range 200-299
  ok: boolean;
}

// Convert an http response batch part into a full response object with headers and body
export function getWebApiResponseFromBatchPart(part: string) {
  const lines = part.trim();

  // Find the start of the HTTP/
  let position = lines.indexOf("HTTP/");
  if (position === -1) {
    throw new Error("No HTTP response in batch response part");
  }

  const lineEnd = lines.indexOf("\n", position) + 1;
  const httpStatusLine = lines.substring(position, lineEnd).trim();
  const firstPart = httpStatusLine.indexOf(" ");
  const secondPart = httpStatusLine.indexOf(" ", firstPart + 1);
  const httpStatus = [
    httpStatusLine.substring(firstPart, secondPart).trim(),
    httpStatusLine.substring(secondPart).trim(),
  ];

  position = lineEnd;
  const headers: Record<string, string> = {};

  // Get headers
  do {
    const nextLine = lines.indexOf("\n", position);
    if (nextLine !== -1) {
      const line = lines.substring(position, nextLine).trim();
      if (line !== "") {
        const splitHeaderAt = line.indexOf(":");
        if (splitHeaderAt === -1) throw new Error(`Cannot extract header from ${line}`);
        const headerKey = line.substring(0, splitHeaderAt);
        const headerValue = line.substring(splitHeaderAt + 1);
        headers[headerKey] = headerValue.trim();
        position = nextLine + 1;
      }
    } else {
      position = -1;
    }
  } while (position !== -1);

  // Find the start of the content

  const status = parseInt(httpStatus[0]);
  return {
    ok: status >= 200 && status <= 299,
    status: status,
    statusText: httpStatus[1],
    headers: headers,
  } as WebApiResponse;
}

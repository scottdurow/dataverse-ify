const CONTENT_TYPE_HEADER = "Content-Type";

// Reads an HTTP response body and allows extracting of headers, batch and change set parts
export class HttpReader {
  currentPosition = 0;
  currentLine = "";
  content: string;
  contentLength: number;
  currentBoundary?: string;

  constructor(content: string) {
    this.content = content;
    this.contentLength = content.length;
  }

  public getLine(startPosition?: number): string | undefined {
    const startAt = startPosition || this.currentPosition;
    const nextLine = this.content.indexOf("\n", startAt);
    this.currentLine = this.content.substring(startAt, nextLine === -1 ? undefined : nextLine).trim();
    this.currentPosition = nextLine + 1;
    return this.currentLine;
  }

  public isEndOfContent() {
    return this.currentPosition >= this.content.length;
  }

  public getNextLine() {
    return this.getLine();
  }

  public readToContentType() {
    this.readToContent();
    const contentType = this.readToContentLine(CONTENT_TYPE_HEADER);
    if (!contentType) throw "Cannot find content type";
    return contentType;
  }

  public readToContent() {
    while (!this.isEndOfContent()) {
      if (this.content[this.currentPosition].trim() !== "") {
        return true;
      }
      this.currentPosition++;
    }
    return false;
  }

  public readToEndOfContent(boundary?: string) {
    this.readToContent();
    if (boundary) {
      const boundaryPosition = this.content.indexOf("--" + boundary, this.currentPosition);
      if (boundaryPosition === -1) throw `Cannot move to end of boundary '${boundary}'`;
      const content = this.content.substring(this.currentPosition, boundaryPosition).trim();
      this.currentPosition = boundaryPosition;
      return content;
    } else return this.content.substring(this.currentPosition + 1).trim();
  }

  public readToHTTP(): { status: number; statusText: string } {
    // Find the start of the HTTP/
    const httpStatusLine = this.readToContentLine("HTTP/");
    if (!httpStatusLine) throw "No HTTP line in response";

    const firstPart = httpStatusLine.indexOf(" ");
    const secondPart = httpStatusLine.indexOf(" ", firstPart + 1);
    return {
      status: Number.parseInt(httpStatusLine.substring(firstPart, secondPart).trim()),
      statusText: httpStatusLine.substring(secondPart).trim(),
    };
  }

  public readToBoundary(boundary: string) {
    const boundaryPosition = this.content.indexOf("--" + boundary, this.currentPosition);
    if (boundaryPosition === -1) throw `Boundary ${boundary} not found`;
    const boundaryLine = this.getLine(boundaryPosition);
    this.currentBoundary = boundaryLine;
  }

  public isEndOfBoundary() {
    // Is this the end of boundary parts (the boundary ends with --)
    return this.currentBoundary?.endsWith("--");
  }

  public readHeaders() {
    this.readToContent();
    const headers: Record<string, string> = {};
    let endOfHeader = false;
    do {
      const line = this.getNextLine();
      endOfHeader = !line || line === "" || line.startsWith("--");
      if (line && line !== "") {
        const splitHeaderAt = line.indexOf(":");
        if (splitHeaderAt === -1) throw `Cannot extract header from ${line}`;
        const headerKey = line.substring(0, splitHeaderAt);
        const headerValue = line.substring(splitHeaderAt + 1);
        headers[headerKey] = headerValue.trim();
      }
    } while (!endOfHeader);
    return headers;
  }

  private readToContentLine(startsWith: string) {
    // Find the start of the HTTP/
    const position = this.content.indexOf(startsWith, this.currentPosition);
    if (position === -1) {
      throw `${startsWith} not found in content`;
    }
    return this.getLine(position);
  }
}

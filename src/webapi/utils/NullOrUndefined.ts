export function isNullOrUndefined(value: unknown): boolean {
  return typeof value === "undefined" || value === null;
}

export function requireValue(argumentName: string, value: unknown): void {
  if (isNullOrUndefined(value)) {
    throw new Error(`${argumentName} is a required parameter`);
  }
}

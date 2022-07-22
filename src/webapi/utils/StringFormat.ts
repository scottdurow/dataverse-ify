export function StringFormat(text: string, ...args: string[]): string {
  return text.replace(/{(\d+)}/g, (match, num) => {
    return typeof args[num] !== "undefined" ? args[num] : match;
  });
}

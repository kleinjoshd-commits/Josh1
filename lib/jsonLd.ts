/** Serialize JSON-LD for a script tag. Static data only. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

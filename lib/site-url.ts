export function getSiteUrl(): string | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (!configured) return undefined;
  try {
    const url = new URL(configured);
    if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) return undefined;
    return url.origin;
  } catch { return undefined; }
}
export function isIndexable(): boolean {
  return Boolean(getSiteUrl() && process.env.SITE_PREVIEW !== "true" && process.env.VERCEL_ENV !== "preview");
}

export function validateReleaseConfig(env) {
  const issues = [];
  try {
    const url = new URL(env.NEXT_PUBLIC_SITE_URL ?? "");
    if (url.protocol !== "https:" || url.username || url.password || url.port || url.pathname !== "/" || url.search || url.hash || /(^localhost$|^127\.|\.local$|(^|\.)example\.(com|org|net)$)/i.test(url.hostname) || !url.hostname.includes(".")) throw Error();
  } catch { issues.push("NEXT_PUBLIC_SITE_URL: gerçek HTTPS alan adı gerekli (yol veya sorgu olmadan)."); }
  const number = (env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
  if (!/^[1-9]\d{9,14}$/.test(number) || number === "905551234567") issues.push("NEXT_PUBLIC_WHATSAPP_NUMBER: gerçek uluslararası WhatsApp numarası gerekli.");
  if (!(env.NEXT_PUBLIC_CONTACT_PHONE ?? "").trim() || (env.NEXT_PUBLIC_CONTACT_PHONE ?? "").replace(/\D/g, "") === "905551234567") issues.push("NEXT_PUBLIC_CONTACT_PHONE: gerçek telefon numarası gerekli.");
  if ((env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "").trim().length < 15) issues.push("NEXT_PUBLIC_CONTACT_ADDRESS: doğrulanmış açık adres gerekli.");
  if (!(env.NEXT_PUBLIC_WORKING_HOURS ?? "").trim()) issues.push("NEXT_PUBLIC_WORKING_HOURS: doğrulanmış çalışma saatleri gerekli.");
  for (const [key, max] of [["NEXT_PUBLIC_MAP_LATITUDE", 90], ["NEXT_PUBLIC_MAP_LONGITUDE", 180]]) {
    if (!(env[key] ?? "").trim() || !Number.isFinite(Number(env[key])) || Math.abs(Number(env[key])) > max) issues.push(key + ": geçerli harita koordinatı gerekli.");
  }
  if (env.SITE_PREVIEW === "true" || env.VERCEL_ENV === "preview") issues.push("Önizleme modu açık; yayın kontrolünde SITE_PREVIEW=false olmalı.");
  return issues;
}

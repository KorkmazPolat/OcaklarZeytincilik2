import { SITE_CONFIG } from "./constants";
export function whatsappLink(message: string) { return SITE_CONFIG.whatsappBase + encodeURIComponent(message); }
export function productMessage(name: string, option: string, quantity: number) {
  return `Merhaba, Ocaklar Zeytincilik sitenizden ulaşıyorum.\nÜrün: ${name}\n${option ? `Ambalaj: ${option}\n` : ""}Adet: ${quantity}\nGüncel fiyat, stok ve teslimat bilgisi alabilir miyim?`;
}

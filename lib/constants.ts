const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "905551234567").replace(/\D/g, "");
const latitude = Number(process.env.NEXT_PUBLIC_MAP_LATITUDE ?? "40.443001");
const longitude = Number(process.env.NEXT_PUBLIC_MAP_LONGITUDE ?? "27.755372");
export const SITE_CONFIG = {
  shopName: "Ocaklar Zeytincilik",
  tagline: "Doğanın En Saf Lezzetleri",
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS ?? "Ocaklar Köyü, Balıkesir",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "+90 555 123 45 67",
  whatsapp: "+" + whatsappNumber,
  whatsappBase: "https://wa.me/" + whatsappNumber + "?text=",
  googleMapsUrl: `https://maps.google.com/?q=${latitude},${longitude}`,
  googleMapsEmbedUrl: `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`,
  workingHours: process.env.NEXT_PUBLIC_WORKING_HOURS ?? "Hafta içi 08:00–18:00",
};

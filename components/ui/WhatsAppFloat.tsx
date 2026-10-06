"use client";
import { usePathname } from "next/navigation";
import { whatsappLink } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const pathname = usePathname();
  if (["/siparis", "/iletisim"].includes(pathname)) return null;
  return (
    <a
      href={whatsappLink("Merhaba, bilgi almak istiyorum.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#187744] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      aria-label="WhatsApp üzerinden iletişime geçin"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="sr-only">WhatsApp Sipariş</span>
    </a>
  );
}

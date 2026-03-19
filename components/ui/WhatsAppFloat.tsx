import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE_CONFIG.whatsappBase + "Merhaba,%20bilgi%20almak%20istiyorum."}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      aria-label="WhatsApp üzerinden iletişime geçin"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="sr-only">WhatsApp Sipariş</span>
      {/* Ping animation effect */}
      <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
    </a>
  );
}

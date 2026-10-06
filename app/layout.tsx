import { getSiteUrl, isIndexable } from "@/lib/site-url";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato, Dancing_Script } from "next/font/google";
import OrderProvider from "@/components/order/OrderProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl ?? "http://localhost:3000"),
  applicationName: "Ocaklar Zeytincilik",
  robots: { index: isIndexable(), follow: true },
  openGraph: { siteName: "Ocaklar Zeytincilik", locale: "tr_TR", type: "website" },
  twitter: { card: "summary_large_image" },
  title: "Ocaklar Zeytincilik | Balıkesir'in Doğal Lezzetleri",
  description: "Ocaklar, Balıkesir'den sofralarınıza doğal zeytin, zeytinyağı, sabun ve peynir ürünleri.",
};

export const viewport: Viewport = { themeColor: "#4a5c3a" };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      data-scroll-behavior="smooth"
      className={`${playfairDisplay.variable} ${lato.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <OrderProvider>
        <a href="#main-content" className="skip-link">İçeriğe geç</a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        </OrderProvider>
      </body>
    </html>
  );
}

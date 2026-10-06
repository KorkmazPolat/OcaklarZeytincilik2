"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { Menu, X, Leaf, ShoppingBag } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useOrder } from "@/components/order/OrderProvider";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const { items } = useOrder();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  useEffect(() => {
    if (!isOpen) return;
    function escape(event: KeyboardEvent) { if (event.key === "Escape") { setIsOpen(false); toggle.current?.focus(); } }
    function resize() { if (window.innerWidth >= 768) setIsOpen(false); }
    window.addEventListener("keydown", escape); window.addEventListener("resize", resize);
    return () => { window.removeEventListener("keydown", escape); window.removeEventListener("resize", resize); };
  }, [isOpen]);
  const links = [{ name: "Ana sayfa", href: "/" }, { name: "Ürünler", href: "/urunler" }, { name: "İletişim", href: "/iletisim" }];
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--color-saman)]/70 bg-[var(--color-krem)]/95 py-4 backdrop-blur-md">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
      <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
        <Leaf className="h-7 w-7 shrink-0 text-[var(--color-zeytun)]" />
        <span className="font-[family-name:var(--font-playfair-display)] text-base font-bold sm:text-xl">{SITE_CONFIG.shopName}</span>
      </Link>
      <nav aria-label="Ana menü" className="hidden items-center gap-7 md:flex">{links.map((link) => <Link key={link.href} href={link.href} aria-current={(pathname === link.href || (link.href === "/urunler" && pathname.startsWith("/urunler/"))) ? "page" : undefined} className={`py-2 text-sm font-semibold hover:text-[var(--color-zeytun)] ${(pathname === link.href || (link.href === "/urunler" && pathname.startsWith("/urunler/"))) ? "text-[var(--color-zeytun)] underline underline-offset-8" : ""}`}>{link.name}</Link>)}</nav>
      <div className="flex items-center gap-2">
        <Link href="/siparis" onClick={() => setIsOpen(false)} aria-label={`Sipariş listem, ${count} adet`} className="flex items-center gap-2 rounded-full border border-[var(--color-saman)] bg-white p-2.5 text-sm font-bold md:px-4">
          <ShoppingBag size={19} /><span className="hidden lg:inline">Listem</span><span className="min-w-5 text-center">{count}</span>
        </Link>
        <button ref={toggle} type="button" aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(!isOpen)} className="rounded-lg p-2.5 md:hidden">{isOpen ? <X /> : <Menu />}</button>
      </div>
    </div>
    {isOpen && <nav id="mobile-navigation" aria-label="Mobil menü" className="absolute inset-x-0 top-full flex flex-col gap-2 border-b border-[var(--color-saman)] bg-[var(--color-krem)] p-4 shadow-lg md:hidden">{links.map((link) => <Link key={link.href} href={link.href} aria-current={(pathname === link.href || (link.href === "/urunler" && pathname.startsWith("/urunler/"))) ? "page" : undefined} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 font-semibold hover:bg-[var(--color-saman)]">{link.name}</Link>)}</nav>}
  </header>;
}

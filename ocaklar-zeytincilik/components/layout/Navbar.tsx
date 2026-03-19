"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "/" },
    { name: "Ürünler", href: "/urunler" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-krem)]/90 backdrop-blur-md shadow-sm py-3 text-[var(--color-kahve)]"
          : "bg-transparent py-5 text-[var(--color-krem)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <Leaf className={`w-8 h-8 transition-transform group-hover:scale-110 ${scrolled ? "text-[var(--color-zeytun)]" : "text-[var(--color-krem)]"}`} />
            <span className="font-[family-name:var(--font-playfair-display)] font-bold text-lg md:text-xl tracking-wide">
              {SITE_CONFIG.shopName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors ${
                  scrolled 
                    ? "hover:text-[var(--color-zeytun)] text-[var(--color-kahve)]" 
                    : "hover:text-white/80 text-[var(--color-krem)]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--color-krem)] border-t border-[var(--color-saman)] shadow-lg py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[var(--color-kahve)] block py-2 font-medium hover:text-[var(--color-zeytun)]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

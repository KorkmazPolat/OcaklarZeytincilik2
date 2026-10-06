"use client";
import { useState } from "react";
import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
export default function ContactMap() {
  const [loaded, setLoaded] = useState(false);
  return <section className="bg-[var(--color-krem)] py-16" aria-labelledby="map-title">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <p className="mb-3 font-[family-name:var(--font-dancing-script)] text-xl text-[var(--color-zeytun)]">Ziyaret edin</p>
        <h2 id="map-title" className="mb-4 font-[family-name:var(--font-playfair-display)] text-3xl font-bold md:text-4xl">Ocaklar’da buluşalım</h2>
        <p className="leading-relaxed opacity-80">{SITE_CONFIG.address}</p>
      </div>
      <div className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-3xl border border-[var(--color-saman)] bg-[var(--color-saman)] p-6">
        {loaded ? <iframe title="Ocaklar Zeytincilik haritası" src={SITE_CONFIG.googleMapsEmbedUrl} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer" /> :
          <div className="max-w-md text-center">
            <MapPin className="mx-auto mb-4 h-12 w-12 text-[var(--color-zeytun)]" strokeWidth={1.5} />
            <h3 className="mb-3 text-xl font-bold">Yolunuzu bize çevirin</h3>
            <p className="mb-5 text-sm leading-relaxed">Harita, siz açtığınızda Google üzerinden yüklenir.</p>
            <button onClick={() => setLoaded(true)} className="rounded-xl bg-[var(--color-zeytun)] px-6 py-3 font-semibold text-white">Haritayı yükle</button>
            <Link href="/gizlilik" className="mt-4 block text-xs underline">Harita ve gizlilik hakkında</Link>
          </div>}
      </div>
      <div className="mt-6 text-center"><a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-saman)] bg-white px-6 py-3 font-semibold"><Navigation size={18} /> Google Haritalar’da yol tarifi</a></div>
    </div>
  </section>;
}

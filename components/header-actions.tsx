"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { Locale } from "@/lib/site";

export function HeaderActions({ locale, labels, ids }: { locale: Locale; labels: string[]; ids: string[] }) {
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState("");
  useEffect(() => { const update = () => setHash(window.location.hash); update(); window.addEventListener("hashchange", update); return () => window.removeEventListener("hashchange", update); }, []);
  const pathname = usePathname();
  const home = locale === "id" ? "/" : "/en";
  const other = locale === "id" ? (pathname === "/" ? "/en" : `/en${pathname}`) : (pathname === "/en" ? "/" : pathname.replace(/^\/en/, ""));
  const switched = other.replace(/^\/en\/produk\//, "/en/products/").replace(/^\/products\//, "/produk/");
  return <><div className="nav-actions">
    <Link href={`${switched}${hash}`} className="locale-switch" hrefLang={locale === "id" ? "en" : "id"} aria-label={locale === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}><span className={locale === "id" ? "active" : ""}>ID</span><i /><span className={locale === "en" ? "active" : ""}>EN</span></Link>
    <Link href={`${home}#kontak`} className="button button-small">{locale === "id" ? "Konsultasi" : "Consultation"} <span aria-hidden="true">→</span></Link>
  </div>
  <div className="mobile-menu"><button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={locale === "id" ? "Buka menu" : "Open menu"} onClick={() => setOpen(!open)}><span /><span /><span /></button>
    {open && <nav id="mobile-navigation" aria-label={locale === "id" ? "Navigasi mobile" : "Mobile navigation"} className="mobile-panel"><Link href={`${home}#home`} onClick={() => setOpen(false)}>{locale === "id" ? "Beranda" : "Home"}</Link>{labels.map((label, i) => <Link key={ids[i]} href={`${home}#${ids[i]}`} onClick={() => setOpen(false)}>{label}</Link>)}<Link href={`${switched}${hash}`} onClick={() => setOpen(false)}>{locale === "id" ? "English" : "Indonesia"}</Link></nav>}
  </div></>;
}

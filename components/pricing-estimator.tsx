"use client";

import { useState } from "react";
import type { Locale } from "@/lib/site";
import { whatsappUrl } from "@/lib/site";

const catalog = [
  { id: "company", idLabel: "Website company profile", enLabel: "Corporate website", price: 3000000 },
  { id: "wedding-lite", idLabel: "Undangan digital Lite", enLabel: "Digital invitation Lite", price: 499000 },
  { id: "wedding-signature", idLabel: "Undangan digital Signature", enLabel: "Digital invitation Signature", price: 1500000 },
  { id: "wedding-premium", idLabel: "Undangan digital Premium", enLabel: "Digital invitation Premium", price: 2500000 },
  { id: "pos", idLabel: "Aplikasi kasir / POS", enLabel: "Point of sale", price: 7500000 },
  { id: "dashboard", idLabel: "Dashboard operasional", enLabel: "Operations dashboard", price: 10000000 },
  { id: "web", idLabel: "Aplikasi web custom", enLabel: "Custom web app", price: 15000000 },
  { id: "mobile", idLabel: "Aplikasi mobile", enLabel: "Mobile app", price: 25000000 },
  { id: "ai", idLabel: "AI workflow", enLabel: "AI workflow", price: 3000000 }
] as const;

function rupiah(amount: number) { return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(amount); }

export function PricingEstimator({ locale }: { locale: Locale }) {
  const id = locale === "id";
  const [service, setService] = useState<(typeof catalog)[number]["id"]>("company");
  const [bilingual, setBilingual] = useState(false);
  const [cms, setCms] = useState(false);
  const selected = catalog.find(x => x.id === service)!;
  const addons = service === "company" ? (bilingual ? 1500000 : 0) + (cms ? 2000000 : 0) : 0;
  const total = selected.price + addons;
  const inquiry = `${selected[id ? "idLabel" : "enLabel"]}${service === "company" ? `${bilingual ? ", bilingual ID/EN" : ""}${cms ? ", CMS" : ""}` : ""}; ${id ? "estimasi awal" : "starting estimate"} ${rupiah(total)}`;
  return <div className="estimator ref-estimator"><div><span className="eyebrow">{id ? "KALKULATOR ESTIMASI" : "ESTIMATE BUILDER"}</span><h3>{id ? "Susun gambaran biaya awal" : "Build an early cost outline"}</h3><p>{id ? "Pilih layanan dan tambahan yang relevan. Hasilnya adalah angka awal untuk diskusi, bukan penawaran final." : "Choose a service and relevant additions. This is a starting point for discussion, not a final quote."}</p></div><div className="estimator-controls"><label>{id ? "Jenis layanan" : "Service"}<select value={service} onChange={e => setService(e.target.value as typeof service)}>{catalog.map(x => <option key={x.id} value={x.id}>{x[id ? "idLabel" : "enLabel"]}</option>)}</select></label>{service === "company" && <div className="ref-addons"><label><input type="checkbox" checked={bilingual} onChange={e => setBilingual(e.target.checked)} /> {id ? "Bilingual ID/EN" : "Bilingual ID/EN"} <span>+{rupiah(1500000)}</span></label><label><input type="checkbox" checked={cms} onChange={e => setCms(e.target.checked)} /> CMS <span>+{rupiah(2000000)}</span></label></div>}</div><div className="estimate-result"><span>{id ? "Rincian estimasi" : "Estimate breakdown"}</span><div className="ref-estimate-lines"><div><span>{selected[id ? "idLabel" : "enLabel"]}</span><b>{rupiah(selected.price)}</b></div>{service === "company" && bilingual && <div><span>Bilingual ID/EN</span><b>{rupiah(1500000)}</b></div>}{service === "company" && cms && <div><span>CMS</span><b>{rupiah(2000000)}</b></div>}</div><strong>{rupiah(total)}</strong><a className="button" href={whatsappUrl(inquiry, locale)} target="_blank" rel="noreferrer">{id ? "Bahas estimasi" : "Discuss estimate"} ↗</a></div></div>;
}

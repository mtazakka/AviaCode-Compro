import Link from "next/link";
import { Logo } from "./logo";
import { HeaderActions } from "./header-actions";
import type { Locale } from "@/lib/site";

const ids = ["layanan", "portfolio", "produk", "harga", "proses", "tentang", "faq", "kontak"];

export function Header({ locale, labels }: { locale: Locale; labels: string[] }) {
  const home = locale === "id" ? "/" : "/en";
  return <header className="site-header"><div className="container nav-wrap">
    <Link href={home} className="logo-link"><Logo /></Link>
    <nav aria-label={locale === "id" ? "Navigasi utama" : "Primary navigation"} className="desktop-nav">
      <Link href={`${home}#home`}>{locale === "id" ? "Beranda" : "Home"}</Link>
      {labels.map((label, i) => <Link key={ids[i]} href={`${home}#${ids[i]}`}>{label}</Link>)}
    </nav>
    <HeaderActions locale={locale} labels={labels} ids={ids} />
  </div></header>;
}

import Link from "next/link";
import { Logo } from "@/components/logo";

export default function NotFound() {
  return <main className="legal-main"><div className="container legal-wrap"><Logo /><div style={{ marginTop: 80 }}><span className="eyebrow">404</span><h1>Halaman tidak ditemukan.</h1><p className="legal-updated">The page you requested could not be found.</p><Link className="button" href="/">Kembali ke beranda</Link></div></div></main>;
}

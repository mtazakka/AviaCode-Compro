import Link from "next/link";
import { Header } from "./header";
import { SimpleFooter } from "./detail-page";
import { copy } from "@/lib/content";
import type { Locale } from "@/lib/site";

export function LegalPage({ locale, type }: { locale: Locale; type: "privacy" | "terms" }) {
  const id = locale === "id"; const home = id ? "/" : "/en"; const privacy = type === "privacy";
  const sections = privacy ? (id ? [
    ["Data yang kami terima", "Saat Anda mengirim formulir, kami menerima nama, email, perusahaan dan nomor WhatsApp bila diisi, layanan yang diminati, isi pesan, persetujuan, dan data teknis minimum yang diperlukan untuk mencegah spam."],
    ["Cara data digunakan", "Data digunakan untuk menanggapi pertanyaan, menyiapkan konsultasi, menjaga keamanan formulir, dan memenuhi kewajiban yang berlaku. Kami tidak menjual data kontak."],
    ["Penyedia layanan", "Pengiriman formulir dapat menggunakan penyedia email transaksional. Hosting, analytics, atau layanan lain hanya digunakan bila dikonfigurasi dan akan tunduk pada kebijakan penyedianya."],
    ["Retensi dan hak Anda", "Data disimpan selama diperlukan untuk percakapan bisnis, keamanan, dan kewajiban hukum. Anda dapat meminta akses, koreksi, atau penghapusan melalui email resmi kami."],
    ["Keamanan", "Kami menerapkan pembatasan akses dan langkah teknis yang wajar. Namun, tidak ada transmisi internet yang dapat dijamin aman sepenuhnya."],
    ["Kontak", "Pertanyaan privasi dapat dikirim ke mtazakka@aviacode.site atau aldids@aviacode.site."]
  ] : [
    ["Information we receive", "When you submit the form, we receive your name, email, company and WhatsApp number if provided, service interest, message, consent, and minimum technical data needed to limit spam."],
    ["How information is used", "Information is used to respond, prepare consultations, secure the form, and meet applicable obligations. We do not sell contact data."],
    ["Service providers", "Form delivery may use a transactional email provider. Hosting, analytics, or other services are used only when configured and remain subject to their own policies."],
    ["Retention and your rights", "Data is kept as long as needed for business communication, security, and legal obligations. You may request access, correction, or deletion through our official emails."],
    ["Security", "We apply reasonable access controls and technical measures. No internet transmission can be guaranteed completely secure."],
    ["Contact", "Privacy questions can be sent to mtazakka@aviacode.site or aldids@aviacode.site."]
  ]) : (id ? [
    ["Informasi awal", "Konten situs ini memberikan informasi umum. Estimasi harga, timeline, dan kemampuan layanan belum menjadi penawaran mengikat sampai dituangkan dalam proposal atau perjanjian tertulis."],
    ["Scope proyek", "Deliverable, revisi, timeline, biaya pihak ketiga, hak atas source code, deployment, dan dukungan ditetapkan per proyek. Perubahan di luar scope dapat memengaruhi biaya serta jadwal."],
    ["Produk dan layanan", "Avia AI Office berstatus MVP. Security Workspace masih dalam pengembangan. Fitur, harga, dan ketersediaan dapat berubah setelah validasi."],
    ["Keamanan terotorisasi", "Assessment dan pentest hanya dilakukan dengan otorisasi tertulis, target, teknik, serta periode yang disetujui. Klien bertanggung jawab memastikan kewenangannya atas target."],
    ["Pihak ketiga", "Domain, hosting, API, lisensi, dan layanan pihak ketiga tunduk pada syarat serta ketersediaan penyedia masing-masing."],
    ["Perubahan ketentuan", "Ketentuan dapat diperbarui untuk mencerminkan layanan atau kewajiban yang berubah. Versi terbaru ditampilkan di halaman ini."]
  ] : [
    ["Preliminary information", "This website provides general information. Price estimates, timelines, and capabilities are not binding offers until set out in a written proposal or agreement."],
    ["Project scope", "Deliverables, revisions, timelines, third-party costs, source-code rights, deployment, and support are defined per project. Out-of-scope changes may affect cost and schedule."],
    ["Products and services", "Avia AI Office is an MVP. Security Workspace is in development. Features, pricing, and availability may change after validation."],
    ["Authorized security", "Assessments and pentests are performed only with written authorization and agreed targets, techniques, and testing windows. Clients are responsible for authority over each target."],
    ["Third parties", "Domains, hosting, APIs, licenses, and third-party services remain subject to each provider’s terms and availability."],
    ["Changes", "These terms may be updated to reflect changing services or obligations. The latest version appears on this page."]
  ]);
  return <><Header locale={locale} labels={copy[locale].nav} /><main className="legal-main"><div className="container legal-wrap"><Link className="back-link" href={home}>← {id ? "Kembali ke beranda" : "Back to home"}</Link><span className="eyebrow">LEGAL · AVIA CODE</span><h1>{privacy ? (id ? "Kebijakan Privasi" : "Privacy Policy") : (id ? "Syarat & Ketentuan" : "Terms & Conditions")}</h1><p className="legal-updated">{id ? "Terakhir diperbarui: 11 Oktober 2026" : "Last updated: October 11, 2026"}</p>{sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}</div></main><SimpleFooter locale={locale} /></>;
}

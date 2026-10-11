# Technical SEO & Content Architecture — Avia Code

## Objective
Make pages genuinely helpful to prospects looking for website development, custom business applications, POS, supply/operational dashboards, wedding digital invitations, workflow automation, and scoped security assessment in Indonesian; offer equivalent English content. Avoid keyword stuffing and claims without evidence. This is a structure/optimization plan, not a promise of traffic/rankings.

## SEO-friendly site layout
Indonesian homepage: `https://aviacode.site/`
English homepage: `https://aviacode.site/en`
Same-page anchor navigation for About/FAQ/Contact and main sections. Do not create `/about`, `/faq`, or `/contact` separate routes.
Service detail routes:
- `/layanan/company-profile`
- `/layanan/undangan-digital`
- `/layanan/aplikasi-kasir-pos`
- `/layanan/dashboard-operasional`
- `/layanan/aplikasi-custom`
- `/layanan/ai-automation`
- `/layanan/security-assessment`
Mirrored English paths under `/en/layanan/...` (could use `/en/services/...` if route mappings are consistent and explicit).
Project details `/portfolio/pos-travel-alharom`, `/portfolio/dashboard-supply`, `/portfolio/undangan-digital` and EN equivalents.
Products `/products/ai-office`, `/products/security-workspace` and EN equivalents.
Legal `/privacy-policy`, `/terms` and translated variants after legal review.

## Proposed metadata examples

### Homepage ID
Title: `Avia Code | Jasa Pembuatan Website & Aplikasi Custom`
Description: `Avia Code membantu bisnis membangun website, aplikasi kasir, dashboard operasional, software custom, dan otomasi AI. Konsultasikan kebutuhan proyek Anda.`
H1: `Jasa Pembuatan Website, Aplikasi, dan Solusi Digital Sesuai Kebutuhan Bisnis`
Canonical: `https://aviacode.site/`

### Homepage EN
Title: `Avia Code | Custom Websites & Business Software`
Description: `Avia Code builds company websites, POS systems, operational dashboards, custom applications, and AI workflows for businesses. Discuss your project with us.`
H1: `Custom Website, Business Software, and Digital Solutions Built Around Your Needs`
Canonical: `https://aviacode.site/en`

### Company website service
Title ID: `Jasa Website Company Profile Profesional | Avia Code`
Description ID: `Bangun website perusahaan yang responsif, profesional, dan mudah dihubungi. Lihat paket, cakupan layanan, proses pengembangan, dan estimasi harga Avia Code.`

### POS service
Title ID: `Jasa Pembuatan Aplikasi Kasir & POS Custom | Avia Code`
Description ID: `Butuh dashboard kasir untuk usaha travel, retail, atau layanan? Avia Code membantu membuat sistem POS sesuai proses bisnis, transaksi, dan kebutuhan laporan.`

### Operations dashboard
Title ID: `Pembuatan Dashboard Operasional & Supply | Avia Code`
Description ID: `Pengembangan dashboard supply, monitoring data, manajemen aktivitas, hak akses, dan laporan untuk kebutuhan operasional bisnis. Konsultasikan scope bersama Avia Code.`

### Wedding invitation
Title ID: `Jasa Undangan Digital Custom & Premium | Avia Code`
Description ID: `Undangan pernikahan digital dengan desain personal, informasi acara, galeri, peta, dan fitur tamu sesuai paket. Lihat contoh serta estimasi harga.`

### AI Office
Title ID: `Avia AI Office (MVP) | AI Agent & Workflow Workspace`
Description ID: `Kenali Avia AI Office, produk MVP untuk mengelola AI agent, tugas, workflow, dan pemantauan otomatisasi. Ajukan minat demo atau pilot terbatas.`

### Security
Title ID: `Konsultasi Security Assessment & Pentesting Berizin | Avia Code`
Description ID: `Konsultasi pengujian keamanan aplikasi berdasarkan izin dan scope tertulis, dengan pelaporan temuan dan rekomendasi perbaikan.`

Generate unique, accurate metadata per locale and route; don't duplicate a generic description across every page. Use OG/Twitter images generated from Avia Code branding, not fake client screenshots.

## Localization / indexing
- Use **separate crawlable URLs** per language; do not rely on client-only text switches without distinct indexed pages.
- Each page has a self-referencing canonical and reciprocal `hreflang="id"` and `hreflang="en"`; homepage may also link `x-default` to default ID URL.
- `<html lang="id">` and `<html lang="en">` respectively.
- Language switch preserves equivalent route and anchor where possible; visible labels fully translated including FAQ answers, errors, consent, form and pricing caveats.
- Avoid IP-based forced locale redirects.
- HTML content SSR/SSG and crawlable; navigation uses real anchors.

## Structured data and other SEO tasks
- Use `Organization` JSON-LD on homepage with: name Avia Code, url https://aviacode.site/, logo pointing to an actual asset once live, email and telephone as appropriate, and available founder names. Do not invent physical office address or certifications.
- Consider `WebSite` and `BreadcrumbList` on detail pages, provided visible content matches. Avoid artificially marking unverified reviews/ratings; don't promise FAQ rich snippets.
- `sitemap.xml` must list real indexable routes and language alternates; `robots.txt` should allow indexable public pages and exclude any internal staging/CRM functions as applicable.
- Image alt text must describe the actual illustration (e.g. `Ilustrasi konsep dashboard kasir POS`, not `Screenshot sistem klien`); use responsive formats/sizes and optimize LCP/CLS.
- Ensure one descriptive H1 per page, logical H2/H3, section anchors with scroll-margin-top, descriptive internal links, breadcrumbs on detail pages, keyboard-friendly controls and visible focus.
- Set up Google Search Console and submit sitemap **after** deployment/DNS. Monitor indexing and queries; no guaranteed ranking.
- Use actual case-study details when verified, practical explanations and original UI images to build credibility. Do not mass-produce thin keyword pages.

## Official references
- SEO starter guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Localized versions/hreflang: https://developers.google.com/search/docs/specialty/international/localized-versions
- Organization structured data: https://developers.google.com/search/docs/appearance/structured-data/organization
- Structured data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies

import type { Locale } from "./site";

export const portfolio = [
  {
    slug: "travel-alharom-bina-hati-pos",
    tag: { id: "Point of Sale", en: "Point of Sale" },
    title: { id: "Travel Alharom Bina Hati POS", en: "Travel Alharom Bina Hati POS" },
    summary: {
      id: "Konsep sistem kasir untuk membantu pencatatan transaksi dan operasional travel dalam satu alur kerja yang lebih rapi.",
      en: "A point-of-sale system concept designed to bring travel transactions and day-to-day operations into a cleaner workflow."
    },
    challenge: { id: "Pencatatan transaksi operasional perlu mudah digunakan, terstruktur, dan siap ditelusuri kembali.", en: "Operational transactions need to be easy to record, structured, and simple to trace." },
    solution: { id: "Alur POS terfokus dengan ringkasan transaksi, pengelolaan data, dan tampilan yang disesuaikan dengan proses kerja pengguna.", en: "A focused POS flow with transaction summaries, data management, and an interface tailored to the users’ workflow." },
    note: { id: "Visual pada situs merupakan ilustrasi konsep, bukan tangkapan layar produksi.", en: "Website visuals are concept illustrations, not production screenshots." },
    demo: null
  },
  {
    slug: "bea-cukai-tangerang-supply-dashboard",
    tag: { id: "Dashboard Operasional", en: "Operations Dashboard" },
    title: { id: "Dashboard Supply Bea Cukai Tangerang", en: "Tangerang Customs Supply Dashboard" },
    summary: {
      id: "Dashboard untuk menyederhanakan pemantauan supply dan membantu tim membaca kondisi operasional secara terpusat.",
      en: "A dashboard concept for simplifying supply monitoring and giving teams a centralized view of operations."
    },
    challenge: { id: "Data supply yang tersebar membuat pemantauan rutin dan tindak lanjut menjadi lebih lambat.", en: "Scattered supply data can slow routine monitoring and follow-up." },
    solution: { id: "Tampilan ringkas dengan status, filter, tabel, dan indikator yang membantu pengguna memprioritaskan pekerjaan.", en: "A concise view with statuses, filters, tables, and indicators that helps users prioritize work." },
    note: { id: "Nama proyek digunakan sebagai konteks portofolio; tidak ada klaim hasil atau metrik yang belum diverifikasi.", en: "The project name is used as portfolio context; no unverified outcomes or metrics are claimed." },
    demo: null
  },
  {
    slug: "wedding-invitation",
    tag: { id: "Undangan Digital", en: "Digital Invitation" },
    title: { id: "Wedding Invitation", en: "Wedding Invitation" },
    summary: {
      id: "Undangan pernikahan digital yang responsif, personal, mudah dibagikan, dan memiliki demo publik yang dapat dicoba.",
      en: "A responsive, personal, and shareable digital wedding invitation with a public demo you can explore."
    },
    challenge: { id: "Pasangan memerlukan undangan yang terasa personal sekaligus praktis untuk tamu di berbagai perangkat.", en: "Couples need an invitation that feels personal while remaining practical across devices." },
    solution: { id: "Halaman undangan dengan cerita, detail acara, galeri, peta, RSVP, dan elemen personal sesuai paket yang disepakati.", en: "An invitation page with story, event details, gallery, maps, RSVP, and personal elements based on the agreed package." },
    note: { id: "Demo eksternal tersedia dan dibuka di tab baru.", en: "A live external demo is available and opens in a new tab." },
    demo: "https://undangan-nikah-gold-five.vercel.app/"
  }
] as const;

export const products = [
  {
    slug: "avia-ai-office",
    status: "MVP",
    title: { id: "Avia AI Office", en: "Avia AI Office" },
    summary: { id: "Pilot otomasi kerja berbasis AI untuk membantu tugas repetitif, pencarian informasi, dan penyusunan output internal.", en: "An AI workflow pilot for repetitive tasks, information retrieval, and internal content generation." },
    detail: { id: "Setiap pilot dimulai dari satu workflow terukur. Integrasi, batas akses, pemeriksaan manusia, dan sumber data dibahas sebelum implementasi. Kemampuan aktual bergantung pada sistem serta data klien.", en: "Each pilot starts with one measurable workflow. Integrations, access boundaries, human review, and data sources are agreed before implementation. Actual capabilities depend on the client’s systems and data." },
    price: { id: "Pilot berdasarkan konsultasi", en: "Pilot by consultation" },
    priceNote: { id: "Harga dan kemampuan MVP perlu divalidasi sebelum penawaran.", en: "MVP capabilities and pricing need validation before an offer." }
  },
  {
    slug: "security-workspace",
    status: "IN DEVELOPMENT",
    title: { id: "Security Workspace", en: "Security Workspace" },
    summary: { id: "Konsep ruang kerja terstruktur untuk mengelola temuan, scope, bukti, dan progres pengujian keamanan.", en: "A structured workspace concept for managing security findings, scope, evidence, and testing progress." },
    detail: { id: "Produk ini masih dalam pengembangan. Aktivitas pentest Avia Code hanya dilakukan atas izin tertulis, pada target dan periode yang disepakati, serta tidak menjanjikan ditemukannya kerentanan tertentu.", en: "This product is still in development. Avia Code performs penetration testing only with written authorization, against agreed targets and time windows, with no promise that any specific vulnerability will be found." },
    price: { id: "Belum dirilis", en: "Not released" },
    priceNote: { id: "Daftar minat tersedia melalui konsultasi.", en: "Register interest through a consultation." }
  }
] as const;

export const prices = [
  ["Company profile", "Rp3 jt"], ["Undangan digital", "Rp499 rb"], ["Undangan signature", "Rp1,5 jt"],
  ["POS", "Rp7,5 jt"], ["Dashboard operasional", "Rp10 jt"], ["Custom web app", "Rp15 jt"],
  ["Mobile app", "Rp25 jt"], ["AI workflow", "Rp3 jt"], ["Security assessment", "Rp7,5 jt"], ["Pentest", "Rp12 jt"]
] as const;

export const copy = {
  id: {
    locale: "id" as Locale,
    nav: ["Layanan", "Portofolio", "Produk", "Harga", "Proses", "Tentang", "FAQ", "Kontak"],
    heroEyebrow: "Software yang mengikuti cara bisnis Anda bekerja",
    heroTitle: "Dari proses manual menjadi produk digital yang",
    heroAccent: "jelas, berguna, dan siap berkembang.",
    heroBody: "Avia Code merancang dan membangun website, sistem operasional, POS, dashboard, undangan digital, otomasi AI, dan assessment keamanan—dengan scope, timeline, serta status produk yang transparan.",
    consult: "Konsultasi kebutuhan",
    seeWork: "Lihat portofolio",
    sectionServices: "Layanan yang konkret, bukan paket generik",
    servicesIntro: "Untuk UMKM, bisnis operasional, tim internal, personal project, dan event yang membutuhkan solusi khusus—bukan template mentah.",
    services: [
      ["Website & custom software", "Company profile, portal, web app, dan aplikasi mobile yang dibangun sesuai alur bisnis."],
      ["POS & operational dashboard", "Transaksi, inventori, supply, status, dan laporan dalam tampilan yang mudah dipakai tim."],
      ["Digital wedding invitation", "Undangan responsif dengan cerita, galeri, peta, RSVP, dan personalisasi sesuai paket."],
      ["AI workflow automation", "Pilot otomasi untuk tugas repetitif dengan batas akses dan human review yang jelas."],
      ["Authorized security", "Assessment dan pentest hanya dengan izin tertulis, scope, target, serta periode yang disepakati."],
      ["Support & maintenance", "Pendampingan deployment, handover source code, dokumentasi, dan maintenance opsional."]
    ],
    portfolioTitle: "Pekerjaan yang berangkat dari kebutuhan nyata",
    portfolioBody: "Kami tidak menambahkan metrik atau testimoni yang belum terverifikasi. Setiap visual di bawah diberi label sebagai ilustrasi konsep.",
    productsTitle: "Produk yang statusnya disampaikan apa adanya",
    pricingTitle: "Mulai dari angka yang bisa dibicarakan",
    pricingBody: "Estimasi awal membantu menyamakan ekspektasi. Harga akhir mengikuti scope, kompleksitas, integrasi, konten, timeline, dan dukungan yang disepakati.",
    whyTitle: "Kerja sama yang bisa Anda periksa sejak awal",
    why: [
      ["Scope transparan", "Deliverable, batas revisi, asumsi, dan timeline dituangkan sebelum development."],
      ["Identitas jelas", "Founder, email domain, WhatsApp, dan domain resmi ditampilkan secara terbuka."],
      ["Hak Anda tetap jelas", "Source code handover dan deployment assistance mengikuti kesepakatan proyek."],
      ["Privasi by design", "NDA tersedia. Akses dan data sensitif dibatasi sesuai kebutuhan proyek."]
    ],
    processTitle: "Dari obrolan pertama sampai sistem dipakai",
    process: ["Discovery", "Planning", "Design", "Development", "Testing", "Delivery", "Support"],
    aboutTitle: "Dibangun oleh orang yang bisa Anda hubungi",
    aboutBody: "Avia Code berdiri pada 2023, didirikan oleh Muhammad Tazakka Ramadhan dan Aldi Destaryana. Kami bekerja by project atau by consultation dengan fokus pada solusi yang sesuai konteks operasional klien.",
    faqTitle: "Pertanyaan sebelum mulai",
    faqs: [
      ["Berapa biaya pembuatan website di Avia Code?", "Website company profile mulai dari estimasi Rp3.000.000. Harga akhir dipengaruhi jumlah halaman, tingkat desain custom, bahasa, CMS, integrasi, serta biaya domain dan hosting."],
      ["Berapa lama pengerjaannya?", "Company profile sederhana umumnya dapat direncanakan dalam hitungan minggu, sedangkan sistem custom membutuhkan waktu lebih panjang. Timeline final ditetapkan setelah discovery dan persetujuan scope."],
      ["Apakah saya harus menyiapkan requirement lengkap?", "Tidak. Kita bisa mulai dari masalah dan contoh alur kerja. Kebutuhan teknis dirumuskan bersama dalam tahap discovery."],
      ["Apakah semuanya bisa custom?", "Ya, selama kebutuhan, risiko, biaya, dan waktunya realistis. Kami akan menyampaikan bagian yang custom, menggunakan layanan pihak ketiga, atau belum layak dikerjakan."],
      ["Apakah bisa revisi?", "Bisa. Jumlah dan jenis revisi ditulis di proposal agar proses tetap terarah. Perubahan di luar scope akan dibahas sebagai change request."],
      ["Apakah domain dan hosting termasuk?", "Tergantung paket dan kesepakatan. Biaya pihak ketiga seperti domain, hosting, email, API, dan lisensi akan dirinci secara terpisah bila belum termasuk."],
      ["Apakah source code menjadi milik klien?", "Untuk proyek custom, kepemilikan dan mekanisme serah terima diatur dalam kontrak. Produk berlangganan memberikan hak penggunaan dan tidak otomatis memindahkan kepemilikan source code."],
      ["Apakah sistem bisa diintegrasikan dengan aplikasi lain?", "Bisa dipertimbangkan bila aplikasi terkait menyediakan API, dokumentasi, akses yang sah, dan izin yang diperlukan."],
      ["Apakah Avia AI Office sudah tersedia?", "Avia AI Office berstatus MVP. Permintaan demo atau pilot akan ditinjau berdasarkan fitur yang benar-benar siap dan kebutuhan Anda."],
      ["Apakah ada maintenance?", "Ada sebagai layanan opsional. Cakupannya dapat berupa monitoring, perbaikan bug, pembaruan, backup, dan pengembangan lanjutan."],
      ["Bagaimana proses pentest dilakukan?", "Hanya setelah ada otorisasi tertulis dan scope yang jelas. Pengujian dibatasi pada target, teknik, dan periode yang disetujui bersama."]
    ],
    contactTitle: "Ceritakan proses yang ingin Anda rapikan",
    contactBody: "Mulai dari masalah, bukan daftar fitur. Kami akan membantu merumuskan scope dan langkah paling masuk akal. Balasan pada jam kerja; waktu respons dapat berbeda saat volume konsultasi tinggi.",
    footer: "Software studio untuk kebutuhan bisnis yang nyata."
  },
  en: {
    locale: "en" as Locale,
    nav: ["Services", "Portfolio", "Products", "Pricing", "Process", "About", "FAQ", "Contact"],
    heroEyebrow: "Software shaped around how your business works",
    heroTitle: "Turn manual processes into digital products that are",
    heroAccent: "clear, useful, and ready to grow.",
    heroBody: "Avia Code designs and builds websites, operational systems, POS, dashboards, digital invitations, AI automation, and security assessments—with transparent scope, timelines, and product status.",
    consult: "Discuss your needs", seeWork: "View portfolio",
    sectionServices: "Concrete services, not generic packages",
    servicesIntro: "For SMEs, operations-led businesses, internal teams, personal projects, and events that need a tailored solution—not a raw template.",
    services: [
      ["Websites & custom software", "Company profiles, portals, web apps, and mobile apps built around your workflow."],
      ["POS & operational dashboards", "Transactions, inventory, supply, statuses, and reporting in a team-friendly interface."],
      ["Digital wedding invitations", "Responsive invitations with stories, galleries, maps, RSVP, and package-based personalization."],
      ["AI workflow automation", "Focused pilots for repetitive tasks with clear access boundaries and human review."],
      ["Authorized security", "Assessments and pentests only with written authorization, agreed scope, targets, and test windows."],
      ["Support & maintenance", "Deployment help, source-code handover, documentation, and optional maintenance."]
    ],
    portfolioTitle: "Work grounded in real needs",
    portfolioBody: "We do not add unverified metrics or testimonials. Every visual below is clearly identified as a concept illustration.",
    productsTitle: "Products with honest status labels",
    pricingTitle: "Start with a number we can discuss",
    pricingBody: "Starting estimates help align expectations. Final pricing depends on scope, complexity, integrations, content, timeline, and agreed support.",
    whyTitle: "A working relationship you can inspect from day one",
    why: [
      ["Transparent scope", "Deliverables, revision limits, assumptions, and timelines are written down before development."],
      ["Clear identity", "Founders, domain emails, WhatsApp contacts, and the official domain are public."],
      ["Clear ownership", "Source-code handover and deployment assistance follow the project agreement."],
      ["Privacy by design", "NDAs are available. Sensitive data and access are limited to project needs."]
    ],
    processTitle: "From the first conversation to a system in use",
    process: ["Discovery", "Planning", "Design", "Development", "Testing", "Delivery", "Support"],
    aboutTitle: "Built by people you can reach",
    aboutBody: "Avia Code was founded in 2023 by Muhammad Tazakka Ramadhan and Aldi Destaryana. We work by project or consultation, focusing on solutions that fit each client’s operating context.",
    faqTitle: "Questions before we start",
    faqs: [
      ["How much does a corporate website cost?", "Corporate websites start from an indicative IDR 3,000,000. Final pricing depends on page count, custom design, languages, CMS, integrations, and domain or hosting costs."],
      ["How long does a project take?", "A simple company profile can generally be planned in weeks, while custom systems take longer. We confirm the timeline after discovery and scope approval."],
      ["Do I need a complete requirements document?", "No. We can start with the problem and a sample workflow, then shape technical requirements together during discovery."],
      ["Can everything be customized?", "Yes, when the need, risk, budget, and timeline are realistic. We clearly identify custom work, third-party services, and ideas that are not yet feasible."],
      ["Are revisions included?", "Yes. The proposal defines revision limits and types. Changes outside the agreed scope are handled as change requests."],
      ["Are domain and hosting included?", "It depends on the package and agreement. Third-party costs such as domains, hosting, email, APIs, and licenses are itemized when not included."],
      ["Will I own the source code?", "For custom projects, ownership and handover are defined in the contract. Subscription products provide usage rights and do not automatically transfer source ownership."],
      ["Can the system integrate with other software?", "We can assess an integration when the other system provides documented APIs, lawful access, and the necessary permission."],
      ["Is Avia AI Office available?", "Avia AI Office is an MVP. Demo or pilot inquiries are reviewed against the features actually ready and your needs."],
      ["Do you provide maintenance?", "Yes, as an optional service. It may include monitoring, bug fixes, updates, backups, and further development."],
      ["How is pentesting conducted?", "Only after written authorization and a clear scope. Testing is limited to the targets, techniques, and time window agreed by both parties."]
    ],
    contactTitle: "Tell us which process needs to work better",
    contactBody: "Start with the problem, not a feature list. We will help shape the scope and the most sensible next step. Replies are sent during business hours; response times may vary with consultation volume.",
    footer: "A software studio for real business needs."
  }
};

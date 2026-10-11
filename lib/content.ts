import type { Locale } from "./site";

export const portfolio = [
  {
    slug: "travel-alharom-bina-hati-pos",
    tag: { id: "Point of Sale", en: "Point of Sale" },
    title: { id: "Travel Alharom Bina Hati POS", en: "Travel Alharom Bina Hati POS" },
    summary: {
      id: "Pengembangan POS untuk membantu tim travel mencatat transaksi dan menata aktivitas kasir dalam alur kerja yang lebih jelas.",
      en: "A POS project helping a travel team record transactions and organize cashier operations in a clearer workflow."
    },
    challenge: { id: "Tim membutuhkan pencatatan transaksi yang mudah digunakan dan dapat ditelusuri kembali.", en: "The team needed transaction records that were easy to use and trace." },
    solution: { id: "POS dirancang mengikuti alur kasir travel, dengan pengelolaan data dan ringkasan transaksi sesuai ruang lingkup proyek.", en: "The POS was designed around the travel cashier workflow, with data management and transaction summaries within the project scope." },
    audience: { id: "Biro perjalanan, operator travel, dan tim layanan yang perlu mencatat transaksi secara konsisten.", en: "Travel agencies, tour operators, and service teams that need a consistent way to record transactions." },
    illustratedAreas: { id: ["Katalog layanan dan produk", "Keranjang transaksi", "Ringkasan pembayaran", "Riwayat transaksi"], en: ["Service and product catalog", "Transaction cart", "Payment summary", "Transaction history"] },
    discoveryQuestions: { id: ["Layanan, paket, dan variasi harga apa yang dijual?", "Bagaimana staf mencatat pembayaran dan perubahan transaksi?", "Laporan apa yang dibutuhkan setiap hari atau periode?", "Siapa yang dapat melihat, mengubah, atau membatalkan transaksi?"], en: ["Which services, packages, and price variations are sold?", "How should staff record payments and transaction changes?", "Which reports are needed each day or period?", "Who may view, edit, or void a transaction?"] },
    note: { id: "Visual pada situs merupakan ilustrasi konsep, bukan tangkapan layar produksi.", en: "Website visuals are concept illustrations, not production screenshots." },
    demo: null
  },
  {
    slug: "bea-cukai-tangerang-supply-dashboard",
    tag: { id: "Dashboard Operasional", en: "Operations Dashboard" },
    title: { id: "Dashboard Supply Bea Cukai Tangerang", en: "Tangerang Customs Supply Dashboard" },
    summary: {
      id: "Pengembangan dashboard supply untuk membantu tim memantau data dan status pekerjaan dari satu tampilan.",
      en: "A supply dashboard project helping a team monitor data and work status from one view."
    },
    challenge: { id: "Pemantauan supply memerlukan data yang rapi agar status pekerjaan lebih mudah dibaca dan ditindaklanjuti.", en: "Supply monitoring called for organized data so work status could be easier to review and follow up." },
    solution: { id: "Dashboard menyatukan tampilan status, filter, tabel, dan ringkasan sesuai kebutuhan operasional yang disepakati.", en: "The dashboard brings together statuses, filters, tables, and summaries for the agreed operational needs." },
    audience: { id: "Tim supply, administrasi, dan operasional yang memerlukan satu cara untuk meninjau data serta status pekerjaan.", en: "Supply, administration, and operations teams that need a consistent way to review data and work status." },
    illustratedAreas: { id: ["Ringkasan status supply", "Daftar data untuk ditinjau", "Filter dan kategori", "Visualisasi untuk membantu membaca pola"], en: ["Supply status overview", "Data list for review", "Filters and categories", "Visuals that help surface patterns"] },
    discoveryQuestions: { id: ["Dari sistem atau file mana data supply berasal?", "Seberapa sering data diperbarui dan siapa pemiliknya?", "Status apa yang memerlukan tindak lanjut atau persetujuan?", "Peran pengguna dan batas akses apa yang diperlukan?"], en: ["Which systems or files supply the source data?", "How often is data updated, and who owns it?", "Which statuses need follow-up or approval?", "What user roles and access limits are required?"] },
    note: { id: "Nama proyek digunakan sebagai konteks portofolio; tidak ada klaim hasil atau metrik yang belum diverifikasi.", en: "The project name is used as portfolio context; no unverified outcomes or metrics are claimed." },
    demo: null
  },
  {
    slug: "wedding-invitation",
    tag: { id: "Undangan Digital", en: "Digital Invitation" },
    title: { id: "Wedding Invitation", en: "Wedding Invitation" },
    summary: {
      id: "Undangan pernikahan digital yang dapat dibuka di ponsel, dibagikan melalui tautan, dan dicoba melalui demo publik.",
      en: "A mobile-friendly digital wedding invitation that can be shared by link and explored through a public demo."
    },
    challenge: { id: "Pasangan memerlukan undangan yang terasa personal sekaligus praktis untuk tamu di berbagai perangkat.", en: "Couples need an invitation that feels personal while remaining practical across devices." },
    solution: { id: "Halaman undangan dirancang untuk menyajikan informasi acara dan elemen personal secara nyaman di ponsel. Fitur pada demo dapat dilihat langsung melalui tautan publik.", en: "The invitation presents event information and personal details comfortably on mobile. Features can be checked directly in the public demo." },
    audience: { id: "Pasangan dan wedding organizer yang ingin membagikan detail acara melalui halaman yang mudah dibuka di ponsel.", en: "Couples and wedding organizers who want to share event details through a page that is easy to open on a phone." },
    illustratedAreas: { id: ["Pembuka dan cerita pasangan", "Informasi waktu dan lokasi", "Galeri foto", "RSVP dan respons tamu"], en: ["Invitation opening and couple story", "Date, time, and venue details", "Photo gallery", "RSVP and guest responses"] },
    discoveryQuestions: { id: ["Informasi dan rangkaian acara apa yang perlu ditampilkan?", "Gaya visual, foto, dan musik seperti apa yang diinginkan?", "Apakah RSVP diperlukan dan siapa yang mengelola respons?", "Berapa lama halaman aktif dan bagaimana privasi tamu dijaga?"], en: ["Which event details and schedule should be included?", "What visual style, photos, and music do you want?", "Is RSVP needed, and who will manage responses?", "How long should the page stay live, and how will guest privacy be handled?"] },
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
      ["Solusi sesuai pekerjaan Anda", "Kami memetakan pengguna dan alur kerja terlebih dahulu, lalu memilih fitur yang memang diperlukan."],
      ["Rencana yang bisa dipegang", "Ruang lingkup, hasil kerja, jadwal, biaya, dan revisi dirinci dalam proposal sebelum proyek dimulai."],
      ["Serah terima yang jelas", "Akses, dokumentasi, bantuan deployment, dan ketentuan source code ditetapkan sesuai kontrak proyek."],
      ["Komunikasi langsung", "Anda dapat menghubungi founder melalui email domain resmi atau WhatsApp; NDA tersedia bila diperlukan."]
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
      ["Apakah solusi bisa dibuat khusus?", "Bisa. Kami menyusun fitur dan desain berdasarkan kebutuhan yang disepakati, bukan sekadar mengganti warna template. Batasan teknis, biaya, dan waktu akan dijelaskan sejak awal."],
      ["Apakah bisa revisi?", "Bisa. Jumlah dan jenis revisi ditulis di proposal agar proses tetap terarah. Perubahan di luar scope akan dibahas sebagai change request."],
      ["Apakah domain dan hosting termasuk?", "Tergantung paket dan kesepakatan. Biaya pihak ketiga seperti domain, hosting, email, API, dan lisensi akan dirinci secara terpisah bila belum termasuk."],
      ["Apakah source code menjadi milik klien?", "Untuk proyek custom, kepemilikan dan mekanisme serah terima diatur dalam kontrak. Produk berlangganan memberikan hak penggunaan dan tidak otomatis memindahkan kepemilikan source code."],
      ["Apakah sistem bisa diintegrasikan dengan aplikasi lain?", "Bisa dipertimbangkan bila aplikasi terkait menyediakan API, dokumentasi, akses yang sah, dan izin yang diperlukan."],
      ["Apakah Avia AI Office sudah tersedia?", "Avia AI Office berstatus MVP. Permintaan demo atau pilot akan ditinjau berdasarkan fitur yang benar-benar siap dan kebutuhan Anda."],
      ["Apakah ada maintenance?", "Ada sebagai layanan opsional. Bentuk dukungan—misalnya perbaikan bug, pembaruan, backup, atau pengembangan lanjutan—ditetapkan menurut kebutuhan dan perjanjian proyek."],
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
      ["Built around your work", "We map users and workflows first, then choose features that are genuinely needed."],
      ["A plan you can rely on", "Scope, deliverables, timeline, cost, and revisions are set out in a proposal before work begins."],
      ["A clear handover", "Access, documentation, deployment assistance, and source-code terms are defined in the project agreement."],
      ["Direct communication", "You can reach the founders through official domain email or WhatsApp; NDAs are available when needed."]
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
      ["Can the solution be tailored?", "Yes. We shape features and design around agreed needs, rather than merely recoloring a template. We explain technical, budget, and timeline limits up front."],
      ["Are revisions included?", "Yes. The proposal defines revision limits and types. Changes outside the agreed scope are handled as change requests."],
      ["Are domain and hosting included?", "It depends on the package and agreement. Third-party costs such as domains, hosting, email, APIs, and licenses are itemized when not included."],
      ["Will I own the source code?", "For custom projects, ownership and handover are defined in the contract. Subscription products provide usage rights and do not automatically transfer source ownership."],
      ["Can the system integrate with other software?", "We can assess an integration when the other system provides documented APIs, lawful access, and the necessary permission."],
      ["Is Avia AI Office available?", "Avia AI Office is an MVP. Demo or pilot inquiries are reviewed against the features actually ready and your needs."],
      ["Do you provide maintenance?", "Yes, as an optional service. Support—such as bug fixes, updates, backups, or further development—is defined according to the project agreement."],
      ["How is pentesting conducted?", "Only after written authorization and a clear scope. Testing is limited to the targets, techniques, and time window agreed by both parties."]
    ],
    contactTitle: "Tell us which process needs to work better",
    contactBody: "Start with the problem, not a feature list. We will help shape the scope and the most sensible next step. Replies are sent during business hours; response times may vary with consultation volume.",
    footer: "A software studio for real business needs."
  }
};

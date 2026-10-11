# Avia Code — Website Implementation Handoff

Date: 11 October 2026

This package is the implementation context for a bilingual company-profile website. It is intended for Codex / ChatGPT Work to use with the existing codebase where authorized. This package does not imply the repo or production domain has been modified.

## Project identity
- Brand: **Avia Code** (proposed full rebrand), founded in **2023**.
- Company legal form: described by the owner as a CV. Verify legal registered name and registration details before publishing legal statements.
- Site: **https://aviacode.site** (user-owned; production/DNS has not been tested).
- Founders: **Muhammad Tazakka Ramadhan** and **Aldi Destaryana**.
- Muhammad: **+62 812-2230-170**, **mtazakka@aviacode.site**.
- Aldi: **+62 896-9270-270**, **aldids@aviacode.site**.
- ID (default) + EN switchable. Do not invent office location, photos, statistics, customer endorsements, certificates, testimonials, or performance outcomes.

## Homepage is ONE page
Sections and anchor IDs: `#home`, `#layanan`, `#portfolio`, `#produk`, `#harga`, `#keunggulan`, `#proses`, `#tentang`, `#faq`, `#kontak`; footer follows. **About, FAQ, and Contact are sections, NOT separate pages.** Sticky nav, accessible smooth scroll with scroll offset, active section, responsive mobile menu.

Detail pages may exist for SEO and depth:
- `/layanan/[slug]` (and `/en/layanan/[slug]`) for genuine service-specific information, without replacing homepage services.
- `/portfolio/[slug]` and `/en/portfolio/[slug]`.
- `/products/ai-office`, `/products/security-workspace` with English equivalents.
- `/privacy-policy`, `/terms` with localized equivalents if written.

## Business offerings
1. Websites and custom software, business dashboards, POS, operations/supply systems, mobile apps, system integrations.
2. AI workflows and **Avia AI Office** — **MVP, in development / early pilot**, not marketed as generally available until verified.
3. Authorized security assessment / pentesting after operating readiness confirmation.
4. **Avia Security Workspace** bug bounty workflow tool — **In Development**, not announced as ready.

## Three actual portfolio categories, not fabricated UIs
1. POS/Cashier Dashboard — Travel Alharom Bina Hati.
2. Supply Management Dashboard — Bea Cukai Tangerang-related project; publication of name/logo must be approved.
3. Digital Wedding Invitation — demo: https://undangan-nikah-gold-five.vercel.app/ (Ratu & Dzaki).
Original screenshots are missing. The three PNG assets in `assets/references/` are **AI-generated design boards, NOT screenshots of actual applications**. Recreate appropriate original conceptual portfolio imagery and label it `Ilustrasi konsep antarmuka` if used. Do not show fabricated metrics, logos, founder portraits or product features as facts. Do not claim that the invitation guest messages are production-connected without verifying the live app.

## Proposed starting prices — unapproved, indicative
- Company Profile Website Rp3,000,000
- Digital Invitation Lite Rp499,000; Signature Rp1,500,000; Premium Rp2,500,000+
- POS Rp7,500,000
- Operational/Supply Dashboard Rp10,000,000
- Custom Web App Rp15,000,000
- Mobile App Rp25,000,000
- Single AI/Workflow Automation Rp3,000,000
- AI Office pilot **proposed** Rp1,500,000/month + Rp3,000,000 onboarding (not public fixed pricing without confirmation)
- Security Assessment Rp7,500,000
- Penetration Testing Rp12,000,000
- Security Workspace: not priced.
Clearly say prices are estimates, not binding quotes; exclude third-party costs and applicable taxes unless agreed.

## Business policy proposals — legal/commercial review before public release
- First consultation up to 30 minutes free.
- Proposal defines scope/timeline/milestones.
- Proposed payment 40/40/20 for custom projects.
- Two minor revision rounds per design milestone.
- Change requests are estimated and approved separately.
- In-scope bug-fix warranty proposed 14 days after handover.
- Custom-project source-code handover only as the contract states after settlement. SaaS subscriptions do not convey source ownership.
- Optional maintenance; optional NDA when document is ready.
- Response in ~1 business day is a **target**, not a guaranteed SLA.
Do not hardcode these terms in legal contracts without human approval.

## Design direction
Premium approachable boutique technology studio, light mode; deep navy `#14243A`, bright blue `#2563EB`, teal `#14B8A6`, off-white `#F8FAFC`, slate `#64748B`; Plus Jakarta Sans / Inter; balanced editorial layout and original realistic software UI illustrations. Use the PNGs as moodboards. Included starter SVG marks are **re-creations inspired by the moodboards**, not finalized trademark assets. They must be visually reviewed.

## Important files
- `content/home-id.md` — long-form, natural Indonesian homepage SEO copy.
- `content/home-en.md` — matching English copy.
- `content/details-id.md` — service/product/portfolio details and FAQ content.
- `specs/seo-technical.md` — SEO intent, URL/i18n and metadata recommendations.
- `specs/acceptance-checklist.md` — functional tests; avoid inert CTAs.
- `specs/pricing.json` — machine-readable indicative rate card and status flags.
- `assets/references/*.png` — visual design references only.
- `assets/brand/*.svg` — editable proposed logo / favicon starter.

## Implementation requirement
Use existing repo if access is provided. Prefer maintainable Next.js + TypeScript + Tailwind CSS and server-rendered pages. Implement real contact form server processing with validation, anti-spam, and email delivery; if missing credentials, mark the form unavailable and provide real WhatsApp/email fallbacks instead of false-success UI. Test all actions, metadata, language switching, keyboard use, mobile breakpoints, build/lint, and no fake content. Keep code simple, readable and maintainable.

## Deployment
Do NOT claim live at aviacode.site until actual deployment/DNS/SSL is verified. Do not assert SEO rankings. Set up Search Console and a sitemap after the launch.

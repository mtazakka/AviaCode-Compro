# Codex implementation task — Avia Code Website V1

Implement the project inside the existing AviaCode-Compro repository at https://github.com/mtazakka/AviaCode-Compro (do not assume write access; request authorization where needed). Read `README.md`, `content/`, `specs/`, and `assets/` in this handoff package before changing code.

## Outcome
Launch-ready Next.js + TypeScript + Tailwind CSS (or reuse repo tooling if appropriate), bilingual ID default + EN website for `https://aviacode.site`.

## Non-negotiable IA
Main page `/` includes accessible anchors and complete sections: hero, services, portfolio, products, pricing, why-us, process, About founders, FAQ, Contact, footer. **Do not create separate About, FAQ or Contact pages.** Render `/en` with fully localized body copy. Keep main-nav item links pointing to homepage sections even from detail routes. Service, product, and case-study detail pages are allowed and encouraged for SEO. Use one primary H1 per route.

## Build requirements
1. Inspect current repository, preserve usable code, simplify/remove outdated placeholder/fake content.
2. Build responsive components with polished light navy/blue/teal visual identity; use `assets/brand` logo as concept vector pending visual acceptance and `assets/references` moodboards as references, NOT site screenshots.
3. Implement all copy in the provided localization files or structured TypeScript content data; localize all UI including form status, FAQ, CTAs, metadata and prices caveats.
4. Portfolio pages: POS Travel Alharom Bina Hati; Bea Cukai Tangerang-related supply dashboard (client usage needs permission); Wedding Invitation Demo https://undangan-nikah-gold-five.vercel.app/ . Without original screenshots, show original conceptual interface images labeled illustrations. Do not claim implementation features without founder verification. Do not fabricate founder portraits, company figures, testimonials, ratings, credentials or government endorsements.
5. Pricing data from `specs/pricing.json` is a **CEO draft**, not confirmed fixed quotes. Display only approved public-facing amounts, otherwise show by-consultation. Implement useful service selection/calculator with proposed company-profile add-ons, itemized total, disclaimer, and WhatsApp/lead prefill. Do not take payment on the site.
6. Avia AI Office is MVP and Security Workspace is In Development; do not pretend products are live or claim features not verified. The demo and waitlist CTAs must function as *inquiries*.
7. Implement a real contact workflow: server-side schema validation, sanitized content, anti-spam and real email provider to authorized business addresses once credentials are supplied. No fake success state or mock send. Provide functional WhatsApp and mailto fallback if email provider is unconfigured. No public API keys.
8. SEO as `specs/seo-technical.md`: per-page title/description, structured Organization JSON-LD with real details, sitemap, robots, canonical, OG, lang and reciprocal hreflang, SSG/SSR, optimized images and semantic links.
9. Accessibility and testing as `specs/acceptance-checklist.md`. Include keyboard/ARIA controls, FAQ, mobile nav, language switch, form states, pricing integration, external links, canonical and SEO. Run available tests/lint/typecheck/build and report exact status.
10. Deliver a concise release report: changed files, tests, blocked items, required credentials, publication permissions, and exact deployment steps to aviacode.site.

## Critical content decisions
Brand: Avia Code, founded in 2023 by Muhammad Tazakka Ramadhan (+628122230170, mtazakka@aviacode.site) and Aldi Destaryana (+628969270270, aldids@aviacode.site). Homepage about, FAQ and contacts stay single-page sections. All figures, package terms, workflow capabilities and SEO claims must be accurate; mark commercial proposals as estimates pending approval. Do not invent physical address or current operating hours.

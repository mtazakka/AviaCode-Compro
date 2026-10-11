# Avia Code V1 — Functional & Release Acceptance Checklist

## Routing and content
- [ ] Indonesian `/` fully rendered, no placeholder or broken image.
- [ ] English `/en` fully translated (including pricing, FAQ, validation, privacy text); language switch keeps corresponding route and hash.
- [ ] Navbar anchors match page sections: home, layanan, portfolio, produk, harga, keunggulan, proses, tentang, faq, kontak.
- [ ] About, FAQ, Contact are **not separate top-level pages**; they remain within homepage.
- [ ] Mobile menu opens/closes with keyboard and closes on selection; sticky navigation doesn't obscure headings.
- [ ] Service detail links, portfolio case studies, product detail routes work in both languages and return correct statuses.
- [ ] Every CTA does something meaningful; no `href="#"` or inert buttons.

## Form and lead-generation
- [ ] Contact form has fields Name, Email, optional WhatsApp, Service, Message, privacy acknowledgment; validated client and server-side.
- [ ] Submission sends to authorized company email using server-side provider configuration. Set up SPF/DKIM/DMARC for domain email; don't expose API secrets.
- [ ] Real success/error/loading states and form replay protection; never claim email was sent when provider isn't configured.
- [ ] Honeypot + durable rate limit/anti-spam; safe error logs; avoid storing contact form data needlessly.
- [ ] Contact form service preselection works from price calculator, product demo and each service CTA.
- [ ] WhatsApp for Muhammad +628122230170 and Aldi +628969270270 opens `wa.me` with URL-encoded service-specific content.
- [ ] mailto links open correct addresses: mtazakka@aviacode.site, aldids@aviacode.site.
- [ ] AI Office action means **request demo**, not false activation; Security Workspace means **register interest**.
- [ ] Contact hours/response time displayed only if operationally achievable.

## Pricing calculator
- [ ] Starting prices match unapproved draft rate card and clearly show `Estimasi / Mulai Dari`.
- [ ] Company Website add-ons: ID/EN +Rp1,500,000 and CMS +Rp2,000,000, if approved.
- [ ] Changing service updates total and inquiry message; all IDR formatting is consistent.
- [ ] No payment collection until price/terms/delivery and lawful checkout are approved.
- [ ] AI Office/Security Workspace unverified pricing not charged or presented as generally available.
- [ ] Taxes, licensing, hosting, paid API usage and scope disclaimers visible.

## UI interactions and accessibility
- [ ] FAQ opens/closes and works via keyboard; appropriate `aria-expanded`/buttons.
- [ ] Portfolio image lightbox, if added, supports Escape, previous/next, captions and focus handling.
- [ ] Wedding demo external link works; no fake screenshot claiming to be an actual production capture.
- [ ] No fictional logos, testimonials, achievements, customer metrics, founder headshots or security badges.
- [ ] Images have alt text/captions; semantic headings; adequate contrast; mobile layouts 320px and wider; reduced-motion preferences respected.
- [ ] No console errors, broken asset URLs, missing alt or unhandled requests.

## SEO
- [ ] Unique page titles/descriptions, canonical URL, OpenGraph/Twitter cards per route + locale.
- [ ] Reciprocal hreflang id/en per localized page.
- [ ] Organization JSON-LD only using confirmed company info; sitemap.xml, robots.txt generated.
- [ ] Server renders indexable content, no hidden long-form text or keyword stuffing.
- [ ] Images optimized (responsive, efficient format) and performance checked on mobile.
- [ ] Search Console verified only after live deployment.

## Security and deployment
- [ ] No secrets in client bundle or git history; env settings documented.
- [ ] HTTPS and domain routing verified on `aviacode.site` and chosen www variant.
- [ ] Build, typecheck, lint, accessibility smoke checks pass.
- [ ] Add Playwright tests covering navigation, FAQ, calculator, locale, mobile menu, forms with mocked delivery, and real contact success only with a configured test provider.
- [ ] Privacy Policy and Terms reviewed. Consent text consistent with actual data collection.
- [ ] Publication permissions verified for travel name, Bea Cukai-related reference, project features, and logos; otherwise anonymize.
- [ ] Validate MVP scope and pentesting team readiness before public availability claims.
- [ ] Founder images remain monograms or actual consented photos, never AI generated stand-ins.

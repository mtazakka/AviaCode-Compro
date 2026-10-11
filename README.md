# Avia Code company profile

Bilingual ID/EN Next.js company profile for Avia Code. The design and editorial source is preserved in [`docs/handoff`](docs/handoff/README.md). The previous static landing page is retained in `legacy/` for reference and is not part of the Next.js application.

## Local development

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. Use `npm run check` and `npm run build` before deploying.

## Contact delivery

The form sends through a server-side Resend endpoint. Verify the `aviacode.site` sender domain and configure the variables in `.env.example` on the host. Without these values, the form displays an honest unavailable message and visitors can use the published WhatsApp or email links. The in-memory rate limiter is process-local; add a shared limiter or challenge before high-traffic production use.

## Publishing

1. Review the visual and commercial drafts in `docs/handoff`, especially brand mark, prices, security readiness, and permission to name portfolio clients.
2. Configure the Resend sender, recipient addresses, SPF/DKIM/DMARC, and `NEXT_PUBLIC_SITE_URL=https://aviacode.site`.
3. Deploy this Next.js repository to a compatible host, attach `aviacode.site`, and set DNS.
4. Verify HTTPS, ID/EN pages, both contact paths, sitemap, robots, canonical/hreflang, and the actual wedding demo.

Nothing in this checkout has been pushed or deployed automatically.

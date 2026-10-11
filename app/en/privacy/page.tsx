import type { Metadata } from "next"; import { LegalPage } from "@/components/legal-page"; import { alternates, siteUrl } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy Policy", description: "Avia Code website privacy policy.", alternates: { canonical: `${siteUrl}/en/privacy`, languages: alternates("/privacy", "/en/privacy").languages } };
export default function Page() { return <LegalPage locale="en" type="privacy" />; }

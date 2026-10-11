import type { Metadata } from "next"; import { LegalPage } from "@/components/legal-page"; import { alternates, siteUrl } from "@/lib/site";
export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms governing the Avia Code website and service information.", alternates: { canonical: `${siteUrl}/en/terms`, languages: alternates("/terms", "/en/terms").languages } };
export default function Page() { return <LegalPage locale="en" type="terms" />; }

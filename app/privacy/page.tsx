import type { Metadata } from "next"; import { LegalPage } from "@/components/legal-page"; import { alternates } from "@/lib/site";
export const metadata: Metadata = { title: "Kebijakan Privasi", description: "Kebijakan privasi website Avia Code.", alternates: alternates("/privacy", "/en/privacy") };
export default function Page() { return <LegalPage locale="id" type="privacy" />; }

import type { Metadata } from "next"; import { LegalPage } from "@/components/legal-page"; import { alternates } from "@/lib/site";
export const metadata: Metadata = { title: "Syarat & Ketentuan", description: "Syarat penggunaan website dan informasi layanan Avia Code.", alternates: alternates("/terms", "/en/terms") };
export default function Page() { return <LegalPage locale="id" type="terms" />; }

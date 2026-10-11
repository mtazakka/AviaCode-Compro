import type { Metadata } from "next";
import { HomeV2 } from "@/components/home-v2";
import { alternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Custom Software & Website Development in Indonesia",
  description: "Avia Code helps SMEs and operations teams build websites, POS systems, dashboards, digital invitations, AI automation, and authorized security assessments.",
  alternates: { canonical: "https://aviacode.site/en", languages: alternates("/", "/en").languages },
  openGraph: { title: "Avia Code — Digital Solutions Shaped Around Your Business", description: "Custom websites, software, POS, dashboards, AI workflows, and authorized security services.", url: "/en", locale: "en_US" }
};

export default function EnglishHome() { return <HomeV2 locale="en" />; }

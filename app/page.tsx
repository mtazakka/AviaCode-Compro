import type { Metadata } from "next";
import { HomeV2 } from "@/components/home-v2";
import { alternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Software Custom Indonesia",
  description: "Avia Code membantu UMKM dan tim operasional membangun website, POS, dashboard, undangan digital, otomasi AI, serta security assessment dengan scope transparan.",
  alternates: alternates("/", "/en"),
  openGraph: { title: "Avia Code — Solusi Digital yang Sesuai Cara Bisnis Anda", description: "Website, software custom, POS, dashboard, AI workflow, dan keamanan terotorisasi.", url: "/", locale: "id_ID" }
};

export default function Home() { return <HomeV2 locale="id" />; }

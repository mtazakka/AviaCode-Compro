import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioDetail } from "@/components/detail-page";
import { portfolio } from "@/lib/content";
import { alternates, siteUrl } from "@/lib/site";

export function generateStaticParams() { return portfolio.map(x => ({ slug: x.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = portfolio.find(x => x.slug === slug); if (!item) return {}; const idPath = `/portfolio/${slug}`; const enPath = `/en/portfolio/${slug}`; return { title: item.title.en, description: item.summary.en, alternates: { canonical: `${siteUrl}${enPath}`, languages: alternates(idPath, enPath).languages }, openGraph: { title: item.title.en, description: item.summary.en, url: enPath, locale: "en_US" } }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = portfolio.find(x => x.slug === slug); if (!item) notFound(); return <PortfolioDetail item={item} locale="en" />; }

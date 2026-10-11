import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioDetail } from "@/components/detail-page";
import { portfolio } from "@/lib/content";
import { alternates } from "@/lib/site";

export function generateStaticParams() { return portfolio.map(x => ({ slug: x.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = portfolio.find(x => x.slug === slug); if (!item) return {}; const idPath = `/portfolio/${slug}`; const enPath = `/en/portfolio/${slug}`; return { title: item.title.id, description: item.summary.id, alternates: alternates(idPath, enPath), openGraph: { title: item.title.id, description: item.summary.id, url: idPath } }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = portfolio.find(x => x.slug === slug); if (!item) notFound(); return <PortfolioDetail item={item} locale="id" />; }

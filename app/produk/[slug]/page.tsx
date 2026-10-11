import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/detail-page";
import { products } from "@/lib/content";
import { alternates } from "@/lib/site";

export function generateStaticParams() { return products.map(x => ({ slug: x.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = products.find(x => x.slug === slug); if (!item) return {}; return { title: item.title.id, description: item.summary.id, alternates: alternates(`/produk/${slug}`, `/en/products/${slug}`) }; }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = products.find(x => x.slug === slug); if (!item) notFound(); return <ProductDetail item={item} locale="id" />; }

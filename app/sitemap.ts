import type { MetadataRoute } from "next";
import { portfolio, products } from "@/lib/content";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/en", "/privacy", "/terms", "/en/privacy", "/en/terms", ...services.flatMap(x => [`/layanan/${x.slug}`, `/en/layanan/${x.slug}`]), ...portfolio.flatMap(x => [`/portfolio/${x.slug}`, `/en/portfolio/${x.slug}`]), ...products.flatMap(x => [`/produk/${x.slug}`, `/en/products/${x.slug}`])];
  return routes.map(route => ({ url: `${siteUrl}${route}`, lastModified: new Date("2026-10-11"), changeFrequency: route === "" || route === "/en" ? "monthly" : "yearly", priority: route === "" || route === "/en" ? 1 : .7 }));
}

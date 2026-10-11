import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import "./reference-design.css";
import "./project-visuals.css";
import "./footer-location.css";
import { siteUrl } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Avia Code — Custom Software, Website & Digital Solutions", template: "%s · Avia Code" },
  description: "Avia Code membangun website, custom software, POS, dashboard operasional, undangan digital, AI workflow, dan layanan keamanan terotorisasi.",
  applicationName: "Avia Code",
  authors: [{ name: "Avia Code", url: siteUrl }],
  creator: "Avia Code",
  icons: { icon: "/favicon.svg" },
  openGraph: { type: "website", siteName: "Avia Code", locale: "id_ID", alternateLocale: "en_US", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Avia Code — Software that fits your workflow" }] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#071a2b", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" data-scroll-behavior="smooth" className={`${inter.variable} ${jakarta.variable}`}><body>{children}</body></html>;
}

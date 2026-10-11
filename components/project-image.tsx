import Image from "next/image";
import type { Locale } from "@/lib/site";

const visuals = {
  pos: { src: "/portfolio/travel-pos-v2.webp", id: "Ilustrasi konsep antarmuka POS untuk travel", en: "Travel POS interface concept illustration" },
  supply: { src: "/portfolio/supply-dashboard-v2.webp", id: "Ilustrasi konsep dashboard pemantauan supply", en: "Supply monitoring dashboard concept illustration" },
  wedding: { src: "/portfolio/wedding-invitation-concept.webp", id: "Ilustrasi konsep undangan digital di laptop dan ponsel", en: "Digital invitation concept on laptop and phone" },
  ai: { src: "/portfolio/avia-ai-office-concept.webp", id: "Ilustrasi konsep dashboard Avia AI Office", en: "Avia AI Office dashboard concept illustration" },
  security: { src: "/portfolio/security-workspace-concept.webp", id: "Ilustrasi konsep Security Workspace", en: "Security Workspace concept illustration" }
} as const;

export type ProjectVisual = keyof typeof visuals;

export function ProjectImage({ kind, locale, variant = "card" }: { kind: ProjectVisual; locale: Locale; variant?: "card" | "detail" | "product" }) {
  const item = visuals[kind];
  return <div className={`project-image project-image-${variant}`}>
    <Image src={item.src} alt={item[locale]} fill sizes={variant === "detail" ? "(max-width: 720px) 100vw, 55vw" : "(max-width: 720px) 100vw, 33vw"} />
    <span>{locale === "id" ? "ILUSTRASI KONSEP UI" : "UI CONCEPT ILLUSTRATION"}</span>
  </div>;
}

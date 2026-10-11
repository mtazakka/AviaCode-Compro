export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://aviacode.site").replace(/\/$/, "");

export type Locale = "id" | "en";

export const contacts = {
  emails: ["mtazakka@aviacode.site", "aldids@aviacode.site"],
  whatsapps: [
    { label: "Muhammad Tazakka Ramadhan", number: "628122230170" },
    { label: "Aldi Destaryana", number: "628969270270" }
  ]
};

export function whatsappUrl(service: string, locale: Locale) {
  const message = locale === "id"
    ? `Halo Avia Code, saya tertarik konsultasi tentang ${service}. Bisa dibantu untuk membahas kebutuhan dan estimasinya?`
    : `Hello Avia Code, I would like to discuss ${service}. Could you help me review the requirements and estimate?`;
  return `https://wa.me/${contacts.whatsapps[0].number}?text=${encodeURIComponent(message)}`;
}

export function alternates(idPath: string, enPath: string) {
  return {
    canonical: `${siteUrl}${idPath}`,
    languages: { "id-ID": `${siteUrl}${idPath}`, "en-US": `${siteUrl}${enPath}`, "x-default": `${siteUrl}${idPath}` }
  };
}

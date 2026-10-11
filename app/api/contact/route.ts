import { NextRequest, NextResponse } from "next/server";

type Entry = { count: number; reset: number };
const attempts = new Map<string, Entry>();

function clean(value: unknown, max = 3000) { return String(value || "").trim().slice(0, max); }
function escapeHtml(value: string) { return value.replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c] || c)); }

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now(); const entry = attempts.get(ip);
  if (entry && entry.reset > now && entry.count >= 5) return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
  attempts.set(ip, !entry || entry.reset <= now ? { count: 1, reset: now + 15 * 60_000 } : { ...entry, count: entry.count + 1 });
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });
  const startedAt = Number(body.startedAt || 0);
  if (!startedAt || now - startedAt < 2500 || now - startedAt > 24 * 60 * 60_000) return NextResponse.json({ message: "Please wait a moment and try again." }, { status: 400 });
  const name = clean(body.name, 100), email = clean(body.email, 200), company = clean(body.company, 150), whatsapp = clean(body.whatsapp, 30), service = clean(body.service, 200), message = clean(body.message), locale = clean(body.locale, 2);
  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !service || message.length < 20 || body.consent !== "on") return NextResponse.json({ message: locale === "id" ? "Mohon lengkapi seluruh kolom dengan benar." : "Please complete all fields correctly." }, { status: 422 });
  const apiKey = process.env.RESEND_API_KEY; const from = process.env.CONTACT_FROM_EMAIL; const recipients = process.env.CONTACT_TO_EMAIL?.split(",").map(x => x.trim()).filter(Boolean);
  if (!apiKey || !from || !recipients?.length) return NextResponse.json({ message: locale === "id" ? "Form belum dikonfigurasi di server. Silakan hubungi kami melalui WhatsApp atau email." : "The form is not configured on the server yet. Please contact us via WhatsApp or email." }, { status: 503 });
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: recipients, reply_to: email, subject: `[Avia Code Website] ${service} — ${name}`, html: `<h2>New Avia Code inquiry</h2><p><b>Name:</b> ${escapeHtml(name)}</p><p><b>Company:</b> ${escapeHtml(company)}</p><p><b>Email:</b> ${escapeHtml(email)}</p><p><b>WhatsApp:</b> ${escapeHtml(whatsapp)}</p><p><b>Service:</b> ${escapeHtml(service)}</p><p><b>Message:</b></p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p><hr><small>Submitted via aviacode.site · Locale: ${escapeHtml(locale)}</small>` }) });
  if (!response.ok) { console.error("Resend delivery failed", response.status); return NextResponse.json({ message: locale === "id" ? "Pesan belum berhasil dikirim. Silakan gunakan WhatsApp atau email." : "The message was not delivered. Please use WhatsApp or email." }, { status: 502 }); }
  return NextResponse.json({ ok: true });
}

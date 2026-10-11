"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/site";

export function ContactForm({ locale }: { locale: Locale }) {
  const id = locale === "id";
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("service");
    if (requested === "ai-office") setService("Avia AI Office demo / pilot");
    if (requested === "security-workspace") setService("Avia Security Workspace interest");
  }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, locale, startedAt: startedAt.current }) });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(body.message || (id ? "Pesan belum dapat dikirim." : "The message could not be sent."));
      setStatus("sent"); setMessage(id ? "Pesan terkirim. Tim Avia Code akan membalas pada jam kerja." : "Message sent. The Avia Code team will reply during business hours."); form.reset();
    } catch (error) { setStatus("error"); setMessage(error instanceof Error ? error.message : (id ? "Terjadi kesalahan." : "Something went wrong.")); }
  }
  return (
    <form className="contact-form" onSubmit={submit} aria-busy={status === "sending"}>
      <div className="field-row"><label>{id ? "Nama" : "Name"}<input name="name" autoComplete="name" required minLength={2} /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div>
      <div className="field-row"><label>{id ? "Perusahaan (opsional)" : "Company (optional)"}<input name="company" autoComplete="organization" /></label><label>WhatsApp ({id ? "opsional" : "optional"})<input name="whatsapp" type="tel" autoComplete="tel" /></label></div>
      <label>{id ? "Layanan yang diminati" : "Service of interest"}<select name="service" required value={service} onChange={e => setService(e.target.value)}><option value="" disabled>{id ? "Pilih layanan" : "Choose a service"}</option><option>Website / custom software</option><option>POS / dashboard</option><option>Digital invitation</option><option>AI workflow</option><option>Avia AI Office demo / pilot</option><option>Avia Security Workspace interest</option><option>Security assessment / pentest</option><option>{id ? "Lainnya" : "Other"}</option></select></label>
      <label>{id ? "Ceritakan kebutuhan Anda" : "Tell us what you need"}<textarea name="message" required minLength={20} maxLength={3000} rows={5} placeholder={id ? "Masalah yang ingin diselesaikan, target waktu, dan kisaran budget (jika ada)…" : "The problem, target timeline, and approximate budget (if available)…"} /></label>
      <label className="honey" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <div className="consent"><label><input name="consent" type="checkbox" required /> <span>{id ? "Saya setuju data ini digunakan untuk menanggapi pertanyaan saya sesuai" : "I agree that this data may be used to respond to my inquiry under the"}</span></label> <Link href={id ? "/privacy" : "/en/privacy"}>{id ? "Kebijakan Privasi" : "Privacy Policy"}</Link>.</div>
      <button className="button" disabled={status === "sending"}>{status === "sending" ? (id ? "Mengirim…" : "Sending…") : (id ? "Kirim permintaan" : "Send inquiry")}</button>
      {message && <p className={`form-status ${status}`} role="status">{message}</p>}
    </form>
  );
}

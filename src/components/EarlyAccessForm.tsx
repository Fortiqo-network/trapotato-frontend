"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitEarlyAccess } from "@/lib/api";
import { collectDeviceDetails } from "@/lib/device";
import { TERMS_VERSION } from "@/lib/legal";
import { site } from "@/lib/site";

const DURATIONS = [
  "Just trying it out",
  "About 1 week",
  "About 1 month",
  "2–3 months",
  "6+ months",
  "Ongoing / not sure yet",
];

const USE_CASES = [
  "Technical / coding interviews",
  "Non-technical interviews",
  "Client & sales meetings",
  "Standups & team meetings",
  "Exams / assessments",
  "Something else",
];

interface FormState {
  fullName: string;
  email: string;
  whatsapp: string;
  company: string;
  role: string;
  primaryUse: string;
  useCase: string;
  duration: string;
  referral: string;
}

const EMPTY: FormState = {
  fullName: "",
  email: "",
  whatsapp: "",
  company: "",
  role: "",
  primaryUse: USE_CASES[0],
  useCase: "",
  duration: DURATIONS[0],
  referral: "",
};

const inputClass =
  "w-full rounded-xl border border-porcelain/12 bg-ink-950/40 px-4 py-2.5 text-sm text-porcelain placeholder:text-graphite/70 outline-none transition-colors focus:border-gold/50";
const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wider text-graphite";

export function EarlyAccessForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.fullName.trim() || !form.email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
    if (!accepted) {
      setError("Please accept the Terms & Conditions to continue.");
      return;
    }

    setSubmitting(true);
    try {
      await submitEarlyAccess({
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        whatsapp: form.whatsapp.trim(),
        company: form.company.trim(),
        role: form.role.trim(),
        // Combine the chosen category with the free-text detail.
        useCase: [form.primaryUse, form.useCase.trim()].filter(Boolean).join(" — "),
        duration: form.duration,
        referral: form.referral.trim(),
        acceptedTerms: true,
        termsVersion: TERMS_VERSION,
        device: collectDeviceDetails(),
      });
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="ring-hairline rounded-3xl bg-ink-800/40 p-10 text-center">
        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-live/10 text-live ring-1 ring-live/20">
          <CheckCircle2 size={28} />
        </div>
        <h2 className="font-brand text-2xl font-extrabold">You&rsquo;re on the list</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-graphite">
          Thanks, {form.fullName.split(" ")[0] || "there"} — your early-access request has been received. We&rsquo;ll
          reach out at <span className="text-porcelain">{form.email}</span> with next steps.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex items-center gap-2 rounded-full border border-porcelain/15 px-6 py-3 text-sm font-semibold text-porcelain transition-colors hover:bg-porcelain/5"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="ring-hairline rounded-3xl bg-ink-800/40 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="ea-name">Full name *</label>
          <input id="ea-name" className={inputClass} value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Jane Doe" autoComplete="name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="ea-email">Email *</label>
          <input id="ea-email" type="email" className={inputClass} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@example.com" autoComplete="email" />
        </div>
        <div>
          <label className={labelClass} htmlFor="ea-whatsapp">WhatsApp / phone</label>
          <input id="ea-whatsapp" className={inputClass} value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)} placeholder="+1 555 123 4567" autoComplete="tel" />
        </div>
        <div>
          <label className={labelClass} htmlFor="ea-company">Company / school</label>
          <input id="ea-company" className={inputClass} value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Optional" autoComplete="organization" />
        </div>
        <div>
          <label className={labelClass} htmlFor="ea-role">Your role</label>
          <input id="ea-role" className={inputClass} value={form.role} onChange={(e) => set("role", e.target.value)} placeholder="e.g. Software Engineer" />
        </div>
        <div>
          <label className={labelClass} htmlFor="ea-primary">What will you use it for?</label>
          <select id="ea-primary" className={inputClass} value={form.primaryUse} onChange={(e) => set("primaryUse", e.target.value)}>
            {USE_CASES.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="ea-duration">How long do you need access?</label>
          <select id="ea-duration" className={inputClass} value={form.duration} onChange={(e) => set("duration", e.target.value)}>
            {DURATIONS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="ea-referral">How did you hear about us?</label>
          <input id="ea-referral" className={inputClass} value={form.referral} onChange={(e) => set("referral", e.target.value)} placeholder="Optional" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="ea-usecase">Anything else we should know?</label>
          <textarea id="ea-usecase" rows={3} className={inputClass} value={form.useCase} onChange={(e) => set("useCase", e.target.value)} placeholder="Tell us about your use case, timeline, or questions." />
        </div>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-porcelain/12 bg-ink-950/40 p-4">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-gold"
        />
        <span className="text-sm leading-relaxed text-porcelain/90">
          I agree to the{" "}
          <Link href="/terms" target="_blank" className="font-semibold text-gold hover:underline">
            Terms &amp; Conditions
          </Link>{" "}
          and understand that I am solely responsible for how and where I use {site.name}. *
        </span>
      </label>

      {error && <p className="mt-4 text-sm text-rose-400">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="glow-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform enabled:hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? (<><Loader2 size={16} className="animate-spin" /> Submitting…</>) : "Request early access"}
      </button>
      <p className="mt-3 text-center text-xs text-graphite">
        Prefer email? Write to{" "}
        <a href={`mailto:${site.support.email}?subject=Trapotato%20early%20access`} className="text-gold hover:underline">
          {site.support.email}
        </a>
      </p>
    </form>
  );
}

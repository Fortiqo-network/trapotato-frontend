"use client";

// First-visit Terms & Conditions gate. Shown once per device until the user
// accepts the current TERMS_VERSION. The acceptance — value, timestamp, terms
// version, and a device snapshot — is stored locally in localStorage.

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, AlertTriangle } from "lucide-react";
import { TERMS_VERSION, termsHighlights } from "@/lib/legal";
import { collectDeviceDetails } from "@/lib/device";
import { site } from "@/lib/site";

const STORAGE_KEY = "trapotato.terms";

interface AcceptanceRecord {
  accepted: boolean;
  version: string;
  acceptedAt: string;
  device: ReturnType<typeof collectDeviceDetails>;
}

function hasAccepted(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const rec = JSON.parse(raw) as AcceptanceRecord;
    return rec.accepted === true && rec.version === TERMS_VERSION;
  } catch {
    return false;
  }
}

export function TermsGate() {
  const pathname = usePathname();
  // Don't gate the Terms page itself — users must be able to read it (the gate
  // links here in a new tab before they accept).
  const exempt = pathname?.startsWith("/terms") ?? false;

  // `null` until we've checked storage on the client (avoids hydration flash).
  const [open, setOpen] = useState<boolean | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setOpen(exempt ? false : !hasAccepted());
  }, [exempt]);

  // Lock background scroll while the gate is open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  function accept() {
    const record: AcceptanceRecord = {
      accepted: true,
      version: TERMS_VERSION,
      acceptedAt: new Date().toISOString(),
      device: collectDeviceDetails(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    } catch {
      /* storage unavailable (private mode) — still let them through this session */
    }
    setOpen(false);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-gate-title"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-ink-950/80 p-4 backdrop-blur-md"
    >
      <div className="glass ring-hairline my-8 w-full max-w-lg rounded-3xl p-7 shadow-2xl sm:p-8">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20">
          <ShieldCheck size={24} />
        </div>

        <h2 id="terms-gate-title" className="font-brand text-2xl font-extrabold">
          Before you continue
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-graphite">
          {site.name} is a powerful tool, and how you use it is your responsibility. Please read and accept
          our Terms &amp; Conditions to continue.
        </p>

        <ul className="mt-5 space-y-2.5">
          {termsHighlights.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-porcelain/85">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-gold" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-porcelain/12 bg-ink-800/40 p-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-gold"
          />
          <span className="text-sm leading-relaxed text-porcelain/90">
            I have read and agree to the{" "}
            <Link href="/terms" target="_blank" className="font-semibold text-gold hover:underline">
              Terms &amp; Conditions
            </Link>
            , and I understand that I alone am responsible for how and where I use {site.name}.
          </span>
        </label>

        <button
          type="button"
          disabled={!checked}
          onClick={accept}
          className="glow-ring mt-5 w-full rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink-950 transition-transform enabled:hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
        >
          I Agree &amp; Continue
        </button>
      </div>
    </div>
  );
}

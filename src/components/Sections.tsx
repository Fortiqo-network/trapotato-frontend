import {
  Sparkles,
  EyeOff,
  AudioLines,
  KeyRound,
  Code2,
  Command,
  ShieldCheck,
  Image as ImageIcon,
  Mail,
  MessageCircle,
  Bug,
  Download as DownloadIcon,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { site, plans, features, steps } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Sparkles, EyeOff, AudioLines, KeyRound, Code2, Command,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 font-brand-mono text-xs uppercase tracking-[0.2em] text-gold">{children}</div>
  );
}

/* ── Product briefing ─────────────────────────────────────────── */
export function Product() {
  return (
    <section id="product" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="max-w-3xl">
          <SectionLabel>What it is</SectionLabel>
          <h2 className="font-brand text-display-sm font-extrabold">
            A copilot that listens, understands, and answers — without ever being seen.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-graphite">
            Trapotato runs as a frameless, content-protected overlay on top of your call. It captures the
            conversation, transcribes it live, and uses your own AI model to draft the perfect response in
            real time. It never shows up on your screen share, taskbar, or Alt-Tab — so you stay sharp and
            in control while everything happens quietly on your side.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Private by design", b: "Meeting data and API keys stay on your machine. Only your license is checked online." },
            { icon: AudioLines, t: "Always listening", b: "System audio + microphone transcribed continuously, with speaker context." },
            { icon: Sparkles, t: "Under 500ms", b: "Answers stream in as the question is asked — fast enough for live conversation." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 0.08}>
              <div className="ring-hairline h-full rounded-2xl bg-ink-800/40 p-6">
                <c.icon className="mb-4 text-gold" size={22} />
                <h3 className="font-brand text-base font-bold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Demo / screenshots placeholder ───────────────────────────── */
export function Demo() {
  return (
    <section id="demo" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <SectionLabel>Product demo</SectionLabel>
          <h2 className="font-brand text-display-sm font-extrabold">See Trapotato in action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-graphite">
            A guided walkthrough and live screenshots are on the way.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="ring-hairline mt-12 grid aspect-[16/9] place-items-center rounded-3xl bg-ink-800/40">
            <div className="grain relative flex flex-col items-center gap-3 text-center">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20">
                <ImageIcon size={26} />
              </div>
              <p className="font-brand text-lg font-bold">Demo &amp; screenshots coming soon</p>
              <p className="max-w-md text-sm text-graphite">
                This space is reserved for product screenshots and a video walkthrough.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Features grid ────────────────────────────────────────────── */
export function Features() {
  return (
    <section id="features" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Features</SectionLabel>
          <h2 className="max-w-2xl font-brand text-display-sm font-extrabold">
            Everything you need, nothing that gives you away.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = icons[f.icon] ?? Sparkles;
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="ring-hairline group h-full rounded-2xl bg-ink-800/40 p-6 transition-colors hover:bg-ink-700/50">
                  <div className="mb-4 inline-grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/15">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-brand text-lg font-bold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── How it works ─────────────────────────────────────────────── */
export function HowItWorks() {
  return (
    <section id="how" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="font-brand text-display-sm font-extrabold">Up and running in four steps</h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-gold/30 bg-gold/10 font-brand text-lg font-bold text-gold">
                  {s.n}
                </div>
                <h3 className="font-brand text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ──────────────────────────────────────────────────── */
export function Pricing() {
  return (
    <section id="pricing" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="font-brand text-display-sm font-extrabold">Simple subscription. Pay the team directly.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-graphite">
            Start with a 10-minute free trial. To subscribe, pick a plan and contact the team to pay — we&apos;ll
            share payment details and activate your key.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`relative h-full rounded-3xl p-7 ${
                  p.highlight
                    ? "bg-gradient-to-b from-gold/15 to-transparent ring-1 ring-gold/30"
                    : "ring-hairline bg-ink-800/40"
                }`}
              >
                {p.highlight && (
                  <div className="absolute right-5 top-5 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-950">
                    Best value
                  </div>
                )}
                <div className="font-brand-mono text-xs uppercase tracking-widest text-graphite">{p.name}</div>
                <div className="mt-3 flex items-end gap-1">
                  <span className="font-brand text-4xl font-extrabold">{p.price}</span>
                  <span className="mb-1 text-sm text-graphite">{p.period}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm text-porcelain/80">
                  {["One active device at a time", "All AI + transcription providers", "Stealth overlay & shortcuts", "Bring your own keys"].map((li) => (
                    <li key={li} className="flex items-start gap-2">
                      <Check size={16} className="mt-0.5 shrink-0 text-gold" /> {li}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${site.support.email}?subject=Trapotato%20${encodeURIComponent(p.name)}%20plan`}
                  className={`mt-7 block rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                    p.highlight ? "bg-gold text-ink-950" : "border border-porcelain/15 text-porcelain hover:bg-porcelain/5"
                  }`}
                >
                  Contact to buy
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Download ─────────────────────────────────────────────────── */
export function Download() {
  const ready = Boolean(site.downloadUrl);
  return (
    <section id="download" className="relative px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-ink-800/70 to-ink-900/70 p-10 text-center ring-1 ring-gold/15 sm:p-14">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-40 bg-aurora-radial" />
            <h2 className="font-brand text-display-sm font-extrabold">Get Trapotato</h2>
            <p className="mx-auto mt-4 max-w-xl text-graphite">
              Free 10-minute trial included. Windows build available — macOS coming soon.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {ready ? (
                <a
                  href={site.downloadUrl}
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
                >
                  <DownloadIcon size={17} /> Download for Windows
                </a>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-porcelain/10 px-7 py-3.5 text-sm font-semibold text-porcelain/60">
                  <DownloadIcon size={17} /> Download coming soon
                </span>
              )}
              <a
                href={`mailto:${site.support.email}?subject=Trapotato%20access`}
                className="inline-flex items-center gap-2 rounded-full border border-porcelain/15 px-7 py-3.5 text-sm font-semibold text-porcelain transition-colors hover:bg-porcelain/5"
              >
                Request early access
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer className="border-t border-porcelain/8 px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Trapotato" width={26} height={26} className="rounded-md" />
              <span className="font-brand text-lg font-extrabold">{site.name}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-graphite">{site.tagline}</p>
          </div>

          <div>
            <div className="mb-3 font-brand-mono text-xs uppercase tracking-widest text-graphite">Support &amp; report a bug</div>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`mailto:${site.support.email}`} className="inline-flex items-center gap-2 text-porcelain/85 hover:text-gold">
                <Mail size={15} /> {site.support.email}
              </a>
              <a href={site.support.whatsappLink} className="inline-flex items-center gap-2 text-porcelain/85 hover:text-gold">
                <MessageCircle size={15} /> WhatsApp {site.support.whatsapp}
              </a>
              <span className="inline-flex items-center gap-2 text-graphite">
                <Bug size={15} /> Found a bug? Message us above.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-porcelain/8 pt-6 text-xs text-graphite sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="font-brand-mono">{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}

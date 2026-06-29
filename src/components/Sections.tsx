import {
  Sparkles,
  EyeOff,
  AudioLines,
  KeyRound,
  ScanText,
  Archive,
  ShieldCheck,
  MonitorOff,
  Lock,
  HardDrive,
  RefreshCw,
  Mail,
  MessageCircle,
  Bug,
  Download as DownloadIcon,
  Check,
  ScreenShareOff,
  Flame,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import {
  site,
  plans,
  planIncludes,
  sale,
  features,
  steps,
  actions,
  shortcuts,
  aiProviders,
  transcriptionProviders,
} from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Sparkles, EyeOff, AudioLines, KeyRound, ScanText, Archive,
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 font-brand-mono text-xs uppercase tracking-[0.2em] text-gold">{children}</div>
  );
}

/* ── Stealth — the core differentiator ────────────────────────── */
export function Stealth() {
  const guarantees = [
    { icon: ScreenShareOff, t: "Off your screen share", b: "Content-protected against screen sharing and recording — Zoom, Meet, Teams, and OBS capture an empty desktop." },
    { icon: MonitorOff, t: "Hidden from the system", b: "No taskbar button, no tray icon, no Alt-Tab entry. In Task Manager it quietly appears as “Settings.”" },
    { icon: EyeOff, t: "Yours alone", b: "Press Ctrl+B to summon or hide it instantly. Ctrl+Shift+B makes it click-through so it never gets in your way." },
  ];

  return (
    <section id="stealth" className="relative px-5 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionLabel>Truly invisible</SectionLabel>
          <h2 className="font-brand text-display-sm font-extrabold">
            They share their screen.<br />You share nothing.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-graphite">
            Trapotato runs as a frameless, always-on-top overlay that is invisible to screen capture.
            Flip a single toggle and it vanishes from screen shares, recordings, the taskbar, and the
            system tray — leaving only the answers on your side of the glass.
          </p>

          <div className="mt-8 space-y-4">
            {guarantees.map((g) => (
              <div key={g.t} className="flex gap-4">
                <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-live/10 text-live ring-1 ring-live/20">
                  <g.icon size={18} />
                </div>
                <div>
                  <h3 className="font-brand text-base font-bold">{g.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-graphite">{g.b}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <StealthVisual />
        </Reveal>
      </div>
    </section>
  );
}

function StealthVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 glow-live" />
      {/* "What they see" — a screen-share frame with nothing on it */}
      <div className="ring-hairline overflow-hidden rounded-2xl bg-ink-900/70">
        <div className="flex items-center gap-2 border-b border-porcelain/5 px-4 py-2.5">
          <ScreenShareOff size={13} className="text-graphite" />
          <span className="font-brand-mono text-[11px] text-graphite">what they see · screen share</span>
        </div>
        <div className="grid aspect-[16/10] place-items-center bg-ink-950/60">
          <div className="grain relative flex flex-col items-center gap-2 text-center">
            <EyeOff size={26} className="text-graphite/50" />
            <p className="font-brand-mono text-xs text-graphite/60">no overlay detected</p>
          </div>
        </div>
      </div>

      {/* Task Manager row — disguised as "Settings" */}
      <div className="ring-hairline mt-4 overflow-hidden rounded-xl bg-ink-900/70">
        <div className="border-b border-porcelain/5 px-4 py-2 font-brand-mono text-[10px] uppercase tracking-wider text-graphite">
          Task Manager · Processes
        </div>
        <div className="divide-y divide-porcelain/5 text-xs">
          {[
            { n: "Settings", cpu: "0.4%", live: true },
            { n: "Code.exe", cpu: "2.1%", live: false },
            { n: "chrome.exe", cpu: "6.8%", live: false },
          ].map((row) => (
            <div key={row.n} className="flex items-center justify-between px-4 py-2.5">
              <span className={`font-brand-mono ${row.live ? "text-live" : "text-porcelain/70"}`}>{row.n}</span>
              <span className="text-graphite">{row.cpu}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
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

/* ── In-meeting actions + global shortcuts ────────────────────── */
export function Actions() {
  return (
    <section id="shortcuts" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>One keystroke away</SectionLabel>
          <h2 className="max-w-2xl font-brand text-display-sm font-extrabold">
            Seven actions. Zero hunting for a button.
          </h2>
          <p className="mt-4 max-w-2xl text-graphite">
            Every move is a global shortcut — they fire even while the window is hidden. Tap a number and
            the right kind of help appears in the overlay.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((a, i) => (
            <Reveal key={a.key} delay={(i % 3) * 0.07}>
              <div className="ring-hairline flex h-full items-start gap-4 rounded-2xl bg-ink-800/40 p-5">
                <kbd className="kbd mt-0.5 shrink-0">{a.key}</kbd>
                <div>
                  <h3 className="font-brand text-base font-bold">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-graphite">{a.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="ring-hairline mt-6 rounded-2xl bg-ink-900/50 p-6">
            <div className="mb-4 font-brand-mono text-xs uppercase tracking-widest text-graphite">
              Global controls
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {shortcuts.map((s) => (
                <div key={s.key} className="flex items-center gap-2.5">
                  <kbd className="kbd">{s.key}</kbd>
                  <span className="text-sm text-porcelain/80">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Bring your own keys / providers ──────────────────────────── */
export function Providers() {
  return (
    <section id="providers" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <SectionLabel>Bring your own keys</SectionLabel>
          <h2 className="font-brand text-display-sm font-extrabold">Your models. Your keys. Your machine.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-graphite">
            Plug in the providers you already pay for. Keys are stored locally and never pass through our
            servers — only your license is checked online. Run fully offline with Ollama if you prefer.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Reveal>
            <ProviderCard label="AI / LLM" sub="Settings → AI Providers" items={aiProviders} />
          </Reveal>
          <Reveal delay={0.08}>
            <ProviderCard label="Transcription" sub="Settings → Audio" items={transcriptionProviders} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProviderCard({ label, sub, items }: { label: string; sub: string; items: readonly string[] }) {
  return (
    <div className="ring-hairline h-full rounded-2xl bg-ink-800/40 p-6">
      <div className="flex items-baseline justify-between">
        <h3 className="font-brand text-lg font-bold">{label}</h3>
        <span className="font-brand-mono text-[11px] text-graphite">{sub}</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className="rounded-full border border-porcelain/10 bg-ink-950/40 px-3 py-1.5 text-sm text-porcelain/85"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Privacy / local-first band ───────────────────────────────── */
export function Privacy() {
  const points = [
    { icon: HardDrive, t: "Local-first", b: "Transcripts, notes, and history live on your machine — not in a cloud we control." },
    { icon: Lock, t: "Keys stay home", b: "Your AI and transcription keys are never uploaded or proxied. Only the license check goes online." },
    { icon: RefreshCw, t: "Fail-closed licensing", b: "Re-verified twice on startup and every 5 minutes. If it can't confirm your license, it locks." },
  ];
  return (
    <section id="privacy" className="relative px-5 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <SectionLabel>Private by design</SectionLabel>
          <h2 className="font-brand text-display-sm font-extrabold">What happens on your call, stays on your machine.</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <div className="ring-hairline h-full rounded-2xl bg-ink-800/40 p-6">
                <p.icon className="mb-4 text-live" size={22} />
                <h3 className="font-brand text-base font-bold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{p.b}</p>
              </div>
            </Reveal>
          ))}
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
          {sale.active && (
            <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold">
              <Flame size={15} /> {sale.label} — for a limited time
            </div>
          )}
          <p className="mx-auto mt-4 max-w-2xl text-graphite">
            Start with a {site.trial}. To subscribe, pick a plan and contact the team — we&apos;ll share
            payment details and activate your product key.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 ${
                  p.highlight
                    ? "bg-gradient-to-b from-gold/15 to-transparent ring-1 ring-gold/30"
                    : "ring-hairline bg-ink-800/40"
                }`}
              >
                {p.highlight && (
                  <div className="absolute right-5 top-5 rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-950">
                    Popular
                  </div>
                )}
                <div className="flex items-center gap-2.5">
                  <div className="font-brand-mono text-xs uppercase tracking-widest text-graphite">{p.name}</div>
                  {sale.active && (
                    <span className="rounded-full bg-rose-500/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      −{sale.percent}%
                    </span>
                  )}
                </div>
                <div className="mt-3 flex items-end gap-2">
                  <span className="font-brand text-4xl font-extrabold">{p.price}</span>
                  {p.original && (
                    <span className="mb-1.5 font-brand text-xl font-bold text-graphite line-through decoration-rose-400/80 decoration-2">
                      {p.original}
                    </span>
                  )}
                  <span className="mb-1 text-sm text-graphite">{p.period}</span>
                </div>
                <div className="mt-1 h-4 text-xs text-live">{p.note ?? " "}</div>
                <ul className="mt-5 space-y-2.5 text-sm text-porcelain/80">
                  {planIncludes.map((li) => (
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

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-graphite">
            One product key = one active device. Moving machines? Contact support for an activation reset.
          </p>
        </Reveal>
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
            <SectionLabel>Get Trapotato</SectionLabel>
            <h2 className="font-brand text-display-sm font-extrabold">Be the sharpest person on the call.</h2>
            <p className="mx-auto mt-4 max-w-xl text-graphite">
              {site.trial} included. {site.platform} build available — macOS coming soon.
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
                href="/early-access"
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
              <img src="/logo.png" alt="Trapotato" width={26} height={26} loading="lazy" decoding="async" className="rounded-md" />
              <span className="font-brand text-lg font-extrabold">{site.name}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-graphite">{site.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div>
              <div className="mb-3 font-brand-mono text-xs uppercase tracking-widest text-graphite">Product</div>
              <div className="flex flex-col gap-2 text-sm">
                <a href="/#stealth" className="text-porcelain/85 hover:text-gold">Stealth</a>
                <a href="/#features" className="text-porcelain/85 hover:text-gold">Features</a>
                <a href="/#pricing" className="text-porcelain/85 hover:text-gold">Pricing</a>
                <a href="/docs" className="text-porcelain/85 hover:text-gold">Docs &amp; guide</a>
                <a href="/early-access" className="text-porcelain/85 hover:text-gold">Early access</a>
              </div>
            </div>
            <div>
              <div className="mb-3 font-brand-mono text-xs uppercase tracking-widest text-graphite">Support</div>
              <div className="flex flex-col gap-2 text-sm">
                <a href={`mailto:${site.support.email}`} className="inline-flex items-center gap-2 text-porcelain/85 hover:text-gold">
                  <Mail size={15} /> Email
                </a>
                <a href={site.support.whatsappLink} className="inline-flex items-center gap-2 text-porcelain/85 hover:text-gold">
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <a href={`mailto:${site.support.email}?subject=Trapotato%20bug%20report`} className="inline-flex items-center gap-2 text-porcelain/85 hover:text-gold">
                  <Bug size={15} /> Report a bug
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-porcelain/8 pt-6 text-xs text-graphite sm:flex-row">
          <span className="inline-flex items-center gap-3">
            © {new Date().getFullYear()} {site.name}.
            <a href="/terms" className="hover:text-gold">Terms &amp; Conditions</a>
          </span>
          <span className="inline-flex items-center gap-1.5 font-brand-mono">
            <ShieldCheck size={13} className="text-graphite" /> {site.domain}
          </span>
        </div>
      </div>
    </footer>
  );
}

/* exported for reuse on subpages */
export { SectionLabel };

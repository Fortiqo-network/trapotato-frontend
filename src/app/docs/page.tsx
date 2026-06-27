import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Footer } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { graph, faqPageLd, breadcrumbLd } from "@/lib/seo";
import {
  site,
  shortcuts,
  actions,
  aiProviders,
  transcriptionProviders,
  faqs,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Docs & User Guide",
  description:
    "Install, activate, and run Trapotato. Stealth mode, keyboard shortcuts, bring-your-own-keys setup, troubleshooting, and FAQ.",
  alternates: { canonical: `${site.url}/docs` },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="mb-3 font-brand-mono text-xs uppercase tracking-[0.2em] text-gold">{children}</div>;
}

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 font-brand text-2xl font-extrabold sm:text-3xl">
      {children}
    </h2>
  );
}

const sections = [
  { id: "install", label: "Installation" },
  { id: "setup", label: "First-time setup" },
  { id: "stealth", label: "Stealth mode" },
  { id: "shortcuts", label: "Keyboard shortcuts" },
  { id: "byok", label: "Bring your own keys" },
  { id: "license", label: "Licensing" },
  { id: "trouble", label: "Troubleshooting" },
  { id: "faq", label: "FAQ" },
];

const troubleshooting = [
  { p: "The app won't open", f: "It's stealth — press Ctrl+B to reveal the window." },
  { p: "“Cannot reach the license server”", f: "You're offline or the server is down. Reconnect and press Retry. The app is fail-closed and won't run without verification." },
  { p: "“Product key not found”", f: "Re-check the key for typos. Contact support if it persists." },
  { p: "“Already locked to a different device”", f: "The key is bound to another machine. Ask support for an activation reset." },
  { p: "“License expired / disabled”", f: "Renew or contact support to restore access." },
  { p: "No transcription", f: "Add a transcription key in Settings → Audio and select an engine." },
  { p: "No AI answers", f: "Add an AI key in Settings → AI Providers (or run local Ollama)." },
  { p: "SmartScreen warning on install", f: "Click More info → Run anyway. This disappears once the build is code-signed." },
];

export default function DocsPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbLd("Docs & User Guide", "/docs"), faqPageLd)} />
      <AnimatedBackground />
      <Nav />
      <main className="px-5 pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>User guide</Eyebrow>
          <h1 className="font-brand text-display-sm font-black">Docs &amp; setup</h1>
          <p className="mt-4 text-lg leading-relaxed text-graphite">
            Everything you need to install, activate, and run {site.name}. It&apos;s a stealth AI meeting
            &amp; interview assistant — it listens, transcribes live, and feeds you answers in an invisible
            overlay.
          </p>

          {/* on-page nav */}
          <nav className="mt-8 flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-porcelain/10 bg-ink-800/40 px-3 py-1.5 text-xs text-porcelain/80 transition-colors hover:border-gold/30 hover:text-gold"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-16">
          {/* Installation */}
          <section className="space-y-4">
            <H2 id="install">Installation</H2>
            <ol className="space-y-3 text-sm leading-relaxed text-porcelain/85">
              <li className="flex gap-3"><Step n={1} /> Download <code className="text-gold">Trapotato-Setup-&lt;version&gt;.exe</code> for {site.platform}.</li>
              <li className="flex gap-3"><Step n={2} /> Run it. If Windows SmartScreen warns about an unknown publisher, click <strong>More info → Run anyway</strong> (this disappears once the build is code-signed).</li>
              <li className="flex gap-3"><Step n={3} /> Launch Trapotato. It starts in stealth mode — press <kbd className="kbd">Ctrl+B</kbd> to show or hide the window.</li>
            </ol>
          </section>

          {/* First-time setup */}
          <section className="space-y-4">
            <H2 id="setup">First-time setup</H2>
            <ol className="space-y-3 text-sm leading-relaxed text-porcelain/85">
              <li className="flex gap-3"><Step n={1} /> <span><strong>Activate your license</strong> — enter your product key. It&apos;s verified online and locked to this device. New accounts get a {site.trial} automatically.</span></li>
              <li className="flex gap-3"><Step n={2} /> <span><strong>Add your AI key</strong> — Settings → AI Providers.</span></li>
              <li className="flex gap-3"><Step n={3} /> <span><strong>Add your transcription key</strong> — Settings → Audio.</span></li>
              <li className="flex gap-3"><Step n={4} /> <span>Open <strong>? Help &amp; FAQ</strong> (bottom-left) anytime for in-app guidance.</span></li>
            </ol>
          </section>

          {/* Stealth */}
          <section className="space-y-4">
            <H2 id="stealth">Stealth mode</H2>
            <p className="text-sm leading-relaxed text-graphite">
              Trapotato runs in stealth mode by default: <strong className="text-porcelain/90">no taskbar button,
              no system-tray icon</strong>, and it appears as <strong className="text-porcelain/90">“Settings”</strong> in
              Task Manager. The overlay is content-protected, so it never shows on screen shares or recordings.
            </p>
            <div className="ring-hairline rounded-2xl bg-ink-800/40 p-5 text-sm text-porcelain/85">
              <div className="flex items-center gap-2.5"><kbd className="kbd">Ctrl+B</kbd> Show / hide the window</div>
              <div className="mt-3 flex items-center gap-2.5"><kbd className="kbd">Ctrl+Shift+B</kbd> Toggle click-through (mouse passes straight through)</div>
            </div>
          </section>

          {/* Shortcuts */}
          <section className="space-y-4">
            <H2 id="shortcuts">Keyboard shortcuts</H2>
            <p className="text-sm leading-relaxed text-graphite">
              All shortcuts are global and fire even while the window is hidden. Use <kbd className="kbd">Cmd</kbd> on macOS.
            </p>

            <div className="mb-2 mt-2 font-brand-mono text-xs uppercase tracking-widest text-graphite">In-meeting actions</div>
            <div className="ring-hairline overflow-hidden rounded-2xl">
              {actions.map((a) => (
                <Row key={a.key} k={a.key} v={a.title} />
              ))}
            </div>

            <div className="mb-2 mt-6 font-brand-mono text-xs uppercase tracking-widest text-graphite">Window &amp; capture</div>
            <div className="ring-hairline overflow-hidden rounded-2xl">
              {shortcuts.map((s) => (
                <Row key={s.key} k={s.key} v={s.label} />
              ))}
            </div>
          </section>

          {/* BYOK */}
          <section className="space-y-4">
            <H2 id="byok">Bring your own keys</H2>
            <p className="text-sm leading-relaxed text-graphite">
              Your keys never leave your device — Trapotato doesn&apos;t store or proxy them online; only your
              license is checked against the server. For a fully offline AI, install Ollama (ollama.com) — no key needed.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <KeyCard title="AI / LLM key" where="Settings → AI Providers" items={aiProviders} />
              <KeyCard title="Transcription key" where="Settings → Audio" items={transcriptionProviders} />
            </div>
          </section>

          {/* License */}
          <section className="space-y-4">
            <H2 id="license">Licensing</H2>
            <ul className="space-y-2.5 text-sm leading-relaxed text-porcelain/85">
              <li className="flex gap-2"><Dot /> One product key = one machine, for the lifetime of the license.</li>
              <li className="flex gap-2"><Dot /> Trapotato re-verifies your license twice on startup and every 5 minutes.</li>
              <li className="flex gap-2"><Dot /> <strong>Fail-closed:</strong> if the license is disabled, expired, or the server can&apos;t be reached, the app locks and shows the reason. Reconnect and press <strong>Retry connection</strong>.</li>
              <li className="flex gap-2"><Dot /> Moving to a new computer requires an activation reset — contact support.</li>
            </ul>
          </section>

          {/* Troubleshooting */}
          <section className="space-y-4">
            <H2 id="trouble">Troubleshooting</H2>
            <div className="ring-hairline overflow-hidden rounded-2xl">
              {troubleshooting.map((t) => (
                <div key={t.p} className="grid gap-1 border-b border-porcelain/5 px-5 py-4 last:border-0 sm:grid-cols-5 sm:gap-4">
                  <div className="font-medium text-porcelain/90 sm:col-span-2">{t.p}</div>
                  <div className="text-sm text-graphite sm:col-span-3">{t.f}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-4">
            <H2 id="faq">FAQ</H2>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="ring-hairline group rounded-2xl bg-ink-800/40 p-5 [&_summary]:cursor-pointer">
                  <summary className="flex items-center justify-between font-brand text-base font-bold text-porcelain marker:content-['']">
                    {f.q}
                    <span className="ml-4 text-gold transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Support */}
          <section className="ring-hairline rounded-2xl bg-ink-800/40 p-6">
            <h2 className="font-brand text-lg font-bold">Still stuck?</h2>
            <p className="mt-2 text-sm text-graphite">We&apos;re happy to help — reach the team directly.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={`mailto:${site.support.email}`} className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]">
                Email support
              </a>
              <a href={site.support.whatsappLink} className="rounded-full border border-porcelain/15 px-5 py-2.5 text-sm font-semibold text-porcelain transition-colors hover:bg-porcelain/5">
                WhatsApp {site.support.whatsapp}
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Step({ n }: { n: number }) {
  return (
    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10 font-brand-mono text-xs font-bold text-gold">
      {n}
    </span>
  );
}

function Dot() {
  return <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />;
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-porcelain/5 bg-ink-800/30 px-5 py-3 last:border-0">
      <span className="text-sm text-porcelain/85">{v}</span>
      <kbd className="kbd shrink-0">{k}</kbd>
    </div>
  );
}

function KeyCard({ title, where, items }: { title: string; where: string; items: readonly string[] }) {
  return (
    <div className="ring-hairline rounded-2xl bg-ink-800/40 p-5">
      <h3 className="font-brand text-base font-bold">{title}</h3>
      <div className="mt-0.5 font-brand-mono text-[11px] text-graphite">{where}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((it) => (
          <span key={it} className="rounded-full border border-porcelain/10 bg-ink-950/40 px-2.5 py-1 text-xs text-porcelain/85">
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

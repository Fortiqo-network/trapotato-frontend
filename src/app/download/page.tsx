import type { Metadata } from "next";
import Link from "next/link";
import { Download as DownloadIcon, ShieldAlert, Cpu, Wifi, KeyRound, ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Footer } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { graph, breadcrumbLd, softwareApplicationLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download",
  description: `Download Trapotato for ${site.platform}. Includes a ${site.trial} — bring your own AI keys, everything stays on your device.`,
  alternates: { canonical: `${site.url}/download` },
};

const requirements = [
  { icon: Cpu, t: "Windows 10 or 11", b: "64-bit. A macOS build is on the way." },
  { icon: Wifi, t: "Internet connection", b: "Only your license is checked online — your data stays local." },
  { icon: KeyRound, t: "Your own AI keys", b: "OpenAI, Claude, Gemini, Groq, or local Ollama — plus a transcription key." },
];

const installSteps = [
  { t: "Run the installer", b: <>Open <code className="text-gold">Trapotato-Setup-&lt;version&gt;.exe</code>. If SmartScreen warns about an unknown publisher, click <strong>More info → Run anyway</strong>.</> },
  { t: "Activate your key", b: <>Launch the app and enter your product key — or start the {site.trial} instantly. It&apos;s verified online and locked to this device.</> },
  { t: "Add your keys & go", b: <>Drop your AI and transcription keys into Settings, then press <kbd className="kbd">Ctrl+B</kbd> to summon the invisible overlay on your next call.</> },
];

export default function DownloadPage() {
  const ready = Boolean(site.downloadUrl);
  return (
    <>
      <JsonLd data={graph(breadcrumbLd("Download", "/download"), softwareApplicationLd)} />
      <AnimatedBackground />
      <Nav />
      <main className="px-5 pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 font-brand-mono text-xs uppercase tracking-[0.2em] text-gold">Download</div>
          <h1 className="font-brand text-display-sm font-black">Get {site.name} for Windows</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-graphite">
            Install in under a minute. {site.trial} included — no card required, and your AI keys never
            leave your device.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {ready ? (
              <a
                href={site.downloadUrl}
                className="glow-ring inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
              >
                <DownloadIcon size={17} /> Download for {site.platform}
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-porcelain/10 px-7 py-3.5 text-sm font-semibold text-porcelain/60">
                <DownloadIcon size={17} /> Download coming soon
              </span>
            )}
            <Link
              href="/early-access"
              className="inline-flex items-center gap-2 rounded-full border border-porcelain/15 px-7 py-3.5 text-sm font-semibold text-porcelain transition-colors hover:bg-porcelain/5"
            >
              Request early access
            </Link>
          </div>
        </div>

        {/* SmartScreen note */}
        <div className="mx-auto mt-12 max-w-3xl">
          <div className="flex items-start gap-3 rounded-2xl border border-gold/20 bg-gold/[0.05] p-5">
            <ShieldAlert size={18} className="mt-0.5 shrink-0 text-gold" />
            <p className="text-sm leading-relaxed text-porcelain/85">
              The current build is unsigned, so Windows SmartScreen may warn about an unknown publisher on
              first run. Click <strong>More info → Run anyway</strong> — this prompt disappears once the
              build is code-signed.
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h2 className="font-brand text-2xl font-extrabold">Before you start</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {requirements.map((r) => (
              <div key={r.t} className="ring-hairline rounded-2xl bg-ink-800/40 p-6">
                <r.icon className="mb-4 text-gold" size={22} />
                <h3 className="font-brand text-base font-bold">{r.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">{r.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Install steps */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="font-brand text-2xl font-extrabold">Three steps to go</h2>
          <div className="mt-6 space-y-4">
            {installSteps.map((s, i) => (
              <div key={s.t} className="ring-hairline flex gap-4 rounded-2xl bg-ink-800/40 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10 font-brand font-bold text-gold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-brand text-base font-bold">{s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-graphite">{s.b}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-graphite">
            Need the full walkthrough?{" "}
            <Link href="/docs" className="inline-flex items-center gap-1 text-gold hover:underline">
              Read the docs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

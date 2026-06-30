"use client";

import { useEffect, useState } from "react";
import { Download, Monitor, Apple, Terminal, Check } from "lucide-react";
import { site } from "@/lib/site";

type OS = "windows" | "mac" | "linux" | "unknown";

function detectOS(): OS {
  if (typeof navigator === "undefined") return "unknown";
  const s = `${navigator.userAgent} ${navigator.platform}`.toLowerCase();
  if (s.includes("win")) return "windows";
  if (s.includes("mac")) return "mac";
  if (s.includes("linux") || s.includes("x11")) return "linux";
  return "unknown";
}

const ICONS: Record<string, typeof Monitor> = {
  windows: Monitor,
  apple: Apple,
  linux: Terminal,
};

export default function DownloadButtons() {
  const [os, setOs] = useState<OS>("unknown");
  useEffect(() => setOs(detectOS()), []);

  const base = site.releaseBase;
  // Show the visitor's platform first.
  const platforms = [...site.platforms].sort(
    (a, b) => (a.id === os ? 0 : 1) - (b.id === os ? 0 : 1)
  );

  return (
    <div className="grid gap-4 text-left sm:grid-cols-3">
      {platforms.map((p) => {
        const Icon = ICONS[p.icon] ?? Monitor;
        const isYou = p.id === os;
        return (
          <div
            key={p.id}
            className={`flex flex-col rounded-2xl border p-5 transition-colors ${
              isYou
                ? "border-gold/40 bg-gold/[0.06] ring-1 ring-gold/20"
                : "border-border-subtle bg-ink-800/40 ring-hairline"
            }`}
          >
            {/* Header */}
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`grid h-10 w-10 place-items-center rounded-xl ${
                  isYou ? "bg-gold/15 text-gold" : "bg-porcelain/[0.06] text-porcelain/80"
                }`}
              >
                <Icon size={20} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-brand text-base font-bold text-porcelain">{p.label}</h3>
                  {isYou && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold">
                      <Check size={10} /> Your OS
                    </span>
                  )}
                </div>
                <p className="text-xs text-graphite">{p.sub}</p>
              </div>
            </div>

            {/* Options */}
            <div className="mt-auto flex flex-col gap-2">
              {p.available ? (
                p.options.map((o, i) => (
                  <a
                    key={o.file}
                    href={`${base}/${o.file}`}
                    className={`group flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      isYou && i === 0
                        ? "bg-gold text-ink-950"
                        : "border border-porcelain/15 text-porcelain hover:bg-porcelain/5"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Download size={15} /> {o.kind}
                    </span>
                    <span
                      className={`text-[10px] font-medium ${
                        isYou && i === 0 ? "text-ink-950/60" : "text-graphite"
                      }`}
                    >
                      {o.note}
                    </span>
                  </a>
                ))
              ) : (
                <span className="rounded-xl border border-porcelain/10 px-4 py-2.5 text-sm font-medium text-porcelain/40">
                  Coming soon
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Download as DownloadIcon } from "lucide-react";
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

// Build the flat list of download targets from site config.
const targets = [
  site.downloads.windows,
  site.downloads.macArm,
  site.downloads.macIntel,
  site.downloads.linux,
] as const;

export default function DownloadButtons() {
  const [os, setOs] = useState<OS>("unknown");
  useEffect(() => setOs(detectOS()), []);

  // Pick the primary download for the visitor's OS (fall back to Windows).
  const primary =
    os === "mac"
      ? site.downloads.macArm
      : os === "linux"
      ? site.downloads.linux
      : site.downloads.windows;

  const others = targets.filter((t) => t !== primary);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Primary, OS-detected button */}
      <div className="flex flex-col items-center gap-3 sm:flex-row">
        {primary.available ? (
          <a
            href={primary.url}
            className="glow-ring inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            <DownloadIcon size={17} /> Download for {primary.label}
            <span className="text-ink-950/60">· {primary.sub}</span>
          </a>
        ) : (
          <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-porcelain/10 px-7 py-3.5 text-sm font-semibold text-porcelain/60">
            <DownloadIcon size={17} /> {primary.label} build coming soon
          </span>
        )}
      </div>

      {/* All platforms */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {others.map((t) =>
          t.available ? (
            <a
              key={t.label + t.sub}
              href={t.url}
              className="inline-flex items-center gap-1.5 rounded-full border border-porcelain/15 px-4 py-2 text-xs font-medium text-porcelain/80 transition-colors hover:bg-porcelain/5"
            >
              <DownloadIcon size={13} /> {t.label}
              <span className="text-porcelain/40">{t.sub}</span>
            </a>
          ) : (
            <span
              key={t.label + t.sub}
              className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-full border border-porcelain/10 px-4 py-2 text-xs font-medium text-porcelain/35"
            >
              {t.label} <span className="text-porcelain/25">{t.sub}</span> · soon
            </span>
          )
        )}
      </div>
    </div>
  );
}

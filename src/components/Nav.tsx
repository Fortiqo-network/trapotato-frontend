"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site, nav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass ring-hairline" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Trapotato" width={28} height={28} className="rounded-md" />
          <span className="font-brand text-lg font-extrabold tracking-tight">{site.name}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-graphite transition-colors hover:text-porcelain"
            >
              {l.label}
            </a>
          ))}
        </div>

        <Link
          href="/download"
          className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
        >
          Download
        </Link>
      </nav>
    </header>
  );
}

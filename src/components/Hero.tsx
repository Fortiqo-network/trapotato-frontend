"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="grain relative overflow-hidden px-5 pb-24 pt-36 sm:pt-44">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-aurora-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade [background-size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3.5 py-1.5 text-xs font-medium text-gold"
        >
          <Sparkles size={14} /> Now with a 10-minute free trial
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="font-brand text-display font-extrabold leading-[0.98]"
        >
          <span className="text-aurora">The invisible AI copilot</span>
          <br />
          for meetings &amp; interviews.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-graphite sm:text-lg"
        >
          {site.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#download"
            className="glow-ring inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Download Trapotato <ArrowRight size={16} />
          </a>
          <a
            href="#product"
            className="inline-flex items-center gap-2 rounded-full border border-porcelain/15 px-6 py-3 text-sm font-semibold text-porcelain transition-colors hover:bg-porcelain/5"
          >
            See how it works
          </a>
        </motion.div>
      </div>

      {/* Product mock */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.35 }}
        className="relative mx-auto mt-16 max-w-4xl"
      >
        <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 glow-soft" />
        <HeroMock />
      </motion.div>
    </section>
  );
}

function HeroMock() {
  return (
    <div className="glass ring-hairline overflow-hidden rounded-2xl p-3 shadow-2xl">
      <div className="rounded-xl bg-ink-900/80 ring-1 ring-porcelain/5">
        {/* faux window bar */}
        <div className="flex items-center gap-1.5 border-b border-porcelain/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 font-brand-mono text-[11px] text-graphite">live meeting · stealth overlay</span>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-5">
          {/* transcript */}
          <div className="sm:col-span-2 rounded-lg border border-porcelain/5 bg-ink-950/50 p-3">
            <div className="mb-2 font-brand-mono text-[10px] uppercase tracking-wider text-graphite">Transcript</div>
            <p className="text-sm text-porcelain/70">
              “Can you walk me through how you’d design a rate limiter for our API?”
            </p>
          </div>
          {/* AI answer */}
          <div className="sm:col-span-3 rounded-lg border border-gold/15 bg-gold/[0.04] p-3">
            <div className="mb-2 flex items-center gap-1.5 font-brand-mono text-[10px] uppercase tracking-wider text-gold">
              <Sparkles size={11} /> Trapotato · suggested answer
            </div>
            <p className="text-sm leading-relaxed text-porcelain/90">
              Use a token-bucket per client key: refill R tokens/sec up to capacity C, reject when empty.
              Back it with Redis (INCR + EXPIRE) for a distributed counter, and return{" "}
              <span className="font-brand-mono text-gold">429</span> with a <span className="font-brand-mono text-gold">Retry-After</span> header…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden px-5 pb-24 pt-36 sm:pt-44">
      <div className="mx-auto max-w-4xl text-center">
        {/* Brand logo — front and centre, large, with a soft contained glow */}
        <div className="anim-fade-up relative mx-auto mb-8 h-48 w-48 sm:h-60 sm:w-60">
          <div className="anim-halo absolute inset-[18%] -z-10 rounded-full bg-gold/25 blur-2xl" />
          <div className="anim-float relative h-full w-full">
            <Image
              src="/logo.png"
              alt="Trapotato logo"
              fill
              priority
              sizes="(max-width: 640px) 12rem, 15rem"
              className="object-contain"
              style={{
                filter:
                  "drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff) drop-shadow(1.5px 1.5px 0 #fff) drop-shadow(-1.5px -1.5px 0 #fff) drop-shadow(0 18px 50px rgba(231,160,60,0.45))",
              }}
            />
          </div>
        </div>

        {/* Brand name — the focus, white with a gold halo */}
        <h1
          className="anim-fade-up font-brand text-display-lg font-black tracking-tight text-white"
          style={{ animationDelay: "0.08s", textShadow: "0 0 55px rgba(231,160,60,0.4)" }}
        >
          {site.name}
        </h1>

        <p
          className="anim-fade-up mx-auto mt-5 max-w-xl text-base leading-relaxed text-porcelain/80 sm:text-lg"
          style={{ animationDelay: "0.16s" }}
        >
          {site.tagline}
        </p>

        <div
          className="anim-fade-up mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3.5 py-1.5 text-xs font-medium text-gold"
          style={{ animationDelay: "0.24s" }}
        >
          <Sparkles size={14} /> 10-minute free trial included
        </div>

        <div
          className="anim-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.32s" }}
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
        </div>
      </div>

      {/* Product mock */}
      <div className="anim-fade-up relative mx-auto mt-16 max-w-4xl" style={{ animationDelay: "0.4s" }}>
        <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 glow-soft" />
        <HeroMock />
      </div>
    </section>
  );
}

function HeroMock() {
  return (
    <div className="glass ring-hairline overflow-hidden rounded-2xl p-3 shadow-2xl">
      <div className="rounded-xl bg-ink-900/80 ring-1 ring-porcelain/5">
        <div className="flex items-center gap-1.5 border-b border-porcelain/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 font-brand-mono text-[11px] text-graphite">live meeting · stealth overlay</span>
        </div>

        <div className="grid gap-3 p-4 sm:grid-cols-5">
          <div className="sm:col-span-2 rounded-lg border border-porcelain/5 bg-ink-950/50 p-3">
            <div className="mb-2 font-brand-mono text-[10px] uppercase tracking-wider text-graphite">Transcript</div>
            <p className="text-sm text-porcelain/70">
              “Can you walk me through how you’d design a rate limiter for our API?”
            </p>
          </div>
          <div className="sm:col-span-3 rounded-lg border border-gold/15 bg-gold/[0.04] p-3">
            <div className="mb-2 flex items-center gap-1.5 font-brand-mono text-[10px] uppercase tracking-wider text-gold">
              <Sparkles size={11} /> Trapotato · suggested answer
            </div>
            <p className="text-sm leading-relaxed text-porcelain/90">
              Use a token-bucket per client key: refill R tokens/sec up to capacity C, reject when empty.
              Back it with Redis (INCR + EXPIRE) for a distributed counter, and return{" "}
              <span className="font-brand-mono text-gold">429</span> with a{" "}
              <span className="font-brand-mono text-gold">Retry-After</span> header…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

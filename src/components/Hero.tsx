import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden px-5 pb-24 pt-36 sm:pt-44">
      <div className="mx-auto max-w-4xl text-center">
        {/* Eyebrow — live + invisible positioning */}
        <div className="anim-fade-up mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-porcelain/12 bg-ink-800/50 px-3.5 py-1.5 text-xs font-medium text-porcelain/80 backdrop-blur">
          <span className="anim-live-dot h-1.5 w-1.5 rounded-full bg-live" />
          Invisible AI copilot · {site.platform}
        </div>

        {/* Brand logo — front and centre, large, with a soft contained glow */}
        <div className="anim-fade-up relative mx-auto mb-7 h-40 w-40 sm:h-52 sm:w-52" style={{ animationDelay: "0.05s" }}>
          <div className="anim-halo absolute inset-[18%] -z-10 rounded-full bg-gold/25 blur-2xl" />
          <div className="anim-float relative h-full w-full">
            <Image
              src="/logo.png"
              alt="Trapotato logo"
              fill
              priority
              sizes="(max-width: 640px) 10rem, 13rem"
              className="object-contain"
              style={{
                filter:
                  "drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff) drop-shadow(1.5px 1.5px 0 #fff) drop-shadow(-1.5px -1.5px 0 #fff) drop-shadow(0 18px 50px rgba(231,160,60,0.45))",
              }}
            />
          </div>
        </div>

        {/* Headline — the promise, with the brand name */}
        <h1
          className="anim-fade-up font-brand text-display font-black tracking-tight text-white"
          style={{ animationDelay: "0.1s", textShadow: "0 0 55px rgba(231,160,60,0.35)" }}
        >
          Ace every call,<br className="hidden sm:block" /> unseen.
        </h1>

        <p
          className="anim-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-porcelain/80 sm:text-lg"
          style={{ animationDelay: "0.18s" }}
        >
          {site.name} listens, transcribes, and feeds you real-time answers and code hints — through an
          overlay that <span className="text-porcelain">never shows on your screen share.</span>
        </p>

        <div
          className="anim-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.26s" }}
        >
          <Link
            href="/download"
            className="glow-ring inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            Download for Windows <ArrowRight size={16} />
          </Link>
          <a
            href="/#stealth"
            className="inline-flex items-center gap-2 rounded-full border border-porcelain/15 px-6 py-3 text-sm font-semibold text-porcelain transition-colors hover:bg-porcelain/5"
          >
            See how it stays hidden
          </a>
        </div>

        <p className="anim-fade-up mt-4 text-xs text-graphite" style={{ animationDelay: "0.32s" }}>
          {site.trial} · no card required · bring your own AI keys
        </p>
      </div>

      {/* Product screenshot */}
      <div className="anim-fade-up relative mx-auto mt-16 max-w-4xl" style={{ animationDelay: "0.4s" }}>
        <div className="absolute -inset-x-10 -top-10 bottom-0 -z-10 glow-soft" />
        <HeroShot />
      </div>
    </section>
  );
}

function HeroShot() {
  return (
    <div className="glass ring-hairline overflow-hidden rounded-2xl p-3 shadow-2xl">
      <div className="overflow-hidden rounded-xl ring-1 ring-porcelain/5">
        {/* window title bar */}
        <div className="flex items-center gap-1.5 border-b border-porcelain/5 bg-ink-900/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <span className="ml-3 inline-flex items-center gap-1.5 font-brand-mono text-[11px] text-graphite">
            <span className="anim-live-dot h-1.5 w-1.5 rounded-full bg-live" /> {site.name} · Home
          </span>
        </div>

        <Image
          src="/app-dashboard.png"
          alt={`${site.name} dashboard — license status, the stealth Detectable toggle, Start Session, and interview setup`}
          width={1169}
          height={947}
          sizes="(max-width: 768px) 100vw, 56rem"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

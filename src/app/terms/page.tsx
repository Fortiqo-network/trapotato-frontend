import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Footer } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { graph, breadcrumbLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { termsSections, TERMS_VERSION, TERMS_EFFECTIVE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `The Terms & Conditions governing your use of ${site.name} — usage responsibilities, licensing, disclaimers, and liability.`,
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbLd("Terms & Conditions", "/terms"))} />
      <AnimatedBackground />
      <Nav />
      <main className="px-5 pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <div className="mb-3 font-brand-mono text-xs uppercase tracking-[0.2em] text-gold">Legal</div>
          <h1 className="font-brand text-display-sm font-black">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm text-graphite">
            Version {TERMS_VERSION} · Effective {TERMS_EFFECTIVE}
          </p>

          <div className="mt-6 rounded-2xl border border-gold/20 bg-gold/[0.05] p-5 text-sm leading-relaxed text-porcelain/85">
            Please read these Terms carefully. {site.name} is a powerful tool, and you are solely responsible
            for how and where you use it. Using it where outside assistance is not permitted is your decision
            and your risk.
          </div>

          <div className="mt-12 space-y-10">
            {termsSections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="font-brand text-xl font-bold sm:text-2xl">{s.heading}</h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-sm leading-relaxed text-graphite">{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="mt-14 border-t border-porcelain/10 pt-6 text-sm text-graphite">
            Questions? Contact{" "}
            <a href={`mailto:${site.support.email}`} className="text-gold hover:underline">{site.support.email}</a>.
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

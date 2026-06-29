import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Footer } from "@/components/Sections";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { JsonLd } from "@/components/JsonLd";
import { graph, breadcrumbLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Early Access",
  description: `Request early access to ${site.name} — the invisible AI copilot for meetings & interviews. Tell us a little about your use case and we'll be in touch.`,
  alternates: { canonical: `${site.url}/early-access` },
};

export default function EarlyAccessPage() {
  return (
    <>
      <JsonLd data={graph(breadcrumbLd("Request Early Access", "/early-access"))} />
      <AnimatedBackground />
      <Nav />
      <main className="px-5 pb-24 pt-32 sm:pt-40">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <div className="mb-3 font-brand-mono text-xs uppercase tracking-[0.2em] text-gold">Early access</div>
            <h1 className="font-brand text-display-sm font-black">Get on the early-access list</h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-graphite">
              {site.name} is rolling out gradually. Tell us a little about you and how you&rsquo;d use it, and
              we&rsquo;ll reach out with a {site.trial} and next steps.
            </p>
          </div>

          <div className="mt-10">
            <EarlyAccessForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

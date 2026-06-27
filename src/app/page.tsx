import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { JsonLd } from "@/components/JsonLd";
import {
  Stealth,
  Features,
  Actions,
  Providers,
  Privacy,
  HowItWorks,
  Pricing,
  Download,
  Footer,
} from "@/components/Sections";
import { graph, organizationLd, websiteLd, softwareApplicationLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={graph(organizationLd, websiteLd, softwareApplicationLd)} />
      <AnimatedBackground />
      <Nav />
      <main>
        <Hero />
        <Stealth />
        <Features />
        <Actions />
        <Providers />
        <Privacy />
        <HowItWorks />
        <Pricing />
        <Download />
      </main>
      <Footer />
    </>
  );
}

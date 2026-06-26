import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Product, Demo, Features, HowItWorks, Pricing, Download, Footer } from "@/components/Sections";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: site.name,
  url: site.url,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Windows",
  description: site.description,
  offers: [
    { "@type": "Offer", name: "Monthly", price: "50", priceCurrency: "USD" },
    { "@type": "Offer", name: "3 Months", price: "120", priceCurrency: "USD" },
    { "@type": "Offer", name: "Annual", price: "400", priceCurrency: "USD" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Product />
        <Demo />
        <Features />
        <HowItWorks />
        <Pricing />
        <Download />
      </main>
      <Footer />
    </>
  );
}

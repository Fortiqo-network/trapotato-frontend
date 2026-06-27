// Centralized structured data (schema.org JSON-LD) and SEO helpers.
// Keeping these in one place ensures every page emits consistent, linked graph
// nodes (Organization ⇄ WebSite ⇄ SoftwareApplication ⇄ FAQPage).

import { site, plans, features, faqs } from "@/lib/site";

const ORG_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;
const SOFTWARE_ID = `${site.url}/#software`;

const priceFromPlan = (p: string) => p.replace(/[^0-9.]/g, "");

export const organizationLd = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/og-image.png`,
  email: site.support.email,
  description: site.description,
  sameAs: [site.support.whatsappLink],
  contactPoint: {
    "@type": "ContactPoint",
    email: site.support.email,
    contactType: "customer support",
    availableLanguage: ["English"],
  },
};

export const websiteLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: "en",
  publisher: { "@id": ORG_ID },
};

export const softwareApplicationLd = {
  "@type": "SoftwareApplication",
  "@id": SOFTWARE_ID,
  name: site.name,
  url: site.url,
  description: site.description,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "AI meeting & interview assistant",
  operatingSystem: "Windows 10, Windows 11",
  softwareRequirements: "Windows 10/11 (64-bit), internet connection, your own AI & transcription API keys",
  downloadUrl: `${site.url}/download`,
  installUrl: `${site.url}/download`,
  inLanguage: "en",
  image: `${site.url}/og-image.png`,
  screenshot: `${site.url}/og-image.png`,
  publisher: { "@id": ORG_ID },
  featureList: features.map((f) => f.title),
  offers: plans.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: priceFromPlan(p.price),
    priceCurrency: "USD",
    category: "subscription",
    url: `${site.url}/#pricing`,
    availability: "https://schema.org/InStock",
  })),
};

export const faqPageLd = {
  "@type": "FAQPage",
  "@id": `${site.url}/docs#faq`,
  inLanguage: "en",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/** BreadcrumbList for a subpage: Home → <name>. */
export function breadcrumbLd(name: string, path: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
    ],
  };
}

/** Wrap nodes into a single @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

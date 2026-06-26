import type { Metadata, Viewport } from "next";
import { Inter, Archivo, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Invisible AI Copilot for Meetings & Interviews`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Trapotato",
    "AI interview assistant",
    "AI meeting copilot",
    "interview copilot",
    "stealth AI assistant",
    "real-time AI answers",
    "live transcription",
    "coding interview helper",
    "invisible overlay AI",
    "bring your own AI keys",
  ],
  authors: [{ name: "Trapotato" }],
  creator: "Trapotato",
  publisher: "Trapotato",
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Invisible AI Copilot for Meetings & Interviews`,
    description: site.description,
    images: [{ url: "/og-image.png", width: 1024, height: 1024, alt: `${site.name} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Invisible AI Copilot`,
    description: site.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0B0C0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

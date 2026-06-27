import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0B0C0F",
    theme_color: "#0B0C0F",
    icons: [
      { src: "/logos.png", sizes: "1254x1254", type: "image/png", purpose: "any" },
      { src: "/logo.png", sizes: "600x600", type: "image/png", purpose: "any" },
    ],
  };
}

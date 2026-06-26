import type { Config } from "tailwindcss";
import { colors } from "./src/lib/design/colors";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        brand: ["var(--font-archivo)", "system-ui", "sans-serif"],
        "brand-mono": ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-sm": ["clamp(2.25rem, 6vw, 3.5rem)", { lineHeight: "1.04", letterSpacing: "-0.03em" }],
        display: ["clamp(2.75rem, 9vw, 6rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(3.25rem, 12vw, 8rem)", { lineHeight: "0.94", letterSpacing: "-0.04em" }],
      },
      borderRadius: { "4xl": "2rem" },
      backgroundImage: {
        "aurora-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(231,160,60,0.18), transparent 70%)",
        "grid-fade":
          "linear-gradient(rgba(236,234,227,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(236,234,227,0.04) 1px, transparent 1px)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "scroll-hint": "scrollHint 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.85" },
        },
        scrollHint: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "80%, 100%": { transform: "translateY(10px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

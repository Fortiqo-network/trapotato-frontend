// Color palette — single source of truth, wired into Tailwind via tailwind.config.ts.
// Cinematic dark "ink" canvas with porcelain text and an amber/gold accent.

export const ink = {
  950: "#0B0C0F",
  900: "#0E1014",
  800: "#111318",
  700: "#191C23",
  600: "#23262e",
  500: "#2c2f38",
} as const;

/** Primary light text on dark (ink) surfaces. */
export const porcelain = "#ECEAE3";

/** Amber/gold — the identity accent. */
export const gold = {
  DEFAULT: "#E7A03C",
  deep: "#B97718",
} as const;

/** Muted neutrals for secondary chrome on dark surfaces. */
export const graphite = {
  DEFAULT: "#80848F",
  dim: "#4A4E58",
} as const;

export const colors = {
  ink,
  porcelain,
  gold,
  graphite,
} as const;

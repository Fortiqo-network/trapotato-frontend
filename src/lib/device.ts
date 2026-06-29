// Best-effort, privacy-respecting device/context snapshot taken in the browser.
// Used both for the Terms-acceptance record (stored locally) and the
// early-access submission (sent to the server). SSR-safe: returns {} on the server.

export interface DeviceDetails {
  userAgent?: string;
  platform?: string;
  language?: string;
  languages?: string;
  timezone?: string;
  screen?: string;
  viewport?: string;
  devicePixelRatio?: number;
  hardwareConcurrency?: number;
  deviceMemory?: number;
  touchPoints?: number;
  cookieEnabled?: boolean;
  referrer?: string;
  href?: string;
  collectedAt?: string;
}

export function collectDeviceDetails(): DeviceDetails {
  if (typeof window === "undefined" || typeof navigator === "undefined") return {};

  const nav = navigator as Navigator & { deviceMemory?: number };
  const safe = <T>(fn: () => T): T | undefined => {
    try {
      return fn();
    } catch {
      return undefined;
    }
  };

  return {
    userAgent: nav.userAgent,
    platform: nav.platform,
    language: nav.language,
    languages: Array.isArray(nav.languages) ? nav.languages.join(", ") : undefined,
    timezone: safe(() => Intl.DateTimeFormat().resolvedOptions().timeZone),
    screen: safe(() => `${window.screen.width}×${window.screen.height}`),
    viewport: safe(() => `${window.innerWidth}×${window.innerHeight}`),
    devicePixelRatio: window.devicePixelRatio,
    hardwareConcurrency: nav.hardwareConcurrency,
    deviceMemory: nav.deviceMemory,
    touchPoints: nav.maxTouchPoints,
    cookieEnabled: nav.cookieEnabled,
    referrer: safe(() => document.referrer) || undefined,
    href: safe(() => window.location.href),
    collectedAt: new Date().toISOString(),
  };
}

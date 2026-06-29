// Client for the Trapotato verify-server (license + waitlist backend).
//
// Set NEXT_PUBLIC_VERIFY_API_URL to the verify-server's public base URL, e.g.
//   NEXT_PUBLIC_VERIFY_API_URL=https://verify.fortiqo.xyz
// The early-access form posts to `${base}/api/early-access`.

import type { DeviceDetails } from "./device";

export const VERIFY_API_BASE = (process.env.NEXT_PUBLIC_VERIFY_API_URL ?? "").replace(/\/+$/, "");

export interface EarlyAccessPayload {
  fullName: string;
  email: string;
  whatsapp?: string;
  company?: string;
  role?: string;
  useCase?: string;
  duration?: string;
  referral?: string;
  acceptedTerms: boolean;
  termsVersion: string;
  device: DeviceDetails;
}

export interface EarlyAccessResult {
  ok: true;
  id: string;
  message: string;
}

/** Submit an early-access application to the verify-server. Throws on failure. */
export async function submitEarlyAccess(payload: EarlyAccessPayload): Promise<EarlyAccessResult> {
  if (!VERIFY_API_BASE) {
    throw new Error("The request form isn’t configured yet. Please email us instead.");
  }

  let res: Response;
  try {
    res = await fetch(`${VERIFY_API_BASE}/api/early-access`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Couldn’t reach the server. Check your connection and try again.");
  }

  const data = (await res.json().catch(() => ({}))) as Partial<EarlyAccessResult> & { error?: string };
  if (!res.ok || !data.ok) {
    throw new Error(data.error || "Something went wrong. Please try again.");
  }
  return data as EarlyAccessResult;
}

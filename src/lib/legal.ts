// Single source of truth for the Terms & Conditions / EULA.
//
// `TERMS_VERSION` is recorded with every acceptance (in localStorage and in the
// database). Bump it whenever the terms below change so returning users are
// asked to re-accept and admins can see which version each person agreed to.

import { site } from "./site";

export const TERMS_VERSION = "2026-06-29";
export const TERMS_EFFECTIVE = "June 29, 2026";

export interface LegalSection {
  id: string;
  heading: string;
  /** Paragraphs (rendered in order). */
  body: string[];
}

/** Short, plain-language points shown on the first-visit acceptance gate. */
export const termsHighlights: string[] = [
  "You are solely responsible for how and where you use Trapotato — including following the rules of any meeting, interview, exam, employer, or platform.",
  "Many interviews, assessments, and exams prohibit outside assistance. Using Trapotato where it isn’t allowed is your decision and your risk.",
  "If you are caught, disqualified, terminated, or face any other consequence, Trapotato and its makers are not liable in any way.",
  "Your AI keys and meeting data stay on your device. The software is provided “as is”, with no warranties.",
];

export const termsSections: LegalSection[] = [
  {
    id: "agreement",
    heading: "1. Agreement to these terms",
    body: [
      `These Terms & Conditions (the “Terms”) are a binding agreement between you and ${site.name} (“we”, “us”, the “Company”) governing your access to and use of the ${site.name} desktop application, this website, and all related services (together, the “Service”).`,
      "By ticking the acceptance box, downloading, installing, or using the Service, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, do not use the Service.",
      "You must be at least 18 years old, or the age of legal majority in your jurisdiction, to use the Service.",
    ],
  },
  {
    id: "service",
    heading: "2. What the Service is",
    body: [
      `${site.name} is a stealth desktop assistant that listens to your meeting or call, transcribes it, and surfaces real-time suggestions, answers, code hints, and clarifications in an overlay on your own screen.`,
      "The Service is a productivity and assistance tool. It does not guarantee any particular outcome, result, score, job offer, or grade, and the quality of any suggestion depends on the third-party AI models you connect.",
    ],
  },
  {
    id: "license",
    heading: "3. Licence and product keys",
    body: [
      "Subject to these Terms and an active subscription, we grant you a personal, non-exclusive, non-transferable, revocable licence to install and use the Service for your own use.",
      "Each product key is valid for one active device at a time and is locked to you. You may not share, resell, sublicense, publish, or distribute your product key, your account, or the Service. The Service verifies your licence online and is fail-closed: if it cannot confirm a valid licence, it stops working.",
      "We may suspend or revoke a licence that we reasonably believe is shared, abused, charged back, obtained fraudulently, or used in breach of these Terms.",
    ],
  },
  {
    id: "acceptable-use",
    heading: "4. Your responsibilities and acceptable use",
    body: [
      "You are solely and entirely responsible for how, where, and when you use the Service, and for ensuring that your use is lawful and permitted in your situation.",
      "Many interviews, technical assessments, certifications, academic exams, proctored tests, and workplaces expressly prohibit the use of outside assistance, AI tools, or recording of conversations. It is your responsibility to know and follow those rules, as well as all applicable laws — including laws on consent to record audio, privacy, confidentiality, intellectual property, and the terms of any meeting platform you use.",
      "You agree not to use the Service to break any law, to infringe anyone’s rights, to record or process conversations without the consent required where you are, or in any setting where doing so is prohibited. Whether to use the Service in any given context is entirely your own decision.",
    ],
  },
  {
    id: "no-liability-cheating",
    heading: "5. No endorsement of cheating; consequences are yours alone",
    body: [
      "The Service is provided as a general-purpose tool. We do not encourage, endorse, or require you to use it to cheat, to deceive any person or organisation, or to violate the rules of any interview, examination, employer, institution, or platform.",
      "If you choose to use the Service in a setting where it is not permitted, you accept all risk and all consequences. To the maximum extent permitted by law, we are not liable for, and you release us from, any outcome arising from your use — including (without limitation) being detected, flagged, disqualified, failed, suspended, expelled, terminated, denied a job or credential, sued, fined, prosecuted, or suffering any reputational, financial, academic, or professional harm.",
      "You agree that any such consequence is the result of your own choices and conduct, and not of the Company or the Service.",
    ],
  },
  {
    id: "byok",
    heading: "6. Bring your own keys and third-party providers",
    body: [
      "The Service uses AI and transcription providers that you connect with your own API keys (for example OpenAI, Anthropic, Google, Groq, Deepgram, or a local model). Your keys are stored locally on your device and are not uploaded to or proxied through our servers.",
      "Your use of those providers is governed by their own terms and pricing. You are responsible for your own provider accounts, usage, costs, and for complying with each provider’s policies. We are not responsible for the availability, accuracy, output, or billing of any third-party provider.",
    ],
  },
  {
    id: "privacy",
    heading: "7. Privacy and your data",
    body: [
      "The Service is designed to be local-first: transcripts, notes, history, and your API keys are stored on your device. Only your licence is verified against our servers.",
      "When you submit a form on this website (such as an early-access request), we collect the information you provide, your acceptance of these Terms, and basic device and connection details, so that we can contact you and operate the Service. We use this information only for those purposes and do not sell it.",
    ],
  },
  {
    id: "payment",
    heading: "8. Subscriptions, trials, and payments",
    body: [
      "Paid plans are billed as described at the point of purchase. A free trial, where offered, ends automatically and does not create any obligation on us to provide continued access.",
      "Except where required by law, all payments are non-refundable, including for promotional or discounted pricing. You are responsible for any taxes that apply to your purchase.",
    ],
  },
  {
    id: "disclaimer",
    heading: "9. Disclaimer of warranties",
    body: [
      "The Service is provided “as is” and “as available”, without warranties of any kind, whether express, implied, or statutory, including any implied warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement.",
      "We do not warrant that the Service will be uninterrupted, secure, error-free, or that any suggestion, answer, transcription, or output will be accurate, complete, appropriate, or undetectable. You use the Service at your own risk.",
    ],
  },
  {
    id: "liability",
    heading: "10. Limitation of liability",
    body: [
      "To the maximum extent permitted by law, the Company and its owners, employees, and partners will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, data, opportunities, employment, or goodwill, arising out of or relating to your use of (or inability to use) the Service.",
      `Our total aggregate liability for any and all claims relating to the Service will not exceed the amount you actually paid to us for the Service in the three (3) months before the event giving rise to the claim.`,
    ],
  },
  {
    id: "indemnity",
    heading: "11. Indemnification",
    body: [
      "You agree to indemnify and hold harmless the Company and its owners, employees, and partners from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the Service, your violation of these Terms, or your violation of any law or third-party right.",
    ],
  },
  {
    id: "termination",
    heading: "12. Suspension and termination",
    body: [
      "We may suspend or terminate your access to the Service at any time if you breach these Terms or if we are required to do so. On termination, your right to use the Service ends immediately. Sections that by their nature should survive termination (including responsibilities, disclaimers, limitation of liability, and indemnification) will survive.",
    ],
  },
  {
    id: "changes",
    heading: "13. Changes to the Service and these Terms",
    body: [
      "We may modify, suspend, or discontinue any part of the Service at any time. We may also update these Terms; when we do, we will change the version and effective date below, and continued use after an update means you accept the revised Terms.",
    ],
  },
  {
    id: "law",
    heading: "14. Governing law and contact",
    body: [
      "These Terms are governed by the laws of the jurisdiction in which the Company operates, without regard to conflict-of-laws rules. If any provision is found unenforceable, the remaining provisions remain in full effect.",
      `Questions about these Terms can be sent to ${site.support.email}.`,
    ],
  },
];

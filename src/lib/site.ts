// Single source of truth for site-wide content & config.

export const site = {
  name: "Trapotato",
  domain: "trap.fortiqo.xyz",
  url: "https://trap.fortiqo.xyz",
  tagline: "Your invisible AI copilot for meetings & interviews.",
  description:
    "Trapotato is a stealth AI assistant that listens to your call, transcribes it live, and feeds you real-time answers, code hints, and clarifications — through an overlay that stays off your screen share. Bring your own AI keys; everything stays on your device.",
  // The download link is wired later; keep empty to show "coming soon".
  downloadUrl: "",
  support: {
    email: "trapotato.fortiqo@gmail.com",
    whatsapp: "+91 7000695135",
    whatsappLink: "https://wa.me/917000695135",
  },
};

export const plans = [
  { name: "Monthly", price: "$50", period: "/month", highlight: false },
  { name: "3 Months", price: "$120", period: "/quarter", highlight: true },
  { name: "Annual", price: "$400", period: "/year", highlight: false },
];

export const features = [
  {
    title: "Real-time answers",
    body: "It hears the question and drafts your response, code, or clarification in under a second — live, as the conversation happens.",
    icon: "Sparkles",
  },
  {
    title: "Stealth overlay",
    body: "An always-on-top, content-protected window that never appears on screen shares, the taskbar, or Alt-Tab.",
    icon: "EyeOff",
  },
  {
    title: "Live transcription",
    body: "System audio and your mic are transcribed continuously, with speaker context, so nothing is missed.",
    icon: "AudioLines",
  },
  {
    title: "Bring your own keys",
    body: "Use OpenAI, Claude, Gemini, Groq, or local Ollama. Your API keys stay on your device — never on our servers.",
    icon: "KeyRound",
  },
  {
    title: "Code & screen hints",
    body: "Capture the screen, OCR the problem, and get a complete, ready-to-use solution in the overlay.",
    icon: "Code2",
  },
  {
    title: "Global shortcuts",
    body: "Summon, answer, clarify, scroll, and move the window from anywhere — even while hidden.",
    icon: "Command",
  },
];

export const steps = [
  { n: 1, title: "Activate", body: "Enter your product key. New users get a 10-minute free trial instantly." },
  { n: 2, title: "Add your keys", body: "Drop in your own AI + transcription keys. They never leave your device." },
  { n: 3, title: "Press Ctrl+B", body: "Summon the invisible overlay whenever you need it during a call." },
  { n: 4, title: "Get answers", body: "It listens, understands, and feeds you the perfect response in real time." },
];

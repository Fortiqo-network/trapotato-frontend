// Single source of truth for site-wide content & config.
// Everything here is drawn from the product README + User Guide so the marketing
// copy stays factually aligned with what Trapotato actually does.

export const site = {
  name: "Trapotato",
  domain: "trap.fortiqo.xyz",
  url: "https://trap.fortiqo.xyz",
  tagline: "Your invisible AI copilot for meetings & interviews.",
  description:
    "Trapotato is a stealth desktop assistant that listens to your call, transcribes it live, and feeds you real-time answers, code hints, and clarifications — through an overlay that never appears on your screen share. Bring your own AI keys; everything stays on your device.",
  // The download link is wired later; keep empty to show "coming soon".
  downloadUrl: "",
  platform: "Windows 10/11",
  trial: "10-minute free trial",
  support: {
    email: "trapotato.fortiqo@gmail.com",
    whatsapp: "+91 7000695135",
    whatsappLink: "https://wa.me/917000695135",
  },
} as const;

export const nav = [
  { label: "Stealth", href: "/#stealth" },
  { label: "Features", href: "/#features" },
  { label: "Shortcuts", href: "/#shortcuts" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Docs", href: "/docs" },
];

export const plans = [
  { name: "Monthly", price: "$50", period: "/month", highlight: false },
  { name: "3 Months", price: "$120", period: "/quarter", highlight: true, note: "Save $30 vs monthly" },
  { name: "Annual", price: "$400", period: "/year", highlight: false, note: "Best value — save $200" },
];

export const planIncludes = [
  "Every AI + transcription provider",
  "Stealth overlay & global shortcuts",
  "Live transcription & AI answers",
  "Screen capture + analysis",
  "Local history, notes & summaries",
  "One active device at a time",
];

export const features = [
  {
    title: "Stealth overlay",
    body: "A frameless, always-on-top, content-protected window that never shows on screen shares or recordings — and stays off the taskbar, tray, and Alt-Tab.",
    icon: "EyeOff",
  },
  {
    title: "Real-time AI answers",
    body: "It hears the question and drafts your response, code, or clarification as the conversation happens — answers stream in live.",
    icon: "Sparkles",
  },
  {
    title: "Live transcription",
    body: "System audio and your microphone are transcribed continuously through your own provider, so nothing in the call is missed.",
    icon: "AudioLines",
  },
  {
    title: "Screen capture & analysis",
    body: "Snapshot the whole screen or a region, OCR the on-screen problem, and get a complete, ready-to-use answer in the overlay.",
    icon: "ScanText",
  },
  {
    title: "Bring your own keys",
    body: "Use OpenAI, Claude, Gemini, Groq, or local Ollama. Your API keys are stored on your device and never touch our servers.",
    icon: "KeyRound",
  },
  {
    title: "Local history & notes",
    body: "Post-meeting summaries, notes, and a searchable transcript history — all stored locally on your machine.",
    icon: "Archive",
  },
];

export const steps = [
  { n: 1, title: "Install & activate", body: "Run the Windows installer and enter your product key. New accounts get a 10-minute free trial automatically." },
  { n: 2, title: "Add your keys", body: "Drop your own AI and transcription keys into Settings. They are saved locally and never leave your device." },
  { n: 3, title: "Press Ctrl+B", body: "Summon the invisible overlay during any call. It stays hidden from the taskbar, tray, and screen share." },
  { n: 4, title: "Get answers live", body: "It listens, transcribes, and feeds you the perfect response, code hint, or clarification in real time." },
];

// In-meeting action shortcuts (Ctrl+1…Ctrl+7).
export const actions = [
  { key: "Ctrl+1", title: "What to Answer", body: "Get the strongest answer to the question on the table." },
  { key: "Ctrl+2", title: "Clarify", body: "Turn a vague or ambiguous prompt into a sharp follow-up." },
  { key: "Ctrl+3", title: "Recap / Brainstorm", body: "Summarize the thread so far or spin up fresh ideas." },
  { key: "Ctrl+4", title: "Follow Up", body: "Draft the natural next question to keep momentum." },
  { key: "Ctrl+5", title: "Answer / Record", body: "Capture audio and answer the live question end-to-end." },
  { key: "Ctrl+6", title: "Get Code Hint", body: "Produce working code for the problem being discussed." },
  { key: "Ctrl+7", title: "Brainstorm Approaches", body: "Lay out multiple ways to solve the problem at hand." },
];

// Global shortcuts (work even while the window is hidden).
export const shortcuts = [
  { key: "Ctrl+B", label: "Show / hide window" },
  { key: "Ctrl+Shift+B", label: "Toggle click-through" },
  { key: "Ctrl+↑ / Ctrl+↓", label: "Scroll the answer" },
  { key: "Ctrl+H", label: "Take a screenshot" },
  { key: "Ctrl+Shift+H", label: "Region screenshot" },
  { key: "Ctrl+Enter", label: "Process screenshots" },
  { key: "Ctrl+Shift+Arrows", label: "Move the window" },
];

export const aiProviders = ["OpenAI", "Anthropic Claude", "Google Gemini", "Groq", "Ollama (local)"];
export const transcriptionProviders = ["Deepgram", "OpenAI", "ElevenLabs", "Soniox", "Google", "Azure", "IBM Watson"];

export const faqs = [
  {
    q: "Is it really invisible on a screen share?",
    a: "Yes. The overlay is content-protected against screen sharing and screen recording, and it's hidden from the taskbar and system tray. In Task Manager it appears as “Settings.” Press Ctrl+B to show or hide it.",
  },
  {
    q: "Do my API keys ever leave my device?",
    a: "No. Trapotato is bring-your-own-keys: your AI and transcription keys are stored locally and are never uploaded or proxied through our servers. Only your license is checked online.",
  },
  {
    q: "What happens if I lose internet?",
    a: "The license re-verifies twice on startup and every 5 minutes. It's fail-closed: if the server can't be reached, or the license is expired or disabled, the app locks until you reconnect and press Retry.",
  },
  {
    q: "Which AI and transcription providers are supported?",
    a: "AI: OpenAI, Anthropic Claude, Google Gemini, Groq, and local Ollama. Transcription: Deepgram, OpenAI, ElevenLabs, Soniox, Google, Azure, and IBM Watson.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes — every new account gets a 10-minute free trial automatically, no key required to start.",
  },
  {
    q: "Can I move it to a new computer?",
    a: "One product key is locked to one machine. To move devices, contact support for an activation reset.",
  },
];

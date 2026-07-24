export type AccentColor =
  | "blush"
  | "sage"
  | "lavender"
  | "sky-blue"
  | "peach"
  | "butter"
  | "mint"
  | "lilac"
  | "terracotta"
  | "sand"
  | "slate"
  | "coral"
  | "gold";

export type Feature = {
  slug: string;
  title: string;
  tagline: string;
  accent: AccentColor;
  icon:
    | "calendar"
    | "cube"
    | "activity"
    | "pill"
    | "sparkles"
    | "stethoscope"
    | "heart-handshake"
    | "shield-check";
  screenshot: string;
  screenshotAlt: string;
  secondaryScreenshot?: string;
  secondaryScreenshotAlt?: string;
  bullets: string[];
};

export const features: Feature[] = [
  {
    slug: "timeline",
    title: "Pregnancy Timeline",
    tagline: "Every week of your pregnancy, in one calm view.",
    accent: "blush",
    icon: "calendar",
    screenshot: "timeline-week-detail.png",
    screenshotAlt:
      "MaaSphere Timeline screen showing a week detail sheet with trimester, baby size, and tips",
    bullets: [
      "A week-by-week timeline that auto-scrolls to exactly where you are today.",
      "Tap any week to see the trimester, your baby's size, and a short, plain-language description with tips.",
      "A progress bar and days-until-due-date counter keep the big picture in view.",
      "The same week-by-week data also powers your Baby screen, so the two never disagree.",
    ],
  },
  {
    slug: "baby-viewer",
    title: "3D Baby Viewer",
    tagline: "See your baby at 9 key developmental stages.",
    accent: "peach",
    icon: "cube",
    screenshot: "baby-3d-viewer.png",
    screenshotAlt:
      "MaaSphere 3D Baby Viewer screen showing a rotatable 3D fetal model with weekly stats",
    bullets: [
      "Nine hand-authored 3D models mark key stages of development, from week 8 through week 40.",
      "Rotate and zoom with a simple drag or pinch — no app-store add-ons, it's built in.",
      "Each stage shows estimated weight and length alongside the model.",
      "Before week 8, a gentle placeholder explains that development is still too early to visualize — nothing is hidden or broken, it's just not time yet.",
    ],
  },
  {
    slug: "kick-counter",
    title: "Kick Counter",
    tagline: "A quiet, focused way to track movement.",
    accent: "mint",
    icon: "activity",
    screenshot: "kick-counter-active.png",
    screenshotAlt:
      "MaaSphere Kick Counter screen mid-session with a running total and timer",
    secondaryScreenshot: "kick-history-trend.png",
    secondaryScreenshotAlt:
      "MaaSphere Kick History screen showing a trend chart and session stats",
    bullets: [
      "Start a session, tap once per kick, and see your running total, timer, and average interval live.",
      "Unlocks from week 15 — before that, movement is expected to be too faint and inconsistent to count meaningfully.",
      "A history view tracks kicks per day, average per session, and your most active times.",
      "It's a self-awareness tool, not a diagnostic device — MaaSphere nudges you toward your doctor if a session looks unusually quiet, rather than making a call itself.",
    ],
  },
  {
    slug: "medicine-tracker",
    title: "Medicine Tracker",
    tagline: "Never lose track of a dose.",
    accent: "lavender",
    icon: "pill",
    screenshot: "medicine-tracker-today.png",
    screenshotAlt:
      "MaaSphere Medicine Tracker screen showing today's doses grouped by time of day with a progress ring",
    bullets: [
      "Add medicines with dosage, frequency, and reminders in a short guided flow.",
      "Today's doses are grouped into Morning / Afternoon / Evening / Night with a clear progress ring.",
      "Mark a dose taken or skipped — skipping asks for confirmation first, so a stray tap can't misreport your adherence.",
      "If your doctor is connected on MaaSphere, their instructions surface right in this screen, under 'From your doctor.'",
    ],
  },
];

export const dhruvAiFeature: Feature = {
  slug: "dhruv-ai",
  title: "Dhruv AI",
  tagline: "A calm, knowledgeable companion — not a replacement for your doctor.",
  accent: "gold",
  icon: "sparkles",
  screenshot: "dhruv-ai-chat.png",
  screenshotAlt: "MaaSphere Dhruv AI chat screen showing a natural conversation",
  bullets: [
    "Answers everyday questions about pregnancy, postpartum recovery, nutrition, and baby development.",
    "Reads the context you've already logged in MaaSphere — your current week, symptoms, medicines — so answers are personal, not generic.",
    "Built-in safety checks scan both what you type and your recent logged data, and can route you straight to emergency guidance when something looks urgent.",
    "Every response carries a clear reminder that it's informational, not a diagnosis — Dhruv AI never tells you that you or your baby have a specific medical condition.",
    "Powered by Anthropic's Claude, called through MaaSphere's own backend — your messages are never sent to a model directly from your device.",
  ],
};

export const doctorFeature: Feature = {
  slug: "doctor-dashboard",
  title: "Doctor Dashboard",
  tagline: "A read-only, EMR-style view built for busy clinicians.",
  accent: "slate",
  icon: "stethoscope",
  screenshot: "doctor-home.png",
  screenshotAlt: "MaaSphere Doctor Home screen showing identity card and quick stats",
  secondaryScreenshot: "doctor-patient-detail.png",
  secondaryScreenshotAlt:
    "MaaSphere Patient Detail screen showing a sectioned pregnancy record",
  bullets: [
    "A home screen built for a clinical workflow: verification status, active patients, pending requests, and recent activity at a glance.",
    "My Patients gives a searchable list; opening a patient shows a read-only, chart-style view — timeline, medicines, weight, symptoms, kick counter history, and your own past instructions and notes.",
    "Doctors can write clinical notes and issue instructions that surface directly inside the patient's Medicine Tracker.",
    "Today, an accepted patient connection shares the full record — granular, patient-controlled sharing of individual categories is on our roadmap, not yet available.",
  ],
};

export const partnerFeature: Feature = {
  slug: "partner-dashboard",
  title: "Partner Dashboard",
  tagline: "Built for support, not just spectating.",
  accent: "coral",
  icon: "heart-handshake",
  screenshot: "partner-dashboard-connected.png",
  screenshotAlt:
    "MaaSphere Partner Dashboard screen showing pregnancy progress, a daily support mission, and weekly stats",
  bullets: [
    "Once connected, partners see pregnancy progress, today's medicines and appointments, and doctor instructions — all read-only.",
    "A daily 'support mission' suggests one small, concrete way to help, and a personal check-in log tracks the partner's own mood alongside the journey.",
    "Weekly stats (missions completed, days checked in, streaks) turn showing up into something visible.",
    "Dhruv AI is available to partners too, scoped to their linked mother's data.",
  ],
};

export const allFeatures: Feature[] = [
  ...features,
  dhruvAiFeature,
  doctorFeature,
  partnerFeature,
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Is Dhruv AI a substitute for my doctor?",
    answer:
      "No. Dhruv AI is an informational companion built on Anthropic's Claude models. It never diagnoses a condition and always defers to your physician, midwife, or other qualified healthcare provider for medical decisions. See our AI Disclaimer for the full detail.",
  },
  {
    question: "What happens if MaaSphere detects a possible emergency?",
    answer:
      "Dhruv AI runs built-in safety checks against what you type and your recently logged data. If something looks urgent, it routes you to dedicated emergency guidance — but you should always contact local emergency services immediately rather than waiting on the app.",
  },
  {
    question: "Can my doctor see everything I log in MaaSphere?",
    answer:
      "Only if you accept a connection request from them. Today, an accepted doctor connection shares your full pregnancy record so they have real clinical context; granular, category-by-category sharing controls are planned but not live yet.",
  },
  {
    question: "How do I delete my account?",
    answer:
      "Open Profile in the app, scroll to Legal & Support, and tap Delete Account — this is immediate and permanent. You can also email support@maasphere.in to request deletion. Full details are on our Delete Account page.",
  },
  {
    question: "What information does the 3D Baby Viewer show?",
    answer:
      "Nine real 3D models mark key stages of development from week 8 to week 40 — not a continuously updating model, but enough to see how your baby is growing at each stage.",
  },
];

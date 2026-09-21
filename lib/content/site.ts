export const siteConfig = {
  name: "MaaSphere",
  tagline: "Your Pregnancy Journey. One Trusted Companion.",
  description:
    "MaaSphere is an AI-powered maternal and early-childhood wellbeing platform — pregnancy timeline, 3D baby viewer, kick counter, medicine tracker, and Dhruv AI, all in one calm, trusted space.",
  url: "https://maasphere.in",
  supportEmail: "support@maasphere.in",
  appStoreUrl: "https://apps.apple.com/in/app/maasphere/id6797445464",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.maasphere.mobile",
  legalEntity: "Elegance Professional (Partnership Firm)",
};

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "Dhruv AI", href: "/dhruv-ai" },
  { label: "For Doctors", href: "/doctors" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Dhruv AI", href: "/dhruv-ai" },
      { label: "For Doctors", href: "/doctors" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy-policy" },
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Medical Disclaimer", href: "/legal/medical-disclaimer" },
      { label: "AI Disclaimer", href: "/legal/ai-disclaimer" },
      { label: "Delete Account", href: "/legal/delete-account" },
    ],
  },
];

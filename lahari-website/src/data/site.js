// Global site content: firm info, contact details, nav, stats, footer areas.
// Consumed by Navbar, Footer, StatsSection, Contact page, and others.

export const SITE = {
  name: "Lahari Legal Associates",
  shortName: "Lahari Legal",
  tagline: "Trusted Legal Counsel in Hyderabad",
  description:
    "A full-service law firm in Hyderabad delivering strategic, results-driven representation across civil, criminal, corporate, and family law for over two decades.",
  established: 2003,
};

export const CONTACT = {
  address:
    "3rd Floor, Diamond Towers, Banjara Hills Road No. 12, Hyderabad, Telangana 500034",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  altPhone: "+91 40 2345 6789",
  email: "contact@laharilegal.in",
  emailHref: "mailto:contact@laharilegal.in",
  hours: "Mon \u2013 Sat: 9:30 AM \u2013 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Banjara+Hills+Hyderabad&output=embed",
  whatsapp: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappHref: "https://wa.me/919876543210",
};

/**
 * Builds a WhatsApp click-to-chat URL with an optional pre-filled message.
 * Used by service detail pages and CTAs so a client's first message is
 * already contextual (e.g. mentions the specific practice area).
 */
export const buildWhatsAppLink = (message = "") => {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  const text = message.trim();
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};

export const SOCIAL = [
  { name: "LinkedIn", url: "#", icon: "fab fa-linkedin-in" },
  { name: "Facebook", url: "#", icon: "fab fa-facebook-f" },
  { name: "Instagram", url: "#", icon: "fab fa-instagram" },
  { name: "X", url: "#", icon: "fab fa-x-twitter" },
];

// Primary navigation — no dropdowns, clean flat links.
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const STATS = [
  { value: "20+", label: "Years of Experience" },
  { value: "5,000+", label: "Cases Handled" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "13", label: "Practice Areas" },
];

// Footer uses a curated subset of practice areas to avoid an overwhelming list.
export const FOOTER_PRACTICE_AREAS = [
  { slug: "civil-law", title: "Civil Law" },
  { slug: "criminal-law", title: "Criminal Law" },
  { slug: "family-law", title: "Family Law" },
  { slug: "property-disputes", title: "Property Disputes" },
  { slug: "corporate-legal-advisory", title: "Corporate Advisory" },
  { slug: "cybercrime", title: "Cybercrime & Online Fraud" },
];

// Core values shown on the About page.
export const VALUES = [
  {
    icon: "fas fa-scale-balanced",
    title: "Integrity & Ethics",
    body: "We uphold the highest standards of professional integrity, offering honest counsel even when the truth is difficult to hear.",
  },
  {
    icon: "fas fa-shield-halved",
    title: "Relentless Advocacy",
    body: "We fight vigorously for our clients' rights, combining meticulous preparation with aggressive courtroom strategy.",
  },
  {
    icon: "fas fa-handshake-angle",
    title: "Client-First Approach",
    body: "Every case receives personalized attention. We keep you informed, involved, and empowered throughout the legal process.",
  },
  {
    icon: "fas fa-award",
    title: "Proven Results",
    body: "Our track record of favorable judgments and settlements speaks to the depth of our legal expertise.",
  },
];

// Firm milestones for the About timeline.
export const TIMELINE = [
  { year: "2003", title: "Founded in Hyderabad", body: "Lahari Legal Associates opens its doors with a commitment to accessible, high-quality legal representation." },
  { year: "2009", title: "Expanded Practice Areas", body: "Grew from a boutique civil practice into a full-service firm covering criminal, corporate, and family law." },
  { year: "2015", title: "Landmark Victories", body: "Secured multiple precedent-setting judgments in property and corporate litigation across Telangana courts." },
  { year: "2021", title: "Digital Forensics Division", body: "Launched a dedicated cybercrime and digital-evidence practice to meet the demands of India's digital economy." },
  { year: "2026", title: "5,000+ Cases Resolved", body: "Crossed a major milestone, having represented thousands of individuals and businesses to successful outcomes." },
];

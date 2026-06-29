// Global site content: firm info, contact details, nav, stats, footer areas.
// Consumed by Navbar, Footer, StatsSection, Contact page, and others.

export const SITE = {
  name: "Lahari Legal Associates",
  shortName: "Lahari Legal",
  tagline: "Trusted Legal Counsel in Hyderabad",
  description:
    "A full-service law firm in Hyderabad delivering strategic, results-driven representation across civil, criminal, corporate, and family law for over two decades.",
  established: 2026,
};

export const CONTACT = {
  address:
    "Aelukotis 1st Floor, 102, Sravanthi Nagar, ICRISAT Colony, Jubilee Hills, Hyderabad, Telangana 500045, India",
  phone: "+91 93985 81752",
  phoneHref: "+919398581752",
  altPhone: "",
  email: "laharilegal1999@gmail.com",
  emailHref: "mailto:laharilegal1999@gmail.com",
  hours: "Mon \u2013 Sat: 9:30 AM \u2013 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Aelukotis+1st+Floor+102+Sravanthi+Nagar+ICRISAT+Colony+Jubilee+Hills+Hyderabad+Telangana+500045+India&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Aelukotis+1st+Floor+102+Sravanthi+Nagar+ICRISAT+Colony+Jubilee+Hills+Hyderabad+Telangana+500045+India",
  whatsapp: "+91 93985 81752",
  whatsappNumber: "919398581752",
  whatsappHref: "https://wa.me/919398581752",
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

// Primary navigation — Our Expertise has a dropdown with all practice areas.
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Expertise", to: "/services" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const STATS = [
  { value: "20+", label: "Years of Experience" },
  { value: "5,000+", label: "Cases Handled" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15", label: "Practice Areas" },
];

// Footer uses a curated subset of practice areas to avoid an overwhelming list.
export const FOOTER_PRACTICE_AREAS = [
  { slug: "land-disputes", title: "Land Disputes" },
  { slug: "loan-recovery-harassment", title: "Loan Recovery & Harassment Prevention" },
  { slug: "family-law", title: "Family Law & Matrimonial Disputes" },
  { slug: "consumer-protection", title: "Consumer Protection Law" },
  { slug: "arbitration-adr", title: "Arbitration & ADR" },
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
  { year: "2026", title: "Founded in Hyderabad", body: "Lahari Legal Associates opens its doors with a commitment to accessible, high-quality legal representation." },
  { year: "2009", title: "Expanded Practice Areas", body: "Grew from a boutique civil practice into a full-service firm covering criminal, corporate, and family law." },
  { year: "2015", title: "Landmark Victories", body: "Secured multiple precedent-setting judgments in property and corporate litigation across Telangana courts." },
  { year: "2021", title: "Digital Forensics Division", body: "Launched a dedicated cybercrime and digital-evidence practice to meet the demands of India's digital economy." },
  { year: "2026", title: "5,000+ Cases Resolved", body: "Crossed a major milestone, having represented thousands of individuals and businesses to successful outcomes." },
];

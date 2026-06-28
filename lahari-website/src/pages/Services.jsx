import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { SERVICES } from "../data/services";

// Three trust pillars shown beneath the hero.
const PILLARS = [
  {
    icon: "fas fa-scale-balanced",
    title: "Senior Representation",
    body: "Decades of combined courtroom and advisory experience.",
  },
  {
    icon: "fas fa-handshake-angle",
    title: "Client-First Approach",
    body: "A personalised strategy built around every matter.",
  },
  {
    icon: "fas fa-award",
    title: "Proven Track Record",
    body: "5,000+ successful outcomes across 13 practice areas.",
  },
];

// Compact "how we engage" band — adds editorial weight to the page.
const ENGAGE = [
  {
    icon: "fas fa-magnifying-glass",
    title: "Understand",
    body: "We listen carefully and review every document to grasp the full picture before advising.",
  },
  {
    icon: "fas fa-chess-knight",
    title: "Strategise",
    body: "We craft a clear, practical legal strategy tailored to your goals and risk appetite.",
  },
  {
    icon: "fas fa-flag-checkered",
    title: "Resolve",
    body: "We execute decisively — through negotiation or litigation — to reach the best outcome.",
  },
];

export default function Services() {
  return (
    <div className="page-transition">
      <PageHero
        badge="Practice Areas"
        title="Our Legal Services"
        subtitle="Thirteen dedicated practice areas, each led by specialists who combine deep legal knowledge with practical, results-focused strategy."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      {/* Trust pillars */}
      <section className="svc-intro-strip">
        <div className="container">
          <div className="svc-intro-grid">
            {PILLARS.map((p) => (
              <SectionReveal key={p.title} className="svc-intro-item">
                <i className={p.icon} aria-hidden="true" />
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.body}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <SectionReveal className="section-head center">
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Explore Our Practice Areas</h2>
            <p className="section-subtitle">
              From civil litigation to cybercrime defence, our team provides
              comprehensive legal services tailored to your needs. Select an
              area to learn more or book a consultation.
            </p>
          </SectionReveal>

          <div className="svc-grid">
            {SERVICES.map((s, i) => (
              <SectionReveal key={s.slug} delay={(i % 4) * 70}>
                <ServiceCard service={s} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement approach band */}
      <section className="section section-alt">
        <div className="container">
          <SectionReveal className="section-head center">
            <span className="eyebrow">How We Work</span>
            <h2 className="section-title">A Clear Path to Resolution</h2>
            <p className="section-subtitle">
              Every engagement follows a disciplined, transparent process — so
              you always know where your matter stands.
            </p>
          </SectionReveal>
          <div className="svc-engage">
            {ENGAGE.map((step, i) => (
              <SectionReveal key={step.title} delay={i * 80}>
                <div className="svc-engage-item">
                  <span className="svc-engage-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="svc-engage-icon">
                    <i className={step.icon} aria-hidden="true" />
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Service You Need?"
        text="Tell us about your situation and we will point you to the right practice area — or build a multi-disciplinary strategy if your matter spans several."
      />
    </div>
  );
}

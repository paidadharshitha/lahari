import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import CTASection from "../components/CTASection";
import { VALUES, TIMELINE, STATS } from "../data/site";
import lalaImg from "../assets/images/lala.jpeg";

export default function About() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Two Decades of Trusted Legal Advocacy"
        subtitle="Founded in Hyderabad in 2026, Lahari Legal Associates has grown into one of Telangana's most respected full-service firms — known for integrity, diligence, and results."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Story with framed portrait */}
      <section className="section">
        <div className="container about-split">
          <SectionReveal variant="left" className="about-media">
            <div className="about-portrait-frame">
              <div className="about-portrait-inner">
                <img
                  src={lalaImg}
                  alt="Adv. K. Lahari — Founder, Lahari Legal Associates"
                  className="about-portrait-img"
                />
              </div>
              <div className="about-portrait-border" />
              <div className="about-portrait-overlay">
                <span className="about-portrait-name">Adv. K. Lahari</span>
                <span className="about-portrait-role">Founding Partner</span>
              </div>
            </div>
          </SectionReveal>
          <SectionReveal variant="right" className="about-body">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title">
              Built on a Simple Promise: <span className="gold-text">Every Client Matters</span>
            </h2>
            <p>
              Lahari Legal Associates began with a commitment to make high-quality
              legal representation accessible to individuals, families, and
              businesses across Hyderabad. What started as a boutique civil
              practice has grown into a comprehensive firm spanning thirteen
              practice areas — yet our founding principle remains unchanged.
            </p>
            <p>
              We believe legal counsel should be clear, honest, and strategically
              focused on achieving the best possible outcome for each client. Our
              attorneys combine decades of courtroom experience with a genuinely
              client-first approach, ensuring you are informed, prepared, and
              confident at every stage of your matter.
            </p>

            {/* Structured stats */}
            <div className="about-stats-row">
              {STATS.map((s) => (
                <div className="about-stat-card" key={s.label}>
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Link to="/contact" className="btn-primary btn-sm">
                Schedule a Consultation <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <SectionReveal className="section-head center">
            <span className="eyebrow">Our Values</span>
            <h2 className="section-title">The Principles That Guide Us</h2>
          </SectionReveal>
          <div className="value-list">
            {VALUES.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 80}>
                <div className="feature-card">
                  <span className="section-heading-icon">
                    <i className={v.icon} aria-hidden="true" />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <SectionReveal className="section-head center">
            <span className="eyebrow">Our Journey</span>
            <h2 className="section-title">Milestones Over the Years</h2>
          </SectionReveal>
          <div className="timeline">
            {TIMELINE.map((t, i) => (
              <SectionReveal key={t.year} className="timeline-item" delay={i * 70}>
                <div className="timeline-year">{t.year}</div>
                <h3 className="timeline-title">{t.title}</h3>
                <p>{t.body}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss How We Can Help"
        text="Reach out for a confidential consultation. Our team will review your situation and outline a clear path forward."
        primary={{ label: "Get in Touch", to: "/contact" }}
        secondary={{ label: "View Our Expertise", to: "/services" }}
      />
    </>
  );
}

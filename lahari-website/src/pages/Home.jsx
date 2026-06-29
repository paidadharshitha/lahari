import { Link } from "react-router-dom";
import HeroSlideshow from "../components/HeroSlideshow";
import StatsSection from "../components/StatsSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import ServiceCard from "../components/ServiceCard";
import SectionReveal from "../components/SectionReveal";
import CTASection from "../components/CTASection";
import { SERVICES } from "../data/services";
import { SITE, STATS, VALUES } from "../data/site";
import lalaImg from "../assets/images/lala.jpeg";

// Featured practice areas shown on the home page (preview, not the full list).
const FEATURED = SERVICES.slice(0, 6);

const FIRM_STATS = [
  { value: "20+", label: "Years of Experience" },
  { value: "5,000+", label: "Cases Handled" },
  { value: "98%", label: "Success Rate" },
  { value: "13", label: "Practice Areas" },
];

export default function Home() {
  return (
    <>
      <HeroSlideshow />

      {/* Stats band directly under the hero */}
      <StatsSection items={STATS} />

      {/* About preview with framed portrait */}
      <section className="section section-alt">
        <div className="container">
          <SectionReveal className="section-head center">
            <span className="eyebrow">Who We Are</span>
            <h2 className="section-title">
              Two Decades of Trusted Legal Counsel in Hyderabad
            </h2>
            <p className="section-subtitle">
              Founded in 2026, Lahari Legal Associates has earned a reputation
              for integrity, diligence, and unwavering commitment to every client.
            </p>
          </SectionReveal>

          <div className="home-about-v2">
            <SectionReveal variant="left" className="home-about-media-v2">
              <div className="home-portrait-frame">
                <div className="home-portrait-inner">
                  <img
                    src={lalaImg}
                    alt="Adv. K. Lahari — Founder, Lahari Legal Associates"
                    className="home-portrait-img"
                    loading="eager"
                  />
                </div>
                <div className="home-portrait-border" />
                <div className="home-portrait-badge">
                  <span className="home-portrait-est">Est. {SITE.established}</span>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal variant="right" className="home-about-content-v2">
              <p className="home-about-desc">{SITE.description}</p>

              {/* Stats row */}
              <div className="home-firm-stats">
                {FIRM_STATS.map((stat) => (
                  <div className="home-firm-stat" key={stat.label}>
                    <span className="home-firm-stat-value">{stat.value}</span>
                    <span className="home-firm-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="home-about-values">
                {VALUES.slice(0, 2).map((v) => (
                  <div className="home-about-value" key={v.title}>
                    <span className="section-heading-icon">
                      <i className={v.icon} aria-hidden="true" />
                    </span>
                    <div>
                      <h4>{v.title}</h4>
                      <p>{v.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn-outline btn-sm">
                More About Us <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Practice Areas preview */}
      <section className="section">
        <div className="container">
          <SectionReveal className="section-head center">
            <span className="eyebrow">Practice Areas</span>
            <h2 className="section-title">Legal Expertise Across {SERVICES.length} Disciplines</h2>
            <p className="section-subtitle">
              Each practice area is led by specialists who combine deep legal
              knowledge with practical, results-focused strategy.
            </p>
          </SectionReveal>

          <div className="card-grid">
            {FEATURED.map((s, i) => (
              <SectionReveal key={s.slug} delay={(i % 3) * 80}>
                <ServiceCard service={s} />
              </SectionReveal>
            ))}
          </div>

          <div className="text-center mt-3">
            <Link to="/services" className="btn-primary">
              View All Practice Areas <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <CTASection />
    </>
  );
}

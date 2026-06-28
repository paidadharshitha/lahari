import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import CTASection from "../components/CTASection";
import { INSIGHTS } from "../data/insights";

export default function Insights() {
  return (
    <>
      <PageHero
        badge="Knowledge Hub"
        title="Legal Insights & Analysis"
        subtitle="Expert commentary on new legislation, landmark judgments, and regulatory developments — curated by our legal team to keep you informed and empowered."
        crumbs={[{ label: "Home", to: "/" }, { label: "Insights" }]}
      />

      {/* Featured Insights Grid */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <div className="section-head center">
              <span className="eyebrow">Featured Articles</span>
              <h2 className="section-title">Explore Our Insights</h2>
              <p className="section-subtitle">
                In-depth analysis and expert commentary on the legal developments that matter most to you and your business.
              </p>
            </div>
          </SectionReveal>

          <div className="insights-featured-grid">
            {INSIGHTS.map((article, i) => (
              <SectionReveal key={article.slug} delay={i * 120}>
                <Link to={`/insights/${article.slug}`} className="insight-featured-card">
                  <div className="insight-featured-image">
                    <img src={article.image} alt={article.title} loading="lazy" />
                    <div className="insight-featured-overlay" />
                    <span className="insight-featured-badge">{article.tag}</span>
                  </div>
                  <div className="insight-featured-body">
                    <h3 className="insight-featured-title">{article.title}</h3>
                    <p className="insight-featured-summary">{article.short}</p>
                    <div className="insight-featured-footer">
                      <div className="insight-featured-meta">
                        <span className="insight-featured-date">
                          <i className="far fa-calendar" aria-hidden="true" />
                          {article.date}
                        </span>
                        <span className="insight-featured-read">
                          <i className="far fa-clock" aria-hidden="true" />
                          {article.readTime}
                        </span>
                      </div>
                      <span className="insight-featured-cta">
                        Read More
                        <i className="fas fa-arrow-right" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Legal Question?"
        text="Our insights are general in nature. For guidance tailored to your specific situation, schedule a confidential consultation with our team."
        primary={{ label: "Book a Consultation", to: "/contact" }}
        secondary={{ label: "Explore Services", to: "/services" }}
      />
    </>
  );
}

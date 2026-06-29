import { Link, Navigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import SectionReveal from "../components/SectionReveal";
import CTASection from "../components/CTASection";
import { INSIGHTS, getInsightBySlug, getAdjacentInsights } from "../data/insights";
import { SERVICES } from "../data/services";

function ShareButtons({ title }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="insight-share-buttons">
      <span className="insight-share-label">Share</span>
      <div className="insight-share-links">
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="insight-share-btn"
          aria-label="Share on WhatsApp"
        >
          <i className="fab fa-whatsapp" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="insight-share-btn"
          aria-label="Share on LinkedIn"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href={`mailto:?subject=${encodedTitle}&body=${encodedTitle}%0A%0A${encodedUrl}`}
          className="insight-share-btn"
          aria-label="Share via Email"
        >
          <i className="fas fa-envelope" />
        </a>
      </div>
    </div>
  );
}

function slugifyHeading(heading) {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const ids = sections.map((s) => slugifyHeading(s.heading));
      const headings = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      let current = "";
      for (let i = headings.length - 1; i >= 0; i--) {
        const rect = headings[i].getBoundingClientRect();
        if (rect.top <= 120) {
          current = headings[i].id;
          break;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  return (
    <div className="insight-toc">
      <h4 className="insight-toc-title">Table of Contents</h4>
      <ul className="insight-toc-list">
        {sections.map((sec) => {
          const id = slugifyHeading(sec.heading);
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`insight-toc-link ${activeId === id ? "active" : ""}`}
              >
                <span className="insight-toc-dot" />
                {sec.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function InsightDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const article = getInsightBySlug(slug);
  const [fadeIn, setFadeIn] = useState(false);
  const { prev, next } = getAdjacentInsights(slug);

  useEffect(() => {
    setFadeIn(false);
    const t = setTimeout(() => setFadeIn(true), 50);
    return () => clearTimeout(t);
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  const relatedServices = useMemo(() => {
    if (!article) return [];
    return (article.relatedServices || [])
      .map((s) => SERVICES.find((svc) => svc.slug === s))
      .filter(Boolean);
  }, [article]);

  const relatedInsights = useMemo(() => {
    if (!article) return [];
    return INSIGHTS.filter((a) => a.slug !== article.slug).slice(0, 3);
  }, [article]);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const shareTitle = `${article.title} — Lahari Legal Associates`;

  return (
    <div className={`insight-article-page ${fadeIn ? "insight-page-visible" : ""}`}>
      {/* Hero Banner */}
      <section className="insight-hero-banner">
        <div className="insight-hero-bg">
          <img src={article.heroImage} alt="" aria-hidden="true" />
        </div>
        <div className="insight-hero-overlay" />
        <div className="container insight-hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <span className="breadcrumb-item">
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right breadcrumb-sep" aria-hidden="true" />
            </span>
            <span className="breadcrumb-item">
              <Link to="/insights">Insights</Link>
              <i className="fas fa-chevron-right breadcrumb-sep" aria-hidden="true" />
            </span>
            <span className="breadcrumb-item">
              <span aria-current="page">{article.tag}</span>
            </span>
          </nav>
          <span className="insight-hero-badge">{article.tag}</span>
          <h1 className="insight-hero-title">{article.title}</h1>
          <p className="insight-hero-excerpt">{article.short}</p>
          <div className="insight-hero-meta">
            <span className="insight-hero-meta-item">
              <i className="far fa-calendar" aria-hidden="true" />
              {article.date}
            </span>
            <span className="insight-hero-meta-item">
              <i className="far fa-clock" aria-hidden="true" />
              {article.readTime}
            </span>
            <span className="insight-hero-meta-item">
              <i className="far fa-user" aria-hidden="true" />
              {article.author}
            </span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section">
        <div className="container">
          <div className="insight-article-layout">
            {/* Main Content */}
            <article className="insight-article-main">
              {/* Back to Insights */}
              <Link to="/insights" className="insight-back-link">
                <i className="fas fa-arrow-left" aria-hidden="true" />
                Back to Insights
              </Link>

              {/* Article Content */}
              <div className="insight-article-content">
                {article.overview.map((p, i) => (
                  <p key={i} className="insight-article-para">{p}</p>
                ))}

                {article.sections.map((sec) => (
                  <SectionReveal key={sec.heading}>
                    <section
                      className="insight-article-section"
                      id={slugifyHeading(sec.heading)}
                    >
                      <div className="insight-section-head">
                        <span className="insight-section-icon">
                          <i className={sec.icon} aria-hidden="true" />
                        </span>
                        <h2>{sec.heading}</h2>
                      </div>
                      {sec.body.map((p, i) => (
                        <p key={i} className="insight-article-para">{p}</p>
                      ))}
                    </section>
                  </SectionReveal>
                ))}
              </div>

              {/* Key Highlights */}
              {article.highlights && article.highlights.length > 0 && (
                <SectionReveal>
                  <div className="insight-highlights">
                    <h3 className="insight-highlights-title">
                      <i className="fas fa-star" aria-hidden="true" />
                      Key Highlights
                    </h3>
                    <ul className="insight-highlights-list">
                      {article.highlights.map((h, i) => (
                        <li key={i} className="insight-highlight-item">
                          <span className="insight-highlight-bullet" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SectionReveal>
              )}

              {/* Related Legal Services */}
              {relatedServices.length > 0 && (
                <SectionReveal>
                  <div className="insight-related-services">
                    <h3 className="insight-related-services-title">Related Legal Services</h3>
                    <div className="insight-related-services-grid">
                      {relatedServices.map((svc) => (
                        <Link to={`/services/${svc.slug}`} key={svc.slug} className="insight-related-service-card">
                          <span className="insight-related-service-icon">
                            <i className={svc.icon} aria-hidden="true" />
                          </span>
                          <span className="insight-related-service-name">{svc.title}</span>
                          <i className="fas fa-chevron-right insight-related-service-arrow" aria-hidden="true" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              )}

              {/* Article Share & CTA */}
              <SectionReveal>
                <div className="insight-article-bottom">
                  <ShareButtons title={shareTitle} />
                  <Link to="/contact" className="btn-primary">
                    <i className="fas fa-calendar-check" aria-hidden="true" />
                    Book a Consultation
                  </Link>
                </div>
              </SectionReveal>

              {/* Previous / Next Navigation */}
              {(prev || next) && (
                <SectionReveal>
                  <nav className="insight-article-nav" aria-label="Article navigation">
                    {prev && (
                      <Link to={`/insights/${prev.slug}`} className="insight-nav-link insight-nav-prev">
                        <span className="insight-nav-label">
                          <i className="fas fa-arrow-left" aria-hidden="true" />
                          Previous
                        </span>
                        <span className="insight-nav-title">{prev.title}</span>
                      </Link>
                    )}
                    <span className="insight-nav-spacer" />
                    {next && (
                      <Link to={`/insights/${next.slug}`} className="insight-nav-link insight-nav-next">
                        <span className="insight-nav-label">
                          Next
                          <i className="fas fa-arrow-right" aria-hidden="true" />
                        </span>
                        <span className="insight-nav-title">{next.title}</span>
                      </Link>
                    )}
                  </nav>
                </SectionReveal>
              )}
            </article>

            {/* Sticky Sidebar */}
            <aside className="insight-sidebar">
              <div className="insight-sidebar-inner">
                <TableOfContents sections={article.sections} />

                <ShareButtons title={shareTitle} />

                <Link to="/contact" className="insight-sidebar-cta">
                  <i className="fas fa-user-tie" aria-hidden="true" />
                  <span>Contact a Lawyer</span>
                </Link>

                {/* More Insights */}
                <div className="insight-sidebar-more">
                  <h4 className="insight-sidebar-more-title">More Insights</h4>
                  <ul className="insight-sidebar-more-list">
                    {INSIGHTS.filter((a) => a.slug !== article.slug).map((a) => (
                      <li key={a.slug}>
                        <Link to={`/insights/${a.slug}`} className="insight-sidebar-more-link">
                          <span className="mini-tag">{a.tag}</span>
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Insights Section */}
      {relatedInsights.length > 0 && (
        <section className="section section-muted">
          <div className="container">
            <SectionReveal>
              <div className="section-head center">
                <span className="eyebrow">Continue Reading</span>
                <h2 className="section-title">Related Insights</h2>
              </div>
            </SectionReveal>
            <div className="insights-featured-grid insights-related-bottom-grid">
              {relatedInsights.map((a, i) => (
                <SectionReveal key={a.slug} delay={i * 120}>
                  <Link to={`/insights/${a.slug}`} className="insight-featured-card">
                    <div className="insight-featured-image">
                      <img src={a.image} alt={a.title} loading="lazy" />
                      <div className="insight-featured-overlay" />
                      <span className="insight-featured-badge">{a.tag}</span>
                    </div>
                    <div className="insight-featured-body">
                      <h3 className="insight-featured-title">{a.title}</h3>
                      <p className="insight-featured-summary">{a.short}</p>
                      <div className="insight-featured-footer">
                        <div className="insight-featured-meta">
                          <span className="insight-featured-date">
                            <i className="far fa-calendar" aria-hidden="true" />
                            {a.date}
                          </span>
                          <span className="insight-featured-read">
                            <i className="far fa-clock" aria-hidden="true" />
                            {a.readTime}
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
      )}

      <CTASection
        title="Need Advice on This Topic?"
        text="These articles are for general information. For guidance specific to your circumstances, book a consultation with our team."
        primary={{ label: "Book a Consultation", to: "/contact" }}
        secondary={{ label: "Our Expertise", to: "/services" }}
      />
    </div>
  );
}

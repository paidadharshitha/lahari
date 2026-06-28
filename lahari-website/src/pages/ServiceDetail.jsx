import { Link, Navigate, useParams } from "react-router-dom";
import SectionReveal from "../components/SectionReveal";
import CTASection from "../components/CTASection";
import ServiceCard from "../components/ServiceCard";
import FaqAccordion from "../components/FaqAccordion";
import { SERVICES, getServiceBySlug } from "../data/services";
import { CONTACT, buildWhatsAppLink } from "../data/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const idx = SERVICES.findIndex((s) => s.slug === service.slug);
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  // Pre-filled WhatsApp message so the first message is contextual.
  const waLink = buildWhatsAppLink(
    `Hello Lahari Legal Associates, I would like to book a consultation regarding ${service.title}.`
  );

  return (
    <div className="page-transition">
      {/* ---------- Large banner ---------- */}
      <section className="svc-banner">
        <div className="container svc-banner-grid">
          <div className="svc-banner-content">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <span className="breadcrumb-item">
                <Link to="/">Home</Link>
                <i className="fas fa-chevron-right breadcrumb-sep" aria-hidden="true" />
              </span>
              <span className="breadcrumb-item">
                <Link to="/services">Services</Link>
                <i className="fas fa-chevron-right breadcrumb-sep" aria-hidden="true" />
              </span>
              <span className="breadcrumb-item">
                <span aria-current="page">{service.title}</span>
              </span>
            </nav>

            <span className="svc-banner-badge">
              Practice Area {String(idx + 1).padStart(2, "0")}
            </span>
            <h1>{service.title}</h1>
            <p className="svc-banner-sub">{service.subtitle}</p>

            <div className="svc-banner-cta">
              <Link to="/contact" className="btn-primary">
                Book a Consultation{" "}
                <i className="fas fa-arrow-right" aria-hidden="true" />
              </Link>
              <a
                href={waLink}
                className="btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp" aria-hidden="true" /> WhatsApp Us
              </a>
            </div>

            <div className="svc-banner-trust">
              <span>
                <i className="fas fa-shield-halved" aria-hidden="true" /> Strictly
                confidential
              </span>
              <span>
                <i className="fas fa-clock" aria-hidden="true" /> {CONTACT.hours}
              </span>
            </div>
          </div>

          <div className="svc-banner-medallion" aria-hidden="true">
            <i className={service.icon} />
          </div>
        </div>
      </section>

      {/* ---------- Overview ---------- */}
      <section className="section">
        <div className="container container-narrow">
          <SectionReveal>
            <div className="section-head">
              <span className="eyebrow">Overview</span>
              <h2 className="section-title">About This Practice Area</h2>
            </div>
            {service.overview.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </SectionReveal>
        </div>
      </section>

      {/* ---------- Legal process (connected journey) ---------- */}
      <section className="section section-alt">
        <div className="container container-narrow">
          <SectionReveal>
            <div className="section-head center">
              <span className="eyebrow">Our Approach</span>
              <h2 className="section-title">The Legal Process</h2>
              <p className="section-subtitle">
                Every engagement follows a structured process designed to protect
                your interests while keeping you fully informed at each stage.
              </p>
            </div>
            <div className="svc-journey">
              {service.process.map((step) => (
                <div className="svc-journey-step" key={step.title}>
                  <div className="svc-journey-node" aria-hidden="true" />
                  <div className="svc-journey-body">
                    <h4>{step.title}</h4>
                    <p>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ---------- Why choose Lahari Legal ---------- */}
      <section className="section">
        <div className="container container-narrow">
          <SectionReveal>
            <div className="section-head center">
              <span className="eyebrow">Why Lahari Legal</span>
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle">
                Clients trust our {service.title} team for clear counsel, rigorous
                preparation, and a relentless commitment to results.
              </p>
            </div>
            <div className="svc-benefits-grid">
              {service.benefits.map((b, i) => (
                <div className="svc-benefit-card" key={i}>
                  <i className="fas fa-circle-check" aria-hidden="true" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section section-alt">
        <div className="container container-narrow">
          <SectionReveal>
            <div className="section-head center">
              <span className="eyebrow">Good to Know</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Answers to the questions clients most often ask about our{" "}
                {service.title} practice.
              </p>
            </div>
            <FaqAccordion faqs={service.faqs} />
          </SectionReveal>
        </div>
      </section>

      {/* ---------- Book Consultation + WhatsApp band ---------- */}
      <section className="section section-muted">
        <div className="container">
          <SectionReveal className="svc-contact-band">
            <div className="svc-contact-band-content">
              <h2>Need Help with {service.title}?</h2>
              <p>
                Speak with a specialist today. We offer confidential
                consultations to evaluate your situation and recommend next steps.
              </p>
              <div className="svc-contact-actions">
                <Link to="/contact" className="btn-primary">
                  Book a Consultation{" "}
                  <i className="fas fa-arrow-right" aria-hidden="true" />
                </Link>
                <a
                  href={waLink}
                  className="btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp" aria-hidden="true" /> Chat on
                  WhatsApp
                </a>
                <a href={`tel:${CONTACT.phoneHref}`} className="btn-outline">
                  <i className="fas fa-phone" aria-hidden="true" /> {CONTACT.phone}
                </a>
              </div>
              <div className="svc-contact-meta">
                <span>
                  <i className="fas fa-envelope" aria-hidden="true" />{" "}
                  {CONTACT.email}
                </span>
                <span>
                  <i className="fas fa-clock" aria-hidden="true" /> {CONTACT.hours}
                </span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ---------- Related practice areas ---------- */}
      <section className="section">
        <div className="container">
          <SectionReveal className="section-head center">
            <span className="eyebrow">Explore More</span>
            <h2 className="section-title">Related Practice Areas</h2>
          </SectionReveal>
          <div className="card-grid card-grid-3">
            {related.map((s) => (
              <SectionReveal key={s.slug}>
                <ServiceCard service={s} />
              </SectionReveal>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/services" className="btn-outline">
              View All Practice Areas{" "}
              <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

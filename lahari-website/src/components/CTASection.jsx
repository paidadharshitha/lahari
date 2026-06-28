import { Link } from "react-router-dom";
import SectionReveal from "./SectionReveal";

/**
 * Reusable call-to-action band. Defaults to a free-consultation prompt.
 *
 * Props:
 *  - title, text: heading + supporting copy
 *  - primary: { label, to }
 *  - secondary: { label, to } (optional)
 */
export default function CTASection({
  title = "Ready to Discuss Your Legal Matter?",
  text = "Schedule a confidential consultation with our experienced attorneys. We will evaluate your situation, explain your options, and chart the strongest path forward.",
  primary = { label: "Book a Consultation", to: "/contact" },
  secondary = { label: "Explore Services", to: "/services" },
}) {
  return (
    <section className="cta-section">
      <div className="container">
        <SectionReveal className="cta-inner">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-text">{text}</p>
          <div className="cta-actions">
            <Link to={primary.to} className="btn-primary">
              {primary.label} <i className="fas fa-arrow-right" aria-hidden="true" />
            </Link>
            {secondary && (
              <Link to={secondary.to} className="btn-outline">
                {secondary.label}
              </Link>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

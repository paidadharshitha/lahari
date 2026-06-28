import { Link } from "react-router-dom";

/**
 * Premium service card (glassmorphism + gold glow).
 *
 * Props:
 *  - service: { slug, icon, title, short }
 *  - index:   position in the list (0-based). When provided, a faint
 *             "01"–"13" watermark is rendered in the corner.
 */
export default function ServiceCard({ service, index }) {
  const num =
    Number.isInteger(index) ? String(index + 1).padStart(2, "0") : null;

  return (
    <Link to={`/services/${service.slug}`} className="svc-card-v2">
      <span className="svc-card-v2-accent" aria-hidden="true" />
      <span className="svc-card-v2-shine" aria-hidden="true" />
      {num && (
        <span className="svc-card-v2-num" aria-hidden="true">
          {num}
        </span>
      )}
      <span className="svc-card-v2-icon">
        <i className={service.icon} aria-hidden="true" />
      </span>
      <h3 className="svc-card-v2-title">{service.title}</h3>
      <p className="svc-card-v2-desc">{service.short}</p>
      <span className="svc-card-v2-btn">
        Learn More
        <i className="fas fa-arrow-right" aria-hidden="true" />
      </span>
    </Link>
  );
}

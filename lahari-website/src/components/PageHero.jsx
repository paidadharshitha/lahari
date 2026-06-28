import { Link } from "react-router-dom";

/**
 * Standard interior-page hero block.
 *
 * Props:
 *  - badge: small label above the title
 *  - title: page heading
 *  - subtitle: supporting line under the title
 *  - crumbs: array of { label, to? } for breadcrumb trail (last = current page)
 */
export default function PageHero({ badge, title, subtitle, crumbs = [] }) {
  return (
    <section className="page-hero">
      <div className="container">
        {crumbs.length > 0 && (
          <nav className="breadcrumb" aria-label="Breadcrumb">
            {crumbs.map((c, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <span key={i} className="breadcrumb-item">
                  {c.to && !isLast ? (
                    <Link to={c.to}>{c.label}</Link>
                  ) : (
                    <span aria-current="page">{c.label}</span>
                  )}
                  {!isLast && <i className="fas fa-chevron-right breadcrumb-sep" aria-hidden="true" />}
                </span>
              );
            })}
          </nav>
        )}

        {badge && <span className="page-badge">{badge}</span>}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

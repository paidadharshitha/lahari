import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data/site";
import { SERVICES } from "../data/services";

export default function MobileMenu({ open, onClose, phone }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isServicesActive =
    location.pathname === "/services" ||
    location.pathname.startsWith("/services/");

  // Auto-open services accordion when on a services route
  const showServices = open && (servicesOpen || isServicesActive);

  return (
    <>
      <div
        className={`mobile-backdrop ${open ? "is-open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mobile-menu-head">
          <Link to="/" className="logo" onClick={onClose}>
            <span className="logo-icon">LL</span>
            <span className="logo-text">
              Lahari <span className="gold-text">Legal</span>
            </span>
          </Link>
          <button
            type="button"
            className="mobile-menu-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <i className="fas fa-xmark" aria-hidden="true" />
          </button>
        </div>

        <div className="mobile-menu-body">
          {NAV_LINKS.map((link) =>
            link.to === "/services" ? (
              <div key={link.to}>
                <button
                  type="button"
                  className={`mobile-services-toggle ${isServicesActive ? "nav-link-active" : ""} ${showServices ? "is-open" : ""}`}
                  onClick={() => setServicesOpen((o) => !o)}
                  aria-expanded={showServices}
                >
                  <span>Services</span>
                  <i className="fas fa-chevron-down toggle-chevron" aria-hidden="true" />
                </button>
                <div className={`mobile-services-list ${showServices ? "is-open" : ""}`}>
                  <div className="mobile-services-divider" />
                  {SERVICES.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={`/services/${svc.slug}`}
                      className={`mobile-sub-link ${location.pathname === `/services/${svc.slug}` ? "nav-link-active" : ""}`}
                      onClick={onClose}
                    >
                      <i className={svc.icon} aria-hidden="true" />
                      <span>{svc.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  "mobile-nav-link" + (isActive ? " nav-link-active" : "")
                }
                onClick={onClose}
              >
                {link.label}
                <i
                  className="fas fa-chevron-right"
                  aria-hidden="true"
                  style={{ fontSize: "0.75rem", color: "var(--text-faint)" }}
                />
              </NavLink>
            )
          )}
        </div>

        <div className="mobile-menu-foot">
          <Link to="/contact" className="btn-primary" onClick={onClose}>
            <i className="fas fa-phone" aria-hidden="true" /> Book a Consultation
          </Link>
          <p className="mobile-contact-mini">
            Call us: <a href={`tel:${phone}`}>{phone}</a>
          </p>
        </div>
      </aside>
    </>
  );
}

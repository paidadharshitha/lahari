import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../data/site";

export default function MobileMenu({ open, onClose, phone }) {
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
          {NAV_LINKS.map((link) => (
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
          ))}
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

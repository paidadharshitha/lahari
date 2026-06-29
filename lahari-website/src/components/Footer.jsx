import { Link } from "react-router-dom";
import { CONTACT, SOCIAL, FOOTER_PRACTICE_AREAS, SITE } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-col footer-brand">
            <Link to="/" className="logo logo-footer">
              <span className="logo-text">Lahari Legal <span className="gold-text">Associates</span></span>
            </Link>
            <p className="footer-about">
              Lahari Legal Associates is a full-service law firm in Hyderabad,
              delivering strategic, results-driven representation across civil,
              criminal, corporate, and family law.
            </p>
            <span className="footer-established">
              Established {SITE.established}
            </span>
            <div className="footer-social">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                >
                  <i className={s.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Practice areas */}
          <div className="footer-col">
            <h4 className="footer-heading">Practice Areas</h4>
            <ul className="footer-links">
              {FOOTER_PRACTICE_AREAS.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Expertise</Link></li>
              <li><Link to="/insights">Insights</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Get in Touch</h4>
            <ul className="footer-contact">
              <li>
                <a
                  href={CONTACT.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open office location in Google Maps"
                >
                  <i className="fas fa-location-dot" aria-hidden="true" />
                  <span>{CONTACT.address}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phoneHref}`}>
                  <i className="fas fa-phone" aria-hidden="true" />
                  <span>{CONTACT.phone}</span>
                </a>
              </li>
              {CONTACT.altPhone && (
                <li>
                  <a href={`tel:${CONTACT.altPhoneHref}`}>
                    <i className="fas fa-phone" aria-hidden="true" />
                    <span>{CONTACT.altPhone}</span>
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${CONTACT.email}`}>
                  <i className="fas fa-envelope" aria-hidden="true" />
                  <span>{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <i className="fas fa-clock" aria-hidden="true" />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {year} Lahari Legal Associates. All rights reserved.
          </p>
          <p className="footer-disclaimer">
            The content on this site is for informational purposes only and does
            not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

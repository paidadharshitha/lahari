import { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { NAV_LINKS, CONTACT } from "../data/site";
import { SERVICES } from "../data/services";
import { useScrolled } from "../hooks/useScrolled";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const location = useLocation();
  const navigate = useNavigate();
  const triggerRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const timeoutRef = useRef(null);

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  const openDropdown = useCallback(() => {
    setDropdownOpen(true);
  }, []);

  /* Reset on route change */
  useEffect(() => {
    setMobileOpen(false);
    closeDropdown();
  }, [location.pathname]);

  /* Body scroll lock for mobile menu */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Calculate dropdown position from trigger button */
  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setDropdownPos({
      top: rect.bottom + 8,
      left: rect.left + rect.width / 2,
    });
  }, []);

  /* Update position on scroll/resize */
  useEffect(() => {
    if (!dropdownOpen) return;
    updatePosition();
    const onScroll = () => updatePosition();
    const onResize = () => updatePosition();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
  }, [dropdownOpen, updatePosition]);

  /* Close on outside click / Escape */
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e) => {
      if (
        triggerRef.current?.contains(e.target) ||
        dropdownContainerRef.current?.contains(e.target)
      )
        return;
      closeDropdown();
    };
    const escHandler = (e) => {
      if (e.key === "Escape") closeDropdown();
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    document.addEventListener("keydown", escHandler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
      document.removeEventListener("keydown", escHandler);
    };
  }, [dropdownOpen, closeDropdown]);

  /* Hover handlers */
  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    openDropdown();
  };
  const handleMouseLeaveWrapper = () => {
    timeoutRef.current = setTimeout(closeDropdown, 300);
  };
  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };
  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(closeDropdown, 200);
  };

  /* Click handler for trigger */
  const handleTriggerClick = (e) => {
    if (dropdownOpen) {
      closeDropdown();
      navigate("/services");
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    updatePosition();
    openDropdown();
  };

  const isServicesActive =
    location.pathname === "/services" ||
    location.pathname.startsWith("/services/");

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="Lahari Legal — home">
          <span className="logo-icon">LL</span>
          <span className="logo-text">
            Lahari <span className="gold-text">Legal</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            link.to === "/services" ? (
              <div
                key={link.to}
                className={`nav-dropdown-wrapper ${dropdownOpen ? "open" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeaveWrapper}
              >
                <button
                  type="button"
                  ref={triggerRef}
                  className={`nav-dropdown-trigger ${isServicesActive ? "active" : ""}`}
                  onClick={handleTriggerClick}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  Services
                  <i className="fas fa-chevron-down dd-arrow" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link-active" : "")
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link to="/contact" className="btn-primary btn-sm header-cta">
            <i className="fas fa-phone" aria-hidden="true" /> Consult
          </Link>
          <button
            type="button"
            className={`mobile-toggle ${mobileOpen ? "is-open" : ""}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* 
        SERVICES DROPDOWN — rendered outside container/header-inner 
        with position:fixed to completely bypass all stacking contexts.
      */}
      {dropdownOpen && (
        <div
          ref={dropdownContainerRef}
          className="services-dropdown-fixed"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
          style={{
            position: "fixed",
            top: `${dropdownPos.top}px`,
            left: `${dropdownPos.left}px`,
            transform: "translateX(-50%)",
            zIndex: 999999999,
          }}
        >
          <div className="nav-dropdown-inner">
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                className="nav-dropdown-item"
                onClick={() => closeDropdown()}
              >
                <i className={svc.icon} aria-hidden="true" />
                <span className="dd-item-label">{svc.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        phone={CONTACT.phoneHref}
      />
    </header>
  );
}

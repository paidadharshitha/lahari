import { useEffect, useState, useRef, useCallback, useLayoutEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { NAV_LINKS, CONTACT } from "../data/site";
import { SERVICES } from "../data/services";
import { useScrolled } from "../hooks/useScrolled";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const location = useLocation();
  const triggerRef = useRef(null);
  const dropdownContainerRef = useRef(null);
  const timeoutRef = useRef(null);

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false);
    setDropdownPos(null);
  }, []);

  const openDropdown = useCallback(() => {
    setDropdownOpen(true);
  }, []);

  /* ---- Portal position tracking ---- */
  useLayoutEffect(() => {
    if (!dropdownOpen || !triggerRef.current) {
      setDropdownPos(null);
      return;
    }

    const calcPos = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
      });
    };

    calcPos();

    const onScroll = () => closeDropdown();
    const onResize = calcPos;

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [dropdownOpen, closeDropdown]);

  /* Detect touch device — disable hover-based dropdown on touch */
  useEffect(() => {
    const onTouch = () => {
      setIsTouchDevice(true);
      window.removeEventListener("touchstart", onTouch, { passive: true });
    };
    window.addEventListener("touchstart", onTouch, { passive: true });
    return () => window.removeEventListener("touchstart", onTouch, { passive: true });
  }, []);

  /* Reset on route change */
  useEffect(() => {
    setMobileOpen(false);
    closeDropdown();
  }, [location.pathname, closeDropdown]);

  /* Body scroll lock for mobile menu */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Escape key to close dropdown */
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") closeDropdown();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [dropdownOpen, closeDropdown]);

  /* Hover handlers — disabled on touch devices */
  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    clearTimeout(timeoutRef.current);
    openDropdown();
  };
  const handleMouseLeaveWrapper = () => {
    if (isTouchDevice) return;
    timeoutRef.current = setTimeout(closeDropdown, 300);
  };
  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };
  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(closeDropdown, 200);
  };

  /* Click handler for trigger — pure toggle */
  const handleTriggerClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropdownOpen) {
      closeDropdown();
      return;
    }
    openDropdown();
  };

  const isServicesActive =
    location.pathname === "/services" ||
    location.pathname.startsWith("/services/");

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label="Lahari Legal — home">
          <img className="logo-full" src="/legal.jpeg" alt="Lahari Legal Associates" />
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
                  Our Expertise
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

      {/* Portal-rendered dropdown at body level */}
      {dropdownOpen && dropdownPos
        ? createPortal(
            <>
              <div
                className="nav-dropdown-portal-backdrop"
                onMouseDown={closeDropdown}
                onTouchStart={(e) => {
                  if (e.target === e.currentTarget) closeDropdown();
                }}
              />
              <div
                ref={dropdownContainerRef}
                className="nav-dropdown-portal"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
                style={{
                  position: "fixed",
                  top: dropdownPos.top,
                  left: dropdownPos.left,
                }}
              >
                <div className="nav-dropdown-inner">
                  {SERVICES.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={`/services/${svc.slug}`}
                      className="nav-dropdown-item"
                      onClick={closeDropdown}
                    >
                      <i className={svc.icon} aria-hidden="true" />
                      <span className="dd-item-label">{svc.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </>,
            document.body
          )
        : null}

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        phone={CONTACT.phoneHref}
      />
    </header>
  );
}

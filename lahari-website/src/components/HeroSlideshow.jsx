import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import lalaImg from '../assets/images/lala.jpeg';

// High-quality law-themed cinematic backgrounds
const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80&auto=format',
    alt: 'Grand courtroom interior with wooden benches',
  },
  {
    src: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=1920&q=80&auto=format',
    alt: 'Justice statue symbolizing law and order',
  },
  {
    src: 'https://images.unsplash.com/photo-1615719422122-2b28264c5fc8?w=1920&q=80&auto=format',
    alt: 'Gavel on judge bench in courtroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&auto=format',
    alt: 'Classical law library with leather-bound books',
  },
  {
    src: 'https://images.unsplash.com/photo-1589829085406-972086e49a5d?w=1920&q=80&auto=format',
    alt: 'Legal scales of justice in golden light',
  },
  {
    src: 'https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?w=1920&q=80&auto=format',
    alt: 'Modern law firm office with professional setting',
  },
];

// Each slide gets a unique Ken Burns animation variant
const KEN_BURNS = [
  'hero-kenburns-1', // slow zoom in from center
  'hero-kenburns-2', // slow zoom in from top-left
  'hero-kenburns-3', // slow zoom in from bottom-right
  'hero-kenburns-4', // slow pan left + zoom
  'hero-kenburns-5', // slow pan right + zoom
  'hero-kenburns-6', // slow zoom in from center (alternate)
];

const INTERVAL = 6000; // 6 seconds per slide

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % IMAGES.length);
  }, []);

  // Entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section className={`hero-slideshow${loaded ? ' hero-loaded' : ''}`}>
      {/* Background slides with Ken Burns */}
      {IMAGES.map((img, i) => (
        <div
          key={i}
          className={`hero-slide ${KEN_BURNS[i % KEN_BURNS.length]}${i === current ? ' active' : ''}`}
          aria-hidden={i !== current}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            draggable={false}
          />
        </div>
      ))}

      {/* Multi-layer dark overlay for readability */}
      <div className="hero-overlay" />
      <div className="hero-overlay-vignette" />

      {/* Content */}
      <div className={`hero-content-center${loaded ? ' hero-content-visible' : ''}`}>
        <div className="hero-frame-box">
          <div className="hero-frame-inner">
            {/* Portrait frame */}
            <div className="hero-portrait-frame">
              <div className="hero-portrait-inner">
                <img
                  src={lalaImg}
                  alt="Adv. K. Lahari — Founder, Lahari Legal Associates"
                  className="hero-portrait-img"
                  loading="eager"
                />
              </div>
              <div className="hero-portrait-border" />
              <div className="hero-portrait-shimmer" />
            </div>

            {/* Firm branding */}
            <div className="hero-brand-block">
              <span className="hero-badge">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                </svg>
                Trusted Legal Counsel Since 2026
              </span>
              <h1 className="hero-heading">
                Lahari Legal
                <br />
                <span className="gold-text">Associates</span>
              </h1>
              <div className="hero-gold-divider" />
              <p className="hero-subtitle">
                Strategic, results-driven legal representation across
                civil, criminal, corporate, and family law in Hyderabad.
              </p>
              <div className="hero-actions">
                <Link to="/contact" className="btn-primary hero-btn-primary">
                  Book Consultation
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <Link to="/services" className="btn-outline hero-btn-outline">
                  Our Expertise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators (dot navigation) */}
      <div className="hero-dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' active' : ''}`}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              setCurrent(i);
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">Scroll Down</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}

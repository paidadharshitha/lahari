import { useState, useEffect, useRef, useCallback } from 'react';

// Realistic premium corporate law office photographs
const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format',
    alt: 'Modern conference room with large windows and polished table',
    label: 'Conference Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=1200&q=80&auto=format',
    alt: 'Spacious legal library with leather-bound volumes',
    label: 'Law Library',
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80&auto=format',
    alt: 'Executive office with panoramic city view',
    label: "Partner's Office",
  },
  {
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80&auto=format',
    alt: 'Premium meeting room with professional furnishings',
    label: 'Meeting Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80&auto=format',
    alt: 'Elegant law office interior with bookshelves',
    label: 'Reception Area',
  },
  {
    src: 'https://images.unsplash.com/photo-1595846149735-436aab10c7ae?w=1200&q=80&auto=format',
    alt: 'Contemporary consultation office with warm lighting',
    label: 'Consultation Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80&auto=format',
    alt: 'Classical law library with tall shelves',
    label: 'Legal Archive',
  },
  {
    src: 'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=1200&q=80&auto=format',
    alt: 'Grand law firm reception with modern interiors',
    label: 'Client Lounge',
  },
  {
    src: 'https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?w=1200&q=80&auto=format',
    alt: 'Modern law firm workspace interior',
    label: 'Workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80&auto=format',
    alt: 'Professional boardroom with executive seating',
    label: 'Boardroom',
  },
];

const SCROLL_DURATION = 60; // seconds for one full loop — slow and premium

export default function OfficeGallery() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);
  const speedRef = useRef(0);

  const touchStartRef = useRef(null);
  const touchOffsetRef = useRef(0);
  const isDragging = useRef(false);

  const getSpeed = useCallback(() => {
    if (!trackRef.current) return 1;
    const halfWidth = trackRef.current.scrollWidth / 2;
    return halfWidth / (SCROLL_DURATION * 60);
  }, []);

  useEffect(() => {
    speedRef.current = getSpeed();
  }, [getSpeed]);

  // Infinite scroll animation
  useEffect(() => {
    if (paused || isDragging.current) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }

    const step = () => {
      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;
        offsetRef.current = (offsetRef.current + speedRef.current) % halfWidth;
        trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [paused, getSpeed]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
    touchOffsetRef.current = offsetRef.current;
    isDragging.current = true;
    setPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || touchStartRef.current === null) return;
    const delta = touchStartRef.current - e.touches[0].clientX;
    const halfWidth = trackRef.current ? trackRef.current.scrollWidth / 2 : 1;
    const newOffset = ((touchOffsetRef.current + delta) % halfWidth + halfWidth) % halfWidth;
    offsetRef.current = newOffset;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${newOffset}px)`;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    touchStartRef.current = null;
    setPaused(false);
  };

  const duplicated = [...IMAGES, ...IMAGES];

  return (
    <section className="office-gallery-section">
      <div className="container">
        {/* Header */}
        <div className="office-gallery-header section-head center">
          <span className="eyebrow">Inside Our Office</span>
          <h2 className="section-title">
            A <span className="gold-text">Premium Legal</span> Environment
          </h2>
          <p className="section-subtitle">
            Our offices are designed to reflect the professionalism and confidentiality
            our clients expect — where every consultation takes place in comfort
            and confidence.
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`office-gallery-container${paused ? ' is-paused' : ''}`}
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Glassmorphism frame */}
          <div className="office-gallery-frame">
            {/* Top gradient overlay */}
            <div className="office-gallery-overlay office-gallery-overlay-top" />

            <div className="office-gallery-viewport">
              <div className="office-gallery-track" ref={trackRef}>
                {duplicated.map((img, i) => (
                  <div key={i} className="office-gallery-slide">
                    <div className="office-gallery-slide-inner">
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading={i < 10 ? 'eager' : 'lazy'}
                        draggable={false}
                      />
                      {/* Caption overlay */}
                      <div className="office-gallery-slide-caption">
                        <span>{img.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom gradient overlay */}
            <div className="office-gallery-overlay office-gallery-overlay-bottom" />

            {/* Edge fades */}
            <div className="office-gallery-edge office-gallery-edge-left" />
            <div className="office-gallery-edge office-gallery-edge-right" />
          </div>

          {/* Location badge */}
          <div className="office-gallery-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Lahari Legal Associates — Hyderabad</span>
          </div>
        </div>
      </div>
    </section>
  );
}

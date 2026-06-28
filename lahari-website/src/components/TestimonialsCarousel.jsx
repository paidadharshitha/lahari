import { useState, useEffect, useCallback } from 'react';

const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner, Hyderabad',
    text: 'Lahari Legal Associates resolved a complex property dispute that had been pending for years. Their meticulous preparation and aggressive courtroom strategy resulted in a favourable judgment that exceeded our expectations. Truly exceptional legal team.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Corporate Client, IT Sector',
    text: 'When our company faced a critical intellectual property dispute, Lahari Legal Associates\' corporate team acted swiftly to secure interim relief and ultimately negotiated a settlement that protected our core assets. Their commercial awareness is outstanding.',
    rating: 5,
  },
  {
    name: 'Anand Reddy',
    role: 'Individual Client, Family Matter',
    text: 'Going through a family dispute was emotionally devastating, but the team at Lahari Legal Associates handled everything with extraordinary sensitivity and professionalism. They kept me informed at every stage and achieved an outcome that was fair for all parties involved.',
    rating: 5,
  },
  {
    name: 'Sunita Menon',
    role: 'Startup Founder, Fintech',
    text: 'From incorporation through our first fundraising round, Lahari Legal Associates\' corporate advisory team provided invaluable guidance. Their expertise in startup law and attention to detail in drafting our founders\' agreement and investor documents gave us complete confidence.',
    rating: 5,
  },
];

const INTERVAL = 5000;

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(advance, INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  const goTo = (i) => {
    setCurrent(i);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-carousel">
          <div className="testimonials-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-stars" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, j) => (
                      <i key={j} className="fas fa-star" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="testimonial-text">"{t.text}"</blockquote>
                  <div className="testimonial-author">
                    <span className="testimonial-avatar">
                      <i className="fas fa-user-circle" aria-hidden="true" />
                    </span>
                    <div>
                      <strong className="testimonial-name">{t.name}</strong>
                      <span className="testimonial-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="testimonials-dots">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`testimonial-dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

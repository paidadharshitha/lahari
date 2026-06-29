import { useState, useRef } from "react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import CTASection from "../components/CTASection";

/* ── Data ─────────────────────────────────────────────── */

const POSITIONS = [
  {
    id: 1,
    title: "Associate Advocate — Civil Litigation",
    location: "Hyderabad",
    exp: "2–4 years",
    type: "Full-time",
    tag: "Litigation",
    desc: "Represent clients in high-stakes civil disputes across district and high courts. Strong research and drafting skills required.",
  },
  {
    id: 2,
    title: "Senior Associate — Corporate & M&A",
    location: "Hyderabad",
    exp: "5–8 years",
    type: "Full-time",
    tag: "Corporate",
    desc: "Lead corporate transactions, due diligence, and M&A deal execution for domestic and cross-border mandates.",
  },
  {
    id: 3,
    title: "Cybercrime & Forensics Counsel",
    location: "Hyderabad",
    exp: "3–6 years",
    type: "Full-time",
    tag: "Cyber",
    desc: "Handle digital fraud, data breach investigations, and cyber offence prosecutions with technical forensic acumen.",
  },
  {
    id: 4,
    title: "Junior Associate — Family Law",
    location: "Hyderabad",
    exp: "1–3 years",
    type: "Full-time",
    tag: "Family",
    desc: "Manage contested and mutual divorce proceedings, custody matters, and domestic violence cases with empathy and precision.",
  },
  {
    id: 5,
    title: "Legal Researcher / Paralegal",
    location: "Hyderabad",
    exp: "0–2 years",
    type: "Full-time",
    tag: "Research",
    desc: "Support senior advocates with case law research, brief preparation, and trial documentation across practice areas.",
  },
  {
    id: 6,
    title: "Office Administrator",
    location: "Hyderabad",
    exp: "4+ years",
    type: "Full-time",
    tag: "Operations",
    desc: "Oversee firm operations, client scheduling, billing coordination, and administrative excellence in a fast-paced legal environment.",
  },
];

const WHY_JOIN = [
  {
    icon: "fas fa-gavel",
    title: "High-Profile Cases",
    body: "Work on landmark litigation and high-value corporate mandates that shape legal precedent and business outcomes.",
  },
  {
    icon: "fas fa-user-graduate",
    title: "Mentorship under Adv. Lahari",
    body: "Receive direct guidance from one of Hyderabad's most respected advocates, accelerating your professional growth.",
  },
  {
    icon: "fas fa-chart-line",
    title: "Growth-Oriented Career",
    body: "Clear pathways from associate to partnership with structured reviews, sponsored CLE, and leadership development.",
  },
  {
    icon: "fas fa-landmark",
    title: "Courtroom Experience",
    body: "Gain real trial and appellate exposure early — we believe in learning by doing, not just observing.",
  },
  {
    icon: "fas fa-coins",
    title: "Competitive Compensation",
    body: "Market-leading packages, performance bonuses, health benefits, and partnership equity for top performers.",
  },
  {
    icon: "fas fa-handshake-angle",
    title: "Collaborative Culture",
    body: "A flat, supportive team where your ideas are heard and cross-practice collaboration is the norm, not the exception.",
  },
];

const POSITION_OPTIONS = POSITIONS.map((p) => p.title);

/* ── Application Modal ───────────────────────────────── */

function ApplicationModal({ open, onClose, defaultPosition = "" }) {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
    if (formRef.current) formRef.current.reset();
  };

  return (
    <div className="careers-modal-backdrop" onClick={handleClose} role="presentation">
      <div
        className="careers-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Application form"
      >
        <button className="careers-modal-close" onClick={handleClose} aria-label="Close">
          <i className="fas fa-xmark" />
        </button>

        {submitted ? (
          <div className="careers-modal-success">
            <div className="careers-modal-success-icon">
              <i className="fas fa-check" />
            </div>
            <h3>Application Submitted</h3>
            <p>
              Thank you for your interest in joining Lahari Legal Associates.
              We will review your application and contact you within two weeks.
            </p>
            <button className="btn-primary" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="careers-modal-head">
              <h2>Apply Now</h2>
              <p>Complete the form below and we'll be in touch shortly.</p>
            </div>
            <form ref={formRef} className="careers-form" onSubmit={handleSubmit}>
              <div className="careers-form-grid">
                <div className="form-group">
                  <label htmlFor="career-name">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    id="career-name"
                    type="text"
                    className="form-control"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="career-email">
                    Email <span className="req">*</span>
                  </label>
                  <input
                    id="career-email"
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="career-phone">
                    Phone <span className="req">*</span>
                  </label>
                  <input
                    id="career-phone"
                    type="tel"
                    className="form-control"
                    placeholder="+91 93985 81752"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="career-position">
                    Position <span className="req">*</span>
                  </label>
                  <select id="career-position" className="form-control" required defaultValue={defaultPosition}>
                    <option value="" disabled>
                      Select a position
                    </option>
                    {POSITION_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="career-resume">Resume / CV</label>
                <div className="careers-upload">
                  <input id="career-resume" type="file" accept=".pdf,.doc,.docx" className="careers-upload-input" />
                  <label htmlFor="career-resume" className="careers-upload-label">
                    <i className="fas fa-cloud-arrow-up" />
                    <span>Upload your resume (PDF, DOC, DOCX)</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="career-message">Cover Note</label>
                <textarea
                  id="career-message"
                  className="form-control"
                  placeholder="Tell us why you'd like to join Lahari Legal Associates…"
                  rows={4}
                />
              </div>

              <button type="submit" className="btn-primary btn-block careers-submit-btn">
                Submit Application <i className="fas fa-paper-plane" aria-hidden="true" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ── Careers Page ────────────────────────────────────── */

export default function Careers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const openModal = (position = "") => {
    setSelectedPosition(position);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* ── Hero ───────────────────────────────────────── */}
      <PageHero
        badge="Careers"
        title="Build Your Legal Career with Lahari Legal Associates"
        subtitle="Join a firm where ambition meets mentorship. We are always looking for sharp, ethical, and driven legal professionals to grow with us."
        crumbs={[{ label: "Home", to: "/" }, { label: "Careers" }]}
      />

      {/* ── Hero CTA buttons ──────────────────────────── */}
      <section className="careers-hero-actions">
        <div className="container">
          <SectionReveal>
            <div className="careers-hero-btns">
              <a href="#open-positions" className="btn-outline">
                <i className="fas fa-briefcase" aria-hidden="true" /> View Open Roles
              </a>
              <button className="btn-primary" onClick={() => openModal()}>
                Apply Now <i className="fas fa-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Why Join Us ───────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <SectionReveal className="section-head center">
            <span className="eyebrow">Why Join Us</span>
            <h2 className="section-title">A Place to Grow, Lead, and Belong</h2>
            <p className="section-subtitle">
              At Lahari Legal Associates, your career is an investment we take
              seriously. You will work on meaningful matters alongside senior
              advocates who are invested in your development.
            </p>
          </SectionReveal>
          <div className="careers-why-grid">
            {WHY_JOIN.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 70}>
                <div className="careers-why-card">
                  <div className="careers-why-icon">
                    <i className={item.icon} aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ────────────────────────────── */}
      <section className="section" id="open-positions">
        <div className="container">
          <SectionReveal className="section-head center">
            <span className="eyebrow">Open Positions</span>
            <h2 className="section-title">Current Openings</h2>
            <p className="section-subtitle">
              Don't see a perfect fit? Send us your CV — we welcome strong
              candidates year-round.
            </p>
          </SectionReveal>
          <div className="careers-positions-grid">
            {POSITIONS.map((pos, i) => (
              <SectionReveal key={pos.id} delay={(i % 3) * 80}>
                <div className="careers-position-card">
                  <div className="careers-position-glow" />
                  <div className="careers-position-inner">
                    <div className="careers-position-head">
                      <h3>{pos.title}</h3>
                      <span className="position-tag">{pos.tag}</span>
                    </div>
                    <p className="careers-position-desc">{pos.desc}</p>
                    <div className="position-meta">
                      <span>
                        <i className="fas fa-briefcase" aria-hidden="true" /> {pos.type}
                      </span>
                      <span>
                        <i className="fas fa-location-dot" aria-hidden="true" /> {pos.location}
                      </span>
                      <span>
                        <i className="fas fa-clock" aria-hidden="true" /> {pos.exp}
                      </span>
                    </div>
                    <button
                      className="careers-apply-btn"
                      onClick={() => openModal(pos.title)}
                    >
                      Apply Now <i className="fas fa-arrow-right" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <CTASection
        title="Ready to Join Our Team?"
        text="Send your CV and a short cover note to our careers inbox. We review every application and respond to shortlisted candidates within two weeks."
        primary={{ label: "Apply Now", to: "/careers" }}
        secondary={{ label: "View Our Expertise", to: "/services" }}
      />

      {/* ── Application Modal ─────────────────────────── */}
      <ApplicationModal
        open={modalOpen}
        onClose={closeModal}
        defaultPosition={selectedPosition}
      />
    </>
  );
}

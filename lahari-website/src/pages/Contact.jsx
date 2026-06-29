import { useState } from "react";
import PageHero from "../components/PageHero";
import SectionReveal from "../components/SectionReveal";
import { CONTACT } from "../data/site";
import { SERVICES } from "../data/services";

const INFO = [
  { icon: "fas fa-location-dot", label: "Visit Our Office", value: CONTACT.address, href: CONTACT.mapLink, target: "_blank" },
  { icon: "fas fa-phone", label: "Call Us", value: CONTACT.phone, href: `tel:${CONTACT.phoneHref}` },
  ...(CONTACT.altPhone
    ? [{ icon: "fas fa-phone", label: "Call Us (Alt)", value: CONTACT.altPhone, href: `tel:${CONTACT.altPhoneHref}` }]
    : []),
  { icon: "fas fa-envelope", label: "Email Us", value: CONTACT.email, href: CONTACT.emailHref },
  { icon: "fas fa-clock", label: "Working Hours", value: CONTACT.hours },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend in this build — simulate a successful submission.
    setSent(true);
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <>
      <PageHero
        badge="Contact"
        title="Get in Touch"
        subtitle="Tell us about your legal matter and we'll get back to you within one business day. All enquiries are treated with strict confidentiality."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section">
        <div className="container contact-grid">
          {/* Info */}
          <SectionReveal variant="left">
            <div className="contact-info-card">
              {INFO.map((item) => (
                <div className="contact-info-item" key={item.label}>
                  <span className="contact-info-icon">
                    <i className={item.icon} aria-hidden="true" />
                  </span>
                  <div className="contact-info-text">
                    <h4>{item.label}</h4>
                    {item.href ? (
                      <p>
                        <a
                          href={item.href}
                          {...(item.target ? { target: item.target, rel: "noopener noreferrer" } : {})}
                        >
                          {item.value}
                        </a>
                      </p>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-map-wrapper">
              <iframe
                title="Lahari Legal Associates office location"
                src={CONTACT.mapEmbed}
                width="100%"
                height="300"
                style={{ border: 0, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={CONTACT.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-map-directions"
              >
                <i className="fas fa-directions" aria-hidden="true" /> Get Directions
              </a>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal variant="right">
            {sent && (
              <div className="form-success" role="status">
                <i className="fas fa-circle-check" aria-hidden="true" /> Thank you —
                your message has been received. Our team will respond within one
                business day.
              </div>
            )}

            <h2 className="section-title" style={{ marginBottom: "0.4rem" }}>
              Send Us a Message
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Fields marked <span className="gold-text">*</span> are required.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone <span className="req">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="+91 ..."
                    value={form.phone}
                    onChange={update}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email <span className="req">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Area of Concern</label>
                <select
                  id="service"
                  name="service"
                  className="form-control"
                  value={form.service}
                  onChange={update}
                >
                  <option value="">Select a practice area (optional)</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Other / Not sure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  How Can We Help? <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Briefly describe your situation..."
                  value={form.message}
                  onChange={update}
                  required
                />
              </div>

              <button type="submit" className="btn-primary btn-block">
                Send Message <i className="fas fa-paper-plane" aria-hidden="true" />
              </button>
              <p className="form-note">
                <i className="fas fa-lock" aria-hidden="true" /> Your information is
                kept strictly confidential and is never shared with third parties.
              </p>
            </form>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";

/**
 * Accessible FAQ accordion.
 *
 * Props:
 *  - faqs: array of { q, a }
 *  - defaultOpen: index to expand initially (default 0). Use -1 for none.
 *
 * Smooth height animation uses the grid-template-rows 0fr -> 1fr technique
 * so we never have to measure element height.
 */
export default function FaqAccordion({ faqs, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="faq-list">
      {faqs.map((f, i) => {
        const isOpen = i === open;
        return (
          <div className={`faq-item${isOpen ? " open" : ""}`} key={i}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span>{f.q}</span>
              <i className="fas fa-chevron-down" aria-hidden="true" />
            </button>
            <div className="faq-a-wrap">
              <div className="faq-a-inner">
                <p className="faq-a">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

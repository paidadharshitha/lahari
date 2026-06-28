import { STATS } from "../data/site";
import SectionReveal from "./SectionReveal";

/**
 * Full-width stats band (years experience, cases handled, etc.).
 * Pulls figures from site data so they stay consistent across pages.
 */
export default function StatsSection({ items = STATS }) {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {items.map((stat, i) => (
            <SectionReveal
              as="div"
              key={stat.label}
              className="stat-item"
              delay={i * 90}
            >
              <span className="stat-number">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <div className="not-found-code">404</div>
        <h1>This Page Has Adjourned</h1>
        <p>
          The page you're looking for doesn't exist or may have been moved. Let's
          get you back on track.
        </p>
        <div className="cta-actions" style={{ justifyContent: "center" }}>
          <Link to="/" className="btn-primary">
            <i className="fas fa-house" aria-hidden="true" /> Back Home
          </Link>
          <Link to="/services" className="btn-outline">
            Browse Services
          </Link>
        </div>
      </div>
    </section>
  );
}

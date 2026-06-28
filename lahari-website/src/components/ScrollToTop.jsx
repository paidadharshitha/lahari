import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets window scroll to top whenever the route path changes.
 * Place once inside <BrowserRouter>.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return null;
}

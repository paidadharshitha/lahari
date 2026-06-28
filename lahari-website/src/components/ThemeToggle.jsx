import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`theme-toggle ${className}`.trim()}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="theme-toggle-track">
        <i className="fas fa-sun theme-icon sun" aria-hidden="true" />
        <i className="fas fa-moon theme-icon moon" aria-hidden="true" />
        <span className="theme-toggle-thumb" />
      </span>
    </button>
  );
}

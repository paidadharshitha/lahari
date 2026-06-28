import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "ll-theme";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* localStorage unavailable — fall through to default */
  }
  // Default to light mode per spec.
  return "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  // Reflect the active theme on <html data-theme="..."> + persist to localStorage.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore write failures (private mode, etc.) */
    }
  }, [theme]);

  // Smoothly transition colors only after first paint to avoid an initial flash.
  useEffect(() => {
    const t = window.setTimeout(() => {
      document.documentElement.classList.add("theme-transitioning");
    }, 300);
    return () => window.clearTimeout(t);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () =>
        setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

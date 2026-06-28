import { useEffect, useRef, useState } from "react";

/**
 * Wraps children in a fade/slide-in reveal animation triggered when the
 * element scrolls into view. Honors prefers-reduced-motion via CSS.
 *
 * Props:
 *  - as: element/component tag to render (default "div")
 *  - variant: "" | "left" | "right"  (maps to .reveal / .reveal-left / .reveal-right)
 *  - delay: ms stagger delay applied via inline style
 *  - className, children, ...rest
 */
export default function SectionReveal({
  as: Tag = "div",
  variant = "",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback: if IntersectionObserver isn't available, just show content.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "left" ? "reveal-left" : variant === "right" ? "reveal-right" : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

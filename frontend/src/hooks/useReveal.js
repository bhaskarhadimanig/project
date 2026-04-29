import { useEffect, useRef } from "react";

/**
 * Adds `is-visible` class to the element when it enters the viewport.
 * Pair with .sc-reveal or .sc-stagger in CSS.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: options.threshold ?? 0.15,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold]);

  return ref;
}

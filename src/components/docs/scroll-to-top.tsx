"use client";

import { useEffect, useState } from "react";

/**
 * A floating "scroll to top" button that appears
 * when the user has scrolled down past a threshold.
 */
export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-2.5 rounded-full bg-fd-card border border-fd-border shadow-lg hover:shadow-xl hover:border-fd-primary/40 text-fd-muted-foreground hover:text-fd-primary transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
      aria-label="Scroll to top"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

"use client";

import { useEffect, useRef } from "react";

export default function ScrollToTop() {
  const hasScrolled = useRef(false);

  useEffect(() => {
    if (hasScrolled.current) return;
    hasScrolled.current = true;

    // Disable browser scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Immediate
    window.scrollTo(0, 0);

    // After paint
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    // After layout shift (CSS/fonts loading)
    const timers = [
      setTimeout(() => window.scrollTo(0, 0), 0),
      setTimeout(() => window.scrollTo(0, 0), 50),
      setTimeout(() => window.scrollTo(0, 0), 150),
      setTimeout(() => window.scrollTo(0, 0), 300),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return null;
}

"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const hasRun = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // On initial load, always start at top
    if (!hasRun.current) {
      hasRun.current = true;

      // If URL has a hash (e.g. #reserve from a previous visit), remove it
      if (window.location.hash) {
        history.replaceState(null, "", pathname);
      }

      // Force scroll to top at multiple timings to beat any browser quirks
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
      setTimeout(() => window.scrollTo(0, 0), 0);
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  }, [pathname]);

  return null;
}

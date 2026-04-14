"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Force scroll to top on mount — overrides browser scroll restoration
    window.scrollTo(0, 0);

    // Also disable automatic scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}

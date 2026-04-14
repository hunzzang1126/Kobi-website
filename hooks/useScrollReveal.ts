"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * Dynamic scroll-triggered reveal animations.
 * Observes the element AND all children with animation classes.
 * Supports: reveal, reveal-left, reveal-right, reveal-scale, fade-up, fade-in
 */
export function useScrollReveal(
  options: {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
  } = {}
) {
  const { threshold = 0.1, rootMargin = "0px 0px -80px 0px", once = true } = options;
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          entry.target.classList.remove("is-visible");
        }
      });
    },
    [once]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion — show everything immediately
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animClasses = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .fade-up, .fade-in";

    if (prefersReducedMotion) {
      element.classList.add("is-visible");
      element.querySelectorAll(animClasses).forEach((child) => {
        child.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold,
      rootMargin,
    });

    // Observe the container
    observer.observe(element);

    // Observe all children with animation classes
    element.querySelectorAll(animClasses).forEach((child) => {
      observer.observe(child);
    });

    return () => observer.disconnect();
  }, [threshold, rootMargin, handleIntersect]);

  return ref;
}

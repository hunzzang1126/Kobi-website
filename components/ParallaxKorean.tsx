"use client";

import { useEffect, useRef } from "react";
import styles from "./parallax-korean.module.css";

interface ParallaxKoreanProps {
  characters: string[];
  /** parallax speed multiplier (0-1). lower = slower */
  speed?: number;
}

export default function ParallaxKorean({
  characters,
  speed = 0.15,
}: ParallaxKoreanProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId: number;
    const elements = container.querySelectorAll<HTMLElement>(`.${styles.char}`);

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = (centerY - viewportCenter) * speed;

        elements.forEach((el, i) => {
          // Each character moves at slightly different rate for depth
          const multiplier = 1 + (i * 0.15);
          el.style.transform = `translateY(${offset * multiplier}px)`;
        });
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return (
    <div className={styles.container} ref={containerRef} aria-hidden="true">
      {characters.map((char, i) => (
        <span
          key={i}
          className={styles.char}
          data-index={i}
          style={{
            left: `${15 + i * (70 / characters.length)}%`,
            top: `${20 + (i % 2 === 0 ? 0 : 30)}%`,
            fontSize: `clamp(${4 + i}rem, ${10 + i * 2}vw, ${8 + i * 2}rem)`,
            opacity: 0.03 + (i * 0.008),
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ink-divider.module.css";

interface InkDividerProps {
  width?: number;
  className?: string;
}

export default function InkDivider({ width = 200, className = "" }: InkDividerProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(svg);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.container} ${className}`} aria-hidden="true">
      <svg
        ref={svgRef}
        className={`${styles.svg} ${isVisible ? styles.animate : ""}`}
        viewBox="0 0 200 12"
        width={width}
        height={(width / 200) * 12}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Main brush stroke */}
        <path
          d="M0 6 C30 3, 50 8, 80 5 C110 2, 130 9, 160 4 C175 2.5, 190 6, 200 5"
          className={styles.stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Thin trailing brush hair */}
        <path
          d="M10 8 C50 10, 90 4, 130 9 C160 11, 180 7, 195 8"
          className={styles.strokeThin}
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

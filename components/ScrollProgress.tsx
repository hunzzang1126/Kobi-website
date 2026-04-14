"use client";

import { useEffect, useState } from "react";
import styles from "./scroll-progress.module.css";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container} aria-hidden="true">
      <div
        className={styles.line}
        style={{ height: `${progress}%` }}
      />
      {/* Glowing dot at the end of the line */}
      <div
        className={styles.dot}
        style={{ top: `${progress}%` }}
      />
    </div>
  );
}

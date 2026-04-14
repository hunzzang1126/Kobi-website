"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";
import styles from "./gallery-section.module.css";
import InkDivider from "./InkDivider";
import { GALLERY_ITEMS } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function GallerySection() {
  const sectionRef = useScrollReveal({ threshold: 0.05 });
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLanguage();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    const shine = card.querySelector(`.${styles.shine}`) as HTMLElement | null;
    if (shine) {
      shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(212, 168, 85, 0.12) 0%, transparent 60%)`;
    }
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    card.style.transform = "perspective(600px) rotateX(0) rotateY(0) translateY(0)";
    const shine = card.querySelector(`.${styles.shine}`) as HTMLElement | null;
    if (shine) {
      shine.style.background = "transparent";
    }
  }, []);

  return (
    <section id="gallery" className={styles.gallerySection} ref={sectionRef}>
      <div className={styles.header}>
        <InkDivider width={120} />
        <span className={`${styles.label} reveal`}>{t("gallery.label")}</span>
        <h2 className={`${styles.heading} reveal`}>{t("gallery.heading")}</h2>
      </div>

      <div className={`${styles.scrollContainer} reveal-scale`}>
        <div className={styles.track}>
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => { cardsRef.current[index] = el; }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div
                className={styles.imagePlaceholder}
                style={{ aspectRatio: item.aspectRatio }}
                role="img"
                aria-label={item.alt}
              >
                <div className={styles.imageGradient} />
                <div className={styles.imageNoise} aria-hidden="true" />
                <div className={styles.shine} aria-hidden="true" />
                <div className={styles.hoverOverlay}>
                  <span className={styles.hoverText}>{item.alt}</span>
                </div>
              </div>
              <span className={styles.cardIndex} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={`${styles.scrollHint} reveal`} aria-hidden="true">
        <span className={styles.hintLine} />
        <span className={styles.hintText}>{t("gallery.scrollHint")}</span>
        <span className={styles.hintLine} />
      </div>

      <div className={styles.viewMoreWrap}>
        <Link href="/gallery" className={styles.viewMoreLink}>
          {t("gallery.viewMore")} →
        </Link>
      </div>
    </section>
  );
}

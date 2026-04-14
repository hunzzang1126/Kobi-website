"use client";

import styles from "./reservation-section.module.css";
import InkDivider from "./InkDivider";
import ParallaxKorean from "./ParallaxKorean";
import { LINKS } from "@/content/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ReservationSection() {
  const sectionRef = useScrollReveal({ threshold: 0.15 });

  return (
    <section id="reserve" className={styles.reservation} ref={sectionRef}>
      {/* Parallax background */}
      <ParallaxKorean characters={["席", "宴"]} speed={0.08} />

      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.content}>
        <InkDivider width={180} />

        <span className={`${styles.label} reveal`}>Reservations</span>

        <h2 className={`${styles.heading} reveal`}>
          Your Table Awaits
        </h2>

        <span className={`${styles.koreanText} reveal`} aria-hidden="true">
          자리를 예약하세요
        </span>

        <p className={`${styles.subtext} reveal`}>
          Join us for an evening of fire, flavor, and craft.
        </p>

        {/* Breathing glow CTA */}
        <div className={`${styles.cta} reveal`}>
          <a
            href={LINKS.reservation}
            className={styles.reserveButton}
            id="reserve-main-btn"
            aria-label="Reserve a table at KOBI"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      <div className={styles.borderTop} aria-hidden="true" />
      <div className={styles.borderBottom} aria-hidden="true" />
    </section>
  );
}

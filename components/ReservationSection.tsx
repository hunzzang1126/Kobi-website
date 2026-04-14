"use client";

import styles from "./reservation-section.module.css";
import InkDivider from "./InkDivider";
import ParallaxKorean from "./ParallaxKorean";
import { LINKS } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ReservationSection() {
  const sectionRef = useScrollReveal({ threshold: 0.15 });
  const { t } = useLanguage();

  return (
    <section id="reserve" className={styles.reservation} ref={sectionRef}>
      <ParallaxKorean characters={["席", "宴"]} speed={0.08} />
      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.content}>
        <InkDivider width={180} />
        <span className={`${styles.label} reveal`}>{t("reserve.label")}</span>
        <h2 className={`${styles.heading} reveal`}>{t("reserve.heading")}</h2>
        <span className={`${styles.koreanText} reveal`} aria-hidden="true">
          {t("reserve.korean")}
        </span>
        <p className={`${styles.subtext} reveal`}>{t("reserve.subtext")}</p>
        <div className={`${styles.cta} reveal`}>
          <a
            href={LINKS.reservation}
            className={styles.reserveButton}
            id="reserve-main-btn"
            aria-label="Reserve a table at KOBI"
          >
            {t("reserve.button")}
          </a>
        </div>
      </div>

      <div className={styles.borderTop} aria-hidden="true" />
      <div className={styles.borderBottom} aria-hidden="true" />
    </section>
  );
}

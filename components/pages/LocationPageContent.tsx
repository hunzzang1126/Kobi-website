"use client";

import Link from "next/link";
import styles from "./detail-page.module.css";
import InkDivider from "@/components/InkDivider";
import ParallaxKorean from "@/components/ParallaxKorean";
import { RESTAURANT } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LocationPageContent() {
  const { t } = useLanguage();
  const infoRef = useScrollReveal({ threshold: 0.1 });
  const directionsRef = useScrollReveal({ threshold: 0.1 });
  const privateRef = useScrollReveal({ threshold: 0.1 });

  return (
    <div className={styles.page}>
      {/* Hero banner */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <InkDivider width={160} />
          <span className={styles.label}>{t("locationPage.label")}</span>
          <h1 className={styles.heroTitle}>{t("locationPage.heading")}</h1>
        </div>
      </section>

      {/* Info Section */}
      <section className={styles.section} ref={infoRef} style={{ position: "relative", overflow: "hidden" }}>
        <ParallaxKorean characters={["席"]} speed={0.08} />
        <div className={styles.container}>
          <div className={styles.infoGrid}>
            {/* Address */}
            <div className={`${styles.infoBlock} reveal`}>
              <span className={styles.label}>{t("location.address")}</span>
              <h3 className={styles.infoHeading}>{RESTAURANT.address}</h3>
              <p className={styles.body}>{RESTAURANT.city}</p>
              <a
                href={RESTAURANT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.goldLink}
              >
                {t("location.openMaps")} →
              </a>
            </div>

            {/* Hours */}
            <div className={`${styles.infoBlock} reveal`} style={{ transitionDelay: "0.12s" }}>
              <span className={styles.label}>{t("location.hours")}</span>
              <div className={styles.hoursList}>
                {RESTAURANT.hours.map((h, i) => (
                  <div key={i} className={styles.hoursRow}>
                    <span>{h.days}</span>
                    <span className={styles.hoursDots} />
                    <span className={styles.hoursTime}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className={`${styles.infoBlock} reveal`} style={{ transitionDelay: "0.24s" }}>
              <span className={styles.label}>{t("location.contact")}</span>
              <a href={RESTAURANT.phoneRaw} className={styles.contactLink}>{RESTAURANT.phone}</a>
              <a href={`mailto:${RESTAURANT.email}`} className={styles.contactLink}>{RESTAURANT.email}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(RESTAURANT.address + ", " + RESTAURANT.city)}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KOBI Location on Google Maps"
          />
        </div>
      </section>

      {/* Directions */}
      <section className={styles.section} ref={directionsRef}>
        <div className={styles.container}>
          <InkDivider width={120} />
          <span className={`${styles.label} reveal`}>{t("locationPage.directions.label")}</span>
          <h2 className={`${styles.heading} reveal`}>{t("locationPage.directions.heading")}</h2>
          <div className={`${styles.directionsList} stagger-children`}>
            <p className={`${styles.body} reveal`}>🚇 {t("locationPage.directions.subway")}</p>
            <p className={`${styles.body} reveal`}>🚋 {t("locationPage.directions.streetcar")}</p>
            <p className={`${styles.body} reveal`}>🅿️ {t("locationPage.directions.parking")}</p>
          </div>
        </div>
      </section>

      {/* Private Dining */}
      <section className={styles.section} ref={privateRef} style={{ position: "relative", overflow: "hidden" }}>
        <ParallaxKorean characters={["宴"]} speed={0.06} />
        <div className={styles.container}>
          <div className={styles.twoColumn}>
            <div className={`${styles.columnImage} reveal-left`}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.imageGradient} />
              </div>
            </div>
            <div className={`${styles.columnText} stagger-children`}>
              <InkDivider width={100} />
              <span className={`${styles.label} reveal`}>{t("locationPage.private.label")}</span>
              <h2 className={`${styles.heading} reveal`}>{t("locationPage.private.heading")}</h2>
              <p className={`${styles.body} reveal`}>{t("locationPage.private.p1")}</p>
              <p className={`${styles.body} reveal`}>{t("locationPage.private.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className={styles.signatureSection}>
        <Link href="/" className={styles.backLink}>
          ← {t("locationPage.backHome")}
        </Link>
      </section>
    </div>
  );
}

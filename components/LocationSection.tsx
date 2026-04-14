"use client";

import Link from "next/link";
import styles from "./location-section.module.css";
import SectionWrapper from "./ui/SectionWrapper";
import { RESTAURANT, LINKS } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LocationSection() {
  const sectionRef = useScrollReveal();
  const { t } = useLanguage();

  return (
    <SectionWrapper id="location">
      <div className={styles.location} ref={sectionRef}>
        <div className={`${styles.infoColumn} stagger-children`}>
          <span className={`${styles.label} fade-up`}>{t("location.label")}</span>
          <h2 className={`${styles.heading} fade-up`}>{t("location.heading")}</h2>

          <div className={`${styles.infoBlock} fade-up`}>
            <h3 className={styles.infoTitle}>{t("location.address")}</h3>
            <a
              href={LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.infoLink}
            >
              {RESTAURANT.address}
              <br />
              {RESTAURANT.city}
            </a>
          </div>

          <div className={`${styles.infoBlock} fade-up`}>
            <h3 className={styles.infoTitle}>{t("location.hours")}</h3>
            <ul className={styles.hoursList}>
              {RESTAURANT.hours.map((h, i) => (
                <li key={i} className={styles.hoursItem}>
                  <span className={styles.hoursDay}>{h.days}</span>
                  <span className={styles.hoursTime}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.infoBlock} fade-up`}>
            <h3 className={styles.infoTitle}>{t("location.contact")}</h3>
            <a href={RESTAURANT.phoneRaw} className={styles.infoLink}>
              {RESTAURANT.phone}
            </a>
            <a href={`mailto:${RESTAURANT.email}`} className={styles.infoLink}>
              {RESTAURANT.email}
            </a>
          </div>

          <Link href="/location" className={`${styles.viewMore} fade-up`}>
            {t("location.viewMore")} →
          </Link>
        </div>

        <div className={`${styles.mapColumn} fade-up`}>
          <div className={styles.mapPlaceholder}>
            <iframe
              src="https://www.google.com/maps?q=100+Steeles+Ave+W,+Thornhill,+ON+L4J+2L1&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KOBI Location"
            />
            <a
              href={LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
              aria-label="Open in Google Maps"
            >
              {t("location.openMaps")} →
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

"use client";

import styles from "./location-section.module.css";
import SectionWrapper from "./ui/SectionWrapper";
import { RESTAURANT, LINKS } from "@/content/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LocationSection() {
  const sectionRef = useScrollReveal();

  return (
    <SectionWrapper id="location">
      <div className={styles.location} ref={sectionRef}>
        {/* Info Column */}
        <div className={`${styles.infoColumn} stagger-children`}>
          <span className={`${styles.label} fade-up`}>Find Us</span>
          <h2 className={`${styles.heading} fade-up`}>Visit Kobi</h2>

          {/* Address */}
          <div className={`${styles.infoBlock} fade-up`}>
            <h3 className={styles.infoTitle}>Address</h3>
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

          {/* Hours */}
          <div className={`${styles.infoBlock} fade-up`}>
            <h3 className={styles.infoTitle}>Hours</h3>
            <ul className={styles.hoursList}>
              {RESTAURANT.hours.map((h, i) => (
                <li key={i} className={styles.hoursItem}>
                  <span className={styles.hoursDay}>{h.days}</span>
                  <span className={styles.hoursTime}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`${styles.infoBlock} fade-up`}>
            <h3 className={styles.infoTitle}>Contact</h3>
            <a href={RESTAURANT.phoneRaw} className={styles.infoLink}>
              {RESTAURANT.phone}
            </a>
            <a href={`mailto:${RESTAURANT.email}`} className={styles.infoLink}>
              {RESTAURANT.email}
            </a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className={`${styles.mapColumn} fade-up`}>
          <div className={styles.mapPlaceholder}>
            <div className={styles.mapGrid} aria-hidden="true">
              {/* Decorative grid lines to suggest a map */}
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={`h-${i}`} className={styles.mapLineH} style={{ top: `${(i + 1) * 11}%` }} />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={`v-${i}`} className={styles.mapLineV} style={{ left: `${(i + 1) * 11}%` }} />
              ))}
            </div>
            {/* Pin */}
            <div className={styles.mapPin} aria-hidden="true">
              <div className={styles.mapPinDot} />
              <div className={styles.mapPinRing} />
            </div>
            <a
              href={LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
              aria-label="Open in Google Maps"
            >
              Open in Maps →
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

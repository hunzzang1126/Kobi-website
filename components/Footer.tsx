"use client";

import styles from "./footer.module.css";
import { RESTAURANT, LINKS } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.content}>
          <div className={styles.links}>
            <a
              href={LINKS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {RESTAURANT.address}, {RESTAURANT.city}
            </a>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="KOBI on Instagram"
            >
              {t("footer.instagram")}
            </a>
            <a href={RESTAURANT.phoneRaw} className={styles.link}>
              {RESTAURANT.phone}
            </a>
            <a href={`mailto:${RESTAURANT.email}`} className={styles.link}>
              {RESTAURANT.email}
            </a>
          </div>

          <p className={styles.tagline}>
            {t("footer.tagline")}
          </p>

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Kobi Toronto. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

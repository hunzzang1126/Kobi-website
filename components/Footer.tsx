import styles from "./footer.module.css";
import { RESTAURANT, LINKS } from "@/content/siteData";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Divider */}
        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.content}>
          {/* Links */}
          <div className={styles.links}>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label="KOBI on Instagram"
            >
              Instagram
            </a>
            <a href={RESTAURANT.phoneRaw} className={styles.link}>
              {RESTAURANT.phone}
            </a>
            <a href={`mailto:${RESTAURANT.email}`} className={styles.link}>
              {RESTAURANT.email}
            </a>
          </div>

          {/* Personality line */}
          <p className={styles.tagline}>
            Charcoal & craft since {RESTAURANT.established}.
          </p>

          {/* Copyright */}
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Kobi Toronto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

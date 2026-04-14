"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./detail-page.module.css";
import InkDivider from "@/components/InkDivider";
import { GALLERY_ITEMS } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function GalleryPageContent() {
  const { t } = useLanguage();
  const sectionRef = useScrollReveal({ threshold: 0.05 });

  return (
    <div className={styles.page}>
      {/* Hero banner */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <InkDivider width={160} />
          <span className={styles.label}>{t("galleryPage.label")}</span>
          <h1 className={styles.heroTitle}>{t("galleryPage.heading")}</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.section} ref={sectionRef}>
        <div className={styles.container}>
          <div className={styles.galleryGrid}>
            {GALLERY_ITEMS.map((item, index) => (
              <div
                key={index}
                className={`${styles.galleryCard} reveal-scale`}
                style={{
                  transitionDelay: `${index * 0.08}s`,
                  aspectRatio: item.aspectRatio,
                }}
              >
                <div className={styles.galleryCardInner}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.galleryPageImage}
                    loading="lazy"
                  />
                  <div className={styles.galleryOverlay}>
                    <span className={styles.galleryCaption}>{item.alt}</span>
                  </div>
                </div>
                <span className={styles.galleryIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className={styles.signatureSection}>
        <Link href="/" className={styles.backLink}>
          ← {t("galleryPage.backHome")}
        </Link>
      </section>
    </div>
  );
}

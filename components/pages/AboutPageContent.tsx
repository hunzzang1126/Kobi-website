"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./detail-page.module.css";
import InkDivider from "@/components/InkDivider";
import ParallaxKorean from "@/components/ParallaxKorean";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutPageContent() {
  const { t } = useLanguage();
  const section1Ref = useScrollReveal({ threshold: 0.1 });
  const section2Ref = useScrollReveal({ threshold: 0.1 });
  const section3Ref = useScrollReveal({ threshold: 0.1 });

  return (
    <div className={styles.page}>
      {/* Hero banner */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <InkDivider width={160} />
          <span className={styles.label}>{t("aboutPage.label")}</span>
          <h1 className={styles.heroTitle}>{t("aboutPage.heading")}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className={styles.section} ref={section1Ref} style={{ position: "relative", overflow: "hidden" }}>
        <ParallaxKorean characters={["불", "炭"]} speed={0.1} />
        <div className={styles.container}>
          <p className={`${styles.introText} reveal`}>{t("aboutPage.intro")}</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className={styles.section} ref={section2Ref} style={{ position: "relative", overflow: "hidden" }}>
        <div className={styles.container}>
          <div className={styles.twoColumn}>
            <div className={`${styles.columnImage} reveal-left`}>
              <Image
                src="/images/sotbap-eel.jpg"
                alt="KOBI eel sotbap with banchan"
                width={1200}
                height={800}
                className={styles.detailImage}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.frameCornerTR} aria-hidden="true" />
              <div className={styles.frameCornerBL} aria-hidden="true" />
            </div>
            <div className={`${styles.columnText} stagger-children`}>
              <InkDivider width={120} />
              <span className={`${styles.label} reveal`}>{t("aboutPage.philosophy.label")}</span>
              <h2 className={`${styles.heading} reveal`}>{t("aboutPage.philosophy.heading")}</h2>
              <p className={`${styles.body} reveal`}>{t("aboutPage.philosophy.p1")}</p>
              <p className={`${styles.body} reveal`}>{t("aboutPage.philosophy.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Craft */}
      <section className={styles.section} ref={section3Ref} style={{ position: "relative", overflow: "hidden" }}>
        <ParallaxKorean characters={["匠"]} speed={0.08} />
        <div className={styles.container}>
          <div className={`${styles.twoColumn} ${styles.reversed}`}>
            <div className={`${styles.columnImage} reveal-right`}>
              <Image
                src="/images/grill-fire.jpg"
                alt="Wagyu grilling over open flame"
                width={1400}
                height={933}
                className={styles.detailImage}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={styles.frameCornerTR} aria-hidden="true" />
              <div className={styles.frameCornerBL} aria-hidden="true" />
            </div>
            <div className={`${styles.columnText} stagger-children`}>
              <InkDivider width={120} />
              <span className={`${styles.label} reveal`}>{t("aboutPage.craft.label")}</span>
              <h2 className={`${styles.heading} reveal`}>{t("aboutPage.craft.heading")}</h2>
              <p className={`${styles.body} reveal`}>{t("aboutPage.craft.p1")}</p>
              <p className={`${styles.body} reveal`}>{t("aboutPage.craft.p2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className={styles.signatureSection}>
        <Image
          src="/images/kobi-logo.png"
          alt=""
          width={50}
          height={50}
          style={{ objectFit: "contain", opacity: 0.4 }}
          aria-hidden="true"
        />
        <Link href="/" className={styles.backLink}>
          ← {t("aboutPage.backHome")}
        </Link>
      </section>
    </div>
  );
}

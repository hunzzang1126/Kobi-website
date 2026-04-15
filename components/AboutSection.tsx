"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./about-section.module.css";
import SectionWrapper from "./ui/SectionWrapper";
import InkDivider from "./InkDivider";
import ParallaxKorean from "./ParallaxKorean";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <SectionWrapper id="about" className={styles.section}>
      <ParallaxKorean characters={["불", "炭"]} speed={0.12} />

      <div className={styles.about} ref={sectionRef}>
        <div className={`${styles.imageColumn} reveal-left`}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/sotbap-steak.jpg"
              alt="KOBI signature steak sotbap set"
              width={1200}
              height={800}
              className={styles.aboutImage}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <div className={styles.frameCornerTR} aria-hidden="true" />
            <div className={styles.frameCornerBL} aria-hidden="true" />
          </div>
          <div className={styles.verticalKorean} aria-hidden="true">
            {t("about.verticalKorean")}
          </div>
        </div>

        <div className={`${styles.textColumn} stagger-children`}>
          <InkDivider width={160} />
          <span className={`${styles.label} reveal`}>{t("about.label")}</span>
          <h2 className={`${styles.heading} reveal`}>{t("about.heading")}</h2>
          <p className={`${styles.paragraph} reveal`}>{t("about.p1")}</p>
          <p className={`${styles.paragraph} reveal`}>{t("about.p2")}</p>

          <Link href="/about" className={`${styles.viewMore} reveal`}>
            {t("about.viewMore")} →
          </Link>

          <div className={`${styles.signature} reveal`}>
            <Image
              src="/images/kobi-logo.png"
              alt=""
              width={40}
              height={40}
              style={{ objectFit: "contain", opacity: 0.5 }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

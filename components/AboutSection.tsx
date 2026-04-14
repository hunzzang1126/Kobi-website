"use client";

import Image from "next/image";
import styles from "./about-section.module.css";
import SectionWrapper from "./ui/SectionWrapper";
import InkDivider from "./InkDivider";
import ParallaxKorean from "./ParallaxKorean";
import { ABOUT } from "@/content/siteData";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutSection() {
  const sectionRef = useScrollReveal({ threshold: 0.1 });

  return (
    <SectionWrapper id="about" className={styles.section}>
      {/* Parallax background hangul */}
      <ParallaxKorean characters={["불", "炭"]} speed={0.12} />

      <div className={styles.about} ref={sectionRef}>
        {/* Left side — dramatic image */}
        <div className={`${styles.imageColumn} reveal-left`}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder} aria-label="Atmospheric interior photo">
              <div className={styles.imageGradient} />
            </div>
            {/* Decorative frame — Korean-inspired */}
            <div className={styles.frameCornerTR} aria-hidden="true" />
            <div className={styles.frameCornerBL} aria-hidden="true" />
          </div>
          {/* Vertical Korean text */}
          <div className={styles.verticalKorean} aria-hidden="true">
            정성을 담다
          </div>
        </div>

        {/* Right side — text content */}
        <div className={`${styles.textColumn} stagger-children`}>
          {/* Ink brush divider */}
          <InkDivider width={160} />

          <span className={`${styles.label} reveal`}>Our Philosophy</span>
          <h2 className={`${styles.heading} reveal`}>{ABOUT.heading}</h2>

          {ABOUT.paragraphs.map((text, i) => (
            <p key={i} className={`${styles.paragraph} reveal`}>
              {text}
            </p>
          ))}

          {/* Signature mark */}
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

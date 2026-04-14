"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./hero-section.module.css";
import Button from "./ui/Button";
import { RESTAURANT, LINKS } from "@/content/siteData";

export default function HeroSection() {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const curtainTimer = setTimeout(() => setCurtainOpen(true), 400);
    const contentTimer = setTimeout(() => setContentVisible(true), 1200);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero" aria-label="Welcome to KOBI">
      {/* Cinematic Curtain */}
      <div className={`${styles.curtainLeft} ${curtainOpen ? styles.curtainOpenLeft : ""}`} aria-hidden="true" />
      <div className={`${styles.curtainRight} ${curtainOpen ? styles.curtainOpenRight : ""}`} aria-hidden="true" />

      {/* Background VIDEO */}
      <div className={`${styles.backgroundWrapper} ${curtainOpen ? styles.bgVisible : ""}`}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/hero-bg.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Strong dark overlays for text readability */}
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.vignetteOverlay} aria-hidden="true" />
      </div>

      {/* Vertical Korean text — decorative */}
      <div className={`${styles.verticalTextLeft} ${contentVisible ? styles.showVertical : ""}`} aria-hidden="true">
        숯불 위의 예술
      </div>
      <div className={`${styles.verticalTextRight} ${contentVisible ? styles.showVertical : ""}`} aria-hidden="true">
        불꽃과 정성
      </div>

      {/* Content */}
      <div className={`${styles.content} ${contentVisible ? styles.contentVisible : ""}`}>
        {/* Logo icon */}
        <div className={styles.logoIcon}>
          <Image
            src="/images/kobi-logo.png"
            alt="KOBI Logo"
            width={80}
            height={80}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Main title — each letter animated */}
        <h1 className={styles.title}>
          <span className={styles.titleLetter} style={{ animationDelay: "0s" }}>K</span>
          <span className={styles.titleLetter} style={{ animationDelay: "0.08s" }}>O</span>
          <span className={styles.titleLetter} style={{ animationDelay: "0.16s" }}>B</span>
          <span className={styles.titleLetter} style={{ animationDelay: "0.24s" }}>I</span>
        </h1>

        {/* Korean divider */}
        <div className={styles.divider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerDiamond} />
          <span className={styles.dividerLine} />
        </div>

        <p className={styles.tagline}>{RESTAURANT.tagline}</p>

        <p className={styles.subtitle}>Premium Korean BBQ · Toronto</p>

        <div className={styles.cta}>
          <Button
            href={LINKS.reservation}
            variant="outline"
            size="large"
            id="hero-reserve-btn"
            ariaLabel="Reserve a table at KOBI"
          >
            Reserve a Table
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`${styles.scrollIndicator} ${contentVisible ? styles.showScroll : ""}`} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </div>

      {/* Bottom gradient fade to page bg */}
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}

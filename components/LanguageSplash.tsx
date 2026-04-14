"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage, type Locale } from "@/context/LanguageContext";
import styles from "./language-splash.module.css";

export default function LanguageSplash() {
  const { hasChosen, setLocale } = useLanguage();
  const [isExiting, setIsExiting] = useState(false);

  if (hasChosen) return null;

  const handleSelect = (locale: Locale) => {
    setIsExiting(true);
    setTimeout(() => {
      setLocale(locale);
    }, 800); // Wait for exit animation
  };

  return (
    <div className={`${styles.splash} ${isExiting ? styles.exiting : ""}`}>
      {/* Background */}
      <div className={styles.background} aria-hidden="true">
        <div className={styles.gradient} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/images/kobi-logo.png"
            alt="KOBI"
            width={70}
            height={70}
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        <h1 className={styles.title}>KOBI</h1>

        {/* Divider */}
        <div className={styles.divider} aria-hidden="true">
          <span className={styles.divLine} />
          <span className={styles.divDiamond} />
          <span className={styles.divLine} />
        </div>

        {/* Language buttons */}
        <div className={styles.buttons}>
          <button
            className={styles.langButton}
            onClick={() => handleSelect("en")}
            aria-label="Continue in English"
          >
            <span className={styles.langLabel}>English</span>
          </button>

          <span className={styles.separator} aria-hidden="true" />

          <button
            className={styles.langButton}
            onClick={() => handleSelect("ko")}
            aria-label="한국어로 계속"
          >
            <span className={styles.langLabel}>한국어</span>
          </button>
        </div>

        <p className={styles.subtitle}>Premium Korean BBQ · Toronto</p>
      </div>
    </div>
  );
}

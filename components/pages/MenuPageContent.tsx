"use client";

import Link from "next/link";
import styles from "./detail-page.module.css";
import menuStyles from "@/components/menu-section.module.css";
import InkDivider from "@/components/InkDivider";
import ParallaxKorean from "@/components/ParallaxKorean";
import { MENU_CATEGORIES, RESTAURANT } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MenuPageContent() {
  const { locale, t } = useLanguage();
  const menuRef = useScrollReveal({ threshold: 0.02 });
  const isKo = locale === "ko";

  return (
    <div className={styles.page}>
      {/* Hero banner */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <InkDivider width={160} />
          <span className={styles.label}>{t("menuPage.label")}</span>
          <h1 className={styles.heroTitle}>{t("menuPage.heading")}</h1>
        </div>
      </section>

      {/* All categories, fully rendered */}
      <section className={styles.section} ref={menuRef} style={{ position: "relative", overflow: "hidden" }}>
        <ParallaxKorean characters={["肉", "味"]} speed={0.08} />
        <div className={styles.container}>
          <p className={`${styles.introText} reveal`}>{t("menuPage.subheading")}</p>

          {MENU_CATEGORIES.map((category) => (
            <div key={category.id} id={category.id} style={{ marginTop: "4rem" }}>
              <InkDivider width={100} />
              <h2 className={`${styles.heading} reveal`}>
                {isKo ? category.labelKo : category.label}
              </h2>
              <p className={styles.body}>{isKo ? category.label : category.labelKo}</p>
              {(category.note || category.noteKo) && (
                <p className={menuStyles.categoryNote}>
                  {isKo ? (category.noteKo || category.note) : category.note}
                </p>
              )}
              <div className={menuStyles.menuItems}>
                {category.items.map((item, index) => (
                  <div key={`${category.id}-${index}`} className={menuStyles.menuItem}>
                    <div className={menuStyles.menuItemHeader}>
                      <h3 className={menuStyles.itemName}>
                        {isKo ? item.nameKo : item.name}
                      </h3>
                      <span className={menuStyles.itemDots} aria-hidden="true" />
                      <span className={menuStyles.itemPrice}>{item.price}</span>
                    </div>
                    <p className={menuStyles.itemSubName}>
                      {isKo ? item.name : item.nameKo}
                    </p>
                    {item.description && (
                      <p className={menuStyles.itemDescription}>{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <a href={RESTAURANT.phoneRaw} className={styles.goldLink}>
              {t("nav.reserveTable")} · {RESTAURANT.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className={styles.signatureSection}>
        <Link href="/" className={styles.backLink}>
          ← {t("menuPage.backHome")}
        </Link>
      </section>
    </div>
  );
}

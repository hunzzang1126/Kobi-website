"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./menu-section.module.css";
import SectionWrapper from "./ui/SectionWrapper";
import InkDivider from "./InkDivider";
import ParallaxKorean from "./ParallaxKorean";
import { MENU_CATEGORIES } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);
  const tabsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useScrollReveal({ threshold: 0.05 });
  const { t } = useLanguage();

  useEffect(() => {
    if (!tabsRef.current) return;
    const activeTab = tabsRef.current.querySelector(`[data-tab-id="${activeCategory}"]`);
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeCategory]);

  const currentCategory = MENU_CATEGORIES.find((cat) => cat.id === activeCategory);

  return (
    <SectionWrapper id="menu" className={styles.section}>
      <ParallaxKorean characters={["肉", "味"]} speed={0.1} />

      <div className={styles.menu} ref={sectionRef}>
        <div className={styles.header}>
          <InkDivider width={140} />
          <span className={`${styles.label} reveal`}>{t("menu.label")}</span>
          <h2 className={`${styles.heading} reveal`}>{t("menu.heading")}</h2>
          <p className={`${styles.subheading} reveal`}>{t("menu.subheading")}</p>
        </div>

        <div className={`${styles.tabs} reveal`} ref={tabsRef} role="tablist" aria-label="Menu categories">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              role="tab"
              aria-selected={activeCategory === category.id}
              aria-controls={`panel-${category.id}`}
              data-tab-id={category.id}
              className={`${styles.tab} ${activeCategory === category.id ? styles.tabActive : ""}`}
              onClick={() => setActiveCategory(category.id)}
              id={`tab-${category.id}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div
          className={styles.menuItems}
          role="tabpanel"
          id={`panel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
          key={activeCategory}
        >
          {currentCategory?.items.map((item, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className={styles.menuItem}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className={styles.menuItemHeader}>
                <h3 className={styles.itemName}>{item.name}</h3>
                <span className={styles.itemDots} aria-hidden="true" />
                <span className={styles.itemPrice}>{item.price}</span>
              </div>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <InkDivider width={100} />
      </div>
    </SectionWrapper>
  );
}

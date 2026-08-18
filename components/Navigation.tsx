"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";
import { LINKS } from "@/content/siteData";
import { useLanguage } from "@/context/LanguageContext";

const NAV_ITEMS_KEYS = [
  { key: "nav.about", href: "#about", page: "/about" },
  { key: "nav.menu", href: "#menu", page: "/menu" },
  { key: "nav.gallery", href: "#gallery", page: "/gallery" },
  { key: "nav.location", href: "#location", page: "/location" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setIsMobileMenuOpen(false);

      // Only smooth scroll on home page for hash links
      if (isHome && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [isHome]
  );

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ko" : "en");
  };

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <nav className={styles.nav} aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="KOBI — Home">
          <Image
            src="/images/kobi-logo.png"
            alt="KOBI"
            width={48}
            height={48}
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks} role="list">
          {NAV_ITEMS_KEYS.map((item) => {
            const href = isHome ? item.href : item.page;
            return (
              <li key={item.key}>
                {isHome && item.href.startsWith("#") ? (
                  <a
                    href={item.href}
                    className={styles.navLink}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {t(item.key)}
                  </a>
                ) : (
                  <Link href={item.page} className={styles.navLink}>
                    {t(item.key)}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right side — Lang toggle + Reserve */}
        <div className={styles.rightGroup}>
          {/* Language Toggle */}
          <button
            className={styles.langToggle}
            onClick={toggleLocale}
            aria-label={locale === "en" ? "Switch to Korean" : "Switch to English"}
            title={locale === "en" ? "한국어" : "English"}
          >
            {locale === "en" ? "한" : "EN"}
          </button>

          {/* Reserve Button (Desktop) */}
          <a
            href={LINKS.reservation}
            className={styles.reserveBtn}
            id="nav-reserve-btn"
            onClick={(e) => {
              if (LINKS.reservation.startsWith("#")) {
                e.preventDefault();
                document.querySelector(LINKS.reservation)?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {t("nav.reserve")}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          id="mobile-menu-toggle"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <ul className={styles.mobileNavLinks} role="list">
          {NAV_ITEMS_KEYS.map((item) => (
            <li key={item.key}>
              {isHome && item.href.startsWith("#") ? (
                <a
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {t(item.key)}
                </a>
              ) : (
                <Link
                  href={item.page}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              )}
            </li>
          ))}

          {/* Language Toggle in mobile */}
          <li>
            <button
              className={styles.mobileLangToggle}
              onClick={toggleLocale}
            >
              {locale === "en" ? "한국어로 보기" : "View in English"}
            </button>
          </li>

          <li>
            <a
              href={LINKS.reservation}
              className={styles.mobileReserveBtn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("nav.reserveTable")}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./navigation.module.css";
import { NAV_ITEMS, LINKS } from "@/content/siteData";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      <nav className={styles.nav} aria-label="Main navigation">
        {/* Logo */}
        <a href="#hero" className={styles.logo} aria-label="KOBI — Back to top">
          <Image
            src="/images/kobi-logo.png"
            alt="KOBI"
            width={48}
            height={48}
            style={{ objectFit: "contain" }}
          />
        </a>

        {/* Desktop Navigation */}
        <ul className={styles.navLinks} role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.navLink}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Reserve Button (Desktop) */}
        <a
          href={LINKS.reservation}
          className={styles.reserveBtn}
          id="nav-reserve-btn"
        >
          Reserve
        </a>

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
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={LINKS.reservation}
              className={styles.mobileReserveBtn}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reserve a Table
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

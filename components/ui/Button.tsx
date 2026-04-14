"use client";

import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "large";
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
  id?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "default",
  className = "",
  onClick,
  ariaLabel,
  id,
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // For hash links: smooth scroll without changing URL hash
    if (href?.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      // Do NOT update window.location.hash — prevents stale anchor on reload
    }
  };

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        aria-label={ariaLabel}
        id={id}
        onClick={handleHashClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classNames}
      onClick={onClick}
      aria-label={ariaLabel}
      id={id}
      type="button"
    >
      {children}
    </button>
  );
}

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

  if (href) {
    return (
      <a
        href={href}
        className={classNames}
        aria-label={ariaLabel}
        id={id}
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

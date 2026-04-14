interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={className} style={{ width: "100%", position: "relative", overflow: "hidden" }}>
      {fullWidth ? (
        children
      ) : (
        <div
          style={{
            maxWidth: "var(--max-width)",
            margin: "0 auto",
            padding: "var(--section-padding)",
            width: "100%",
          }}
        >
          {children}
        </div>
      )}
    </section>
  );
}

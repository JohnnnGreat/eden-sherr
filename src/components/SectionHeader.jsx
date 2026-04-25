export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
  tone = "default",
  labelColor,
}) {
  const centered = align === "center";
  const inverse = tone === "inverse";

  return (
    <div className={centered ? "text-center mx-auto" : ""}>
      {label ? (
        <p
          className="kicker"
          style={labelColor ? { color: labelColor } : inverse ? { color: "var(--color-copper-300)" } : undefined}
        >
          {label}
        </p>
      ) : null}
      <h1
        className="section-title mt-3"
        style={inverse ? { color: "#ffffff" } : undefined}
      >
        {title}
      </h1>
      {description ? (
        <p
          className="section-copy mt-4"
          style={{
            marginInline: centered ? "auto" : "0",
            color: inverse ? "rgba(255,255,255,0.82)" : undefined,
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

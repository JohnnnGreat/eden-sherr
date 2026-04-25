export default function PageHero({
  label,
  title,
  description,
  bgVariant = "light",
}) {
  const dark = bgVariant === "dark";

  return (
    <section
      className="section-space-tight border-b"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.14)" : "rgba(19,34,31,0.1)",
        background: dark
          ? "linear-gradient(165deg,#13221f,#0a1412)"
          : "linear-gradient(180deg,#f8f4ec,#f1e8db)",
      }}
    >
      <div className="container-shell">
        <div style={{ maxWidth: "72ch" }}>
          {label ? (
            <p
              className="kicker"
              style={{
                color: dark ? "var(--color-copper-300)" : "var(--color-copper-700)",
              }}
            >
              {label}
            </p>
          ) : null}
          <h1
            className="page-title mt-3"
            style={{ color: dark ? "#ffffff" : "var(--color-ink-950)" }}
          >
            {title}
          </h1>
          {description ? (
            <p
              className="mt-5 text-lg leading-8"
              style={{
                color: dark
                  ? "rgba(255,255,255,0.78)"
                  : "var(--color-ink-600)",
                maxWidth: "64ch",
              }}
            >
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

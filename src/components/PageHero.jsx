"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHero({
  label,
  title,
  description,
  bgVariant = "light",
}) {
  const dark = bgVariant === "dark";
  const pathname = usePathname();

  const breadcrumbMap = {
    "/about": [{ label: "Home", href: "/" }, { label: "About" }],
    "/origin": [{ label: "Home", href: "/" }, { label: "Origin" }],
    "/products": [{ label: "Home", href: "/" }, { label: "Products" }],
    "/standards": [{ label: "Home", href: "/" }, { label: "Standards" }],
    "/contact": [{ label: "Home", href: "/" }, { label: "Contact" }],
  };

  const breadcrumbs = breadcrumbMap[pathname] || [];

  return (
    <section
      className="border-b"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.14)" : "rgba(19,34,31,0.1)",
        background: dark
          ? "linear-gradient(165deg,#13221f,#0a1412)"
          : "linear-gradient(180deg,#f8f4ec,#f1e8db)",
      }}
    >
      {breadcrumbs.length > 0 && (
        <div className="container-shell pt-4 pb-2">
          <div className="flex items-center gap-2 text-xs">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link href={crumb.href} className={dark ? "text-white/60 hover:text-white" : "text-ink-600 hover:text-ink-900"} style={{ transition: "color 0.15s ease" }}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={dark ? "text-white/80 font-medium" : "text-ink-900 font-medium"}>{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight size={14} className={dark ? "text-white/40" : "text-ink-400"} />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="container-shell" style={{ paddingTop: breadcrumbs.length > 0 ? "1rem" : "", paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
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

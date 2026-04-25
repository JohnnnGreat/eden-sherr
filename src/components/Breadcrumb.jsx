"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();

  const breadcrumbMap = {
    "/about": [{ label: "Home", href: "/" }, { label: "About" }],
    "/origin": [{ label: "Home", href: "/" }, { label: "Origin" }],
    "/products": [{ label: "Home", href: "/" }, { label: "Products" }],
    "/standards": [{ label: "Home", href: "/" }, { label: "Standards" }],
    "/contact": [{ label: "Home", href: "/" }, { label: "Contact" }],
  };

  const breadcrumbs = breadcrumbMap[pathname] || [];

  if (!breadcrumbs.length) return null;

  return (
    <nav className="section-space-tight bg-sand-50 border-b border-light">
      <div className="container-shell">
        <div className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {crumb.href ? (
                <Link href={crumb.href} className="text-ink-600 hover:text-ink-900 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-ink-900 font-medium">{crumb.label}</span>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight size={16} className="text-ink-400" />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Mail, Menu, Phone, X } from "lucide-react";
import { mainNavigation, siteConfig } from "@/config/siteConfig";

function ActiveLink({ href, label, onClick }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className="nav-link"
      style={active ? { color: "var(--color-ink-900)" } : undefined}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="w-full border-b topbar">
        <div className="container-shell h-9 flex items-center justify-between topbar-text">
          <p>{siteConfig.tagline}</p>
          <div className="hidden md:flex items-center gap-5">
            <a href={`mailto:${siteConfig.contacts.salesEmail}`} className="topbar-link">
              <Mail size={12} />
              {siteConfig.contacts.salesEmail}
            </a>
            <a href={`tel:${siteConfig.contacts.phoneLink}`} className="topbar-link">
              <Phone size={12} />
              {siteConfig.contacts.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className="border-b border-light"
        style={{
          background: "rgba(246,241,232,0.93)",
        }}
      >
        <div className="container-shell h-[4.6rem] flex items-center justify-between gap-8">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src="/images/v2/brand-signature.png"
              alt={`${siteConfig.name} logo`}
              width={138}
              height={48}
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {mainNavigation.map((item) => (
              <ActiveLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {open ? (
        <div
          className="fixed inset-0 z-[80]"
          style={{ background: "rgba(7,13,12,0.7)" }}
        >
          <div
            className="absolute right-0 top-0 h-full w-[min(88vw,380px)] p-6"
            style={{
              background: "linear-gradient(170deg,#f7f2e9,#f0e6d7)",
              borderLeft: "1px solid rgba(19,34,31,0.15)",
            }}
          >
            <div className="flex items-center justify-between">
              <Image
                src="/images/v2/brand-signature.png"
                alt={`${siteConfig.name} logo`}
                width={124}
                height={42}
              />
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              {mainNavigation.map((item) => (
                <ActiveLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  onClick={() => setOpen(false)}
                />
              ))}
            </nav>

            <div className="mt-8">
              <Link href="/contact" className="btn-primary w-full" onClick={() => setOpen(false)}>
                Contact Us
              </Link>
            </div>

            <div className="mt-8 text-sm flex flex-col gap-2 text-ink-700">
              <a href={`mailto:${siteConfig.contacts.salesEmail}`} className="inline-flex items-center gap-2">
                <Mail size={16} />
                {siteConfig.contacts.salesEmail}
              </a>
              <a href={`tel:${siteConfig.contacts.phoneLink}`} className="inline-flex items-center gap-2">
                <Phone size={16} />
                {siteConfig.contacts.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

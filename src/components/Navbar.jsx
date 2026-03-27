'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Our Story', href: '#story' },
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
];

function LeafIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="text-green-500"
    >
      <path
        d="M7 13V7M7 7C7 4 4 2 1 1.5c0 3 1.5 5.5 4.5 5.5H7zm0 0c0-3 3-5 6-5.5 0 3-1.5 5.5-4.5 5.5H7z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 6h16M3 11h16M3 16h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 4l14 14M18 4L4 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M11.5 9.5v1.25a.833.833 0 0 1-.908.833A8.25 8.25 0 0 1 1.417 2.408.833.833 0 0 1 2.25 1.5H3.5a.833.833 0 0 1 .833.75c.075.608.217 1.208.425 1.783a.833.833 0 0 1-.188.875L4 5.475a6.667 6.667 0 0 0 3.525 3.525l.567-.567a.833.833 0 0 1 .875-.188c.575.208 1.175.35 1.783.425a.833.833 0 0 1 .75.83z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M2.167 2.167h8.666c.459 0 .834.375.834.833v6.5a.833.833 0 0 1-.834.833H2.167a.833.833 0 0 1-.834-.833V3a.833.833 0 0 1 .834-.833z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.667 3 6.5 7.167 1.333 3"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Topbar ────────────────────────────────────────────── */}
      <div className="bg-charcoal-900 text-white">
        <div className="container-site flex items-center justify-between h-8">
          <p className="text-caption" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.6875rem' }}>
            Rooted in Nigeria. Crafted for the world.
          </p>
          <div className="hidden sm:flex items-center gap-5">
            <a
              href="mailto:info@edanandsherr.com"
              className="flex items-center gap-1.5 text-caption hover:text-white transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.6875rem', textDecoration: 'none' }}
            >
              <MailIcon />
              info@edanandsherr.com
            </a>
            <a
              href="tel:+2348065321577"
              className="flex items-center gap-1.5 text-caption hover:text-white transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.6875rem', textDecoration: 'none' }}
            >
              <PhoneIcon />
              +234 806 532 1577
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ──────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(250, 247, 244, 0.95)' : '#ffffff',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: '1px solid rgba(58, 51, 53, 0.08)',
          boxShadow: scrolled ? '0 1px 20px rgba(58, 51, 53, 0.06)' : 'none',
        }}
      >
        <nav className="container-site flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            <Image
              src="/Edan-%26-Sherr-Presentation-3.png"
              alt="Edan & Sherr Limited"
              width={130}
              height={48}
              style={{ objectFit: 'contain', objectPosition: 'left' }}
              priority
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-body-sm font-medium text-charcoal-600 hover:text-charcoal-900 transition-colors duration-150"
                  style={{ textDecoration: 'none', fontWeight: 500 }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: '0.625rem 1.375rem', fontSize: '0.875rem' }}
          >
            Get in Touch
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center text-charcoal-900"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      {/* ── Mobile Full-screen Overlay ─────────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-cream"
          style={{ overflowY: 'auto' }}
        >
          {/* Overlay header */}
          <div
            className="flex items-center justify-between px-6 h-16"
            style={{ borderBottom: '1px solid rgba(58,51,53,0.08)' }}
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
            >
              <Image
                src="/Edan-%26-Sherr-Presentation-3.png"
                alt="Edan & Sherr Limited"
                width={120}
                height={44}
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </Link>
            <button
              className="flex items-center justify-center text-charcoal-900"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
            >
              <CloseIcon />
            </button>
          </div>

          {/* Overlay links */}
          <nav className="flex flex-col px-6 py-10 flex-1">
            <ul className="list-none m-0 p-0 space-y-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-charcoal-900 block py-3"
                    style={{
                      fontSize: 'clamp(1.75rem, 6vw, 2.25rem)',
                      letterSpacing: '-0.015em',
                      textDecoration: 'none',
                      borderBottom: '1px solid rgba(58,51,53,0.07)',
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-4">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-center">
                Get in Touch
              </a>
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href="mailto:info@edanandsherr.com"
                  className="flex items-center gap-2 text-body-sm text-charcoal-600"
                  style={{ textDecoration: 'none' }}
                >
                  <MailIcon />
                  info@edanandsherr.com
                </a>
                <a
                  href="tel:+2348065321577"
                  className="flex items-center gap-2 text-body-sm text-charcoal-600"
                  style={{ textDecoration: 'none' }}
                >
                  <PhoneIcon />
                  +234 806 532 1577
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

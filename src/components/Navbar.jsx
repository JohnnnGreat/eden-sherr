'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Origin', href: '/origin' },
  { label: 'Our Story', href: '/story' },
  { label: 'Products', href: '/products' },
  { label: 'Standards', href: '/standards' },
  { label: 'Contact', href: '/contact' },
];

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
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
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
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
  const pathname = usePathname();
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <div className="bg-charcoal-900 text-white">
        <div className="container-site flex items-center justify-between h-9">
          <p
            className="text-caption"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.75rem' }}
          >
            {siteConfig.tagline}
          </p>
          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 text-caption hover:text-white transition-colors"
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.75rem',
                textDecoration: 'none',
              }}
            >
              <MailIcon />
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneE164}`}
              className="flex items-center gap-1.5 text-caption hover:text-white transition-colors"
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.75rem',
                textDecoration: 'none',
              }}
            >
              <PhoneIcon />
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(250, 245, 236, 0.96)' : '#ffffff',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: '1px solid rgba(58, 51, 53, 0.08)',
          boxShadow: scrolled ? '0 1px 20px rgba(58, 51, 53, 0.06)' : 'none',
        }}
      >
        <nav className="container-site flex items-center justify-between h-16" aria-label="Main">
          <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            <Image
              src="/Edan-%26-Sherr-Presentation-3.png"
              alt={siteConfig.companyName}
              width={130}
              height={48}
              style={{ objectFit: 'contain', objectPosition: 'left' }}
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={label}>
                  <Link
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className="text-body-sm font-medium transition-colors duration-150"
                    style={{
                      textDecoration: 'none',
                      fontWeight: 500,
                      color: isActive ? '#3a3335' : '#6e5b67',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="btn-primary hidden md:inline-flex"
            style={{ padding: '0.625rem 1.375rem', fontSize: '0.875rem' }}
          >
            Get in Touch
          </Link>

          <button
            type="button"
            className="md:hidden flex items-center justify-center text-charcoal-900"
            onClick={() => setMenuOpen((state) => !state)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div
          id={menuId}
          className="fixed inset-0 z-50 flex flex-col bg-cream"
          style={{ overflowY: 'auto' }}
        >
          <div
            className="flex items-center justify-between px-6 h-16"
            style={{ borderBottom: '1px solid rgba(58,51,53,0.08)' }}
          >
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              <Image
                src="/Edan-%26-Sherr-Presentation-3.png"
                alt={siteConfig.companyName}
                width={120}
                height={44}
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </Link>
            <button
              type="button"
              className="flex items-center justify-center text-charcoal-900"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-10 flex-1" aria-label="Mobile">
            <ul className="list-none m-0 p-0 space-y-1">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <li key={label}>
                    <Link
                      href={href}
                      aria-current={isActive ? 'page' : undefined}
                      className="font-display block py-3"
                      style={{
                        fontSize: 'clamp(1.75rem, 6vw, 2.25rem)',
                        letterSpacing: '-0.015em',
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(58,51,53,0.07)',
                        color: isActive ? '#3a3335' : '#5a4a55',
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-col gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Get in Touch
              </Link>
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-body-sm text-charcoal-600"
                  style={{ textDecoration: 'none' }}
                >
                  <MailIcon />
                  {siteConfig.contact.email}
                </a>
                <a
                  href={`tel:${siteConfig.contact.phoneE164}`}
                  className="flex items-center gap-2 text-body-sm text-charcoal-600"
                  style={{ textDecoration: 'none' }}
                >
                  <PhoneIcon />
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

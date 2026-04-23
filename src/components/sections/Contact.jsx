'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { siteConfig } from '@/config/site';

const ease = [0.25, 0.1, 0.25, 1];

const infoCards = [
  {
    Icon: MapPin,
    title: 'Visit Our Office',
    content: `${siteConfig.address.streetLine1}\n${siteConfig.address.streetLine2}\n${siteConfig.address.city}, ${siteConfig.address.country}`,
    href: null,
  },
  {
    Icon: Mail,
    title: 'Email Us',
    content: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    Icon: Phone,
    title: 'Call Us',
    content: siteConfig.contact.phoneDisplay,
    href: `tel:${siteConfig.contact.phoneE164}`,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section id="contact" className="py-section-y bg-cream" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          style={{ maxWidth: 600, marginInline: 'auto' }}
        >
          <SectionHeader
            label="Get in Touch"
            title="Ready to Partner With Us?"
            description="We welcome enquiries from buyers, distributors, and brands at any scale. Request a sample, ask for product specifications, or start a direct sourcing conversation."
            align="center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18, ease }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginTop: '2.5rem',
          }}
        >
          <a href={`mailto:${siteConfig.contact.email}`} className="btn-primary">
            <Mail size={16} aria-hidden="true" />
            Send an Enquiry
          </a>
          <a href={`tel:${siteConfig.contact.phoneE164}`} className="btn-secondary">
            <Phone size={16} aria-hidden="true" />
            Call Us
          </a>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {infoCards.map(({ Icon, title, content, href }, i) => (
            <motion.div
              key={title}
              className="card-hover flex flex-col items-center text-center"
              style={{ padding: '2rem' }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '0.625rem',
                  backgroundColor: 'rgba(192, 52, 95, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  flexShrink: 0,
                }}
              >
                <Icon size={20} aria-hidden="true" style={{ color: '#c0345f' }} />
              </div>

              <p
                className="text-heading-sm text-charcoal-900"
                style={{ marginBottom: '0.5rem' }}
              >
                {title}
              </p>

              {href ? (
                <a
                  href={href}
                  className="text-body-sm text-charcoal-600 hover:text-orange-600 transition-colors"
                  style={{
                    lineHeight: 1.65,
                    textDecoration: 'none',
                  }}
                >
                  {content}
                </a>
              ) : (
                <p
                  className="text-body-sm"
                  style={{ color: '#6e5b67', lineHeight: 1.65, whiteSpace: 'pre-line' }}
                >
                  {content}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

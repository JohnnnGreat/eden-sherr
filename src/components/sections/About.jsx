"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const ease = [0.25, 0.1, 0.25, 1];

export default function About({ isPreview = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section
      id="about"
      className="py-section-y bg-white"
      ref={ref}
      aria-labelledby="about-heading"
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -44 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            <div style={{ position: "relative", paddingTop: 20, paddingLeft: 20 }}>
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 20,
                  bottom: 20,
                  borderRadius: "0.75rem",
                  border: "1.5px solid rgba(117, 168, 93, 0.38)",
                }}
              />

              <div
                className="img-frame"
                style={{ position: "relative", aspectRatio: "3 / 4", width: "100%" }}
              >
                <Image
                  src="/images/ginger-about.jpg"
                  alt="Agricultural landscape in Nigeria - ginger farming region"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease }}
            >
              <SectionHeader
                id="about-heading"
                label="About Us"
                title="Unlocking the Full Value of Nigerian Ginger"
              />

              <p
                className="text-body-md mt-6"
                style={{ color: "#6e5b67", lineHeight: 1.75 }}
              >
                Edan &amp; Sherr was founded on a simple conviction: Nigerian ginger is among the
                best in the world, yet its full potential has often gone unrealised. What was
                missing was a reliable bridge: a processing facility that meets international
                specifications, and a supply chain built for global commerce.
              </p>

              {!isPreview && (
                <p
                  className="text-body-md mt-4"
                  style={{ color: "#6e5b67", lineHeight: 1.75 }}
                >
                  From Southern Kaduna, Nigeria&apos;s premier ginger belt, we work directly with
                  smallholder farming families while maintaining transparent and responsible
                  sourcing. Our processing facilities transform raw material into products that
                  meet export safety and quality requirements.
                </p>
              )}

              {isPreview && (
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="link-arrow text-green-700 font-bold uppercase tracking-widest text-xs"
                  >
                    Learn More About Our Mission <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

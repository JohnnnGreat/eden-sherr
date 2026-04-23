"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-cream"
      aria-label="Hero"
      style={{ borderBottom: "1px solid rgba(58,51,53,0.08)" }}
    >
      <div className="container-site relative py-section-y">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full mb-7"
              style={{
                backgroundColor: "#f3f8ee",
                color: "#3e642e",
                padding: "0.42rem 1rem",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#75a85d",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              <span className="text-body-sm font-medium">Premium Nigerian Ginger</span>
            </div>

            <h1 className="text-display-xl text-charcoal-900" style={{ textWrap: "balance" }}>
              Premium Nigerian Ginger,
              <br />
              Processed to <em className="text-green-600" style={{ fontStyle: "italic" }}>Excellence</em>
            </h1>

            <p className="section-body mt-6">
              We produce premium ginger products for buyers who demand consistency, traceability,
              and export-grade quality from farm to freight.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#products" className="btn-primary">
                Explore Products
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-secondary">
                Request a Sample
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", paddingInline: "1rem" }}>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 5",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  boxShadow: "0 24px 64px -14px rgba(58, 51, 53, 0.2)",
                  border: "1px solid rgba(58, 51, 53, 0.08)",
                }}
              >
                <Image
                  src="/images/ginger-hero.jpg"
                  alt="Premium dried ginger root from Southern Kaduna, Nigeria"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: -2,
                  backgroundColor: "#ffffff",
                  borderRadius: "0.75rem",
                  padding: "0.9rem 1.15rem",
                  boxShadow: "0 10px 34px -10px rgba(58, 51, 53, 0.16)",
                  minWidth: 170,
                  border: "1px solid rgba(58, 51, 53, 0.08)",
                }}
              >
                <p className="text-label-md">Origin</p>
                <p
                  className="text-charcoal-900"
                  style={{ fontWeight: 600, fontSize: "1rem", marginTop: "0.25rem" }}
                >
                  Southern Kaduna
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

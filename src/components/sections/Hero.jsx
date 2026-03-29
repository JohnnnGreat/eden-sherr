"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Shared easing curve
const ease = [0.25, 0.1, 0.25, 1];

export default function Hero() {
   return (
      <section
         className="relative overflow-hidden"
         aria-label="Hero"
         style={{
            background: `
          radial-gradient(ellipse 120% 90% at 62% 40%, #fffdf9 0%, #faf5ec 38%, #f2e9da 72%, #e8deca 100%)
        `,
         }}
      >
         {/* Subtle green warmth — top left */}
         <div
            aria-hidden="true"
            style={{
               position: "absolute",
               inset: 0,
               background:
                  "radial-gradient(ellipse 60% 55% at 8% 15%, rgba(117,168,93,0.07) 0%, transparent 70%)",
               pointerEvents: "none",
            }}
         />

         {/* ── Content ─────────────────────────────────────────── */}
         <div className="container-site relative py-section-y">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
               {/* ── LEFT COLUMN ─────────────────────────────────── */}
               <motion.div
                  initial={{ opacity: 0, x: -48 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, ease }}
               >
                  {/* Badge */}
                  <div
                     className="inline-flex items-center gap-2 rounded-full mb-7"
                     style={{
                        backgroundColor: "#f3f8ee",
                        color: "#3e642e",
                        padding: "0.4rem 1rem",
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
                     <span className="text-body-sm font-medium">Nigerian Ginger Excellence</span>
                  </div>

                  {/* Headline */}
                  <h1
                     className="text-display-xl text-charcoal-900"
                     style={{ textWrap: "balance" }}
                  >
                     Nature&apos;s Finest Ginger,
                     <br />
                     Processed to{" "}
                     <em
                        className="text-green-500"
                        style={{ fontStyle: "italic" }}
                     >
                        Perfection
                     </em>
                  </h1>

                  {/* Subtitle */}
                  <p className="section-body mt-6">
                     A Nigerian agro-processing company dedicated to producing premium, traceable
                     ginger products for local and international markets.
                  </p>

                  {/* CTA buttons */}
                  <div className="flex flex-wrap gap-4 mt-10">
                     <a
                        href="#products"
                        className="btn-primary"
                     >
                        Explore Products
                        <ArrowRight
                           size={17}
                           aria-hidden="true"
                        />
                     </a>
                     <a
                        href="#contact"
                        className="btn-secondary"
                     >
                        Request a Sample
                     </a>
                  </div>
               </motion.div>

               {/* ── RIGHT COLUMN ────────────────────────────────── */}
               <motion.div
                  initial={{ opacity: 0, x: 48 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, delay: 0.18, ease }}
                  style={{ position: "relative" }}
               >
                  {/*
                   * Outer wrapper: position: relative — NO overflow hidden.
                   * This is the anchor for the floating cards.
                   * Cards can safely extend outside the image frame.
                   */}
                  <div style={{ position: "relative", paddingInline: "1.25rem" }}>
                     {/* Image frame — overflow hidden isolates the photo crop */}
                     <div
                        style={{
                           position: "relative",
                           aspectRatio: "4 / 5",
                           borderRadius: "1rem",
                           overflow: "hidden",
                           boxShadow:
                              "0 24px 64px -12px rgba(58, 51, 53, 0.22), 0 4px 16px -4px rgba(58, 51, 53, 0.1)",
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

                     {/* ── Floating card: bottom-left ── */}
                     <div
                        style={{
                           position: "absolute",
                           bottom: 28,
                           left: 0,
                           backgroundColor: "#ffffff",
                           borderRadius: "0.75rem",
                           padding: "1rem 1.25rem",
                           boxShadow:
                              "0 8px 32px -4px rgba(58, 51, 53, 0.14), 0 2px 8px rgba(58, 51, 53, 0.06)",
                           minWidth: 156,
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

                     {/* ── Floating card: top-right ── */}
                     <div
                        style={{
                           position: "absolute",
                           top: 28,
                           right: 0,
                           backgroundColor: "#ffffff",
                           borderRadius: "0.75rem",
                           padding: "1rem 1.25rem",
                           boxShadow:
                              "0 8px 32px -4px rgba(58, 51, 53, 0.14), 0 2px 8px rgba(58, 51, 53, 0.06)",
                           minWidth: 148,
                        }}
                     >
                        <p className="text-label-md">Quality</p>
                        <p
                           className="text-charcoal-900"
                           style={{ fontWeight: 600, fontSize: "1rem", marginTop: "0.25rem" }}
                        >
                           EU Compliant
                        </p>
                     </div>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const ease = [0.25, 0.1, 0.25, 1];

export default function GingerOrigin() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

   return (
      <section
         id="origin"
         className="py-section-y bg-cream relative overflow-hidden"
         ref={ref}
         aria-labelledby="origin-heading"
      >
         {/* Decorative background element */}
         <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
            style={{
               background: "radial-gradient(circle at top right, #75a85d 0%, transparent 70%)",
            }}
         />

         <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
               {/* ── LEFT: Content ── */}
               <motion.div
                  initial={{ opacity: 0, x: -44 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, ease }}
               >
                  <SectionHeader
                     id="origin-heading"
                     label="The Source"
                     title="Why Nigerian Ginger"
                  />

                  <h3 className="text-display-sm text-charcoal-900 mt-6 font-display italic">
                     Character and Pungency in Every Crop
                  </h3>

                  <p className="text-body-md mt-6" style={{ color: "#6e5b67", lineHeight: 1.75 }}>
                     <strong className="text-charcoal-900">Southern Kaduna, Nigeria.</strong> Where
                     red laterite soils, high altitude, and an equatorial climate converge to
                     produce high-quality ginger with unique characteristics that are 
                     difficult to replicate.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                     {[
                        { label: "Bold Aroma", desc: "Deep, earthy fragrance" },
                        { label: "Intense Pungency", desc: "Higher heat profile" },
                        { label: "Exceptional Oil", desc: "Rich in vital gingerols" },
                     ].map((item, i) => (
                        <div key={item.label}>
                           <p className="text-body-sm font-bold text-charcoal-900">{item.label}</p>
                           <p className="text-caption mt-1">{item.desc}</p>
                        </div>
                     ))}
                  </div>

                  <p className="text-body-md mt-10" style={{ color: "#3e642e", fontWeight: 600 }}>
                     Edan &amp; Sherr brings you the highest quality of the region.
                  </p>
               </motion.div>

               {/* ── RIGHT: Image ── */}
               <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, ease }}
                  className="relative"
               >
                  <div className="img-frame aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                     <Image
                        src="/images/ginger-about.jpg"
                        alt="Ginger farming in Southern Kaduna"
                        fill
                        className="object-cover"
                     />
                  </div>
                  
                  {/* Floating Label */}
                  <div 
                     className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden md:block"
                     style={{ border: "1px solid rgba(117,168,93,0.2)" }}
                  >
                     <p className="text-label-sm uppercase tracking-wider text-green-600">Terroir</p>
                     <p className="text-body-lg font-display text-charcoal-900 mt-1">Red Laterite Soil</p>
                  </div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}

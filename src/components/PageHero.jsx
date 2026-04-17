"use client";

import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1];

export default function PageHero({ label, title, description, bgVariant = "cream" }) {
   const isGreen = bgVariant === "green";

   return (
      <section 
         className={`pt-32 pb-20 md:pt-40 md:pb-28 ${isGreen ? "bg-charcoal-900 text-white" : "bg-cream text-charcoal-900"}`}
         style={{ borderBottom: isGreen ? "none" : "1px solid rgba(58,51,53,0.06)" }}
      >
         <div className="container-site">
            <div className="max-w-3xl">
               {label && (
                  <motion.p
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, ease }}
                     className="section-label mb-4"
                     style={{ color: isGreen ? "#75a85d" : "#c0345f" }}
                  >
                     {label}
                  </motion.p>
               )}

               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease }}
                  className="text-display-lg font-display italic leading-[1.1] tracking-tight"
               >
                  {title}
               </motion.h1>

               {description && (
                  <motion.p
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.2, ease }}
                     className="text-body-lg mt-8 leading-relaxed max-w-2xl"
                     style={{ color: isGreen ? "rgba(255,255,255,0.6)" : "#6e5b67" }}
                  >
                     {description}
                  </motion.p>
               )}
            </div>
         </div>
      </section>
   );
}

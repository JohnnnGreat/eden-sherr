"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Download } from "lucide-react";
import Image from "next/image";

export default function BusinessCardClient() {
   return (
      <div className="flex flex-col min-h-screen bg-cream items-center font-body selection:bg-orange-500/20">
         {/* Top Banner section */}
         <div className="w-full bg-charcoal-900 relative flex flex-col items-center pt-16 pb-24 px-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="max-w-md w-full relative z-10 flex flex-col items-center">
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full text-center"
               >
                  <h1 className="text-display-md text-white mb-2">Susan Essien</h1>
                  <p className="text-green-500 mt-2 font-medium text-lg tracking-widest uppercase">
                     C.E.O.
                  </p>
                  <p className="text-cream/50 text-sm tracking-wide mt-2">
                     Edan &amp; Sherr Limited
                  </p>
               </motion.div>
            </div>
         </div>

         {/* Overlapping Content section */}
         <div className="w-full flex-1 max-w-md px-6 -mt-16 relative z-20 flex flex-col items-center">
            {/* Profile Image */}
            <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="w-32 h-32 rounded-full overflow-hidden border-[6px] border-cream bg-charcoal-800 relative shrink-0"
            >
               <Image
                  src="/susan.jpg"
                  alt="Susan Essien — C.E.O. of Edan & Sherr Limited"
                  fill
                  className="object-cover object-center"
                  priority
               />
            </motion.div>

            {/* Contact Links */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="w-full flex flex-col gap-4 mt-10 mb-8"
            >
               <a
                  href="tel:+2348065321577"
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-charcoal-900/5 hover:border-orange-500/30 transition-all group"
               >
                  <div className="w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-105 transition-transform">
                     <Phone
                        size={20}
                        strokeWidth={1.5}
                     />
                  </div>
                  <div className="flex-1 text-left">
                     <p className="text-charcoal-900 font-medium text-[15px]">+234 806 532 1577</p>
                     <p className="text-charcoal-400 text-xs tracking-wide">Work</p>
                  </div>
               </a>

               <a
                  href="mailto:sessien@edanandsherr.com"
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-charcoal-900/5 hover:border-orange-500/30 transition-all group"
               >
                  <div className="w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-105 transition-transform">
                     <Mail
                        size={20}
                        strokeWidth={1.5}
                     />
                  </div>
                  <div className="flex-1 text-left">
                     <p className="text-charcoal-900 font-medium text-[15px]">
                        sessien@edanandsherr.com
                     </p>
                     <p className="text-charcoal-400 text-xs tracking-wide">Email</p>
                  </div>
               </a>

               <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-charcoal-900/5">
                  <div className="w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center text-orange-500 shrink-0">
                     <MapPin
                        size={20}
                        strokeWidth={1.5}
                     />
                  </div>
                  <div className="flex-1 text-left">
                     <p className="text-charcoal-900 font-medium text-[15px] leading-tight mt-0.5">
                        Plot 765 Cadastral Zone
                        <br />
                        Adamu Ismaila Crescent
                        <br />
                        Idu Industrial Estate, Abuja
                     </p>
                     <p className="text-charcoal-400 text-xs tracking-wide">Office</p>
                  </div>
               </div>

               <a
                  href="https://www.edanandsherr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-charcoal-900/5 hover:border-orange-500/30 transition-all group"
               >
                  <div className="w-12 h-12 rounded-full bg-charcoal-900 flex items-center justify-center text-orange-500 shrink-0 group-hover:scale-105 transition-transform">
                     <Globe
                        size={20}
                        strokeWidth={1.5}
                     />
                  </div>
                  <div className="flex-1 text-left">
                     <p className="text-charcoal-900 font-medium text-[15px]">
                        www.edanandsherr.com
                     </p>
                     <p className="text-charcoal-400 text-xs tracking-wide">Company</p>
                  </div>
               </a>
            </motion.div>

            {/* Add to Contacts */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.4 }}
               className="w-full pb-16"
            >
               <a
                  href="/api/vcard/susan"
                  download="Susan_Essien.vcf"
                  className="w-full btn-primary py-[18px] text-[15px] font-semibold flex items-center justify-center gap-3 group !shadow-none"
               >
                  <Download
                     size={20}
                     className="group-hover:-translate-y-1 transition-transform"
                  />
                  Add to Contacts
               </a>
            </motion.div>
         </div>
      </div>
   );
}

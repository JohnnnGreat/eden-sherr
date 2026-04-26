"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "@/components/SectionHeader";
import { capabilityModules, aboutImages } from "@/data/homepageData";

export default function About({ isPreview = false }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  const modules = isPreview ? capabilityModules.slice(0, 3) : capabilityModules;

  return (
    <section className="relative h-screen bg-sand-50 z-0 overflow-hidden">
      <div className="h-full grid lg:grid-cols-[1fr_1fr]">
        {/* Full-height image on the left with gradient overlay and button */}
        <div className="relative hidden lg:flex lg:flex-col lg:justify-end overflow-hidden z-0" data-aos="fade-right" data-aos-delay="0">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="h-full w-full"
          >
            {aboutImages.map((image, index) => (
              <SwiperSlide key={index} className="h-full w-full">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="50vw"
                    style={{ objectFit: "cover" }}
                  />
                  {/* Gradient overlay - dark at bottom, transparent at top */}
                  <div className="absolute inset-0" style={{
                    background: "linear-gradient(to top, rgba(19, 34, 31, 0.7) 0%, rgba(19, 34, 31, 0.4) 30%, transparent 100%)"
                  }}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Button positioned at bottom of image */}
          {isPreview && (
            <div className="absolute bottom-8 left-8 z-10">
              <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>

        {/* Content on the right */}
        <div className="h-full flex flex-col justify-center px-8 lg:px-12 py-12" data-aos="fade-left" data-aos-delay="100">
          <SectionHeader
            label="About Edan & Sherr"
            title="From origin strength to procurement confidence"
            description="We combine deep local sourcing knowledge with process discipline so international buyers can source Nigerian ginger with less risk and more visibility."
          />

          <div className="mt-7 space-y-6">
            {modules.map((module, index) => (
              <div
                key={module.title}
                className="flex gap-4"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-copper-100">
                    <span className="text-sm font-bold text-copper-700">
                      {index + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-ink-900">
                    {module.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-600">
                    {module.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!isPreview && (
            <p className="section-copy mt-6">
              Our focus is practical: preserve quality at source, process with
              control, and provide the commercial clarity buyers need before they
              commit to long-term supply relationships.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

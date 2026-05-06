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

  if (isPreview) {
    return (
      <section className="relative min-h-[70svh] bg-sand-50 z-0 overflow-hidden w-full">
        {/* Background Swiper */}
        <div className="absolute inset-0 z-0">
          {/* <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="h-full w-full"
          >
            {[
              { src: "/images/about/about1.jpg", alt: "About Edan & Sherr 1" },
              { src: "/images/about/about2.jpg", alt: "About Edan & Sherr 2" }
            ].map((image, index) => (
              <SwiperSlide key={index} className="h-full w-full">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-sand-50/85 via-sand-50/40 to-transparent w-full md:w-3/4"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          <div className="relative w-full h-full">
            <Image
              src="/images/about/about2.jpg"
              alt="About Edan & Sherr"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-sand-50/85 via-sand-50/40 to-transparent w-full md:w-3/4"></div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-[70svh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[70svh] flex flex-col justify-center w-full lg:w-5/12 py-12" data-aos="fade-right" data-aos-delay="100">
            <SectionHeader
              label="Our company"
              title="Processing Nigerian Ginger to Global standard"
              description="Edan & Sherr was established to process Nigeran Ginger and deliver it at the standard the global markets demand."
            />

            <div className="mt-8" data-aos="fade-up" data-aos-delay="200">
              <Link href="/about" className="btn-secondary inline-flex items-center gap-2">
                Our Story
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-sand-50 z-0 overflow-hidden">
      <div className="h-full grid lg:grid-cols-[1fr_1fr]">
        {/* Full-height image on the left with gradient overlay */}
        <div className="relative hidden lg:flex lg:flex-col lg:justify-end overflow-hidden z-0 min-h-[50vh] lg:min-h-screen" data-aos="fade-right" data-aos-delay="0">
          {/* <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="h-full w-full absolute inset-0"
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
                  <div className="absolute inset-0" style={{
                    background: "linear-gradient(to top, rgba(19, 34, 31, 0.7) 0%, rgba(19, 34, 31, 0.4) 30%, transparent 100%)"
                  }}></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          <div className="h-full w-full absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src={aboutImages[0].src}
                alt={aboutImages[0].alt}
                fill
                priority
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(19, 34, 31, 0.7) 0%, rgba(19, 34, 31, 0.4) 30%, transparent 100%)"
              }}></div>
            </div>
          </div>
        </div>

        {/* Content on the right */}
        <div className="h-full flex flex-col justify-center px-8 lg:px-12 py-12 lg:py-24" data-aos="fade-left" data-aos-delay="100">
          <SectionHeader
            label="About Edan & Sherr"
            title="Exceptional ginger meets international standards."
            description="Edan & Sherr is a Nigerian ginger processing company built for the global market."
          />

          <div className="mt-6 space-y-6 section-copy">
            <p>
              The company was built on a simple conviction: Nigerian ginger is among the finest in the world — yet its true value has not been fully utilised. What has been missing is a processing facility capable of preparing it to international standard, and a supply chain built to get it there. We provide that missing piece.
            </p>
            <p>
              We work directly with over 100 smallholder farming families in Southern Kaduna, Nigeria’s premier ginger belt, offering fair farm-gate pricing and guaranteed offtake. Our processing facility transforms that raw material into export-grade products that meet EU, US, and Asian regulatory standards.
            </p>
          </div>

          {/* <div className="mt-7 space-y-6">
            {capabilityModules.map((module, index) => (
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

          <p className="section-copy mt-6">
            Our focus is practical: preserve quality at source, process with
            control, and provide the commercial clarity buyers need before they
            commit to long-term supply relationships.
          </p> */}
        </div>
      </div>
    </section>
  );
}

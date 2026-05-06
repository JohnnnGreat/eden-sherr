"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { homepageHero, heroCarouselImages, heroFeaturedProducts } from "@/data/homepageData";

export default function Hero() {
  return (
    <section className="w-full min-h-[100svh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="min-h-[100svh] w-full"
      >
        {/* First slide: Background carousel hero */}
        <SwiperSlide className="min-h-[100svh] relative">
          <div className="min-h-[100svh] w-full relative">
            {heroCarouselImages.map((image, index) => (
              <div
                key={index}
                className="absolute inset-0 transition-opacity duration-1000"
                style={{ opacity: 0 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
            <Image
              src={heroCarouselImages[0].src}
              alt={heroCarouselImages[0].alt}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container-shell text-center text-white max-w-2xl px-4">
                <p className="text-sm font-bold tracking-widest uppercase opacity-90 mb-4">
                  {homepageHero.eyebrow}
                </p>
                <h1 className="display-title leading-tight mb-6 text-white">
                  {homepageHero.title}
                </h1>
                <p className="text-lg leading-relaxed mb-8 opacity-90">
                  {homepageHero.subtitle}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href={homepageHero.primaryCta.href} className="btn-primary">
                    {homepageHero.primaryCta.label}
                    <ArrowRight size={16} />
                  </Link>
                  <Link href={homepageHero.secondaryCta.href} className="btn-secondary">
                    {homepageHero.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Product slides */}
        {heroFeaturedProducts.map((product) => (
          <SwiperSlide key={product.id} className="min-h-[100svh]">
            <div className="min-h-[100svh] w-full flex items-center bg-sand-50">
              <div className="container-shell min-h-[100svh] flex items-center gap-12 lg:gap-16">
                <div className="flex-1 flex flex-col justify-center">
                  {/* <p className="kicker mb-4">{product.badge || "Featured"}</p> */}
                  <h1 className="display-title mb-6 text-ink-900">
                    {product.title}
                  </h1>
                  <p className="section-copy mb-8">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="btn-primary">
                      Request Specs
                      <ArrowRight size={16} />
                    </Link>
                    <Link href="/products" className="btn-secondary">
                      View All Products
                    </Link>
                  </div>
                </div>

                <div className="flex-1 hidden lg:flex items-center justify-end">
                  <div className="relative w-full max-w-md aspect-square">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

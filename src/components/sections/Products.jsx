import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { productPageNotes, productPortfolio } from "@/data/productData";

function ProductCard({ product }) {
  const pipeline = product.category === "Coming soon";

  if (pipeline) {
    return (
      <article className="surface-card-dark p-6 flex flex-col h-full" style={{ transition: "transform 0.3s ease" }}>
        <div className="flex justify-between items-start mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl shadow-inner">
            {product.icon}
          </div>
          <span className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-white/20 text-white/80">
            Coming Soon
          </span>
        </div>
        
        <h3 className="text-xl font-medium text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
          {product.title}
        </h3>
        <p className="text-sm leading-6 text-white/70 mb-8 flex-1">
          {product.summary}
        </p>

        <div className="mt-auto">
          <div className="border-t border-white/10 pt-4 mb-6">
            {product.specifications.map((spec) => (
              <div key={spec.label} className="flex items-center justify-between py-2 text-xs">
                <span className="text-white/50">{spec.label}</span>
                <span className="text-white/90 font-medium text-right">{spec.value}</span>
              </div>
            ))}
          </div>
          
          <Link href="/contact" className="text-[11px] font-bold tracking-widest uppercase text-white/80 hover:text-white transition-colors flex items-center gap-1.5">
            Register Interest <ArrowRight size={12} />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="surface-card p-4 group flex flex-col h-full" style={{ transition: "transform 0.3s ease" }}>
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
          className="group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          style={{ background: "linear-gradient(to top, rgba(10,20,18,0.45), transparent)", transition: "opacity 0.4s ease" }}
        />
      </div>

      <div className="mt-4 flex flex-col flex-1">
        {product.category && (
          <div className="mb-2">
            <span className="badge badge-olive">
              {product.category}
            </span>
          </div>
        )}
        <h3 className="text-xl font-bold text-ink-900">
          {product.title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-ink-600 flex-1">
          {product.summary}
        </p>

        <div className="mt-4 rounded-lg p-3 border border-ink-200" style={{ borderColor: "rgba(19,34,31,0.14)" }}>
          {product.specifications.map((spec) => (
            <div
              key={spec.label}
              className="flex items-start justify-between gap-3 py-1.5 text-sm"
            >
              <span className="text-ink-600">
                {spec.label}
              </span>
              <strong className="text-ink-900">
                {spec.value}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Products({ isPreview = false }) {
  const products = isPreview ? productPortfolio.slice(0, 3) : productPortfolio;

  return (
    <section className="section-space bg-sand-50">
      <div className="container-shell">
        {isPreview && (
          <SectionHeader
            label="Our Products"
            title={productPageNotes.title}
            description={productPageNotes.description}
            align="center"
          />
        )}

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {isPreview ? (
            <Link href="/products" className="btn-secondary">
              View All Products
              <ArrowRight size={16} />
            </Link>
          ) : (
            <Link href="/contact" className="btn-primary">
              {productPageNotes.cta}
              <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

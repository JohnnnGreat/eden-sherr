import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { productPageNotes, productPortfolio } from "@/data/productData";

function ProductCard({ product }) {
  const pipeline = product.category.includes("Pipeline");

  return (
    <article className={pipeline ? "surface-card-dark p-4 group" : "surface-card p-4 group"} style={{ transition: "transform 0.3s ease" }}>
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

      <div className="mt-4">
        <span className={pipeline ? "badge badge-olive-inverse" : "badge badge-olive"}>
          {product.category}
        </span>
        <h3
          className="mt-3 text-xl font-bold"
          style={{ color: pipeline ? "#ffffff" : "var(--color-ink-900)" }}
        >
          {product.title}
        </h3>
        <p
          className="mt-2 text-sm leading-7"
          style={{
            color: pipeline ? "rgba(255,255,255,0.74)" : "var(--color-ink-600)",
          }}
        >
          {product.summary}
        </p>

        <div
          className="mt-4 rounded-lg p-3"
          style={{
            border: pipeline
              ? "1px solid rgba(255,255,255,0.14)"
              : "1px solid rgba(19,34,31,0.14)",
          }}
        >
          {product.specifications.map((spec) => (
            <div
              key={spec.label}
              className="flex items-start justify-between gap-3 py-1.5 text-sm"
            >
              <span
                style={{
                  color: pipeline
                    ? "rgba(255,255,255,0.65)"
                    : "var(--color-ink-600)",
                }}
              >
                {spec.label}
              </span>
              <strong
                style={{ color: pipeline ? "#ffffff" : "var(--color-ink-900)" }}
              >
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
        <SectionHeader
          label="Our Product Range"
          title={productPageNotes.title}
          description={productPageNotes.description}
          align="center"
        />

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

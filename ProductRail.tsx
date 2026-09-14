"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/types";
import ProductCard from "../shared/ProductCard";
import QuickViewModal from "../shared/QuickViewModal";
import SectionHeading from "../shared/SectionHeading";

export default function ProductRail({
  eyebrow,
  title,
  description,
  products,
  viewAllHref,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  products: Product[];
  viewAllHref?: string;
}) {
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <section className="bg-ivory py-16 sm:py-24">
      <div className="container-luxury">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="left"
            className="mb-0"
          />
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="link-underline mb-10 hidden items-center gap-1.5 text-sm font-medium text-ink sm:inline-flex"
            >
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
          ))}
        </div>
        {viewAllHref && (
          <div className="mt-10 flex justify-center sm:hidden">
            <Link href={viewAllHref} className="btn-outline">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </section>
  );
}

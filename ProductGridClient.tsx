"use client";
import { useState } from "react";
import type { Product } from "@/types";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";

export default function ProductGridClient({ products }: { products: Product[] }) {
  const [quickView, setQuickView] = useState<Product | null>(null);

  return (
    <>
      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
        ))}
      </div>
      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
}

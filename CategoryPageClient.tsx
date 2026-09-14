"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Search, SlidersHorizontal, MessageCircle } from "lucide-react";
import type { Category, Product } from "@/types";
import ProductCard from "./ProductCard";
import QuickViewModal from "./QuickViewModal";
import { whatsappLink, cn } from "@/lib/utils";
import { storeInfo } from "@/lib/data";

export default function CategoryPageClient({
  category,
  products,
}: {
  category: Category;
  products: Product[];
}) {
  const [query, setQuery] = useState("");
  const [activeSub, setActiveSub] = useState<string | "All">("All");
  const [quickView, setQuickView] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      const matchesSub = activeSub === "All" || p.subCategory === activeSub;
      return matchesQuery && matchesSub;
    });
  }, [products, query, activeSub]);

  return (
    <>
      {/* Large Banner */}
      <section className="relative h-[42vh] min-h-[280px] w-full overflow-hidden sm:h-[52vh]">
        <Image
          src={category.bannerImage}
          alt={category.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/10" />
        <div className="container-luxury absolute inset-x-0 bottom-0 pb-10">
          <p className="eyebrow mb-2 text-gold">{category.tagline}</p>
          <h1 className="heading-xl text-ivory">{category.name}</h1>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="container-luxury">
          <p className="max-w-2xl text-espresso-600">{category.description}</p>

          {/* Search + Filter */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 rounded-full border border-espresso-200 bg-white px-5 py-3 sm:max-w-sm">
              <Search className="h-4 w-4 text-espresso-400" />
              <input
                type="text"
                placeholder={`Search in ${category.name}...`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-espresso-400"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <SlidersHorizontal className="h-4 w-4 shrink-0 text-espresso-400" />
              <button
                onClick={() => setActiveSub("All")}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors",
                  activeSub === "All" ? "bg-ink text-ivory" : "bg-espresso-50 text-espresso-600 hover:bg-espresso-100"
                )}
              >
                All
              </button>
              {category.subCategories.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSub(sub)}
                  className={cn(
                    "shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors",
                    activeSub === sub ? "bg-ink text-ivory" : "bg-espresso-50 text-espresso-600 hover:bg-espresso-100"
                  )}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          {filtered.length > 0 ? (
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center justify-center text-center">
              <p className="font-display text-xl text-ink">No products found</p>
              <p className="mt-2 max-w-sm text-sm text-espresso-500">
                We couldn't find a match — but our full range is available in-store. Ask us on WhatsApp!
              </p>
              <a
                href={whatsappLink(
                  storeInfo.whatsapp,
                  `Hi BLACK & BROWN, I'm looking for something in ${category.name} — could you help?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-6"
              >
                <MessageCircle className="h-4 w-4" /> Ask on WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
}

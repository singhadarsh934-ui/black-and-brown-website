"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Eye, Share2, MessageCircle } from "lucide-react";
import type { Product } from "@/types";
import { formatINR, whatsappLink, cn } from "@/lib/utils";
import { storeInfo } from "@/lib/data";

export default function ProductCard({
  product,
  onQuickView,
}: {
  product: Product;
  onQuickView?: (product: Product) => void;
}) {
  const [wishlisted, setWishlisted] = useState(false);
  const discount =
    product.mrp && product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : null;

  const enquiryMessage = `Hi BLACK & BROWN, I'd like to enquire about: ${product.name} (₹${product.price}). Is it available?`;

  const handleShare = async () => {
    const shareData = {
      title: product.name,
      text: `Check out ${product.name} at BLACK & BROWN`,
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    const nav = navigator as Navigator & { share?: (data: typeof shareData) => Promise<void> };
    if (nav.share) {
      try {
        await nav.share(shareData);
      } catch {
        /* user cancelled */
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group card-luxury overflow-hidden"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-espresso-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ivory">
              New
            </span>
          )}
          {discount && (
            <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ivory">
              {discount}% Off
            </span>
          )}
        </div>

        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            aria-label="Add to wishlist"
            onClick={() => setWishlisted((w) => !w)}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-card backdrop-blur transition-colors",
              wishlisted ? "text-red-500" : "text-ink hover:text-red-500"
            )}
          >
            <Heart className="h-4 w-4" fill={wishlisted ? "currentColor" : "none"} />
          </button>
          <button
            aria-label="Share product"
            onClick={handleShare}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-card backdrop-blur transition-colors hover:text-gold-dark"
          >
            <Share2 className="h-4 w-4" />
          </button>
          {onQuickView && (
            <button
              aria-label="Quick view"
              onClick={() => onQuickView(product)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-card backdrop-blur transition-colors hover:text-gold-dark"
            >
              <Eye className="h-4 w-4" />
            </button>
          )}
        </div>

        <a
          href={whatsappLink(storeInfo.whatsapp, enquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-x-3 bottom-3 flex translate-y-14 items-center justify-center gap-2 rounded-full bg-[#25D366] py-2.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 ease-luxury group-hover:translate-y-0 group-hover:opacity-100"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Enquire on WhatsApp
        </a>
      </div>

      <div className="p-4">
        <p className="text-[11px] uppercase tracking-wider text-espresso-400">
          {product.subCategory}
        </p>
        <h3 className="mt-1 font-display text-base text-ink leading-snug">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm font-semibold text-ink">{formatINR(product.price)}</span>
          {product.mrp && (
            <span className="text-xs text-espresso-400 line-through">
              {formatINR(product.mrp)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

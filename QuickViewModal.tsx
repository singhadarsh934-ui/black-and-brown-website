"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import type { Product } from "@/types";
import { formatINR, whatsappLink } from "@/lib/utils";
import { storeInfo } from "@/lib/data";

export default function QuickViewModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-ink/60 backdrop-blur-sm p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-3xl grid-cols-1 overflow-hidden rounded-t-3xl sm:rounded-3xl bg-white shadow-luxury sm:grid-cols-2"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow-card"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative aspect-square sm:aspect-auto">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-wider text-espresso-400">
                {product.subCategory}
              </p>
              <h3 className="mt-2 font-display text-2xl text-ink">{product.name}</h3>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-lg font-semibold text-ink">
                  {formatINR(product.price)}
                </span>
                {product.mrp && (
                  <span className="text-sm text-espresso-400 line-through">
                    {formatINR(product.mrp)}
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-espresso-600">
                {product.description}
              </p>

              {product.fabric && (
                <p className="mt-4 text-sm text-espresso-700">
                  <span className="font-medium text-ink">Fabric: </span>
                  {product.fabric}
                </p>
              )}
              {product.sizes && (
                <div className="mt-3">
                  <p className="mb-2 text-sm font-medium text-ink">Available Sizes</p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-espresso-200 px-3 py-1 text-xs text-espresso-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {product.colors && (
                <div className="mt-3">
                  <p className="mb-2 text-sm font-medium text-ink">Colors</p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-espresso-50 px-3 py-1 text-xs text-espresso-700"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <a
                href={whatsappLink(
                  storeInfo.whatsapp,
                  `Hi BLACK & BROWN, I'd like to enquire about: ${product.name} (₹${product.price}). Is it available?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-6 w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

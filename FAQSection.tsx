"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types";
import SectionHeading from "./SectionHeading";

export default function FAQSection({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ivory py-16 sm:py-24">
      <div className="container-luxury max-w-3xl">
        <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-espresso-100 bg-white">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base text-ink">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gold-dark transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-espresso-600">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

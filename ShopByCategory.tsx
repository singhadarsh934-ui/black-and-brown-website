"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import SectionHeading from "../shared/SectionHeading";

export default function ShopByCategory() {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Collections"
          title="Shop by Category"
          description="Eight curated collections for every member of the family — from newborn essentials to festive Khadi."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/categories/${cat.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl shadow-card transition-shadow duration-500 hover:shadow-luxury"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-display text-base sm:text-lg text-ivory">{cat.name}</h3>
                  <p className="mt-1 text-[11px] text-ivory/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {cat.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "../shared/SectionHeading";

export default function TestimonialsSection() {
  return (
    <section className="bg-espresso-50 py-16 sm:py-24">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Customer Love"
          title="What Our Families Say"
          description="Real words from real customers across Kerakat, Jaunpur and nearby towns."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="card-luxury p-7"
            >
              <Quote className="h-6 w-6 text-gold/60" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-espresso-700">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 border-t border-espresso-100 pt-4">
                <p className="font-display text-base text-ink">{t.name}</p>
                <p className="text-xs text-espresso-400">{t.location} {t.category && `· ${t.category}`}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

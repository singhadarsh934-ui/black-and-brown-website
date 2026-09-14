"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function GoogleReviews() {
  return (
    <section className="bg-espresso-900 py-14 text-ivory">
      <div className="container-luxury flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-display text-2xl">4.8 / 5</span>
          </div>
          <p className="mt-2 text-sm text-ivory/60">Rated by families across Jaunpur on Google</p>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          href="https://www.google.com/search?q=Black+and+Brown+Kerakat+Jaunpur+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline border-ivory/30 text-ivory hover:bg-ivory hover:text-ink"
        >
          Read Google Reviews
        </motion.a>
      </div>
    </section>
  );
}

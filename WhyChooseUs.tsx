"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HandCoins, Users } from "lucide-react";
import SectionHeading from "../shared/SectionHeading";

const points = [
  {
    icon: ShieldCheck,
    title: "Trusted Since Day One",
    description: "A family-run showroom built on honest pricing and genuine fabric quality.",
  },
  {
    icon: Sparkles,
    title: "Authentic Khadi & Handloom",
    description: "Our founding specialty — handwoven textiles sourced with care and pride.",
  },
  {
    icon: Users,
    title: "Something for Every Family Member",
    description: "From newborn essentials to festive menswear, all under one roof.",
  },
  {
    icon: HandCoins,
    title: "Premium Quality, Fair Prices",
    description: "Curated the way a luxury store would be, priced for the middle-class family.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-espresso-900 py-16 sm:py-24 text-ivory">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Why Black & Brown"
          title="Trusted by Families Across Jaunpur"
          description="We built this showroom the way we'd want to shop ourselves — quality first, no shortcuts."
          className="[&_h2]:text-ivory [&_p]:text-ivory/60"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-ivory/10 p-7 transition-colors duration-500 hover:border-gold/40 hover:bg-ivory/5"
            >
              <point.icon className="h-7 w-7 text-gold" />
              <h3 className="mt-5 font-display text-lg text-ivory">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/60">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

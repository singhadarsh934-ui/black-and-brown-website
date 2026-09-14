"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { storeInfo } from "@/lib/data";
import SectionHeading from "../shared/SectionHeading";

// Replace with a live Instagram embed (e.g. via SnapWidget / Elfsight) once the handle is active.
const feedImages = [
  "https://images.unsplash.com/photo-1622290291165-433939bb3ac8?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610189844772-b7d81a9c26db?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583391733981-8698e5c05cd6?q=80&w=500&auto=format&fit=crop",
];

export default function InstagramFeed() {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Follow Along"
          title={`@${storeInfo.instagram.split("/").pop()}`}
          description="New arrivals, styling ideas and behind-the-scenes from the showroom."
        />
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:grid-cols-6">
          {feedImages.map((img, i) => (
            <motion.a
              key={i}
              href={storeInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <Image src={img} alt="Black & Brown on Instagram" fill sizes="200px" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40">
                <Instagram className="h-5 w-5 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

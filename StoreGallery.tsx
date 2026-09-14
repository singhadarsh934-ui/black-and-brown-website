"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=900&auto=format&fit=crop", span: "" },
  { src: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?q=80&w=900&auto=format&fit=crop", span: "" },
  { src: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=900&auto=format&fit=crop", span: "" },
  { src: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=900&auto=format&fit=crop", span: "row-span-2" },
];

export default function StoreGallery() {
  return (
    <section className="bg-espresso-50 py-16 sm:py-24">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Inside the Showroom"
          title="Step Inside Black & Brown"
          description="A glimpse of our showroom in Kerakat — designed to feel premium, without losing its warmth."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[160px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-2xl ${img.span} aspect-square sm:aspect-auto`}
            >
              <Image src={img.src} alt="Black & Brown showroom" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 hover:scale-110" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

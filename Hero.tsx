"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/utils";
import { storeInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="container-luxury grid grid-cols-1 items-center gap-10 py-10 sm:py-16 lg:grid-cols-2 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="order-2 lg:order-1"
        >
          <p className="eyebrow mb-4">Kerakat · Jaunpur · Since Day One</p>
          <h1 className="heading-xl">
            Where the Whole Family
            <br />
            Finds Its <span className="italic text-gold-dark">Style.</span>
          </h1>
          <p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-espresso-600">
            Kids wear, baby essentials, men&apos;s &amp; women&apos;s ethnic wear,
            linen and heritage Khadi &amp; Handloom — curated with a premium
            eye, priced for the family.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/categories" className="btn-primary">
              Explore Collection <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink(storeInfo.whatsapp, "Hi BLACK & BROWN, I'd like to know more about your collection.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Enquiry
            </a>
          </div>

          <div className="mt-10 flex items-center gap-8 border-t border-espresso-100 pt-6">
            <div>
              <p className="font-display text-2xl text-ink">8+</p>
              <p className="text-xs uppercase tracking-wider text-espresso-400">Categories</p>
            </div>
            <div className="h-8 w-px bg-espresso-100" />
            <div>
              <p className="font-display text-2xl text-ink">100%</p>
              <p className="text-xs uppercase tracking-wider text-espresso-400">Authentic Khadi</p>
            </div>
            <div className="h-8 w-px bg-espresso-100" />
            <div>
              <p className="font-display text-2xl text-ink">Family</p>
              <p className="text-xs uppercase tracking-wider text-espresso-400">First Approach</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-luxury">
            <Image
              src="https://images.unsplash.com/photo-1610030181087-540f829c9926?q=80&w=1400&auto=format&fit=crop"
              alt="BLACK & BROWN family fashion collection"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-luxury sm:block"
          >
            <p className="font-display text-lg text-ink">Khadi &amp; Handloom</p>
            <p className="text-xs text-espresso-500">Our founding specialty</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

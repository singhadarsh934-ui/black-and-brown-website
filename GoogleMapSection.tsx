"use client";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { storeInfo } from "@/lib/data";
import { telLink } from "@/lib/utils";
import SectionHeading from "../shared/SectionHeading";

export default function GoogleMapSection() {
  return (
    <section className="bg-ivory py-16 sm:py-24">
      <div className="container-luxury">
        <SectionHeading eyebrow="Visit Us" title="Find Our Showroom" />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl bg-white p-7 shadow-card"
          >
            <div className="space-y-5">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-gold-dark" />
                <p className="text-sm text-espresso-700">
                  {storeInfo.address}, {storeInfo.city}, {storeInfo.district}, {storeInfo.state} – {storeInfo.pincode}
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold-dark" />
                <a href={telLink(storeInfo.phone)} className="text-sm text-espresso-700 hover:text-ink">
                  {storeInfo.phone}
                </a>
              </div>
              <div className="flex gap-3">
                <Clock className="h-5 w-5 shrink-0 text-gold-dark" />
                <div className="text-sm text-espresso-700">
                  {storeInfo.timings.map((t) => (
                    <p key={t.day}>{t.day}: {t.hours}</p>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={storeInfo.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-7 w-full"
            >
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 overflow-hidden rounded-2xl shadow-card"
          >
            <iframe
              src={storeInfo.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BLACK & BROWN showroom location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

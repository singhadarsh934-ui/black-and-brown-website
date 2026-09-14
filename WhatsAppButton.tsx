"use client";
import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { storeInfo } from "@/lib/data";
import { whatsappLink, telLink } from "@/lib/utils";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
        href={telLink(storeInfo.phone)}
        aria-label="Call BLACK & BROWN"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ivory shadow-luxury transition-transform hover:scale-105 active:scale-95"
      >
        <Phone className="h-5 w-5" />
      </motion.a>
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.15, type: "spring", stiffness: 200, damping: 15 }}
        href={whatsappLink(
          storeInfo.whatsapp,
          "Hi BLACK & BROWN, I'd like to know more about your collection."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxury transition-transform hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
        <MessageCircle className="relative h-6 w-6" fill="white" />
      </motion.a>
    </div>
  );
}

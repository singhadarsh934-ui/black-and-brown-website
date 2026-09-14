"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, Phone, MapPin } from "lucide-react";
import { storeInfo } from "@/lib/data";
import { whatsappLink, telLink } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Categories", href: "/categories" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Brands", href: "/brands" },
  { label: "Offers", href: "/offers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-ink/50 backdrop-blur-sm lg:hidden"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[95] h-full w-[85%] max-w-sm bg-ivory shadow-luxury lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between border-b border-espresso-100 px-6 py-5">
              <span className="font-display text-xl tracking-wide text-ink">
                BLACK <span className="text-gold-dark">&</span> BROWN
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso-50 text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block border-b border-espresso-50 py-3.5 font-display text-lg text-ink transition-colors hover:text-gold-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="space-y-3 border-t border-espresso-100 px-6 py-6">
              <p className="flex items-start gap-2 text-xs text-espresso-600">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                {storeInfo.address}, {storeInfo.district}, {storeInfo.state} – {storeInfo.pincode}
              </p>
              <a href={telLink(storeInfo.phone)} className="btn-outline w-full">
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href={whatsappLink(storeInfo.whatsapp, "Hi BLACK & BROWN, I'd like to know more.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

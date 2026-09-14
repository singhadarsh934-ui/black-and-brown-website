"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MapPin, Phone } from "lucide-react";
import { cn, telLink } from "@/lib/utils";
import { storeInfo } from "@/lib/data";
import MobileNav from "./MobileNav";

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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top utility strip */}
      <div className="hidden lg:block bg-ink text-ivory/80 text-xs">
        <div className="container-luxury flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              {storeInfo.address}, {storeInfo.city}, {storeInfo.district}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href={telLink(storeInfo.phone)} className="flex items-center gap-1.5 hover:text-ivory">
              <Phone className="h-3.5 w-3.5 text-gold" /> {storeInfo.phone}
            </a>
            <span>{storeInfo.timings[0].hours}</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-[80] w-full transition-all duration-300 ease-luxury",
          scrolled ? "bg-ivory/90 shadow-card backdrop-blur-md" : "bg-ivory"
        )}
      >
        <div className="container-luxury flex items-center justify-between py-4 lg:py-5">
          <Link href="/" className="font-display text-2xl sm:text-3xl tracking-wide text-ink">
            BLACK <span className="text-gold-dark">&</span> BROWN
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-underline text-sm font-medium text-espresso-700 hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden lg:inline-flex btn-primary text-xs px-5 py-2.5">
              Visit Showroom
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso-200 text-ink lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

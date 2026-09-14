import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import { storeInfo, categories } from "@/lib/data";
import { telLink } from "@/lib/utils";
import NewsletterForm from "../home/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/90">
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl tracking-wide text-ivory">
              BLACK <span className="text-gold">&</span> BROWN
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
              A premium family fashion showroom in Kerakat, Jaunpur — specializing in
              Kids Wear, Baby Products, Men&apos;s Wear, Women&apos;s Ethnic Wear, Linen,
              Khadi &amp; Handloom, and Accessories.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={storeInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={storeInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest2 text-gold">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory/70">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={`/categories/${c.slug}`} className="link-underline hover:text-ivory">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest2 text-gold">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-ivory/70">
              <li><Link href="/about" className="link-underline hover:text-ivory">About Us</Link></li>
              <li><Link href="/gallery" className="link-underline hover:text-ivory">Gallery</Link></li>
              <li><Link href="/testimonials" className="link-underline hover:text-ivory">Testimonials</Link></li>
              <li><Link href="/blog" className="link-underline hover:text-ivory">Blog</Link></li>
              <li><Link href="/contact" className="link-underline hover:text-ivory">Contact</Link></li>
              <li><Link href="/privacy-policy" className="link-underline hover:text-ivory">Privacy Policy</Link></li>
              <li><Link href="/terms" className="link-underline hover:text-ivory">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest2 text-gold">
              Visit Us
            </h4>
            <ul className="space-y-3 text-sm text-ivory/70">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>{storeInfo.address}, {storeInfo.city}, {storeInfo.district}, {storeInfo.state} – {storeInfo.pincode}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={telLink(storeInfo.phone)} className="hover:text-ivory">{storeInfo.phone}</a>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${storeInfo.email}`} className="hover:text-ivory">{storeInfo.email}</a>
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {storeInfo.timings.map((t) => `${t.day}: ${t.hours}`).join(" · ")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ivory/10 pt-10">
          <div className="mx-auto max-w-xl text-center">
            <h4 className="font-display text-xl text-ivory">Join Our Newsletter</h4>
            <p className="mt-2 text-sm text-ivory/60">
              Be the first to know about new arrivals, festive collections and exclusive offers.
            </p>
            <NewsletterForm variant="dark" />
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-6">
        <div className="container-luxury flex flex-col items-center justify-between gap-3 text-xs text-ivory/50 sm:flex-row">
          <p>© {new Date().getFullYear()} BLACK &amp; BROWN. All rights reserved.</p>
          <p>Kerakat, Jaunpur, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}

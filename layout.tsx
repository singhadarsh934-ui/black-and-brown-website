import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import JsonLd from "@/components/ui/JsonLd";
import { localBusinessSchema, buildMetadata, SITE_URL } from "@/lib/seo";

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title: "BLACK & BROWN | Premium Family Fashion Showroom in Kerakat, Jaunpur",
    description:
      "BLACK & BROWN is a premium family fashion showroom in Kerakat, Jaunpur offering Kids Wear, Baby Products, Men's Wear, Women's Ethnic Wear, Linen, Khadi & Handloom, and Accessories.",
    path: "/",
  }),
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0E0C0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="font-sans">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { storeInfo } from "./data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://blackandbrown.in";

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/images/og-cover.jpg`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: storeInfo.brandName,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    keywords: [
      "Black and Brown Kerakat",
      "garment showroom Jaunpur",
      "kids wear Jaunpur",
      "khadi handloom Jaunpur",
      "linen shirts Jaunpur",
      "kurti suits Jaunpur",
      "men's wear Kerakat",
      "baby products Jaunpur",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: storeInfo.brandName,
    description:
      "Premium family fashion showroom in Kerakat, Jaunpur specializing in Kids Wear, Baby Products, Men's Wear, Women's Ethnic Wear, Linen, Khadi & Handloom, and Accessories.",
    image: `${SITE_URL}/images/og-cover.jpg`,
    "@id": SITE_URL,
    url: SITE_URL,
    telephone: storeInfo.phone,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: storeInfo.address,
      addressLocality: storeInfo.city,
      addressRegion: storeInfo.state,
      postalCode: storeInfo.pincode,
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:30",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "20:00",
      },
    ],
    sameAs: [storeInfo.instagram, storeInfo.facebook],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function productSchema(product: {
  name: string;
  description: string;
  image: string;
  price: number;
  slug: string;
  categoryName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.categoryName,
    brand: { "@type": "Brand", name: "BLACK & BROWN" },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/categories/${product.slug}`,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export { SITE_URL };

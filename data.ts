import type { Category, Product, Testimonial, BlogPost, FAQItem, StoreInfo } from "@/types";

// ─────────────────────────────────────────────────────────
// STORE INFO
// ─────────────────────────────────────────────────────────
export const storeInfo: StoreInfo = {
  brandName: "BLACK & BROWN",
  tagline: "The Family Fashion Showroom",
  address: "Saraibiru Chauraha (Beside Pahalwan Baba), Kerakat",
  city: "Kerakat",
  district: "Jaunpur",
  state: "Uttar Pradesh",
  pincode: "222142",
  phone: "+91 82997 23368",
  whatsapp: "918299723368",
  email: "hello@blackandbrown.in",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Saraibiru+Chauraha+Kerakat+Jaunpur+Uttar+Pradesh+222142&output=embed",
  mapLink:
    "https://maps.google.com/?q=Saraibiru+Chauraha+Kerakat+Jaunpur+Uttar+Pradesh+222142",
  instagram: "https://instagram.com/blackandbrown_kerakat",
  facebook: "https://facebook.com/blackandbrownkerakat",
  timings: [
    { day: "Monday – Saturday", hours: "10:30 AM – 9:00 PM" },
    { day: "Sunday", hours: "11:00 AM – 8:00 PM" },
  ],
};

// ─────────────────────────────────────────────────────────
// CATEGORIES — Kids, Baby, Men, Women, Linen, Khadi, Accessories
// (Footwear intentionally excluded from the entire catalog)
// ─────────────────────────────────────────────────────────
export const categories: Category[] = [
  {
    slug: "kids-wear",
    name: "Kids Wear",
    tagline: "Playful. Comfortable. Beautifully made.",
    description:
      "A joyful edit of everyday and celebration wear for children — soft cottons, festive sets, and easy separates designed for how kids actually move.",
    image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1800&auto=format&fit=crop",
    subCategories: ["Boys", "Girls", "Festive Sets", "Daily Wear", "Winter Wear"],
    seoTitle: "Kids Wear in Kerakat, Jaunpur | BLACK & BROWN",
    seoDescription: "Shop premium kids wear in Kerakat, Jaunpur — boys & girls clothing, festive sets and daily wear at BLACK & BROWN showroom.",
  },
  {
    slug: "baby-products",
    name: "Baby Products",
    tagline: "Gentle essentials for the newest members of the family.",
    description:
      "Soft-touch fabrics and everyday essentials for infants and toddlers, chosen with care — right here in Kerakat.",
    image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1800&auto=format&fit=crop",
    subCategories: ["New Born", "0–1 Year", "1–3 Years", "Baby Gift Sets"],
    seoTitle: "Baby Products in Kerakat, Jaunpur | BLACK & BROWN",
    seoDescription: "Premium baby essentials and infant wear in Kerakat, Jaunpur — soft, safe and gentle products at BLACK & BROWN.",
  },
  {
    slug: "mens-wear",
    name: "Men's Wear",
    tagline: "Sharp everyday style, rooted in craft.",
    description:
      "From tailored shirts to festive kurtas, our men's edit blends contemporary fit with the fabrics Black & Brown has been trusted for since day one.",
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?q=80&w=1800&auto=format&fit=crop",
    subCategories: ["Shirts", "Kurtas", "Ethnic Sets", "Trousers", "Winter Wear"],
    seoTitle: "Men's Wear in Kerakat, Jaunpur | BLACK & BROWN",
    seoDescription: "Shop premium men's shirts, kurtas and ethnic sets in Kerakat, Jaunpur at BLACK & BROWN showroom.",
  },
  {
    slug: "womens-ethnic-wear",
    name: "Women's Ethnic Wear",
    tagline: "Kurtis & suits for every occasion.",
    description:
      "Everyday kurtis to occasion-ready suit sets — elegant silhouettes and print stories curated for the modern woman in Jaunpur and beyond.",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1610030181087-540f829c9926?q=80&w=1800&auto=format&fit=crop",
    subCategories: ["Kurtis", "Suit Sets", "Dupattas", "Co-ords", "Festive Wear"],
    seoTitle: "Women's Kurti & Suits in Kerakat, Jaunpur | BLACK & BROWN",
    seoDescription: "Discover women's kurtis, suit sets and ethnic wear in Kerakat, Jaunpur at BLACK & BROWN showroom.",
  },
  {
    slug: "linen-collection",
    name: "Linen Collection",
    tagline: "Breathable luxury for every season.",
    description:
      "Pure and blended linen pieces prized for their breathability and effortless drape — a warm-weather essential across our men's and women's lines.",
    image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1800&auto=format&fit=crop",
    subCategories: ["Men's Linen Shirts", "Women's Linen Suits", "Linen Sets"],
    seoTitle: "Linen Collection in Kerakat, Jaunpur | BLACK & BROWN",
    seoDescription: "Shop premium linen shirts and suits in Kerakat, Jaunpur at BLACK & BROWN showroom.",
  },
  {
    slug: "khadi-handloom",
    name: "Khadi & Handloom",
    tagline: "Heritage fabric, handmade with pride.",
    description:
      "Our founding specialty — authentic Khadi and handloom textiles that carry the story of Indian craftsmanship in every thread.",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1606913084603-3e7702b01627?q=80&w=1800&auto=format&fit=crop",
    subCategories: ["Khadi Kurtas", "Handloom Sarees", "Khadi Shirts", "Gift Fabric"],
    seoTitle: "Khadi & Handloom in Kerakat, Jaunpur | BLACK & BROWN",
    seoDescription: "Authentic Khadi and handloom clothing in Kerakat, Jaunpur — a BLACK & BROWN specialty since our founding.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "The finishing details.",
    description:
      "Belts, scarves, bags and the small details that complete an outfit — curated to match every collection in the store.",
    image: "https://images.unsplash.com/photo-1611923134239-b9be5816e23c?q=80&w=1200&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1800&auto=format&fit=crop",
    subCategories: ["Belts", "Scarves & Stoles", "Bags", "Jewellery"],
    seoTitle: "Fashion Accessories in Kerakat, Jaunpur | BLACK & BROWN",
    seoDescription: "Shop belts, scarves, bags and accessories in Kerakat, Jaunpur at BLACK & BROWN showroom.",
  },
];

// ─────────────────────────────────────────────────────────
// PRODUCTS — sample catalog (replace with real inventory / CMS)
// ─────────────────────────────────────────────────────────
export const products: Product[] = [
  { id: "p1", name: "Boys Festive Kurta-Pyjama Set", slug: "boys-festive-kurta-pyjama-set", categorySlug: "kids-wear", subCategory: "Festive Sets", price: 1299, mrp: 1799, image: "https://images.unsplash.com/photo-1622290291165-433939bb3ac8?q=80&w=900&auto=format&fit=crop", isNew: true, isFeatured: true, fabric: "Cotton Silk", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], colors: ["Maroon", "Mustard", "Navy"], description: "A festive-ready kurta-pyjama set in breathable cotton silk, finished with delicate thread embroidery." },
  { id: "p2", name: "Girls Anarkali Frock", slug: "girls-anarkali-frock", categorySlug: "kids-wear", subCategory: "Festive Sets", price: 1499, mrp: 1999, image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733?q=80&w=900&auto=format&fit=crop", isFeatured: true, fabric: "Georgette", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], colors: ["Pink", "Peach", "Yellow"], description: "A flared Anarkali frock with soft lining, perfect for festivals and family celebrations." },
  { id: "p3", name: "Infant Cotton Romper Set (Pack of 3)", slug: "infant-cotton-romper-set", categorySlug: "baby-products", subCategory: "0–1 Year", price: 899, mrp: 1199, image: "https://images.unsplash.com/photo-1622170717514-8ba0d0f5b5b6?q=80&w=900&auto=format&fit=crop", isNew: true, fabric: "100% Cotton", sizes: ["0-3M", "3-6M", "6-9M"], colors: ["Assorted Pastels"], description: "Ultra-soft, breathable rompers designed for delicate skin — a set of three everyday essentials." },
  { id: "p4", name: "Baby Welcome Gift Hamper", slug: "baby-welcome-gift-hamper", categorySlug: "baby-products", subCategory: "Baby Gift Sets", price: 1599, image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=900&auto=format&fit=crop", isFeatured: true, fabric: "Cotton", description: "A curated hamper of essentials to welcome a new baby — thoughtfully packed and gift-ready." },
  { id: "p5", name: "Men's Pure Linen Shirt", slug: "mens-pure-linen-shirt", categorySlug: "linen-collection", subCategory: "Men's Linen Shirts", price: 1899, mrp: 2499, image: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=900&auto=format&fit=crop", isNew: true, isFeatured: true, fabric: "100% Linen", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Beige", "Sky Blue", "Olive"], description: "A breathable pure linen shirt with a relaxed tailored fit — a warm-weather wardrobe staple." },
  { id: "p6", name: "Men's Khadi Kurta", slug: "mens-khadi-kurta", categorySlug: "khadi-handloom", subCategory: "Khadi Kurtas", price: 1399, mrp: 1799, image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?q=80&w=900&auto=format&fit=crop", isFeatured: true, fabric: "Handspun Khadi Cotton", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Off White", "Sand", "Charcoal"], description: "Handwoven Khadi cotton kurta with a clean silhouette — everyday elegance rooted in heritage craft." },
  { id: "p7", name: "Women's Handloom Cotton Kurti", slug: "womens-handloom-cotton-kurti", categorySlug: "khadi-handloom", subCategory: "Handloom Sarees", price: 1299, mrp: 1699, image: "https://images.unsplash.com/photo-1583391733981-8698e5c05cd6?q=80&w=900&auto=format&fit=crop", isNew: true, fabric: "Handloom Cotton", sizes: ["S", "M", "L", "XL"], colors: ["Indigo", "Rust", "Ivory"], description: "A handloom-woven kurti with natural texture and dye — comfortable, breathable, distinctly artisanal." },
  { id: "p8", name: "Women's Embroidered Suit Set", slug: "womens-embroidered-suit-set", categorySlug: "womens-ethnic-wear", subCategory: "Suit Sets", price: 2199, mrp: 2899, image: "https://images.unsplash.com/photo-1610189844772-b7d81a9c26db?q=80&w=900&auto=format&fit=crop", isFeatured: true, fabric: "Cotton Blend", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Teal", "Wine", "Mustard"], description: "A three-piece embroidered suit set with matching dupatta — occasion-ready ethnic elegance." },
  { id: "p9", name: "Women's Daily Wear Kurti", slug: "womens-daily-wear-kurti", categorySlug: "womens-ethnic-wear", subCategory: "Kurtis", price: 799, mrp: 999, image: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&w=900&auto=format&fit=crop", fabric: "Rayon", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["Green", "Maroon", "Navy", "Black"], description: "A comfortable everyday kurti in easy-care rayon, perfect for work and daily wear." },
  { id: "p10", name: "Women's Linen Suit Set", slug: "womens-linen-suit-set", categorySlug: "linen-collection", subCategory: "Women's Linen Suits", price: 2399, mrp: 2999, image: "https://images.unsplash.com/photo-1592878849122-5c9b0d0d7f4e?q=80&w=900&auto=format&fit=crop", isNew: true, fabric: "Linen Cotton Blend", sizes: ["S", "M", "L", "XL"], colors: ["Sand", "Sage", "Off White"], description: "A breezy linen suit set designed for warm days without compromising on elegance." },
  { id: "p11", name: "Leather Finish Belt", slug: "leather-finish-belt", categorySlug: "accessories", subCategory: "Belts", price: 599, image: "https://images.unsplash.com/photo-1624222247344-550fb60583dc?q=80&w=900&auto=format&fit=crop", fabric: "Vegan Leather", colors: ["Black", "Brown", "Tan"], description: "A classic leather-finish belt with a brushed metal buckle — the finishing touch to any outfit." },
  { id: "p12", name: "Handwoven Cotton Stole", slug: "handwoven-cotton-stole", categorySlug: "accessories", subCategory: "Scarves & Stoles", price: 449, image: "https://images.unsplash.com/photo-1601924379392-ecff2a659c56?q=80&w=900&auto=format&fit=crop", isNew: true, fabric: "Handloom Cotton", colors: ["Multicolor"], description: "A lightweight handwoven stole with traditional border detailing." },
  { id: "p13", name: "Men's Formal Cotton Shirt", slug: "mens-formal-cotton-shirt", categorySlug: "mens-wear", subCategory: "Shirts", price: 1099, mrp: 1399, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=900&auto=format&fit=crop", fabric: "Cotton", sizes: ["S", "M", "L", "XL", "XXL"], colors: ["White", "Blue", "Grey"], description: "A crisp cotton formal shirt tailored for an all-day comfortable fit." },
  { id: "p14", name: "Kids Winter Co-ord Set", slug: "kids-winter-coord-set", categorySlug: "kids-wear", subCategory: "Winter Wear", price: 1199, mrp: 1599, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=900&auto=format&fit=crop", isNew: true, fabric: "Fleece Blend", sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"], colors: ["Grey", "Navy", "Maroon"], description: "A warm, cozy co-ord set for the cold months, designed for everyday play." },
];

export const getProductsByCategory = (slug: string) => products.filter((p) => p.categorySlug === slug);
export const getFeaturedProducts = () => products.filter((p) => p.isFeatured);
export const getNewArrivals = () => products.filter((p) => p.isNew);
export const getCategoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);

// ─────────────────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  { id: "t1", name: "Anita Srivastava", location: "Kerakat, Jaunpur", rating: 5, text: "The quality of Khadi kurtas here is unmatched — and the staff always help us pick the right size for the kids. Our go-to store for every festival.", category: "Khadi & Handloom" },
  { id: "t2", name: "Rajesh Kumar", location: "Jaunpur City", rating: 5, text: "Bought linen shirts for the whole family before a wedding. Premium fabric, honest pricing, and they even helped with alterations same day.", category: "Linen Collection" },
  { id: "t3", name: "Priya & Rohit Verma", location: "Machhlishahr", rating: 5, text: "Finally a store near Jaunpur with proper baby and kids products — we don't need to travel to the city anymore. Highly recommend for new parents.", category: "Baby Products" },
  { id: "t4", name: "Sunita Devi", location: "Kerakat", rating: 5, text: "Beautiful kurti and suit collection, very reasonably priced. The staff is patient and never pushy — a rare thing these days.", category: "Women's Ethnic Wear" },
  { id: "t5", name: "Amit Tiwari", location: "Jaunpur", rating: 4, text: "Great range of men's ethnic wear for the festive season. WhatsApp enquiry was answered within minutes, very convenient.", category: "Men's Wear" },
];

// ─────────────────────────────────────────────────────────
// BLOG
// ─────────────────────────────────────────────────────────
export const blogPosts: BlogPost[] = [
  { slug: "how-to-choose-khadi-fabric", title: "How to Choose the Right Khadi Fabric This Season", excerpt: "A quick guide to identifying authentic Khadi, understanding weave quality, and picking the right weight for the weather.", content: "Khadi has been at the heart of Black & Brown since we opened our doors. In this guide, we walk through what makes handspun Khadi different from mill-made cotton, how to check for genuine handloom texture, and which weights work best for Jaunpur's climate across the year. Look for irregular slubs in the weave — that's the signature of hand-spinning, not a flaw. Lighter Khadi (around 100-120 GSM) suits daily summer wear, while a heavier weave holds its shape better for festive kurtas.", coverImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200&auto=format&fit=crop", author: "Black & Brown Team", date: "2026-06-02", readTime: "4 min read", category: "Fabric Guide" },
  { slug: "linen-care-guide", title: "Linen Care 101: Keeping Your Linens Fresh All Summer", excerpt: "Simple do's and don'ts to keep your linen shirts and suits looking sharp wash after wash.", content: "Linen rewards a light touch. Wash in cool water on a gentle cycle, avoid high-heat drying, and iron while slightly damp for the cleanest finish. A little wrinkling is part of linen's natural character — you don't need to fight it. Store folded rather than on hangers to avoid stretching at the shoulders, and always spot-test any stain remover on an inside seam first.", coverImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop", author: "Black & Brown Team", date: "2026-05-18", readTime: "3 min read", category: "Fabric Care" },
  { slug: "festive-dressing-guide-family", title: "A Festive Dressing Guide for the Whole Family", excerpt: "Coordinating outfits for parents and kids without matching too literally — our styling notes for this festive season.", content: "Festive dressing doesn't have to mean identical outfits. This season we're suggesting a shared colour family instead — think mustard, maroon and deep teal running across the men's kurta, the kids' festive set and the women's suit, so the family photos look coordinated without being costume-like. Visit the showroom and our staff will help put full family looks together, from Khadi kurtas to kids' Anarkali frocks.", coverImage: "https://images.unsplash.com/photo-1622290291165-433939bb3ac8?q=80&w=1200&auto=format&fit=crop", author: "Black & Brown Team", date: "2026-04-30", readTime: "5 min read", category: "Styling" },
];

// ─────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────
export const faqItems: FAQItem[] = [
  { question: "Where is BLACK & BROWN showroom located?", answer: "We are located at Saraibiru Chauraha (Beside Pahalwan Baba), Kerakat, Jaunpur, Uttar Pradesh – 222142. Use the map on our Contact page for turn-by-turn navigation." },
  { question: "What are your store timings?", answer: "We're open Monday to Saturday from 10:30 AM to 9:00 PM, and Sunday from 11:00 AM to 8:00 PM." },
  { question: "Do you deliver outside Kerakat?", answer: "Currently we serve walk-in customers and take WhatsApp enquiries for nearby cities and rural areas. Online ordering with delivery is coming soon — join our newsletter to be the first to know." },
  { question: "Can I enquire about a product before visiting?", answer: "Yes — tap the WhatsApp button on any product or use the floating WhatsApp icon to send us a message with the product name. We'll confirm availability, price and sizes instantly." },
  { question: "Do you sell footwear?", answer: "No, BLACK & BROWN currently specializes exclusively in apparel — kids wear, baby products, men's wear, women's ethnic wear, linen, Khadi & handloom, and accessories. We do not stock footwear." },
  { question: "Do you offer alterations?", answer: "Yes, basic alterations are available in-store, often on the same day depending on the piece." },
];

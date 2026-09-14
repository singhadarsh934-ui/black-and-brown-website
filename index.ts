export interface Category {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  bannerImage: string;
  subCategories: string[];
  seoTitle: string;
  seoDescription: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  subCategory: string;
  price: number;
  mrp?: number;
  image: string;
  images?: string[];
  isNew?: boolean;
  isFeatured?: boolean;
  tags?: string[];
  fabric?: string;
  sizes?: string[];
  colors?: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  category?: string;
  avatar?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StoreInfo {
  brandName: string;
  tagline: string;
  address: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  phone: string;
  whatsapp: string;
  email: string;
  mapEmbedSrc: string;
  mapLink: string;
  instagram: string;
  facebook: string;
  timings: { day: string; hours: string }[];
}

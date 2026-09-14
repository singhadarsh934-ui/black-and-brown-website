import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { storeInfo } from "@/lib/data";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions | BLACK & BROWN",
  description: "Terms and Conditions for the BLACK & BROWN website, Kerakat, Jaunpur.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-luxury max-w-3xl prose prose-neutral prose-headings:font-display">
        <h1>Terms &amp; Conditions</h1>
        <p>Last updated: {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>

        <h2>1. About This Website</h2>
        <p>
          This website is operated by BLACK & BROWN, a fashion showroom located
          at {storeInfo.address}, {storeInfo.city}, {storeInfo.district},{" "}
          {storeInfo.state} – {storeInfo.pincode}. It is intended to showcase our
          collections and assist customers with enquiries; purchases are currently
          completed in-store or confirmed via WhatsApp.
        </p>

        <h2>2. Product Information</h2>
        <p>
          We make every effort to ensure product images, descriptions and prices
          are accurate. However, actual products may vary slightly in colour or
          finish due to fabric batches and photography/lighting conditions.
          Stock availability is confirmed at the time of your visit or enquiry.
        </p>

        <h2>3. Pricing</h2>
        <p>
          Prices displayed are indicative and may be revised without prior notice.
          Please confirm the final price with our team before purchase.
        </p>

        <h2>4. WhatsApp & Contact Enquiries</h2>
        <p>
          Enquiries made through WhatsApp or our contact form do not constitute a
          confirmed order until acknowledged by our team.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content on this website, including images, text and the BLACK &amp;
          BROWN brand name and logo, is the property of BLACK &amp; BROWN and may
          not be reproduced without permission.
        </p>

        <h2>6. Governing Law</h2>
        <p>
          These terms are governed by the laws of India and subject to the
          jurisdiction of the courts in Jaunpur, Uttar Pradesh.
        </p>

        <h2>7. Contact</h2>
        <p>
          For any questions about these terms, reach us at{" "}
          <a href={`mailto:${storeInfo.email}`}>{storeInfo.email}</a>.
        </p>
      </div>
    </section>
  );
}

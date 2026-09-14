"use client";
import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NewsletterForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // Hook this up to your email provider (Mailchimp / Brevo / Google Sheet via API route)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-gold">
        <Check className="h-4 w-4" /> Thanks! You&apos;re on the list.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
      <div
        className={cn(
          "flex flex-1 items-center gap-2 rounded-full border px-5 py-3",
          variant === "dark" ? "border-ivory/20 bg-ivory/5" : "border-espresso-200 bg-white"
        )}
      >
        <Mail className={cn("h-4 w-4", variant === "dark" ? "text-gold" : "text-espresso-400")} />
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            "w-full bg-transparent text-sm outline-none",
            variant === "dark" ? "text-ivory placeholder:text-ivory/40" : "text-ink placeholder:text-espresso-400"
          )}
        />
      </div>
      <button type="submit" className="btn-primary shrink-0">
        Subscribe
      </button>
    </form>
  );
}

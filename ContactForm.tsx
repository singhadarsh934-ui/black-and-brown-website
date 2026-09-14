"use client";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send, MessageCircle } from "lucide-react";
import { storeInfo } from "@/lib/data";
import { whatsappLink } from "@/lib/utils";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const sendToWhatsApp = () => {
    const text = `Hi BLACK & BROWN, my name is ${form.name || "—"} (${form.phone || "—"}).\n\n${form.message || "I'd like to know more about your collection."}`;
    window.open(whatsappLink(storeInfo.whatsapp, text), "_blank");
  };

  return (
    <div className="card-luxury p-7">
      <h3 className="font-display text-xl text-ink">Send Us a Message</h3>
      <p className="mt-1 text-sm text-espresso-500">
        Fill this in and we'll open WhatsApp with your message ready to send.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendToWhatsApp();
        }}
        className="mt-5 space-y-4"
      >
        <input
          name="name"
          required
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-espresso-200 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
        />
        <input
          name="phone"
          required
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-xl border border-espresso-200 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="What are you looking for?"
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-espresso-200 bg-white px-4 py-3 text-sm outline-none focus:border-gold"
        />
        <button type="submit" className="btn-whatsapp w-full">
          <MessageCircle className="h-4 w-4" /> Send via WhatsApp <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}

"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("submitMessage");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full px-4 py-16">
      <div className="mx-auto max-w-md flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center">header</h1>
        <p className="text-center text-sm text-neutral-600">description</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-current rounded-lg focus:outline-none focus:ring-2 focus:ring-current"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-current rounded-lg focus:outline-none focus:ring-2 focus:ring-current"
            required
          />
          <textarea
            name="message"
            placeholder="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-current rounded-lg focus:outline-none focus:ring-2 focus:ring-current resize-none"
            rows={5}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-xl border border-current text-sm font-medium hover:bg-current hover:text-white transition"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
}

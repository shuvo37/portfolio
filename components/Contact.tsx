"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";

const inputCls =
  "w-full rounded-lg border border-line bg-bg px-3 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition focus:border-accent";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  // Static site: the form opens the visitor's email app with the message filled in.
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading
        white="Let's"
        accent="Connect"
        sub="I am open to junior .NET and software engineering roles. Send me a message."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glow-card h-full p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${profile.email}`}
                className="block rounded-lg border border-line bg-bg p-4 transition hover:border-accent/60"
              >
                <p className="text-xs text-slate-500">Email</p>
                <p className="break-all text-sm text-white">{profile.email}</p>
              </a>
              <a
                href={`tel:${profile.phoneLink}`}
                className="block rounded-lg border border-line bg-bg p-4 transition hover:border-accent/60"
              >
                <p className="text-xs text-slate-500">Phone</p>
                <p className="text-sm text-white">{profile.phone}</p>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-line bg-bg p-4 transition hover:border-accent/60"
              >
                <p className="text-xs text-slate-500">GitHub</p>
                <p className="text-sm text-white">github.com/shuvo37</p>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-line bg-bg p-4 transition hover:border-accent/60"
              >
                <p className="text-xs text-slate-500">LinkedIn</p>
                <p className="text-sm text-white">Mehedi Hasan Shuvo</p>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-3" delay={0.12}>
          <form onSubmit={onSubmit} className="glow-card space-y-4 p-6">
            <h3 className="text-lg font-semibold text-white">Send a Message</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-300">Name *</label>
                <input required className={inputCls} placeholder="Your full name" value={form.name} onChange={set("name")} />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-300">Email *</label>
                <input
                  required
                  type="email"
                  className={inputCls}
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={set("email")}
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">Subject *</label>
              <input required className={inputCls} placeholder="What's this about?" value={form.subject} onChange={set("subject")} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-300">Message *</label>
              <textarea
                required
                rows={5}
                className={inputCls}
                placeholder="Tell me about the role or project..."
                value={form.message}
                onChange={set("message")}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition hover:brightness-110"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

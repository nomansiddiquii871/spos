"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Send,
  CheckCircle,
} from "lucide-react";
import { Container, SectionPill, SectionHeader, PrimaryButton, GhostButton } from "@/components/ui";

const channels = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "Mon–Sat, 8AM–8PM PT",
    meta: "888-000-1234",
    href: "tel:8880001234",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "We reply within 2 hours",
    meta: "support@clovpay.com",
    href: "mailto:support@clovpay.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    desc: "Headquarters",
    meta: "246 E Blueridge Ave, Orange CA",
    href: "#",
  },
];

const reasons = [
  "Sales Inquiry",
  "Product Demo",
  "Partnership",
  "Technical Support",
  "Billing",
  "Something Else",
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    reason: reasons[0],
    message: "",
  });

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4500);
    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      reason: reasons[0],
      message: "",
    });
  };

  return (
    <>
      <section className="relative pt-28 md:pt-36 pb-16 hero-glow">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <div className="reveal">
              <SectionPill>
                <MessageSquare size={14} className="text-[#1FA7A1]" />
                Get in Touch
              </SectionPill>
            </div>
            <h1 className="reveal mt-6 text-[42px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="text-gradient">Let&apos;s Build</span>
              <br />
              Something Great
            </h1>
            <p className="reveal mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
              Have a question, need a demo, or want to discuss a custom setup?
              Our team typically replies within 2 hours.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="reveal group rounded-2xl border border-white/8 bg-[#0D1324] p-6 hover:border-[#1FA7A1]/50 hover:-translate-y-1 transition"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1FA7A1] to-[#0F6F73]">
                  <c.icon className="h-5 w-5 text-white" />
                </span>
                <div className="mt-4 text-lg font-bold text-white">{c.title}</div>
                <div className="mt-1 text-sm text-white/60">{c.desc}</div>
                <div className="mt-3 text-sm font-semibold text-gradient break-words">
                  {c.meta}
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="reveal lg:col-span-3 rounded-3xl border border-white/10 bg-[#0D1324] p-6 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Send us a message
              </h2>
              <p className="mt-2 text-white/65 text-sm">
                Fill the form and a human (really) will get back to you shortly.
              </p>

              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Full name"
                    required
                    value={form.name}
                    onChange={(v) => update("name", v)}
                    placeholder="Jane Doe"
                  />
                  <Field
                    label="Email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    placeholder="jane@company.com"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Phone"
                    type="tel"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                    placeholder="+1 (555) 000-0000"
                  />
                  <Field
                    label="Company"
                    value={form.company}
                    onChange={(v) => update("company", v)}
                    placeholder="Acme Retail Co."
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-white/85">
                    Reason for contact
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {reasons.map((r) => (
                      <button
                        type="button"
                        key={r}
                        onClick={() => update("reason", r)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold border transition ${
                          form.reason === r
                            ? "bg-gradient-to-r from-[#1FA7A1] to-[#0F6F73] border-transparent text-white"
                              : "border-white/12 bg-white/5 text-white/80 hover:bg-white/10"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-white/85">
                    How can we help? <span className="text-[#EF6B8C]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your business and what you're looking for…"
                    className="mt-2 w-full rounded-xl bg-[#0A1020] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#1FA7A1] resize-y"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1FA7A1] to-[#0F6F73] px-6 py-3 font-semibold text-white btn-glow hover:brightness-110 transition"
                  >
                    <Send size={16} /> Send Message
                  </button>
                  <p className="text-xs text-white/55">
                    By submitting, you agree to our Privacy Policy.
                  </p>
                </div>

                {sent && (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 flex items-center gap-3 text-emerald-300 text-sm">
                    <CheckCircle size={16} />
                    Thanks! Your message was sent — we&apos;ll be in touch soon.
                  </div>
                )}
              </form>
            </div>

            <aside className="lg:col-span-2 space-y-6">
              <div className="reveal rounded-3xl border border-white/10 bg-[#0D1324] overflow-hidden">
                <div className="relative h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?auto=format&fit=crop&w=1200&q=80"
                    alt="Office"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1324] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">Headquarters</h3>
                  <p className="mt-2 text-sm text-white/70">
                    246 E Blueridge Ave
                    <br />
                    Orange, CA 92865, USA
                  </p>
                </div>
              </div>

              <div className="reveal rounded-3xl border border-white/10 bg-[#0D1324] p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1FA7A1] to-[#0F6F73]">
                    <Clock className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    Business Hours
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/75">
                  <li className="flex justify-between">
                    <span>Mon – Fri</span>
                    <span className="text-white">8:00 AM – 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM – 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white/50">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="reveal rounded-3xl border border-white/10 bg-gradient-to-br from-[#0D1324] to-[#0A1430] p-6">
                <Calendar className="h-7 w-7 text-[#1FA7A1]" />
                <h3 className="mt-3 text-lg font-bold text-white">
                  Prefer a quick call?
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Book a 30-minute walkthrough with a product expert.
                </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <PrimaryButton href="#">Schedule a Call</PrimaryButton>
                  <GhostButton href="/contact">Contact Support</GhostButton>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <SectionHeader
            gradientText="Find"
            rest="Us"
            subtitle="Drop by our headquarters or any of our regional offices."
          />
          <div className="reveal overflow-hidden rounded-3xl border border-white/10 bg-[#0D1324] aspect-[16/9]">
            <iframe
              title="Map"
              className="h-full w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=246+E+Blueridge+Ave,+Orange,+CA+92865&output=embed"
              style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(0.7)" }}
            />
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-white/85">
        {label}
        {required && <span className="text-[#EF6B8C]"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
                    className="mt-2 w-full rounded-xl bg-[#0A1020] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#1FA7A1]"
      />
    </div>
  );
}

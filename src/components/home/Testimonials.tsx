"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Users,
  DollarSign,
  Quote,
} from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

type Story = {
  category: string;
  business: string;
  image: string;
  stats: { a: string; b: string; c: string };
  metrics: { icon: React.ReactNode; label: string }[];
  quote: string;
  author: string;
  role: string;
};

const stories: Story[] = [
  {
    category: "Food & Beverage",
    business: "Brew & Bean Coffee",
    image:
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=80",
    stats: { a: "+45%", b: "+60%", c: "98%" },
    metrics: [
      { icon: <TrendingUp size={16} />, label: "300% faster checkout" },
      { icon: <DollarSign size={16} />, label: "$2.5M annual revenue" },
      { icon: <Users size={16} />, label: "50K+ happy customers" },
    ],
    quote:
      "SPOS transformed how we run our café. The real-time insights alone have been worth it — we run a leaner, happier team now.",
    author: "Sarah Chen",
    role: "Owner",
  },
  {
    category: "Retail",
    business: "Spark Electronics",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    stats: { a: "+35%", b: "+75%", c: "99%" },
    metrics: [
      { icon: <TrendingUp size={16} />, label: "2× average order value" },
      { icon: <DollarSign size={16} />, label: "$5M online + offline" },
      { icon: <Users size={16} />, label: "80K monthly footfall" },
    ],
    quote:
      "One dashboard, every store. We finally have a single source of truth for inventory and sales.",
    author: "Miguel Torres",
    role: "CEO",
  },
  {
    category: "Restaurant",
    business: "Urban Eats",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    stats: { a: "+50%", b: "+40%", c: "97%" },
    metrics: [
      { icon: <TrendingUp size={16} />, label: "40% faster service" },
      { icon: <DollarSign size={16} />, label: "$1.8M yearly growth" },
      { icon: <Users size={16} />, label: "30K loyalty members" },
    ],
    quote:
      "From table management to kitchen routing, SPOS just works. Our team was up and running on day one.",
    author: "Liam Patel",
    role: "Manager",
  },
  {
    category: "Fitness",
    business: "FitNation Gym",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    stats: { a: "+28%", b: "+52%", c: "96%" },
    metrics: [
      { icon: <TrendingUp size={16} />, label: "25% retention lift" },
      { icon: <DollarSign size={16} />, label: "$900K/yr membership" },
      { icon: <Users size={16} />, label: "12K active members" },
    ],
    quote:
      "Memberships, class bookings and the shop — all under one roof. Our front desk has never been calmer.",
    author: "Ava Johnson",
    role: "Operations Lead",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const s = stories[idx];

  const prev = () => setIdx((i) => (i - 1 + stories.length) % stories.length);
  const next = () => setIdx((i) => (i + 1) % stories.length);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          pill="Success Stories"
          gradientText="Real Businesses,"
          rest="Real Results"
          subtitle="See how teams around the world use SPOS to ship better customer experiences."
        />

        <div className="reveal grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="relative overflow-hidden rounded-3xl aspect-[4/3] sm:aspect-[4/5] lg:aspect-auto min-h-[320px] sm:min-h-[420px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.business}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-5 left-5 flex flex-col gap-2">
              {Object.entries(s.stats).map(([k, v]) => (
                <span
                  key={k}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md"
                >
                  {v}{" "}
                  <span className="text-white/70 font-normal">
                    {k === "a"
                      ? "Sales"
                      : k === "b"
                      ? "Efficiency"
                      : "Satisfaction"}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0D1324] p-8 sm:p-10 flex flex-col">
            <span className="text-xs uppercase tracking-widest text-[#4A73FF] font-semibold">
              {s.category}
            </span>
            <h3 className="mt-2 text-3xl font-extrabold text-white">
              {s.business}
            </h3>

            <ul className="mt-6 space-y-3">
              {s.metrics.map((m, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-white/85 text-sm"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#3355FF]/15 text-[#4A73FF]">
                    {m.icon}
                  </span>
                  {m.label}
                </li>
              ))}
            </ul>

            <blockquote className="mt-8 border-l-[3px] border-[#3355FF] pl-5 text-white/80 italic">
              <Quote size={22} className="text-[#4A73FF] mb-2" />
              {s.quote}
            </blockquote>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white">{s.author}</div>
                <div className="text-sm text-white/60">
                  {s.role}, {s.business}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3355FF] to-[#4A73FF] text-white hover:brightness-110 transition"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3355FF] to-[#4A73FF] text-white hover:brightness-110 transition"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "bg-[#4A73FF] w-8" : "bg-white/20 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

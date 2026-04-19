"use client";

import { useState } from "react";
import { Check, DollarSign } from "lucide-react";
import { Container, SectionHeader, PrimaryButton } from "@/components/ui";

const tabs = ["Rent", "Lease", "Purchase"] as const;
type Tab = (typeof tabs)[number];

type Plan = {
  name: string;
  image: string;
  tagline: string;
  price: Record<Tab, string>;
  popular?: boolean;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Clover Duo",
    image:
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=800&q=80",
    tagline: "Dual-screen checkout powerhouse.",
    price: { Rent: "$180", Lease: "$150", Purchase: "$1,999" },
    features: [
      "Dual-screen checkout",
      "Integrated receipt printer",
      "Secure payment processing",
      "Employee management",
    ],
  },
  {
    name: "Clover Flex",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    tagline: "Portable handheld POS.",
    price: { Rent: "$80", Lease: "$65", Purchase: "$799" },
    popular: true,
    features: [
      "Portable handheld",
      "Built-in printer & scanner",
      "Accepts chip / tap / swipe",
      "Offline mode",
    ],
  },
  {
    name: "Clover Mini",
    image:
      "https://images.unsplash.com/photo-1563012130-c4a66f24f6e8?auto=format&fit=crop&w=800&q=80",
    tagline: "Space-saving countertop POS.",
    price: { Rent: "$80", Lease: "$65", Purchase: "$699" },
    features: [
      "Space-saving design",
      "Touchscreen interface",
      "Fast, secure transactions",
      "Receipt printer",
    ],
  },
];

export default function Pricing() {
  const [tab, setTab] = useState<Tab>("Rent");

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          pill={
            <span className="flex items-center gap-1.5">
              <DollarSign size={13} className="text-[#4A73FF]" /> Pricing Plans
            </span>
          }
          gradientText="Simple,"
          rest="Transparent Pricing"
          subtitle="Flexible plans to match how your business likes to buy hardware."
        />

        <div className="flex justify-center mb-10 reveal">
          <div className="inline-flex rounded-full border border-white/10 bg-[#0D1324] p-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-5 sm:px-6 py-2 rounded-full text-sm font-semibold transition ${
                  tab === t
                    ? "bg-gradient-to-r from-[#3355FF] to-[#4A73FF] text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`reveal relative rounded-2xl border bg-[#0D1324] p-7 sm:p-8 transition hover:-translate-y-1 ${
                p.popular
                  ? "border-[#3355FF]/60 shadow-[0_12px_60px_rgba(51,85,255,0.18)]"
                  : "border-white/8 hover:border-white/15"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#3355FF] to-[#4A73FF] px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}

              <div className="relative h-40 w-full rounded-xl overflow-hidden bg-gradient-to-br from-[#0A1020] to-[#151a34] mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-white">{p.name}</h3>
              <p className="mt-1 text-sm text-white/60">{p.tagline}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-white">
                  {p.price[tab]}
                </span>
                <span className="text-sm text-white/50">
                  {tab === "Purchase" ? "" : "/mo"}
                </span>
              </div>

              <ul className="mt-5 space-y-3">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 text-sm text-white/85"
                  >
                    <Check size={16} className="text-[#4A73FF]" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <PrimaryButton href="/contact" full>
                  {tab} Now
                </PrimaryButton>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

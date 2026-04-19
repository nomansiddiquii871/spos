"use client";

import { useState } from "react";
import { Zap, Gauge, ShieldCheck, LineChart, Globe, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

type Panel = {
  title: string;
  desc: string;
  image: string;
  icon: LucideIcon;
};

const panels: Panel[] = [
  {
    title: "Ultra-Fast Checkout",
    desc: "Sub-second transactions powered by our real-time payments engine.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    icon: Gauge,
  },
  {
    title: "Bank-Grade Security",
    desc: "PCI-DSS Level 1 compliant with end-to-end encryption.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80",
    icon: ShieldCheck,
  },
  {
    title: "Real-Time Analytics",
    desc: "Live dashboards for every metric that moves your business.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    icon: LineChart,
  },
  {
    title: "Global Acceptance",
    desc: "Accept cards, wallets and local methods in 150+ countries.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    icon: Globe,
  },
  {
    title: "Team Collaboration",
    desc: "Role-based access, shift tracking and staff performance built in.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    icon: Users,
  },
  {
    title: "Smart Integrations",
    desc: "Plug into QuickBooks, Shopify, Stripe and 80+ more tools.",
    image:
      "https://images.unsplash.com/photo-1551288049-48b94d0e7e1e?auto=format&fit=crop&w=1400&q=80",
    icon: Zap,
  },
];

export default function CapabilitiesGallery() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          pill={
            <span className="flex items-center gap-1.5">
              <Zap size={13} className="text-[#4A73FF]" /> Advanced Capabilities
            </span>
          }
          gradientText="Powered"
          rest="by Innovation"
          subtitle="Explore what makes SPOS the most capable POS platform on the market."
        />

        <div className="reveal hidden md:flex gap-3 h-[460px] w-full overflow-hidden rounded-3xl">
          {panels.map((p, i) => {
            const isActive = i === active;
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                role="button"
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`relative overflow-hidden rounded-2xl transition-[flex] duration-500 ease-out cursor-pointer ${
                  isActive ? "flex-[5]" : "flex-[1]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                      : "bg-[#070B1A]/70"
                  }`}
                />
                {!isActive && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                  </div>
                )}
                {isActive && (
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3355FF] to-[#8A5FFF] mb-4">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base text-white/80 max-w-md">
                      {p.desc}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden grid gap-4">
          {panels.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="reveal relative h-56 overflow-hidden rounded-2xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#3355FF] to-[#8A5FFF] mb-3">
                    <Icon className="h-4 w-4 text-white" />
                  </span>
                  <h3 className="text-xl font-extrabold text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

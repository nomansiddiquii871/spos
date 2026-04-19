import {
  Store,
  ShoppingCart,
  Globe2,
  Gift,
  Cloud,
  Headphones,
  Check,
  ArrowRight,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Container,
  IconTile,
  SectionHeader,
} from "@/components/ui";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

const features: Feature[] = [
  {
    icon: Store,
    title: "In-Store Payments",
    description:
      "Accept every payment method with frictionless, lightning-fast checkout at the counter.",
    bullets: ["Chip, tap & swipe", "Offline-ready mode", "Receipt printing"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "Unify online and offline commerce with real-time inventory sync.",
    bullets: ["Online store builder", "Unified inventory", "Multi-channel"],
  },
  {
    icon: Globe2,
    title: "World of Payments",
    description:
      "Multi-currency processing that scales globally from day one.",
    bullets: ["150+ currencies", "Global acquiring", "FX auto-convert"],
  },
  {
    icon: Gift,
    title: "Loyalty & Rewards",
    description:
      "Grow retention with automated loyalty, promotions and gift cards.",
    bullets: ["Points & tiers", "Targeted offers", "Gift card sales"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Enterprise-grade cloud with 99.99% uptime and bank-level encryption.",
    bullets: ["Auto-scaling", "PCI-DSS secure", "Realtime backups"],
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "24/7 human support whenever you need us — chat, email or phone.",
    bullets: ["24/7 live agents", "<2 min response", "Dedicated onboarding"],
  },
];

export default function CoreFeatures() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          pill={
            <span className="flex items-center gap-1.5">
              <Zap size={13} className="text-[#4A73FF]" /> Core Features
            </span>
          }
          gradientText="Powerful Features"
          rest="for Modern Businesses"
          subtitle="Everything you need to run, grow and scale your commerce operation — thoughtfully engineered into a single unified platform."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal group rounded-2xl border border-white/8 bg-[#0D1324] p-7 sm:p-8 transition hover:border-white/15 hover:-translate-y-1"
            >
              <IconTile icon={f.icon} variant="blue" />
              <h3 className="mt-6 text-xl font-bold text-white">{f.title}</h3>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                {f.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#3355FF]/15">
                      <Check size={12} className="text-[#4A73FF]" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A73FF] hover:text-[#6FA8FF] transition"
              >
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

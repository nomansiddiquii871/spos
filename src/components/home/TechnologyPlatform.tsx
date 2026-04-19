import {
  ShoppingCart,
  Headset,
  CreditCard,
  BarChart3,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Container,
  IconTile,
  SectionHeader,
} from "@/components/ui";

type Card = {
  icon: LucideIcon;
  variant: "blue" | "green" | "pink" | "purple";
  title: string;
  description: string;
  tags: string[];
};

const cards: Card[] = [
  {
    icon: ShoppingCart,
    variant: "blue",
    title: "E-Commerce Solutions",
    description:
      "Sell online with a store that stays perfectly in sync with your POS.",
    tags: ["Online Payments", "Seamless Checkout"],
  },
  {
    icon: Headset,
    variant: "green",
    title: "Local Customer Support",
    description:
      "Real humans, available 24/7 — from onboarding to advanced troubleshooting.",
    tags: ["24/7 Support", "Human Assistance"],
  },
  {
    icon: CreditCard,
    variant: "pink",
    title: "International Acceptance",
    description:
      "Take payments in 150+ currencies with automatic FX conversion.",
    tags: ["Multi-Currency", "Global Reach"],
  },
  {
    icon: BarChart3,
    variant: "purple",
    title: "Reporting & Analytics",
    description:
      "Intelligent dashboards that turn sales data into clear, actionable decisions.",
    tags: ["Real-Time", "Data-Driven"],
  },
];

export default function TechnologyPlatform() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          pill={
            <span className="flex items-center gap-1.5">
              <Zap size={13} className="text-[#4A73FF]" /> Technology Stack
            </span>
          }
          gradientText="Next-Generation"
          rest="Technology Platform"
          subtitle="A thoughtfully engineered stack that keeps your business one step ahead."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {cards.map((c) => (
            <div
              key={c.title}
              className="reveal group rounded-2xl border border-white/8 bg-[#0D1324] p-7 sm:p-8 transition hover:border-white/15"
            >
              <div className="flex items-start justify-between gap-4">
                <IconTile icon={c.icon} variant={c.variant} />
                <div className="flex flex-wrap gap-2 justify-end">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white group-hover:text-gradient transition">
                {c.title}
              </h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stats strip */}
        <div className="reveal mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { k: "99.9%", v: "System Uptime" },
            { k: "<50ms", v: "Response Time" },
            { k: "256-bit", v: "Encryption Level" },
            { k: "24/7", v: "Monitoring" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-4xl md:text-5xl font-extrabold text-gradient">
                {s.k}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-white/55">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

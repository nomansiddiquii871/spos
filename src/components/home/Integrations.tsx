import {
  Cloud,
  CreditCard,
  LineChart,
  ShoppingBag,
  Zap,
  Shield,
  Tag,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Container,
  SectionHeader,
  PrimaryButton,
  GhostButton,
} from "@/components/ui";

type Partner = { icon: LucideIcon; name: string; kind: string };

const partners: Partner[] = [
  { icon: Cloud, name: "AWS", kind: "Cloud" },
  { icon: CreditCard, name: "Stripe", kind: "Payments" },
  { icon: LineChart, name: "QuickBooks", kind: "Accounting" },
  { icon: ShoppingBag, name: "Shopify", kind: "E-Commerce" },
  { icon: Zap, name: "Salesforce", kind: "CRM" },
  { icon: Shield, name: "Microsoft", kind: "Enterprise" },
];

export default function Integrations() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          pill={
            <span className="flex items-center gap-1.5">
              <Tag size={13} className="text-[#4A73FF]" /> Partnerships
            </span>
          }
          gradientText="Powerful Integrations"
          rest="with Industry Leaders"
          subtitle="Connect SPOS with the tools your team already loves."
        />

        <div className="reveal relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0D1324] to-[#0A1430] p-8 md:p-12 mb-10">
          <div className="absolute inset-0 opacity-30">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#070B1A]/80" />
          </div>
          <div className="relative flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[CreditCard, ShoppingBag, Cloud, LineChart, Shield, Zap].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md"
                >
                  <Icon size={24} className="text-[#6FA8FF]" />
                </div>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-6 text-center hover:border-white/15 transition"
            >
              <p.icon
                size={28}
                className="mx-auto text-[#6FA8FF]"
                strokeWidth={1.7}
              />
              <div className="mt-3 text-sm font-semibold text-white">
                {p.name}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">{p.kind}</div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 rounded-2xl border border-white/10 bg-[#0D1324] p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need a Custom Integration?
          </h3>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Our team can build bespoke integrations tailored to your stack.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <PrimaryButton href="/business">Explore Integrations</PrimaryButton>
            <GhostButton href="/contact">Request Custom Integration</GhostButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

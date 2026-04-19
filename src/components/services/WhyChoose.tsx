import { Shield, Zap, Award, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

type Card = { icon: LucideIcon; title: string; description: string };

const items: Card[] = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and PCI-DSS compliance.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process transactions in under 2 seconds.",
  },
  {
    icon: Award,
    title: "Industry Leader",
    description: "#1 rated POS platform by business owners.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock assistance when you need it.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          gradientText="Why Choose"
          rest="SPOS?"
          subtitle="What sets us apart from the competition."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <div
              key={c.title}
              className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-8 text-center hover:border-white/15 transition"
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#3355FF]/15">
                <c.icon className="h-9 w-9 text-[#6FA8FF]" strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-white">{c.title}</h3>
              <p className="mt-3 text-sm text-white/65">{c.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

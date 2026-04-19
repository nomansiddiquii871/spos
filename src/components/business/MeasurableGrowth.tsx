import { TrendingUp, Users, DollarSign, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

type Stat = {
  icon: LucideIcon;
  stat: string;
  title: string;
  description: string;
  image: string;
};

const stats: Stat[] = [
  {
    icon: TrendingUp,
    stat: "+35%",
    title: "Increase Revenue",
    description:
      "Boost sales with faster checkout, targeted upselling and loyalty programs that keep customers coming back.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Users,
    stat: "92%",
    title: "Customer Retention",
    description:
      "Keep customers loyal with personalized experiences, smart rewards and data-driven engagement.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: DollarSign,
    stat: "-25%",
    title: "Reduce Costs",
    description:
      "Lower operating expense through automation, smart inventory and unified workflows.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: BarChart3,
    stat: "24/7",
    title: "Data-Driven Decisions",
    description:
      "Real-time dashboards and intelligent alerts help you act faster than the competition.",
    image:
      "https://images.unsplash.com/photo-1551288049-48b94d0e7e1e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function MeasurableGrowth() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          gradientText="Measurable"
          rest="Growth"
          subtitle="See how our POS system directly impacts your bottom line."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl aspect-[4/5] transition hover:-translate-y-1"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
              <div className="relative flex h-full flex-col items-center justify-center text-center p-6">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
                  <s.icon className="h-6 w-6 text-[#6FA8FF]" />
                </span>
                <div className="mt-4 text-4xl font-extrabold text-white">
                  {s.stat}
                </div>
                <h3 className="mt-2 text-lg font-bold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

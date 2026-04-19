import { Target, Award, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

const features: Feature[] = [
  {
    icon: Target,
    title: "Smart Analytics",
    description:
      "Get actionable insights into every corner of your operation with real-time, AI-enhanced reporting.",
    bullets: [
      "Real-time sales tracking",
      "Customer behavior analysis",
      "Predictive inventory alerts",
    ],
  },
  {
    icon: Award,
    title: "Customer Loyalty",
    description:
      "Build loyalty programs that customers actually use and keep coming back for.",
    bullets: [
      "Automated reward systems",
      "Personalized promotions",
      "Customer lifetime value tracking",
    ],
  },
  {
    icon: BarChart3,
    title: "Operational Efficiency",
    description:
      "Streamline operations from staffing to stock management — with zero spreadsheets.",
    bullets: [
      "Staff performance tracking",
      "Automated scheduling",
      "Cost optimization alerts",
    ],
  },
];

export default function GrowthFeatures() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          gradientText="Growth-Focused"
          rest="Features"
          subtitle="Every feature is designed to help your business succeed."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-8 hover:border-white/15 transition"
            >
              <f.icon
                className="h-9 w-9 text-[#6FA8FF]"
                strokeWidth={2}
              />
              <h3 className="mt-6 text-xl font-bold text-white">{f.title}</h3>
              <p className="mt-3 text-white/65 leading-relaxed">
                {f.description}
              </p>
              <ul className="mt-6 space-y-3">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-sm text-white/85"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#4A73FF]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

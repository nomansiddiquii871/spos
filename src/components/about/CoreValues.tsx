import {
  Star,
  Unlink,
  Clock,
  Briefcase,
  Zap,
  TrendingUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionPill } from "@/components/ui";

type Belief = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const beliefs: Belief[] = [
  {
    icon: Star,
    title: "Transparency first",
    description:
      "We explain every fee, every term, every tradeoff - before you sign anything. Surprises are bad for business and worse for trust.",
  },
  {
    icon: Unlink,
    title: "True independence",
    description:
      "We're not locked into any single processor. Our job is to find what's genuinely right for you - not what's easiest for us to sell.",
  },
  {
    icon: Clock,
    title: "Long-term relationships",
    description:
      "We measure our success by how long merchants stay with us - not how fast we close deals. Retention is our report card."
  },
  {
    icon: Briefcase,
    title: "SMB-focused",
    description:
      "We serve retail shops, restaurants, and service businesses — not enterprise giants. That focus means we actually understand your daily reality.",
  },
  {
    icon: Zap,
    title: "Friction-free setup",
    description:
      "From equipment to integrations, we handle the technical heavy lifting so you can focus on running your business from day one.",
  },
  {
    icon: TrendingUp,
    title: "Customer success",
    description:
      "Your growth drives everything we do. When your business wins, we win — it's that simple.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="reveal text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <SectionPill>
            <span className="text-[#1FA7A1]">•</span>
            WHAT WE STAND FOR
          </SectionPill>
          <h2 className="mt-7 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Built on a few simple beliefs
          </h2>
        </div>

        <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((belief) => (
            <div
              key={belief.title}
              className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-5 sm:p-6 hover:border-[#1FA7A1]/20 transition-colors"
            >
              <belief.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#1FA7A1]" strokeWidth={2} />
              <h3 className="mt-4 text-lg sm:text-xl font-bold text-white">
                {belief.title}
              </h3>
              <p className="mt-2.5 text-sm text-white/70 leading-relaxed">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

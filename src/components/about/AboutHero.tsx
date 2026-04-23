import { Rocket, Building2, DollarSign, Gauge, Globe } from "lucide-react";
import { Container, SectionPill, IconTile } from "@/components/ui";

const stats = [
  { icon: Building2, value: "500K+", label: "Active Businesses", variant: "blue" as const },
  { icon: DollarSign, value: "$2.5B+", label: "Transactions Processed", variant: "green" as const },
  { icon: Gauge, value: "99.9%", label: "System Uptime", variant: "pink" as const },
  { icon: Globe, value: "2", label: "Countries Served", variant: "purple" as const },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 hero-glow">
      <Container>
        <div className="relative text-center max-w-3xl mx-auto">
          <div className="reveal">
            <SectionPill>
              <Rocket size={14} className="text-[#1FA7A1]" />
              Our Story
            </SectionPill>
          </div>
          <h1 className="reveal mt-6 text-[38px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-gradient">Transforming Commerce</span>
            <br />
            One Transaction at a Time
          </h1>
          <p className="reveal mt-6 text-base sm:text-lg text-white/75 leading-relaxed">
            We&apos;re on a mission to put powerful commerce tools in the hands of
            every business — big or small, online or off.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-6 text-center"
            >
              <div className="flex justify-center">
                <IconTile icon={s.icon} variant={s.variant} />
              </div>
              <div className="mt-4 text-3xl md:text-4xl font-extrabold text-gradient">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

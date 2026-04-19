import { MapPin } from "lucide-react";
import { SectionPill } from "@/components/ui";

export default function EquipmentHero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 hero-glow">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <SectionPill>
            <MapPin size={14} className="text-[#4A73FF]" />
            Professional Grade Equipment
          </SectionPill>
        </div>
        <h1 className="reveal mt-6 text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="text-gradient">Premium POS</span>
          <br />
          Hardware Solutions
        </h1>
        <p className="reveal mt-6 text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
          Discover our comprehensive range of professional-grade POS equipment
          designed to meet the demands of modern businesses across every
          industry.
        </p>
      </div>
    </section>
  );
}

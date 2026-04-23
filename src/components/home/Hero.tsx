import { Zap, ArrowRight, Play, CreditCard, Globe, Building2, Award } from "lucide-react";
import Link from "next/link";
import { SectionPill } from "@/components/ui";

const stats = [
  { icon: CreditCard, value: "99.9%", label: "Uptime" },
  { icon: Building2, value: "Next-Day", label: "Funding" },
  { icon: Globe, value: "Multi-Location", label: "Sync" },
  { icon: Award, value: "100+", label: "Device Options" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 pb-16 md:pb-24">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=1600&q=80"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/10/24/136211-762294080_large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B1A]/95 via-[#070B1A]/75 to-[#070B1A]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B1A]/60 via-transparent to-[#070B1A]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="reveal">
            <SectionPill>
              <Zap size={14} className="text-[#1FA7A1]" />
              Trusted Payment Infrastructure
            </SectionPill>
          </div>

          <h1 className="reveal mt-6 text-[40px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-gradient">Empowering Merchants</span>
            <br />
            Across US with World-Class
            <br />
            Payment Tech.
          </h1>

          <p className="reveal mt-6 text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
            All-in-one payment solutions to streamline operations, accelerate
            growth, and secure every transaction.
          </p>

          <div className="reveal mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#1FA7A1] to-[#0F6F73] px-6 py-3.5 font-semibold text-white btn-glow hover:brightness-110 transition"
            >
              Get Started Today <ArrowRight size={18} />
            </Link>
            <Link
              href="/business"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition"
            >
              <Play size={16} /> Watch Demo
            </Link>
          </div>

          <div className="reveal mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <s.icon size={18} className="text-[#1FA7A1] mb-2" />
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

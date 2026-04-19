import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { SectionPill } from "@/components/ui";

export default function BusinessHero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B1A]/80 via-[#070B1A]/85 to-[#070B1A]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal">
          <SectionPill>
            <Rocket size={14} className="text-[#4A73FF]" />
            Business Growth Solutions
          </SectionPill>
        </div>
        <h1 className="reveal mt-6 text-[44px] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
          <span className="text-gradient">Grow Your</span>
          <br />
          Business
        </h1>
        <p className="reveal mt-6 text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
          Turn every transaction into an opportunity — smarter insights, deeper
          loyalty and operations that scale with you.
        </p>
        <div className="reveal mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#3355FF] to-[#4A73FF] px-6 py-3.5 font-semibold text-white btn-glow hover:brightness-110 transition"
          >
            Start Growing Today <ArrowRight size={18} />
          </Link>
          <Link
            href="#success"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition"
          >
            View Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}

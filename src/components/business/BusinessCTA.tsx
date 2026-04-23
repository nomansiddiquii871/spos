import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui";

export default function BusinessCTA() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="reveal rounded-[2rem] border border-[#1FA7A1]/10 bg-[radial-gradient(circle_at_top,rgba(31,167,161,0.18),transparent_58%),linear-gradient(180deg,#0E2A2E_0%,#0B1322_100%)] p-8 sm:p-10 md:p-14 text-center shadow-[0_18px_70px_rgba(0,0,0,0.28)]">
          <div className="inline-flex rounded-full border border-[#1FA7A1]/20 bg-[#0F1B33] px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#6ED3CC]">
            Let&apos;s Talk
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-white">Ready to Find Your</span>{" "}
            <span className="text-gradient">Perfect</span>
            <br />
            <span className="text-gradient">Processor?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-white/70">
            Whether you need better rates, better support, or a cleaner launch
            path, we&apos;ll help you choose the setup that fits your business.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1FA7A1] to-[#0F6F73] px-6 py-3.5 font-semibold text-white transition hover:brightness-110"
            >
              Get Your Free Quote <ArrowRight size={18} />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
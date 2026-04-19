"use client";

import { Sparkles, Bell, Star, TrendingUp, Lightbulb, Trophy } from "lucide-react";
import { Container, PrimaryButton } from "@/components/ui";

const benefits = [
  { icon: Lightbulb, title: "Industry Insights", desc: "Curated trends that matter" },
  { icon: Sparkles, title: "Product Updates", desc: "Latest features, first" },
  { icon: Trophy, title: "Success Stories", desc: "Learn from top operators" },
  { icon: Star, title: "Exclusive Content", desc: "Members-only guides" },
];

export default function Newsletter() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="reveal rounded-3xl border border-white/10 bg-gradient-to-br from-[#0D1324] to-[#0A1430] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                <span className="text-gradient">Stay Ahead</span>
                <br />
                of the Retail Revolution
              </h2>
              <p className="mt-4 text-white/70 max-w-md">
                Weekly insights, tips and the latest SPOS product updates —
                delivered to your inbox.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-lg bg-[#0A1020] border border-white/12 px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#3355FF]"
                />
                <PrimaryButton type="submit">Subscribe</PrimaryButton>
              </form>
              <p className="mt-3 text-xs text-white/50">
                No spam, ever. Unsubscribe in one click.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm text-white/70">
                <span className="inline-flex items-center gap-2">
                  <TrendingUp size={14} className="text-[#4A73FF]" /> 25K+
                  subscribers
                </span>
                <span className="inline-flex items-center gap-2">
                  <Star size={14} className="text-yellow-400" /> 4.9/5 rating
                </span>
                <span className="inline-flex items-center gap-2">
                  <Bell size={14} className="text-[#4A73FF]" /> Weekly updates
                </span>
              </div>
            </div>

            <div className="grid gap-3">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="flex items-center gap-4 rounded-xl border border-white/8 bg-[#0D1324] p-4"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#3355FF] to-[#8A5FFF]">
                    <b.icon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {b.title}
                    </div>
                    <div className="text-xs text-white/60">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

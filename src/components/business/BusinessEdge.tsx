import { Building2, ShieldCheck, Users, Clock3 } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const reasons = [
  {
    icon: Building2,
    title: "Multiple Processor Options",
    description:
      "We are not tied to one provider, so we can shop across partners to find the best fit for your business.",
  },
  {
    icon: ShieldCheck,
    title: "Completely Transparent",
    description:
      "We keep the process clear and walk you through every fee, term, and decision before you sign anything.",
  },
  {
    icon: Users,
    title: "Built for MSP Partners",
    description:
      "If you manage a book of merchants, our partner program gives you support and room to grow your portfolio.",
  },
  {
    icon: Clock3,
    title: "No Long-Term Lock-In",
    description:
      "We focus on service and fit, not contracts that keep merchants tied to the wrong solution.",
  },
];

export default function BusinessEdge() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          pill="Our Edge"
          gradientText="Why Work With"
          rest="Clovpay"
          subtitle="We act as your processor advocate, not the processor&apos;s rep."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="reveal rounded-3xl border border-white/10 bg-[#0D1324] p-7 sm:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0F1B33] text-[#1FA7A1]">
                  <reason.icon size={22} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/68">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
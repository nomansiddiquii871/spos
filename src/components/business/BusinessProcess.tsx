import { Container, SectionHeader } from "@/components/ui";

const steps = [
  {
    id: "01",
    title: "We Learn Your Business",
    description:
      "Tell us about your industry, monthly volume, and pain points so we can understand what actually matters for your setup.",
    tag: "Free consultation",
  },
  {
    id: "02",
    title: "We Match You to the Right Processor",
    description:
      "We compare vetted options and recommend the processor that best fits your rates, support needs, and growth goals.",
    tag: "Unbiased recommendation",
  },
  {
    id: "03",
    title: "You&apos;re Live in 48 Hours",
    description:
      "We handle the paperwork, underwriting coordination, and setup so you can start accepting payments fast.",
    tag: "End-to-end handled",
  },
];

export default function BusinessProcess() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          pill="The Process"
          gradientText="How It"
          rest="Works"
          subtitle="Three simple steps from first conversation to your first transaction."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="reveal rounded-3xl border border-white/10 bg-[#0D1324] p-7 sm:p-8 shadow-[0_12px_50px_rgba(0,0,0,0.18)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0F1B33] text-sm font-bold text-[#1FA7A1]">
                {step.id}
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                {step.description}
              </p>
              <div className="mt-6 inline-flex rounded-full border border-[#1FA7A1]/20 bg-[#0E2A2E] px-3 py-1 text-xs font-semibold text-[#6ED3CC]">
                {step.tag}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
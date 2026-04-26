import { Container, SectionPill } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "Understand your business",
    description:
      "We start with a real conversation, your sales volume, industry, equipment setup, and what's been frustrating about your current situation. No templates, no assumptions.",
  },
  {
    number: "02",
    title: "Match you to the right processor",
    description:
      "As an ISO, we have access to multiple processors. We compare options behind the scenes and recommend the one that fits your transaction size, industry category, and business model, not the one with the biggest referral fee.",
  },
  {
    number: "03",
    title: "Set up fast, run smooth",
    description:
      "From POS hardware to software integrations, we handle the setup and onboarding. You're not figuring it out alone with a PDF manual.",
  },
  {
    number: "04",
    title: "Ongoing support, not radio silence",
    description:
      "We're your point of contact long after you go live. If something breaks, your volume changes, or a better option becomes available, we adapt with you.",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="reveal text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <SectionPill>
            <span className="text-[#1FA7A1]">•</span>
            HOW WE WORK
          </SectionPill>
          <h2 className="mt-7 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            The Clovpay process
          </h2>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
            We&apos;re not a processor. We&apos;re a matchmaker with staying power.
            Here&apos;s what partnering with us looks like in practice.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-4 md:space-y-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-4 sm:p-5 md:p-6 hover:border-[#1FA7A1]/20 transition-colors"
            >
              <div className="flex gap-3 sm:gap-4 md:gap-5">
                <div className="flex-shrink-0">
                  <span className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1FA7A1]">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {step.description}
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

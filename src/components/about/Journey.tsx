import { Container, SectionPill } from "@/components/ui";

const milestones = [
  {
    phase: "The Beginning",
    title: "Founded with a clear purpose",
    desc: "Clovpay was founded after seeing too many small businesses stuck with processors that didn't fit, paying hidden fees and getting zero support. The idea was simple: be the partner merchants actually needed.",
  },
  {
    phase: "Building the network",
    title: "Established processor partnerships",
    desc: "We built relationships with multiple trusted US payment processors, giving us the independence to recommend based on fit, not favoritism."
  },
  {
    phase: "Expanding solutions",
    title: "POS systems & integrations",
    desc: "Expanded our offering to include full POS hardware setup, software integrations, and hands on onboarding, becoming a true end to end partner for merchants."
  },
  {
    phase: "Today",
    title: "Growing alongside our merchants",
    desc: "We're actively growing our merchant community across the US, retail, restaurants, and service businesses, with the same commitment to honest, personal service that started it all."
  },
];

export default function Journey() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="reveal text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <SectionPill>
            <span className="text-[#1FA7A1]">•</span>
            OUR JOURNEY
          </SectionPill>
          <h2 className="mt-7 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            How Clovpay came to be
          </h2>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
            Built from a straightforward observation: small businesses deserved
            better payment partners.
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1FA7A1]/35 to-transparent" />
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1FA7A1]/35 to-transparent" />

          <ul className="space-y-6 md:space-y-10">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <li key={m.phase} className="relative">
                  <span className="hidden md:block absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1FA7A1] ring-4 ring-[#070B1A]" />
                  <span className="md:hidden absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1FA7A1] ring-4 ring-[#070B1A]" />

                  <div
                    className={`reveal rounded-2xl border border-white/8 bg-[#0D1324] p-4 sm:p-5 md:p-6 md:w-[46%] ml-8 md:ml-0 hover:border-[#1FA7A1]/20 transition-colors ${
                      left ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-gradient-to-r from-[#1FA7A1] to-[#0F6F73] px-3 py-1 text-xs font-bold text-white mb-3">
                      {m.phase}
                    </span>
                    <h3 className="mt-1 text-base sm:text-lg md:text-xl font-bold text-white">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-white/70 leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

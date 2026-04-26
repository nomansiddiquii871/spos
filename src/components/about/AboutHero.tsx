import { Container, SectionPill } from "@/components/ui";

export default function AboutHero() {
  const cards = [
    {
      title: "ISO",
      description: "Independent partner, we work for you, not any single processor",
    },
    {
      title: "US-based",
      description: "Focused on American SMBs, retail, restaurants and service businesses",
    },
    {
      title: "Multi-processor",
      description: "Multiple trusted processors to match your exact business needs",
    },
    {
      title: "Real support",
      description: "A dedicated contact, not a ticket number or a hold queue",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-24 md:pt-32 pb-14 md:pb-20 hero-glow">
      <Container>
        <div className="relative text-center max-w-4xl mx-auto">
          <div className="reveal">
            <SectionPill>
              <span className="text-[#1FA7A1]">•</span>
              ABOUT CLOVPAY
            </SectionPill>
          </div>
          <h1 className="reveal mt-7 text-[34px] leading-[1.12] sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            We&apos;re in your corner,
            <br />
            <span className="text-[#1FA7A1]">every swipe</span> of the way.
          </h1>
          <p className="reveal mt-5 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Clovpay connects small and mid-sized businesses across the US with the
            right payment processing solutions, backed by real support, transparent
            pricing, and long-term relationships.
          </p>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="reveal rounded-2xl border border-white/8 bg-gradient-to-br from-[#0D1324] to-[#0A0F1A] p-4 sm:p-5 hover:border-[#1FA7A1]/30 transition-colors"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#1FA7A1]">{card.title}</h3>
              <p className="mt-2.5 text-sm text-white/70 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Container, SectionPill } from "@/components/ui";

export default function MissionVision() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        {/* Intro Section */}
        <div className="reveal text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <SectionPill>
            <span className="text-[#1FA7A1]">•</span>
            OUR MISSION
          </SectionPill>
          <h2 className="mt-7 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Payments should be simple.
            <br />
            Getting help shouldn&apos;t be hard.
          </h2>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
            Too many businesses get stuck with processors that don&apos;t fit, fees they
            didn&apos;t expect, and support lines that go nowhere. We built Clovpay to
            fix that.
          </p>
        </div>

        {/* Mission Box */}
        <div className="reveal mx-auto max-w-6xl rounded-3xl border border-[#1FA7A1]/20 bg-gradient-to-br from-[#0D1324] to-[#0A0F1A] p-5 sm:p-6 md:p-8 mb-8 md:mb-10">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-1 h-1 rounded-full bg-[#1FA7A1] mt-2 flex-shrink-0" />
            <span className="text-xs font-bold text-[#1FA7A1] uppercase tracking-wide">MISSION</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight max-w-4xl">
            Empower every merchant with the right tools, not just the
            most available ones.
          </h3>
          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl">
            We work across multiple trusted payment processors to match each business
            with the solution that actually fits their volume, industry, and growth
            stage. Then we stay to make sure it keeps working.
          </p>
        </div>

        {/* Vision Box */}
        <div className="reveal mx-auto max-w-6xl rounded-3xl border border-white/8 bg-[#0D1324] p-5 sm:p-6 md:p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-1 h-1 rounded-full bg-[#1FA7A1] mt-2 flex-shrink-0" />
            <span className="text-xs font-bold text-[#1FA7A1] uppercase tracking-wide">VISION</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight max-w-4xl">
            A payments experience that feels like a partner, not a vendor.
          </h3>
          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-3xl">
            Every merchant, whether running a food truck or a multi location retail
            chain, deserves access to the same quality infrastructure, honest pricing,
            and people who actually pick up the phone.
          </p>
        </div>
      </Container>
    </section>
  );
}

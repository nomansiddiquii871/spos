import { Container, SectionPill } from "@/components/ui";

export default function OurPromise() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-transparent via-[#1FA7A1]/5 to-transparent">
      <Container>
        <div className="reveal mx-auto max-w-6xl rounded-3xl border border-[#1FA7A1]/20 bg-gradient-to-br from-[#0D1324] to-[#0A0F1A] p-5 sm:p-6 md:p-8">
          <div className="max-w-3xl">
            <SectionPill>
              <span className="text-[#1FA7A1]">•</span>
              OUR PROMISE
            </SectionPill>
            <h2 className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-white max-w-4xl">
              A dedicated contact who knows your account, not a ticket number.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed">
              When you partner with Clovpay, you get a real person who understands
              your setup, your history, and your goals. We&apos;ll proactively let you
              know when a better option becomes available, even if it means changing
              things up. That&apos;s what a real partner does, and it&apos;s the standard
              we hold ourselves to with every merchant we work with.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

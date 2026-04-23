import { Globe2 } from "lucide-react";
import { Container } from "@/components/ui";

export default function BusinessIntro() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <div className="reveal mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#0D1324] p-6 sm:p-8 shadow-[0_12px_50px_rgba(0,0,0,0.25)]">
          <div className="flex items-start gap-4 sm:gap-5">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0F1B33] text-[#1FA7A1]">
              <Globe2 size={24} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                What&apos;s an ISO?
              </p>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-white/72">
                Clovpay is an independent sales organization that helps merchants
                compare payment options, choose the right processing partner,
                and launch with the support they need from day one.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
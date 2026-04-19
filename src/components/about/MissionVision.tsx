import { Target, Globe } from "lucide-react";
import { Container } from "@/components/ui";

export default function MissionVision() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-8">
            <Target className="h-9 w-9 text-[#6FA8FF]" strokeWidth={2} />
            <h3 className="mt-5 text-2xl font-bold text-white">Our Mission</h3>
            <p className="mt-3 text-white/70 leading-relaxed">
              Empower businesses of every size with simple, powerful commerce
              tools that eliminate friction, accelerate growth and make running
              a business feel effortless.
            </p>
          </div>
          <div className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-8">
            <Globe className="h-9 w-9 text-[#6FA8FF]" strokeWidth={2} />
            <h3 className="mt-5 text-2xl font-bold text-white">Our Vision</h3>
            <p className="mt-3 text-white/70 leading-relaxed">
              A world where every merchant, in every corner of the globe, has
              access to the same world-class commerce infrastructure — without
              compromise.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

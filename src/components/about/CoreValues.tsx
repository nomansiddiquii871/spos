import { Lightbulb, Shield, Heart, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeader, IconTile } from "@/components/ui";

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
  variant: "orange" | "green" | "pink" | "blue";
};

const values: Value[] = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "Constantly pushing boundaries to deliver cutting-edge solutions.",
    variant: "orange",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Uncompromising commitment to data protection and reliability.",
    variant: "green",
  },
  {
    icon: Heart,
    title: "Customer Success",
    description: "Your growth and success drive everything we do.",
    variant: "pink",
  },
  {
    icon: Users,
    title: "Team Excellence",
    description: "Fostering collaboration and empowering talented individuals.",
    variant: "blue",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          gradientText="Our Core"
          rest="Values"
          subtitle="The principles that shape how we build, support, and grow."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-7 text-center hover:border-white/15 transition"
            >
              <div className="flex justify-center">
                <IconTile icon={v.icon} variant={v.variant} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-white">{v.title}</h3>
              <p className="mt-3 text-sm text-white/65">{v.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Calendar } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const milestones = [
  {
    year: "2010",
    title: "Founded",
    desc: "Clovpay was founded with a simple idea — make commerce infrastructure available to everyone.",
  },
  {
    year: "2012",
    title: "Official Launch & Funding",
    desc: "Secured Series A funding and shipped our first product to early adopters.",
  },
  {
    year: "2015",
    title: "Mobile & Mini Hardware",
    desc: "Launched portable, countertop and mobile POS devices for every store layout.",
  },
  {
    year: "2018",
    title: "Global Expansion",
    desc: "Expanded internationally with local acquiring in 10+ countries.",
  },
  {
    year: "2022",
    title: "Platform 2.0",
    desc: "A ground-up rewrite of the platform — 3× faster, 50% more reliable.",
  },
  {
    year: "2025",
    title: "4 Million Devices",
    desc: "Crossed 4 million devices shipped and 500K+ active businesses worldwide.",
  },
];

export default function Journey() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          gradientText="Our"
          rest="Journey"
          subtitle="Key milestones that shaped Clovpay from a startup to a global commerce platform."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1FA7A1]/35 to-transparent" />
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1FA7A1]/35 to-transparent" />

          <ul className="space-y-10 md:space-y-14">
            {milestones.map((m, i) => {
              const left = i % 2 === 0;
              return (
                <li key={m.year} className="relative">
                  <span className="hidden md:block absolute left-1/2 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1FA7A1] ring-4 ring-[#070B1A]" />
                  <span className="md:hidden absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-[#1FA7A1] ring-4 ring-[#070B1A]" />

                  <div
                    className={`reveal rounded-2xl border border-white/8 bg-[#0D1324] p-6 md:p-7 md:w-[47%] ml-10 md:ml-0 ${
                      left ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#1FA7A1]" />
                      <span className="rounded-full bg-gradient-to-r from-[#1FA7A1] to-[#0F6F73] px-3 py-0.5 text-xs font-bold text-white">
                        {m.year}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-white">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">
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

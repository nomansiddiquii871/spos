"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Table as TableIcon,
  Boxes,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

type DemoFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  items: string[];
};

const demos: DemoFeature[] = [
  {
    icon: LayoutDashboard,
    title: "SPOS Dashboard",
    description: "One central hub for sales, inventory, and team performance.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Real-time sales",
      "Top products",
      "Shift tracker",
      "Alerts & tasks",
    ],
  },
  {
    icon: TableIcon,
    title: "Table Mapping",
    description: "Visual floor plans that keep your service running smoothly.",
    image:
      "https://images.unsplash.com/photo-1555992336-03a23c7d20d8?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Drag & drop layout",
      "Live table status",
      "Course firing",
      "Split checks",
    ],
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    description: "Know exactly what's on your shelves, in real time.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    items: [
      "Low-stock alerts",
      "Auto purchase orders",
      "Barcode scanning",
      "Variants & bundles",
    ],
  },
];

export default function ProductDemo() {
  const [active, setActive] = useState(0);
  const current = demos[active];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          pill="Product Demo"
          gradientText="See SPOS"
          rest="in Action"
          subtitle="A quick tour of the screens your team will use every day."
        />

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0D1324] aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.image}
                alt={current.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B1A]/70 to-transparent" />
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { k: "99.9%", v: "Uptime" },
                { k: "<2s", v: "Response" },
                { k: "24/7", v: "Support" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-xl border border-white/10 bg-[#0D1324] p-4 text-center"
                >
                  <div className="text-xl font-extrabold text-gradient">
                    {s.k}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 reveal">
            {demos.map((d, i) => {
              const Icon = d.icon;
              const isActive = i === active;
              return (
                <button
                  key={d.title}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl border p-5 sm:p-6 transition ${
                    isActive
                      ? "border-[#3355FF]/50 bg-[#0D1324] shadow-[0_8px_40px_rgba(51,85,255,0.15)]"
                      : "border-white/8 bg-[#0D1324]/60 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#3355FF] to-[#8A5FFF] shrink-0">
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-bold ${
                          isActive ? "text-gradient" : "text-white"
                        }`}
                      >
                        {d.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/65">
                        {d.description}
                      </p>
                      {isActive && (
                        <ul className="mt-4 grid grid-cols-2 gap-2">
                          {d.items.map((it) => (
                            <li
                              key={it}
                              className="flex items-center gap-2 text-sm text-white/80"
                            >
                              <Check size={14} className="text-[#4A73FF]" />
                              {it}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

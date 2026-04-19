"use client";

import { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  Clock,
  Gauge,
  Activity,
  Users,
  Headphones,
  BookOpen,
  Calendar,
} from "lucide-react";
import { Container, PrimaryButton, GhostButton, SectionHeader } from "@/components/ui";

type QA = { q: string; a: string };
type Category = { name: string; questions: QA[] };

const categories: Category[] = [
  {
    name: "General",
    questions: [
      {
        q: "What is SPOS and how does it work?",
        a: "SPOS is a unified commerce platform that combines point-of-sale hardware, payments, online ordering, inventory and analytics — set up in minutes, usable on day one.",
      },
      {
        q: "Do I need special hardware to use SPOS?",
        a: "No. SPOS runs on our certified devices or any modern iOS/Android tablet. Most businesses use a mix to match their workflow.",
      },
      {
        q: "Can I use SPOS for online sales?",
        a: "Yes — a full e-commerce storefront is included and stays in real-time sync with your inventory and customer data.",
      },
      {
        q: "Is my business data safe with SPOS?",
        a: "Absolutely. We're PCI-DSS Level 1 compliant with bank-grade encryption and 24/7 infrastructure monitoring.",
      },
    ],
  },
  {
    name: "Pricing",
    questions: [
      {
        q: "Is there a free trial?",
        a: "Yes — a 14-day free trial is available with no credit card required.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No hidden fees. Transparent pricing, no long-term contracts, cancel anytime.",
      },
      {
        q: "Can I upgrade or downgrade later?",
        a: "You can switch plans at any time from your admin dashboard — prorated instantly.",
      },
    ],
  },
  {
    name: "Technical",
    questions: [
      {
        q: "Does SPOS work offline?",
        a: "Yes. Transactions continue in offline mode and sync automatically once connectivity is restored.",
      },
      {
        q: "Which payment methods are supported?",
        a: "Chip, tap, swipe, digital wallets (Apple Pay, Google Pay), QR, and 20+ local payment methods.",
      },
      {
        q: "Can I connect my existing hardware?",
        a: "Most major printers, scanners, scales and cash drawers are plug-and-play with SPOS.",
      },
    ],
  },
  {
    name: "Support",
    questions: [
      {
        q: "What are your support hours?",
        a: "24/7 live support via chat and phone. Average response time is under 2 minutes.",
      },
      {
        q: "Is onboarding included?",
        a: "Every plan includes a dedicated onboarding specialist and a structured setup checklist.",
      },
      {
        q: "Where can I find documentation?",
        a: "Our Help Center covers setup guides, API references and troubleshooting — plus video tutorials.",
      },
    ],
  },
  {
    name: "Clover General",
    questions: [
      {
        q: "How do I manage inventory?",
        a: "Inventory is managed from the dashboard — add items, variants, categories, set low-stock alerts and bulk import via CSV.",
      },
      {
        q: "Can I use Clover for employee management?",
        a: "Yes — track shifts, performance, and permissions with role-based access controls.",
      },
      {
        q: "Can I add peripherals like scanners or scales?",
        a: "Yes. Barcode scanners, kitchen printers, cash drawers, and scales are all supported.",
      },
    ],
  },
  {
    name: "Clover Mini",
    questions: [
      {
        q: "What is the Clover Mini?",
        a: "A compact, countertop POS with a built-in printer and touchscreen — ideal for small retailers and service businesses.",
      },
      {
        q: "What payments does it accept?",
        a: "Chip, tap, swipe and digital wallets with built-in fraud protection.",
      },
    ],
  },
  {
    name: "Clover Kiosk",
    questions: [
      {
        q: "What is the Clover Kiosk?",
        a: "A self-service POS where customers place orders, pay and print receipts without staff intervention.",
      },
      {
        q: "Which businesses are best suited?",
        a: "Quick-service restaurants, cafés, retail stores with high foot traffic, and venues with long queues.",
      },
    ],
  },
];

const stats = [
  { icon: Clock, k: "24/7", v: "Support Available" },
  { icon: Gauge, k: "99.9%", v: "Uptime Guarantee" },
  { icon: Activity, k: "<2s", v: "Average Response" },
  { icon: Users, k: "50K+", v: "Happy Customers" },
];

function FaqItem({ qa }: { qa: QA }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/8 bg-[#0A1020]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-5 sm:px-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-white">{qa.q}</span>
        <ChevronDown
          size={18}
          className={`text-white/70 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 text-sm text-white/70 leading-relaxed">
            {qa.a}
          </p>
        </div>
      </div>
    </div>
  );
}

function CategoryAccordion({
  cat,
  expanded,
  onToggle,
}: {
  cat: Category;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl border transition bg-[#0D1324] ${
        expanded ? "border-[#3355FF]/50 shadow-[0_8px_40px_rgba(51,85,255,0.12)]" : "border-white/8"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5"
        aria-expanded={expanded}
      >
        <span className="text-lg sm:text-xl font-bold text-gradient">
          {cat.name}
        </span>
        <ChevronDown
          size={20}
          className={`text-[#6FA8FF] transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-6 pb-5 space-y-3">
            {cat.questions.map((qa) => (
              <FaqItem key={qa.q} qa={qa} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqsPage() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Set<string>>(new Set(["General"]));

  const filtered = useMemo(() => {
    if (!query.trim()) return categories;
    const q = query.toLowerCase();
    return categories
      .map((c) => ({
        ...c,
        questions: c.questions.filter(
          ({ q: question, a }) =>
            question.toLowerCase().includes(q) || a.toLowerCase().includes(q)
        ),
      }))
      .filter((c) => c.questions.length > 0);
  }, [query]);

  const toggle = (name: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const isOpen = (c: Category) =>
    open.has(c.name) || (query.trim().length > 0 && filtered.includes(c));

  return (
    <>
      <section className="relative pt-28 md:pt-36 pb-10 hero-glow">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="reveal text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
              <span className="text-gradient">Frequently Asked</span>
              <br />
              Questions
            </h1>
            <p className="reveal mt-5 text-white/70 text-base sm:text-lg">
              Can&apos;t find what you&apos;re looking for? Our support team is here
              24/7.
            </p>

            <div className="reveal mt-8 mx-auto max-w-xl">
              <div className="relative">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search FAQs..."
                  className="w-full rounded-xl border border-white/10 bg-[#0D1324] pl-11 pr-4 py-4 text-base text-white placeholder-white/40 focus:outline-none focus:border-[#3355FF]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.v}
                className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-5 text-center"
              >
                <s.icon className="mx-auto h-6 w-6 text-[#6FA8FF]" />
                <div className="mt-3 text-2xl sm:text-3xl font-extrabold text-gradient">
                  {s.k}
                </div>
                <div className="mt-1 text-xs text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl space-y-4">
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-white/8 bg-[#0D1324] p-10 text-center text-white/70">
                No FAQs match &quot;{query}&quot;. Try a different keyword.
              </div>
            ) : (
              filtered.map((cat) => (
                <CategoryAccordion
                  key={cat.name}
                  cat={cat}
                  expanded={isOpen(cat)}
                  onToggle={() => toggle(cat.name)}
                />
              ))
            )}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeader
            gradientText="Still Need"
            rest="Help?"
            subtitle="Our support team is here to assist you with any questions."
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: Headphones,
                title: "24/7 Live Chat",
                desc: "Instant help from our support team. Average response under 2 minutes.",
                cta: { label: "Start Chat", primary: true, href: "/contact" },
              },
              {
                icon: BookOpen,
                title: "Help Center",
                desc: "Browse guides, tutorials and comprehensive documentation.",
                cta: { label: "Visit Help Center", primary: false, href: "#" },
              },
              {
                icon: Calendar,
                title: "Schedule Demo",
                desc: "Book a personalized demo with our experts to see SPOS live.",
                cta: { label: "Book Demo", primary: false, href: "/contact" },
              },
            ].map((c) => (
              <div
                key={c.title}
                className="reveal rounded-2xl border border-white/8 bg-[#0D1324] p-7 text-center hover:border-white/15 transition"
              >
                <c.icon
                  className="mx-auto h-10 w-10 text-[#6FA8FF]"
                  strokeWidth={1.8}
                />
                <h3 className="mt-4 text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-white/65">{c.desc}</p>
                <div className="mt-5">
                  {c.cta.primary ? (
                    <PrimaryButton href={c.cta.href} full>
                      {c.cta.label}
                    </PrimaryButton>
                  ) : (
                    <GhostButton href={c.cta.href} full>
                      {c.cta.label}
                    </GhostButton>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

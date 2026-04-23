import {
  Store,
  Smartphone,
  ReceiptText,
  Building2,
  BarChart3,
  Headphones,
  Check,
  ArrowRight,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Container,
  IconTile,
  SectionHeader,
} from "@/components/ui";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

const features: Feature[] = [
  {
    icon: Store,
    title: "Smart Countertop Systems",
    description:
      "High-performance POS systems designed to be the central hub of your business.",
    bullets: ["Unified POS power", "Real-Time Inventory", "Smart Employee Management"],
  },
  {
    icon: Smartphone,
    title: "On-The-Go & Mobile Pay",
    description:
      "Take the checkout to your customers, whether you’re tableside or at a pop-up market.",
    bullets: ["Wireless Freedom", "Long Battery Life", "Tap, Chip, & Digital Wallets"],
  },
  {
    icon: ReceiptText,
    title: "Transparent Processing",
    description:
      "Take the guesswork out of your monthly statement with flat-rate or interchange-plus pricing models.",
    bullets: ["No Hidden Fees", "Dual Pricing Options", "Wholesale Rate"],
  },
  {
    icon: Building2,
    title: "Specialized Industry Solutions",
    description:
      "We don’t believe in \"one size fits all.\" We match your business type with the perfect hardware.",
    bullets: ["Retail & Grocery", "Restaurants", "Service Base Businesses", "High Risk Businesses"],
  },
  {
    icon: BarChart3,
    title: "Business Management",
    description:
      "Manage your entire business from your phone or laptop with cloud-synced back-office tools.",
    bullets: ["Inventory Tracking", "Employee Management", "PCI-DSS Security"],
  },
  {
    icon: Headphones,
    title: "24/7 Local Reliability",
    description:
      "We don’t just mail you a box. We provide full setup, training, and ongoing local support.",
    bullets: ["Same-Day Swap", "Direct Human Access", "White-Glove Implementation"],
  },
];

export default function CoreFeatures() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          pill={
            <span className="flex items-center gap-1.5">
              <Zap size={13} className="text-[#1FA7A1]" /> Core Features
            </span>
          }
          gradientText="Everything You Need"
          rest="to Accept Payments Everywhere"
          subtitle="From countertop terminals to mobile handhelds and online checkouts we provide the hardware and the horsepower to keep your business moving."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="reveal group rounded-2xl border border-white/8 bg-[#0D1324] p-7 sm:p-8 transition hover:border-white/15 hover:-translate-y-1"
            >
              <IconTile icon={f.icon} variant="blue" />
              <h3 className="mt-6 text-xl font-bold text-white">{f.title}</h3>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">
                {f.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {f.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-3 text-sm text-white/80"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1FA7A1]/15">
                      <Check size={12} className="text-[#1FA7A1]" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1FA7A1] hover:text-[#6ED3CC] transition"
              >
                Learn More <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

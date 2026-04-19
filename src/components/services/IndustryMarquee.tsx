import {
  ShoppingBag,
  Utensils,
  Pizza,
  Wine,
  ShoppingCart,
  Cigarette,
  Stethoscope,
  Scissors,
  Briefcase,
  Car,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

type Industry = {
  name: string;
  icon: LucideIcon;
  image: string;
  tags: string[];
};

const industries: Industry[] = [
  {
    name: "Retail & Fashion",
    icon: ShoppingBag,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    tags: ["Inventory", "Variants", "Loyalty"],
  },
  {
    name: "Restaurants",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    tags: ["KDS", "Tables", "Online Ordering"],
  },
  {
    name: "Pizza & QSR",
    icon: Pizza,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    tags: ["Delivery", "Combos", "Rewards"],
  },
  {
    name: "Liquor Stores",
    icon: Wine,
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
    tags: ["ID Verify", "Vendor Mgmt", "Discounts"],
  },
  {
    name: "Grocery",
    icon: ShoppingCart,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    tags: ["Bulk Scales", "Stock", "Receipts"],
  },
  {
    name: "Smoke Shops",
    icon: Cigarette,
    image:
      "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=900&q=80",
    tags: ["Age Verify", "Catalog", "Loyalty"],
  },
  {
    name: "Health & Wellness",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    tags: ["Bookings", "Records", "Billing"],
  },
  {
    name: "Beauty & Spa",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
    tags: ["Scheduling", "Staff", "Client History"],
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    tags: ["Time Track", "Invoicing", "Projects"],
  },
  {
    name: "Automotive",
    icon: Car,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=80",
    tags: ["Service Orders", "Parts", "Warranty"],
  },
];

function Card({ item }: { item: Industry }) {
  return (
    <div className="relative shrink-0 w-[240px] sm:w-[280px] md:w-[320px] h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden rounded-2xl mx-2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
            <item.icon className="h-4 w-4 text-[#8FB8FF]" />
          </span>
          <div className="text-sm sm:text-base font-semibold">{item.name}</div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/10 border border-white/15 px-2 py-0.5 text-[10px] text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function IndustryMarquee() {
  const rowA = [...industries, ...industries];
  const rowB = [...industries.slice().reverse(), ...industries.slice().reverse()];

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          pill="Industries We Serve"
          gradientText="Designed for"
          rest="Every Industry"
          subtitle="From restaurants to retail, liquor stores to salons — SPOS adapts to your unique business."
        />
      </Container>

      <div className="marquee-mask overflow-hidden py-3">
        <div className="flex marquee-left w-max">
          {rowA.map((it, i) => (
            <Card key={`a-${i}`} item={it} />
          ))}
        </div>
      </div>
      <div className="marquee-mask overflow-hidden py-3">
        <div className="flex marquee-right w-max">
          {rowB.map((it, i) => (
            <Card key={`b-${i}`} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}

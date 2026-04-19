"use client";

import { useMemo, useState } from "react";
import { Check, Star, Wifi, Monitor } from "lucide-react";
import { Container, PrimaryButton, GhostButton } from "@/components/ui";

type Product = {
  id: string;
  name: string;
  brand: "Clover" | "Elavon" | "Newland";
  price: string;
  image: string;
  tags: string[];
  rating: number;
  description: string;
  features: string[];
  meta: { screen: string; connectivity: string };
};

const products: Product[] = [
  {
    id: "clover-flex-4",
    name: "Clover Flex 4th Gen",
    brand: "Clover",
    price: "$80",
    image:
      "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=900&q=80",
    tags: ["Handheld", "Built-in Printer"],
    rating: 4.8,
    description:
      "Powerful handheld POS with a crisp touchscreen and built-in receipt printer.",
    features: [
      "5.99” IPS touchscreen",
      "Built-in barcode scanner",
      "All-day battery",
    ],
    meta: { screen: "5.99” IPS", connectivity: "4G + WiFi" },
  },
  {
    id: "clover-flex-pocket",
    name: "Clover Flex Pocket",
    brand: "Clover",
    price: "$65",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80",
    tags: ["Slim", "Mobile POS"],
    rating: 4.7,
    description:
      "Slim, ultra-portable payments terminal that fits in your pocket.",
    features: ["Compact design", "Chip, tap & swipe", "Long-lasting battery"],
    meta: { screen: '4" OLED', connectivity: "WiFi + BT" },
  },
  {
    id: "clover-mini-3",
    name: "Clover Mini 3rd Gen",
    brand: "Clover",
    price: "$80",
    image:
      "https://images.unsplash.com/photo-1563012130-c4a66f24f6e8?auto=format&fit=crop&w=900&q=80",
    tags: ["Countertop", "Printer"],
    rating: 4.8,
    description:
      "Space-saving countertop POS with fast, secure transaction processing.",
    features: [
      "Space-saving design",
      "Touchscreen interface",
      "Fast, secure payments",
    ],
    meta: { screen: "8” HD", connectivity: "Ethernet + WiFi" },
  },
  {
    id: "poynt-c",
    name: "Poynt C",
    brand: "Elavon",
    price: "$70",
    image:
      "https://images.unsplash.com/photo-1517088355435-02fcfac53c14?auto=format&fit=crop&w=900&q=80",
    tags: ["Mobile", "Dual Screen"],
    rating: 4.6,
    description:
      "Dual-screen handheld with customer-facing display for tips & receipts.",
    features: ["Dual touchscreen", "Built-in printer", "EMV-ready"],
    meta: { screen: '5" + 3.5"', connectivity: "4G + WiFi" },
  },
  {
    id: "talech-elo",
    name: "Talech Elo Station",
    brand: "Elavon",
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1556741533-f6acd6474500?auto=format&fit=crop&w=900&q=80",
    tags: ["Station", "All-in-One"],
    rating: 4.7,
    description:
      "Full-size station for high-volume retail and hospitality environments.",
    features: [
      "15” anti-glare screen",
      "Customer-facing display",
      "Integrated peripherals",
    ],
    meta: { screen: "15” HD", connectivity: "Ethernet" },
  },
  {
    id: "newland-n950",
    name: "Newland N950",
    brand: "Newland",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    tags: ["Handheld", "Rugged"],
    rating: 4.5,
    description:
      "Rugged Android handheld POS built for busy service environments.",
    features: ["Android 12", "IP54 rated", "Fast fingerprint scan"],
    meta: { screen: "5.5” HD", connectivity: "4G LTE" },
  },
];

const filters = ["All Equipment", "Clover", "Elavon"] as const;
type Filter = (typeof filters)[number];

export default function ProductCatalog() {
  const [filter, setFilter] = useState<Filter>("All Equipment");
  const filtered = useMemo(
    () =>
      filter === "All Equipment"
        ? products
        : products.filter((p) => p.brand === filter),
    [filter]
  );

  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <div className="flex justify-center mb-10 reveal">
          <div className="inline-flex rounded-full border border-white/10 bg-[#0D1324] p-1">
            {filters.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-semibold transition ${
                  filter === t
                    ? "bg-gradient-to-r from-[#3355FF] to-[#4A73FF] text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="reveal rounded-2xl border border-white/8 bg-[#0D1324] overflow-hidden hover:border-white/15 hover:-translate-y-1 transition"
            >
              <div className="relative h-56 bg-[#0A1020]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-3 right-3 flex flex-col gap-1.5 items-end">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-gradient-to-r from-[#3355FF] to-[#4A73FF] text-white text-[11px] font-semibold px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur px-2.5 py-1 text-xs font-semibold text-yellow-400">
                  <Star size={12} className="fill-yellow-400" /> {p.rating}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{p.name}</h3>
                  <span className="text-lg font-extrabold text-gradient">
                    {p.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/65">{p.description}</p>

                <p className="mt-4 text-xs font-semibold text-white/85">
                  Key Features:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-white/75"
                    >
                      <Check
                        size={14}
                        className="mt-0.5 text-[#4ECDC4] shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center gap-3 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1.5">
                    <Monitor size={12} className="text-[#4A73FF]" />
                    {p.meta.screen}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Wifi size={12} className="text-[#4A73FF]" />
                    {p.meta.connectivity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-16 mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#0D1324] p-8 sm:p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Need Help Choosing Equipment?
          </h3>
          <p className="mt-3 text-white/70 max-w-xl mx-auto">
            Our POS experts will help you pick the right hardware for your
            setup — zero obligation.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <PrimaryButton href="/contact">Schedule Consultation</PrimaryButton>
            <GhostButton href="#">Download Catalog</GhostButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

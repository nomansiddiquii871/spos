"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

const stories = [
  {
    name: "FitNation Gym",
    cat: "Fitness",
    result: "Increased membership retention by 25%",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Book Haven",
    cat: "Retail",
    result: "Checkout time reduced by 50%",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "City Bites",
    cat: "Restaurant",
    result: "Order errors dropped by 70%",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Spark Electronics",
    cat: "Retail",
    result: "2× online + in-store attach rate",
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "TechRepair Pro",
    cat: "Services",
    result: "40% faster ticket turnaround",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "GreenGrocer",
    cat: "Grocery",
    result: "Reduced waste by 30% and boosted profit",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Bloom Salon",
    cat: "Beauty",
    result: "Bookings up 3× in 6 months",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Velocity Motors",
    cat: "Automotive",
    result: "Parts accuracy reached 99.4%",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function SuccessCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[i] as HTMLElement | undefined;
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const children = Array.from(track.children) as HTMLElement[];
      const scrollLeft = track.scrollLeft;
      let nearest = 0;
      let best = Infinity;
      children.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - track.offsetLeft - scrollLeft);
        if (d < best) {
          best = d;
          nearest = i;
        }
      });
      setActive(nearest);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const prev = () => scrollToIndex(Math.max(0, active - 1));
  const next = () => scrollToIndex(Math.min(stories.length - 1, active + 1));

  return (
    <section id="success" className="py-16 md:py-24">
      <Container>
        <SectionHeader
          gradientText="Success"
          rest="Stories"
          subtitle="Real businesses, real results. See how SPOS transformed these companies."
        />

        <div className="reveal relative">
          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {stories.map((s) => (
              <div
                key={s.name}
                className="relative snap-start shrink-0 overflow-hidden rounded-3xl aspect-[5/4] w-[85%] sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">{s.name}</h3>
                  <div className="text-xs text-white/60 mt-1">{s.cat}</div>
                  <p className="mt-2 text-sm text-white/85">{s.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0D1324] text-white hover:border-white/30 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-1.5">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "bg-[#4A73FF] w-7" : "bg-white/20 w-2"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#0D1324] text-white hover:border-white/30 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

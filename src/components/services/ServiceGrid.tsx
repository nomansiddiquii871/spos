import {
  CreditCard,
  Store,
  BarChart3,
  Cloud,
  Smartphone,
  Globe,
  Settings,
  Headphones,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui";

type Item = {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
};

export const coreServices: Item[] = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    description:
      "Accept every payment method with industry-leading security and speed.",
    image:
      "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Store,
    title: "Point of Sale",
    description:
      "Modern, intuitive POS interface your team will master on day one.",
    image:
      "https://images.unsplash.com/photo-1556741533-f6acd6474500?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description:
      "Real-time insights and reporting for data-driven decisions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Cloud,
    title: "Cloud Management",
    description: "Secure cloud-based system accessible from anywhere.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  },
];

export const extendedSolutions: Item[] = [
  {
    icon: Smartphone,
    title: "Mobile POS",
    description: "Take payments anywhere — counter-less checkout for pop-ups and curbside.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Globe,
    title: "E-commerce Integration",
    description: "Connect online and offline sales for unified commerce.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Settings,
    title: "Custom Integrations",
    description: "Bespoke connections to your CRM, accounting and analytics stack.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "24/7 dedicated support with guaranteed response times.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ServiceGrid({
  id,
  title,
  subtitle,
  items,
}: {
  id?: string;
  title: { gradient: string; rest: string };
  subtitle: string;
  items: Item[];
}) {
  return (
    <section id={id} className="py-16 md:py-24">
      <Container>
        <SectionHeader
          gradientText={title.gradient}
          rest={title.rest}
          subtitle={subtitle}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <div
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl aspect-[3/4]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 flex flex-col justify-end group-hover:justify-center p-6 transition-all duration-300 text-white">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md shrink-0">
                    <s.icon className="h-5 w-5 text-[#8FB8FF]" strokeWidth={2} />
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/85 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-300">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

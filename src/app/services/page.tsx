import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceGrid, {
  coreServices,
  extendedSolutions,
} from "@/components/services/ServiceGrid";
import IndustryMarquee from "@/components/services/IndustryMarquee";
import WhyChoose from "@/components/services/WhyChoose";

export const metadata: Metadata = {
  title: "Services — SPOS",
  description:
    "All-in-one POS services: payments, analytics, cloud, mobile POS, e-commerce integrations and 24/7 priority support.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceGrid
        id="core"
        title={{ gradient: "Core", rest: "Services" }}
        subtitle="Essential features included with every SPOS plan."
        items={coreServices}
      />
      <ServiceGrid
        title={{ gradient: "Extended", rest: "Solutions" }}
        subtitle="Enhance your POS system with specialized features."
        items={extendedSolutions}
      />
      <IndustryMarquee />
      <WhyChoose />
    </>
  );
}

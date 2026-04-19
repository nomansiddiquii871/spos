import type { Metadata } from "next";
import BusinessHero from "@/components/business/BusinessHero";
import MeasurableGrowth from "@/components/business/MeasurableGrowth";
import GrowthFeatures from "@/components/business/GrowthFeatures";
import SuccessCarousel from "@/components/business/SuccessCarousel";

export const metadata: Metadata = {
  title: "Business Growth Solutions — SPOS",
  description:
    "Measurable growth for modern retail, F&B, gyms and service businesses. See how SPOS drives ROI.",
};

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <MeasurableGrowth />
      <GrowthFeatures />
      <SuccessCarousel />
    </>
  );
}

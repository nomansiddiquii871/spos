import type { Metadata } from "next";
import BusinessHero from "@/components/business/BusinessHero";
import BusinessIntro from "@/components/business/BusinessIntro";
import BusinessProcess from "@/components/business/BusinessProcess";
import BusinessEdge from "@/components/business/BusinessEdge";
import BusinessCTA from "@/components/business/BusinessCTA";

export const metadata: Metadata = {
  title: "Business Growth Solutions — Clovpay",
  description:
    "Measurable growth for modern retail, F&B, gyms and service businesses. See how Clovpay drives ROI.",
};

export default function BusinessPage() {
  return (
    <>
      <BusinessHero />
      <BusinessIntro />
      <BusinessProcess />
      <BusinessEdge />
      <BusinessCTA />
    </>
  );
}

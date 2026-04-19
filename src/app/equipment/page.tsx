import type { Metadata } from "next";
import EquipmentHero from "@/components/equipment/EquipmentHero";
import ProductCatalog from "@/components/equipment/ProductCatalog";

export const metadata: Metadata = {
  title: "Equipment — SPOS",
  description:
    "Browse professional-grade POS hardware — Clover, Elavon and Newland devices ready for every industry.",
};

export default function EquipmentPage() {
  return (
    <>
      <EquipmentHero />
      <ProductCatalog />
    </>
  );
}

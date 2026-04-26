import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import HowWeWork from "@/components/about/HowWeWork";
import CoreValues from "@/components/about/CoreValues";
import OurPromise from "@/components/about/OurPromise";
import Journey from "@/components/about/Journey";
import { CTABanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Clovpay",
  description:
    "Learn about Clovpay, our mission, values, journey, and the team driving next generation payment solutions for SMBs.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <HowWeWork />
      <CoreValues />
      <OurPromise />
      <Journey />
      <CTABanner
        title="Find the right processor for your business."
        subtitle="Tell us about your business and we'll match you with the right payment solution, no pressure, no jargon, no runaround."
        primary={{ label: "Get started today", href: "/contact" }}
        secondary={{ label: "See our solutions", href: "/business" }}
      />
    </>
  );
}

import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Journey from "@/components/about/Journey";
import Leadership from "@/components/about/Leadership";
import { CTABanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "About — SPOS",
  description:
    "Learn about SPOS — our mission, values, journey, and the team driving next-generation commerce.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionVision />
      <CoreValues />
      <Journey />
      <Leadership />
      <CTABanner
        title="Ready to Join Our Mission?"
        subtitle="We're always looking for passionate partners and team members. Let's build the future of commerce together."
        primary={{ label: "Partner With Us", href: "/contact" }}
        secondary={{ label: "View Careers", href: "/contact" }}
      />
    </>
  );
}

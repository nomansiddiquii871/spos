import type { Metadata } from "next";
import FaqsPage from "@/components/faqs/FaqsPage";
import { CTABanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "FAQs — SPOS",
  description:
    "Everything you need to know about SPOS — pricing, hardware, integrations, security and 24/7 support.",
};

export default function FAQsRoute() {
  return (
    <>
      <FaqsPage />
      <CTABanner
        title="Ready to Get Started?"
        subtitle="Start your free trial today and experience the power of SPOS. No setup fees, no long-term contracts."
        primary={{ label: "Start Free Trial", href: "/contact" }}
        secondary={{ label: "Contact Sales", href: "/contact" }}
      />
    </>
  );
}

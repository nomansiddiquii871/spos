import Hero from "@/components/home/Hero";
import CoreFeatures from "@/components/home/CoreFeatures";
import CapabilitiesGallery from "@/components/home/CapabilitiesGallery";
import ProductDemo from "@/components/home/ProductDemo";
import Testimonials from "@/components/home/Testimonials";
import TechnologyPlatform from "@/components/home/TechnologyPlatform";
import Pricing from "@/components/home/Pricing";
import Integrations from "@/components/home/Integrations";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";
import { CTABanner } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreFeatures />
      <CTABanner
        title="Ready to Transform Your Business?"
        subtitle="Join thousands of businesses already growing faster with SPOS. Get started today — setup takes minutes."
        primary={{ label: "Start Journey", href: "/contact" }}
        secondary={{ label: "Schedule Demo", href: "/contact" }}
      />
      <CapabilitiesGallery />
      <ProductDemo />
      <Testimonials />
      <TechnologyPlatform />
      <Pricing />
      <Integrations />
      <FAQ />
      <Newsletter />
    </>
  );
}

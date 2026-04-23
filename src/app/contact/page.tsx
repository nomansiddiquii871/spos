import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Clovpay",
  description:
    "Get in touch with Clovpay — sales, demos, partnerships and support. We typically reply within 2 hours.",
};

export default function ContactRoute() {
  return <ContactPage />;
}

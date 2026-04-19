import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact — SPOS",
  description:
    "Get in touch with SPOS — sales, demos, partnerships and support. We typically reply within 2 hours.",
};

export default function ContactRoute() {
  return <ContactPage />;
}

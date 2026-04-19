"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, PhoneCall } from "lucide-react";
import {
  Container,
  SectionHeader,
  PrimaryButton,
  GhostButton,
} from "@/components/ui";

const faqs = [
  {
    q: "What is SPOS and how does it work?",
    a: "SPOS is a unified commerce platform that combines POS hardware, payment processing, online ordering, and business analytics into one seamless experience you can launch in minutes.",
  },
  {
    q: "Do I need special hardware to use SPOS?",
    a: "SPOS works on our certified hardware (tablet, handheld, kiosk) and also on any modern iOS/Android device — so you can start with what you have today.",
  },
  {
    q: "Can I use SPOS for online sales?",
    a: "Yes. SPOS includes a full e-commerce storefront that stays in real-time sync with your inventory, pricing and customer data.",
  },
  {
    q: "Is my business data safe with SPOS?",
    a: "Absolutely. We're PCI-DSS Level 1 compliant with bank-grade end-to-end encryption and 24/7 security monitoring.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          gradientText="Frequently Asked"
          rest="Questions"
          subtitle="Everything you need to know — and if you don't see your question here, our team is one click away."
        />

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="reveal rounded-2xl border border-white/8 bg-[#0D1324] overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 px-5 sm:px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#3355FF] to-[#8A5FFF] shrink-0">
                    <HelpCircle className="h-4 w-4 text-white" />
                  </span>
                  <span className="flex-1 text-base sm:text-lg font-semibold text-white">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-white/70 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-white/70 leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-12 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0D1324] p-8 text-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3355FF] to-[#8A5FFF]">
            <MessageCircle className="h-5 w-5 text-white" />
          </span>
          <h3 className="mt-4 text-2xl font-extrabold text-white">
            Still Have Questions?
          </h3>
          <p className="mt-2 text-white/70 max-w-md mx-auto">
            We&apos;re here to help — reach out and talk to a real human.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <PrimaryButton href="/contact">Contact Support</PrimaryButton>
            <GhostButton href="/contact">
              <PhoneCall size={16} /> Schedule a Call
            </GhostButton>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionWrapper  from "@/components/shared/SectionWrapper";

const faqs = [
  {
    q: "Where does Zesto deliver?",
    a: "Zesto currently delivers across the main city zones. Open the app and enter your address to see all restaurants available in your area.",
  },
  {
    q: "How much does delivery cost?",
    a: "Delivery fees start from $0.99 and vary by distance and restaurant. Your first order is always free delivery — no promo code needed.",
  },
  {
    q: "How do I track my order?",
    a: "Once your order is confirmed, you'll see a live map in the app showing your rider's exact location and an updated ETA. You'll also get SMS notifications.",
  },
  {
    q: "What if my order is wrong or late?",
    a: "We have a no-questions-asked policy. If your order is wrong, missing items, or significantly late, open the app and tap 'Get Help' — we'll make it right with a refund or credit instantly.",
  },
  {
    q: "How do Zesto Rewards work?",
    a: "You earn points on every order automatically. 10 points per $1 spent. Redeem them for free delivery, discounts, or free menu items — no minimum spend required.",
  },
  {
    q: "Can I schedule an order in advance?",
    a: "Yes — you can schedule orders up to 24 hours in advance. Select your preferred delivery window at checkout and your food will arrive right on time.",
  },
];

export default function FAQ() {
  return (
    <SectionWrapper id="faq" bgColor="var(--bg-primary)">
      <div className="max-w-2xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <AnimatedSection delay={0}>
            <h2
              className="text-4xl sm:text-5xl font-bold text-[#1A1208] mb-3"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Got questions?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p
              className="text-base text-[#7A6A56]"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              We&apos;ve probably answered it below.
            </p>
          </AnimatedSection>
        </div>

        {/* ── Accordion ── */}
        <AnimatedSection delay={0.15}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="
                  bg-white border border-[#EDE4D8]
                  rounded-2xl px-6 overflow-hidden
                  data-[state=open]:border-[#FF5C1A]/40
                  data-[state=open]:shadow-sm
                  transition-all duration-200
                "
              >
                <AccordionTrigger
                  className="
                    text-left text-sm font-semibold text-[#1A1208]
                    hover:text-[#FF5C1A] hover:no-underline
                    py-5 transition-colors duration-200
                    [&>svg]:text-[#FF5C1A]
                  "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent
                  className="text-sm text-[#7A6A56] leading-relaxed pb-5 pt-0"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

      </div>
    </SectionWrapper>
  );
}
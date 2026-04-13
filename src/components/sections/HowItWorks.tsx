"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionWrapper  from "@/components/shared/SectionWrapper";
import Eyebrow         from "@/components/shared/Eyebrow";
import PhoneMockup     from "@/components/ui/PhoneMockup";
import AppScreen_Home     from "@/components/ui/AppScreen_Home";
import AppScreen_Menu     from "@/components/ui/AppScreen_Menu";
import AppScreen_Tracking from "@/components/ui/AppScreen_Tracking";

const steps = [
  {
    number:      "01",
    title:       "Browse",
    description: "Explore hundreds of local restaurants filtered by cuisine, rating, price, and delivery time.",
    screen:      <AppScreen_Home />,
  },
  {
    number:      "02",
    title:       "Order",
    description: "Pick your dishes, customise your order, and pay securely in under 60 seconds.",
    screen:      <AppScreen_Menu />,
  },
  {
    number:      "03",
    title:       "Track",
    description: "Watch your rider on a live map. Know exactly when your food arrives — down to the minute.",
    screen:      <AppScreen_Tracking />,
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" bgColor="var(--bg-primary)">

      {/* ── Header ── */}
      <div className="text-center mb-16">
        <AnimatedSection delay={0}>
          <Eyebrow className="mb-4">How It Works</Eyebrow>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1A1208] max-w-xl mx-auto leading-tight"
            style={{ fontFamily: "Clash Display, sans-serif" }}
          >
            From craving to doorstep in three taps.
          </h2>
        </AnimatedSection>
      </div>

      {/* ── Steps ── */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6">

        {/* Dashed arrow between steps — desktop only */}
        {/* Arrow 1→2 */}
        <div className="hidden lg:block absolute top-28 left-[33%] w-[14%] z-10 pointer-events-none">
          <svg viewBox="0 0 120 40" fill="none" className="w-full">
            <path
              d="M 10 20 Q 60 5 110 20"
              stroke="#FF5C1A"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              strokeLinecap="round"
            />
            <path
              d="M 100 14 L 110 20 L 100 26"
              stroke="#FF5C1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Arrow 2→3 */}
        <div className="hidden lg:block absolute top-28 left-[65%] w-[14%] z-10 pointer-events-none">
          <svg viewBox="0 0 120 40" fill="none" className="w-full">
            <path
              d="M 10 20 Q 60 5 110 20"
              stroke="#FF5C1A"
              strokeWidth="1.5"
              strokeDasharray="5 4"
              strokeLinecap="round"
            />
            <path
              d="M 100 14 L 110 20 L 100 26"
              stroke="#FF5C1A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {steps.map((step, i) => (
          <AnimatedSection key={step.number} delay={i * 0.15} direction="up">
            <div className="flex flex-col items-center text-center relative">

              {/* Large faint step number behind phone */}
              <div className="relative flex justify-center mb-6">
                <span
                  className="absolute -top-4 text-[80px] lg:text-[96px] font-bold leading-none select-none pointer-events-none z-0"
                  style={{
                    fontFamily: "Clash Display, sans-serif",
                    color: "#EDE4D8",
                  }}
                >
                  {step.number}
                </span>

                {/* Phone — slight alternate tilt per step */}
                <div className="relative z-10">
                  <PhoneMockup
                    size="sm"
                    tilt={i === 0 ? false : i === 1 ? false : false}
                    className={
                      i === 0 ? "-rotate-3"
                      : i === 1 ? "rotate-0"
                      : "rotate-3"
                    }
                  >
                    {step.screen}
                  </PhoneMockup>
                </div>
              </div>

              {/* Step text */}
              <h3
                className="text-xl font-bold text-[#1A1208] mb-2"
                style={{ fontFamily: "Clash Display, sans-serif" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm text-[#7A6A56] leading-relaxed max-w-xs"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                {step.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
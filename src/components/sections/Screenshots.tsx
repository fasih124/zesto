"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionWrapper  from "@/components/shared/SectionWrapper";
import Eyebrow         from "@/components/shared/Eyebrow";
import PhoneMockup     from "@/components/ui/PhoneMockup";
import AppScreen_Home     from "@/components/ui/AppScreen_Home";
import AppScreen_Menu     from "@/components/ui/AppScreen_Menu";
import AppScreen_Tracking from "@/components/ui/AppScreen_Tracking";
import AppScreen_Rewards  from "@/components/ui/AppScreen_Rewards";

const screens = [
  { label: "Discover", screen: <AppScreen_Home />,     translateY: "0px",   delay: 0     },
  { label: "Order",    screen: <AppScreen_Menu />,     translateY: "-32px", delay: 0.1   },
  { label: "Track",    screen: <AppScreen_Tracking />, translateY: "-16px", delay: 0.2   },
  { label: "Earn",     screen: <AppScreen_Rewards />,  translateY: "-8px",  delay: 0.3   },
];

export default function Screenshots() {
  return (
    <SectionWrapper bgColor="var(--bg-primary)" padding="default">

      {/* ── Header ── */}
      <div className="text-center mb-16">
        <AnimatedSection delay={0}>
          <Eyebrow className="mb-4">The App</Eyebrow>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1A1208] leading-tight mb-4"
            style={{ fontFamily: "Clash Display, sans-serif" }}
          >
            Every screen designed for hunger.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p
            className="text-base text-[#7A6A56]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Four screens. Infinite possibilities.
          </p>
        </AnimatedSection>
      </div>

      {/* ── Phones row ── */}
      {/* Desktop: grid with staggered heights via translateY */}
      {/* Mobile: horizontal scroll */}
      <div className="
        flex gap-6 lg:gap-8
        overflow-x-auto lg:overflow-x-visible
        pb-6 lg:pb-0
        snap-x snap-mandatory lg:snap-none
        lg:grid lg:grid-cols-4
        lg:items-end
        hide-scrollbar
      ">
        {screens.map((item) => (
          <AnimatedSection
            key={item.label}
            delay={item.delay}
            direction="up"
            className="
              flex-shrink-0 snap-center
              flex flex-col items-center gap-4
            "
          >
            {/* Phone with staggered height on desktop */}
            <div
              className="transition-transform duration-500"
              style={{ transform: `translateY(${item.translateY})` }}
            >
              <PhoneMockup size="sm">
                {item.screen}
              </PhoneMockup>
            </div>

            {/* Label */}
            <span
              className="text-sm font-bold text-[#7A6A56] tracking-wide"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              {item.label}
            </span>
          </AnimatedSection>
        ))}
      </div>

    </SectionWrapper>
  );
}
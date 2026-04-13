"use client";

import {
  MapPin,
  Zap,
  UtensilsCrossed,
  RefreshCcw,
  Star,
  Gift,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionWrapper  from "@/components/shared/SectionWrapper";
import Eyebrow         from "@/components/shared/Eyebrow";

interface Feature {
  icon:  LucideIcon;
  title: string;
  body:  string;
}

const features: Feature[] = [
  {
    icon:  MapPin,
    title: "Live GPS Tracking",
    body:  "Watch your rider move in real time. Updated every 30 seconds with accurate ETAs.",
  },
  {
    icon:  Zap,
    title: "30-Minute Guarantee",
    body:  "We partner only with restaurants that can consistently deliver on time.",
  },
  {
    icon:  UtensilsCrossed,
    title: "500+ Local Restaurants",
    body:  "From street food stalls to fine dining — every local favourite in one place.",
  },
  {
    icon:  RefreshCcw,
    title: "One-Tap Reorder",
    body:  "Loved your last meal? Reorder your entire previous order with a single tap.",
  },
  {
    icon:  Star,
    title: "Verified Reviews",
    body:  "Every rating comes from a real verified order. Honest scores you can actually trust.",
  },
  {
    icon:  Gift,
    title: "Zesto Rewards",
    body:  "Earn points on every order. Redeem them for free meals and discounts.",
  },
];

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;

  return (
    <AnimatedSection delay={index * 0.08} direction="up">
      <div className="
        group relative bg-white border border-[#EDE4D8] rounded-2xl p-6
        hover:-translate-y-1 hover:shadow-lg
        transition-all duration-300 cursor-default h-full
        overflow-hidden
      ">
        {/* Orange top border strip — appears on hover */}
        <div className="
          absolute top-0 left-0 right-0 h-0.5 bg-[#FF5C1A]
          scale-x-0 group-hover:scale-x-100
          transition-transform duration-300 origin-left
        " />

        {/* Icon */}
        <div className="
          w-11 h-11 rounded-xl
          bg-[#FF5C1A]/10
          flex items-center justify-center mb-4
          group-hover:bg-[#FF5C1A]/15
          transition-colors duration-300
        ">
          <Icon className="w-5 h-5 text-[#FF5C1A]" />
        </div>

        {/* Title */}
        <h3
          className="text-base font-bold text-[#1A1208] mb-2"
          style={{ fontFamily: "Clash Display, sans-serif" }}
        >
          {feature.title}
        </h3>

        {/* Body */}
        <p
          className="text-sm text-[#7A6A56] leading-relaxed"
          style={{ fontFamily: "Satoshi, sans-serif" }}
        >
          {feature.body}
        </p>
      </div>
    </AnimatedSection>
  );
}

export default function Features() {
  return (
    <SectionWrapper id="features" bgColor="var(--bg-surface)">

      {/* ── Header ── */}
      <div className="text-center mb-14">
        <AnimatedSection delay={0}>
          <Eyebrow className="mb-4">Features</Eyebrow>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1A1208] max-w-2xl mx-auto leading-tight mb-4"
            style={{ fontFamily: "Clash Display, sans-serif" }}
          >
            Built for people who take food seriously.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p
            className="text-base text-[#7A6A56] max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            Every detail designed so you spend less time ordering
            and more time eating.
          </p>
        </AnimatedSection>
      </div>

      {/* ── 3×2 grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, i) => (
          <FeatureCard key={feature.title} feature={feature} index={i} />
        ))}
      </div>

    </SectionWrapper>
  );
}
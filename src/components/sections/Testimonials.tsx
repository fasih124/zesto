"use client";

import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionWrapper  from "@/components/shared/SectionWrapper";
import Eyebrow         from "@/components/shared/Eyebrow";

const reviews = [
  {
    title:    "Fastest delivery in the city",
    body:     "Ordered at 7:12pm, food was at my door by 7:38pm. The live tracking is genuinely the best I've used on any app.",
    name:     "Ayesha K.",
    platform: "iOS",
    initials: "AK",
    color:    "#FF5C1A",
  },
  {
    title:    "The reorder button is genius",
    body:     "I order the same thing every Friday. Two taps and it's done. The rewards points are a nice bonus too.",
    name:     "Omar S.",
    platform: "Android",
    initials: "OS",
    color:    "#FFB800",
  },
  {
    title:    "Finally delivers when it says it will",
    body:     "I've used four delivery apps. Zesto is the only one that actually hits its estimated time. I'm not switching back.",
    name:     "Fatima R.",
    platform: "iOS",
    initials: "FR",
    color:    "#1A1208",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#FF5C1A]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" bgColor="var(--bg-surface)">

      {/* ── Header ── */}
      <div className="text-center mb-12">
        <AnimatedSection delay={0}>
          <Eyebrow className="mb-4">Customer Love</Eyebrow>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#1A1208] leading-tight mb-6"
            style={{ fontFamily: "Clash Display, sans-serif" }}
          >
            50,000 people can&apos;t be wrong.
          </h2>
        </AnimatedSection>

        {/* App Store style rating */}
        <AnimatedSection delay={0.2}>
          <div className="inline-flex flex-col items-center gap-2">
            <div className="flex items-end gap-3">
              <span
                className="text-6xl font-bold text-[#1A1208] leading-none"
                style={{ fontFamily: "Clash Display, sans-serif" }}
              >
                4.8
              </span>
              <div className="flex flex-col items-start gap-1 pb-1">
                <StarRating />
                <span
                  className="text-xs text-[#7A6A56]"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  Based on 12,400+ ratings
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Review cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map((review, i) => (
          <AnimatedSection key={review.name} delay={i * 0.1} direction="up">
            <div className="
              bg-white border border-[#EDE4D8] rounded-2xl p-6
              flex flex-col gap-4 h-full
              hover:-translate-y-1 hover:shadow-md
              transition-all duration-300
            ">
              {/* Stars + title */}
              <div>
                <StarRating />
                <h3
                  className="text-base font-bold text-[#1A1208] mt-2"
                  style={{ fontFamily: "Clash Display, sans-serif" }}
                >
                  &ldquo;{review.title}&rdquo;
                </h3>
              </div>

              {/* Review body */}
              <p
                className="text-sm text-[#7A6A56] leading-relaxed flex-1"
                style={{ fontFamily: "Satoshi, sans-serif" }}
              >
                {review.body}
              </p>

              {/* Reviewer */}
              <div className="flex items-center justify-between pt-3 border-t border-[#EDE4D8]">
                <div className="flex items-center gap-2.5">
                  {/* Avatar */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: review.color }}
                  >
                    <span className="text-white text-[10px] font-bold">
                      {review.initials}
                    </span>
                  </div>
                  <span
                    className="text-sm font-medium text-[#1A1208]"
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    {review.name}
                  </span>
                </div>

                {/* Platform badge */}
                <span className={`
                  text-[10px] font-medium px-2.5 py-1 rounded-full
                  ${review.platform === "iOS"
                    ? "bg-[#1A1208] text-white"
                    : "bg-[#FF5C1A]/10 text-[#FF5C1A]"}
                `}>
                  {review.platform}
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

    </SectionWrapper>
  );
}
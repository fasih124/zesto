"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/shared/AnimatedSection";

const stats = [
  { number: "50,000+", label: "Happy Customers"      },
  { number: "200+",    label: "Restaurant Partners"  },
  { number: "4.8 ★",  label: "Average App Rating"   },
];

export default function StatsBar() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      ref={ref}
      className="w-full border-y border-[#EDE4D8] bg-[#FFF4E8]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div
                className={`
                  flex flex-col items-center text-center
                  ${i < stats.length - 1
                    ? "sm:border-r sm:border-[#EDE4D8]"
                    : ""}
                `}
              >
                <span
                  className="text-4xl lg:text-5xl font-bold text-[#FF5C1A] leading-none mb-2"
                  style={{ fontFamily: "Clash Display, sans-serif" }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-sm text-[#7A6A56] font-medium"
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  {stat.label}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
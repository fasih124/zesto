"use client";

import { motion, type Variants } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import PhoneMockup from "@/components/ui/PhoneMockup";
import AppScreen_Home from "@/components/ui/AppScreen_Home";

// Stagger animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const phoneVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const floatCardVariants = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  }, // ease: "easeOut" } },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FFFAF5] pt-16">
      {/* ── Background blobs ── */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,92,26,0.12) 0%, transparent 70%)",
          transform: "translate(20%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,184,0,0.10) 0%, transparent 70%)",
          transform: "translateY(20%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-0 items-center">
          {/* ══════════════════════════════
              LEFT — Text column
          ══════════════════════════════ */}
          <motion.div
            className="flex flex-col items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow pill */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 border border-[#FF5C1A]/40 bg-[#FF5C1A]/5 text-[#FF5C1A] text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <span>🔥</span>
                <span>Free delivery on your first order</span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              <span className="text-[#1A1208]">Hot food.</span>
              <br />
              <span className="text-[#FF5C1A]">Zero hassle.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#7A6A56] max-w-md leading-relaxed mb-8"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              Order from the best local restaurants and track your delivery
              live. Fresh, fast, and at your door.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto"
            >
              {/* iOS button */}
              <a
                href="#download"
                className="flex items-center justify-center gap-3 bg-[#1A1208] hover:bg-[#2D2010] text-white px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {/* Apple SVG */}
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] opacity-70 leading-none mb-0.5">
                    Download on
                  </p>
                  <p className="text-sm font-semibold leading-none">iOS</p>
                </div>
              </a>

              {/* Android button */}
              <a
                href="#download"
                className="flex items-center justify-center gap-3 bg-[#FF5C1A] hover:bg-[#e04e14] text-white px-6 py-3.5 rounded-xl transition-all duration-200 orange-glow hover:-translate-y-0.5"
              >
                {/* Google Play SVG */}
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M3.18 23.76c.3.17.64.22.99.16l12.45-7.2-2.78-2.78-10.66 9.82zM.5 1.1C.19 1.43 0 1.94 0 2.61v18.78c0 .67.19 1.18.51 1.51l.08.07 10.52-10.52v-.25L.58 1.03.5 1.1zM20.33 10.53l-2.99-1.73-3.12 3.12 3.13 3.12 3-1.74c.86-.49.86-1.29-.02-1.77zM3.18.24L15.64 7.44l-2.78 2.78L2.19.4c.28-.18.63-.25.99-.16z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] opacity-80 leading-none mb-0.5">
                    Get it on
                  </p>
                  <p className="text-sm font-semibold leading-none">Android</p>
                </div>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 text-sm text-[#7A6A56] flex-wrap"
            >
              <span className="flex items-center gap-1">
                <span className="text-[#FF5C1A]">★</span> 4.8 App Store
              </span>
              <span className="text-[#EDE4D8]">·</span>
              <span>50K+ Customers</span>
              <span className="text-[#EDE4D8]">·</span>
              <span>Free on iOS &amp; Android</span>
            </motion.div>
          </motion.div>

          {/* ══════════════════════════════
              RIGHT — Phone column
          ══════════════════════════════ */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* Phone mockup */}
            <motion.div
              variants={phoneVariants}
              initial="hidden"
              animate="visible"
              className="animate-float relative"
            >
              <PhoneMockup size="lg">
                <AppScreen_Home />
              </PhoneMockup>
            </motion.div>

            {/* Floating card — top right */}
            <motion.div
              variants={floatCardVariants(0.55)}
              initial="hidden"
              animate="visible"
              className="absolute top-4 -right-2 lg:right-0 z-20 glass-card rounded-2xl px-3 py-2.5 min-w-[160px]"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-[#FF5C1A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm">🛵</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1A1208] leading-tight">
                    On the way!
                  </p>
                  <p className="text-[10px] text-[#7A6A56]">
                    Arriving in 18 min
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating card — bottom left */}
            {/* <motion.div
              variants={floatCardVariants(0.65)}
              initial="hidden"
              animate="visible"
              className="absolute bottom-8 -left-4 lg:-left-8 z-20 glass-card rounded-2xl px-3 py-2.5 min-w-[180px]"
            >
              <p className="text-xs font-semibold text-[#1A1208] leading-tight mb-0.5">
                Burger Palace
              </p>
              <div className="flex items-center gap-1.5 text-[10px] text-[#7A6A56]">
                <span className="text-[#FF5C1A]">⭐ 4.9</span>
                <span>·</span>
                <span>22 min</span>
                <span>·</span>
                <span>$1.99 delivery</span>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

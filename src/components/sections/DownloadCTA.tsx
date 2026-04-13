"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PhoneMockup from "@/components/ui/PhoneMockup";
import AppScreen_Tracking from "@/components/ui/AppScreen_Tracking";

export default function DownloadCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="download"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FF5C1A 0%, #FFB800 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-0">
          {/* ══════════════════════════════
              LEFT — Text + CTAs
          ══════════════════════════════ */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pb-16 lg:pb-24">
            {/* H2 */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "Clash Display, sans-serif" }}
            >
              Your next favourite meal
              <br />
              is one tap away.
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-base sm:text-lg mb-10 max-w-md"
              style={{
                fontFamily: "Satoshi, sans-serif",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              Download free. First delivery on us.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto"
            >
              {/* iOS */}
              <a
                href="#"
                className="
                  flex items-center justify-center gap-3
                  bg-white hover:bg-[#FFF4E8]
                  text-[#1A1208] px-6 py-3.5 rounded-xl
                  transition-all duration-200
                  shadow-lg hover:shadow-xl hover:-translate-y-0.5
                  font-medium
                "
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="#1A1208"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] opacity-60 leading-none mb-0.5">
                    Download on
                  </p>
                  <p className="text-sm font-semibold leading-none">iOS</p>
                </div>
              </a>

              {/* Android */}
              <a
                href="#"
                className="
                  flex items-center justify-center gap-3
                  bg-white hover:bg-[#FFF4E8]
                  text-[#1A1208] px-6 py-3.5 rounded-xl
                  transition-all duration-200
                  shadow-lg hover:shadow-xl hover:-translate-y-0.5
                  font-medium
                "
              >
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="#1A1208"
                >
                  <path d="M3.18 23.76c.3.17.64.22.99.16l12.45-7.2-2.78-2.78-10.66 9.82zM.5 1.1C.19 1.43 0 1.94 0 2.61v18.78c0 .67.19 1.18.51 1.51l.08.07 10.52-10.52v-.25L.58 1.03.5 1.1zM20.33 10.53l-2.99-1.73-3.12 3.12 3.13 3.12 3-1.74c.86-.49.86-1.29-.02-1.77zM3.18.24L15.64 7.44l-2.78 2.78L2.19.4c.28-.18.63-.25.99-.16z" />
                </svg>
                <div className="text-left">
                  <p className="text-[10px] opacity-60 leading-none mb-0.5">
                    Get it on
                  </p>
                  <p className="text-sm font-semibold leading-none">Android</p>
                </div>
              </a>
            </motion.div>

            {/* Fine print */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xs"
              style={{
                fontFamily: "Satoshi, sans-serif",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              No subscription · Free to download · Works on iOS 14+ and Android
              8+
            </motion.p>
          </div>

          {/* ══════════════════════════════
              RIGHT — Phone peeking from bottom
          ══════════════════════════════ */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end lg:pl-16">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative"
              style={{ marginBottom: "-30px" }}
            >
              <PhoneMockup size="md">
                <AppScreen_Tracking />
              </PhoneMockup>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionWrapper  from "@/components/shared/SectionWrapper";
import Eyebrow         from "@/components/shared/Eyebrow";

const perks = [
  {
    title:  "Commission as low as 8%",
    detail: "competitors charge 25–30%",
  },
  {
    title:  "Real-time order and revenue dashboard",
    detail: null,
  },
  {
    title:  "Direct customer reviews and analytics",
    detail: null,
  },
];

// Bar chart data
const barData = [
  { day: "Mon", orders: 12 },
  { day: "Tue", orders: 18 },
  { day: "Wed", orders: 24 },
  { day: "Thu", orders: 15 },
  { day: "Fri", orders: 31 },
  { day: "Sat", orders: 38 },
  { day: "Sun", orders: 22 },
];

const maxOrders = Math.max(...barData.map((d) => d.orders));

const recentOrders = [
  { id: "#1042", item: "Burger Combo",  price: "$14.50", status: "done" },
  { id: "#1041", item: "Large Pizza",   price: "$18.00", status: "prep" },
  { id: "#1040", item: "Salad Bowl",    price: "$11.00", status: "done" },
];

export default function RestaurantPartner() {
  return (
    <section id="restaurants" className="w-full bg-[#1A1208]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ══════════════════════════════
              LEFT — Text column
          ══════════════════════════════ */}
          <div>
            <AnimatedSection delay={0} direction="left">
              <Eyebrow color="orange" className="mb-5">For Restaurants</Eyebrow>
            </AnimatedSection>

            <AnimatedSection delay={0.1} direction="left">
              <h2
                className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
                style={{ fontFamily: "Clash Display, sans-serif" }}
              >
                <span className="text-white">Grow your orders.</span>
                <br />
                <span className="text-[#FF5C1A]">Keep your margins.</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2} direction="left">
              <p
                className="text-base leading-relaxed mb-8"
                style={{ fontFamily: "Satoshi, sans-serif", color: "#94806A" }}
              >
                Join 200+ restaurants already reaching new customers through
                Zesto — with the lowest commission rate in the market.
              </p>
            </AnimatedSection>

            {/* Perks list */}
            <AnimatedSection delay={0.3} direction="left">
              <ul className="space-y-4 mb-10">
                {perks.map((perk) => (
                  <li key={perk.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FF5C1A]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#FF5C1A]" />
                    </div>
                    <div>
                      <span
                        className="text-sm font-medium text-white"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        {perk.title}
                      </span>
                      {perk.detail && (
                        <span
                          className="text-xs ml-1.5"
                          style={{ color: "#94806A", fontFamily: "Satoshi, sans-serif" }}
                        >
                          ({perk.detail})
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection delay={0.4} direction="left">
              <div className="flex flex-col items-start gap-3">
                <a
                  href="#"
                  className="
                    inline-flex items-center gap-2
                    bg-[#FF5C1A] hover:bg-[#e04e14]
                    text-white text-sm font-medium
                    px-6 py-3 rounded-xl
                    transition-all duration-200
                    orange-glow hover:-translate-y-0.5
                  "
                >
                  Partner With Us
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p
                  className="text-xs"
                  style={{ color: "#6B5A48", fontFamily: "Satoshi, sans-serif" }}
                >
                  Free to join · No setup fee · Paid weekly
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* ══════════════════════════════
              RIGHT — Dashboard card
          ══════════════════════════════ */}
          <AnimatedSection delay={0.2} direction="right">
            <div
              className="rounded-2xl p-5 border"
              style={{ backgroundColor: "#242010", borderColor: "#3D3420" }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF5C1A]" />
                  <span
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "Clash Display, sans-serif" }}
                  >
                    Zesto Partner Dashboard
                  </span>
                </div>
                <span className="text-[10px] text-[#6B5A48] bg-[#1A1208] px-2 py-1 rounded-full">
                  Live
                </span>
              </div>

              {/* Stat boxes */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {[
                  { value: "47",     label: "orders today"  },
                  { value: "$1,240", label: "this week"     },
                  { value: "⭐ 4.7", label: "rating"        },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-2.5 text-center"
                    style={{ backgroundColor: "#1A1208", border: "1px solid #3D3420" }}
                  >
                    <p
                      className="text-base font-bold text-white leading-tight"
                      style={{ fontFamily: "Clash Display, sans-serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[9px] mt-0.5" style={{ color: "#6B5A48" }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bar chart */}
              <div className="mb-5">
                <p
                  className="text-[10px] font-medium mb-3"
                  style={{ color: "#94806A", fontFamily: "Satoshi, sans-serif" }}
                >
                  Orders This Week
                </p>
                <div className="flex items-end gap-1.5 h-20">
                  {barData.map((bar) => (
                    <div
                      key={bar.day}
                      className="flex-1 flex flex-col items-center gap-1"
                    >
                      <div className="w-full flex items-end" style={{ height: "60px" }}>
                        <div
                          className="w-full rounded-t-sm transition-all duration-500"
                          style={{
                            height: `${(bar.orders / maxOrders) * 100}%`,
                            backgroundColor:
                              bar.day === "Sat" || bar.day === "Fri"
                                ? "#FF5C1A"
                                : "#3D3420",
                          }}
                        />
                      </div>
                      <span className="text-[8px]" style={{ color: "#6B5A48" }}>
                        {bar.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent orders */}
              <div>
                <p
                  className="text-[10px] font-medium mb-2"
                  style={{ color: "#94806A", fontFamily: "Satoshi, sans-serif" }}
                >
                  Recent Orders
                </p>
                <div className="space-y-1.5">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between px-3 py-2 rounded-lg"
                      style={{ backgroundColor: "#1A1208", border: "1px solid #3D3420" }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-medium"
                          style={{ color: "#94806A" }}
                        >
                          {order.id}
                        </span>
                        <span className="text-[10px] text-white">{order.item}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-medium text-white"
                        >
                          {order.price}
                        </span>
                        <span className={`
                          text-[9px] px-1.5 py-0.5 rounded-full font-medium
                          ${order.status === "done"
                            ? "bg-[#FF5C1A]/15 text-[#FF5C1A]"
                            : "bg-[#FFB800]/15 text-[#FFB800]"}
                        `}>
                          {order.status === "done" ? "✓ Done" : "⟳ Prep"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
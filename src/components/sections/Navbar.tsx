"use client";

import { useState, useEffect } from "react";
import { Flame, Download, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features",     href: "#features"     },
  { label: "Restaurants",  href: "#restaurants"  },
  { label: "Download",     href: "#download"     },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeLink,   setActiveLink]   = useState("");

  // Scroll → white bg + shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(`#${id}`); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActiveLink(href);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#EDE4D8]"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ── */}
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-8 h-8 bg-[#FF5C1A] rounded-xl flex items-center justify-center shadow-sm">
                <Flame className="w-4 h-4 text-white" fill="white" />
              </div>
              <span
                className="text-[20px] font-bold text-[#1A1208]"
                style={{ fontFamily: "Clash Display, sans-serif" }}
              >
                Zesto
              </span>
            </a>

            {/* ── Desktop nav links ── */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      activeLink === link.href
                        ? "text-[#FF5C1A]"
                        : "text-[#7A6A56] hover:text-[#1A1208]"
                    )}
                  >
                    {link.label}
                  </span>
                  {/* Active dot indicator */}
                  <span
                    className={cn(
                      "absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FF5C1A] transition-all duration-200",
                      activeLink === link.href ? "opacity-100" : "opacity-0"
                    )}
                  />
                </a>
              ))}
            </nav>

            {/* ── Desktop right side ── */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#restaurants"
                className="text-sm font-medium text-[#7A6A56] hover:text-[#1A1208] transition-colors px-3 py-2"
              >
                For Restaurants
              </a>
          
              <a
                href="#download"
                className="flex items-center gap-2 bg-[#FF5C1A] hover:bg-[#e04e14] text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 orange-glow">
                <Download className="w-4 h-4" />
                Get the App
              </a>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg hover:bg-[#FFF4E8] transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen
                ? <X    className="w-5 h-5 text-[#1A1208]" />
                : <Menu className="w-5 h-5 text-[#1A1208]" />
              }
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 md:hidden transition-all duration-300 ease-in-out",
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="mx-4 bg-white rounded-2xl shadow-xl border border-[#EDE4D8] overflow-hidden">
          <nav className="flex flex-col p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  activeLink === link.href
                    ? "bg-[#FFF4E8] text-[#FF5C1A]"
                    : "text-[#1A1208] hover:bg-[#FFF4E8]"
                )}
              >
                {link.label}
                {activeLink === link.href && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5C1A]" />
                )}
              </a>
            ))}

            <div className="border-t border-[#EDE4D8] mt-2 pt-2 space-y-2">
              <a
                href="#restaurants"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-[#7A6A56] hover:bg-[#FFF4E8] transition-colors"
              >
                For Restaurants
              </a>
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#FF5C1A] text-white text-sm font-medium px-4 py-3 rounded-xl orange-glow"
              >
                <Download className="w-4 h-4" />
                Get the App
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden bg-black/20 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
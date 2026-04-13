"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Delay in seconds before the animation starts.
   * Use staggered values (0, 0.1, 0.2 ...) on sibling elements
   * to create a cascade effect.
   */
  delay?: number;
  /**
   * Direction the element slides in from.
   * "up"    → slides up (default, used for most elements)
   * "left"  → slides in from left (used for text columns)
   * "right" → slides in from right (used for phone/image columns)
   * "none"  → fade only, no translate (used for full-width elements)
   */
  direction?: "up" | "left" | "right" | "none";
  /**
   * How far the element travels before settling (px).
   * Default: 30. Increase for more dramatic entrances.
   */
  distance?: number;
  /**
   * By default the element animates once and stays visible.
   * Set to true if you want it to re-animate every time it enters view.
   */
  repeat?: boolean;
  /**
   * Fraction of the element that must be visible before animating.
   * Default: 0.15 — triggers early enough to feel responsive.
   */
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 30,
  repeat = false,
  threshold = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const isInView = useInView(ref, {
    once: !repeat,
    amount: threshold,
  });

  // Respect the user's accessibility preference — no motion if requested
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Build the initial (hidden) position based on direction
  const initialTranslate = {
    up:    { y: distance, x: 0 },
    left:  { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    none:  { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{
        opacity: 0,
        ...initialTranslate,
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...initialTranslate }
      }
      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier — smooth deceleration
      }}
    >
      {children}
    </motion.div>
  );
}
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  /**
   * "orange" → accent orange text (default, used on light sections)
   * "muted"  → text-muted (used on surface sections)
   * "white"  → white text (used on the dark restaurant section)
   */
  color?: "orange" | "muted" | "white";
  className?: string;
}

export default function Eyebrow({
  children,
  color = "orange",
  className,
}: EyebrowProps) {
  const colorClass = {
    orange: "text-[var(--accent-orange)]",
    muted:  "text-[var(--text-muted)]",
    white:  "text-white/70",
  }[color];

  return (
    <p
      className={cn(
        // All-caps, wide letter spacing, small font — consistent across all sections
        "text-xs font-body font-medium tracking-[0.2em] uppercase",
        colorClass,
        className
      )}
    >
      {children}
    </p>
  );
}
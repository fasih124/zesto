import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  bgColor?: string;
  className?: string;
  innerClassName?: string;
  /**
   * "default" → py-20 (most sections)
   * "tight"   → py-12 (StatsBar)
   * "none"    → no padding (full-bleed sections like DownloadCTA)
   */
  padding?: "default" | "tight" | "none";
}

export default function SectionWrapper({
  children,
  id,
  bgColor,
  className,
  innerClassName,
  padding = "default",
}: SectionWrapperProps) {
  const paddingClass = {
    default: "py-20 lg:py-28",
    tight:   "py-10 lg:py-14",
    none:    "",
  }[padding];

  return (
    <section
      id={id}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
      className={cn("w-full", className)}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          paddingClass,
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
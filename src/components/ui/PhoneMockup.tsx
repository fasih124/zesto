// import { cn } from "@/lib/utils";

// interface PhoneMockupProps {
//   children?: React.ReactNode;
//   size?: "sm" | "md" | "lg";
//   tilt?: boolean;
//   className?: string;
// }

// const sizeMap = {
//   sm: "w-44",
//   md: "w-56",
//   lg: "w-72",
// };

// const heightMap = {
//   sm: "h-[352px]",
//   md: "h-[448px]",
//   lg: "h-[576px]",
// };

// export default function PhoneMockup({
//   children,
//   size = "md",
//   tilt = false,
//   className,
// }: PhoneMockupProps) {
//   return (
//     <div
//       className={cn(
//         "relative flex-shrink-0",
//         sizeMap[size],
//         heightMap[size],
//         tilt && "-rotate-6",
//         className,
//       )}
//     >
//       {/* ── Outer frame ── */}
//       <div className="absolute inset-0 rounded-[40px] bg-[#1A1208] border-2  border-[#2D2010] shadow-2xl overflow-hidden  ">
//         {/* ── Side buttons (right edge) ── */}
//         <div className="absolute right-[-5px] top-24 w-[3px] h-8 bg-[#2D2010] rounded-l-sm" />
//         <div className="absolute right-[-5px] top-36 w-[3px] h-8 bg-[#2D2010] rounded-l-sm" />
//         {/* Power button left side */}
//         <div className="absolute left-[-5px] top-28 w-[3px] h-12 bg-[#61e225] rounded-r-sm" />

//         {/* ── Inner screen ── */}
//         <div className="absolute inset-[3px] rounded-[37px] bg-white overflow-hidden">
//           {/* ── Notch ── */}
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-24 h-4 bg-[#1A1208] rounded-b-2xl flex items-center justify-center gap-2">
//             <div className="w-2 h-1.5 rounded-full bg-[#e0dfde]" />
//             <div className="w-10 h-1 rounded-full bg-[#e2ddd6]" />
//           </div>

//           {/* ── Screen content ── */}
//           <div className="absolute inset-0 pt-6 overflow-hidden">
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  tilt?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "w-44",
  md: "w-56",
  lg: "w-72",
};

const heightMap = {
  sm: "h-[352px]",
  md: "h-[448px]",
  lg: "h-[576px]",
};

/*
 * Border radius values must satisfy this relationship precisely:
 *   inner radius = outer radius - border thickness
 *   36px         = 40px         - 3px (with 1px extra tolerance)
 *
 * Using rounded-[37px] on the inner causes sub-pixel overflow at
 * bottom corners on md/lg because the browser rounds differently
 * at larger physical sizes. 36px is the safe value.
 */
const outerRadius = "rounded-[40px]";
const innerRadius = "rounded-[36px]";

export default function PhoneMockup({
  children,
  size = "md",
  tilt = false,
  className,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative flex-shrink-0",
        sizeMap[size],
        heightMap[size],
        tilt && "-rotate-6",
        className,
      )}
    >
      {/* ── Outer frame ── */}
      <div
        className={cn(
          "absolute inset-0 bg-[#1A1208] border-4 border-[#2D2010] shadow-2xl",
          outerRadius,
          "overflow-hidden", // clips everything including inner corners
        )}
      >
        {/* ── Side buttons (right edge) ── */}
        <div className="absolute right-[-3px] top-24 w-[3px] h-8 bg-[#2D2010] rounded-l-sm" />
        <div className="absolute right-[-3px] top-36 w-[3px] h-8 bg-[#2D2010] rounded-l-sm" />
        {/* Power button left side */}
        <div className="absolute left-[-3px] top-28 w-[3px] h-12 bg-[#2D2010] rounded-r-sm" />

        {/* ── Inner screen ── */}
        <div
          className={cn(
            "p-4 bg-white",
            innerRadius,
            "overflow-hidden", // clips screen content at corners
            "inset-0.75", // 3px inset matches the border thickness exactly
          )}
        >
          {/* ── Notch ── */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-24 h-6 bg-[#1A1208] rounded-b-2xl flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#2D2010]" />
            <div className="w-10 h-1.5 rounded-full bg-[#2D2010]" />
          </div>

          {/* ── Screen content ── */}
          <div className="absolute inset-0 pt-6 overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

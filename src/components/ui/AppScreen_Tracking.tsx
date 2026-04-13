import Image from "next/image";
export default function AppScreen_Tracking() {
  return (
   <div className="w-full h-full relative">
              <Image
                src="/screens/screen-tracking.png"
                alt="Zesto tracking screen"
                fill
                className="object-cover object-top"
              />
            </div>
  );
}
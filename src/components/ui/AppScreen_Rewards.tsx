import Image from "next/image";
export default function AppScreen_Rewards() {
  return (
      <div className="w-full h-full relative">
            <Image
              src="/screens/screen-rewards.png"
              alt="Zesto login screen"
              fill
              className="object-cover object-top"
            />
          </div>
  );
}
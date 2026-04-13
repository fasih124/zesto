import Image from "next/image";

export default function AppScreen_Home() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <Image
        src="/screens/screen-home.png"
        alt="Zesto home screen"
        fill
        className="object-cover object-top"
      />
    </div>
  );
}

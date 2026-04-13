import Image from "next/image";

export default function AppScreen_Menu() {
  return (
   <div className="w-full h-full relative">
         <Image
           src="/screens/screen-menu.png"
           alt="Zesto menu screen"
           fill
           className="object-cover object-top"
         />
       </div>
  );
}
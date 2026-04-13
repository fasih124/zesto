import Navbar             from "@/components/sections/Navbar";
import Hero               from "@/components/sections/Hero";
import StatsBar           from "@/components/sections/StatsBar";
import HowItWorks         from "@/components/sections/HowItWorks";
import Features           from "@/components/sections/Features";
import Screenshots        from "@/components/sections/Screenshots";
import Testimonials       from "@/components/sections/Testimonials";
import RestaurantPartner  from "@/components/sections/RestaurantPartner";
import DownloadCTA        from "@/components/sections/DownloadCTA";
import FAQ                from "@/components/sections/FAQ";
import Footer             from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <HowItWorks />
      <Features />
      <Screenshots />
      <Testimonials />
      <RestaurantPartner />
      <DownloadCTA />
      <FAQ />
      <Footer />
    </main>
  );
}


// import PhoneMockup        from "@/components/ui/PhoneMockup";
// import AppScreen_Home     from "@/components/ui/AppScreen_Home";
// import AppScreen_Menu     from "@/components/ui/AppScreen_Menu";
// import AppScreen_Tracking from "@/components/ui/AppScreen_Tracking";
// import AppScreen_Rewards  from "@/components/ui/AppScreen_Rewards";

// export default function Home() {
//   return (
//     <main className="flex gap-6 p-10 bg-[#FFFAF5] flex-wrap">
//       <PhoneMockup size="md"><AppScreen_Home /></PhoneMockup>
//       <PhoneMockup size="md"><AppScreen_Menu /></PhoneMockup>
//       <PhoneMockup size="md" tilt><AppScreen_Tracking /></PhoneMockup>
//       <PhoneMockup size="md"><AppScreen_Rewards /></PhoneMockup>
//     </main>
//   );
// }
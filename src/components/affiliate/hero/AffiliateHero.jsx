import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function AffiliateHero({ hotels }) {
  return (
    <div className="relative overflow-hidden mb-12 sm:mb-16 min-h-[320px] sm:min-h-[500px] flex items-end sm:items-center -mx-4 md:mx-0 md:rounded-3xl md:border md:border-white/5">
      <HeroBackground />

      <div className="relative z-20 p-6 sm:p-8 md:p-12 h-full flex flex-col justify-between min-h-[280px] sm:min-h-[450px] lg:min-h-[500px] w-full">
        <HeroContent hotels={hotels} />

        {/* Action Button */}
        <div className="flex justify-end pt-8 relative z-20">
          <button className="bg-[#D4A373] hover:bg-[#c4925e] text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

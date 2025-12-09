import HeroVideoCards from "./HeroVideoCards";

export default function HeroContent({ hotels }) {
  return (
    <div className="flex flex-row items-center justify-between gap-2 sm:gap-12 flex-1 w-full h-full relative z-20">
      {/* Left Content - Text */}
      <div className="flex-shrink-0 z-20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-xl text-white whitespace-nowrap">
          <span className="text-[#D4A373]">Watch More</span>
          <br />
          <span className="text-white">Similar Video</span>
        </h2>
      </div>

      {/* Right Content - Video Cards */}
      <HeroVideoCards hotels={hotels} />
    </div>
  );
}

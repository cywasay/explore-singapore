import Image from "next/image";

export default function HeroVideoCards({ hotels }) {
  return (
    <div className="flex gap-2 sm:gap-6 justify-end flex-shrink-0 z-20">
      {hotels.slice(0, 2).map((hotel, index) => (
        <div
          key={hotel.id}
          className={`w-[100px] h-[140px] sm:w-[160px] sm:aspect-[9/16] sm:h-auto rounded-xl bg-neutral-800 border border-white/10 relative group cursor-pointer overflow-hidden shadow-2xl ${
            index === 1 ? "hidden sm:block" : ""
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {hotel.image ? (
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                className="object-cover scale-[1.35]"
              />
            ) : (
              <span className="text-gray-600 font-medium text-xs">Image</span>
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
          <div className="absolute bottom-1 sm:bottom-3 left-1 sm:left-3 right-1 sm:right-3 z-20">
            <div className="text-[8px] sm:text-sm font-medium text-white leading-tight">
              {hotel.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

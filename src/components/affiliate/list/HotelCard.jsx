import Image from "next/image";

export default function HotelCard({ hotel, showPlayButton }) {
  return (
    <div className="min-w-[calc(25%-12px)] sm:min-w-0 snap-start flex-shrink-0 aspect-[9/16] rounded-xl sm:rounded-2xl bg-neutral-800 border border-white/10 relative group cursor-pointer overflow-hidden transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        {hotel.image ? (
          <Image
            src={hotel.image}
            alt={hotel.name}
            fill
            className="object-cover scale-[1.35]"
          />
        ) : (
          <span className="text-gray-600 font-medium">Image</span>
        )}
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        {showPlayButton ? (
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/play-button.png"
              alt="Play"
              width={56}
              height={56}
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        ) : (
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/90 to-transparent z-20">
        <p className="text-[10px] sm:text-sm font-medium text-gray-200 leading-tight">
          {hotel.name}
        </p>
      </div>
    </div>
  );
}

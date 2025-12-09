import HotelCard from "./HotelCard";

export default function HotelCarousel({ hotels, showPlayButton = false }) {
  return (
    <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:pb-0 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 scrollbar-hide snap-x snap-mandatory">
      {hotels.map((hotel) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
          showPlayButton={showPlayButton}
        />
      ))}
    </div>
  );
}

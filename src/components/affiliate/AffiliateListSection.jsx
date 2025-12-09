import SectionHeader from "./list/SectionHeader";
import HotelCarousel from "./list/HotelCarousel";

export default function AffiliateListSection({
  title,
  hotels,
  showPlayButton = false,
}) {
  return (
    <div className="mb-12 sm:mb-16">
      <SectionHeader title={title} />
      <HotelCarousel hotels={hotels} showPlayButton={showPlayButton} />
    </div>
  );
}

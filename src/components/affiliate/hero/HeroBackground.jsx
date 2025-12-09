import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/hotel-hero-main.png"
        alt="Hotel Singapore Night View"
        fill
        className="object-cover"
        priority
      />
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 sm:hidden" />
    </div>
  );
}

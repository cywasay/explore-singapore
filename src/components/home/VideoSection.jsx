import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="relative z-10 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="relative group cursor-pointer">
          {/* Glowing Frame Container */}
          <div
            className="relative rounded-xl md:rounded-3xl overflow-hidden"
            style={{
              boxShadow: "0px 1px 10.3px 10px #FF8D2857",
            }}
          >
            {/* Outer Glow Effect - Strong */}
            <div
              className="absolute inset-0 rounded-xl md:rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(204, 153, 85, 0.5) 0%, rgba(204, 153, 85, 0.3) 40%, transparent 70%)",
                filter: "blur(40px)",
                transform: "scale(1.1)",
                zIndex: -1,
              }}
            />

            {/* Inner Glow Effect */}
            <div
              className="absolute inset-0 rounded-xl md:rounded-3xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(204, 153, 85, 0.3) 0%, rgba(204, 153, 85, 0.15) 50%, rgba(204, 153, 85, 0.3) 100%)",
                filter: "blur(30px)",
                transform: "scale(1.05)",
              }}
            />

            {/* Golden Border Frame */}
            <div
              className="absolute inset-0 rounded-xl md:rounded-3xl"
              style={{
                border: "4px solid #CC9955",
                boxShadow:
                  "0 0 60px rgba(204, 153, 85, 0.8), 0 0 100px rgba(204, 153, 85, 0.5), inset 0 0 40px rgba(204, 153, 85, 0.3)",
              }}
            />

            {/* Video Preview Image */}
            <div className="relative">
              <Image
                src="/video-preview.png"
                alt="AI Assistant Demo"
                width={1200}
                height={675}
                className="w-full h-auto rounded-xl md:rounded-3xl"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group-hover:scale-110 transition-transform duration-300">
                  {/* Golden Glow */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(204, 153, 85, 0.6) 0%, rgba(204, 153, 85, 0.3) 40%, transparent 70%)",
                      filter: "blur(25px)",
                      transform: "scale(1.8)",
                    }}
                  />

                  {/* Play Button */}
                  <Image
                    src="/play-button.png"
                    alt="Play"
                    width={120}
                    height={120}
                    className="object-contain relative z-10 w-16 h-16 md:w-[120px] md:h-[120px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

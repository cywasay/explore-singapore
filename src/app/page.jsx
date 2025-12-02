import Header from "../components/Header";
import EventSection from "../components/EventSection";
import TestimonialScroller from "../components/TestimonialScroller";
import AdventureCallToAction from "../components/AdventureCallToAction";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Header />

      {/* Background Singapore Text */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <Image
          src="/singapore-text-bg.png"
          alt=""
          width={1000}
          height={400}
          className="object-contain opacity-25"
          style={{ filter: 'brightness(1.3)' }}
        />
        {/* Gradient Ellipse Overlay */}
        <div
          className="absolute inset-0 -translate-x-1/4"
          style={{
            background: 'radial-gradient(ellipse 1000px 700px at center, rgba(21, 21, 21, 0.4) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-28 pb-12 px-6 md:px-16 min-h-screen md:h-[calc(100vh-80px)] flex items-center">
        <div className="max-w-[1400px] mx-auto w-full flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-6 md:pl-4 flex flex-col items-center md:items-start text-center md:text-left w-full">
            <div className="w-full max-w-[800px]">
              <h1
                className="font-bold text-4xl md:text-[60.76px] leading-tight md:leading-[72.16px] tracking-tight md:tracking-[-0.53px]"
              >
                <span className="text-white">Experience </span>
                <span
                  className="inline-block relative text-[#CC9955] px-4 py-2 md:px-[18px] md:py-[9px] mx-2 md:mx-[11.55px]"
                  style={{
                    backgroundImage: 'url(/singapore-frame.png)',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                  }}
                >
                  Singapore
                </span>
                <br className="hidden md:block" />
                <span className="text-white">With Confidence!</span>
              </h1>

              <p
                className="text-gray-400 max-w-[600px] pt-4 md:pt-2 mx-auto md:mx-0 text-sm md:text-[15.19px] leading-relaxed md:leading-[22.78px]"
              >
                Let our AI craft the perfect itinerary tailored just for you, or take the lead to browse and book from curated activities. Whatever your style, your Singapore Adventure starts here.
              </p>

              <div
                className="flex flex-col md:flex-row items-center pt-8 md:pt-6 gap-4 md:gap-[22.30px] w-full md:w-[700px]"
              >
                <button
                  className="text-white font-medium transition-colors hover:opacity-90 bg-[#CC9955] rounded-[22.30px] px-8 py-3 md:px-[29.74px] md:py-[14.87px] text-sm md:text-[14.87px] w-full md:w-[263.89px]"
                >
                  Perfect Trip, Instantly
                </button>

                <button
                  className="text-gray-300 font-medium transition-colors hover:text-white flex items-center justify-center gap-2 md:gap-[11.16px] rounded-[22.30px] px-8 py-3 md:px-[29.74px] md:py-[14.87px] text-sm md:text-[14.87px] w-full md:w-[344.05px]"
                >
                  Discover Activities Yourself
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center w-full -mt-8 md:mt-0">
            <Image
              src="/robot-hero.png"
              alt="AI Travel Assistant"
              width={550}
              height={550}
              className="object-contain w-[345px] md:w-[550px] h-auto"
              priority
            />
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 px-6 md:py-16 md:px-16">
        <div className="flex items-center justify-center gap-4 md:gap-16">
          {/* Left Decorative Dots */}
          <Image
            src="/dots-left.png"
            alt=""
            width={40}
            height={24}
            className="object-contain hidden md:block"
          />

          {/* Stats Container */}
          <div
            className="w-full max-w-[754px] grid grid-cols-2 gap-8 md:flex md:justify-between md:items-center"
          >
            <div className="text-center">
              <div className="text-white text-3xl md:text-4xl font-bold">1500+</div>
              <div className="text-gray-400 text-xs md:text-sm">Trips<br />Completed</div>
            </div>

            <div className="text-center">
              <div className="text-white text-3xl md:text-4xl font-bold">98%</div>
              <div className="text-gray-400 text-xs md:text-sm">Client<br />Satisfaction</div>
            </div>

            <div className="text-center">
              <div className="text-white text-3xl md:text-4xl font-bold">5+</div>
              <div className="text-gray-400 text-xs md:text-sm">Years of<br />Experience</div>
            </div>

            <div className="text-center">
              <div className="text-white text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-gray-400 text-xs md:text-sm">Support<br />Available</div>
            </div>
          </div>

          {/* Right Decorative Dots */}
          <Image
            src="/dots-right.png"
            alt=""
            width={40}
            height={24}
            className="object-contain hidden md:block"
          />
        </div>
      </section>

      {/* Video Section */}
      {/* Video Section */}
      <section className="relative z-10 py-12 px-6 md:py-20 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="relative group cursor-pointer">
            {/* Glowing Frame Container */}
            <div className="relative rounded-xl md:rounded-3xl overflow-hidden">
              {/* Outer Glow Effect - Strong */}
              <div
                className="absolute inset-0 rounded-xl md:rounded-3xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(204, 153, 85, 0.5) 0%, rgba(204, 153, 85, 0.3) 40%, transparent 70%)',
                  filter: 'blur(40px)',
                  transform: 'scale(1.1)',
                  zIndex: -1,
                }}
              />

              {/* Inner Glow Effect */}
              <div
                className="absolute inset-0 rounded-xl md:rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(204, 153, 85, 0.3) 0%, rgba(204, 153, 85, 0.15) 50%, rgba(204, 153, 85, 0.3) 100%)',
                  filter: 'blur(30px)',
                  transform: 'scale(1.05)',
                }}
              />

              {/* Golden Border Frame */}
              <div
                className="absolute inset-0 rounded-xl md:rounded-3xl"
                style={{
                  border: '4px solid #CC9955',
                  boxShadow: '0 0 60px rgba(204, 153, 85, 0.8), 0 0 100px rgba(204, 153, 85, 0.5), inset 0 0 40px rgba(204, 153, 85, 0.3)',
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
                        background: 'radial-gradient(circle, rgba(204, 153, 85, 0.6) 0%, rgba(204, 153, 85, 0.3) 40%, transparent 70%)',
                        filter: 'blur(25px)',
                        transform: 'scale(1.8)',
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

      {/* Singapore Festivals & Events Section */}
      <EventSection />

      {/* Testimonial Scroller Section */}
      <TestimonialScroller />

      {/* Adventure Call to Action Section */}
      <AdventureCallToAction />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}

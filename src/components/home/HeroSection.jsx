import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Mobile Hero Section */}
      <section className="md:hidden relative z-10 pt-24 pb-12 px-4 min-h-screen flex items-center">
        <div className="w-full max-w-[440px] mx-auto flex flex-col items-center text-center relative">
          {/* Sparkle Decorations - One on each side */}
          <Image
            src="/sparkle.png"
            alt=""
            width={40}
            height={40}
            className="absolute w-8 h-8 -z-10"
            style={{
              top: "52px",
              left: "4px",
              opacity: 0.8,
            }}
          />
          <Image
            src="/sparkle.png"
            alt=""
            width={48}
            height={40}
            className="absolute -z-10"
            style={{
              top: "-30px",
              right: "-4px",
              opacity: 0.76,
              width: "48px",
              height: "40px",
            }}
          />

          {/* Main Heading */}
          <h1 className="font-bold text-[28px] leading-[35px] tracking-[-0.53px] mb-2 relative z-10">
            <span className="text-white">Your </span>
            <span className="text-[#CC9955]">Singapore</span>
            <span className="text-white"> Journey</span>
          </h1>

          {/* Subheading */}
          <p className="text-white text-base mb-4 relative z-10">
            Now Smarter with Explore Singapore
          </p>

          {/* Robot Image */}
          <div className="relative w-full max-w-[383px] h-[391px] mb-4">
            <Image
              src="/robot-hero.png"
              alt="AI Travel Assistant"
              width={383}
              height={391}
              className="object-contain w-full h-full"
              style={{ transform: "scale(1.3) translateY(-20px)" }}
              priority
            />
          </div>

          {/* Description */}
          <p className="text-white text-lg mb-2 -mt-6 relative z-10">
            Meet your personal Singapore Guide
          </p>

          {/* Availability */}
          <p className="text-[#CC9955] text-base mb-6">Available 24/7</p>

          {/* CTA Button */}
          <button
            className="bg-[#CC9955] text-white font-medium rounded-[15.93px] hover:opacity-90 transition-opacity"
            style={{
              width: "219px",
              height: "38px",
              padding: "10.62px 21.24px",
            }}
          >
            Start Chatting Now
          </button>
        </div>
      </section>

      {/* Desktop Hero Section */}
      <section className="hidden md:flex relative z-10 pt-28 pb-12 min-h-screen items-center overflow-hidden">
        {/* Background Singapore Text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          <Image
            src="/singapore-text-bg.png"
            alt=""
            width={1000}
            height={400}
            className="object-contain opacity-25"
            style={{ filter: "brightness(1.3)" }}
          />
          {/* Gradient Ellipse Overlay */}
          <div
            className="absolute inset-0 -translate-x-1/4"
            style={{
              background:
                "radial-gradient(ellipse 1000px 700px at center, rgba(21, 21, 21, 0.4) 0%, transparent 60%)",
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-2 gap-4 lg:gap-8 items-center px-8 lg:px-16 relative z-10">
          {/* Left Content */}
          <div className="relative">
            {/* Sparkle Decorations */}
            <Image
              src="/sparkle.png"
              alt=""
              width={50}
              height={50}
              className="absolute w-[50px] h-[50px] -z-10"
              style={{
                top: "-20px",
                right: "100px",
                opacity: 0.8,
              }}
            />
            <Image
              src="/sparkle.png"
              alt=""
              width={40}
              height={40}
              className="absolute w-[40px] h-[40px] -z-10"
              style={{
                bottom: "180px",
                right: "20px",
                opacity: 0.6,
              }}
            />

            {/* Content Wrapper */}
            <div>
              {/* Main Heading */}
              <h1 className="font-bold text-4xl lg:text-[56px] leading-tight lg:leading-[65px] tracking-[-0.53px] mb-4">
                <span className="text-white">Your </span>
                <span className="text-[#CC9955]">Singapore</span>
                <span className="text-white"> Journey</span>
              </h1>

              {/* Subheading */}
              <p className="text-white text-xl lg:text-[28px] mb-6 lg:mb-8 leading-relaxed">
                Now Smarter with Explore Singapore
              </p>

              {/* Description */}
              <p className="text-white text-base lg:text-[20px] mb-2">
                Meet your personal Singapore Guide{" "}
                <span className="text-[#CC9955] block lg:inline">
                  Available 24/7
                </span>
              </p>

              {/* CTA Button */}
              <button className="bg-[#CC9955] text-white font-medium rounded-[25px] hover:opacity-90 transition-opacity mt-6 lg:mt-8 px-8 lg:px-12 py-3 lg:py-4 text-base lg:text-[18px]">
                Start Chatting Now
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center relative">
            <Image
              src="/robot-hero.png"
              alt="AI Travel Assistant"
              width={600}
              height={600}
              className="object-contain w-full h-auto max-w-[600px]"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}

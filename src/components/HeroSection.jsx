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
                            top: '52px',
                            left: '4px',
                            opacity: 0.8
                        }}
                    />
                    <Image
                        src="/sparkle.png"
                        alt=""
                        width={48}
                        height={40}
                        className="absolute -z-10"
                        style={{
                            top: '-30px',
                            right: '-4px',
                            opacity: 0.76,
                            width: '48px',
                            height: '40px'
                        }}
                    />

                    {/* Main Heading */}
                    <h1
                        className="font-bold text-[28px] leading-[35px] tracking-[-0.53px] mb-2 relative z-10"
                    >
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
                            style={{ transform: 'scale(1.3) translateY(-20px)' }}
                            priority
                        />
                    </div>

                    {/* Description */}
                    <p className="text-white text-lg mb-2 -mt-6 relative z-10">
                        Meet your personal Singapore Guide
                    </p>

                    {/* Availability */}
                    <p className="text-[#CC9955] text-base mb-6">
                        Available 24/7
                    </p>

                    {/* CTA Button */}
                    <button
                        className="bg-[#CC9955] text-white font-medium rounded-[15.93px] hover:opacity-90 transition-opacity"
                        style={{
                            width: '219px',
                            height: '38px',
                            padding: '10.62px 21.24px'
                        }}
                    >
                        Start Chatting Now
                    </button>
                </div>
            </section>

            {/* Desktop Hero Section */}
            <section className="hidden md:flex relative z-10 pt-28 pb-12 px-6 md:px-16 min-h-screen md:h-[calc(100vh-80px)] items-center">
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
        </>
    );
}

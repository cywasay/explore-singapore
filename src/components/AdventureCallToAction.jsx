import Image from "next/image";

export default function AdventureCallToAction() {
    return (
        <section className="relative z-10 py-12 px-6 md:py-20 md:px-16">
            <div className="max-w-[1400px] mx-auto">
                {/* Container with border */}
                <div className="relative bg-[#1a1a1a] rounded-xl md:rounded-3xl border border-gray-700 p-8 md:p-16 overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-0">
                        {/* Left Content */}
                        <div className="flex-1 max-w-[500px] text-center md:text-left w-full">
                            {/* Heading */}
                            <h2 className="text-white text-3xl md:text-5xl font-normal mb-1 md:mb-2">
                                Your Singapore
                            </h2>
                            <h2 className="text-white text-3xl md:text-5xl font-normal mb-1 md:mb-2">
                                Adventure
                            </h2>
                            <h2 className="text-[#D4A373] text-3xl md:text-5xl font-bold mb-4 md:mb-6">
                                Start Here!
                            </h2>

                            {/* Description */}
                            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                                Let our AI craft the perfect itinerary tailored just for you, or take the lead to browse and book from curated activities. Whatever your style, your Singapore Adventure starts here.
                            </p>

                            {/* Email Input - Unified design for all screens */}
                            <div className="relative w-full max-w-md mx-auto md:mx-0">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent border border-gray-600 rounded-full pl-6 pr-24 py-3 text-sm md:text-base text-white placeholder-gray-300 focus:outline-none focus:border-[#D4A373] transition-colors"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#D4A373] hover:bg-[#c4925e] rounded-full px-5 py-2 flex items-center justify-center transition-colors">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>

                            {/* Robot Image - Mobile only, below the input */}
                            <div className="md:hidden mt-8 flex justify-center">
                                <Image
                                    src="/robot-hero.png"
                                    alt="AI Travel Assistant"
                                    width={345}
                                    height={345}
                                    className="object-contain max-w-full h-auto"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right Image - Desktop only, Scaled Up 2x */}
                        <div className="hidden md:block relative w-[400px] h-[300px]">
                            <Image
                                src="/robot-hero.png"
                                alt="AI Travel Assistant"
                                fill
                                className="object-contain scale-[2]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

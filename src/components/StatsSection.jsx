"use client";

import Image from "next/image";

export default function StatsSection() {
    const stats = [
        {
            value: "1500+",
            label: "Trips\nCompleted"
        },
        {
            value: "98%",
            label: "Client\nSatisfaction"
        },
        {
            value: "5+",
            label: "Years of\nExperience"
        },
        {
            value: "24/7",
            label: "Support\nAvailable"
        }
    ];

    return (
        <section className="relative z-10 py-12 md:py-16 -mt-[30px]">
            <div className="max-w-[1400px] mx-auto px-4 md:px-16">
                {/* Desktop View */}
                <div className="hidden md:flex items-center justify-between w-full">
                    {/* Left Decorative Dots */}
                    <Image
                        src="/dots-left.png"
                        alt=""
                        width={40}
                        height={24}
                        className="object-contain flex-shrink-0"
                    />

                    {/* Stats Container - Spreads out stats equally between dots */}
                    <div className="flex-grow flex justify-between items-center px-24">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-left">
                                <div className="text-white text-4xl font-bold">{stat.value}</div>
                                <div className="text-gray-400 text-sm whitespace-pre-line">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Right Decorative Dots */}
                    <Image
                        src="/dots-right.png"
                        alt=""
                        width={40}
                        height={24}
                        className="object-contain flex-shrink-0"
                    />
                </div>

                {/* Mobile Slider View - Continuous Smooth Scrolling */}
                <div className="md:hidden overflow-hidden relative">
                    <div
                        className="flex gap-4"
                        style={{
                            animation: 'smoothScroll 5s linear infinite'
                        }}
                    >
                        {/* Duplicate stats 3 times for seamless loop */}
                        {[...Array(3)].map((_, repeatIndex) => (
                            stats.map((stat, index) => (
                                <div
                                    key={`${repeatIndex}-${index}`}
                                    className="flex-shrink-0 text-center px-2"
                                    style={{ width: 'calc(33.333% - 10.67px)' }}
                                >
                                    <div className="text-white text-3xl font-bold">{stat.value}</div>
                                    <div className="text-gray-400 text-xs whitespace-pre-line">{stat.label}</div>
                                </div>
                            ))
                        ))}
                    </div>

                    {/* CSS Animation */}
                    <style jsx>{`
                        @keyframes smoothScroll {
                            0% {
                                transform: translateX(0);
                            }
                            100% {
                                transform: translateX(-33.333%);
                            }
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
}

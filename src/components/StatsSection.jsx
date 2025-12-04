"use client";

import { useState, useEffect } from "react";
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

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                // We have 4 stats, showing 2 at a time, so we have 2 pairs (0-1, 2-3)
                // After showing pair at index 2-3, go back to 0-1
                if (prev === 2) {
                    return 0;
                }
                return prev + 2;
            });
        }, 3000); // Auto-slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

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

                {/* Mobile Slider View */}
                <div className="md:hidden overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${(currentIndex / 2) * 100}%)`
                        }}
                    >
                        {/* Render pairs of stats */}
                        {[0, 2].map((pairStartIndex) => (
                            <div
                                key={pairStartIndex}
                                className="w-full flex-shrink-0 grid grid-cols-2 gap-8 px-4"
                            >
                                {stats.slice(pairStartIndex, pairStartIndex + 2).map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-white text-3xl font-bold">{stat.value}</div>
                                        <div className="text-gray-400 text-xs whitespace-pre-line">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {[0, 2].map((pairIndex, idx) => (
                            <button
                                key={pairIndex}
                                onClick={() => setCurrentIndex(pairIndex)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === pairIndex
                                        ? 'bg-[#CC9955] w-6'
                                        : 'bg-gray-600'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

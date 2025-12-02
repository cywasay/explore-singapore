"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function TestimonialScroller() {
    // Start at index 1 (which corresponds to the first real item, Daniel)
    // Index 0 will be the clone of the last item (Lisa)
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const testimonials = [
        {
            name: "Daniel Carter",
            daysAgo: "7 Days ago",
            rating: 5.0,
            review: "I started following the meal plans here and within a month, my energy levels doubled! The recipes are tasty, easy to cook, and perfect for my busy lifestyle.",
            avatar: "/avatar-1.jpg"
        },
        {
            name: "Sarah Johnson",
            daysAgo: "5 Days ago",
            rating: 5.0,
            review: "Amazing experience! The cultural tours were incredibly well-organized and the guides were knowledgeable. Highly recommend for anyone visiting Singapore.",
            avatar: "/avatar-2.jpg"
        },
        {
            name: "Michael Chen",
            daysAgo: "3 Days ago",
            rating: 5.0,
            review: "The food festival was absolutely fantastic! So many diverse flavors and the atmosphere was electric. Can't wait to come back next year.",
            avatar: "/avatar-3.jpg"
        },
        {
            name: "Emily Rodriguez",
            daysAgo: "10 Days ago",
            rating: 5.0,
            review: "Vesak Day celebrations were so peaceful and beautiful. The temple visits and lantern processions created such a serene atmosphere.",
            avatar: "/avatar-4.jpg"
        },
        {
            name: "James Wilson",
            daysAgo: "2 Days ago",
            rating: 5.0,
            review: "National Day parade was spectacular! The fireworks, performances, and overall patriotic spirit made it an unforgettable experience.",
            avatar: "/avatar-5.jpg"
        },
        {
            name: "Priya Sharma",
            daysAgo: "6 Days ago",
            rating: 5.0,
            review: "Deepavali celebrations in Little India were magical! The lights, colors, and festive atmosphere were absolutely breathtaking.",
            avatar: "/avatar-6.jpg"
        },
        {
            name: "David Lee",
            daysAgo: "4 Days ago",
            rating: 5.0,
            review: "The Grand Prix experience was thrilling! Watching F1 cars race through the city streets at night was an adrenaline rush like no other.",
            avatar: "/avatar-7.jpg"
        },
        {
            name: "Lisa Anderson",
            daysAgo: "8 Days ago",
            rating: 5.0,
            review: "Mid-Autumn Festival was delightful! The mooncakes were delicious and the lantern displays were stunning. A perfect family experience.",
            avatar: "/avatar-8.jpg"
        }
    ];

    // Create extended array for infinite scroll: [Last, ...All, First]
    const extendedTestimonials = [
        testimonials[testimonials.length - 1],
        ...testimonials,
        testimonials[0]
    ];

    const nextTestimonial = () => {
        if (!isTransitioning) return;
        setCurrentIndex((prev) => prev + 1);
    };

    const prevTestimonial = () => {
        if (!isTransitioning) return;
        setCurrentIndex((prev) => prev - 1);
    };

    const handleAvatarClick = (index) => {
        if (!isTransitioning) return;
        // Map the clicked original index (0-7) to the extended array index (1-8)
        setCurrentIndex(index + 1);
    };

    // Handle infinite scroll snap-back
    const handleTransitionEnd = () => {
        if (currentIndex === 0) {
            // Snapped to the clone of Last -> Jump to real Last
            setIsTransitioning(false);
            setCurrentIndex(testimonials.length);
        } else if (currentIndex === extendedTestimonials.length - 1) {
            // Snapped to the clone of First -> Jump to real First
            setIsTransitioning(false);
            setCurrentIndex(1);
        }
    };

    // Re-enable transition after snapping
    useEffect(() => {
        if (!isTransitioning) {
            // Use requestAnimationFrame to ensure the snap happened without transition
            // before re-enabling it
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setIsTransitioning(true);
                });
            });
        }
    }, [isTransitioning]);

    // Calculate the real active index (0-7) for the avatar highlighting
    // currentIndex 1 -> real index 0
    // currentIndex 0 -> real index 7
    // currentIndex 9 -> real index 0
    const realActiveIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;

    // Calculate transform based on screen size
    // Mobile: Show 1 item, centered. Offset = currentIndex * 100%
    // Desktop: Show 3 items, centered. Offset = (currentIndex - 1) * 33.333%
    const transformValue = isMobile
        ? `translateX(-${currentIndex * 100}%)`
        : `translateX(-${(currentIndex - 1) * (100 / 3)}%)`;

    return (
        <section className="relative z-10 py-12 px-6 md:py-20 md:px-16 bg-gradient-to-b from-transparent to-black/20">
            <div className="max-w-[1400px] mx-auto">
                {/* Heading */}
                <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
                    Experiences That Inspire
                </h2>

                {/* Avatar Row */}
                <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-12 overflow-x-auto py-4 px-4 hide-scrollbar">
                    {testimonials.map((testimonial, index) => {
                        return (
                            <div
                                key={index}
                                className={`relative flex-shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden border-2 md:border-4 transition-all duration-300 cursor-pointer ${index === realActiveIndex
                                    ? "border-[#FF4D4D] md:border-[#D4A373] scale-110 shadow-[0_0_10px_rgba(255,77,77,0.5)] md:shadow-none"
                                    : "border-gray-600 opacity-60 hover:opacity-100"
                                    }`}
                                onClick={() => handleAvatarClick(index)}
                            >
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Testimonial Cards */}
                <div className="relative overflow-hidden">
                    <div
                        className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
                        style={{
                            transform: transformValue,
                            gap: isMobile ? '0px' : '24px' // No gap on mobile as we show 1 card full width
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {extendedTestimonials.map((testimonial, index) => {
                            const isCentered = index === currentIndex;

                            return (
                                <div
                                    key={index}
                                    className={`flex-shrink-0 relative transition-all duration-500 ${isMobile
                                        ? 'w-full px-1' // Mobile: Full width
                                        : 'w-[calc(33.333%-16px)]' // Desktop: 1/3 width
                                        } ${!isMobile && !isCentered ? 'opacity-50 blur-[2px] scale-95' : 'opacity-100 blur-0 scale-100'
                                        }`}
                                >
                                    {/* Card Content Container */}
                                    <div className={`relative bg-[#1a1a1a] p-6 md:p-8 h-full ${isMobile
                                        ? 'border border-[#D4A373] rounded-sm' // Mobile: Thin border with dots
                                        : 'border-2 border-[#D4A373] rounded-lg' // Desktop: Standard border
                                        }`}>

                                        {/* Mobile Decorative Corner Dots */}
                                        {isMobile && (
                                            <>
                                                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#D4A373] rounded-full" />
                                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4A373] rounded-full" />
                                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D4A373] rounded-full" />
                                                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D4A373] rounded-full" />
                                            </>
                                        )}

                                        {/* Content */}
                                        <div className="relative z-10">
                                            {/* Name and Date */}
                                            <div className="flex items-baseline gap-2 mb-3">
                                                <h3 className="text-white text-xl md:text-lg font-semibold">
                                                    {testimonial.name}
                                                </h3>
                                                <span className="text-gray-500 text-xs md:text-sm">{testimonial.daysAgo}</span>
                                            </div>

                                            {/* Rating */}
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="flex gap-1">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className="w-4 h-4 md:w-5 md:h-5 fill-[#D4A373]"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="text-white font-semibold ml-2 text-sm md:text-base">{testimonial.rating}</span>
                                            </div>

                                            {/* Review Text */}
                                            <p className="text-gray-300 md:text-gray-400 text-sm md:text-base leading-relaxed">
                                                {testimonial.review}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={prevTestimonial}
                        className="group w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#D4A373] hover:bg-[#D4A373] hover:text-white transition-all duration-300 active:scale-95"
                        aria-label="Previous testimonial"
                    >
                        <svg
                            className="w-6 h-6 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="group w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-[#D4A373] hover:bg-[#D4A373] hover:text-white transition-all duration-300 active:scale-95"
                        aria-label="Next testimonial"
                    >
                        <svg
                            className="w-6 h-6 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

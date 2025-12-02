"use client";

import { useState } from "react";
import EventCard from "./EventCard";

export default function EventSection() {
    const events = [
        {
            imageUrl: "/chinese-new-year.jpg",
            title: "Chinese New Year",
            description: "Vibrant celebrations, street parades, and traditional lion dances."
        },
        {
            imageUrl: "/hari-raya.png",
            title: "Hari Raya Puasa",
            description: "Marks the end of Ramadan with festive lights, bazaars, and delicious food."
        },
        {
            imageUrl: "/vesak-day.png",
            title: "Vesak Day",
            description: "A serene Buddhist festival with temple visits and lantern processions."
        },
        {
            imageUrl: "/food-festival.jpg",
            title: "Singapore Food Festival",
            description: "A culinary extravaganza showcasing local and international flavors."
        },
        {
            imageUrl: "/national-day.jpg",
            title: "National Day",
            description: "Celebrates Singapore's independence with a grand parade and fireworks."
        },
        {
            imageUrl: "/deepavali.jpg",
            title: "Deepavali (Diwali)",
            description: "The Festival of Lights, celebrated with vibrant decorations and cultural events."
        },
        {
            imageUrl: "/chinese-new-year.jpg",
            title: "Singapore Grand Prix",
            description: "Experience the thrill of Formula 1 racing under the city lights."
        },
        {
            imageUrl: "/hari-raya.png",
            title: "Mid-Autumn Festival",
            description: "Celebrate with mooncakes, lanterns, and family gatherings."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextEvent = () => {
        setCurrentIndex((prev) => (prev + 1) % events.length);
    };

    const prevEvent = () => {
        setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
    };

    return (
        <section className="relative z-10 py-12 px-6 md:py-20 md:px-16">
            <div className="max-w-[1400px] mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8 md:mb-12 text-center md:text-left">
                    <div>
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-3">Singapore Festivals & Events</h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-[500px] mx-auto md:mx-0">
                            Experience the vibrant culture and diverse traditions through Singapore's annual festivals.
                        </p>
                    </div>
                    <button className="hidden md:block px-6 py-3 rounded-full border border-gray-700 text-gray-300 hover:border-[#D4A373] hover:text-white transition-all duration-300">
                        Show All
                    </button>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-4 gap-x-8 gap-y-10 justify-items-center">
                    {events.map((event, index) => (
                        <EventCard key={index} {...event} />
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden flex items-center justify-center gap-3">
                    {/* Left Arrow */}
                    <button
                        onClick={prevEvent}
                        className="w-10 h-10 rounded-full border border-gray-600 bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:border-[#D4A373] hover:text-white active:border-[#D4A373] active:text-white transition-all duration-300 active:scale-95 flex-shrink-0"
                        aria-label="Previous event"
                    >
                        <svg
                            className="w-5 h-5 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Card */}
                    <div className="transition-all duration-300 transform">
                        <EventCard {...events[currentIndex]} />
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextEvent}
                        className="w-10 h-10 rounded-full bg-[#D4A373] flex items-center justify-center text-white hover:bg-[#c4925e] active:bg-[#c4925e] transition-all duration-300 active:scale-95 flex-shrink-0 shadow-lg shadow-[#D4A373]/20"
                        aria-label="Next event"
                    >
                        <svg
                            className="w-5 h-5 stroke-current"
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

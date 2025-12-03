"use client";

import Image from "next/image";

export default function EventCard({ title, description, imageUrl }) {
    return (
        <div className="group relative cursor-pointer 
            w-[220px] h-[300px] md:w-[289px] md:h-[370px]
            bg-[#191919] border border-[#2D2D2D] overflow-hidden
            transition-all duration-500 ease-out
            rounded-[16px] card-clip"
        >

            {/* CLIP-PATH ANIMATION - Temporarily removed for debugging */}
            {/* 
            <style jsx>{`
                .card-clip {
                    clip-path: path(
                        "M0 0 H100% V100% H0 Z"
                    );
                    transition: clip-path 0.5s ease;
                }
                .group:hover .card-clip {
                    clip-path: path(
                        "M0 0 H100% V70% C100% 100%, 70% 100%, 58% 100% H0 Z"
                    );
                }
            `}</style> 
            */}

            {/* IMAGE - 50% on both mobile and desktop */}
            <div className="w-full h-[50%] overflow-hidden relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={289}
                    height={178}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
            </div>

            {/* TEXT - 50% on both mobile and desktop */}
            <div className="p-4 md:p-5 relative z-10 flex flex-col justify-between h-[50%]">
                <div>
                    <h3 className="text-white text-[18px] md:text-[22px] font-bold mb-1.5 md:mb-2 leading-tight tracking-tight">
                        {title}
                    </h3>
                    <p className="text-[#AAAAAA] text-[13px] md:text-[14px] leading-[1.4] md:leading-[1.5] tracking-wide line-clamp-2 md:line-clamp-3">
                        {description}
                    </p>
                </div>

                {/* ARROW - Smaller and always visible on mobile, hidden on desktop unless hover */}
                <div className="
                    flex md:hidden
                    absolute z-20 w-8 h-8 rounded-full 
                    bg-[#2a2a2a]
                    items-center justify-center 
                    right-4 bottom-4
                ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-[14px] h-[14px] text-white"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>

                {/* ARROW - Desktop version */}
                <div className="
                    hidden md:flex
                    absolute z-20 w-11 h-11 rounded-full 
                    border border-[#444444]
                    items-center justify-center 
                    right-5 bottom-5
                    transition-all duration-300 ease-out
                    group-hover:bg-[#DA9F45]
                    group-hover:border-[#DA9F45]
                    group-hover:scale-105
                ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-[18px] h-[18px] text-[#888888] group-hover:text-white transition-all duration-300"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </div>

        </div>
    );
}

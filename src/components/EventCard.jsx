import Image from "next/image";

export default function EventCard({ title, description, imageUrl }) {
    return (
        <div className="group relative cursor-pointer 
            w-[220px] h-[300px] md:w-[289px] md:h-[370px]
            bg-[#191919] border border-[#2D2D2D] overflow-hidden
            transition-all duration-500 ease-out
            rounded-[16px] card-clip"
        >

            {/* REAL WORKING CLIP-PATH ANIMATION */}
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

            {/* IMAGE */}
            <div className="w-full h-[48%] overflow-hidden relative">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={289}
                    height={178}
                    className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
            </div>

            {/* TEXT */}
            <div className="p-5 relative z-10">
                <h3 className="text-white text-[22px] font-bold mb-2 leading-tight tracking-tight">
                    {title}
                </h3>
                <p className="text-[#AAAAAA] text-[14px] leading-[1.5] tracking-wide line-clamp-3">
                    {description}
                </p>
            </div>

            {/* ARROW */}
            <div className="
                absolute z-20 w-11 h-11 rounded-full 
                border border-[#444444]
                flex items-center justify-center 
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
    );
}

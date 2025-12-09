"use client";

export default function AffiliateNavTags() {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-2 sm:gap-4 mb-8 sm:mb-12 overflow-x-auto scrollbar-hide pr-4 sm:pr-0 w-full">
      <button className="flex-shrink-0 px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full border border-[#D4A373] text-[#D4A373] hover:bg-[#D4A373] hover:text-white transition-all font-medium text-xs sm:text-base whitespace-nowrap">
        Where to Stay?
      </button>
      <button className="flex-shrink-0 px-3 py-1.5 sm:px-6 sm:py-2.5 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all font-medium text-xs sm:text-base whitespace-nowrap">
        About Singapore?
      </button>
      <button className="flex-shrink-0 flex items-center gap-1 text-[#D4A373] hover:text-white transition-colors group text-xs sm:text-base whitespace-nowrap ml-1 sm:ml-auto">
        View More
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </div>
  );
}

export default function SectionHeader({ title }) {
  return (
    <div className="flex justify-between items-end mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
      <button className="flex items-center gap-2 text-[#D4A373] hover:text-white transition-colors group text-sm md:text-base whitespace-nowrap">
        View More
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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

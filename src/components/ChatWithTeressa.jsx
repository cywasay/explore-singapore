import Image from "next/image";

export default function ChatWithTeressa() {
    return (
        <section className="relative z-10 py-8 px-4 md:py-20">
            <div className="max-w-[440px] md:max-w-[900px] mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl md:text-[56px] font-bold mb-2 md:mb-4 leading-tight">
                    <span className="text-white">Chat with </span>
                    <span className="text-[#CC9955]">Teressa</span>
                </h2>

                {/* Subheading */}
                <p className="text-white text-lg md:text-2xl mb-8 md:mb-12">
                    Your Personal Singapore Guide!
                </p>

                {/* Chat Input Box */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Ask Teressa"
                        className="w-full bg-[#1a1a1a] border border-gray-700 rounded-2xl md:rounded-[20px] py-4 px-6 md:py-8 md:px-10 text-gray-300 md:text-xl placeholder-gray-400 focus:outline-none focus:border-[#CC9955] transition-colors"
                    />
                    <button
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-[#CC9955] hover:text-white transition-colors"
                        aria-label="Send message"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 md:w-8 md:h-8"
                        >
                            <path
                                d="M22 2L11 13"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M22 2L15 22L11 13L2 9L22 2Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

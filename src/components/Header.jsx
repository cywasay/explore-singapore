"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                // Scrolling up or at top - show header
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down and past 100px - hide header
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlHeader);

        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [lastScrollY]);

    return (
        <>
            <header
                className={`fixed z-50 w-full top-4 md:top-[39.83px] transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-[120%]'
                    }`}
            >
                <div
                    className="flex items-center justify-between mx-auto px-6 md:px-16"
                    style={{
                        maxWidth: "1400px",
                        height: "37.18px",
                    }}
                >
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Explore Singapore"
                            width={285}
                            height={45}
                            className="object-contain w-[204px] md:w-[285px] h-auto"
                        />
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <Link href="/" className="text-[#D4A373] border-b-2 border-[#D4A373] pb-1">
                            Home
                        </Link>
                        <Link href="/affiliate" className="text-gray-300 hover:text-white transition-colors">
                            Affiliate programe
                        </Link>
                        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop Login Button */}
                    <div className="hidden md:block">
                        <button className="bg-[#D4A373] hover:bg-[#c4925e] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                            Login
                        </button>
                    </div>

                    {/* Mobile Hamburger Menu */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 focus:outline-none z-[60]"
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-[55] md:hidden transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-black/95 backdrop-blur-xl z-[60] md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full p-8 pt-24">
                    <nav className="flex flex-col gap-8">
                        <Link
                            href="/"
                            className="text-[#D4A373] font-medium text-xl border-b border-[#D4A373]/30 pb-3"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/affiliate"
                            className="text-gray-300 hover:text-white font-medium text-xl transition-colors border-b border-white/10 pb-3"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Affiliate programe
                        </Link>
                        <Link
                            href="/contact"
                            className="text-gray-300 hover:text-white font-medium text-xl transition-colors border-b border-white/10 pb-3"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                    </nav>

                    <div className="mt-auto">
                        <button className="bg-[#D4A373] text-white px-8 py-4 rounded-full text-lg font-medium w-full hover:bg-[#c4925e] transition-colors">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

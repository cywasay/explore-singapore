"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
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

    window.addEventListener("scroll", controlHeader);

    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed z-50 w-full top-0 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ backgroundColor: "#151515" }}
    >
      <div
        className="flex items-center justify-between mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-6"
        style={{
          maxWidth: "1400px",
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Explore Singapore"
            width={285}
            height={45}
            className="object-contain w-[204px] md:w-[240px] lg:w-[285px] h-auto"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8 text-xs lg:text-sm font-medium">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "text-[#D4A373] border-b-2 border-[#D4A373] pb-1"
                : "text-gray-300 hover:text-white transition-colors"
            }`}
          >
            Home
          </Link>
          <Link
            href="/affiliate"
            className={`${
              pathname === "/affiliate"
                ? "text-[#D4A373] border-b-2 border-[#D4A373] pb-1"
                : "text-gray-300 hover:text-white transition-colors"
            }`}
          >
            Affiliate Program
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "text-[#D4A373] border-b-2 border-[#D4A373] pb-1"
                : "text-gray-300 hover:text-white transition-colors"
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Login Button - Visible on both mobile and desktop */}
        <div>
          <button className="bg-[#D4A373] hover:bg-[#c4925e] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

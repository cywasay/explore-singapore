import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 md:mt-32 border-t border-dashed border-gray-700">
      {/* Main Footer Content */}
      <div className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_auto] gap-8 md:gap-12 lg:gap-24">
            {/* Left Column - Brand & Info */}
            <div className="space-y-6 md:space-y-8">
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

              {/* Description */}
              <p
                className="text-sm leading-relaxed max-w-[700px]"
                style={{ color: "#D3D3D3" }}
              >
                Explore Singapore offers unforgettable travel experiences with
                expertly guided tours, seamless transfers, & comfortable
                accommodations.
              </p>

              {/* Contact Info - Vertical list */}
              <ul className="space-y-2 text-sm" style={{ color: "#D3D3D3" }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <a
                    href="mailto:marketing@exploresingapore.ai"
                    className="hover:text-[#CC9955] transition-colors"
                  >
                    marketing@exploresingapore.ai
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <a
                    href="tel:+6588998424"
                    className="hover:text-[#CC9955] transition-colors"
                  >
                    (+65) 8899 8424
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">•</span>
                  <span>60 Robinson Road,14-04, Singapore</span>
                </li>
              </ul>

              {/* Social Icons - Hidden on mobile, shown on desktop */}
              <div className="hidden md:inline-flex items-center gap-4 px-5 py-3 rounded-full border border-gray-700">
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                  aria-label="Telegram"
                >
                  <Image
                    src="/Telegram.png"
                    alt="Telegram"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                  aria-label="Twitter"
                >
                  <Image
                    src="/Twitter.png"
                    alt="Twitter"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                  aria-label="Discord"
                >
                  <Image
                    src="/Discord.png"
                    alt="Discord"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
                <a
                  href="#"
                  className="hover:opacity-70 transition-opacity duration-300"
                  aria-label="Youtube"
                >
                  <Image
                    src="/Youtube.png"
                    alt="Youtube"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>

            {/* Middle & Right Columns Container - 2 columns on mobile */}
            <div className="grid grid-cols-2 gap-8 md:contents">
              {/* Middle Column - Services */}
              <div className="space-y-4 md:space-y-6">
                {/* Mobile: Heading with corner dots */}
                <div className="md:hidden relative inline-block">
                  <h3
                    className="text-base font-medium px-2 py-1"
                    style={{ color: "#D3D3D3" }}
                  >
                    Services
                  </h3>
                  {/* Corner dots */}
                  <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white rounded-full" />
                </div>

                {/* Desktop: Heading with frame background */}
                <h3
                  className="hidden md:flex text-lg font-medium items-center justify-center relative"
                  style={{
                    backgroundImage: "url(/heading-frame.png)",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    padding: "20px 50px",
                    width: "fit-content",
                    opacity: 1,
                    filter: "brightness(1.2)",
                    color: "#D3D3D3",
                  }}
                >
                  Services
                </h3>

                <ul className="space-y-3 md:space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm md:text-base hover:text-[#CC9955] transition-colors"
                      style={{ color: "#D3D3D3" }}
                    >
                      Day Tours
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm md:text-base hover:text-[#CC9955] transition-colors"
                      style={{ color: "#D3D3D3" }}
                    >
                      Package Tours
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm md:text-base hover:text-[#CC9955] transition-colors"
                      style={{ color: "#D3D3D3" }}
                    >
                      Transfers
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right Column - Company */}
              <div className="space-y-4 md:space-y-6">
                {/* Mobile: Heading with corner dots */}
                <div className="md:hidden relative inline-block">
                  <h3
                    className="text-base font-medium px-2 py-1"
                    style={{ color: "#D3D3D3" }}
                  >
                    Company
                  </h3>
                  {/* Corner dots */}
                  <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white rounded-full" />
                </div>

                {/* Desktop: Heading with frame background */}
                <h3
                  className="hidden md:flex text-lg font-medium items-center justify-center relative"
                  style={{
                    backgroundImage: "url(/heading-frame.png)",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    padding: "20px 50px",
                    width: "fit-content",
                    opacity: 1,
                    filter: "brightness(1.2)",
                    color: "#D3D3D3",
                  }}
                >
                  Company
                </h3>

                <ul className="space-y-3 md:space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm md:text-base hover:text-[#CC9955] transition-colors"
                      style={{ color: "#D3D3D3" }}
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm md:text-base hover:text-[#CC9955] transition-colors"
                      style={{ color: "#D3D3D3" }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dashed border-gray-700 py-4 md:py-6">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div
            className="flex items-center gap-4 text-xs md:text-sm order-2 md:order-1"
            style={{ color: "#D3D3D3" }}
          >
            <a href="#" className="hover:text-[#CC9955] transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#CC9955] transition-colors">
              Disclaimer
            </a>
          </div>

          {/* Social Icons - Mobile only, shown in bottom */}
          <div className="md:hidden inline-flex items-center gap-4 px-5 py-2 rounded-full border border-gray-700 order-1">
            <a
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
              aria-label="Telegram"
            >
              <Image
                src="/Telegram.png"
                alt="Telegram"
                width={18}
                height={18}
                className="object-contain"
              />
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
              aria-label="Twitter"
            >
              <Image
                src="/Twitter.png"
                alt="Twitter"
                width={18}
                height={18}
                className="object-contain"
              />
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
              aria-label="Discord"
            >
              <Image
                src="/Discord.png"
                alt="Discord"
                width={18}
                height={18}
                className="object-contain"
              />
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-opacity duration-300"
              aria-label="Youtube"
            >
              <Image
                src="/Youtube.png"
                alt="Youtube"
                width={18}
                height={18}
                className="object-contain"
              />
            </a>
          </div>

          {/* Copyright - Hidden on mobile */}
          <div
            className="hidden md:block text-sm order-3"
            style={{ color: "#D3D3D3" }}
          >
            Copyright © Exploresingapore All right Reserved 2025
          </div>
        </div>
      </div>
    </footer>
  );
}

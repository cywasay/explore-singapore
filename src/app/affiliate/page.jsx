"use client";

import Header from "../../components/layout/Header";
import AffiliateNavTags from "../../components/affiliate/AffiliateNavTags";
import AffiliatePageTitle from "../../components/affiliate/AffiliatePageTitle";
import AffiliateHero from "../../components/affiliate/hero/AffiliateHero";
import AffiliateListSection from "../../components/affiliate/AffiliateListSection";
import { HOTELS } from "../../constants/affiliateData";

export default function AffiliateProgram() {
  return (
    <main className="min-h-screen bg-[#151515] text-white selection:bg-[#D4A373] selection:text-black font-sans">
      <Header />

      <div className="pt-24 md:pt-32 pb-20 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto">
        <AffiliateNavTags />
        <AffiliatePageTitle />

        {/* Featured Section (Watch More) */}
        <AffiliateHero hotels={HOTELS} />

        {/* Explore More Section */}
        <AffiliateListSection
          title="Explore More"
          hotels={HOTELS}
          showPlayButton={true}
        />

        {/* Recommended Section */}
        <AffiliateListSection
          title="Recommended"
          hotels={HOTELS}
          showPlayButton={true}
        />
      </div>
    </main>
  );
}

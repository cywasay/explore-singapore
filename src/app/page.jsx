import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import EventSection from "../components/events/EventSection";
import Footer from "../components/layout/Footer";
import StatsSection from "../components/home/StatsSection";
import VideoSection from "../components/home/VideoSection";
import ChatWithTeressa from "../components/features/ChatWithTeressa";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <VideoSection />
      <ChatWithTeressa />
      <EventSection />
      <Footer />
    </main>
  );
}

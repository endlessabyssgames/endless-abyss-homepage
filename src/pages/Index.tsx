import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GamesSection from "@/components/GamesSection";
import TrailerSection from "@/components/TrailerSection";
import DemoSection from "@/components/DemoSection";
import LatestPost from "@/components/LatestPost";
import AboutStudio from "@/components/AboutStudio";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GamesSection />
      <TrailerSection />
      <DemoSection />
      <LatestPost />
      <AboutStudio />
      <Footer />
    </div>
  );
};

export default Index;

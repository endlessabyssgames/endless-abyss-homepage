import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GamesSection from "@/components/GamesSection";
import AboutStudio from "@/components/AboutStudio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GamesSection />
      <AboutStudio />
      <Footer />
    </div>
  );
};

export default Index;

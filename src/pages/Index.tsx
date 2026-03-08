import HeroSection from "@/components/HeroSection";
import FeaturedGame from "@/components/FeaturedGame";
import AboutStudio from "@/components/AboutStudio";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedGame />
      <AboutStudio />
      <Footer />
    </div>
  );
};

export default Index;

import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6 text-glow text-foreground">
          ENDLESS ABYSS
          <span className="block gradient-text">GAMES</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
          Crafting immersive worlds from the depths of imagination. 
          Where darkness meets wonder.
        </p>
        <a
          href="#featured-game"
          className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold tracking-wide hover:opacity-90 transition-opacity box-glow"
        >
          EXPLORE OUR GAMES
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

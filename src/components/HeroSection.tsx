import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />




      <div className="relative z-10 px-8 md:px-12 pb-24 max-w-3xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-5 text-foreground uppercase leading-[0.95]">
          Endless Abyss<br />Games
        </h1>
        <p className="text-sm md:text-base text-foreground/60 max-w-lg mb-8 font-body leading-relaxed">
          Crafting immersive worlds from the depths of imagination. 
          Where darkness meets wonder.
        </p>
        <a
          href="#featured-game"
          className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/30 text-foreground text-xs font-display tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
        >
          Explore
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14m-7-7l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

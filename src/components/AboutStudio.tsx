const AboutStudio = () => {
  return (
    <section id="about" className="py-32 px-8 md:px-12 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-4">
          The Studio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-foreground uppercase tracking-tight">
          About Endless Abyss
        </h2>
        <p className="text-foreground/50 text-sm md:text-base leading-relaxed font-body mb-16 max-w-2xl">
          Endless Abyss Games is an indie studio passionate about building 
          atmospheric, story-driven experiences. We believe games should pull 
          you in and never let go — every shadow hides a secret, every light 
          tells a story. We're a small team with big ambitions, crafting worlds 
          that linger long after you put down the controller.
        </p>
        <div className="flex gap-16 text-foreground/40">
          <div>
            <p className="text-3xl font-display font-bold text-foreground">2024</p>
            <p className="text-xs mt-2 tracking-[0.1em] uppercase">Founded</p>
          </div>
          <div>
            <p className="text-3xl font-display font-bold text-foreground">1</p>
            <p className="text-xs mt-2 tracking-[0.1em] uppercase">In Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;

const AboutStudio = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-foreground">
          About the Studio
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed font-body mb-8">
          Endless Abyss Games is an indie studio passionate about building 
          atmospheric, story-driven experiences. We believe games should pull 
          you in and never let go — every shadow hides a secret, every light 
          tells a story. We're a small team with big ambitions, crafting worlds 
          that linger long after you put down the controller.
        </p>
        <div className="flex justify-center gap-8 text-muted-foreground">
          <div>
            <p className="text-3xl font-display font-bold text-primary">2024</p>
            <p className="text-sm mt-1">Founded</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-3xl font-display font-bold text-primary">1</p>
            <p className="text-sm mt-1">Game in Development</p>
          </div>
          <div className="w-px bg-border" />
          <div>
            <p className="text-3xl font-display font-bold text-primary">∞</p>
            <p className="text-sm mt-1">Depths to Explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;

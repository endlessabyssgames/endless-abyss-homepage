import { games } from "@/data/games";

const AboutStudio = () => {
  const releasedCount = games.filter((g) => g.status === "Released").length;
  const inDevCount = games.filter((g) => g.status !== "Released").length;

  return (
    <section id="about" className="section-padding border-t border-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-[10px] sm:text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-3 sm:mb-4">
          The Studio
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-6 sm:mb-8 text-foreground uppercase tracking-tight">
          ABOUT ENDLESS ABYSS GAMES
        </h2>
        <p className="text-foreground/50 text-sm md:text-base leading-relaxed font-body mb-10 sm:mb-12 md:mb-16 max-w-2xl">
          Endless Abyss Games is an independent studio dedicated to crafting deeply immersive experiences. We are committed to deliver the best possible experience in every project we create.
        </p>
        <div className="flex flex-wrap gap-8 sm:gap-12 md:gap-16 text-foreground/40">
          <div className="transition-transform duration-300 hover:scale-105">
            <p className="text-2xl sm:text-3xl font-display font-bold text-foreground">2026</p>
            <p className="text-[10px] sm:text-xs mt-2 tracking-[0.1em] uppercase">Founded</p>
          </div>
          {releasedCount > 0 && (
            <div className="transition-transform duration-300 hover:scale-105">
              <p className="text-2xl sm:text-3xl font-display font-bold text-foreground">{releasedCount}</p>
              <p className="text-[10px] sm:text-xs mt-2 tracking-[0.1em] uppercase">Released</p>
            </div>
          )}
          {inDevCount > 0 && (
            <div className="transition-transform duration-300 hover:scale-105">
              <p className="text-2xl sm:text-3xl font-display font-bold text-foreground">{inDevCount}</p>
              <p className="text-[10px] sm:text-xs mt-2 tracking-[0.1em] uppercase">In Development</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;

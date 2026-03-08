import { Link } from "react-router-dom";
import { games } from "@/data/games";

const GamesSection = () => {
  return (
    <section id="games" className="py-32 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground uppercase tracking-tight mb-16">
          Games
        </h2>

        <div className="space-y-16">
          {games.map((game) => (
            <Link
              key={game.slug}
              to={`/games/${game.slug}`}
              className="group block"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="overflow-hidden border border-border">
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-full h-auto object-cover aspect-video group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div>
                  <p className="text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-3">
                    {game.tagline}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground uppercase tracking-tight mb-4 group-hover:text-foreground/80 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-foreground/50 text-sm font-body leading-relaxed mb-6">
                    {game.description}
                  </p>
                  <span className="inline-flex items-center gap-3 text-xs font-display tracking-[0.15em] text-foreground/50 uppercase group-hover:text-foreground transition-colors">
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;

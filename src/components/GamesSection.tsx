import { Link } from "react-router-dom";
import { games } from "@/data/games";

const GamesSection = () => {
  return (
    <section id="games" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display text-foreground uppercase tracking-tight mb-10 sm:mb-12 md:mb-16">
          Games
        </h2>

        <div className="space-y-12 sm:space-y-16">
          {games.map((game) => (
            <Link
              key={game.slug}
              to={`/games/${game.slug}`}
              className="group block"
            >
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="hover-zoom border border-border transition-all duration-300 group-hover:border-foreground/20">
                  <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-2 sm:mb-3">
                    {game.tagline}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-foreground uppercase tracking-tight mb-3 sm:mb-4 group-hover:text-foreground/80 transition-colors duration-300">
                    {game.title}
                  </h3>
                  <p className="text-foreground/50 text-sm font-body leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <span className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-display tracking-[0.15em] text-foreground/50 uppercase group-hover:text-foreground transition-colors duration-300">
                      Learn More
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                    </span>
                    {game.steamUrl && (
                      <a
                        href={game.steamUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-primary text-[10px] sm:text-xs px-3 sm:px-4 py-2"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.064 0 .128.003.19.008l2.861-4.142V8.91a4.528 4.528 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.404 3.404 0 0 1-3.362-2.898L.309 15.245A11.985 11.985 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.372-12-12-12z"/>
                        </svg>
                        Wishlist
                      </a>
                    )}
                  </div>
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

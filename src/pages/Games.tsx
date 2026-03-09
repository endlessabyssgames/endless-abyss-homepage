import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { games } from "@/data/games";

const Games = () => {
  useEffect(() => {window.scrollTo(0, 0);}, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground uppercase tracking-tight mb-6">
            Games
          </h1>
          <p className="text-foreground/50 text-sm font-body leading-relaxed max-w-2xl">
            Discover our collection of immersive games.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="pb-32 px-8 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {games.map((game) =>
            <Link
              key={game.slug}
              to={`/games/${game.slug}`}
              className="group block">
              
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="overflow-hidden border border-border">
                    <img
                    src={game.coverImage}
                    alt={game.title}
                    className="w-full h-auto object-cover aspect-video group-hover:scale-[1.02] transition-transform duration-500" />
                  
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
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-3 text-xs font-display tracking-[0.15em] text-foreground/50 uppercase group-hover:text-foreground transition-colors">
                        Learn More
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14m-7-7l7 7-7 7" />
                        </svg>
                      </span>
                      {game.steamUrl &&
                    <a
                      href={game.steamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background text-xs font-display tracking-[0.15em] uppercase hover:bg-foreground/80 transition-all duration-300">
                      
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.064 0 .128.003.19.008l2.861-4.142V8.91a4.528 4.528 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.404 3.404 0 0 1-3.362-2.898L.309 15.245A11.985 11.985 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.372-12-12-12z" />
                          </svg>
                          Wishlist
                        </a>
                    }
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default Games;
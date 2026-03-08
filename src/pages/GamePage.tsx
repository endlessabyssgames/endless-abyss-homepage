import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { getGameBySlug } from "@/data/games";

const GamePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = getGameBySlug(slug || "");
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Game Not Found</h1>
          <Link to="/" className="text-xs font-display tracking-[0.15em] text-foreground/50 hover:text-foreground uppercase">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${game.coverImage})` }}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
        <div className="relative z-10 px-8 md:px-12 pb-16 max-w-4xl">
          <p className="text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-3">
            {game.tagline}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground uppercase tracking-tight mb-6">
            {game.title}
          </h1>
          {game.steamUrl && (
            <a
              href={game.steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background text-xs font-display tracking-[0.15em] uppercase hover:bg-foreground/80 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.064 0 .128.003.19.008l2.861-4.142V8.91a4.528 4.528 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.404 3.404 0 0 1-3.362-2.898L.309 15.245A11.985 11.985 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.372-12-12-12z"/>
              </svg>
              Wishlist on Steam
            </a>
          )}
        </div>
      </section>

      {/* Details */}
      <section className="py-24 px-8 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-bold text-foreground uppercase tracking-tight mb-6">
              About the Game
            </h2>
            <div className="space-y-6 text-sm leading-relaxed font-body">
              {game.longDescription.map((p, i) => {
                const parts = p.split("\n\n");
                if (parts.length > 1) {
                  return (
                    <div key={i}>
                      <h3 className="text-foreground font-display font-bold uppercase tracking-tight text-base mb-3">
                        {parts[0]}
                      </h3>
                      <p className="text-foreground/50">{parts[1]}</p>
                    </div>
                  );
                }
                return <p key={i} className="text-foreground/50">{p}</p>;
              })}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground uppercase tracking-tight mb-6">
              Details
            </h2>
            <dl className="space-y-4 text-sm font-body">
              {game.details.map(({ label, value }) => (
                <div key={label} className="flex justify-between border-b border-border pb-3">
                  <dt className="text-foreground/40">{label}</dt>
                  <dd className="text-foreground/70">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Trailer */}
      <section className="px-8 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-display font-bold text-foreground uppercase tracking-tight mb-8">
            Trailer
          </h2>
          <div className="aspect-video overflow-hidden bg-card border border-border">
            {game.trailerUrl ? (
              <iframe
                className="w-full h-full"
                src={`${game.trailerUrl}?autoplay=1&mute=1&vq=auto`}
                title="Game Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-foreground/20">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <p className="font-display text-xs tracking-[0.2em] uppercase">Trailer Coming Soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Demo */}
      {(game.demoUrl || game.demoUrl === "") && (
        <section className="px-8 md:px-12 pb-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-display font-bold text-foreground uppercase tracking-tight mb-8">
              Play the Demo
            </h2>
            <p className="text-foreground/50 text-sm font-body leading-relaxed mb-8 max-w-2xl">
              Experience {game.title} for yourself. Download the free demo and master the art of precision landing.
            </p>
            <a
              href={game.demoReleased && game.demoUrl ? game.demoUrl : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 px-8 py-4 text-xs font-display tracking-[0.15em] uppercase transition-all duration-300 ${
                game.demoReleased
                  ? "bg-foreground text-background hover:bg-foreground/80"
                  : "border border-foreground/20 text-foreground/30 cursor-not-allowed pointer-events-none"
              }`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.064 0 .128.003.19.008l2.861-4.142V8.91a4.528 4.528 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.404 3.404 0 0 1-3.362-2.898L.309 15.245A11.985 11.985 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.372-12-12-12z"/>
              </svg>
              {game.demoReleased ? "Download Demo on Steam" : "Demo Coming Soon"}
            </a>
          </div>
        </section>
      )}

      {/* Screenshots */}
      <section className="px-8 md:px-12 pb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-display font-bold text-foreground uppercase tracking-tight mb-8">
            Screenshots
          </h2>
          <div className="space-y-3">
            <div className="overflow-hidden border border-border">
              <img
                src={game.screenshots[activeScreenshot].src}
                alt={game.screenshots[activeScreenshot].alt}
                className="w-full h-auto object-cover aspect-video"
              />
            </div>
            <div className="grid grid-cols-5 gap-3">
              {game.screenshots.map((shot, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreenshot(i)}
                  className={`overflow-hidden border transition-all duration-300 ${
                    i === activeScreenshot
                      ? "border-foreground/40"
                      : "border-border opacity-40 hover:opacity-70"
                  }`}
                >
                  <img src={shot.src} alt={shot.alt} className="w-full h-auto object-cover aspect-video" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit Link */}
      <section className="px-8 md:px-12 pb-32 border-t border-border pt-16">
        <div className="max-w-6xl mx-auto">
          <Link
            to={`/games/${game.slug}/press`}
            className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/30 text-foreground text-xs font-display tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Press Kit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GamePage;

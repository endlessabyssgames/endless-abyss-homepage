import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { getGameBySlug } from "@/data/games";
import { useState } from "react";

const GamePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = getGameBySlug(slug || "");
  const [activeScreenshot, setActiveScreenshot] = useState(0);

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
          style={{ backgroundImage: `url(${game.screenshots[0]?.src || game.coverImage})` }}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
        <div className="relative z-10 px-8 md:px-12 pb-16 max-w-4xl">
          <p className="text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-3">
            {game.tagline}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground uppercase tracking-tight">
            {game.title}
          </h1>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 px-8 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 className="text-xl font-display font-bold text-foreground uppercase tracking-tight mb-6">
              About the Game
            </h2>
            <div className="space-y-4 text-foreground/50 text-sm leading-relaxed font-body">
              {game.longDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
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
            <div className="w-full h-full flex items-center justify-center text-foreground/20">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="font-display text-xs tracking-[0.2em] uppercase">Trailer Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="grid grid-cols-3 gap-3">
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

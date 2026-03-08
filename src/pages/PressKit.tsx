import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { getGameBySlug } from "@/data/games";

const PressKit = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = getGameBySlug(slug || "");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Not Found</h1>
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

      {/* Header */}
      <section className="pt-32 pb-16 px-8 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            to={`/games/${game.slug}`}
            className="inline-flex items-center gap-2 text-xs font-display tracking-[0.15em] text-foreground/40 hover:text-foreground uppercase mb-8 transition-colors duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            {game.title}
          </Link>
          <p className="text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-4">
            Press Kit
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground uppercase tracking-tight mb-6">
            {game.title}
          </h1>
          <p className="text-foreground/50 text-sm md:text-base font-body leading-relaxed max-w-2xl">
            Everything you need for coverage. All assets are free to use in
            editorial content about Endless Abyss Games and our titles.
          </p>
        </div>
      </section>

      {/* Studio Info */}
      <section className="py-16 px-8 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-lg font-display font-bold text-foreground uppercase tracking-tight mb-6">
              Studio Fact Sheet
            </h2>
            <dl className="space-y-4 text-sm font-body">
              {[
                ["Studio", "Endless Abyss Games"],
                ["Founded", "2024"],
                ["Location", "—"],
                ["Website", "endlessabyssgames.com"],
                ["Contact", "press@endlessabyssgames.com"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-border pb-3">
                  <dt className="text-foreground/40">{label}</dt>
                  <dd className="text-foreground/70">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-lg font-display font-bold text-foreground uppercase tracking-tight mb-6">
              Description
            </h2>
            <p className="text-foreground/50 text-sm font-body leading-relaxed">
              Endless Abyss Games is an independent game studio dedicated to
              crafting atmospheric, story-driven experiences. We focus on dark
              fantasy worlds with rich lore, meaningful player choices, and
              immersive exploration.
            </p>
          </div>
        </div>
      </section>

      {/* Game Info */}
      <section className="py-16 px-8 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-display font-bold text-foreground uppercase tracking-tight mb-6">
            {game.title} — Game Fact Sheet
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <dl className="space-y-4 text-sm font-body">
              {game.details.map(({ label, value }) => (
                <div key={label} className="flex justify-between border-b border-border pb-3">
                  <dt className="text-foreground/40">{label}</dt>
                  <dd className="text-foreground/70">{value}</dd>
                </div>
              ))}
            </dl>
            <div>
              <h3 className="text-sm font-display font-bold text-foreground uppercase tracking-tight mb-4">
                Synopsis
              </h3>
              <p className="text-foreground/50 text-sm font-body leading-relaxed">
                {game.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-16 px-8 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-display font-bold text-foreground uppercase tracking-tight mb-8">
            Logos &amp; Branding
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Studio Logo (Light)", "Studio Logo (Dark)", "Game Logo"].map((label) => (
              <div
                key={label}
                className="aspect-square bg-card border border-border flex flex-col items-center justify-center p-6"
              >
                <div className="w-16 h-16 border border-foreground/10 flex items-center justify-center mb-4">
                  <span className="text-[10px] font-display text-foreground/30">LOGO</span>
                </div>
                <p className="text-[10px] font-display tracking-[0.15em] text-foreground/30 uppercase text-center">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 px-8 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-display font-bold text-foreground uppercase tracking-tight mb-8">
            Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {game.screenshots.map((shot, i) => (
              <div key={i} className="overflow-hidden border border-border">
                <img src={shot.src} alt={shot.alt} className="w-full h-auto object-cover aspect-video" />
              </div>
            ))}
            <div className="overflow-hidden border border-border">
              <img src={game.coverImage} alt="Key art" className="w-full h-auto object-cover aspect-video" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Art */}
      <section className="py-16 px-8 md:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-display font-bold text-foreground uppercase tracking-tight mb-8">
            Key Art
          </h2>
          <div className="overflow-hidden border border-border">
            <img src={game.coverImage} alt={`${game.title} key art`} className="w-full h-auto object-cover aspect-video" />
          </div>
        </div>
      </section>

      <div className="py-16" />
      <Footer />
    </div>
  );
};

export default PressKit;

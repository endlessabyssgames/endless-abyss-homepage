import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import { getGameBySlug } from "@/data/games";
import studioLogo from "@/assets/studio-logo-presskit.png";
import criticalDescentLogo from "@/assets/critical-descent-logo.png";

const PressKit = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = getGameBySlug(slug || "");

  useEffect(() => { window.scrollTo(0, 0); }, []);

  if (!game) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center section-padding-x">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Not Found</h1>
          <Link to="/" className="text-xs font-display tracking-[0.15em] text-foreground/50 hover:text-foreground uppercase transition-colors duration-300">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const hasDetails = game.details.length > 0;
  const hasDescription = game.description.length > 0;
  const hasScreenshots = game.screenshots.length > 0;

  // Build logos array dynamically - only include logos that exist
  const logos = [
    { label: "Studio Logo", src: studioLogo },
    { label: `${game.title} Logo`, src: criticalDescentLogo },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 section-padding-x">
        <div className="max-w-4xl mx-auto">
          <Link
            to={`/games/${game.slug}`}
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-display tracking-[0.15em] text-foreground/40 hover:text-foreground uppercase mb-6 sm:mb-8 transition-colors duration-300 group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            {game.title}
          </Link>
          <p className="text-[10px] sm:text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-3 sm:mb-4">
            Press Kit
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground uppercase tracking-tight mb-4 sm:mb-6">
            {game.title}
          </h1>
          <p className="text-foreground/50 text-sm md:text-base font-body leading-relaxed max-w-2xl">
            Everything you need for coverage. All assets are free to use in
            editorial content about Endless Abyss Games and our titles.
          </p>
        </div>
      </section>

      {/* Studio Info */}
      <section className="section-padding border-t border-border">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
          <div>
            <h2 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-tight mb-4 sm:mb-6">
              Studio Fact Sheet
            </h2>
            <dl className="space-y-3 sm:space-y-4 text-sm font-body">
              {[
                ["Studio", "Endless Abyss Games"],
                ["Founded", "2026"],
                ["Website", "endlessabyssgames.com"],
                ["Contact", "press@endlessabyssgames.com"]
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-border pb-2 sm:pb-3">
                  <dt className="text-foreground/40">{label}</dt>
                  <dd className="text-foreground/70">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-tight mb-4 sm:mb-6">
              Description
            </h2>
            <p className="text-foreground/50 text-sm font-body leading-relaxed">
              Endless Abyss Games is an independent game studio dedicated to crafting atmospheric, realistic, and most of all, immersive game experiences. We strive to provide the best games we possibly can with every release.
            </p>
          </div>
        </div>
      </section>

      {/* Game Info - only if there are details or a description */}
      {(hasDetails || hasDescription) && (
        <section className="section-padding border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-tight mb-4 sm:mb-6">
              {game.title} — Game Fact Sheet
            </h2>
            <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16">
              {hasDetails && (
                <dl className="space-y-3 sm:space-y-4 text-sm font-body">
                  {game.details.map(({ label, value }) => (
                    <div key={label} className="flex justify-between border-b border-border pb-2 sm:pb-3">
                      <dt className="text-foreground/40">{label}</dt>
                      <dd className="text-foreground/70">{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {hasDescription && (
                <div>
                  <h3 className="text-sm font-display font-bold text-foreground uppercase tracking-tight mb-3 sm:mb-4">
                    Synopsis
                  </h3>
                  <p className="text-foreground/50 text-sm font-body leading-relaxed">
                    {game.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Key Art */}
      {game.keyArt && (
        <section className="section-padding border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-tight mb-6 sm:mb-8">
              Key Art
            </h2>
            <div className="border border-border rounded-sm overflow-hidden transition-all duration-300 hover:border-foreground/20">
              <img
                src={game.keyArt}
                alt={`${game.title} Key Art`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* Logos */}
      {logos.length > 0 && (
        <section className="section-padding border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-tight mb-6 sm:mb-8">
              Logos &amp; Branding
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {logos.map(({ label, src }) => (
                <div
                  key={label}
                  className="aspect-square flex flex-col items-center justify-center p-4 sm:p-6 relative transition-all duration-300 hover:bg-foreground/5"
                >
                  <img src={src} alt={label} className="w-full h-full object-contain p-2 sm:p-4" />
                  <p className="absolute bottom-2 sm:bottom-3 text-[9px] sm:text-[10px] font-display tracking-[0.15em] text-foreground/30 uppercase text-center">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Screenshots - only if there are any */}
      {hasScreenshots && (
        <section className="section-padding border-t border-border">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-tight mb-6 sm:mb-8">
              Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {game.screenshots.map((shot, i) => (
                <div key={i} className="hover-zoom border border-border transition-all duration-300 hover:border-foreground/20">
                  <img src={shot.src} alt={shot.alt} className="w-full h-auto object-cover aspect-video" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-12 sm:py-16" />
      <Footer />
    </div>
  );
};

export default PressKit;

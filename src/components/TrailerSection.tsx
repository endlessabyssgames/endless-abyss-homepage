import { useEffect, useRef, useState } from "react";
import { games } from "@/data/games";

const TrailerSection = () => {
  const game = games[0];
  const trailerUrl = game?.trailerUrl;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !trailerUrl) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [trailerUrl]);

  const autoplayUrl = trailerUrl && isVisible
    ? `${trailerUrl}?autoplay=1&mute=1&vq=auto`
    : trailerUrl || "";

  return (
    <section id="trailer" className="section-padding" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display text-foreground uppercase tracking-tight mb-8 sm:mb-10 md:mb-12">
          Trailer
        </h2>
        <div className="aspect-video overflow-hidden bg-card border border-border transition-all duration-300 hover:border-foreground/20">
          {trailerUrl && isVisible ? (
            <iframe
              className="w-full h-full"
              src={autoplayUrl}
              title="Game Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : trailerUrl ? (
            <div className="w-full h-full flex items-center justify-center text-foreground/20">
              <div className="text-center">
                <svg className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="font-display text-[10px] sm:text-xs tracking-[0.2em] uppercase">Loading...</p>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-foreground/20">
              <div className="text-center">
                <svg className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="font-display text-[10px] sm:text-xs tracking-[0.2em] uppercase">Trailer Coming Soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;

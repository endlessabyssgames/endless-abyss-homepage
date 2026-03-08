import { games } from "@/data/games";

const TrailerSection = () => {
  const game = games[0];
  const trailerUrl = game?.trailerUrl;

  return (
    <section id="trailer" className="py-32 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground uppercase tracking-tight mb-12">
          Trailer
        </h2>
        <div className="aspect-video overflow-hidden bg-card border border-border">
          {trailerUrl ? (
            <iframe
              className="w-full h-full"
              src={trailerUrl}
              title="Game Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-foreground/20">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <p className="font-display text-xs tracking-[0.2em] uppercase">Trailer Coming Soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrailerSection;

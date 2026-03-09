import { games } from "@/data/games";

const DemoSection = () => {
  const game = games[0];
  
  // Only show this section if demo exists AND is released
  if (!game?.demoUrl || !game?.demoReleased) return null;

  return (
    <section id="demo" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display text-foreground uppercase tracking-tight mb-4 sm:mb-6">
          Play the Demo
        </h2>
        <p className="text-foreground/50 text-sm md:text-base font-body leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-2xl">
          Experience {game.title} for yourself. Download the free demo and master the art of precision landing.
        </p>
        <a
          href={game.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-[10px] sm:text-xs"
        >
          <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.064 0 .128.003.19.008l2.861-4.142V8.91a4.528 4.528 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.404 3.404 0 0 1-3.362-2.898L.309 15.245A11.985 11.985 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.372-12-12-12z"/>
          </svg>
          Download Demo on Steam
        </a>
      </div>
    </section>
  );
};

export default DemoSection;

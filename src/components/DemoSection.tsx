import { games } from "@/data/games";

const DemoSection = () => {
  const game = games[0];
  const demoUrl = game?.demoUrl;

  return (
    <section id="demo" className="py-32 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-foreground uppercase tracking-tight mb-6">
          Play the Demo
        </h2>
        <p className="text-foreground/50 text-sm md:text-base font-body leading-relaxed mb-12 max-w-2xl">
          Experience Critical Descent for yourself. Download the free demo and master the art of precision landing.
        </p>
        <a
          href={demoUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-3 px-8 py-4 text-xs font-display tracking-[0.15em] uppercase transition-all duration-300 ${
            demoUrl
              ? "bg-foreground text-background hover:bg-foreground/80"
              : "border border-foreground/20 text-foreground/30 cursor-not-allowed pointer-events-none"
          }`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.064 0 .128.003.19.008l2.861-4.142V8.91a4.528 4.528 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396a3.404 3.404 0 0 1-3.362-2.898L.309 15.245A11.985 11.985 0 0 0 11.979 24c6.627 0 12-5.373 12-12s-5.372-12-12-12z"/>
          </svg>
          {demoUrl ? "Download Demo on Steam" : "Demo Coming Soon"}
        </a>
      </div>
    </section>
  );
};

export default DemoSection;

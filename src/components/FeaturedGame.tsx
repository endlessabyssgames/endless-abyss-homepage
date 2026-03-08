import { useState } from "react";
import { Link } from "react-router-dom";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshot-3.jpg";

const screenshots = [
  { src: screenshot1, alt: "Warrior at the edge of the abyss" },
  { src: screenshot2, alt: "Ancient bioluminescent ruins" },
  { src: screenshot3, alt: "Crystal caverns underground" },
];

const FeaturedGame = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  return (
    <section id="featured-game" className="py-32 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-4">
          Coming Soon
        </p>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-foreground uppercase tracking-tight">
          Echoes of the Abyss
        </h2>
        <p className="text-foreground/50 text-sm md:text-base max-w-2xl mb-16 font-body leading-relaxed">
          Descend into a shattered world where ancient magic pulses beneath 
          crumbling ruins. As the last Voidwalker, unravel the mystery of the 
          Endless Abyss — a living chasm that consumes reality itself. 
          Battle eldritch creatures, forge alliances with forgotten gods, and 
          decide the fate of a world teetering on oblivion.
        </p>

        {/* Trailer */}
        <div className="mb-16">
          <div className="aspect-video overflow-hidden bg-card border border-border">
            <div className="w-full h-full flex items-center justify-center text-foreground/30">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <p className="font-display text-xs tracking-[0.2em] uppercase">Trailer Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots */}
        <div className="space-y-3">
          <div className="overflow-hidden border border-border">
            <img
              src={screenshots[activeScreenshot].src}
              alt={screenshots[activeScreenshot].alt}
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {screenshots.map((shot, i) => (
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
  );
};

export default FeaturedGame;

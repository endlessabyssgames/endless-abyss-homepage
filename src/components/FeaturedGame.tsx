import { useState } from "react";
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
    <section id="featured-game" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-primary font-display font-semibold tracking-widest text-sm mb-3 uppercase">
          Coming Soon
        </p>
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-foreground">
          Echoes of the Abyss
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mb-12 font-body leading-relaxed">
          Descend into a shattered world where ancient magic pulses beneath 
          crumbling ruins. As the last Voidwalker, unravel the mystery of the 
          Endless Abyss — a living chasm that consumes reality itself. 
          Battle eldritch creatures, forge alliances with forgotten gods, and 
          decide the fate of a world teetering on oblivion.
        </p>

        {/* Trailer Embed Placeholder */}
        <div className="mb-12">
          <div className="aspect-video rounded-lg overflow-hidden bg-secondary border border-border box-glow">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <svg className="w-16 h-16 mx-auto mb-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <p className="font-display text-sm tracking-widest uppercase">Trailer Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border border-border box-glow">
            <img
              src={screenshots[activeScreenshot].src}
              alt={screenshots[activeScreenshot].alt}
              className="w-full h-auto object-cover aspect-video transition-opacity duration-500"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {screenshots.map((shot, i) => (
              <button
                key={i}
                onClick={() => setActiveScreenshot(i)}
                className={`rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  i === activeScreenshot
                    ? "border-primary box-glow"
                    : "border-border opacity-60 hover:opacity-100"
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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshot-3.jpg";
import { useState } from "react";

const screenshots = [
  { src: screenshot1, alt: "Warrior at the edge of the abyss" },
  { src: screenshot2, alt: "Ancient bioluminescent ruins" },
  { src: screenshot3, alt: "Crystal caverns underground" },
];

const GamePage = () => {
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${screenshot1})` }}
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
        <div className="relative z-10 px-8 md:px-12 pb-16 max-w-4xl">
          <p className="text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-3">
            Coming Soon
          </p>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground uppercase tracking-tight">
            Echoes of the Abyss
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
              <p>
                Descend into a shattered world where ancient magic pulses beneath
                crumbling ruins. As the last Voidwalker, unravel the mystery of the
                Endless Abyss — a living chasm that consumes reality itself.
              </p>
              <p>
                Battle eldritch creatures, forge alliances with forgotten gods, and
                decide the fate of a world teetering on oblivion. Every choice pulls
                you deeper. Every shadow hides a truth you may not be ready to face.
              </p>
              <p>
                Featuring a hand-crafted dark fantasy world, punishing but fair combat,
                and a branching narrative shaped by your decisions, Echoes of the Abyss
                is a journey into the unknown — and there's no coming back.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-display font-bold text-foreground uppercase tracking-tight mb-6">
              Details
            </h2>
            <dl className="space-y-4 text-sm font-body">
              {[
                ["Genre", "Action RPG"],
                ["Platform", "PC"],
                ["Engine", "Unreal Engine 5"],
                ["Players", "Single Player"],
                ["Status", "In Development"],
                ["Release", "TBA"],
              ].map(([label, value]) => (
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
      <section className="px-8 md:px-12 pb-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-display font-bold text-foreground uppercase tracking-tight mb-8">
            Screenshots
          </h2>
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

      <Footer />
    </div>
  );
};

export default GamePage;

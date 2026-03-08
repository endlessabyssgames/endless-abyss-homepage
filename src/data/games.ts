import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshot-3.jpg";
import criticalDescentKeyart from "@/assets/critical-descent-keyart.png";

export interface GameData {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string[];
  coverImage: string;
  screenshots: { src: string; alt: string }[];
  details: { label: string; value: string }[];
  status: string;
  steamUrl?: string;
  trailerUrl?: string;
  demoUrl?: string;
  demoReleased: boolean; // ← Toggle this to true when you release the demo
}

export const games: GameData[] = [
  {
    slug: "critical-descent",
    title: "Critical Descent",
    tagline: "Coming Soon",
    description:
      "Master the hardcore, Starship-style catch maneuver in Critical Descent. Pilot massive boosters and agile upper stages across 50+ handcrafted levels on Earth, the Moon, and Mars. Featuring global leaderboards, multiple difficulties, and a realistic physics system, for the ultimate landing experience.",
    longDescription: [
      "Master the hardcore, Starship-style catch maneuver in Critical Descent. Pilot massive boosters and agile upper stages across 50+ handcrafted levels on Earth, the Moon, and Mars. Featuring global leaderboards, multiple difficulties, and a realistic physics system, for the ultimate landing experience.",
      "Battle eldritch creatures, forge alliances with forgotten gods, and decide the fate of a world teetering on oblivion. Every choice pulls you deeper. Every shadow hides a truth you may not be ready to face.",
      "Featuring a hand-crafted dark fantasy world, punishing but fair combat, and a branching narrative shaped by your decisions, Critical Descent is a journey into the unknown — and there's no coming back.",
    ],
    coverImage: criticalDescentKeyart,
    screenshots: [
      { src: screenshot1, alt: "Warrior at the edge of the abyss" },
      { src: screenshot2, alt: "Ancient bioluminescent ruins" },
      { src: screenshot3, alt: "Crystal caverns underground" },
    ],
    details: [
      { label: "Genre", value: "High-Precision Flight Sim" },
      { label: "Platform", value: "PC" },
      { label: "Engine", value: "Unity Engine" },
      { label: "Players", value: "Single Player" },
      { label: "Status", value: "In Development" },
      { label: "Release", value: "2026" },
    ],
    status: "In Development",
    steamUrl: "https://store.steampowered.com/app/4329160/Critical_Descent/",
    trailerUrl: "https://www.youtube.com/embed/dlTB8hDrDvg",
    demoUrl: "", // Paste your Steam demo URL here
    demoReleased: false, // ← Change to true when the demo is live
  },
];

export const getGameBySlug = (slug: string) =>
  games.find((g) => g.slug === slug);

import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshot-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

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
}

export const games: GameData[] = [
  {
    slug: "echoes-of-the-abyss",
    title: "Echoes of the Abyss",
    tagline: "Coming Soon",
    description:
      "Descend into a shattered world where ancient magic pulses beneath crumbling ruins. As the last Voidwalker, unravel the mystery of the Endless Abyss — a living chasm that consumes reality itself.",
    longDescription: [
      "Descend into a shattered world where ancient magic pulses beneath crumbling ruins. As the last Voidwalker, unravel the mystery of the Endless Abyss — a living chasm that consumes reality itself.",
      "Battle eldritch creatures, forge alliances with forgotten gods, and decide the fate of a world teetering on oblivion. Every choice pulls you deeper. Every shadow hides a truth you may not be ready to face.",
      "Featuring a hand-crafted dark fantasy world, punishing but fair combat, and a branching narrative shaped by your decisions, Echoes of the Abyss is a journey into the unknown — and there's no coming back.",
    ],
    coverImage: heroBg,
    screenshots: [
      { src: screenshot1, alt: "Warrior at the edge of the abyss" },
      { src: screenshot2, alt: "Ancient bioluminescent ruins" },
      { src: screenshot3, alt: "Crystal caverns underground" },
    ],
    details: [
      { label: "Genre", value: "Action RPG" },
      { label: "Platform", value: "PC" },
      { label: "Engine", value: "Unreal Engine 5" },
      { label: "Players", value: "Single Player" },
      { label: "Status", value: "In Development" },
      { label: "Release", value: "TBA" },
    ],
    status: "In Development",
  },
];

export const getGameBySlug = (slug: string) =>
  games.find((g) => g.slug === slug);

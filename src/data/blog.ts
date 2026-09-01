import demoAnnounceImg from "@/assets/blog-demo-announce.png";
import nextFestImg from "@/assets/blog-next-fest.png";

export interface BlogPost {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  coverImage?: string;
  tags: string[];
  content: string; // Markdown content
}

/**
 * Add new blog posts here. Most recent first.
 *
 * Template:
 * {
 *   slug: "my-post-url",
 *   title: "My Post Title",
 *   date: "2026-03-08",
 *   excerpt: "A short summary shown on the blog listing page.",
 *   tags: ["devlog", "update"],
 *   content: `
 * Your **markdown** content here.
 *   `,
 * },
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "critical-descent-available-now",
    title: "Critical Descent is Available Now!",
    date: "2026-09-01",
    excerpt:
      "Critical Descent is out now! Fly the world's most powerful rocket in a highly realistic physics simulation across 75 levels on Earth, the Moon, and Mars.",
    tags: ["announcement", "release"],
    content: `
**Critical Descent is out now!**

Fly the world's most powerful rocket in a highly realistic physics simulation.

- Fly across 75 levels
- Pilot your rocket over 3 different worlds, Earth, the Moon, and Mars
- Race your own best time on every level
- Compete on global leaderboards and try to claim the top spot

Thank you to everyone who has supported Critical Descent, and please, enjoy the game.

[Get Critical Descent on Steam](https://store.steampowered.com/app/4329160/Critical_Descent/)

*— Endless Abyss Games*
    `,
  },
  {
    slug: "critical-descent-releases-september-1st",
    title: "Critical Descent Releases September 1st",
    date: "2026-08-17",
    excerpt:
      "Critical Descent is releasing on September 1st. Get ready to pilot the world's most powerful rocket across 75 handcrafted levels, set on Earth, the Moon, and Mars. The game will release with full global leaderboard support across every level, as well as supporting the Steam Deck.",
    tags: ["announcement", "release"],
    content: `
Critical Descent is releasing on September 1st. Get ready to pilot the world's most powerful rocket across 75 handcrafted levels, set on Earth, the Moon, and Mars. The game will release with full global leaderboard support across every level, as well as supporting the Steam Deck.

[Wishlist Critical Descent](https://store.steampowered.com/app/4329160/Critical_Descent/) now so you don't miss it!

*— Endless Abyss Games*
    `,
  },
  {
    slug: "starship-13th-flight-demo-update",
    title: "Critical Descent Demo Update — Starship's 13th Flight Test",
    date: "2026-07-16",
    excerpt:
      "An update to Critical Descent's demo is now available to commemorate Starship's 13th flight test, with a preview of two off-world landing levels and several bugfixes.",
    tags: ["update", "demo"],
    content: `
An update to Critical Descent's demo is now available to commemorate Starship's 13th flight test today.

The update contains a preview of two levels in the off-world landing mode of the game, as well as bringing several small bugfixes to the demo.

[Wishlist Critical Descent](https://store.steampowered.com/app/4329160/Critical_Descent/) and [try the Demo](https://store.steampowered.com/app/4476650/Critical_Descent_Demo/).

Thank you!

*— Endless Abyss Games*
    `,
  },
  {
    slug: "leaderboard-update-live-steam-next-fest",
    title: "The Leaderboard Update is Live for Steam Next Fest!",
    date: "2026-06-15",
    excerpt:
      "Critical Descent now features global leaderboards on every level, and the ability to race the runs of record-holders to see how they did it!",
    coverImage: nextFestImg,
    tags: ["update", "demo"],
    content: `
![Critical Descent at Steam Next Fest June 2026](${nextFestImg})

Critical Descent now features global leaderboards on every level, and the ability to race the runs of record-holders to see how they did it!

## Features

**Global leaderboards on every level.**

**Ghost racing for all leaderboard scores.**

**Various minor bugfixes and improvements.**

[Wishlist Critical Descent](https://store.steampowered.com/app/4329160/Critical_Descent/) [Play the demo](https://store.steampowered.com/app/4476650/Critical_Descent_Demo/)
    `,
  },
  {
    slug: "critical-descent-steam-next-fest-june-2026",
    title: "Critical Descent Joins Steam Next Fest — June 2026",
    date: "2026-05-30",
    excerpt:
      "Critical Descent will be participating in the June 2026 Steam Next Fest! A massive demo update releases on June 15th with global leaderboards and an expanded ghost system.",
    tags: ["announcement", "demo"],
    content: `
![Critical Descent at Steam Next Fest June 2026](${nextFestImg})

Critical Descent will be participating in the June 2026 Steam Next Fest!

On June 15th, a massive update to the demo will be releasing! Here's what it contains:

**Global Leaderboards** — See where you fall compared to other players on our new leaderboards!

**An Expansion to the ghost system!** You aren't limited to racing just your own time anymore. Race the ghost of anyone on the leaderboard in the new update! Find out how the number 1 player achieved their time by racing it in real time!

[Wishlist Critical Descent](https://store.steampowered.com/app/4329160/Critical_Descent/) now and try to improve your piloting skills before the update releases!
    `,
  },
  {
    slug: "critical-descent-demo-v3-update",
    title: "Critical Descent Demo Update — Celebrating Starship V3",
    date: "2026-05-23",
    excerpt:
      "Critical Descent's demo is updating to celebrate the 12th flight of SpaceX Starship and the debut of version 3. Explore remastered levels and a visual overhaul inspired by the new Pad 2 design.",
    tags: ["update", "demo"],
    content: `
Critical Descent's demo is updating to celebrate the 12th flight of SpaceX Starship and the debut of version 3. This update includes a remaster of many of the game's levels. It also includes a visual overhaul to the textures and decorations to reflect the new pad 2 design.
    `,
  },
  {
    slug: "critical-descent-demo-april-27",
    title: "Critical Descent's Demo is releasing on April 27th!",
    date: "2026-04-27",
    excerpt:
      "Critical Descent's Demo is releasing on April 27th! Fly 10 intense missions on 2 different difficulties. Masterfully pilot the rocket for a catch in the tower's massive arms. Wishlist the game now to be notified when the demo releases!",
    tags: ["announcement", "demo"],
    content: `
![Critical Descent demo releasing April 27](${demoAnnounceImg})

Critical Descent's Demo is releasing on April 27th! Fly 10 intense missions on 2 different difficulties. Masterfully pilot the rocket for a catch in the tower's massive arms. [Wishlist the game now](https://store.steampowered.com/app/4329160/Critical_Descent/) to be notified when the demo releases!

Master the hardcore, Starship-style catch maneuver in the Critical Descent demo. Pilot massive boosters and agile upper stages across many levels. Featuring multiple difficulties, and a realistic physics system for the ultimate landing experience.

Critical Descent is a game about mastery, repetition, and the perfect execution of one of the most awe-inspiring landing maneuvers ever. Each level challenges your ability to fly the rocket all the way down for a smooth catch in the tower's arms.

Many different levels await in this demo of Critical Descent! Fly and master incredible maneuvers like the belly-flop, and catch the massive rocket in the tower's waiting arms.

Compete against yourself for the best time. Race your own best attempt as a ghost to defeat it and get a new record.

Play on your Steam Deck or your PC, with full controller and keyboard support, as well as adaptive UI and text scaling, compatible with all aspect ratios. The Critical Descent demo is optimized for all devices, from the handheld Steam Deck to ultrawide monitors.
    `,
  },
  {
    slug: "we-are-live",
    title: "WE'RE LIVE — ENDLESS ABYSS GAMES HAS A WEBSITE",
    date: "2026-03-08",
    excerpt:
      "Our website is officially online, and so is this blog. Here's what to expect from Endless Abyss Games going forward.",
    tags: ["announcement"],
    content: `
We're thrilled to announce that the official Endless Abyss Games website is now live — and you're looking at it.

This has been a long time coming. We wanted a proper site for the studio where we can share what we're working on, talk about our games, and keep you in the loop on everything happening.

## The Blog

Along with the site, we're launching this blog. This is where you'll find:

- **Dev Logs** — Deep dives into the development of Critical Descent and future projects
- **Announcements** — Release dates, demo launches, trailers, and milestones
- **Previews** — Preview in development features, art or even games

We want to be transparent about our process and share the journey with you — the good, the bad, and the explosive crash landings.

## What's Next

Critical Descent is in active development and we have a lot to show. Expect dev logs, gameplay breakdowns, and some announcements very soon.

In the meantime, feel free to explore the site, [wishlist Critical Descent on Steam](https://store.steampowered.com/app/4329160/Critical_Descent/), and check back here for updates. Expect updates about Critical Descent's demo very soon.

Thanks for being here from the start.

*— Endless Abyss Games*
    `,
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

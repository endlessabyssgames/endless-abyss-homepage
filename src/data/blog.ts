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
    slug: "critical-descent-demo-april-27",
    title: "Critical Descent's Demo is releasing on April 27th!",
    date: "2026-04-27",
    excerpt:
      "Critical Descent's Demo is releasing on April 27th! Fly 10 intense missions on 2 different difficulties. Masterfully pilot the rocket for a catch in the tower's massive arms. Wishlist the game now to be notified when the demo releases!",
    tags: ["announcement", "demo"],
    content: `
Critical Descent's Demo is releasing on April 27th! Fly 10 intense missions on 2 different difficulties. Masterfully pilot the rocket for a catch in the tower's massive arms. [Wishlist the game now](https://store.steampowered.com/app/4329160/Critical_Descent/) to be notified when the demo releases!

Master the hardcore, Starship-style catch maneuver in the Critical Descent demo. Pilot massive boosters and agile upper stages across many levels. Featuring multiple difficulties, and a realistic physics system for the ultimate landing experience.

Critical Descent is a game about mastery, repetition, and the perfect execution of one of the most awe-inspiring landing maneuvers ever. Each level challenges your ability to fly the rocket all the way down for a smooth catch in the tower's arms.

Many different levels await in this demo of Critical Descent! Fly and master incredible maneuvers like the belly-flop, and catch the massive rocket in the tower's waiting arms.

## Beat Your Best

Compete against yourself for the best time. Race your own best attempt as a ghost to defeat it and get a new record.

## Play Anywhere

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

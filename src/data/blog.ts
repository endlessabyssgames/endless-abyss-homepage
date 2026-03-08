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
    slug: "we-are-live",
    title: "We're Live — Endless Abyss Games Has a Home",
    date: "2026-03-08",
    excerpt:
      "Our website is officially online, and so is this blog. Here's what to expect from Endless Abyss Games going forward.",
    tags: ["announcement"],
    content: `
We're thrilled to announce that the official Endless Abyss Games website is now live — and you're looking at it.

This has been a long time coming. We wanted a proper home for the studio where we can share what we're working on, talk about our games, and keep you in the loop on everything happening behind the scenes.

## The Blog

Along with the site, we're launching this blog. This is where you'll find:

- **Dev Logs** — Deep dives into the development of Critical Descent and future projects
- **Announcements** — Release dates, demo launches, trailers, and milestones
- **Behind the Scenes** — Art, design, engineering, and the occasional post-mortem

We want to be transparent about our process and share the journey with you — the good, the bad, and the explosive crash landings.

## What's Next

Critical Descent is in active development and we have a lot to show. Expect dev logs, gameplay breakdowns, and some announcements very soon.

In the meantime, feel free to explore the site, [wishlist Critical Descent on Steam](https://store.steampowered.com/app/4329160/Critical_Descent/), and check back here for updates.

Thanks for being here from the start.

*— Endless Abyss Games*
    `,
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

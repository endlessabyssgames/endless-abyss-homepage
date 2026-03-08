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
 *
 * Supports headings, lists, links, images, code blocks, etc.
 *   `,
 * },
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "hello-world",
    title: "Hello World — Welcome to Our Blog",
    date: "2026-03-08",
    excerpt:
      "We're excited to launch the Endless Abyss Games blog. Follow along for development updates, behind-the-scenes insights, and announcements.",
    tags: ["announcement"],
    content: `
Welcome to the official Endless Abyss Games blog!

This is where we'll be sharing development updates, behind-the-scenes looks at our games, and studio news.

## What to Expect

- **Dev Logs** — Deep dives into the development of Critical Descent and future titles
- **Announcements** — Release dates, demo launches, and major milestones
- **Behind the Scenes** — Art, design, and engineering breakdowns

## Stay Tuned

We have a lot of exciting things in the pipeline. Follow us and check back regularly for updates.

Thanks for being here from the beginning.

*— Endless Abyss Games*
    `,
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

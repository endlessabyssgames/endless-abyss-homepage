// Generates public/blog-feed.json from src/data/blog.ts so the newsletter
// mailer can discover newly published posts without a login.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function field(block, name) {
  const re = new RegExp(`${name}:\\s*(?:\\n\\s*)?("(?:[^"\\\\]|\\\\.)*")`);
  const m = block.match(re);
  if (!m) return "";
  try {
    return JSON.parse(m[1]);
  } catch {
    return "";
  }
}

export function generateBlogFeed() {
  const src = readFileSync(path.join(root, "src/data/blog.ts"), "utf8").replace(/\r\n/g, "\n");
  const blocks = src.split(/\n\s*\{\n/).slice(1);
  const posts = [];
  for (const block of blocks) {
    const slug = field(block, "slug");
    const title = field(block, "title");
    const date = field(block, "date");
    const excerpt = field(block, "excerpt");
    if (slug && title && date) posts.push({ slug, title, date, excerpt });
  }
  writeFileSync(
    path.join(root, "public/blog-feed.json"),
    JSON.stringify({ posts }, null, 2) + "\n",
  );
  return posts.length;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(`blog-feed.json: ${generateBlogFeed()} posts`);
}

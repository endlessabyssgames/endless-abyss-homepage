import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";

const LatestPost = () => {
  const post = blogPosts[0];
  if (!post) return null;

  return (
    <section className="py-24 px-8 md:px-12 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-3">
              From the Blog
            </p>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground uppercase tracking-tight">
              Latest Post
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-xs font-display tracking-[0.15em] text-foreground/40 hover:text-foreground uppercase transition-colors duration-300 hidden sm:inline-flex items-center gap-2"
          >
            All Posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <Link to={`/blog/${post.slug}`} className="group block border border-border p-8 md:p-10 hover:border-foreground/20 transition-all duration-300">
          <div className="flex items-center gap-4 mb-5">
            <time className="text-[11px] font-display tracking-[0.15em] text-foreground/30 uppercase">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-display tracking-[0.15em] text-foreground/30 uppercase border border-border px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl md:text-2xl font-display font-bold text-foreground uppercase tracking-tight mb-4 group-hover:text-foreground/70 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-foreground/50 text-sm font-body leading-relaxed max-w-2xl mb-6">
            {post.excerpt}
          </p>
          <span className="text-xs font-display tracking-[0.15em] text-foreground/40 group-hover:text-foreground uppercase transition-colors duration-300 inline-flex items-center gap-2">
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </span>
        </Link>

        <Link
          to="/blog"
          className="mt-6 text-xs font-display tracking-[0.15em] text-foreground/40 hover:text-foreground uppercase transition-colors duration-300 sm:hidden inline-flex items-center gap-2"
        >
          All Posts
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default LatestPost;

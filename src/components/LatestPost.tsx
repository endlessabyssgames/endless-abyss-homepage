import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";

const LatestPost = () => {
  const post = blogPosts[0];
  if (!post) return null;

  return (
    <section className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <p className="text-[10px] sm:text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-2 sm:mb-3">
              From the Blog
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-foreground uppercase tracking-tight">
              Latest Post
            </h2>
          </div>
          <Link
            to="/blog"
            className="text-[10px] sm:text-xs font-display tracking-[0.15em] text-foreground/40 hover:text-foreground uppercase transition-colors duration-300 hidden sm:inline-flex items-center gap-2 group"
          >
            All Posts
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <Link to={`/blog/${post.slug}`} className="group block border border-border p-6 sm:p-8 md:p-10 hover:border-foreground/20 transition-all duration-300">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <time className="text-[10px] sm:text-[11px] font-display tracking-[0.15em] text-foreground/30 uppercase">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[10px] font-display tracking-[0.15em] text-foreground/30 uppercase border border-border px-2 py-0.5 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground uppercase tracking-tight mb-3 sm:mb-4 group-hover:text-foreground/70 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-foreground/50 text-sm font-body leading-relaxed max-w-2xl mb-4 sm:mb-6 line-clamp-3">
            {post.excerpt}
          </p>
          <span className="text-[10px] sm:text-xs font-display tracking-[0.15em] text-foreground/40 group-hover:text-foreground uppercase transition-colors duration-300 inline-flex items-center gap-2">
            Read More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </span>
        </Link>

        <Link
          to="/blog"
          className="mt-4 sm:mt-6 text-[10px] sm:text-xs font-display tracking-[0.15em] text-foreground/40 hover:text-foreground uppercase transition-colors duration-300 sm:hidden inline-flex items-center gap-2"
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

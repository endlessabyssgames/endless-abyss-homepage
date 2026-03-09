import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 section-padding-x">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] sm:text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-3 sm:mb-4">
            News &amp; Updates
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-foreground uppercase tracking-tight mb-4 sm:mb-6">
            Blog
          </h1>
          <p className="text-foreground/50 text-sm font-body leading-relaxed max-w-xl">
            Development logs, announcements, and behind-the-scenes updates from the studio.
          </p>
        </div>
      </section>

      <section className="section-padding-x pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-t border-border pt-8 sm:pt-10 group">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
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
              <Link to={`/blog/${post.slug}`} className="block">
                <h2 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-foreground uppercase tracking-tight mb-2 sm:mb-3 group-hover:text-foreground/70 transition-colors duration-300">
                  {post.title}
                </h2>
              </Link>
              <p className="text-foreground/50 text-sm font-body leading-relaxed mb-4 sm:mb-5 max-w-xl line-clamp-3">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-[10px] sm:text-xs font-display tracking-[0.15em] text-foreground/40 hover:text-foreground uppercase transition-colors duration-300 inline-flex items-center gap-2 group/link"
              >
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover/link:translate-x-1">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}

          {blogPosts.length === 0 && (
            <p className="text-foreground/30 text-sm font-body pt-10">
              No posts yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

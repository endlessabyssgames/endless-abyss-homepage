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

      <section className="pt-32 pb-16 px-8 md:px-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-4">
            News &amp; Updates
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground uppercase tracking-tight mb-6">
            Blog
          </h1>
          <p className="text-foreground/50 text-sm font-body leading-relaxed max-w-xl">
            Development logs, announcements, and behind-the-scenes updates from the studio.
          </p>
        </div>
      </section>

      <section className="px-8 md:px-12 pb-32">
        <div className="max-w-3xl mx-auto space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-t border-border pt-10">
              <div className="flex items-center gap-4 mb-4">
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
              <Link to={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl md:text-2xl font-display font-bold text-foreground uppercase tracking-tight mb-3 group-hover:text-foreground/70 transition-colors duration-300">
                  {post.title}
                </h2>
              </Link>
              <p className="text-foreground/50 text-sm font-body leading-relaxed mb-5 max-w-xl">
                {post.excerpt}
              </p>
              <Link
                to={`/blog/${post.slug}`}
                className="text-xs font-display tracking-[0.15em] text-foreground/40 hover:text-foreground uppercase transition-colors duration-300 inline-flex items-center gap-2"
              >
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

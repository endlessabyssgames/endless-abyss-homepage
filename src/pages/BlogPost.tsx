import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPostBySlug } from "@/data/blog";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || "");

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Navbar />
        <div className="text-center section-padding-x">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-xs font-display tracking-[0.15em] text-foreground/50 hover:text-foreground uppercase transition-colors duration-300">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 sm:pb-12 md:pb-16 section-padding-x">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-display tracking-[0.15em] text-foreground/40 hover:text-foreground uppercase mb-6 sm:mb-8 transition-colors duration-300 group"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M19 12H5m7-7l-7 7 7 7" />
            </svg>
            Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <time className="text-[10px] sm:text-[11px] font-display tracking-[0.15em] text-foreground/30 uppercase">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </time>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] sm:text-[10px] font-display tracking-[0.15em] text-foreground/30 uppercase border border-border px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-foreground uppercase tracking-tight mb-8 sm:mb-10">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="section-padding-x pb-20 sm:pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto prose-custom">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-base sm:text-lg font-display font-bold text-foreground uppercase tracking-tight mt-8 sm:mt-10 mb-3 sm:mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-sm sm:text-base font-display font-bold text-foreground uppercase tracking-tight mt-6 sm:mt-8 mb-2 sm:mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-foreground/50 text-sm font-body leading-relaxed mb-4 sm:mb-5">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="space-y-2 mb-5 sm:mb-6 ml-4">{children}</ul>
              ),
              li: ({ children }) => (
                <li className="text-foreground/50 text-sm font-body leading-relaxed flex items-start gap-2">
                  <span className="text-foreground/20 mt-1.5">•</span>
                  <span>{children}</span>
                </li>
              ),
              strong: ({ children }) => (
                <strong className="text-foreground/70 font-bold">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="text-foreground/40 italic">{children}</em>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 underline underline-offset-4 hover:text-foreground transition-colors duration-300"
                >
                  {children}
                </a>
              ),
              hr: () => <hr className="border-border my-8 sm:my-10" />,
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="w-full h-auto border border-border my-6 sm:my-8"
                />
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-foreground/20 pl-4 sm:pl-5 my-5 sm:my-6 italic text-foreground/40">
                  {children}
                </blockquote>
              )
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;

import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-40 pb-32 px-8 md:px-12 flex flex-col items-center justify-center min-h-[70vh]">
        <p className="text-xs font-display tracking-[0.2em] text-foreground/40 uppercase mb-4">
          Error
        </p>
        <h1 className="text-6xl md:text-8xl font-bold font-display text-foreground uppercase tracking-tight mb-6">
          404
        </h1>
        <p className="text-foreground/50 text-sm font-body mb-10">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/30 text-foreground text-xs font-display tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-all duration-300"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5m7-7l-7 7 7 7" />
          </svg>
          Back to Home
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCallback, useState } from "react";
import studioLogo from "@/assets/studio-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAboutClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setMenuOpen(false);
      if (location.pathname === "/") {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    },
    [location.pathname, navigate]
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background to-transparent">
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img src={studioLogo} alt="Endless Abyss Games" className="w-10 h-10 object-contain" />
          <span className="font-display font-bold text-sm tracking-[0.2em] text-foreground uppercase hidden sm:inline">
            ENDLESS ABYSS GAMES
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/games/critical-descent" className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase">
            Games
          </Link>
          <Link to="/blog" className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase">
            Blog
          </Link>
          <a
            href="/#about"
            onClick={handleAboutClick}
            className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
          >
            About
          </a>
          <Link to="/contact" className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase">
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border px-6 py-6 flex flex-col gap-5">
          <Link
            to="/games/critical-descent"
            onClick={() => setMenuOpen(false)}
            className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
          >
            Games
          </Link>
          <Link
            to="/blog"
            onClick={() => setMenuOpen(false)}
            className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
          >
            Blog
          </Link>
          <a
            href="/#about"
            onClick={handleAboutClick}
            className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
          >
            About
          </a>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

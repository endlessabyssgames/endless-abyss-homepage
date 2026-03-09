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
      <div className="flex items-center justify-between section-padding-x py-4 sm:py-5">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group" onClick={() => setMenuOpen(false)}>
          <img src={studioLogo} alt="Endless Abyss Games" className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display font-bold text-[10px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-foreground uppercase hidden sm:inline transition-colors duration-300 group-hover:text-foreground/80">
            ENDLESS ABYSS GAMES
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <Link to="/games" className="text-[10px] lg:text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase relative group">
            Games
            <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
          </Link>
          <Link to="/blog" className="text-[10px] lg:text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase relative group">
            Blog
            <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
          </Link>
          <a
            href="/#about"
            onClick={handleAboutClick}
            className="text-[10px] lg:text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
          </a>
          <Link to="/contact" className="text-[10px] lg:text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-full h-px bg-foreground origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 transition-transform duration-300 active:scale-95"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-background/95 backdrop-blur-sm border-t border-border overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-padding-x py-6 flex flex-col gap-5">
          <Link
            to="/games"
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
      </div>
    </nav>
  );
};

export default Navbar;

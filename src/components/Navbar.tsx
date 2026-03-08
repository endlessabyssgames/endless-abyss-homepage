import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCallback } from "react";
import studioLogo from "@/assets/studio-logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAboutClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 bg-gradient-to-b from-background to-transparent">
      <Link to="/" className="flex items-center gap-3">
        <img src={studioLogo} alt="Endless Abyss Games" className="w-10 h-10 object-contain" />
        <span className="font-display font-bold text-sm tracking-[0.2em] text-foreground uppercase">
          Endless Abyss
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link to="/games/critical-descent" className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors duration-300 uppercase">
          Games
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
    </nav>
  );
};

export default Navbar;

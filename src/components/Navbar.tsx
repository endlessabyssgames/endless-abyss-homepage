const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-5 bg-gradient-to-b from-background to-transparent">
      {/* Logo placeholder */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center">
          <span className="text-xs font-display font-bold text-foreground/50">LOGO</span>
        </div>
        <span className="font-display font-bold text-sm tracking-[0.2em] text-foreground uppercase">
          Endless Abyss
        </span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#featured-game" className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors uppercase">
          Games
        </a>
        <a href="#about" className="text-xs font-display tracking-[0.15em] text-foreground/70 hover:text-foreground transition-colors uppercase">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

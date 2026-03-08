const Footer = () => {
  return (
    <footer className="py-8 px-8 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-xs tracking-[0.2em] text-foreground/40 uppercase">
          Endless Abyss Games
        </span>
        <p className="text-xs text-foreground/30">
          © {new Date().getFullYear()} Endless Abyss Games. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display font-semibold text-foreground tracking-wide">
          ENDLESS ABYSS GAMES
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Endless Abyss Games. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

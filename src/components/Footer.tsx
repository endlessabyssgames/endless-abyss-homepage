import { Link } from "react-router-dom";

const socialLinks = [
  {
    label: "X",
    href: "#", // Replace with your X/Twitter URL
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@EndlessAbyssGames",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
        <path d="M9.545 15.568V8.432L15.818 12z" fill="hsl(var(--background))" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="py-8 px-8 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-xs tracking-[0.2em] text-foreground/40 uppercase">
          Endless Abyss Games
        </span>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-foreground/30 hover:text-foreground transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
          <Link
            to="/contact"
            aria-label="Contact"
            className="text-foreground/30 hover:text-foreground transition-colors duration-300"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </Link>
        </div>
        <p className="text-xs text-foreground/30">
          © {new Date().getFullYear()} Endless Abyss Games. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
